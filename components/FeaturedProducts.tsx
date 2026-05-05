'use client';

import { useState, useRef, useEffect } from 'react';
import { products as staticProducts } from '@/lib/products';
import ProductCard from './ProductCard';

interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
}

interface Page {
  _id: string;
  name: string;
  slug: string;
  content?: string;
}

interface FeaturedProductsProps {
  page?: Page | null;
  posts?: Post[];
}

const categoryFilters = [
  { label: 'БҮГД', value: '' },
  { label: 'SWITCHBOARD', value: 'switchboard' },
  { label: 'SOLAR SYSTEM', value: 'solar' },
  { label: 'CABLE', value: 'cable' },
  { label: 'BATTERY TOOLS', value: 'battery' },
  { label: 'LV & MV POWER', value: 'power' },
  { label: 'LIGHTING DESIGN', value: 'lighting' },
  { label: 'POWER CONNECTION', value: 'connection' },
  { label: 'AUTOMATION CONTROL', value: 'automation' },
  { label: 'ХЯМДРАЛТАЙ', value: 'sale' },
];

export default function FeaturedProducts({ page, posts = [] }: FeaturedProductsProps) {
  const [activeCategory, setActiveCategory] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const filterProducts = (category: string) => {
    if (category === activeCategory) return;
    
    setIsAnimating(true);
    setActiveCategory(category);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  const getFilteredProducts = () => {
    if (activeCategory === 'sale') {
      return staticProducts.filter(p => p.discount > 0);
    } else if (activeCategory) {
      return staticProducts.filter(p => p.category === activeCategory);
    }
    return staticProducts;
  };

  const displayPosts = posts.length > 0 
    ? posts.map((post, index) => ({
        id: index + 1,
        name: post.title,
        code: post.slug.toUpperCase(),
        stock: 1453,
        price: 1250000,
        originalPrice: 1500000,
        discount: 20,
        category: 'general',
        image: null
      }))
    : getFilteredProducts();

  return (
    <section className="featured-products" id="products">
      <div className="container">
        <h3 className="section-label">{page?.name || 'ОНЦЛОХ БҮТЭЭГДЭХҮҮН'}</h3>
        
        {page?.content && (
          <div 
            dangerouslySetInnerHTML={{ __html: page.content }}
            style={{ marginBottom: '20px' }}
          />
        )}

        <div className="category-filters">
          {categoryFilters.map((cat) => (
            <button
              key={cat.value}
              className={`filter-btn ${activeCategory === cat.value ? 'active' : ''}`}
              onClick={() => filterProducts(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        
        <div 
          className={`products-grid ${isAnimating ? 'filtering' : ''}`} 
          id="featuredGrid"
          ref={gridRef}
        >
          {displayPosts.map((product, index) => (
            <ProductCard key={`${product.id}-${index}`} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

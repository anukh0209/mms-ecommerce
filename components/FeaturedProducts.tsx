'use client';

import { useState } from 'react';
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

export default function FeaturedProducts({ page, posts = [] }: FeaturedProductsProps) {
  const [filteredProducts, setFilteredProducts] = useState(staticProducts);

  const filterProducts = (category: string) => {
    if (category === 'sale') {
      setFilteredProducts(staticProducts.filter(p => p.discount > 0));
    } else if (category) {
      setFilteredProducts(staticProducts.filter(p => p.category === category));
    } else {
      setFilteredProducts(staticProducts);
    }
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
    : filteredProducts;

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
        
        <div className="products-grid" id="featuredGrid">
          {displayPosts.map((product, index) => (
            <ProductCard key={`${product.id}-${index}`} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { solarProducts } from '@/lib/products';
import ProductCard from './ProductCard';

interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
}

interface SolarProductsProps {
  posts?: Post[];
}

const solarCategories = [
  { label: 'БҮТЭЭГДЭХҮҮН', value: 'all' },
  { label: 'НАРНЫ ХАВТАН', value: 'solar-panel' },
  { label: 'ИНВЕРТЕР', value: 'inverter' },
  { label: 'БАТАРЕЙ СИСТЕМ', value: 'battery' },
];

export default function SolarProducts({ posts = [] }: SolarProductsProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);

  const filterProducts = (category: string) => {
    if (category === activeCategory) return;
    
    setIsAnimating(true);
    setActiveCategory(category);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  const getFilteredProducts = () => {
    if (activeCategory === 'all') {
      return solarProducts;
    }
    return solarProducts.filter(p => p.category === activeCategory);
  };

  const layers = [
    'Aluminium Frame',
    'Tempered Glass',
    'Encapsulant - EVA',
    'Solar cells',
    'Encapsulant - EVA',
    'Back sheet',
    'Junction Box'
  ];

  const displayProducts = posts.length > 0
    ? posts.slice(0, 6).map((post, index) => ({
        id: index + 100,
        name: post.title,
        code: post.slug.toUpperCase(),
        stock: 1453,
        price: 1250000,
        originalPrice: 1500000,
        discount: 20,
        category: 'solar',
        image: null
      }))
    : getFilteredProducts();

  return (
    <section className="solar-products" id="solar-products">
      <div className="container">
        <div className="products-layout">
          <div className="products-sidebar">
            {solarCategories.map((cat) => (
              <button
                key={cat.value}
                className={`${cat.value === 'all' ? 'btn-green' : 'btn-white'} ${activeCategory === cat.value ? 'active' : ''}`}
                onClick={() => filterProducts(cat.value)}
              >
                {cat.label}
                {cat.value !== 'all' && <span>▼</span>}
              </button>
            ))}
          </div>
          <div className="products-main">
            <div className={`products-grid small ${isAnimating ? 'filtering' : ''}`} id="solarGrid">
              {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="product-detail-image">
              <div className="layered-image">
                {layers.map((layer, index) => (
                  <div className="layer" key={index}>{layer}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

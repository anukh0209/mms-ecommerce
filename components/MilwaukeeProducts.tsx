'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import MilwaukeeProductCard from './MilwaukeeProductCard';
import { products as staticProducts } from '@/lib/products';

interface Category {
  label: string;
  value: string;
  icon: string;
}

const categories: Category[] = [
  { label: 'POWER TOOLS', value: 'power-tools', icon: '🔌' },
  { label: 'HAND TOOLS', value: 'hand-tools', icon: '🔧' },
  { label: 'ACCESSORIES', value: 'accessories', icon: '⚙️' },
  { label: 'STORAGE', value: 'storage', icon: '📦' },
  { label: 'WORK GEAR', value: 'work-gear', icon: '⛑️' },
  { label: 'BATTERIES', value: 'battery', icon: '🔋' },
];

export default function MilwaukeeProducts() {
  const [activeCategory, setActiveCategory] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCategoryClick = useCallback((categoryValue: string) => {
    const newCategory = activeCategory === categoryValue ? '' : categoryValue;
    setIsAnimating(true);
    setActiveCategory(newCategory);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);

    // Scroll to products
    const productsSection = document.getElementById('products');
    if (productsSection) {
      const headerOffset = 120;
      const elementPosition = productsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [activeCategory]);

  const filteredProducts = activeCategory
    ? staticProducts.filter(p => p.category === activeCategory || (activeCategory === 'power-tools' && ['battery', 'switchboard'].includes(p.category)))
    : staticProducts;

  return (
    <>
      {/* Category Section */}
      <section className="category-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">АНГИЛАЛУУД</h2>
          </div>
          <div className="category-grid">
            {categories.map((cat) => (
              <div
                key={cat.value}
                className={`category-card ${activeCategory === cat.value ? 'active' : ''}`}
                onClick={() => handleCategoryClick(cat.value)}
                style={activeCategory === cat.value ? { borderColor: '#D31145' } : undefined}
              >
                <div className="category-card-icon">{cat.icon}</div>
                <div className="category-card-title">{cat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section" id="products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">HEATER NEW ARRIVAL</h2>
            <Link href="/products" className="section-link">БҮГДИЙГ ХАРАХ →</Link>
          </div>

          <div className={`products-grid ${isAnimating ? 'filtering' : ''}`}>
            {filteredProducts.map((product) => (
              <MilwaukeeProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

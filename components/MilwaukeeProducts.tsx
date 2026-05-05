'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';
import { products as allProducts } from '@/lib/products';
import { useLanguage } from '@/lib/language-context';
import { Sun, CircuitBoard, Battery, Cable, Building2, Pickaxe } from 'lucide-react';

interface CategoryDef {
  id: string;
  label: string;
  value: string;
  icon: React.ReactNode;
}

export default function ProductSections() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('');

  const categories: CategoryDef[] = [
    { id: 'solar', label: t.solar, value: 'solar', icon: <Sun size={24} /> },
    { id: 'switchboard', label: t.switchboard, value: 'switchboard', icon: <CircuitBoard size={24} /> },
    { id: 'battery', label: t.battery, value: 'battery', icon: <Battery size={24} /> },
    { id: 'cable', label: t.cable, value: 'cable', icon: <Cable size={24} /> },
    { id: 'construction', label: t.construction, value: 'construction', icon: <Building2 size={24} /> },
    { id: 'mining', label: t.mining, value: 'mining', icon: <Pickaxe size={24} /> },
  ];

  const getProductsByCategory = (categoryValue: string) => {
    return allProducts.filter(p => p.category === categoryValue);
  };

  const handleCategoryClick = (categoryId: string) => {
    if (activeFilter === categoryId) {
      setActiveFilter('');
    } else {
      setActiveFilter(categoryId);
    }
    
    const sectionId = `section-${categoryId}`;
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Categories */}
      <section className="category-section" id="categories">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t.categories}</h2>
          </div>
          <div className="category-grid">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`category-card ${activeFilter === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryClick(cat.id)}
              >
                <div className="category-icon">{cat.icon}</div>
                <div className="category-title">{cat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Sections by Category */}
      {categories.map((cat, index) => {
        const catProducts = getProductsByCategory(cat.value);
        if (catProducts.length === 0 && activeFilter && activeFilter !== cat.id) return null;
        if (activeFilter && activeFilter !== cat.id) return null;

        return (
          <section
            key={cat.id}
            className="product-section"
            id={`section-${cat.id}`}
            style={{ background: index % 2 === 0 ? 'var(--white)' : 'var(--gray-50)' }}
          >
            <div className="container">
              <div className="product-section-header">
                <div className="product-section-icon">{cat.icon}</div>
                <h2 className="product-section-title">{cat.label}</h2>
              </div>
              
              {catProducts.length > 0 ? (
                <div className="products-grid">
                  {catProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--gray-400)' }}>
                  <p style={{ fontSize: '18px', fontWeight: '600' }}>Бүтээгдэхүүн олдсонгүй</p>
                  <p style={{ marginTop: '8px' }}>Тун удахгүй нэмэгдэнэ</p>
                </div>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}

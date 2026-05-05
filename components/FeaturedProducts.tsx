'use client';

import { useState } from 'react';
import { products as allProducts } from '@/lib/products';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const filterProducts = (category: string) => {
    if (category === 'sale') {
      setFilteredProducts(allProducts.filter(p => p.discount > 0));
    } else if (category) {
      setFilteredProducts(allProducts.filter(p => p.category === category));
    } else {
      setFilteredProducts(allProducts);
    }
  };

  return (
    <section className="featured-products" id="products">
      <div className="container">
        <h3 className="section-label">ОНЦЛОХ БҮТЭЭГДЭХҮҮН</h3>
        <div className="products-grid" id="featuredGrid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

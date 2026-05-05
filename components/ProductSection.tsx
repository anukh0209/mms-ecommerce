'use client';

import { useState, useCallback } from 'react';
import CategoryIcons from '@/components/CategoryIcons';
import FeaturedProducts from '@/components/FeaturedProducts';

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

interface ProductSectionProps {
  page?: Page | null;
  posts?: Post[];
}

export default function ProductSection({ page, posts = [] }: ProductSectionProps) {
  const [activeCategory, setActiveCategory] = useState('');

  const handleCategorySelect = useCallback((category: string) => {
    setActiveCategory(category);
    
    // Smooth scroll to products section
    const productsSection = document.getElementById('products');
    if (productsSection) {
      const headerOffset = 100;
      const elementPosition = productsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <>
      <CategoryIcons 
        activeCategory={activeCategory}
        onCategorySelect={handleCategorySelect}
      />
      <FeaturedProducts 
        page={page} 
        posts={posts}
        activeCategory={activeCategory}
      />
    </>
  );
}

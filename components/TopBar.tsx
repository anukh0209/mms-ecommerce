'use client';

import { Phone, Mail, ShoppingCart } from 'lucide-react';

export default function TopBar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-left">
          <span><Phone size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '5px' }} /> 7711-1999</span>
          <span><Mail size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '5px' }} /> sales@source.mn</span>
        </div>
        <div className="top-bar-right">
          <a onClick={() => scrollToSection('home')}>Home</a>
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('products')}>Products</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
          <a className="cart-link"><ShoppingCart size={16} style={{ display: 'inline', verticalAlign: 'middle' }} /></a>
        </div>
      </div>
    </div>
  );
}

'use client';

import { Phone, Mail, ShoppingCart } from 'lucide-react';

interface MenuItem {
  _id: string;
  label: string;
  url: string;
  order: number;
}

interface TopBarProps {
  headerMenus?: MenuItem[];
}

export default function TopBar({ headerMenus = [] }: TopBarProps) {
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

  const getSectionId = (url: string) => {
    if (url === '/') return 'home';
    return url.replace('/', '');
  };

  const defaultMenus = [
    { label: 'Home', url: '#home' },
    { label: 'About', url: '#about' },
    { label: 'Products', url: '#products' },
    { label: 'Contact', url: '#contact' },
  ];

  const menus = headerMenus.length > 0 
    ? headerMenus.sort((a, b) => a.order - b.order)
    : defaultMenus.map((m, i) => ({ _id: String(i), label: m.label, url: m.url, order: i }));

  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-left">
          <span><Phone size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '5px' }} /> 7711-1999</span>
          <span><Mail size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '5px' }} /> sales@source.mn</span>
        </div>
        <div className="top-bar-right">
          {menus.map((menu) => (
            <a 
              key={menu._id} 
              onClick={() => scrollToSection(getSectionId(menu.url))}
              style={{ cursor: 'pointer' }}
            >
              {menu.label}
            </a>
          ))}
          <a className="cart-link" style={{ cursor: 'pointer' }}>
            <ShoppingCart size={16} style={{ display: 'inline', verticalAlign: 'middle' }} />
          </a>
        </div>
      </div>
    </div>
  );
}

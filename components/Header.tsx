'use client';

import { useState, useRef, useEffect } from 'react';
import { Grid3X3, ChevronDown, Search, Headset, MessageSquare, Percent } from 'lucide-react';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    setDropdownOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const categories = [
    { name: 'Switchboard', cat: 'switchboard' },
    { name: 'Solar system', cat: 'solar' },
    { name: 'Cable', cat: 'cable' },
    { name: 'Battery tools', cat: 'battery' },
    { name: 'LV & MV power transmission', cat: 'power' },
    { name: 'Lighting design', cat: 'lighting' },
    { name: 'Power connection', cat: 'connection' },
    { name: 'Automation control', cat: 'automation' },
  ];

  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <div className="logo-circle">MMS</div>
          <div className="logo-text">
            <div>THE FUTURE IS</div>
            <div>ELECTRIC</div>
          </div>
        </div>
        
        <div className="header-center">
          <div className="categories-dropdown" ref={dropdownRef}>
            <button id="catDropdownBtn" onClick={() => setDropdownOpen(!dropdownOpen)}>
              <Grid3X3 size={16} />
              <span>Ангилалууд</span>
              <ChevronDown size={16} />
            </button>
            <div className={`dropdown-menu ${dropdownOpen ? 'active' : ''}`} id="catDropdownMenu">
              {categories.map((cat) => (
                <a key={cat.cat} onClick={() => scrollToSection('products')}>
                  {cat.name}
                </a>
              ))}
              <a onClick={() => scrollToSection('products')} className="sale-item">
                <span>Хямдралтай бүтээгдэхүүн</span>
                <span className="sale-badge">SALE</span>
              </a>
            </div>
          </div>
          
          <div className="search-bar">
            <input type="text" placeholder="Хайх зүйлсийн нэрийг бичнэ үү ..." />
            <button><Search size={16} /></button>
          </div>
        </div>
        
        <div className="header-actions">
          <div className="side-icons">
            <button className="icon-btn"><Headset size={18} /></button>
            <button className="icon-btn"><MessageSquare size={18} /></button>
            <button className="icon-btn sale-icon"><Percent size={18} /></button>
          </div>
        </div>
      </div>
    </header>
  );
}

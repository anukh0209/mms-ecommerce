'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, X, Heart, LogOut } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { useAuth } from '@/lib/auth-context';
import { useToast } from '@/lib/toast-context';
import { useLanguage } from '@/lib/language-context';
import LanguageSwitcher from './LanguageSwitcher';

export default function MilwaukeeHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const { showToast } = useToast();
  const { t } = useLanguage();

  const handleCartClick = () => {
    if (!isAuthenticated) {
      showToast(t.loginRequiredCart, 'error');
      return;
    }
    setIsCartOpen(true);
  };

  const handleLogout = () => {
    logout();
    showToast(t.logoutSuccess, 'info');
  };

  const navLinks = [
    { name: t.powerTools, href: '#products' },
    { name: t.handTools, href: '#products' },
    { name: t.accessories, href: '#products' },
    { name: t.storage, href: '#products' },
    { name: t.workGear, href: '#products' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        const headerOffset = 120;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="milwaukee-header">
      {/* Top Bar */}
      <div className="header-top">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
            <Link href="/where-to-buy" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}>
              {t.showroom}
            </Link>
            <Link href="#contact" onClick={() => scrollToSection('#contact')} style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}>
              {t.contactUs}
            </Link>
            <Link href="/registration" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}>
              {t.registration}
            </Link>
          </div>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="container">
          <Link href="/" className="milwaukee-logo">
            <div>
              <div className="milwaukee-logo-text">MMS</div>
              <div className="milwaukee-logo-sub">THE FUTURE IS ELECTRIC</div>
            </div>
          </Link>

          <div className="header-search">
            <input type="text" placeholder={t.search + '...'} />
            <button onClick={() => showToast('Хайлт: ' + t.search, 'info')}>
              <Search size={18} />
            </button>
          </div>

          <div className="header-actions">
            <button 
              className="header-action-btn" 
              onClick={() => showToast(t.wishlist + ' - Тун удахгүй', 'info')}
            >
              <Heart size={22} />
              <span>{t.wishlist}</span>
            </button>

            <button className="header-action-btn" onClick={handleCartClick}>
              <div style={{ position: 'relative' }}>
                <ShoppingCart size={22} />
                {totalItems > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    background: 'var(--white)',
                    color: '#E53935',
                    fontSize: '11px',
                    fontWeight: '900',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                  }}>
                    {totalItems}
                  </span>
                )}
              </div>
              <span>{t.cart}</span>
            </button>

            {isAuthenticated && user ? (
              <button className="header-action-btn" onClick={handleLogout}>
                <LogOut size={22} />
                <span>{t.logout}</span>
              </button>
            ) : (
              <Link href="/login" className="header-action-btn">
                <User size={22} />
                <span>{t.account}</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="milwaukee-nav">
        <div className="container">
          <button 
            className="nav-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            <span>{t.menu}</span>
          </button>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.8)',
            zIndex: 9998,
            padding: '20px'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            style={{
              background: 'var(--white)',
              maxWidth: '400px',
              margin: '0 auto',
              padding: '25px',
              borderRadius: '16px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
              <span style={{ color: '#E53935', fontSize: '22px', fontWeight: '900' }}>MENU</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                style={{ background: 'none', border: 'none', color: '#333', cursor: 'pointer', padding: '8px' }}
              >
                <X size={24} />
              </button>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  display: 'block',
                  padding: '16px 0',
                  color: '#333',
                  textDecoration: 'none',
                  borderBottom: '1px solid #eee',
                  fontSize: '16px',
                  fontWeight: '700',
                  textTransform: 'uppercase'
                }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
            <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '2px solid #eee' }}>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

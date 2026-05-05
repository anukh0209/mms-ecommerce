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

  return (
    <header className="milwaukee-header">
      {/* Top Bar */}
      <div className="header-top">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link href="/where-to-buy" style={{ color: '#ccc', textDecoration: 'none', fontSize: '12px' }}>
              {t.showroom}
            </Link>
            <Link href="/contact" style={{ color: '#ccc', textDecoration: 'none', fontSize: '12px' }}>
              {t.contactUs}
            </Link>
            <Link href="/registration" style={{ color: '#ccc', textDecoration: 'none', fontSize: '12px' }}>
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
            <button>
              <Search size={18} />
            </button>
          </div>

          <div className="header-actions">
            <Link href="/wishlist" className="header-action-btn">
              <Heart size={22} />
              <span>{t.wishlist}</span>
            </Link>

            <button className="header-action-btn" onClick={handleCartClick}>
              <div style={{ position: 'relative' }}>
                <ShoppingCart size={22} />
                {totalItems > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    background: '#D31145',
                    color: 'white',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {totalItems}
                  </span>
                )}
              </div>
              <span>{t.cart}</span>
            </button>

            {isAuthenticated && user ? (
              <div className="header-action-btn" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                <LogOut size={22} />
                <span>{t.logout}</span>
              </div>
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
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          zIndex: 9998,
          padding: '20px'
        }}>
          <div style={{
            background: '#1a1a1a',
            maxWidth: '400px',
            margin: '0 auto',
            padding: '20px',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ color: '#D31145', fontSize: '20px', fontWeight: 'bold' }}>MENU</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
              >
                <X size={24} />
              </button>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  display: 'block',
                  padding: '15px 0',
                  color: 'white',
                  textDecoration: 'none',
                  borderBottom: '1px solid #333',
                  fontSize: '16px',
                  fontWeight: '600'
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

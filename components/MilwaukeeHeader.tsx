'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, X, LogOut } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { useAuth } from '@/lib/auth-context';
import { useToast } from '@/lib/toast-context';
import { useLanguage } from '@/lib/language-context';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
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
    { name: t.workGear, href: '#section-workgear' },
    { name: t.powerTools, href: '#section-powertools' },
  ];

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-main">
        <div className="container">
          <Link href="/" className="header-logo">
            <div className="logo-icon">M</div>
            <div className="logo-text">
              <span className="logo-brand">MMS</span>
              <span className="logo-tagline">The Future Is Electric</span>
            </div>
          </Link>

          <div className="header-search">
            <input type="text" placeholder={t.search + '...'} />
            <button onClick={() => showToast(t.search + ' - ' + 'Тун удахгүй', 'info')} aria-label={t.search}>
              <Search size={18} />
            </button>
          </div>

          <div className="header-actions">
            <LanguageSwitcher />
            
            <button className="header-btn" onClick={handleCartClick}>
              <ShoppingCart size={20} />
              <span>{t.cart}</span>
              {totalItems > 0 && <span className="badge">{totalItems}</span>}
            </button>

            {isAuthenticated && user ? (
              <button className="header-btn" onClick={handleLogout}>
                <LogOut size={20} />
                <span>{t.logout}</span>
              </button>
            ) : (
              <Link href="/login" className="header-btn primary">
                <User size={20} />
                <span>{t.account}</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      <nav className="site-nav">
        <div className="container">
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 9998 }} onClick={() => setMobileMenuOpen(false)}>
          <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '280px', background: 'var(--white)', padding: '24px', boxShadow: 'var(--shadow-xl)' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <span style={{ fontSize: '22px', fontWeight: '900', color: 'var(--primary)' }}>MMS</span>
              <button onClick={() => setMobileMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}>
                <X size={24} />
              </button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }} style={{ padding: '14px 16px', color: 'var(--gray-800)', textDecoration: 'none', fontWeight: '700', fontSize: '15px', borderRadius: '10px', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gray-100)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

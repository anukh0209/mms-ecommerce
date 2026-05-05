'use client';

import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>MMS</h3>
            <p>The Future Is Electric. Professional electrical products supplier for Mining, Construction and Energy sector of Mongolia.</p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t.products}</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('section-power'); }}>{t.powerTools}</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('section-hand'); }}>{t.handTools}</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('section-accessories'); }}>{t.accessories}</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('section-storage'); }}>{t.storage}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t.company}</h4>
            <ul>
              <li><a href="#" onClick={(e) => e.preventDefault()}>{t.aboutUs}</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>{t.contactUs}</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>{t.whereToBuy}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t.contactInfo}</h4>
            <ul>
              <li><span style={{ color: '#9ca3af' }}>{t.phoneValue}</span></li>
              <li><span style={{ color: '#9ca3af' }}>{t.emailValue}</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>{t.copyright}</p>
          <div className="footer-bottom-links">
            <a href="#" onClick={(e) => e.preventDefault()}>{t.terms}</a>
            <a href="#" onClick={(e) => e.preventDefault()}>{t.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

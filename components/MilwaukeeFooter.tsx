'use client';

import Link from 'next/link';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function MilwaukeeFooter() {
  const { t } = useLanguage();

  const productLinks = [
    { name: t.powerTools, href: '#products' },
    { name: t.handTools, href: '#products' },
    { name: t.accessories, href: '#products' },
    { name: t.storage, href: '#products' },
    { name: t.workGear, href: '#products' },
  ];

  const companyLinks = [
    { name: t.aboutUs, href: '#' },
    { name: t.contactUs, href: '#contact' },
    { name: t.whereToBuy, href: '#' },
    { name: t.terms, href: '#' },
    { name: t.privacy, href: '#' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="milwaukee-footer">
      <div className="container">
        <div className="footer-grid-milwaukee">
          {/* Products */}
          <div className="footer-col">
            <h4>{t.products}</h4>
            <ul>
              {productLinks.map((link) => (
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

          {/* Company */}
          <div className="footer-col">
            <h4>{t.company}</h4>
            <ul>
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4>{t.contactInfo}</h4>
            <div className="distributor-card" style={{ padding: '20px' }}>
              <h5>MMS LLC</h5>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                <MapPin size={16} style={{ color: '#E53935', marginTop: '3px', flexShrink: 0 }} />
                <p>{t.addressValue}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Phone size={16} style={{ color: '#E53935', flexShrink: 0 }} />
                <p>{t.phoneValue}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} style={{ color: '#E53935', flexShrink: 0 }} />
                <p>{t.emailValue}</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="footer-col">
            <h4>{t.social}</h4>
            <p style={{ color: '#999', fontSize: '14px', marginBottom: '20px', lineHeight: '1.6' }}>
              {t.followUs}
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom-milwaukee">
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

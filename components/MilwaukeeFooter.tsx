'use client';

import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function MilwaukeeFooter() {
  const { t } = useLanguage();

  const productLinks = [
    { name: t.powerTools, href: '#' },
    { name: t.handTools, href: '#' },
    { name: t.accessories, href: '#' },
    { name: t.storage, href: '#' },
    { name: t.workGear, href: '#' },
    { name: 'Batteries & Chargers', href: '#' },
  ];

  const companyLinks = [
    { name: t.aboutUs, href: '#' },
    { name: t.contactUs, href: '#contact' },
    { name: t.whereToBuy, href: '#' },
    { name: t.terms, href: '#' },
    { name: t.privacy, href: '#' },
  ];

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
                  <Link href={link.href}>{link.name}</Link>
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
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4>{t.contactInfo}</h4>
            <div className="distributor-card" style={{ padding: 0 }}>
              <h5>MMS LLC</h5>
              <p>{t.addressValue}</p>
              <p>{t.phoneValue}</p>
              <p>{t.emailValue}</p>
            </div>
          </div>

          {/* Social */}
          <div className="footer-col">
            <h4>{t.social}</h4>
            <p style={{ color: '#999', fontSize: '13px', marginBottom: '15px' }}>
              {t.followUs}
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram size={18} />
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
            <Link href="#">{t.terms}</Link>
            <Link href="#">{t.privacy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

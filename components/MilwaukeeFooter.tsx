import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

export default function MilwaukeeFooter() {
  const productLinks = [
    { name: 'Power Tools', href: '#' },
    { name: 'Hand Tools', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'Storage', href: '#' },
    { name: 'Work Gear', href: '#' },
    { name: 'Batteries & Chargers', href: '#' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Where To Buy', href: '#' },
    { name: 'Terms and Conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ];

  return (
    <footer className="milwaukee-footer">
      <div className="container">
        <div className="footer-grid-milwaukee">
          {/* Products */}
          <div className="footer-col">
            <h4>БҮТЭЭГДЭХҮҮН</h4>
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
            <h4>КОМПАНИ</h4>
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
            <h4>ХОЛБОГДОХ</h4>
            <div className="distributor-card" style={{ padding: 0 }}>
              <h5>MMS LLC</h5>
              <p>
                MMS Green Building, Archivist street 512,
                8th khoroo, Khan-Uul district, Ulaanbaatar 17101, Mongolia
              </p>
              <p>+976-7711-1999, 89664141</p>
              <p>sales@source.mn</p>
            </div>
          </div>

          {/* Social */}
          <div className="footer-col">
            <h4>СОШИАЛ</h4>
            <p style={{ color: '#999', fontSize: '13px', marginBottom: '15px' }}>
              Биднийг дагаарай
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
          <p>© 2026 MMS - The Future Is Electric. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="#">Terms and Conditions of Use</Link>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

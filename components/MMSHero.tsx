'use client';

import { useLanguage } from '@/lib/language-context';
import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToProducts = () => {
    const element = document.getElementById('categories');
    if (element) {
      const headerOffset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-badge">
          <Zap size={16} />
          Professional Electrical Solutions
        </div>
        <h1>
          {t.heroTitle} <span>{t.heroSubtitle}</span>
        </h1>
        <p>{t.heroDescription}</p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={scrollToProducts}>
            {t.viewProducts}
            <ArrowRight size={18} />
          </button>
          <button className="btn btn-outline" onClick={scrollToProducts}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

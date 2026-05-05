'use client';

import { useLanguage } from '@/lib/language-context';

export default function MilwaukeeHero() {
  const { t } = useLanguage();

  return (
    <section className="hero-banner">
      <div style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #333 50%, #1a1a1a 100%)',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(211, 17, 69, 0.03) 35px, rgba(211, 17, 69, 0.03) 70px)',
        }} />
        
        <div className="hero-content" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            fontSize: '72px',
            fontWeight: '900',
            color: '#D31145',
            marginBottom: '20px',
            letterSpacing: '4px',
            textTransform: 'uppercase'
          }}>
            {t.heroTitle}
          </div>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '700',
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '3px'
          }}>
            {t.heroSubtitle}
          </h1>
          <p style={{
            fontSize: '18px',
            marginBottom: '30px',
            color: '#ccc',
            maxWidth: '600px'
          }}>
            {t.heroDescription}
          </p>
          <a href="#products" className="hero-btn">
            {t.viewProducts}
          </a>
        </div>
      </div>
    </section>
  );
}

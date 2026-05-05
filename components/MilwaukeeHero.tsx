export default function MilwaukeeHero() {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <div style={{
          fontSize: '80px',
          fontWeight: '900',
          color: 'var(--white)',
          marginBottom: '15px',
          letterSpacing: '6px',
          textTransform: 'uppercase',
          textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
        }}>
          MMS
        </div>
        <h1 style={{
          fontSize: '28px',
          fontWeight: '700',
          marginBottom: '25px',
          textTransform: 'uppercase',
          letterSpacing: '4px',
          color: 'rgba(255,255,255,0.95)',
        }}>
          THE FUTURE IS ELECTRIC
        </h1>
        <p style={{
          fontSize: '20px',
          marginBottom: '40px',
          color: 'rgba(255,255,255,0.9)',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: '1.6',
        }}>
          Professional electrical products supplier for Mining, Construction and Energy sector of Mongolia
        </p>
        <a href="#products" className="hero-btn">
          БҮТЭЭГДЭХҮҮН ХАРАХ
        </a>
      </div>
    </section>
  );
}

interface Page {
  _id: string;
  name: string;
  slug: string;
  content?: string;
}

interface HeroProps {
  page?: Page | null;
}

export default function Hero({ page }: HeroProps) {
  return (
    <section className="hero" id="home">
      <div className="hero-placeholder">
        {page?.content ? (
          <div 
            dangerouslySetInnerHTML={{ __html: page.content }} 
            style={{ maxWidth: '800px', padding: '0 20px' }}
          />
        ) : (
          <span>ЗУРАГ</span>
        )}
      </div>
    </section>
  );
}

interface Page {
  _id: string;
  name: string;
  slug: string;
  content?: string;
}

interface AboutSectionProps {
  page?: Page | null;
}

export default function AboutSection({ page }: AboutSectionProps) {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-layout">
          <div className="about-sidebar">
            <button className="btn-green active">БҮТЭЭГДЭХҮҮН</button>
            <button className="btn-white">НАРНЫ ХАВТАН <span>▼</span></button>
            <button className="btn-white">ИНВЕРТЕР <span>▼</span></button>
            <button className="btn-white">БАТАРЕЙ СИСТЕМ <span>▼</span></button>
            <button className="btn-green">Төсөл</button>
            <button className="btn-green">Систем</button>
          </div>
          <div className="about-content">
            <div className="about-image">
              <span>SOLAX - Jinko ЗУРАГ</span>
            </div>
            <div className="about-text">
              <h2>{page?.name || 'About Us'}</h2>
              {page?.content ? (
                <div dangerouslySetInnerHTML={{ __html: page.content }} />
              ) : (
                <>
                  <p>The company adheres to the brand positioning of "creating a sustainable future", focuses on scientific and technological innovation, and successfully builds component manufacturing and sales, Inverter manufacturing and sales; System integration sales; Energy storage and solar energy product applications and other business segments have so far provided high-quality photovoltaic products and energy solutions for more than 100 countries around the world, truly promoting the development of green energy in the world through solar energy, and helping to create a zero-carbon future for the earth.</p>
                  <button className="btn-readmore">Read more {'>>'}</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

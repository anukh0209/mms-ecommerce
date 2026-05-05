import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryIcons from '@/components/CategoryIcons';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutSection from '@/components/AboutSection';
import SolarProducts from '@/components/SolarProducts';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <TopBar />
      <Header />
      <Hero />
      <CategoryIcons />
      <FeaturedProducts />
      <section className="new-products" id="new-products">
        <div className="container">
          <h3 className="section-label">САРГЭЭГДЭХ ЭРИМ ХҮЧ</h3>
          <div className="products-grid" id="newGrid">
            <div className="product-card">
              <div className="product-image">
                <div className="discount-badge">
                  <div>20%</div>
                  <div>OFF</div>
                </div>
              </div>
              <div className="product-name">M12 Импакт ком</div>
              <div className="product-code">Code: M12FDDXT</div>
              <div className="stock-status">Бэлэн байгаа: 1453ширхэг</div>
              <div className="product-price">
                1,250,000₮
                <span className="original-price">1,500,000₮</span>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="discount-badge">
                  <div>20%</div>
                  <div>OFF</div>
                </div>
              </div>
              <div className="product-name">Самбар</div>
              <div className="product-code">Code: M12FDDXT</div>
              <div className="stock-status">Бэлэн байгаа: 1453ширхэг</div>
              <div className="product-price">
                1,250,000₮
                <span className="original-price">1,500,000₮</span>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="discount-badge">
                  <div>20%</div>
                  <div>OFF</div>
                </div>
              </div>
              <div className="product-name">Кабель</div>
              <div className="product-code">Code: M12FDDXT</div>
              <div className="stock-status">Бэлэн байгаа: 1453ширхэг</div>
              <div className="product-price">
                1,250,000₮
                <span className="original-price">1,500,000₮</span>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="discount-badge">
                  <div>20%</div>
                  <div>OFF</div>
                </div>
              </div>
              <div className="product-name">M12 Импакт ком</div>
              <div className="product-code">Code: M12FDDXT</div>
              <div className="stock-status">Бэлэн байгаа: 1453ширхэг</div>
              <div className="product-price">
                1,250,000₮
                <span className="original-price">1,500,000₮</span>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="discount-badge">
                  <div>20%</div>
                  <div>OFF</div>
                </div>
              </div>
              <div className="product-name">НАРНЫ ХАВТАН</div>
              <div className="product-code">Code: M12FDDXT</div>
              <div className="stock-status">Бэлэн байгаа: 1453ширхэг</div>
              <div className="product-price">
                1,250,000₮
                <span className="original-price">1,500,000₮</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
      <SolarProducts />
      <ContactSection />
      <Footer />
    </main>
  );
}

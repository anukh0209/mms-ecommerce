import { Suspense } from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryIcons from '@/components/CategoryIcons';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutSection from '@/components/AboutSection';
import SolarProducts from '@/components/SolarProducts';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import ErrorBoundary from '@/components/ErrorBoundary';
import { fetchPages, fetchPageBySlug, fetchPosts, fetchMenus } from '@/lib/data';

export default async function Home() {
  const [pages, aboutPage, productsPage, contactPage, posts, menus] = await Promise.all([
    fetchPages(),
    fetchPageBySlug('about'),
    fetchPageBySlug('products'),
    fetchPageBySlug('contact'),
    fetchPosts(),
    fetchMenus(),
  ]);

  const headerMenus = menus.headerMenus;
  const footerMenus = menus.footerMenus;

  return (
    <main>
      <ErrorBoundary>
        <TopBar headerMenus={headerMenus} />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Hero page={pages.find((p: any) => p.slug === 'home')} />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <CategoryIcons />
      </ErrorBoundary>
      
      <ErrorBoundary fallback={<LoadingSkeleton count={5} />}>
        <Suspense fallback={<LoadingSkeleton count={5} />}>
          <FeaturedProducts page={productsPage} posts={posts} />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary fallback={<LoadingSkeleton count={5} />}>
        <Suspense fallback={<LoadingSkeleton count={5} />}>
          <section className="new-products" id="new-products">
            <div className="container">
              <h3 className="section-label">САРГЭЭГДЭХ ЭРИМ ХҮЧ</h3>
              <div className="products-grid" id="newGrid">
                <FeaturedProducts page={productsPage} posts={posts.slice(0, 5)} />
              </div>
            </div>
          </section>
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <AboutSection page={aboutPage} />
      </ErrorBoundary>
      
      <ErrorBoundary fallback={<LoadingSkeleton count={6} />}>
        <Suspense fallback={<LoadingSkeleton count={6} />}>
          <SolarProducts posts={posts} />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <ContactSection page={contactPage} />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Footer footerMenus={footerMenus} />
      </ErrorBoundary>
    </main>
  );
}

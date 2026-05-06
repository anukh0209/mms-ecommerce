import MMSHeader from '@/components/MMSHeader';
import MMSHero from '@/components/MMSHero';
import MMSProducts from '@/components/MMSProducts';
import MMSContact from '@/components/MMSContact';
import MMSFooter from '@/components/MMSFooter';
import CartDrawer from '@/components/CartDrawer';

export default function Home() {
  return (
    <main>
      <MMSHeader />
      <MMSHero />
      <MMSProducts />
      <MMSContact />
      <MMSFooter />
      <CartDrawer />
    </main>
  );
}

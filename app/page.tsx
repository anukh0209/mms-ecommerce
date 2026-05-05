import MilwaukeeHeader from '@/components/MilwaukeeHeader';
import MilwaukeeHero from '@/components/MilwaukeeHero';
import MilwaukeeProducts from '@/components/MilwaukeeProducts';
import MilwaukeeContact from '@/components/MilwaukeeContact';
import MilwaukeeFooter from '@/components/MilwaukeeFooter';
import CartDrawer from '@/components/CartDrawer';

export default function Home() {
  return (
    <main>
      <MilwaukeeHeader />
      <MilwaukeeHero />
      <MilwaukeeProducts />
      <MilwaukeeContact />
      <MilwaukeeFooter />
      <CartDrawer />
    </main>
  );
}

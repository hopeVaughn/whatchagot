import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import PricingSection from '@/components/PricingSection';
import Navbar from '@/components/Navbar';
export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="mx-20">
        <HeroSection />
        <PricingSection />
        <AboutSection />
        <ContactSection />
      </section>
    </main>
  );
}

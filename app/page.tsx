import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import PricingSection from '@/components/PricingSection';
export default function Home() {
  return (
    <>
      <section className="">
        <HeroSection />
      </section>
      <section>
        <PricingSection />
      </section>
      <section>
        <AboutSection />
      </section>
      <section>
        <ContactSection />
      </section>
    </>
  );
}

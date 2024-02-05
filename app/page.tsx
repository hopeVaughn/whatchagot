import { ModeToggle } from '@/components/ModeToggle';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
export default function Home() {
  return (
    <>
      <section className="">
        <HeroSection />
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

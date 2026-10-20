import { Hero } from "@/components/sections/Hero";
import { TextMarquee } from "@/components/ui/TextMarquee";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TextMarquee />
      <ServicesSection />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}

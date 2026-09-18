import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <FAQSection />
    </>
  );
}

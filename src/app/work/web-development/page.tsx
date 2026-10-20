"use client";

import { WebPortfolioSection } from "@/components/sections/WebPortfolioSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function WebDevelopmentPortfolioPage() {
  return (
    <main className="min-h-screen pt-2">
      <WebPortfolioSection />
      <ContactSection />
    </main>
  );
}

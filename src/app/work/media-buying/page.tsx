"use client";

import { MediaBuyingPortfolioSection } from "@/components/sections/MediaBuyingPortfolioSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function MediaBuyingPortfolioPage() {
  return (
    <main className="min-h-screen pt-2">
      <MediaBuyingPortfolioSection />
      <ContactSection />
    </main>
  );
}

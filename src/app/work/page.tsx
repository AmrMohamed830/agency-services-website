"use client";

import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-4">
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

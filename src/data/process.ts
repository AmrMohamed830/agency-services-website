import { ProcessStep, ValueProp } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your target audience, business model, and project goals to create a clear tactical roadmap.",
    timeline: "Phase 1",
  },
  {
    step: "02",
    title: "Architecture & Design",
    description:
      "Wireframing, UI/UX prototyping, and structuring high-converting funnels tailored for international client engagement.",
    timeline: "Phase 2",
  },
  {
    step: "03",
    title: "Development & Setup",
    description:
      "Writing clean, production-grade code, setting up ad tracking pixels, and optimizing assets for peak performance.",
    timeline: "Phase 3",
  },
  {
    step: "04",
    title: "Launch & Scale",
    description:
      "Testing across devices, deploying to global CDN infrastructure, launching paid campaigns, and ongoing iteration.",
    timeline: "Phase 4",
  },
];

export const valueProps: ValueProp[] = [
  {
    title: "International Standards",
    description: "Tailored for global businesses with multi-region speed, English communication, and modern UI.",
    iconName: "ShieldCheck",
  },
  {
    title: "Performance & Conversion Focused",
    description: "We don't build vanity websites — we build lead-generating digital assets optimized for results.",
    iconName: "Zap",
  },
  {
    title: "Transparent & Direct Collaboration",
    description: "Direct access to senior builders with clear timelines, regular milestones, and zero fluff.",
    iconName: "Users",
  },
  {
    title: "Modern, Maintainable Tech Stack",
    description: "Built on Next.js, TypeScript, and clean code that is easy to extend and maintain.",
    iconName: "Code2",
  },
];

import { ProjectItem } from "@/types";

/**
 * Placeholder projects for design & layout presentation.
 * Easily replaceable with real client case studies later.
 */
export const projectsData: ProjectItem[] = [
  {
    id: "global-consulting-platform",
    title: "International B2B Consulting Platform",
    category: "Web Development",
    clientIndustry: "B2B Professional Services",
    summary:
      "A modern, multi-page corporate web presence designed to generate qualified consultations from US and European enterprise clients.",
    challenge:
      "The client had an outdated site with slow load times and low conversion rates from international traffic.",
    solution:
      "Engineered a fast Next.js website with streamlined inquiry funnels and modern typography.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    deliverables: [
      "Full Website Architecture",
      "Performance Optimization",
      "Lead Capture Form",
    ],
    featured: true,
  },
  {
    id: "fintech-lead-landing-page",
    title: "High-Ticket SaaS Landing Page",
    category: "Landing Page",
    clientIndustry: "Financial Tech",
    summary:
      "Conversion-focused single-page experience tailored for paid ad traffic targeting C-suite decision makers.",
    challenge:
      "High ad spend with underperforming conversions due to confusing UI hierarchy.",
    solution:
      "Created a clear, punchy direct-response landing page with interactive feature comparisons.",
    tags: ["Landing Page", "CRO", "Direct Response", "Mobile First"],
    deliverables: [
      "Landing Page UI/UX",
      "Speed Optimization",
      "Analytics Integration",
    ],
    featured: true,
  },
  {
    id: "ecommerce-paid-acquisition",
    title: "Global E-Commerce Scaling Campaign",
    category: "Media Buying",
    clientIndustry: "Consumer Brand",
    summary:
      "Multi-channel paid acquisition strategy across Meta and Google Ads for international market expansion.",
    challenge:
      "Expanding into new geographic territories while maintaining profitable ROAS.",
    solution:
      "Built audience testing frameworks, localized ad creatives, and structured funnel tracking.",
    tags: ["Meta Ads", "Google Ads", "Conversion Tracking", "Creative Testing"],
    deliverables: [
      "Campaign Setup",
      "Pixel / CAPI Configuration",
      "Weekly Reporting",
    ],
    featured: true,
  },
];

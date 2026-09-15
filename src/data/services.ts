import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "website-development",
    title: "Custom Website Development",
    shortDescription:
      "Modern, ultra-fast, and responsive web platforms built to elevate your brand presence and engage global audiences.",
    fullDescription:
      "We design and develop clean, performant, and scalable web solutions customized to your business goals. Every site is built with modern frontend standards, clean architecture, and responsive accessibility.",
    iconName: "Globe",
    highlight: true,
    features: [
      "Custom UI/UX and Component Architecture",
      "Next.js / Modern Fullstack Frameworks",
      "Mobile-First Responsive Layouts",
      "SEO-Ready Structure and Performance Tuning",
      "Secure and Maintainable Codebase",
    ],
    deliverables: [
      "Production-ready Next.js / React application",
      "Responsive cross-device testing report",
      "Core Web Vitals & speed optimization",
      "Clean source code and deployment setup",
    ],
  },
  {
    id: "landing-page-development",
    title: "High-Converting Landing Pages",
    shortDescription:
      "Laser-focused, conversion-optimized landing pages engineered for paid traffic and maximum lead generation.",
    fullDescription:
      "Tailored landing pages designed with behavioral UX principles, direct-response copywriting structure, and blazing-fast loading speeds to convert visitors into qualified leads.",
    iconName: "Layout",
    highlight: false,
    features: [
      "Conversion-Centric Visual Hierarchy",
      "Sub-second Load Times for Ad Traffic",
      "Direct Call-to-Action & Lead Capture Flow",
      "A/B Testing Friendly Architecture",
      "Tracking Pixel & Analytics Setup",
    ],
    deliverables: [
      "Optimized single-page or multi-step funnel",
      "Integration with forms and webhook triggers",
      "Fast CDN hosting configuration",
    ],
  },
  {
    id: "media-buying",
    title: "Media Buying & Paid Advertising",
    shortDescription:
      "Targeted digital advertising campaigns across Meta, Google, and TikTok to acquire qualified international leads at scale.",
    fullDescription:
      "Data-driven paid media strategies focusing on audience research, creative testing, funnel alignment, and measurable return on ad spend (ROAS).",
    iconName: "TrendingUp",
    highlight: false,
    features: [
      "Cross-Platform Campaign Architecture (Meta, Google, TikTok)",
      "Target Audience Segmentation & Lookalikes",
      "Ad Creative Strategy & Copy Angles",
      "Conversion Tracking & Event Optimization",
      "Weekly Performance Reporting & Budget Scaling",
    ],
    deliverables: [
      "Complete campaign setup and audience targeting",
      "Conversion API & Pixel verification",
      "Continuous optimization and budget allocation",
    ],
  },
];

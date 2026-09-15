export interface NavItem {
  label: string;
  href: string;
}

export interface AgencyConfig {
  name: string;
  tagline: string;
  description: string;
  contactEmail: string;
  contactPhone?: string;
  whatsappUrl?: string;
  calendlyUrl?: string;
  location: string;
  workingHours: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    instagram?: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  highlight?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Web Development" | "Landing Page" | "Media Buying" | "Full Stack";
  clientIndustry: string;
  summary: string;
  challenge: string;
  solution: string;
  tags: string[];
  deliverables: string[];
  featured: boolean;
  linkUrl?: string;
  imagePlaceholderUrl?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  timeline?: string;
}

export interface ValueProp {
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

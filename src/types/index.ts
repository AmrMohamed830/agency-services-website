export interface NavItem {
  label: string;
  href: string;
}

export interface AgencyConfig {
  name: string;
  arabicName: string;
  tagline: string;
  description: string;
  heroHeadline: string;
  heroHighlight: string;
  heroSubtext: string;
  badgeText: string;
  contactEmail: string;
  contactPhone?: string;
  whatsappUrl?: string;
  location: string;
  workingHours: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  badge?: string;
  features: string[];
  deliverables: string[];
  priceEstimate?: string;
  deliveryTime?: string;
  highlight?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  clientIndustry: string;
  summary: string;
  challenge: string;
  solution: string;
  tags: string[];
  deliverables: string[];
  featured: boolean;
  linkUrl?: string;
  imageUrl?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  timeline?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

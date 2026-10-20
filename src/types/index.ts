export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
  iconName?: "web" | "ads";
}

export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
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
  partnerWhatsappUrl?: string;
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
  type: "web" | "ads";
  titleAr: string;
  titleEn: string;
  clientIndustryAr: string;
  clientIndustryEn: string;
  summaryAr: string;
  summaryEn: string;
  tags: string[];
  metricsAr?: string;
  metricsEn?: string;
  deliverablesAr: string[];
  deliverablesEn: string[];
  featured: boolean;
  imageUrl?: string;
  demoUrl?: string;
}

export interface WebProjectItem extends ProjectItem {
  type: "web";
  categoryKey: "ecommerce" | "saas" | "corporate" | "landing";
  categoryAr: string;
  categoryEn: string;
  liveStatus: "live" | "showcase";
  techStack: string[];
}

export interface MediaBuyingProjectItem extends ProjectItem {
  type: "ads";
  platform: "meta" | "tiktok" | "google";
  platformNameAr: string;
  platformNameEn: string;
  videoDuration: string;
  aspectRatio: "9:16" | "16:9";
  creativeFormatAr: string;
  creativeFormatEn: string;
  objectiveAr: string;
  objectiveEn: string;
  videoPlaceholderUrl?: string;
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

export interface ValueProp {
  title: string;
  description: string;
  iconName: string;
}

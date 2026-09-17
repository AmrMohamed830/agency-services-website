import { AgencyConfig } from "@/types";

// ضع رقم الواتساب الحقيقي لشركة سمارت ميديا هنا (شاملاً كود الدولة بدون + مثل: 201000000000)
export const REAL_WHATSAPP_NUMBER = "201011018430";

export const agencyConfig: AgencyConfig = {
  name: "Smart Media",
  arabicName: "سمارت ميديا",
  tagline: "تطوير مواقع عصرية وحملات إعلانية عالية العائد",
  description:
    "بنصمم ونبني مواقع سريعة وعصرية باستخدام Next.js، وبندير حملات إعلانية ممولة ومستهدفة على فيسبوك وجوجل وتيك توك — كل اللي محتاجه مشروعك للنمو الرقمي، في مكان واحد وبدون تعقيد.",
  heroHeadline: "سمارت ميديا — مكان واحد لكل",
  heroHighlight: "مواقعك وإعلاناتك",
  heroSubtext:
    "بنصمم ونبني مواقع سريعة وعصرية باستخدام Next.js، وبندير حملات إعلانية ممولة ومستهدفة على فيسبوك وجوجل وتيك توك — كل اللي محتاجه مشروعك للنمو الرقمي، في مكان واحد وبدون تعقيد.",
  badgeText: "Websites + Paid Advertising",
  contactEmail: "",
  contactPhone: `+${REAL_WHATSAPP_NUMBER}`,
  whatsappUrl: `https://wa.me/${REAL_WHATSAPP_NUMBER}`,
  location: "نعمل مع عملائنا أونلاين من أي مكان",
  workingHours: "من الأحد إلى الخميس: 9:00 صباحاً – 6:00 مساءً",
  socialLinks: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
};

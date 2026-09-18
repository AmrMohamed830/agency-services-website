import { AgencyConfig } from "@/types";

// 1. رقم الواتساب الخاص بخدمة تطوير المواقع (Website Development) - رقمك أنت
export const REAL_WHATSAPP_NUMBER = "201011018430";

// 2. رقم الواتساب الخاص بخدمة الإعلانات الممولة / الميديا باير (Paid Advertising & Ads) - رقم صديقك (قم بتعديله برقم صديقك الحقيقي)
export const PARTNER_WHATSAPP_NUMBER = "201000000000";

/**
 * دالة لتحديد رقم الواتساب المناسب بناءً على الخدمة التي اختارها العميل:
 * - Website Development -> REAL_WHATSAPP_NUMBER (رقمك)
 * - Paid Advertising / Ads / Both -> PARTNER_WHATSAPP_NUMBER (رقم صديقك)
 */
export function getWhatsappNumberByService(service: string): string {
  if (
    service === "إعلانات ممولة" ||
    service === "موقع إلكتروني + إعلانات ممولة" ||
    service === "Paid Advertising" ||
    service === "Website + Paid Advertising" ||
    service.includes("إعلانات") ||
    service.includes("Ads")
  ) {
    return PARTNER_WHATSAPP_NUMBER;
  }
  return REAL_WHATSAPP_NUMBER;
}

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
  partnerWhatsappUrl: `https://wa.me/${PARTNER_WHATSAPP_NUMBER}`,
  location: "نعمل مع عملائنا أونلاين من أي مكان",
  workingHours: "من الأحد إلى الخميس: 9:00 صباحاً – 6:00 مساءً",
  socialLinks: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
};

import { AgencyConfig } from "@/types";

// 1. رقم الواتساب الخاص بخدمة تطوير المواقع (Website Development)
export const REAL_WHATSAPP_NUMBER = "201011018430";

// 2. رقم الواتساب الخاص بخدمة الإعلانات الممولة وخدمة (موقع + إعلانات ممولة)
export const PARTNER_WHATSAPP_NUMBER = "201515334141";

/**
 * دالة لتحديد رقم الواتساب المناسب بناءً على الخدمة التي اختارها العميل:
 * - تطوير موقع إلكتروني -> REAL_WHATSAPP_NUMBER (201011018430)
 * - إعلانات ممولة أو (موقع + إعلانات ممولة) -> PARTNER_WHATSAPP_NUMBER (201515334141)
 */
export function getWhatsappNumberByService(service: string): string {
  if (
    service === "إنشاء فيديوهات إعلانية" ||
    service === "فيديوهات إعلانية" ||
    service === "Ad Video Creation" ||
    service === "AI Video Production" ||
    service === "إعلانات ممولة" ||
    service === "موقع إلكتروني + إعلانات ممولة" ||
    service === "Paid Advertising" ||
    service === "Website + Paid Advertising" ||
    service.includes("إعلانات") ||
    service.includes("فيديو") ||
    service.includes("Video") ||
    service.includes("Ads")
  ) {
    return PARTNER_WHATSAPP_NUMBER;
  }
  return REAL_WHATSAPP_NUMBER;
}

export function getWhatsappUrlByService(service: string, message?: string): string {
  const number = getWhatsappNumberByService(service);
  const baseUrl = `https://wa.me/${number}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
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
  badgeText: "تطوير مواقع + إعلانات ممولة",
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

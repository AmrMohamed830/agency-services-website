import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "website-development",
    title: "تطوير المواقع والواجهات",
    shortDescription:
      "مواقع سريعة ومتجاوبة باستخدام Next.js، مصممة لتقديم تجربة احترافية على كل الأجهزة.",
    fullDescription:
      "بنصمم وبنبني مواقع مخصصة لشركتك باستخدام Next.js. تصميم سيع ومباشر يعرض خدماتك بوضوح ويضمن أفضل تجربة مستخدم.",
    iconName: "Code2",
    badge: "الخدمة الأولى 💻",
    highlight: true,
    priceEstimate: "حسب نطاق المشروع",
    deliveryTime: "تسليم سريعة ومحدد",
    features: [
      "تصميم متجاوب 100% مع جميع الأجهزة والموبايل",
      "سرعة تحميل ممتازة وتقنيات Next.js الحديثة",
      "تهيئة صحيحة لمحركات البحث (SEO)",
      "ربط سريع مع استمارات التواصل والواتساب",
    ],
    deliverables: [
      "موقع إلكتروني جاهز وكامل",
      "ربط الدومين والاستضافة",
    ],
  },
  {
    id: "media-buying",
    title: "الحملات الإعلانية (Media Buying)",
    shortDescription:
      "حملات إعلانية ممولة ومستهدفة على Facebook وGoogle وTikTok للوصول إلى العملاء المناسبين.",
    fullDescription:
      "نستهدف جمهورك المناسب مع صياغة نصوص وتصاميم إعلانية جذابة تضمن لك تحقيق أفضل عائد على الاستثمار وتقليل تكلفة العميل.",
    iconName: "TrendingUp",
    badge: "الخدمة الثانية 📈",
    highlight: false,
    priceEstimate: "حسب الميزانية الإعلانية",
    deliveryTime: "إطلاق في 48 ساعة",
    features: [
      "استهداف دقيق للجمهور المناسب لخدماتك",
      "إعلانات جذابة على Facebook وGoogle وTikTok",
      "تتبع التحويل والمبيعات (Meta Pixel & CAPI)",
      "تقارير أسبوعية شفافة بالأداء والأرقام",
    ],
    deliverables: [
      "إدارة كاملة للحملات الإعلانية",
      "تقارير نتائج دورية",
    ],
  },
];

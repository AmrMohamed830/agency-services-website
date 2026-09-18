"use client";

import * as React from "react";

export type Language = "ar" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ar: {
    brandName: "Smart Media",
    brandArabic: "سمارت ميديا",
    navHome: "الرئيسية",
    navServices: "خدماتنا",
    navWork: "أعمالنا",
    navProcess: "إزاي بنشتغل",
    navFaq: "أسئلة شائعة",
    navContact: "تواصل معنا",
    contactBtn: "تواصل معانا",
    langSwitchBtn: "English",

    // Hero
    badgeText: "Websites + Paid Advertising",
    heroTitlePrefix: "سمارت ميديا — مكان واحد لكل ",
    heroTitleHighlight: "مواقعك وإعلاناتك",
    heroSubtext:
      "بنصمم ونبني مواقع سريعة وعصرية باستخدام Next.js، وبندير حملات إعلانية ممولة ومستهدفة على فيسبوك وجوجل وتيك توك — كل اللي محتاجه مشروعك للنمو الرقمي، في مكان واحد وبدون تعقيد.",
    startProjectBtn: "ابدأ مشروعك دلوقتي",
    viewServicesBtn: "شوف خدماتنا",
    pillarWeb: "تطوير المواقع والواجهات",
    pillarAds: "الحملات الإعلانية وإدارة الإعلانات",

    // Services Section Header
    servicesBadge: "خدمات سمارت ميديا",
    servicesTitle: "نبني موقعك. نوصل خدمتك للعملاء.",
    servicesSubtext:
      "بنركز على خدمتين أساسيتين تساعدان شركتك على بناء حضور رقمي قوي والوصول إلى العملاء المناسبين.",
    capabilitiesLabel: "إمكانيات الخدمة:",

    // Service 01: Website Development
    service1Num: "01",
    service1Category: "Website Development",
    service1Title: "تطوير المواقع والواجهات",
    service1Headline: "موقعك هو الأساس الرقمي لعملك.",
    service1Desc:
      "بنصمم وبنبني مواقع سريعة ومتجاوبة تقدم لشركتك حضورًا رقميًا احترافيًا، وتسهّل على عملائك المحتملين اكتشاف خدماتك وفهمها والتواصل معك بسهولة.",
    service1Cta: "ابنِ موقعك الآن",

    // Service 02: Media Buying
    service2Num: "02",
    service2Category: "Media Buying & Paid Advertising",
    service2Title: "الحملات الإعلانية وإدارة الإعلانات",
    service2Headline: "الوصول إلى العملاء المناسبين يبدأ من الاستهداف الصحيح.",
    service2Desc:
      "بنخطط وبندير حملات إعلانية ممولة ومستهدفة مصممة للوصول إلى الفئات المهتمة بخدمتك عبر منصات Meta وGoogle وTikTok.",
    service2Cta: "أطلق حملتك الإعلانية",

    // Capabilities AR
    capNext: "تطوير Next.js",
    capResponsive: "تصميم متجاوب لجميع الأجهزة",
    capPerf: "مواقع سريعة ومحسّنة للأداء",
    capSeo: "بنية صديقة لمحركات البحث (SEO-Friendly)",
    capWhatsapp: "ربط الواتساب المباشر",
    capLeads: "نماذج تواصل وجمع العملاء المحتملين",

    capStrategy: "استراتيجية الحملات الإعلانية",
    capTargeting: "استهداف الجمهور المناسب",
    capPlatforms: "إعلانات Meta وGoogle وTikTok",
    capPixel: "ربط Meta Pixel & Conversions API",
    capMonitor: "متابعة وتحسين الأداء",
    capReport: "تقارير أداء دورية شفافة",

    // Projects
    projectsBadge: "أعمالنا ونتايجنا",
    workHeroTitle: "مشاريع حقيقية صممناها وطوّرناها وساعدنا أصحابها على النمو.",
    workHeroSubtext: "استكشف مجموعة من أعمالنا في تطوير المواقع والتسويق الرقمي، وتعرّف على طريقة تنفيذنا للمشاريع من الفكرة وحتى الإطلاق.",
    projectsTitle: "مشاريع حقيقية صممناها وطوّرناها وساعدنا أصحابها على النمو.",
    projectsSubtext: "استكشف مجموعة من أعمالنا في تطوير المواقع والتسويق الرقمي، وتعرّف على طريقة تنفيذنا للمشاريع من الفكرة وحتى الإطلاق.",
    catAll: "جميع الأعمال",
    catWeb: "تطوير المواقع",
    catAds: "الإعلانات الممولة",
    catLanding: "صفحات هبوط",

    // Process (إزاي بنشتغل معاك وننفذ طلبك؟)
    processBadge: "خطوات واضحة وسريعة",
    processTitle: "إزاي بنشتغل معاك وننفذ طلبك؟",
    processSubtext: "من أول فهم احتياج مشروعك، مرورًا بالتصميم والتطوير، لحد إطلاق موقعك وتشغيل حملاتك الإعلانية.",
    step1Num: "01",
    step1Title: "بنفهم مشروعك وااحتياجك",
    step1Desc: "بنتكلم معاك ونفهم طبيعة مشروعك، أهدافك، والجمهور المستهدف، ونحدد أنسب الخدمات والخطوات لتنفيذ طلبك.",
    step2Num: "02",
    step2Title: "التصميم وتجربة المستخدم",
    step2Desc: "بنصمم واجهات الموقع بشكل احترافي وسهل الاستخدام، مع التركيز على تجربة العميل وتسهيل وصوله للخدمة أو المنتج اللي بتقدمه.",
    step3Num: "03",
    step3Title: "التطوير وربط أدوات التتبع",
    step3Desc: "بنحوّل التصميم لموقع فعلي سريع ومتجاوب مع جميع الأجهزة، ونربط أدوات التتبع والتحليل اللازمة لمتابعة زيارات الموقع وطلبات العملاء.",
    step4Num: "04",
    step4Title: "الإطلاق والتسويق",
    step4Desc: "بنطلق موقعك بشكل جاهز للاستخدام، ونساعدك في إعداد وتشغيل الحملات الإعلانية للوصول إلى العملاء المستهدفين وتحليل النتائج وتحسين الأداء.",

    // FAQ
    faqBadge: "إجابات مباشرة",
    faqTitle: "أسئلة بتيجي في بالك",
    faqSubtext: "إليك إجابات لأهم الأسئلة الشائعة حول خدماتنا في تطوير المواقع والإعلانات الممولة.",

    // Contact Page Hero (Approved Final Copy)
    contactHeroTitle: "عندك مشروع؟ خلينا نبدأ من هنا.",
    contactHeroSubtext: "احكيلنا عن فكرتك واحتياج مشروعك، وإحنا هنساعدك تحدد الخدمة والخطوات المناسبة لتنفيذها.",
    contactHeroCallout: "ابدأ مشروعك معنا ↓",

    // Contact (Approved Final Copy)
    contactBadge: "تواصل مباشر مع سمارت ميديا",
    contactTitle: "يلا نتكلم ونكبر مشروعك سوا!",
    contactSubtext: "اكتب لنا فكرة مشروعك والخدمة اللي بتحتاجها، وسنتواصل معك لمناقشة احتياجاتك والخطوات المناسبة لتنفيذها.",
    whatsappCaption: "أو تواصل معنا مباشرة عبر WhatsApp",
    whatsappBtn: "محادثة واتساب مباشرة",
    formName: "الاسم",
    formPhone: "رقم الهاتف / WhatsApp",
    formService: "الخدمة المطلوبة",
    servicePlaceholder: "-- اختر الخدمة المطلوبة --",
    serviceOptWeb: "تطوير موقع إلكتروني",
    serviceOptAds: "إعلانات ممولة",
    serviceOptBoth: "موقع إلكتروني + إعلانات ممولة",
    formDetails: "نبذة عن مشروعك",
    formSubmit: "إرسال الطلب",
    formSuccess: "تم إرسال طلبك بنجاح!",
    formSuccessSub: "شكراً لتواصلك مع سمارت ميديا.. هنراجع التفاصيل ونرد عليك فوراً.",
    errNameRequired: "يرجى إدخال الاسم (حرفين على الأقل)",
    errPhoneRequired: "يرجى إدخال رقم هاتف / واتساب صحيح (7 أرقام على الأقل)",
    errServiceRequired: "يرجى اختيار الخدمة المطلوبة",
    errDetailsRequired: "يرجى كتابة تفاصيل مشروعك (10 حروف على الأقل)",

    // Location
    locationText: "نعمل مع عملائنا أونلاين من أي مكان",

    // Footer
    footerTagline: "تطوير مواقع عصرية وحملات إعلانية عالية العائد",
    copyright: "جميع الحقوق محفوظة.",
  },
  en: {
    brandName: "Smart Media",
    brandArabic: "Digital Agency",
    navHome: "Home",
    navServices: "Services",
    navWork: "Our Work",
    navProcess: "How We Work",
    navFaq: "FAQ",
    navContact: "Contact Us",
    contactBtn: "Contact Us",
    langSwitchBtn: "العربية",

    // Hero
    badgeText: "Websites + Paid Advertising",
    heroTitlePrefix: "Smart Media — One Place For All Your ",
    heroTitleHighlight: "Websites & Ads",
    heroSubtext:
      "We design and build fast, modern websites using Next.js, and manage targeted paid ad campaigns on Facebook, Google, and TikTok — everything your business needs for digital growth, all in one place.",
    startProjectBtn: "Start Your Project Now",
    viewServicesBtn: "Explore Our Services",
    pillarWeb: "Website Development",
    pillarAds: "Media Buying & Paid Advertising",

    // Services Section Header
    servicesBadge: "Smart Media Services",
    servicesTitle: "We build your website. We bring customers to your business.",
    servicesSubtext:
      "We focus on two core services that help your business build a strong digital presence and connect with the right audience.",
    capabilitiesLabel: "Service Capabilities:",

    // Service 01: Website Development
    service1Num: "01",
    service1Category: "Website Development",
    service1Title: "Website & Interface Development",
    service1Headline: "Your Website Is Your Digital Foundation.",
    service1Desc:
      "We design and build fast, responsive websites that give your business a professional digital presence, making it easy for potential customers to discover, understand, and contact you easily.",
    service1Cta: "Build My Website",

    // Service 02: Media Buying
    service2Num: "02",
    service2Category: "Media Buying & Paid Advertising",
    service2Title: "Media Buying & Paid Advertising",
    service2Headline: "Reaching the Right Customers Starts with Precise Targeting.",
    service2Desc:
      "We plan and manage targeted paid advertising campaigns designed to reach relevant audiences across Meta, Google, and TikTok platforms.",
    service2Cta: "Launch My Campaign",

    // Capabilities EN
    capNext: "Next.js Development",
    capResponsive: "Responsive Design for All Devices",
    capPerf: "Fast & Performance-Optimized Websites",
    capSeo: "SEO-Friendly Architecture",
    capWhatsapp: "Direct WhatsApp Integration",
    capLeads: "Contact & Lead Generation Forms",

    capStrategy: "Campaign Strategy",
    capTargeting: "Audience Targeting",
    capPlatforms: "Meta, Google & TikTok Ads",
    capPixel: "Meta Pixel & Conversions API Setup",
    capMonitor: "Campaign Monitoring & Optimization",
    capReport: "Transparent Performance Reporting",

    // Projects
    projectsBadge: "Portfolio & Results",
    workHeroTitle: "Real projects we designed, developed, and helped their owners grow.",
    workHeroSubtext: "Explore our collection of work in web development and digital marketing, and learn how we execute projects from concept to launch.",
    projectsTitle: "Real projects we designed, developed, and helped their owners grow.",
    projectsSubtext: "Explore our collection of work in web development and digital marketing, and learn how we execute projects from concept to launch.",
    catAll: "All Work",
    catWeb: "Website Development",
    catAds: "Paid Advertising",
    catLanding: "Landing Pages",

    // Process EN
    processBadge: "Streamlined Workflow",
    processTitle: "How We Work & Deliver Your Project",
    processSubtext: "From understanding your business needs to design, development, live launch, and paid ad scaling.",
    step1Num: "01",
    step1Title: "Scope & Business Discovery",
    step1Desc: "We discuss your goals, target audience, and select the optimal services and roadmap for your project.",
    step2Num: "02",
    step2Title: "UI/UX Design & Prototyping",
    step2Desc: "Crafting intuitive web interfaces tailored for seamless user engagement and conversion.",
    step3Num: "03",
    step3Title: "Development & Analytics Integration",
    step3Desc: "Building a fast, responsive Next.js website and connecting analytics and pixel conversion tracking.",
    step4Num: "04",
    step4Title: "Launch & Campaign Scaling",
    step4Desc: "Deploying your live web platform and launching targeted ad campaigns to acquire customers.",

    // FAQ
    faqBadge: "Clear Answers",
    faqTitle: "Questions You May Have",
    faqSubtext: "Quick answers to common questions about our website development and paid advertising services.",

    // Contact Page Hero EN
    contactHeroTitle: "Have a project? Let's start from here.",
    contactHeroSubtext: "Tell us about your idea and project needs, and we'll help you define the right service and steps to execute it.",
    contactHeroCallout: "Start your project with us ↓",

    // Contact EN
    contactBadge: "Direct Contact with Smart Media",
    contactTitle: "Let's Scale Your Business Together!",
    contactSubtext: "Tell us about your project idea and requirements, and we'll get in touch to discuss next steps.",
    whatsappCaption: "Or contact us directly via WhatsApp",
    whatsappBtn: "Direct WhatsApp Chat",
    formName: "Name",
    formPhone: "Phone / WhatsApp",
    formService: "Required Service",
    servicePlaceholder: "-- Select Required Service --",
    serviceOptWeb: "Website Development",
    serviceOptAds: "Paid Advertising",
    serviceOptBoth: "Website + Paid Advertising",
    formDetails: "About Your Project",
    formSubmit: "Submit Request",
    formSuccess: "Request Sent Successfully!",
    formSuccessSub: "Thank you for reaching out to Smart Media. We will contact you shortly.",
    errNameRequired: "Please enter your name (at least 2 characters)",
    errPhoneRequired: "Please enter a valid phone/WhatsApp number (at least 7 digits)",
    errServiceRequired: "Please select a required service",
    errDetailsRequired: "Please enter project details (at least 10 characters)",

    // Location
    locationText: "We work with clients online worldwide",

    // Footer
    footerTagline: "Modern Web Development & High-ROI Media Buying",
    copyright: "All rights reserved.",
  },
};

const LanguageContext = React.createContext<LanguageContextType>({
  lang: "ar",
  toggleLanguage: () => {},
  t: () => "",
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = React.useState<Language>("ar");

  React.useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations["ar"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return React.useContext(LanguageContext);
}

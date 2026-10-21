import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "الرئيسية", href: "/" },
  { label: "خدماتنا الأساسية", href: "/#services" },
  {
    label: "أعمالنا ونتايجنا",
    href: "/work/web-development",
    dropdown: [
      {
        label: "معرض تطوير المواقع",
        href: "/work/web-development",
        description: "مواقع وتطبيقات Next.js عصرية وسريعة",
        iconName: "web",
      },
      {
        label: "أعمال الإعلانات والفيديوهات",
        href: "/work/media-buying",
        description: "إدارة إعلانات ممولة وفيديوهات AI مبتكرة",
        iconName: "ads",
      },
    ],
  },
  { label: "إزاي بنشتغل", href: "/#process" },
  { label: "أسئلة شائعة", href: "/#faq" },
];


"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowLeft, ArrowRight, Globe } from "lucide-react";
import { agencyConfig } from "@/data/agency";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { lang, toggleLanguage, t } = useLanguage();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t("navHome"), href: "#hero" },
    { label: t("navServices"), href: "#services" },
    { label: t("navWork"), href: "#projects" },
    { label: t("navProcess"), href: "#process" },
    { label: t("navFaq"), href: "#faq" },
    { label: t("navContact"), href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-8 py-3.5 transition-all duration-300">
      <div
        className={cn(
          "max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between border",
          isScrolled
            ? "bg-[#FDFBF7]/95 backdrop-blur-md border-[#E3D9CC] shadow-md shadow-[#46321E]/5"
            : "bg-[#FDFBF7]/85 backdrop-blur-sm border-[#EAE2D5] shadow-xs"
        )}
      >
        {/* Brand Logo with Image */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus-visible:outline-none"
          aria-label={agencyConfig.name}
        >
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 rounded-xl overflow-hidden border border-[#E5DDD1] shadow-xs bg-black">
            <Image
              src="/images/smart-media-logo.jpg"
              alt="Smart Media Logo"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#2D2926] group-hover:text-[#B85D43] transition-colors">
              {t("brandName")}
            </span>
            <span className="text-[10px] font-bold text-[#8C7662] tracking-wide">
              {t("brandArabic")}
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Bar */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-3"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            return (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 text-sm font-bold rounded-lg transition-all duration-200 text-[#544D45] hover:text-[#B85D43] hover:bg-[#F2ECE1]"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Left: Action Button & Working Language Switcher */}
        <div className="hidden md:flex items-center gap-3">
          {/* Working Language Switcher Toggle Button */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="px-3.5 py-1.5 text-xs font-extrabold text-[#544D45] hover:text-[#B85D43] bg-[#F4EDE2] hover:bg-[#EFE8DC] border border-[#E5DDD1] rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
            title={lang === "ar" ? "Switch to English" : "التحويل للغة العربية"}
          >
            <Globe className="h-4 w-4 text-[#B85D43]" />
            <span>{t("langSwitchBtn")}</span>
          </button>

          {/* Primary CTA Button "تواصل معانا" */}
          <a
            href="#contact"
            className="btn-terracotta inline-flex items-center gap-2 px-5 py-2.5 text-sm font-extrabold rounded-xl shadow-xs cursor-pointer"
          >
            <span>{t("contactBtn")}</span>
            {lang === "ar" ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
          </a>
        </div>

        {/* Mobile Menu Button & Language Switcher */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="px-2.5 py-1.5 text-xs font-bold bg-[#F4EDE2] border border-[#E5DDD1] rounded-lg text-[#2D2926]"
          >
            {t("langSwitchBtn")}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            className="p-2.5 rounded-xl border border-[#E5DDD1] bg-[#FDFBF7] text-[#2D2926]"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="fixed inset-x-4 top-20 z-50 flex flex-col bg-[#FDFBF7] border border-[#E3D9CC] rounded-2xl p-5 md:hidden shadow-xl animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-base font-bold text-[#2D2926] rounded-xl hover:bg-[#F5EFE6] transition-colors"
                >
                  <span>{item.label}</span>
                  {lang === "ar" ? (
                    <ArrowLeft className="h-4 w-4 text-[#8C7662]" />
                  ) : (
                    <ArrowRight className="h-4 w-4 text-[#8C7662]" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-[#E5DDD1] flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full btn-terracotta inline-flex items-center justify-center gap-2 py-3.5 text-base font-bold rounded-xl text-center"
            >
              <span>{t("contactBtn")}</span>
              {lang === "ar" ? <ArrowLeft className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

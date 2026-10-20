"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ArrowLeft, ArrowRight, Globe } from "lucide-react";
import { agencyConfig } from "@/data/agency";
import { useLanguage } from "@/lib/LanguageContext";
import { Logo } from "@/components/ui/Logo";
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
    { label: t("navHome"), href: "/" },
    { label: t("navServices"), href: "/#services" },
    { label: t("navWork"), href: "/work" },
    { label: t("navProcess"), href: "/#process" },
    { label: t("navFaq"), href: "/#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-8 py-3 transition-all duration-300">
      <div
        className={cn(
          "max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between border",
          isScrolled
            ? "bg-[#060B1E]/90 backdrop-blur-md border-blue-500/20 shadow-xl shadow-black/40"
            : "bg-[#060B1E]/70 backdrop-blur-sm border-white/10 shadow-lg shadow-black/20"
        )}
      >
        {/* Brand Logo strictly using local asset image */}
        <Link
          href="/"
          className="flex items-center group focus-visible:outline-none bg-transparent"
          aria-label={agencyConfig.name}
        >
          <Logo size="md" />
        </Link>

        {/* Center: Desktop Navigation Bar */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 text-sm font-bold rounded-xl transition-all duration-200 text-slate-300 hover:text-white hover:bg-white/10 relative group"
              >
                <span>{item.label}</span>
                <span className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
              </Link>
            );
          })}
        </nav>

        {/* Left: Action Button & Language Switcher */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Language Switcher */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="px-2.5 py-1.5 text-xs font-bold text-slate-300 hover:text-cyan-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
            title={lang === "ar" ? "Switch to English" : "التحويل للغة العربية"}
          >
            <Globe className="h-3.5 w-3.5 text-cyan-400" />
            <span>{t("langSwitchBtn")}</span>
          </button>

          {/* Primary CTA Button "تواصل معنا" - Proportionate and Elegant */}
          <Link
            href="/contact"
            className="btn-tech-primary inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-xl cursor-pointer shadow-sm"
          >
            <span>{t("contactBtn")}</span>
            {lang === "ar" ? <ArrowLeft className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
          </Link>
        </div>

        {/* Mobile Menu Button & Language Switcher */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="px-2 py-1 text-xs font-bold bg-white/5 border border-white/10 rounded-lg text-slate-200"
          >
            {t("langSwitchBtn")}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            className="p-2 rounded-xl border border-white/10 bg-white/5 text-slate-200 hover:text-white"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="fixed inset-x-4 top-20 z-50 flex flex-col bg-[#070D22]/95 backdrop-blur-xl border border-blue-500/25 rounded-2xl p-5 md:hidden shadow-2xl animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-base font-bold text-slate-200 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <span>{item.label}</span>
                  {lang === "ar" ? (
                    <ArrowLeft className="h-4 w-4 text-cyan-400" />
                  ) : (
                    <ArrowRight className="h-4 w-4 text-cyan-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full btn-tech-primary inline-flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-xl text-center"
            >
              <span>{t("contactBtn")}</span>
              {lang === "ar" ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

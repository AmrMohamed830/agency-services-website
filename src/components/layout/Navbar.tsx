"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowLeft,
  ArrowRight,
  Globe,
  ChevronDown,
  Code2,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { agencyConfig } from "@/data/agency";
import { useLanguage } from "@/lib/LanguageContext";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = React.useState(false);
  const [isMobileWorkOpen, setIsMobileWorkOpen] = React.useState(true);
  const pathname = usePathname();
  const { lang, toggleLanguage, t } = useLanguage();

  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const triggerButtonRef = React.useRef<HTMLButtonElement>(null);
  const itemRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle outside clicks to close desktop dropdown
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsWorkDropdownOpen(false);
      }
    };

    if (isWorkDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isWorkDropdownOpen]);

  // Clean up hover timeout on unmount
  React.useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  // Adjust state during render when route changes (React 19 recommended pattern)
  const [prevPathname, setPrevPathname] = React.useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsWorkDropdownOpen(false);
    setIsOpen(false);
  }

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsWorkDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsWorkDropdownOpen(false);
    }, 150);
  };

  const handleTriggerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsWorkDropdownOpen(true);
      setTimeout(() => {
        itemRefs.current[0]?.focus();
      }, 50);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIsWorkDropdownOpen(true);
      setTimeout(() => {
        itemRefs.current[itemRefs.current.length - 1]?.focus();
      }, 50);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setIsWorkDropdownOpen(false);
    }
  };

  const handleItemKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    index: number
  ) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % itemRefs.current.length;
      itemRefs.current[nextIndex]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex =
        (index - 1 + itemRefs.current.length) % itemRefs.current.length;
      itemRefs.current[prevIndex]?.focus();
    } else if (e.key === "Escape") {
      e.preventDefault();
      setIsWorkDropdownOpen(false);
      triggerButtonRef.current?.focus();
    } else if (e.key === "Tab") {
      // If tabbing out from last item, close dropdown
      if (!e.shiftKey && index === itemRefs.current.length - 1) {
        setIsWorkDropdownOpen(false);
      }
      if (e.shiftKey && index === 0) {
        setIsWorkDropdownOpen(false);
      }
    }
  };

  const isWorkActive =
    pathname.startsWith("/work") ||
    pathname === "/work/web-development" ||
    pathname === "/work/media-buying";

  return (
    <header className="sticky top-0 z-50 w-full max-w-full px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 transition-all duration-300">
      <div
        className={cn(
          "max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-3 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between border w-full",
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
          <Link
            href="/"
            className={cn(
              "px-3.5 py-1.5 text-sm font-bold rounded-xl transition-all duration-200 text-slate-300 hover:text-white hover:bg-white/10 relative group",
              pathname === "/" && "text-white"
            )}
          >
            <span>{t("navHome")}</span>
            <span
              className={cn(
                "absolute inset-x-3 -bottom-0.5 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full transition-opacity",
                pathname === "/"
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              )}
            />
          </Link>

          <Link
            href="/#services"
            className="px-3.5 py-1.5 text-sm font-bold rounded-xl transition-all duration-200 text-slate-300 hover:text-white hover:bg-white/10 relative group"
          >
            <span>{t("navServices")}</span>
            <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
          </Link>

          {/* Accessible Work Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              ref={triggerButtonRef}
              type="button"
              id="work-nav-trigger"
              aria-haspopup="true"
              aria-expanded={isWorkDropdownOpen}
              aria-controls="work-nav-dropdown"
              onClick={() => setIsWorkDropdownOpen((prev) => !prev)}
              onKeyDown={handleTriggerKeyDown}
              className={cn(
                "px-3.5 py-1.5 text-sm font-bold rounded-xl transition-all duration-200 inline-flex items-center gap-1.5 cursor-pointer relative group",
                isWorkActive
                  ? "text-cyan-300 bg-white/5"
                  : "text-slate-300 hover:text-white hover:bg-white/10",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              )}
            >
              <span>{t("navWork")}</span>
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 text-slate-400 group-hover:text-cyan-300 transition-transform duration-200",
                  isWorkDropdownOpen && "rotate-180 text-cyan-400"
                )}
                aria-hidden="true"
              />
              <span
                className={cn(
                  "absolute inset-x-3 -bottom-0.5 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full transition-opacity",
                  isWorkActive
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                )}
              />
            </button>

            {/* Dropdown Menu Box */}
            <div
              id="work-nav-dropdown"
              role="menu"
              aria-labelledby="work-nav-trigger"
              className={cn(
                "absolute top-full mt-2.5 w-76 sm:w-84 rounded-2xl bg-[#060B1E]/95 backdrop-blur-2xl border border-blue-500/25 p-2 shadow-2xl shadow-blue-950/80 transition-all duration-200 z-50",
                lang === "ar" ? "right-0" : "left-0",
                isWorkDropdownOpen
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                  : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
              )}
            >
              <div className="space-y-1">
                {/* 1. Web Development Portfolio Link */}
                <Link
                  ref={(el) => {
                    itemRefs.current[0] = el;
                  }}
                  role="menuitem"
                  href="/work/web-development"
                  onClick={() => setIsWorkDropdownOpen(false)}
                  onKeyDown={(e) => handleItemKeyDown(e, 0)}
                  className={cn(
                    "flex items-start gap-3 p-3 rounded-xl transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
                    pathname === "/work/web-development"
                      ? "bg-cyan-950/50 border border-cyan-500/30"
                      : "hover:bg-white/10"
                  )}
                >
                  <div className="p-2 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 shrink-0 group-hover:scale-105 group-hover:border-cyan-400/60 transition-all shadow-sm">
                    <Code2 className="h-4.5 w-4.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                        {t("navWorkWeb")}
                      </span>
                      {lang === "ar" ? (
                        <ArrowLeft className="h-3.5 w-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:-translate-x-1 transition-all" />
                      ) : (
                        <ArrowRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      )}
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5 font-normal">
                      {t("navWorkWebDesc")}
                    </p>
                  </div>
                </Link>

                {/* 2. Media Buying Portfolio Link */}
                <Link
                  ref={(el) => {
                    itemRefs.current[1] = el;
                  }}
                  role="menuitem"
                  href="/work/media-buying"
                  onClick={() => setIsWorkDropdownOpen(false)}
                  onKeyDown={(e) => handleItemKeyDown(e, 1)}
                  className={cn(
                    "flex items-start gap-3 p-3 rounded-xl transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400",
                    pathname === "/work/media-buying"
                      ? "bg-purple-950/50 border border-purple-500/30"
                      : "hover:bg-white/10"
                  )}
                >
                  <div className="p-2 rounded-xl bg-purple-950/80 border border-purple-500/30 text-purple-400 shrink-0 group-hover:scale-105 group-hover:border-purple-400/60 transition-all shadow-sm">
                    <TrendingUp className="h-4.5 w-4.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-extrabold text-white group-hover:text-purple-300 transition-colors">
                        {t("navWorkAds")}
                      </span>
                      {lang === "ar" ? (
                        <ArrowLeft className="h-3.5 w-3.5 text-slate-500 group-hover:text-purple-400 group-hover:-translate-x-1 transition-all" />
                      ) : (
                        <ArrowRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                      )}
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5 font-normal">
                      {t("navWorkAdsDesc")}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/#process"
            className="px-3.5 py-1.5 text-sm font-bold rounded-xl transition-all duration-200 text-slate-300 hover:text-white hover:bg-white/10 relative group"
          >
            <span>{t("navProcess")}</span>
            <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
          </Link>

          <Link
            href="/#faq"
            className="px-3.5 py-1.5 text-sm font-bold rounded-xl transition-all duration-200 text-slate-300 hover:text-white hover:bg-white/10 relative group"
          >
            <span>{t("navFaq")}</span>
            <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
          </Link>
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

          {/* Primary CTA Button "تواصل معنا" */}
          <Link
            href="/contact"
            className="btn-tech-primary inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-xl cursor-pointer shadow-sm"
          >
            <span>{t("contactBtn")}</span>
            {lang === "ar" ? (
              <ArrowLeft className="h-3.5 w-3.5" />
            ) : (
              <ArrowRight className="h-3.5 w-3.5" />
            )}
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

      {/* Mobile Drawer Menu with Backdrop Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed left-3 right-3 sm:left-6 sm:right-6 top-[62px] sm:top-[70px] z-50 flex flex-col bg-[#070D22]/98 backdrop-blur-2xl border border-blue-500/25 rounded-2xl p-4 sm:p-5 md:hidden shadow-2xl animate-in fade-in duration-200 max-h-[85vh] overflow-y-auto">
            <nav className="flex flex-col space-y-1">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-base font-bold text-slate-200 rounded-xl hover:bg-white/10 transition-colors"
              >
                <span>{t("navHome")}</span>
                {lang === "ar" ? (
                  <ArrowLeft className="h-4 w-4 text-cyan-400" />
                ) : (
                  <ArrowRight className="h-4 w-4 text-cyan-400" />
                )}
              </Link>

              <Link
                href="/#services"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-base font-bold text-slate-200 rounded-xl hover:bg-white/10 transition-colors"
              >
                <span>{t("navServices")}</span>
                {lang === "ar" ? (
                  <ArrowLeft className="h-4 w-4 text-cyan-400" />
                ) : (
                  <ArrowRight className="h-4 w-4 text-cyan-400" />
                )}
              </Link>

              {/* Mobile Collapsible Portfolio Section */}
              <div className="rounded-xl border border-blue-500/20 bg-white/3 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setIsMobileWorkOpen((prev) => !prev)}
                  aria-expanded={isMobileWorkOpen}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-bold text-cyan-300 hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-cyan-400" />
                    <span>{t("navWork")}</span>
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-cyan-400 transition-transform duration-200",
                      isMobileWorkOpen && "rotate-180"
                    )}
                  />
                </button>

                {isMobileWorkOpen && (
                  <div className="px-3 pb-3 pt-1 space-y-2 border-t border-white/5">
                    {/* Mobile Web Dev Link */}
                    <Link
                      href="/work/web-development"
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-start gap-2.5 p-2.5 rounded-xl border transition-colors",
                        pathname === "/work/web-development"
                          ? "bg-cyan-950/60 border-cyan-500/40 text-white"
                          : "bg-white/3 border-white/5 text-slate-200 hover:bg-white/10"
                      )}
                    >
                      <div className="p-1.5 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400 shrink-0 mt-0.5">
                        <Code2 className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-white">
                          {t("navWorkWeb")}
                        </div>
                        <div className="text-[11px] text-slate-400 font-normal line-clamp-1">
                          {t("navWorkWebDesc")}
                        </div>
                      </div>
                    </Link>

                    {/* Mobile Media Buying Link */}
                    <Link
                      href="/work/media-buying"
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-start gap-2.5 p-2.5 rounded-xl border transition-colors",
                        pathname === "/work/media-buying"
                          ? "bg-purple-950/60 border-purple-500/40 text-white"
                          : "bg-white/3 border-white/5 text-slate-200 hover:bg-white/10"
                      )}
                    >
                      <div className="p-1.5 rounded-lg bg-purple-950 border border-purple-500/30 text-purple-400 shrink-0 mt-0.5">
                        <TrendingUp className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-white">
                          {t("navWorkAds")}
                        </div>
                        <div className="text-[11px] text-slate-400 font-normal line-clamp-1">
                          {t("navWorkAdsDesc")}
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/#process"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-base font-bold text-slate-200 rounded-xl hover:bg-white/10 transition-colors"
              >
                <span>{t("navProcess")}</span>
                {lang === "ar" ? (
                  <ArrowLeft className="h-4 w-4 text-cyan-400" />
                ) : (
                  <ArrowRight className="h-4 w-4 text-cyan-400" />
                )}
              </Link>

              <Link
                href="/#faq"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-base font-bold text-slate-200 rounded-xl hover:bg-white/10 transition-colors"
              >
                <span>{t("navFaq")}</span>
                {lang === "ar" ? (
                  <ArrowLeft className="h-4 w-4 text-cyan-400" />
                ) : (
                  <ArrowRight className="h-4 w-4 text-cyan-400" />
                )}
              </Link>
            </nav>

            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full btn-tech-primary inline-flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-xl text-center"
              >
                <span>{t("contactBtn")}</span>
                {lang === "ar" ? (
                  <ArrowLeft className="h-4 w-4" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

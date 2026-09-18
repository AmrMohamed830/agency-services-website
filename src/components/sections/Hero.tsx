"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Code2, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section id="hero" className="relative pt-6 pb-16 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-28 overflow-hidden">
      <Container className="max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Content Column: LTR/RTL dynamic alignment */}
          <div
            className={cn(
              "lg:col-span-7 flex flex-col items-center z-10 w-full",
              lang === "ar"
                ? "text-center lg:text-right lg:items-start"
                : "text-center lg:text-left lg:items-start"
            )}
          >
            {/* Step 1: Who We Are & What We Do Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE8DC] border border-[#E2D6C5] text-xs sm:text-sm font-bold text-[#876E57] mb-5">
              <span className="bg-[#B85D43] text-white text-[10px] px-2.5 py-0.5 rounded-full font-bold">
                {lang === "ar" ? "سمارت ميديا" : "Smart Media"}
              </span>
              <span>{t("badgeText")}</span>
            </div>

            {/* Step 2: Main Punchy Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black text-[#2D2926] leading-[1.25] sm:leading-[1.2]">
              {t("heroTitlePrefix")}{" "}
              <span className="text-[#B85D43] relative inline-block">
                {t("heroTitleHighlight")}
              </span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#685F56] leading-relaxed max-w-2xl">
              {t("heroSubtext")}
            </p>

            {/* Step 3: Action CTAs */}
            <div
              className={cn(
                "mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto",
                lang === "ar" ? "justify-center lg:justify-start" : "justify-center lg:justify-start"
              )}
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto btn-terracotta inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-extrabold rounded-2xl shadow-md cursor-pointer"
              >
                <span>{t("startProjectBtn")}</span>
                {lang === "ar" ? <ArrowLeft className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}
              </Link>

              <a
                href="#services"
                className="w-full sm:w-auto btn-paper-outline inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold rounded-2xl cursor-pointer"
              >
                <span>{t("viewServicesBtn")}</span>
              </a>
            </div>

            {/* Core 2 Pillars Badges */}
            <div
              className={cn(
                "mt-10 pt-7 border-t border-[#E8DFC9] flex flex-wrap items-center gap-3.5 text-xs font-bold text-[#544D45] w-full",
                lang === "ar" ? "justify-center lg:justify-start" : "justify-center lg:justify-start"
              )}
            >
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FDFBF7] border border-[#E5DDD1]">
                <Code2 className="h-4 w-4 text-[#B85D43]" />
                <span>{t("pillarWeb")}</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FDFBF7] border border-[#E5DDD1]">
                <TrendingUp className="h-4 w-4 text-[#B85D43]" />
                <span>{t("pillarAds")}</span>
              </div>
            </div>
          </div>

          {/* Hero 3D Graphic: Transparent Floating Services Image */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-xl aspect-[4/3] flex items-center justify-center animate-float-subtle">
              <Image
                src="/images/smart-media-hero-ads-dev.jpg"
                alt="Smart Media Websites & Paid Advertising Solutions"
                fill
                priority
                className="object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

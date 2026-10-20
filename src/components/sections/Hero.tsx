"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Code2, TrendingUp, Sparkles, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { HeroParticles } from "@/components/ui/HeroParticles";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative pt-6 pb-14 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24 overflow-hidden bg-midnight-gradient"
    >
      {/* Subtle Cyber Grid with Smooth Bottom Fade (Zero harsh line) */}
      <div
        className="absolute inset-0 bg-cyber-grid pointer-events-none z-0 opacity-40 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* Dynamic Interactive Particles Effect with enhanced transparency */}
      <HeroParticles opacity={0.25} />

      {/* Ambient Top Glow Orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none z-0" />

      <Container className="max-w-7xl relative z-10">
        {/* Balanced 50/50 Split Layout on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Column 1 (Text): 50% width on Desktop */}
          <div
            className={cn(
              "lg:col-span-6 flex flex-col z-10 w-full",
              lang === "ar"
                ? "text-center lg:text-right lg:items-start"
                : "text-center lg:text-left lg:items-start items-center"
            )}
          >
            <ScrollReveal direction="down" priority={true}>
              {/* Tech Pill Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs sm:text-sm font-bold text-cyan-300 mb-5 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                </span>
                <span className="text-white font-extrabold tracking-wide">
                  Smart Media
                </span>
                <span className="text-slate-400">✦</span>
                <span className="text-slate-200">
                  {lang === "ar" ? "حلول رقمية متقدمة" : "High-Tech Digital Growth"}
                </span>
              </div>
            </ScrollReveal>

            {/* Main Heading with High-Contrast Luminous Neon Purple "Smart" */}
            <ScrollReveal direction="up" delay={80} priority={true}>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-white leading-[1.25] sm:leading-[1.2] tracking-tight">
                {lang === "ar" ? (
                  <>
                    كَبِّر مشروعك مع{" "}
                    <span className="inline-flex items-center gap-2" dir="ltr">
                      <span className="text-[#C084FC] drop-shadow-[0_0_22px_rgba(192,132,252,0.95)] font-black">
                        Smart
                      </span>
                      <span className="text-[#00D2FF] drop-shadow-[0_0_22px_rgba(0,210,255,0.85)] font-black">
                        Media
                      </span>
                    </span>
                    <br />
                    {" "}بتقنيات الذكاء الاصطناعي
                  </>
                ) : (
                  <>
                    Scale Your Business With{" "}
                    <span className="inline-flex items-center gap-2" dir="ltr">
                      <span className="text-[#C084FC] drop-shadow-[0_0_22px_rgba(192,132,252,0.95)] font-black">
                        Smart
                      </span>
                      <span className="text-[#00D2FF] drop-shadow-[0_0_22px_rgba(0,210,255,0.85)] font-black">
                        Media
                      </span>
                    </span>
                    <br />
                    {" "}& AI-Powered Digital Solutions
                  </>
                )}
              </h1>
            </ScrollReveal>

            {/* Description with exact typo fix: "TikTok, Google, Meta" */}
            <ScrollReveal direction="up" delay={160} priority={true}>
              <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal">
                {lang === "ar"
                  ? "بنصمم ونبني مواقع وتطبيقات عصرية فائقة السرعة، وبندير حملات إعلانية ممولة ومستهدفة بدقة وفيديوهات ذكاء اصطناعي على منصات TikTok, Google, Meta — حلول رقمية متكاملة تضاعف مبيعاتك وتضمن نمو علامتك التجارية."
                  : "We design and engineer high-performance web platforms, and manage precision paid advertising campaigns and AI videos across TikTok, Google, Meta — all the digital firepower your brand needs to scale."}
              </p>
            </ScrollReveal>

            {/* Action CTAs: Horizontally aligned on same baseline with identical heights */}
            <ScrollReveal direction="up" delay={240} priority={true} className="w-full sm:w-auto">
              <div
                className={cn(
                  "mt-7 sm:mt-9 flex flex-row flex-wrap items-center gap-4 w-full sm:w-auto",
                  lang === "ar" ? "justify-center lg:justify-start" : "justify-center lg:justify-start"
                )}
              >
                {/* Main CTA Button */}
                <Link
                  href="/contact"
                  className="h-12 sm:h-13 px-7 sm:px-8 btn-tech-primary inline-flex items-center justify-center gap-2.5 text-sm sm:text-base font-extrabold rounded-2xl cursor-pointer leading-none shadow-lg"
                >
                  <span>{t("startProjectBtn")}</span>
                  {lang === "ar" ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                </Link>

                {/* Secondary CTA Button */}
                <a
                  href="#services"
                  className="h-12 sm:h-13 px-7 sm:px-8 btn-tech-outline inline-flex items-center justify-center gap-2 text-sm sm:text-base font-bold rounded-2xl cursor-pointer leading-none"
                >
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                  <span>{t("viewServicesBtn")}</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Core Tech Pillars Badges */}
            <ScrollReveal direction="up" delay={320} priority={true} className="w-full">
              <div
                className={cn(
                  "mt-8 pt-6 border-t border-blue-500/15 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-300 w-full",
                  lang === "ar" ? "justify-center lg:justify-start" : "justify-center lg:justify-start"
                )}
              >
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
                  <Code2 className="h-4 w-4 text-cyan-400" />
                  <span>{t("pillarWeb")}</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-colors">
                  <TrendingUp className="h-4 w-4 text-purple-400" />
                  <span>{t("pillarAds")}</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-colors">
                  <ShieldCheck className="h-4 w-4 text-blue-400" />
                  <span>{lang === "ar" ? "ضمان سرعة وتحويلات" : "Guaranteed Results"}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Column 2 (Visual): Larger Video Container filling visual space (50% desktop split) */}
          <div className="lg:col-span-6 flex justify-center items-center relative w-full overflow-hidden sm:overflow-visible">
            <ScrollReveal direction="left" delay={200} priority={true} className="w-full">
              <div className="relative group w-full">
                {/* 1. Colorful Gradient Glow behind the video */}
                <div
                  className="absolute -inset-3 sm:-inset-6 rounded-3xl bg-linear-to-r from-cyan-500/35 via-blue-600/40 to-purple-600/40 blur-2xl opacity-75 group-hover:opacity-100 transition-all duration-700 -z-10"
                  aria-hidden="true"
                />
                <div
                  className="absolute -top-4 -right-4 sm:-top-10 sm:-right-10 w-40 sm:w-56 h-40 sm:h-56 bg-cyan-400/25 rounded-full blur-3xl -z-20 pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-4 -left-4 sm:-bottom-10 sm:-left-10 w-40 sm:w-56 h-40 sm:h-56 bg-purple-600/30 rounded-full blur-3xl -z-20 pointer-events-none"
                  aria-hidden="true"
                />

                {/* 2. Video Container with Smooth Rounded Corners and Balanced Sizing */}
                <div className="relative rounded-3xl overflow-hidden p-0.5 bg-linear-to-b from-cyan-400/40 via-blue-500/20 to-purple-500/40 shadow-2xl shadow-blue-950/70 w-full">
                  <div className="relative w-full aspect-16/11 sm:aspect-16/10 lg:aspect-4/3 xl:aspect-16/11 min-h-[300px] sm:min-h-90 lg:min-h-105 rounded-3xl overflow-hidden bg-[#060B1C]">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    >
                      <source src="/images/hero-bg.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Subtle Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060B1C]/50 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Tech Badges on Video */}
                    <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#060B1C]/85 border border-white/15 backdrop-blur-md text-[11px] font-bold text-white shadow-xl">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      <span>{lang === "ar" ? "حلول 3D وتفاعلية" : "3D Interactive Tech"}</span>
                    </div>

                    <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#060B1C]/85 border border-white/15 backdrop-blur-md text-[11px] font-bold text-cyan-300 shadow-xl">
                      <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                      <span>Smart Media 3D</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </Container>
    </section>
  );
}

"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Code2, TrendingUp, Sparkles, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { HeroParticles } from "@/components/ui/HeroParticles";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/lib/LanguageContext";

export function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative pt-0 pb-14 sm:pb-20 lg:pb-24 overflow-hidden bg-midnight-gradient w-full"
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

      {/* 1. True Full-Bleed 100% Edge-to-Edge Video Showcase (Zero Margins, Full Viewport Width) */}
      <div className="w-full relative overflow-hidden z-10 border-b border-blue-500/20 shadow-2xl shadow-blue-950/70">
        <div className="relative w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-[460px] xl:h-[500px] overflow-hidden bg-[#060B1C]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source src="/images/hero-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Seamless Vignette Gradients for High-End Tech Feel */}
          <div className="absolute inset-0 bg-linear-to-t from-[#060B18] via-transparent to-[#060B18]/30 pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-linear-to-r from-[#060B18]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-linear-to-l from-[#060B18]/40 to-transparent pointer-events-none" />

          {/* Floating Tech Badges on Video */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 z-20 flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-[#060B1C]/85 border border-white/15 backdrop-blur-md text-[10px] sm:text-xs font-bold text-white shadow-xl">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>{lang === "ar" ? "حلول 3D وتفاعلية" : "3D Interactive Tech"}</span>
          </div>

          <div className="absolute top-4 left-4 sm:top-6 sm:left-8 z-20 flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-[#060B1C]/85 border border-white/15 backdrop-blur-md text-[10px] sm:text-xs font-bold text-cyan-300 shadow-xl">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Smart Media 3D</span>
          </div>
        </div>
      </div>

      {/* 2. "كَبِّر مشروعك" Section - Contained, Centered, Grand & High-Tech */}
      <Container className="max-w-5xl relative z-10 pt-10 sm:pt-14 lg:pt-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto w-full">
          {/* Tech Pill Badge */}
          <ScrollReveal direction="up" delay={80} priority={true}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs sm:text-sm font-bold text-cyan-300 mb-5 sm:mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
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

            {/* Main Heading */}
            <ScrollReveal direction="up" delay={140} priority={true}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.2] sm:leading-[1.18] tracking-tight">
                {lang === "ar" ? (
                  <>
                    كَبِّر مشروعك مع{" "}
                    <span className="inline-flex items-center gap-2" dir="ltr">
                      <span className="text-[#C084FC] drop-shadow-[0_0_24px_rgba(192,132,252,0.95)] font-black">
                        Smart
                      </span>
                      <span className="text-[#00D2FF] drop-shadow-[0_0_24px_rgba(0,210,255,0.85)] font-black">
                        Media
                      </span>
                    </span>
                    <br className="hidden sm:inline" />
                    {" "}بتقنيات الذكاء الاصطناعي
                  </>
                ) : (
                  <>
                    Scale Your Business With{" "}
                    <span className="inline-flex items-center gap-2" dir="ltr">
                      <span className="text-[#C084FC] drop-shadow-[0_0_24px_rgba(192,132,252,0.95)] font-black">
                        Smart
                      </span>
                      <span className="text-[#00D2FF] drop-shadow-[0_0_24px_rgba(0,210,255,0.85)] font-black">
                        Media
                      </span>
                    </span>
                    <br className="hidden sm:inline" />
                    {" "}& AI-Powered Digital Solutions
                  </>
                )}
              </h1>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal direction="up" delay={200} priority={true}>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl sm:max-w-3xl mx-auto">
                {lang === "ar"
                  ? "بنصمم ونبني مواقع وتطبيقات عصرية فائقة السرعة، وبندير حملات إعلانية ممولة ومستهدفة بدقة وفيديوهات ذكاء اصطناعي على منصات TikTok, Google, Meta — حلول رقمية متكاملة تضاعف مبيعاتك وتضمن نمو علامتك التجارية."
                  : "We design and engineer high-performance web platforms, and manage precision paid advertising campaigns and AI videos across TikTok, Google, Meta — all the digital firepower your brand needs to scale."}
              </p>
            </ScrollReveal>

            {/* Action CTAs: Centered */}
            <ScrollReveal direction="up" delay={260} priority={true} className="w-full">
              <div className="mt-7 sm:mt-9 flex flex-row flex-wrap items-center justify-center gap-4 w-full">
                {/* Main CTA Button */}
                <Link
                  href="/contact"
                  className="h-12 sm:h-13 px-7 sm:px-8 btn-tech-primary inline-flex items-center justify-center gap-2.5 text-sm sm:text-base font-extrabold rounded-2xl cursor-pointer leading-none shadow-lg shadow-purple-600/30"
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
              <div className="mt-8 sm:mt-10 pt-6 sm:pt-7 border-t border-blue-500/15 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-bold text-slate-300 w-full">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/4 border border-white/10 backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
                  <Code2 className="h-4 w-4 text-cyan-400" />
                  <span>{t("pillarWeb")}</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/4 border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-colors">
                  <TrendingUp className="h-4 w-4 text-purple-400" />
                  <span>{t("pillarAds")}</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/4 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-colors">
                  <ShieldCheck className="h-4 w-4 text-blue-400" />
                  <span>{lang === "ar" ? "ضمان سرعة وتحويلات" : "Guaranteed Results"}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    );
  }

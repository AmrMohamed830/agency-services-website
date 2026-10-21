"use client";

import * as React from "react";
import { getWhatsappUrlByService } from "@/data/agency";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/lib/LanguageContext";
import {
  WebDevMotionVisual,
  AdsAndAiMotionVisual,
} from "@/components/ui/ServiceMotionVisuals";
import { ArrowLeft, ArrowRight, CheckCircle, Sparkles, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  const { lang, t } = useLanguage();
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  const webCapabilities = [
    t("capNext"),
    t("capResponsive"),
    t("capPerf"),
    t("capSeo"),
    t("capWhatsapp"),
    t("capLeads"),
  ];

  const adsAndAiCapabilities = [
    t("capStrategy"),
    t("capPlatforms"),
    t("capAiVideo"),
    t("capAiScripts"),
    t("capPixel"),
    t("capRoas"),
  ];

  // Pre-filled WhatsApp URLs
  const webWhatsappMsg =
    lang === "ar"
      ? "أهلاً سمارت ميديا 👋، حابب أستفسر عن خدمة تطوير موقع إلكتروني"
      : "Hello Smart Media 👋, I would like to inquire about Website Development";
  const webWhatsappUrl = getWhatsappUrlByService("تطوير موقع إلكتروني", webWhatsappMsg);

  const adsWhatsappMsg =
    lang === "ar"
      ? "أهلاً سمارت ميديا 👋، حابب أستفسر عن إدارة الإعلانات الممولة وإنتاج الفيديوهات الإعلانية"
      : "Hello Smart Media 👋, I would like to inquire about Paid Ads Management & Video Production";
  const adsWhatsappUrl = getWhatsappUrlByService("إعلانات ممولة", adsWhatsappMsg);

  return (
    <section id="services" className="py-14 sm:py-24 bg-[#060B18] relative overflow-hidden">
      {/* Ambient background glow circles */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <Container className="max-w-7xl relative z-10">
        {/* Section Header: Centered Alignment */}
        <ScrollReveal direction="up" delay={100}>
          <div className="max-w-3xl mx-auto mb-14 sm:mb-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-bold text-cyan-300 mb-4 backdrop-blur-sm shadow-[0_0_12px_rgba(6,182,212,0.15)]">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>{t("servicesBadge")}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white leading-[1.2] tracking-tight">
              {lang === "ar" ? (
                <>
                  نبني موقعك. <span className="text-gradient-cyan-purple">نوصل خدمتك للعملاء.</span>
                </>
              ) : (
                <>
                  We Build Your Platform. <span className="text-gradient-cyan-purple">We Drive Your Growth.</span>
                </>
              )}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {lang === "ar"
                ? "بنركز على ركيزتين أساسيتين: تطوير المواقع العصرية، والحملات الإعلانية الممولة مع فيديوهات الذكاء الاصطناعي لبناء حضور رقمي قوي وتحقيق أفضل عائد."
                : "We focus on two core pillars: High-performance web platforms, and targeted paid ads with AI video creatives for exponential growth."}
            </p>
          </div>
        </ScrollReveal>

        {/* Services High-Tech Staggered Cards */}
        <div className="space-y-10 sm:space-y-14">
          
          {/* Service 01: Website Development */}
          <ScrollReveal direction="up" delay={150}>
            <div
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              className="card-tech rounded-3xl p-4 sm:p-8 lg:p-10 relative overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Text & Details */}
                <div
                  className={cn(
                    "lg:col-span-6 space-y-4",
                    lang === "ar" ? "text-right" : "text-left"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-black text-cyan-400 px-3 py-1 rounded-xl bg-cyan-950/50 border border-cyan-500/30">
                      01
                    </span>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                      Website & Web Development
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                    {t("service1Headline")}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {t("service1Desc")}
                  </p>

                  {/* Capabilities List */}
                  <div className="pt-2">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2.5">
                      {t("service1CapabilitiesTitle")}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {webCapabilities.map((cap, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-bold text-slate-200"
                        >
                          <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <a
                      href={webWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-tech-primary inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-extrabold rounded-xl cursor-pointer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>{t("service1Cta")}</span>
                      {lang === "ar" ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                    </a>
                  </div>
                </div>

                {/* SVG Motion Visual Column */}
                <div className="lg:col-span-6">
                  <WebDevMotionVisual isHovered={hoveredCard === 1} />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Service 02: Paid Ads & Video Production */}
          <ScrollReveal direction="up" delay={200}>
            <div
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
              className="card-tech rounded-3xl p-4 sm:p-8 lg:p-10 relative overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Text & Details */}
                <div
                  className={cn(
                    "lg:col-span-6 space-y-4",
                    lang === "ar" ? "text-right" : "text-left"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-black text-purple-400 px-3 py-1 rounded-xl bg-purple-950/50 border border-purple-500/30">
                      02
                    </span>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-purple-300/90">
                      PAID ADS & VIDEO PRODUCTION
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                    {t("service2Headline")}
                  </h3>

                  <p className="text-base sm:text-lg font-bold text-cyan-300">
                    {t("service2Subheadline")}
                  </p>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {t("service2Desc")}
                  </p>

                  {/* Capabilities List */}
                  <div className="pt-2">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2.5">
                      {t("service2CapabilitiesTitle")}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {adsAndAiCapabilities.map((cap, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-bold text-slate-200"
                        >
                          <CheckCircle className="h-4 w-4 text-purple-400 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <a
                      href={adsWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-tech-primary inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-extrabold rounded-xl cursor-pointer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>{t("service2Cta")}</span>
                      {lang === "ar" ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                    </a>
                  </div>
                </div>

                {/* SVG Motion Visual Column */}
                <div className="lg:col-span-6">
                  <AdsAndAiMotionVisual isHovered={hoveredCard === 2} />
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </Container>
    </section>
  );
}

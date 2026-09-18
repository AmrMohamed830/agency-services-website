"use client";

import * as React from "react";
import { getWhatsappUrlByService } from "@/data/agency";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/LanguageContext";
import { ArrowLeft, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  const { lang, t } = useLanguage();

  const webCapabilities = [
    t("capNext"),
    t("capResponsive"),
    t("capPerf"),
    t("capSeo"),
    t("capWhatsapp"),
    t("capLeads"),
  ];

  const adsCapabilities = [
    t("capStrategy"),
    t("capTargeting"),
    t("capPlatforms"),
    t("capPixel"),
    t("capMonitor"),
    t("capReport"),
  ];

  // Pre-filled WhatsApp URLs for each service using valid ?text= parameter and dynamic recipient number
  const webWhatsappMsg =
    lang === "ar"
      ? "أهلاً سمارت ميديا 👋، حابب أستفسر عن تطوير موقع إلكتروني"
      : "Hello Smart Media 👋, I would like to inquire about Website Development";
  const webWhatsappUrl = getWhatsappUrlByService("تطوير موقع إلكتروني", webWhatsappMsg);

  const adsWhatsappMsg =
    lang === "ar"
      ? "أهلاً سمارت ميديا 👋، حابب أستفسر عن إدارة وتأهيل الحملات الإعلانية الممولة"
      : "Hello Smart Media 👋, I would like to inquire about Paid Advertising Campaigns";
  const adsWhatsappUrl = getWhatsappUrlByService("إعلانات ممولة", adsWhatsappMsg);

  return (
    <section id="services" className="py-14 sm:py-24 bg-[#FAF6F0]/70 border-y border-[#EAE2D5]">
      <Container className="max-w-7xl">
        {/* Section Header: Centered Alignment */}
        <div className="max-w-3xl mx-auto mb-14 sm:mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE8DC] border border-[#E2D6C5] text-xs font-bold text-[#876E57] mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#B85D43]" />
            <span>{t("servicesBadge")}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#2D2926] leading-[1.2] tracking-tight">
            {t("servicesTitle")}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#685F56] leading-relaxed">
            {t("servicesSubtext")}
          </p>
        </div>

        {/* Services Editorial Staggered Layout */}
        <div className="space-y-12 sm:space-y-16">
          {/* Service 01: Website Development */}
          <div className="relative bg-[#FDFBF7] border border-[#E5DDD1] rounded-3xl p-7 sm:p-12 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Text Header */}
              <div
                className={cn(
                  "lg:col-span-6 space-y-4",
                  lang === "ar" ? "text-right" : "text-left"
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-black text-[#B85D43] px-3 py-1 rounded-lg bg-[#F4EDE2] border border-[#E5DDD1]">
                    {t("service1Num")}
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#8C7662]">
                    {t("service1Category")}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black text-[#2D2926] leading-tight">
                  {t("service1Headline")}
                </h3>

                <p className="text-sm sm:text-base text-[#685F56] leading-relaxed">
                  {t("service1Desc")}
                </p>

                <div className="pt-4">
                  <a
                    href={webWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-terracotta inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-extrabold rounded-2xl shadow-xs cursor-pointer"
                  >
                    <span>{t("service1Cta")}</span>
                    {lang === "ar" ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                  </a>
                </div>
              </div>

              {/* Capabilities Grid Block */}
              <div className="lg:col-span-6 bg-[#F7F2EA] border border-[#EBE3D7] rounded-2xl p-6 sm:p-8">
                <h4
                  className={cn(
                    "text-xs font-extrabold uppercase tracking-wider text-[#8C7662] mb-4",
                    lang === "ar" ? "text-right" : "text-left"
                  )}
                >
                  {t("capabilitiesLabel")}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {webCapabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        "flex items-center gap-2.5 p-3 rounded-xl bg-[#FDFBF7] border border-[#E5DDD1] text-xs font-bold text-[#3D3732] shadow-2xs",
                        lang === "ar" ? "text-right" : "text-left"
                      )}
                    >
                      <CheckCircle className="h-4 w-4 text-[#B85D43] shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Service 02: Media Buying & Paid Advertising */}
          <div className="relative bg-[#FDFBF7] border border-[#E5DDD1] rounded-3xl p-7 sm:p-12 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Text Header */}
              <div
                className={cn(
                  "lg:col-span-6 space-y-4",
                  lang === "ar" ? "text-right" : "text-left"
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-black text-[#B85D43] px-3 py-1 rounded-lg bg-[#F4EDE2] border border-[#E5DDD1]">
                    {t("service2Num")}
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#8C7662]">
                    {t("service2Category")}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black text-[#2D2926] leading-tight">
                  {t("service2Headline")}
                </h3>

                <p className="text-sm sm:text-base text-[#685F56] leading-relaxed">
                  {t("service2Desc")}
                </p>

                <div className="pt-4">
                  <a
                    href={adsWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-terracotta inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-extrabold rounded-2xl shadow-xs cursor-pointer"
                  >
                    <span>{t("service2Cta")}</span>
                    {lang === "ar" ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                  </a>
                </div>
              </div>

              {/* Capabilities Grid Block */}
              <div className="lg:col-span-6 bg-[#F7F2EA] border border-[#EBE3D7] rounded-2xl p-6 sm:p-8">
                <h4
                  className={cn(
                    "text-xs font-extrabold uppercase tracking-wider text-[#8C7662] mb-4",
                    lang === "ar" ? "text-right" : "text-left"
                  )}
                >
                  {t("capabilitiesLabel")}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {adsCapabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        "flex items-center gap-2.5 p-3 rounded-xl bg-[#FDFBF7] border border-[#E5DDD1] text-xs font-bold text-[#3D3732] shadow-2xs",
                        lang === "ar" ? "text-right" : "text-left"
                      )}
                    >
                      <CheckCircle className="h-4 w-4 text-[#B85D43] shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

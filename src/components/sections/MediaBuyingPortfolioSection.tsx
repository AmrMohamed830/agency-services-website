"use client";

import * as React from "react";
import Link from "next/link";
import {
  TrendingUp,
  Play,
  Film,
  Layers,
  Clock,
  Target,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { mediaBuyingProjectsData } from "@/data/projects";
import { MediaBuyingProjectItem } from "@/types";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export function MediaBuyingPortfolioSection() {
  const { lang, t } = useLanguage();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [activeVideoModal, setActiveVideoModal] = React.useState<MediaBuyingProjectItem | null>(null);

  const campaignsCount = mediaBuyingProjectsData.length;

  const nextCampaign = React.useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % campaignsCount);
  }, [campaignsCount]);

  const prevCampaign = React.useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + campaignsCount) % campaignsCount);
  }, [campaignsCount]);

  // Touch Swipe Handlers
  const touchStartX = React.useRef<number | null>(null);
  const touchEndX = React.useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 40;

    if (lang === "ar") {
      if (diff > threshold) prevCampaign();
      if (diff < -threshold) nextCampaign();
    } else {
      if (diff > threshold) nextCampaign();
      if (diff < -threshold) prevCampaign();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Handle keyboard events (escape to close modal, arrows to navigate carousel)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveVideoModal(null);
      } else if (e.key === "ArrowLeft") {
        if (lang === "ar") nextCampaign();
        else prevCampaign();
      } else if (e.key === "ArrowRight") {
        if (lang === "ar") prevCampaign();
        else nextCampaign();
      }
    };

    if (activeVideoModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideoModal, lang, nextCampaign, prevCampaign]);

  // Compute parabolic curved position (Banana Arc) for Media Buying Cards
  const getCardStyle = (index: number) => {
    let offset = index - activeIndex;

    // Shortest circular offset
    if (offset > campaignsCount / 2) offset -= campaignsCount;
    if (offset < -campaignsCount / 2) offset += campaignsCount;

    const absOffset = Math.abs(offset);

    // If beyond visible range, hide
    if (absOffset > 2) {
      return {
        opacity: 0,
        pointerEvents: "none" as const,
        transform: `translate3d(calc(-50% + ${offset > 0 ? 500 : -500}px), 240px, -150px) scale(0.6)`,
        zIndex: 0,
      };
    }

    // Parabolic downward dip: center is at highest (0px), side cards curve down
    const translateY = absOffset === 0 ? 0 : absOffset * 34 + Math.pow(offset, 2) * 12;

    // Direction based on RTL / LTR
    const directionMultiplier = lang === "ar" ? -1 : 1;
    const baseSpacing = typeof window !== "undefined" && window.innerWidth < 640 ? 250 : 360;
    const translateX = offset * baseSpacing * directionMultiplier;

    // Banana curve rotation: tilt outward gently
    const rotateZ = offset * 3.5 * directionMultiplier;

    // Scale: center card is elevated, side cards are smaller
    const scale = offset === 0 ? 1.02 : Math.max(0.78, 1 - absOffset * 0.12);

    // Opacity: center card is 100%, side cards are dimmer
    const opacity = offset === 0 ? 1 : absOffset === 1 ? 0.58 : 0.22;

    // Z-index: center is highest
    const zIndex = 30 - absOffset * 10;

    return {
      opacity,
      transform: `translate3d(calc(-50% + ${translateX}px), ${translateY}px, 0) scale(${scale}) rotate(${rotateZ}deg)`,
      zIndex,
      pointerEvents: absOffset > 1 ? ("none" as const) : ("auto" as const),
    };
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#060B18]">
      {/* Ambient background glows tailored for media buying / video creativity */}
      <div className="absolute top-20 left-1/4 w-125 h-125 bg-purple-600/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-112.5 h-112.5 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Header Section */}
      <section className="relative pt-8 sm:pt-14 pb-10 sm:pb-14 border-b border-purple-500/15">
        <Container className="max-w-6xl relative z-10">
          <ScrollReveal direction="up" delay={50} priority={true}>
            <div className="text-center max-w-3xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs sm:text-sm font-bold text-purple-300 mb-5 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                <TrendingUp className="h-4 w-4 text-purple-400" />
                <span>{t("portfolioAdsBadge")}</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.2] tracking-tight">
                {lang === "ar" ? (
                  <>
                    استراتيجيات إعلانية مستهدفة <br className="hidden sm:inline" />
                    و<span className="text-gradient-cyan-purple">فيديوهات تسويقية تحقق أعلى عائد</span>
                  </>
                ) : (
                  <>
                    Targeted Ad Strategies & <br className="hidden sm:inline" />
                    <span className="text-gradient-cyan-purple">High-Converting Video Creatives</span>
                  </>
                )}
              </h1>

              {/* Subtitle */}
              <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
                {t("portfolioAdsHeroSubtext")}
              </p>

              {/* Capabilities Bar with Video Support Specifications */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-start">
                <div className="p-3 rounded-xl bg-white/3 border border-white/5 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-black">
                    <Film className="h-4 w-4" />
                    <span>Vertical & 16:9 Video</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {lang === "ar" ? "دعم كامل لجميع أبعاد الفيديو" : "9:16 Reels & 16:9 Widescreen"}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/3 border border-white/5 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-black">
                    <Clock className="h-4 w-4" />
                    <span>Short & Long Form</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {lang === "ar" ? "فيديوهات قصيرة وطويلة 15s-90s+" : "Hooks (15s) to Storytelling (90s)"}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/3 border border-white/5 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-black">
                    <Target className="h-4 w-4" />
                    <span>Precision Audience</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {lang === "ar" ? "استهداف فئات الميديا باير" : "Custom & Lookalike Targeting"}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/3 border border-white/5 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-black">
                    <Layers className="h-4 w-4" />
                    <span>Tracking & CAPI</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {lang === "ar" ? "ربط بكسل وتتبع المبيعات" : "Meta CAPI, GA4 & Pixels"}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Arc Slider Stage (Banana-shaped Curved Showcase for Media Buying) */}
      <section
        className="relative pt-12 pb-16 overflow-hidden select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Container className="max-w-7xl relative z-10">
          {/* Arc Stage Container */}
          <div className="relative w-full h-[620px] sm:h-[660px] md:h-[690px] mx-auto overflow-hidden">
            {mediaBuyingProjectsData.map((project, idx) => {
              const isCenter = idx === activeIndex;
              const style = getCardStyle(idx);
              const title = lang === "ar" ? project.titleAr : project.titleEn;
              const platformName =
                lang === "ar" ? project.platformNameAr : project.platformNameEn;
              const summary = lang === "ar" ? project.summaryAr : project.summaryEn;
              const formatLabel =
                lang === "ar" ? project.creativeFormatAr : project.creativeFormatEn;
              const objective =
                lang === "ar" ? project.objectiveAr : project.objectiveEn;
              const deliverables =
                lang === "ar" ? project.deliverablesAr : project.deliverablesEn;

              return (
                <div
                  key={project.id}
                  onClick={() => {
                    if (!isCenter) setActiveIndex(idx);
                  }}
                  style={style}
                  className={cn(
                    "absolute top-0 left-1/2 w-[310px] sm:w-[360px] md:w-[410px] rounded-3xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between bg-[#081028]/95 backdrop-blur-xl border shadow-2xl",
                    isCenter
                      ? "border-purple-400/50 shadow-[0_20px_50px_rgba(168,85,247,0.25)] cursor-default"
                      : "border-white/10 hover:border-purple-400/30 cursor-pointer"
                  )}
                >
                  <div>
                    {/* Video Container Frame */}
                    <div
                      className="relative w-full aspect-16/10 bg-[#060B1C] overflow-hidden border-b border-white/10 group/video cursor-pointer"
                      onClick={(e) => {
                        if (isCenter) {
                          e.stopPropagation();
                          setActiveVideoModal(project);
                        }
                      }}
                    >
                      {/* Real video preview loop with fallback poster */}
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-75 group-hover/video:opacity-95 transition-opacity duration-300"
                      >
                        <source src="/images/hero-bg.mp4" type="video/mp4" />
                      </video>

                      {/* Top Badges on Video Container */}
                      <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10 pointer-events-none">
                        {/* Duration Badge */}
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold text-white shadow-md">
                          <Clock className="h-3 w-3 text-cyan-400" />
                          <span>{project.videoDuration}</span>
                        </div>

                        {/* Aspect Ratio & Format Badge */}
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-950/90 backdrop-blur-md border border-purple-500/40 text-[10px] font-mono font-extrabold text-purple-300 shadow-md">
                          <span>{project.aspectRatio}</span>
                          <span className="text-white/40">|</span>
                          <span className="capitalize">{project.platform}</span>
                        </div>
                      </div>

                      {/* Center Play Button with Glow */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/25 group-hover/video:bg-black/10 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-linear-to-tr from-purple-600 to-cyan-400 p-0.5 shadow-lg group-hover/video:scale-110 transition-transform duration-300">
                          <div className="w-full h-full rounded-full bg-[#060B1E]/90 backdrop-blur-md flex items-center justify-center text-white">
                            <Play className="h-4.5 w-4.5 fill-white translate-x-0.5" />
                          </div>
                        </div>
                        <span className="mt-1.5 text-[9px] font-bold text-white/90 bg-black/60 px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-white/10">
                          {t("portfolioAdsWatchDemo")}
                        </span>
                      </div>

                      {/* Bottom Tag */}
                      <div className="absolute bottom-2.5 inset-x-3 flex items-center justify-between z-10 pointer-events-none text-[9px] font-mono text-slate-300">
                        <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-white/10 truncate max-w-50">
                          {formatLabel}
                        </span>
                        <span className="text-emerald-400 flex items-center gap-1 bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Ready
                        </span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-4 sm:p-5">
                      {/* Platform & Campaign Objective */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-purple-950/70 text-purple-300 border border-purple-500/30 inline-flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          <span>{platformName}</span>
                        </span>

                        <span className="text-[11px] text-slate-400 font-semibold truncate">
                          {lang === "ar"
                            ? project.clientIndustryAr
                            : project.clientIndustryEn}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-black text-white mb-2 leading-snug line-clamp-1">
                        {title}
                      </h3>

                      {/* Campaign Objective Callout */}
                      <div className="p-2 rounded-xl bg-white/3 border border-white/5 mb-2.5">
                        <div className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                          {t("portfolioAdsObjective")}:
                        </div>
                        <div className="text-xs font-bold text-cyan-300 truncate">
                          {objective}
                        </div>
                      </div>

                      {/* Summary */}
                      <p className="text-xs text-slate-300 leading-relaxed font-normal mb-3 line-clamp-2">
                        {summary}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Deliverables snippet */}
                      <div className="space-y-1 pt-2.5 border-t border-white/10">
                        {deliverables.slice(0, 2).map((deliv, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-start gap-1.5 text-[11px] text-slate-300 font-normal"
                          >
                            <CheckCircle2 className="h-3 w-3 text-purple-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-4 sm:p-5 pt-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveVideoModal(project);
                      }}
                      className="w-full btn-tech-primary inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-extrabold shadow-md transition-all cursor-pointer"
                    >
                      <Play className="h-3.5 w-3.5 fill-white" />
                      <span>{t("portfolioAdsPlayVideo")}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls Bar (Arrows + Indicators) */}
          <div className="flex items-center justify-center gap-6 mt-4 relative z-20">
            {/* Prev Button */}
            <button
              type="button"
              onClick={lang === "ar" ? nextCampaign : prevCampaign}
              aria-label="Previous Campaign"
              className="w-11 h-11 rounded-2xl bg-[#081028]/90 border border-purple-500/30 text-white flex items-center justify-center hover:bg-purple-950/70 hover:border-purple-400 transition-all cursor-pointer shadow-lg shadow-black/40 hover:scale-105"
            >
              <ChevronLeft className="h-5 w-5 text-purple-300" />
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {mediaBuyingProjectsData.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setActiveIndex(dotIdx)}
                  aria-label={`Go to campaign ${dotIdx + 1}`}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                    dotIdx === activeIndex
                      ? "w-8 bg-linear-to-r from-purple-400 to-cyan-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  )}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={lang === "ar" ? prevCampaign : nextCampaign}
              aria-label="Next Campaign"
              className="w-11 h-11 rounded-2xl bg-[#081028]/90 border border-purple-500/30 text-white flex items-center justify-center hover:bg-purple-950/70 hover:border-purple-400 transition-all cursor-pointer shadow-lg shadow-black/40 hover:scale-105"
            >
              <ChevronRight className="h-5 w-5 text-purple-300" />
            </button>
          </div>
        </Container>
      </section>

      {/* Interactive Video Preview Lightbox Modal */}
      {activeVideoModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            className="fixed inset-0"
            onClick={() => setActiveVideoModal(null)}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-3xl rounded-3xl bg-[#070D24] border border-purple-500/30 p-5 sm:p-7 shadow-2xl z-10 max-h-[92vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-purple-950/80 border border-purple-500/30 text-purple-400">
                  <Film className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    {lang === "ar"
                      ? activeVideoModal.titleAr
                      : activeVideoModal.titleEn}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-purple-300 font-semibold mt-0.5">
                    <span>
                      {lang === "ar"
                        ? activeVideoModal.platformNameAr
                        : activeVideoModal.platformNameEn}
                    </span>
                    <span>•</span>
                    <span className="font-mono">{activeVideoModal.videoDuration}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveVideoModal(null)}
                aria-label={t("portfolioAdsModalClose")}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Player Container */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-black border border-white/15 mb-5 flex items-center justify-center">
              <div
                className={cn(
                  "w-full overflow-hidden flex items-center justify-center bg-black",
                  activeVideoModal.aspectRatio === "9:16"
                    ? "max-w-70 sm:max-w-80 aspect-9/16 my-2 rounded-xl border border-white/10 shadow-2xl"
                    : "aspect-video"
                )}
              >
                <video
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/images/hero-bg.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Video Specs & Integration Details */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] text-slate-400 font-mono">
                    {t("portfolioAdsVideoDuration")}
                  </div>
                  <div className="font-bold text-white mt-0.5">
                    {activeVideoModal.videoDuration}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] text-slate-400 font-mono">
                    {t("portfolioAdsVideoFormat")}
                  </div>
                  <div className="font-bold text-purple-300 mt-0.5">
                    {activeVideoModal.aspectRatio} (
                    {activeVideoModal.aspectRatio === "9:16" ? "Vertical" : "Widescreen"}
                    )
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 col-span-2">
                  <div className="text-[10px] text-slate-400 font-mono">
                    {t("portfolioAdsObjective")}
                  </div>
                  <div className="font-bold text-cyan-300 mt-0.5 truncate">
                    {lang === "ar"
                      ? activeVideoModal.objectiveAr
                      : activeVideoModal.objectiveEn}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 mb-1">
                  {lang === "ar" ? "تفاصيل واستراتيجية الحملة:" : "Campaign Strategy Overview:"}
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {lang === "ar"
                    ? activeVideoModal.summaryAr
                    : activeVideoModal.summaryEn}
                </p>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 mb-1.5">
                  {t("portfolioAdsDeliverables")}
                </h4>
                <div className="space-y-1.5">
                  {(lang === "ar"
                    ? activeVideoModal.deliverablesAr
                    : activeVideoModal.deliverablesEn
                  ).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  onClick={() => setActiveVideoModal(null)}
                  className="flex-1 btn-tech-primary inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs sm:text-sm font-extrabold cursor-pointer"
                >
                  <span>{t("portfolioAdsCtaBtn")}</span>
                  {lang === "ar" ? (
                    <ArrowLeft className="h-4 w-4" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </Link>

                <button
                  type="button"
                  onClick={() => setActiveVideoModal(null)}
                  className="btn-tech-outline inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-white cursor-pointer"
                >
                  <span>{t("portfolioAdsModalClose")}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

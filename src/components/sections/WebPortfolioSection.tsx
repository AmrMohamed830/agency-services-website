"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  ExternalLink,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Monitor,
  Layers,
  ArrowLeft,
  ArrowRight,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { webProjectsData } from "@/data/projects";
import { WebProjectItem } from "@/types";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export function WebPortfolioSection() {
  const { lang, t } = useLanguage();
  const defaultSastemhaIdx = React.useMemo(() => {
    const idx = webProjectsData.findIndex((p) => p.id.includes("sastemha"));
    return idx !== -1 ? idx : 1;
  }, []);
  const [activeIndex, setActiveIndex] = React.useState(defaultSastemhaIdx);
  const [selectedProject, setSelectedProject] = React.useState<WebProjectItem | null>(null);

  const projectsCount = webProjectsData.length;

  const nextProject = React.useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projectsCount);
  }, [projectsCount]);

  const prevProject = React.useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projectsCount) % projectsCount);
  }, [projectsCount]);

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
      if (diff > threshold) prevProject();
      if (diff < -threshold) nextProject();
    } else {
      if (diff > threshold) nextProject();
      if (diff < -threshold) prevProject();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Handle escape key to close project preview modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      } else if (e.key === "ArrowLeft") {
        if (lang === "ar") nextProject();
        else prevProject();
      } else if (e.key === "ArrowRight") {
        if (lang === "ar") prevProject();
        else nextProject();
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, lang, nextProject, prevProject]);

  // Helper to compute parabolic curved position (Banana Arc)
  const getCardStyle = (index: number) => {
    let offset = index - activeIndex;

    // Shortest circular offset
    if (offset > projectsCount / 2) offset -= projectsCount;
    if (offset < -projectsCount / 2) offset += projectsCount;

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

    // Parabolic curve: center is at top (0px), side cards curve down smoothly
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
      {/* 1. Full-Bleed 100% Edge-to-Edge Top Video Showcase (Under Navbar, Above Hero) */}
      <div className="w-full relative overflow-hidden z-10 border-b border-cyan-500/25 shadow-2xl shadow-blue-950/70">
        <div className="relative w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-[460px] xl:h-[500px] overflow-hidden bg-[#060B1C]">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="w-full h-full object-cover object-center"
          >
            <source src="/images/web/gemini_generated_video_a478e6d2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Vignette Gradients for High-End Tech Feel */}
          <div className="absolute inset-0 bg-linear-to-t from-[#060B18] via-transparent to-[#060B18]/30 pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-linear-to-r from-[#060B18]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-linear-to-l from-[#060B18]/40 to-transparent pointer-events-none" />

          {/* Floating Badges on Video */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 z-20 flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-[#060B1C]/85 border border-cyan-500/30 backdrop-blur-md text-[10px] sm:text-xs font-bold text-white shadow-xl">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>{lang === "ar" ? "تطوير مواقع وتطبيقات عصرية" : "Next.js Web Platforms"}</span>
          </div>

          <div className="absolute top-4 left-4 sm:top-6 sm:left-8 z-20 flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-[#060B1C]/85 border border-blue-500/30 backdrop-blur-md text-[10px] sm:text-xs font-bold text-cyan-300 shadow-xl">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Smart Media Web</span>
          </div>
        </div>
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-96 right-1/4 w-125 h-125 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-112.5 h-112.5 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Header Section */}
      <section className="relative pt-10 sm:pt-14 pb-10 sm:pb-14 border-b border-blue-500/15">
        <Container className="max-w-6xl relative z-10">
          <ScrollReveal direction="up" delay={50} priority={true}>
            <div className="text-center max-w-3xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs sm:text-sm font-bold text-cyan-300 mb-5 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <Code2 className="h-4 w-4 text-cyan-400" />
                <span>{t("portfolioWebBadge")}</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.2] tracking-tight">
                {lang === "ar" ? (
                  <>
                    مواقع عصرية، كود متقن، <br className="hidden sm:inline" />
                    و<span className="text-gradient-cyan-purple">تجربة رقمية استثنائية</span>
                  </>
                ) : (
                  <>
                    Modern Platforms, Clean Code & <br className="hidden sm:inline" />
                    <span className="text-gradient-cyan-purple">Exceptional Digital UX</span>
                  </>
                )}
              </h1>

              {/* Subtitle */}
              <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
                {t("portfolioWebHeroSubtext")}
              </p>

              {/* Engineering Highlights Bar */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-start">
                <div className="p-3 rounded-xl bg-white/3 border border-white/5 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-black">
                    <Zap className="h-4 w-4" />
                    <span>Next.js App Router</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {lang === "ar" ? "أداء فائق وتحميل فوري" : "Ultra-fast page loads"}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/3 border border-white/5 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-black">
                    <Monitor className="h-4 w-4" />
                    <span>100% Responsive</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {lang === "ar" ? "متجاوب مع كل الشاشات" : "Optimized for all screens"}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/3 border border-white/5 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-black">
                    <Layers className="h-4 w-4" />
                    <span>UI/UX Architecture</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {lang === "ar" ? "واجهات تفاعلية ذكية" : "Conversion-ready layout"}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/3 border border-white/5 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-black">
                    <ShieldCheck className="h-4 w-4" />
                    <span>SEO & Clean Code</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {lang === "ar" ? "صديق لمحركات البحث" : "Search engine optimized"}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Arc Slider Stage (Banana-shaped Curved Showcase) */}
      <section
        className="relative pt-12 pb-16 overflow-hidden select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Container className="max-w-7xl relative z-10">
          {/* Arc Stage Container */}
          <div className="relative w-full h-[620px] sm:h-[660px] md:h-[690px] mx-auto overflow-hidden">
            {webProjectsData.map((project, idx) => {
              const isCenter = idx === activeIndex;
              const style = getCardStyle(idx);
              const title = lang === "ar" ? project.titleAr : project.titleEn;
              const category = lang === "ar" ? project.categoryAr : project.categoryEn;
              const summary = lang === "ar" ? project.summaryAr : project.summaryEn;
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
                      ? "border-cyan-400/50 shadow-[0_20px_50px_rgba(0,210,255,0.22)] cursor-default"
                      : "border-white/10 hover:border-cyan-400/30 cursor-pointer"
                  )}
                >
                  <div>
                    {/* Browser Window Frame Header */}
                    <div className="bg-[#050A1A] border-b border-white/10 px-3.5 py-2.5 flex items-center justify-between">
                      {/* 3 Window Dots */}
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>

                      {/* Simulated Browser Address */}
                      <div
                        className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-slate-400 max-w-42.5 sm:max-w-50 truncate"
                        dir="ltr"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span className="truncate">
                          {project.demoUrl
                            ? project.demoUrl.replace("https://", "")
                            : `smartmedia.dev/${project.id}`}
                        </span>
                      </div>

                      {/* Live / Showcase Status Tag */}
                      <div className="flex items-center">
                        {project.liveStatus === "live" ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[9px] font-black text-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.2)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>{t("portfolioWebLiveStatus")}</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[9px] font-black text-cyan-300">
                            <span>{t("portfolioWebConceptStatus")}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Project Preview Image Canvas */}
                    <div className="relative w-full aspect-16/10 bg-[#070E24] overflow-hidden group/canvas">
                      {project.imageUrl ? (
                        <Image
                          src={project.imageUrl}
                          alt={title}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover/canvas:scale-105 opacity-95"
                        />
                      ) : (
                        <div className="w-full h-full bg-linear-to-br from-[#0A1435] via-[#060D24] to-[#0D1E4E] p-4 flex flex-col justify-between border-b border-white/10 relative overflow-hidden">
                          <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
                          <div className="flex items-center justify-between text-xs text-slate-400 relative z-10">
                            <span className="font-mono text-cyan-300 text-[11px]">
                              Next.js Engineering
                            </span>
                            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                          </div>

                          <div className="text-center py-2 relative z-10">
                            <div className="inline-block p-2 rounded-xl bg-blue-600/20 border border-blue-500/30 text-cyan-300 mb-1.5">
                              <Code2 className="h-5 w-5" />
                            </div>
                            <h4 className="text-sm font-extrabold text-white line-clamp-1">
                              {title}
                            </h4>
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/10 pt-2 font-mono relative z-10">
                            <span className="text-slate-300">{category}</span>
                            <span className="text-emerald-400">Production Ready</span>
                          </div>
                        </div>
                      )}

                      {/* Hover Overlay preview button for center card */}
                      {isCenter && (
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(project);
                            }}
                            className="px-3.5 py-1.5 rounded-lg bg-black/80 border border-white/20 text-white text-xs font-bold flex items-center gap-1.5 hover:bg-cyan-950 hover:border-cyan-400 transition-colors cursor-pointer shadow-lg"
                          >
                            <Eye className="h-3.5 w-3.5 text-cyan-400" />
                            <span>{t("portfolioWebPreviewAction")}</span>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Card Content Body */}
                    <div className="p-4 sm:p-5">
                      {/* Category & Industry */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-cyan-950/70 text-cyan-300 border border-cyan-500/30 inline-flex items-center gap-1">
                          <Code2 className="h-3 w-3" />
                          <span>{category}</span>
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

                      {/* Summary */}
                      <p className="text-xs text-slate-300 leading-relaxed font-normal mb-3 line-clamp-2">
                        {summary}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300"
                          >
                            {tech}
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
                            <CheckCircle2 className="h-3 w-3 text-cyan-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions Footer: Visit Website Action */}
                  <div className="p-4 sm:p-5 pt-0">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full btn-tech-primary inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-extrabold shadow-md transition-all cursor-pointer"
                      >
                        <span>{t("portfolioWebVisitBtn")}</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="w-full btn-tech-outline inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer text-slate-200 hover:text-white"
                      >
                        <Eye className="h-3.5 w-3.5 text-cyan-400" />
                        <span>{t("portfolioWebPreviewAction")}</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls Bar (Arrows + Indicators) */}
          <div
            dir="ltr"
            className="flex items-center justify-center gap-6 mt-4 relative z-20"
          >
            {/* Left Button - Points Outward to the Left */}
            <button
              type="button"
              onClick={lang === "ar" ? nextProject : prevProject}
              aria-label={lang === "ar" ? "المشروع التالي" : "Previous Project"}
              className="w-11 h-11 rounded-2xl bg-[#081028]/90 border border-blue-500/30 text-white flex items-center justify-center hover:bg-cyan-950/70 hover:border-cyan-400 transition-all cursor-pointer shadow-lg shadow-black/40 hover:scale-105"
            >
              <ChevronLeft className="h-5 w-5 text-cyan-300" />
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {webProjectsData.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setActiveIndex(dotIdx)}
                  aria-label={`Go to project ${dotIdx + 1}`}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                    dotIdx === activeIndex
                      ? "w-8 bg-linear-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(0,210,255,0.5)]"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  )}
                />
              ))}
            </div>

            {/* Right Button - Points Outward to the Right */}
            <button
              type="button"
              onClick={lang === "ar" ? prevProject : nextProject}
              aria-label={lang === "ar" ? "المشروع السابق" : "Next Project"}
              className="w-11 h-11 rounded-2xl bg-[#081028]/90 border border-blue-500/30 text-white flex items-center justify-center hover:bg-cyan-950/70 hover:border-cyan-400 transition-all cursor-pointer shadow-lg shadow-black/40 hover:scale-105"
            >
              <ChevronRight className="h-5 w-5 text-cyan-300" />
            </button>
          </div>
        </Container>
      </section>

      {/* Interactive Project Preview Modal / Lightbox */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            className="fixed inset-0"
            onClick={() => setSelectedProject(null)}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#070D24] border border-blue-500/30 p-5 sm:p-7 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                  <Code2 className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-white">
                    {lang === "ar"
                      ? selectedProject.titleAr
                      : selectedProject.titleEn}
                  </h3>
                  <p className="text-xs text-cyan-300 font-semibold">
                    {lang === "ar"
                      ? selectedProject.categoryAr
                      : selectedProject.categoryEn}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Image / Visual */}
            <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-[#050A1A] border border-white/10 mb-5">
              {selectedProject.imageUrl ? (
                <Image
                  src={selectedProject.imageUrl}
                  alt={
                    lang === "ar"
                      ? selectedProject.titleAr
                      : selectedProject.titleEn
                  }
                  fill
                  className="object-cover object-top"
                />
              ) : (
                <div className="w-full h-full p-6 flex flex-col justify-center items-center text-center bg-linear-to-br from-blue-950/60 to-purple-950/60">
                  <Code2 className="h-10 w-10 text-cyan-400 mb-2" />
                  <span className="text-white font-bold text-base">
                    {lang === "ar"
                      ? selectedProject.titleAr
                      : selectedProject.titleEn}
                  </span>
                  <span className="text-xs text-slate-400 mt-1 font-mono">
                    Smart Media Next.js Platform Architecture
                  </span>
                </div>
              )}
            </div>

            {/* Modal Body Info */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-400 mb-1">
                  {lang === "ar" ? "نبذة عن المشروع:" : "Project Overview:"}
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {lang === "ar"
                    ? selectedProject.summaryAr
                    : selectedProject.summaryEn}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 mb-1.5">
                  {t("portfolioWebTechStack")}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-cyan-950/50 border border-cyan-500/30 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 mb-1.5">
                  {t("portfolioWebDeliverables")}
                </h4>
                <div className="space-y-1.5">
                  {(lang === "ar"
                    ? selectedProject.deliverablesAr
                    : selectedProject.deliverablesEn
                  ).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-tech-primary inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs sm:text-sm font-extrabold cursor-pointer"
                  >
                    <span>{t("portfolioWebVisitBtn")}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                <Link
                  href="/contact"
                  onClick={() => setSelectedProject(null)}
                  className="btn-tech-outline inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-white cursor-pointer"
                >
                  <span>{lang === "ar" ? "اطلب مشروعاً مشابهاً" : "Request Similar Platform"}</span>
                  {lang === "ar" ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

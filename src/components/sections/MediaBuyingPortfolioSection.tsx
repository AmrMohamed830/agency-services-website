"use client";

import * as React from "react";
import Image from "next/image";
import {
  TrendingUp,
  Play,
  Pause,
  Film,
  Sparkles,
  Clock,
  Target,
  Layers,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MediaBannerMarquee } from "@/components/ui/MediaBannerMarquee";
import { mediaBuyingVideos, getVideoThumbnail } from "@/data/mediaBuyingVideos";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export function MediaBuyingPortfolioSection() {
  const { lang, t } = useLanguage();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [playingVideoId, setPlayingVideoId] = React.useState<string | null>(null);

  const videosCount = mediaBuyingVideos.length;

  const nextVideo = React.useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % videosCount);
  }, [videosCount]);

  const prevVideo = React.useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + videosCount) % videosCount);
  }, [videosCount]);

  // Touch Swipe Handlers for mobile
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
      if (diff > threshold) prevVideo();
      if (diff < -threshold) nextVideo();
    } else {
      if (diff > threshold) nextVideo();
      if (diff < -threshold) prevVideo();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        if (lang === "ar") nextVideo();
        else prevVideo();
      } else if (e.key === "ArrowRight") {
        if (lang === "ar") prevVideo();
        else nextVideo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lang, nextVideo, prevVideo]);

  // Toggle playing video on card
  const handleTogglePlay = (id: string, index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
    setPlayingVideoId((prev) => (prev === id ? null : id));
  };

  // Compute parabolic curved position (Banana Arc) for Media Buying Cards
  const getCardStyle = (index: number) => {
    let offset = index - activeIndex;

    // Shortest circular offset
    if (offset > videosCount / 2) offset -= videosCount;
    if (offset < -videosCount / 2) offset += videosCount;

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

    // Parabolic downward dip: center is at highest (0px), side cards curve down smoothly
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
      <div className="w-full relative overflow-hidden z-10 border-b border-purple-500/25 shadow-2xl shadow-purple-950/70">
        <div className="relative w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-[460px] xl:h-[500px] overflow-hidden bg-[#060B1C]">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="w-full h-full object-cover object-center"
          >
            <source src="/images/media/gemini_generated_video_9ddc26b3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Vignette Gradients for High-End Tech Feel */}
          <div className="absolute inset-0 bg-linear-to-t from-[#060B18] via-transparent to-[#060B18]/30 pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-linear-to-r from-[#060B18]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-linear-to-l from-[#060B18]/40 to-transparent pointer-events-none" />

          {/* Floating Badges on Video */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 z-20 flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-[#060B1C]/85 border border-purple-500/30 backdrop-blur-md text-[10px] sm:text-xs font-bold text-white shadow-xl">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
            <span>{lang === "ar" ? "فيديوهات إعلانية وحملات ذكية" : "AI Video Ads & Media Buying"}</span>
          </div>

          <div className="absolute top-4 left-4 sm:top-6 sm:left-8 z-20 flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-[#060B1C]/85 border border-cyan-500/30 backdrop-blur-md text-[10px] sm:text-xs font-bold text-cyan-300 shadow-xl">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Smart Media Buying</span>
          </div>
        </div>
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-96 left-1/4 w-125 h-125 bg-purple-600/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-112.5 h-112.5 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* 2. Hero Header Section */}
      <section className="relative pt-10 sm:pt-14 pb-10 sm:pb-12 border-b border-purple-500/15">
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

      {/* 3. Moving Banner (Marquee) Under the Hero displaying media campaign images */}
      <MediaBannerMarquee />

      {/* 4. Arc Slider Stage (Banana-shaped Curved Video Cards) */}
      <section
        className="relative pt-12 pb-16 overflow-hidden select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Container className="max-w-7xl relative z-10">
          {/* Arc Stage Container */}
          <div className="relative w-full h-[580px] sm:h-[620px] md:h-[660px] mx-auto overflow-hidden">
            {mediaBuyingVideos.map((item, idx) => {
              const isCenter = idx === activeIndex;
              const isPlaying = playingVideoId === item.id;
              const style = getCardStyle(idx);
              const thumbnail = getVideoThumbnail(item.videoUrl, item.thumbnailUrl);

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (!isCenter) setActiveIndex(idx);
                  }}
                  style={style}
                  className={cn(
                    "absolute top-0 left-1/2 w-[280px] sm:w-[320px] md:w-[360px] rounded-3xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between bg-[#081028]/95 backdrop-blur-xl border shadow-2xl p-3 sm:p-4",
                    isCenter
                      ? "border-purple-400/50 shadow-[0_20px_50px_rgba(168,85,247,0.25)] cursor-default"
                      : "border-white/10 hover:border-purple-400/30 cursor-pointer"
                  )}
                >
                  {/* Video Preview Image / Active HTML5 Video Player */}
                  <div className="relative w-full aspect-9/16 max-h-[460px] sm:max-h-[490px] rounded-2xl overflow-hidden bg-black border border-white/10 group/preview flex items-center justify-center">
                    {isPlaying ? (
                      <video
                        src={item.videoUrl}
                        controls
                        autoPlay
                        preload="none"
                        playsInline
                        className="w-full h-full object-cover rounded-2xl"
                        onEnded={() => setPlayingVideoId(null)}
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div
                        className="relative w-full h-full cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTogglePlay(item.id, idx);
                        }}
                      >
                        <Image
                          src={thumbnail}
                          alt="Video Ad Preview"
                          fill
                          unoptimized
                          sizes="(max-width: 640px) 280px, 360px"
                          className="object-cover group-hover/preview:scale-105 transition-transform duration-500 opacity-90 group-hover/preview:opacity-100"
                        />

                        {/* Ambient gradient overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

                        {/* Floating Center Play Icon */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-14 h-14 rounded-full bg-linear-to-tr from-purple-600 to-cyan-400 p-0.5 shadow-xl group-hover/preview:scale-110 transition-transform duration-300">
                            <div className="w-full h-full rounded-full bg-[#060B1E]/90 backdrop-blur-md flex items-center justify-center text-white">
                              <Play className="h-6 w-6 fill-white translate-x-0.5 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* High-Tech subtle video indicator badge */}
                        <div className="absolute top-3 inset-x-3 flex items-center justify-between text-[10px] font-mono text-white/90 pointer-events-none">
                          <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/15">
                            HD Video
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-purple-950/80 backdrop-blur-md border border-purple-500/40 text-purple-300">
                            9:16
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom: ONLY a Play button, no title or description */}
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTogglePlay(item.id, idx);
                      }}
                      className={cn(
                        "w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold shadow-md transition-all cursor-pointer",
                        isPlaying
                          ? "bg-purple-950/90 text-purple-200 border border-purple-500/50 hover:bg-purple-900"
                          : "btn-tech-primary shadow-purple-600/30"
                      )}
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="h-4 w-4 fill-purple-300" />
                          <span>{lang === "ar" ? "إيقاف الفيديو" : "Pause Video"}</span>
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 fill-white" />
                          <span>{lang === "ar" ? "تشغيل الفيديو" : "Play Video"}</span>
                        </>
                      )}
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
              onClick={lang === "ar" ? nextVideo : prevVideo}
              aria-label="Previous Video"
              className="w-11 h-11 rounded-2xl bg-[#081028]/90 border border-purple-500/30 text-white flex items-center justify-center hover:bg-purple-950/70 hover:border-purple-400 transition-all cursor-pointer shadow-lg shadow-black/40 hover:scale-105"
            >
              <ChevronLeft className="h-5 w-5 text-purple-300" />
            </button>

            {/* Dots Indicator */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-xs sm:max-w-md">
              {mediaBuyingVideos.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setActiveIndex(dotIdx)}
                  aria-label={`Go to video ${dotIdx + 1}`}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                    dotIdx === activeIndex
                      ? "w-7 sm:w-8 bg-linear-to-r from-purple-400 to-cyan-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                      : "w-2 sm:w-2.5 bg-white/20 hover:bg-white/40"
                  )}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={lang === "ar" ? prevVideo : nextVideo}
              aria-label="Next Video"
              className="w-11 h-11 rounded-2xl bg-[#081028]/90 border border-purple-500/30 text-white flex items-center justify-center hover:bg-purple-950/70 hover:border-purple-400 transition-all cursor-pointer shadow-lg shadow-black/40 hover:scale-105"
            >
              <ChevronRight className="h-5 w-5 text-purple-300" />
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
}

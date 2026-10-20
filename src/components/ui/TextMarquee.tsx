"use client";

import * as React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

interface TextMarqueeProps {
  className?: string;
}

export function TextMarquee({ className }: TextMarqueeProps) {
  const { lang, t } = useLanguage();

  const isRtl = lang === "ar";
  const animationClass = isRtl
    ? "animate-marquee-infinite-reverse"
    : "animate-marquee-infinite";

  const marqueeItems = React.useMemo(() => [
    t("marqueeWeb"),
    t("marqueeAiVideo"),
    t("marqueeAds"),
    t("marqueeSolutions"),
  ], [t]);

  // Repeat the sequence multiple times so each track is ultra-wide (>4500px) and covers any display size
  const repeatIndices = [0, 1, 2, 3, 4, 5];

  const renderTrackItems = () => (
    <>
      {repeatIndices.map((repeatIdx) => (
        <React.Fragment key={repeatIdx}>
          {marqueeItems.map((item, itemIdx) => (
            <span
              key={`${repeatIdx}-${itemIdx}`}
              className="inline-flex items-center text-sm sm:text-base md:text-lg font-black tracking-wide text-slate-200 shrink-0"
            >
              <span className="hover:text-cyan-300 transition-colors cursor-default whitespace-nowrap">
                {item}
              </span>
              <span
                className="mx-5 sm:mx-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.85)] text-base sm:text-xl font-bold select-none shrink-0"
                aria-hidden="true"
              >
                ✦
              </span>
            </span>
          ))}
        </React.Fragment>
      ))}
    </>
  );

  return (
    <section
      aria-label={lang === "ar" ? "خدمات سمارت ميديا" : "Smart Media Services"}
      className={cn(
        "relative w-full overflow-hidden py-4 sm:py-5 border-y border-white/[0.04] bg-[#060B18] select-none",
        className
      )}
    >
      {/* Edge Vignette / Gradient Masks for Smooth Fade */}
      <div className="pointer-events-none absolute left-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-r from-[#060B18] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-l from-[#060B18] to-transparent z-10" />

      {/* 
        True Seamless Continuous Dual-Track Marquee:
        Track 1 and Track 2 are identical sibling tracks placed side-by-side.
        - In Arabic (RTL): animates from -100% to 0% (moving towards the right).
        - In English (LTR): animates from 0% to -100% (moving towards the left).
        When one track exits the visible frame, the adjacent track seamlessly replaces it.
      */}
      <div
        dir="ltr"
        className="flex overflow-hidden w-full select-none"
      >
        {/* Track 1 */}
        <div className={animationClass}>
          {renderTrackItems()}
        </div>

        {/* Track 2 (Immediately adjacent duplicate) */}
        <div className={animationClass} aria-hidden="true">
          {renderTrackItems()}
        </div>
      </div>
    </section>
  );
}

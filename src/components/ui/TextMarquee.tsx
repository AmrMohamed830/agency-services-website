"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TextMarqueeProps {
  className?: string;
}

export function TextMarquee({ className }: TextMarqueeProps) {
  const marqueeItems = [
    "تطوير المواقع",
    "فيديوهات ذكاء اصطناعي",
    "الإعلانات الممولة",
    "حلول رقمية",
  ];

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
      aria-label="خدمات سمارت ميديا"
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
        Both continuously animate from 0% to -100%.
        As Track 1 exits to the left, Track 2 immediately follows right behind it.
        When Track 1 reaches -100%, Track 2 has seamlessly occupied its exact starting position,
        giving a 100% continuous flow with ZERO blank screens and ZERO pauses.
      */}
      <div
        dir="ltr"
        className="flex overflow-hidden w-full select-none"
      >
        {/* Track 1 */}
        <div className="animate-marquee-infinite">
          {renderTrackItems()}
        </div>

        {/* Track 2 (Immediately adjacent duplicate) */}
        <div className="animate-marquee-infinite" aria-hidden="true">
          {renderTrackItems()}
        </div>
      </div>
    </section>
  );
}

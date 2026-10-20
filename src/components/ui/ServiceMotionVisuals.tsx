"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// 1. Web Development & Next.js SVG Motion
export function WebDevMotionVisual({ isHovered = false }: { isHovered?: boolean }) {
  return (
    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-[#091129] via-[#050B1B] to-[#0A1635] p-4 flex flex-col justify-between border border-blue-500/20 group/motion">
      {/* Background ambient radial glow */}
      <div
        className={cn(
          "absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cyan-500/20 blur-3xl transition-opacity duration-500",
          isHovered ? "opacity-100 scale-125" : "opacity-40"
        )}
      />
      <div
        className={cn(
          "absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-blue-600/25 blur-3xl transition-opacity duration-500",
          isHovered ? "opacity-100 scale-125" : "opacity-40"
        )}
      />

      {/* Top Window Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5 relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-cyan-300">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>Next.js Platform</span>
        </div>
      </div>

      {/* Interactive Code & Wireframe Visual */}
      <div className="relative z-10 flex-1 py-3 flex flex-col justify-center">
        {/* Animated Code Lines */}
        <div className="space-y-2 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="text-purple-400">const</span>
            <span className="text-cyan-300 font-bold">SmartPlatform</span>
            <span className="text-white">=</span>
            <span className="text-amber-300">async</span>
            <span className="text-blue-300">()</span>
            <span className="text-white">=&gt;</span>
            <span className="text-purple-400">&#123;</span>
          </div>

          <div className="pr-4 space-y-1.5 text-[11px]">
            <div className="flex items-center justify-between bg-white/[0.03] p-1.5 rounded-lg border border-white/5">
              <span className="text-slate-400">⚡ Performance Score</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
                99/100
              </span>
            </div>

            <div className="flex items-center justify-between bg-white/[0.03] p-1.5 rounded-lg border border-white/5">
              <span className="text-slate-400">🛡️ SEO & Speed</span>
              <span className="text-cyan-400 font-bold">Ultra Fast & Optimized</span>
            </div>
          </div>

          <div className="text-purple-400">&#125;</div>
        </div>

        {/* Dynamic Glowing Circuit Bar */}
        <div className="mt-3 relative h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
          <div
            className={cn(
              "h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full transition-all duration-700",
              isHovered ? "w-full shadow-[0_0_12px_#00d2ff]" : "w-3/4 animate-pulse"
            )}
          />
        </div>
      </div>

      {/* Bottom Status Tags */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-slate-400">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Production Ready
        </span>
        <span className="text-cyan-300 font-mono">Mobile-First</span>
      </div>
    </div>
  );
}

// 2. Merged Flagship Visual: Paid Ads & AI Video Studio SVG Motion
export function AdsAndAiMotionVisual({ isHovered = false }: { isHovered?: boolean }) {
  return (
    <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-[#091129] via-[#050B1B] to-[#140C2C] p-4 flex flex-col justify-between border border-purple-500/25 group/motion">
      {/* Background ambient radial glow */}
      <div
        className={cn(
          "absolute -top-12 -left-12 w-48 h-48 rounded-full bg-purple-600/25 blur-3xl transition-opacity duration-500",
          isHovered ? "opacity-100 scale-125" : "opacity-40"
        )}
      />
      <div
        className={cn(
          "absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-cyan-500/20 blur-3xl transition-opacity duration-500",
          isHovered ? "opacity-100 scale-125" : "opacity-40"
        )}
      />

      {/* Top Header: Platform Tags & AI Studio Badge */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 relative z-10">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="px-2 py-0.5 rounded-md bg-blue-600/20 text-blue-400 border border-blue-500/30 text-[10px] font-bold">
            Meta Ads
          </span>
          <span className="px-2 py-0.5 rounded-md bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 text-[10px] font-bold">
            TikTok
          </span>
          <span className="px-2 py-0.5 rounded-md bg-red-600/20 text-red-400 border border-red-500/30 text-[10px] font-bold">
            Google
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-950/60 border border-purple-500/30 text-[10px] font-mono text-purple-300 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            AI Studio + ROAS
          </span>
        </div>
      </div>

      {/* Middle Interactive Grid: ROAS Metric Bars + AI Video Frames */}
      <div className="relative z-10 flex-1 py-2 grid grid-cols-12 gap-3 items-center">
        {/* Left Side (5 cols): ROAS Growth Bars */}
        <div className="col-span-5 flex flex-col justify-between h-full py-1">
          <div className="text-[10px] font-bold text-slate-400 flex items-center justify-between mb-1">
            <span>عائد الإعلانات</span>
            <span className="text-emerald-400 font-mono">Live</span>
          </div>

          <div className="flex items-end justify-between gap-1.5 h-18 bg-white/[0.02] p-1.5 rounded-xl border border-white/5">
            {/* Meta */}
            <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
              <div
                className={cn(
                  "w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-md transition-all duration-700",
                  isHovered ? "h-[90%] shadow-[0_0_10px_#38bdf8]" : "h-[70%]"
                )}
              />
              <span className="text-[9px] font-mono text-cyan-300 font-bold">4.2x</span>
            </div>

            {/* Google */}
            <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
              <div
                className={cn(
                  "w-full bg-gradient-to-t from-purple-600 to-pink-500 rounded-md transition-all duration-700",
                  isHovered ? "h-[100%] shadow-[0_0_10px_#c084fc]" : "h-[80%]"
                )}
              />
              <span className="text-[9px] font-mono text-purple-300 font-bold">5.1x</span>
            </div>

            {/* TikTok */}
            <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
              <div
                className={cn(
                  "w-full bg-gradient-to-t from-indigo-600 to-purple-400 rounded-md transition-all duration-700",
                  isHovered ? "h-[85%] shadow-[0_0_10px_#818cf8]" : "h-[65%]"
                )}
              />
              <span className="text-[9px] font-mono text-indigo-300 font-bold">3.8x</span>
            </div>
          </div>
        </div>

        {/* Right Side (7 cols): AI Video Creatives Timeline */}
        <div className="col-span-7 flex flex-col justify-between h-full py-1">
          <div className="text-[10px] font-bold text-slate-400 flex items-center justify-between mb-1">
            <span>مبتكرات AI السينمائية</span>
            <span className="text-cyan-300 font-mono text-[9px]">4K 60FPS</span>
          </div>

          {/* 3 AI Video Frames */}
          <div className="grid grid-cols-3 gap-1.5">
            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-blue-950/60 to-cyan-950/40 border border-cyan-500/30 p-1 flex flex-col items-center justify-center text-center">
              <span className="text-[9px] font-mono text-cyan-300 font-bold">Hook 01</span>
              <span className="text-[8px] text-slate-400">جذب انتباه</span>
            </div>
            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-purple-950/60 to-pink-950/40 border border-purple-500/30 p-1 flex flex-col items-center justify-center text-center">
              <span className="text-[9px] font-mono text-purple-300 font-bold">Story 02</span>
              <span className="text-[8px] text-slate-400">قيمة العرض</span>
            </div>
            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-emerald-950/60 to-teal-950/40 border border-emerald-500/30 p-1 flex flex-col items-center justify-center text-center">
              <span className="text-[9px] font-mono text-emerald-300 font-bold">CTA 03</span>
              <span className="text-[8px] text-slate-400">تحويل فوري</span>
            </div>
          </div>

          {/* Audio Waveform Indicator */}
          <div className="flex items-center justify-center gap-1 h-2.5 pt-1">
            {[40, 70, 90, 60, 100, 50, 85, 95, 60, 45, 80, 100, 75, 40].map((h, i) => (
              <span
                key={i}
                className={cn(
                  "w-1 rounded-full bg-gradient-to-t from-cyan-400 to-purple-400 transition-all duration-300",
                  isHovered ? "animate-pulse" : "opacity-60"
                )}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom KPI Banner */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10 text-[10px]">
        <span className="text-slate-300 font-medium">استهداف دقيق + سكريبتات مقنعة</span>
        <span className="text-emerald-400 font-bold font-mono flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          +48% Conversions & High CTR
        </span>
      </div>
    </div>
  );
}

// Retain legacy exports as aliases for backwards compatibility
export function PaidAdsMotionVisual(props: { isHovered?: boolean }) {
  return <AdsAndAiMotionVisual {...props} />;
}

export function AiVideoMotionVisual(props: { isHovered?: boolean }) {
  return <AdsAndAiMotionVisual {...props} />;
}


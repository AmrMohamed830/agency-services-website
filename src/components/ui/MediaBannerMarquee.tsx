"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const mediaBannerImages = [
  "/images/media/WhatsApp Image 2026-10-12 at 5.29.46 PM.jpeg",
  "/images/media/WhatsApp Image 2026-10-12 at 5.29.47 PM (1).jpeg",
  "/images/media/WhatsApp Image 2026-10-12 at 5.29.47 PM.jpeg",
  "/images/media/WhatsApp Image 2026-10-12 at 5.29.48 PM (1).jpeg",
  "/images/media/WhatsApp Image 2026-10-12 at 5.29.48 PM (2).jpeg",
  "/images/media/WhatsApp Image 2026-10-12 at 5.29.48 PM.jpeg",
  "/images/media/WhatsApp Image 2026-10-12 at 5.29.49 PM (1).jpeg",
  "/images/media/WhatsApp Image 2026-10-12 at 5.29.49 PM (3).jpeg",
  "/images/media/WhatsApp Image 2026-10-12 at 5.29.49 PM (4).jpeg",
  "/images/media/WhatsApp Image 2026-10-12 at 5.29.49 PM.jpeg",
  "/images/media/WhatsApp Image 2026-10-12 at 5.29.50 PM (1).jpeg",
  "/images/media/WhatsApp Image 2026-10-12 at 5.29.50 PM (2).jpeg",
  "/images/media/WhatsApp Image 2026-10-12 at 5.29.50 PM (3).jpeg",
  "/images/media/WhatsApp Image 2026-10-12 at 5.29.50 PM (4).jpeg",
  "/images/media/WhatsApp Image 2026-10-12 at 5.29.50 PM (5).jpeg",
  "/images/media/WhatsApp Image 2026-10-12 at 5.29.50 PM.jpeg",
  "/images/media/WhatsApp Image 2026-10-12 at 5.29.51 PM.jpeg",
];

export function MediaBannerMarquee({ className }: { className?: string }) {
  const renderTrack = () => (
    <div className="flex items-center gap-4 sm:gap-6 shrink-0 px-2 sm:px-3">
      {mediaBannerImages.map((src, idx) => (
        <div
          key={idx}
          className="relative h-28 sm:h-36 md:h-44 w-40 sm:w-52 md:w-60 rounded-2xl overflow-hidden border border-purple-500/25 bg-[#070D24] shadow-lg shrink-0 group hover:border-purple-400/60 transition-all duration-300"
        >
          <Image
            src={src}
            alt={`Campaign visual ${idx + 1}`}
            fill
            sizes="(max-width: 768px) 208px, 240px"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>
      ))}
    </div>
  );

  return (
    <section
      aria-label="معرض الحملات الإعلانية والمبتكرات"
      className={cn(
        "relative w-full overflow-hidden py-6 sm:py-8 border-y border-purple-500/20 bg-[#040816] select-none",
        className
      )}
    >
      {/* Edge Vignette Masks for Smooth Fade */}
      <div className="pointer-events-none absolute left-0 inset-y-0 w-16 sm:w-32 bg-linear-to-r from-[#040816] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 inset-y-0 w-16 sm:w-32 bg-linear-to-l from-[#040816] to-transparent z-10" />

      {/* Dual Continuous Infinite Track */}
      <div dir="ltr" className="flex overflow-hidden w-full select-none">
        <div className="animate-marquee-infinite">
          {renderTrack()}
        </div>
        <div className="animate-marquee-infinite" aria-hidden="true">
          {renderTrack()}
        </div>
      </div>
    </section>
  );
}

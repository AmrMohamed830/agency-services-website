"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizeMap = {
    sm: "h-8 sm:h-9 max-h-9",
    md: "h-9 sm:h-10 max-h-10",
    lg: "h-11 sm:h-13 max-h-13",
  };

  return (
    <div
      dir="ltr"
      className={cn("inline-flex items-center bg-transparent select-none", className)}
      style={{ direction: "ltr", transform: "none" }}
    >
      <img
        src="/images/logo.png"
        alt="Smart Media"
        className={cn(
          "w-auto max-w-[190px] sm:max-w-[220px] object-contain bg-transparent block",
          sizeMap[size]
        )}
        style={{ direction: "ltr", transform: "none" }}
      />
    </div>
  );
}

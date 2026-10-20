import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "outline" | "cyan" | "purple";
}

export function Badge({
  className,
  variant = "secondary",
  children,
  ...props
}: BadgeProps) {
  const variants = {
    primary:
      "bg-blue-600/20 text-cyan-300 border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]",
    secondary:
      "bg-white/[0.04] text-slate-300 border border-white/10",
    outline:
      "border border-white/15 text-slate-200 bg-transparent",
    cyan:
      "bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]",
    purple:
      "bg-purple-950/60 text-purple-300 border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide backdrop-blur-sm",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

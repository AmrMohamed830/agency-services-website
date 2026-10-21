import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 disabled:opacity-50 disabled:pointer-events-none cursor-pointer rounded-xl";

    const variants = {
      primary:
        "btn-tech-primary shadow-lg",
      secondary:
        "bg-white/10 text-white hover:bg-white/15 border border-white/15 active:scale-[0.98]",
      outline:
        "btn-tech-outline",
      ghost:
        "bg-transparent text-slate-300 hover:text-white hover:bg-white/5",
      link: "text-purple-400 underline-offset-4 hover:underline p-0 h-auto",
    };

    const sizes = {
      sm: "h-9 px-3.5 text-xs gap-1.5",
      md: "h-11 px-5 text-sm gap-2",
      lg: "h-13 px-7 text-base gap-2.5 font-extrabold",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

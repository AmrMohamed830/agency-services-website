"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  distance?: number; // in pixels
  direction?: "up" | "down" | "left" | "right" | "fade";
  once?: boolean;
  priority?: boolean; // For above-the-fold content (Hero)
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 700,
  distance = 24,
  direction = "up",
  once = true,
  priority = false,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = React.useState(priority);
  const elementRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (priority) return;

    const el = elementRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      // In non-browser environments or when unsupported, trigger safely on next tick
      const timer = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        rootMargin: "50px 0px -20px 0px",
        threshold: 0.05,
      }
    );

    observer.observe(el);

    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1200 + delay);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [once, priority, delay]);

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0)";
    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0)`;
      case "down":
        return `translate3d(0, -${distance}px, 0)`;
      case "left":
        return `translate3d(${distance}px, 0, 0)`;
      case "right":
        return `translate3d(-${distance}px, 0, 0)`;
      case "fade":
      default:
        return "translate3d(0, 0, 0)";
    }
  };

  return (
    <div
      ref={elementRef}
      className={cn("will-change-transform", className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 100,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return (
          <ScrollReveal delay={index * staggerDelay} direction="up">
            {child}
          </ScrollReveal>
        );
      })}
    </div>
  );
}

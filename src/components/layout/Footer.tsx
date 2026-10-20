"use client";

import * as React from "react";
import Link from "next/link";
import { agencyConfig } from "@/data/agency";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { useLanguage } from "@/lib/LanguageContext";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-[#040812] border-t border-white/[0.04] py-12 text-slate-400 relative overflow-hidden">
      {/* Subtle bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-20 bg-blue-600/10 blur-3xl pointer-events-none" />

      <Container className="max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline with New Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" aria-label="Smart Media">
              <Logo size="sm" showText={true} />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-slate-400">
            <Link href="/" className="hover:text-cyan-300 transition-colors">
              {t("navHome")}
            </Link>
            <Link href="/#services" className="hover:text-cyan-300 transition-colors">
              {t("navServices")}
            </Link>
            <Link href="/work" className="hover:text-cyan-300 transition-colors">
              {t("navWork")}
            </Link>
            <Link href="/#process" className="hover:text-cyan-300 transition-colors">
              {t("navProcess")}
            </Link>
            <Link href="/#faq" className="hover:text-cyan-300 transition-colors">
              {t("navFaq")}
            </Link>
            <Link href="/contact" className="hover:text-cyan-300 transition-colors">
              {t("navContact")}
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-xs text-slate-400">
            © {currentYear} {agencyConfig.name}. {t("copyright")}
          </div>
        </div>
      </Container>
    </footer>
  );
}

"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { agencyConfig } from "@/data/agency";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/LanguageContext";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-[#F3ECE0] border-t border-[#E5DDD1] py-12 text-[#544D45]">
      <Container className="max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline with New Logo */}
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 rounded-xl overflow-hidden border border-[#E5DDD1] bg-[#070E24]">
              <Image
                src="/images/smart-media-brand-logo-new.jpg"
                alt="Smart Media Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-[#2D2926]">
                {t("brandName")}
              </span>
              <p className="text-xs text-[#8C7662]">
                {t("footerTagline")}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-[#544D45]">
            <Link href="/" className="hover:text-[#B85D43] transition-colors">
              {t("navHome")}
            </Link>
            <Link href="/#services" className="hover:text-[#B85D43] transition-colors">
              {t("navServices")}
            </Link>
            <Link href="/work" className="hover:text-[#B85D43] transition-colors">
              {t("navWork")}
            </Link>
            <Link href="/#process" className="hover:text-[#B85D43] transition-colors">
              {t("navProcess")}
            </Link>
            <Link href="/#faq" className="hover:text-[#B85D43] transition-colors">
              {t("navFaq")}
            </Link>
            <Link href="/contact" className="hover:text-[#B85D43] transition-colors">
              {t("navContact")}
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-xs text-[#8C7662]">
            © {currentYear} {agencyConfig.name}. {t("copyright")}
          </div>
        </div>
      </Container>
    </footer>
  );
}

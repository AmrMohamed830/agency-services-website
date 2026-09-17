"use client";

import * as React from "react";
import { faqDataAr, faqDataEn } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/LanguageContext";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);
  const { lang, t } = useLanguage();

  const faqs = lang === "ar" ? faqDataAr : faqDataEn;

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 sm:py-24">
      <Container className="max-w-4xl">
        {/* Section Header: Centered Alignment */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE8DC] border border-[#E2D6C5] text-xs font-bold text-[#876E57] mb-3">
            <HelpCircle className="h-3.5 w-3.5 text-[#B85D43]" />
            <span>{t("faqBadge")}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#2D2926] leading-tight tracking-tight">
            {t("faqTitle")}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#685F56] leading-relaxed">
            {t("faqSubtext")}
          </p>
        </div>

        {/* FAQ Accordion with Dynamic LTR/RTL Alignment */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            const numPrefix = String(idx + 1).padStart(2, "0");
            return (
              <div
                key={idx}
                className="bg-[#FDFBF7] border border-[#E5DDD1] rounded-2xl overflow-hidden transition-all duration-200 shadow-2xs hover:shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className={cn(
                    "w-full p-5 sm:p-6 font-extrabold text-[#2D2926] text-base sm:text-lg flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F7F2EA] transition-colors",
                    lang === "ar" ? "text-right" : "text-left"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black text-[#B85D43] px-2.5 py-1 rounded-md bg-[#F4EDE2] border border-[#E5DDD1]">
                      {numPrefix}
                    </span>
                    <span>{item.question}</span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-[#B85D43] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div
                    className={cn(
                      "px-6 pb-6 pt-2 text-sm text-[#685F56] leading-relaxed border-t border-[#EAE2D5] bg-[#FAF6F0]/40",
                      lang === "ar" ? "text-right" : "text-left"
                    )}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

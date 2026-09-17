"use client";

import * as React from "react";
import { faqData } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/LanguageContext";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQSection() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);
  const { t } = useLanguage();

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 sm:py-16">
      <Container className="max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE8DC] text-xs font-bold text-[#876E57] mb-3">
            <HelpCircle className="h-3.5 w-3.5 text-[#B85D43]" />
            <span>{t("faqBadge")}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2D2926]">
            {t("faqTitle")}
          </h2>
          <p className="mt-2 text-sm text-[#685F56]">
            {t("faqSubtext")}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#FDFBF7] border border-[#E5DDD1] rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-right font-bold text-[#2D2926] text-sm sm:text-base flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F7F2EA]"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#B85D43] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#685F56] leading-relaxed border-t border-[#EAE2D5]">
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

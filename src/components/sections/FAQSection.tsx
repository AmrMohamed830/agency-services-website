"use client";

import * as React from "react";
import { faqDataAr, faqDataEn } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
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
    <section id="faq" className="py-16 sm:py-24 bg-[#060B18] border-t border-white/[0.04] relative">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <Container className="max-w-4xl relative z-10">
        {/* Section Header: Centered Alignment */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-bold text-cyan-300 mb-3 backdrop-blur-sm shadow-[0_0_12px_rgba(6,182,212,0.15)]">
              <HelpCircle className="h-3.5 w-3.5 text-cyan-400" />
              <span>{t("faqBadge")}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
              {lang === "ar" ? (
                <>
                  أسئلة <span className="text-gradient-cyan-purple">بتيجي في بالك</span>
                </>
              ) : (
                <>
                  Frequently Asked <span className="text-gradient-cyan-purple">Questions</span>
                </>
              )}
            </h2>

            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {t("faqSubtext")}
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            const numPrefix = String(idx + 1).padStart(2, "0");
            return (
              <ScrollReveal key={idx} direction="up" delay={120 + idx * 50}>
                <div
                  className={cn(
                    "card-tech rounded-2xl overflow-hidden transition-all duration-300",
                    isOpen ? "border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.15)]" : "border-blue-500/15"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className={cn(
                      "w-full p-5 sm:p-6 font-extrabold text-white text-base sm:text-lg flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.03] transition-colors",
                      lang === "ar" ? "text-right" : "text-left"
                    )}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="text-xs font-mono font-black text-cyan-300 px-2.5 py-1 rounded-lg bg-cyan-950/50 border border-cyan-500/30">
                        {numPrefix}
                      </span>
                      <span className="hover:text-cyan-300 transition-colors">{item.question}</span>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-cyan-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-cyan-300" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div
                      className={cn(
                        "px-6 pb-6 pt-2 text-sm text-slate-300 leading-relaxed border-t border-white/10 bg-white/[0.02]",
                        lang === "ar" ? "text-right" : "text-left"
                      )}
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

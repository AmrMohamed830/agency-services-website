"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/lib/LanguageContext";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  const { lang, t } = useLanguage();

  const steps = [
    { num: t("step1Num"), title: t("step1Title"), desc: t("step1Desc") },
    { num: t("step2Num"), title: t("step2Title"), desc: t("step2Desc") },
    { num: t("step3Num"), title: t("step3Title"), desc: t("step3Desc") },
    { num: t("step4Num"), title: t("step4Title"), desc: t("step4Desc") },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-[#060B18] border-t border-white/[0.04] relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="max-w-7xl relative z-10">
        {/* Section Header: Centered Alignment */}
        <ScrollReveal direction="up" delay={100}>
          <div className="max-w-3xl mx-auto mb-14 sm:mb-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-bold text-cyan-300 mb-3 backdrop-blur-sm shadow-[0_0_12px_rgba(6,182,212,0.15)]">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>{t("processBadge")}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
              {lang === "ar" ? (
                <>
                  إزاي بنشتغل معاك <span className="text-gradient-cyan-purple">وننفذ طلبك؟</span>
                </>
              ) : (
                <>
                  How We Execute & <span className="text-gradient-cyan-purple">Deliver Your Vision</span>
                </>
              )}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {t("processSubtext")}
            </p>
          </div>
        </ScrollReveal>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <ScrollReveal key={idx} direction="up" delay={150 + idx * 80}>
              <div
                className={cn(
                  "card-tech rounded-3xl p-7 flex flex-col justify-between h-full relative group",
                  lang === "ar" ? "text-right" : "text-left"
                )}
              >
                <div>
                  {/* Glowing Step Number Frame */}
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 text-cyan-300 font-black text-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-cyan-400 group-hover:to-blue-600 group-hover:text-white group-hover:shadow-[0_0_15px_#00d2ff] transition-all duration-300">
                    {item.num}
                  </div>

                  <h3 className="text-lg font-extrabold text-white mb-3 leading-snug group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Step {item.num}</span>
                  <span className="text-cyan-400/80">✦ Smart Media</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

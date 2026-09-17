"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/LanguageContext";
import { Sparkles } from "lucide-react";

export function ProcessSection() {
  const { t } = useLanguage();

  const steps = [
    { num: t("step1Num"), title: t("step1Title"), desc: t("step1Desc") },
    { num: t("step2Num"), title: t("step2Title"), desc: t("step2Desc") },
    { num: t("step3Num"), title: t("step3Title"), desc: t("step3Desc") },
    { num: t("step4Num"), title: t("step4Title"), desc: t("step4Desc") },
  ];

  return (
    <section id="process" className="py-14 sm:py-24 bg-[#FAF6F0]/80 border-y border-[#EAE2D5]">
      <Container className="max-w-7xl">
        {/* Section Header: Centered Alignment */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE8DC] border border-[#E2D6C5] text-xs font-bold text-[#876E57] mb-3">
            <Sparkles className="h-3.5 w-3.5 text-[#B85D43]" />
            <span>{t("processBadge")}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#2D2926] leading-tight tracking-tight">
            {t("processTitle")}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#685F56] leading-relaxed">
            {t("processSubtext")}
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FDFBF7] border border-[#E5DDD1] rounded-3xl p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 relative group text-right"
            >
              <div>
                <div className="h-12 w-12 rounded-2xl bg-[#F4EDE2] border border-[#E5DDD1] text-[#B85D43] font-black text-xl flex items-center justify-center mb-5 group-hover:bg-[#B85D43] group-hover:text-white transition-colors">
                  {item.num}
                </div>

                <h3 className="text-lg font-extrabold text-[#2D2926] mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#685F56] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

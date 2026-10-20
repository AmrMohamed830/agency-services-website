"use client";

import * as React from "react";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FolderGit2, Code2, TrendingUp, ExternalLink, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const { lang, t } = useLanguage();
  const [activeFilter, setActiveFilter] = React.useState<"web" | "ads">("web");

  const filteredProjects = projectsData.filter((project) => project.type === activeFilter);

  const webCount = projectsData.filter((p) => p.type === "web").length;
  const adsCount = projectsData.filter((p) => p.type === "ads").length;

  return (
    <section id="projects" className="py-12 sm:py-20 bg-[#060B18] relative overflow-hidden">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="max-w-6xl relative z-10">
        {/* Work Page Hero Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs sm:text-sm font-bold text-cyan-300 mb-4 backdrop-blur-sm shadow-[0_0_12px_rgba(6,182,212,0.15)]">
              <FolderGit2 className="h-3.5 w-3.5 text-cyan-400" />
              <span>{t("projectsBadge")}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
              {lang === "ar" ? (
                <>
                  مشاريع حقيقية <span className="text-gradient-cyan-purple">ونتائج قياسية</span>
                </>
              ) : (
                <>
                  Real Projects & <span className="text-gradient-cyan-purple">Proven Results</span>
                </>
              )}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
              {t("workHeroSubtext")}
            </p>
          </div>
        </ScrollReveal>

        {/* 2 Filter Buttons Centered */}
        <ScrollReveal direction="up" delay={150}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 sm:mb-14">
            {/* Web Button */}
            <button
              type="button"
              onClick={() => setActiveFilter("web")}
              className={cn(
                "px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer flex items-center gap-3 border",
                activeFilter === "web"
                  ? "btn-tech-primary shadow-[0_0_20px_rgba(59,130,246,0.5)] scale-[1.03]"
                  : "btn-tech-outline text-slate-300 hover:text-white"
              )}
            >
              <Code2 className="h-4.5 w-4.5 text-cyan-400" />
              <span>{t("catWeb")}</span>
              <span
                className={cn(
                  "px-2.5 py-0.5 rounded-full text-[10px] font-black",
                  activeFilter === "web"
                    ? "bg-white/20 text-white"
                    : "bg-white/10 text-cyan-300"
                )}
              >
                {webCount}
              </span>
            </button>

            {/* Ads Button */}
            <button
              type="button"
              onClick={() => setActiveFilter("ads")}
              className={cn(
                "px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer flex items-center gap-3 border",
                activeFilter === "ads"
                  ? "btn-tech-primary shadow-[0_0_20px_rgba(168,85,247,0.5)] scale-[1.03]"
                  : "btn-tech-outline text-slate-300 hover:text-white"
              )}
            >
              <TrendingUp className="h-4.5 w-4.5 text-purple-400" />
              <span>{t("catAds")}</span>
              <span
                className={cn(
                  "px-2.5 py-0.5 rounded-full text-[10px] font-black",
                  activeFilter === "ads"
                    ? "bg-white/20 text-white"
                    : "bg-white/10 text-purple-300"
                )}
              >
                {adsCount}
              </span>
            </button>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => {
            const title = lang === "ar" ? project.titleAr : project.titleEn;
            const industry = lang === "ar" ? project.clientIndustryAr : project.clientIndustryEn;
            const summary = lang === "ar" ? project.summaryAr : project.summaryEn;

            return (
              <ScrollReveal key={project.id} direction="up" delay={150 + idx * 80}>
                <div className="card-tech rounded-3xl overflow-hidden flex flex-col justify-between h-full group hover:-translate-y-1.5 transition-all duration-300">
                  <div>
                    {/* Visual Card Header */}
                    <div className="relative w-full aspect-[16/9] bg-[#070E24] overflow-hidden border-b border-white/10 flex items-center justify-center p-4">
                      {project.imageUrl ? (
                        <Image
                          src={project.imageUrl}
                          alt={title}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        />
                      ) : (
                        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-950/60 to-purple-950/60 border border-blue-500/20 p-4 flex flex-col justify-between">
                          <div className="flex items-center justify-between text-xs text-slate-400">
                            <span className="font-mono text-cyan-300">Smart Media Case</span>
                            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                          </div>
                          <div className="text-center py-2">
                            <span className="text-base font-black text-white">{title}</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-white/10 pt-2 font-mono">
                            <span>{industry}</span>
                            <span className="text-emerald-400">Verified Results</span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-6 sm:p-7">
                      {/* Category Badge & Industry */}
                      <div className="flex items-center justify-between mb-3.5">
                        <span
                          className={cn(
                            "text-[11px] font-extrabold px-3 py-1 rounded-full border inline-flex items-center gap-1.5",
                            project.type === "web"
                              ? "bg-cyan-950/60 text-cyan-300 border-cyan-500/30"
                              : "bg-purple-950/60 text-purple-300 border-purple-500/30"
                          )}
                        >
                          {project.type === "web" ? (
                            <>
                              <Code2 className="h-3 w-3" />
                              <span>{t("catWeb")}</span>
                            </>
                          ) : (
                            <>
                              <TrendingUp className="h-3 w-3" />
                              <span>{t("catAds")}</span>
                            </>
                          )}
                        </span>

                        <span className="text-xs text-slate-400 font-bold">{industry}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-black text-white group-hover:text-cyan-300 transition-colors mb-2.5 leading-snug">
                        {title}
                      </h3>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {summary}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Live Demo Button if demoUrl exists */}
                  {project.demoUrl && (
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full btn-tech-primary inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-extrabold shadow-sm transition-all cursor-pointer"
                      >
                        <span>{lang === "ar" ? "مشاهدة المشروع الحي" : "View Live Demo"}</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
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

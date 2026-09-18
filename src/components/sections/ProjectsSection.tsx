"use client";

import * as React from "react";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { FolderGit2, Code2, TrendingUp, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const { lang, t } = useLanguage();
  const [activeFilter, setActiveFilter] = React.useState<"web" | "ads">("web");

  const filteredProjects = projectsData.filter((project) => project.type === activeFilter);

  const webCount = projectsData.filter((p) => p.type === "web").length;
  const adsCount = projectsData.filter((p) => p.type === "ads").length;

  return (
    <section id="projects" className="py-8 sm:py-16">
      <Container className="max-w-6xl">
        {/* Work Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE8DC] border border-[#E2D6C5] text-xs sm:text-sm font-bold text-[#876E57] mb-4 shadow-2xs">
            <FolderGit2 className="h-3.5 w-3.5 text-[#B85D43]" />
            <span>{t("projectsBadge")}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#2D2926] leading-tight tracking-tight">
            {t("workHeroTitle")}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#685F56] leading-relaxed max-w-2xl mx-auto">
            {t("workHeroSubtext")}
          </p>
        </div>

        {/* 2 Filter Buttons Centered */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 sm:mb-14">
          {/* Web Button */}
          <button
            type="button"
            onClick={() => setActiveFilter("web")}
            className={cn(
              "px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer flex items-center gap-3 shadow-2xs border",
              activeFilter === "web"
                ? "bg-[#B85D43] text-white border-[#B85D43] shadow-md scale-[1.03]"
                : "bg-[#FDFBF7] text-[#544D45] border-[#E5DDD1] hover:bg-[#F4EDE2]"
            )}
          >
            <Code2 className="h-4.5 w-4.5" />
            <span>{t("catWeb")}</span>
            <span
              className={cn(
                "px-2.5 py-0.5 rounded-full text-[10px] font-black",
                activeFilter === "web"
                  ? "bg-white/20 text-white"
                  : "bg-[#EFE8DC] text-[#876E57]"
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
              "px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer flex items-center gap-3 shadow-2xs border",
              activeFilter === "ads"
                ? "bg-[#B85D43] text-white border-[#B85D43] shadow-md scale-[1.03]"
                : "bg-[#FDFBF7] text-[#544D45] border-[#E5DDD1] hover:bg-[#F4EDE2]"
            )}
          >
            <TrendingUp className="h-4.5 w-4.5" />
            <span>{t("catAds")}</span>
            <span
              className={cn(
                "px-2.5 py-0.5 rounded-full text-[10px] font-black",
                activeFilter === "ads"
                  ? "bg-white/20 text-white"
                  : "bg-[#EFE8DC] text-[#876E57]"
              )}
            >
              {adsCount}
            </span>
          </button>
        </div>

        {/* Projects Grid - Sleek & Compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const title = lang === "ar" ? project.titleAr : project.titleEn;
            const industry = lang === "ar" ? project.clientIndustryAr : project.clientIndustryEn;
            const summary = lang === "ar" ? project.summaryAr : project.summaryEn;

            return (
              <div
                key={project.id}
                className="bg-[#FDFBF7] border border-[#E5DDD1] rounded-3xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  {/* Image Banner Header */}
                  {project.imageUrl && (
                    <div className="relative w-full aspect-[16/9] bg-[#1E140C] overflow-hidden border-b border-[#E5DDD1]">
                      <Image
                        src={project.imageUrl}
                        alt={title}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="p-6 sm:p-7">
                    {/* Category Badge & Industry */}
                    <div className="flex items-center justify-between mb-3.5">
                      <span
                        className={cn(
                          "text-[11px] font-extrabold px-3 py-1 rounded-full border inline-flex items-center gap-1.5",
                          project.type === "web"
                            ? "bg-[#F5EFE6] text-[#B85D43] border-[#EAE2D5]"
                            : "bg-[#EFE8DC] text-[#876E57] border-[#E2D6C5]"
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

                      <span className="text-xs text-[#8C7662] font-bold">{industry}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-[#2D2926] group-hover:text-[#B85D43] transition-colors mb-2.5 leading-snug">
                      {title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-[#685F56] leading-relaxed">
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
                      className="w-full btn-terracotta inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-extrabold shadow-2xs transition-all cursor-pointer"
                    >
                      <span>{lang === "ar" ? "مشاهدة الموقع" : "View Website"}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
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

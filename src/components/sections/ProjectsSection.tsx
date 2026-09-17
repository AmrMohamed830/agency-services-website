"use client";

import * as React from "react";
import { projectsData } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { FolderGit2, Check } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export function ProjectsSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = React.useState<string>("الكل");

  const categories = [t("catAll"), t("catWeb"), t("catLanding")];

  const filteredProjects =
    activeCategory === t("catAll") || activeCategory === "الكل"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-12 sm:py-18">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE8DC] text-xs font-bold text-[#876E57] mb-2.5">
              <FolderGit2 className="h-3.5 w-3.5 text-[#B85D43]" />
              <span>{t("projectsBadge")}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2D2926]">
              {t("projectsTitle")}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#685F56]">
              {t("projectsSubtext")}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#B85D43] text-white shadow-xs"
                    : "bg-[#FDFBF7] text-[#544D45] border border-[#E5DDD1] hover:bg-[#F5EFE6]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#FDFBF7] border border-[#E5DDD1] rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group"
            >
              <div>
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#F3ECE0] text-[#8C7662] border border-[#E6DCCE]">
                    {project.category}
                  </span>
                  <span className="text-xs text-[#8C7662] font-semibold">
                    {project.clientIndustry}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#2D2926] group-hover:text-[#B85D43] transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#685F56] leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-[#F5EFE6] text-[#685F56] border border-[#EBE3D7]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Solution highlight */}
              <div className="pt-4 border-t border-[#EAE2D5] flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold">
                  <Check className="h-4 w-4" />
                  <span>نتائج محققة وحقيقية</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

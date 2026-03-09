import React, { useState } from "react";
import {
  HiCode,
  HiCloud,
  HiLightningBolt,
  HiDatabase,
  HiBadgeCheck,
  HiTerminal,
  HiChevronRight,
  HiCursorClick,
  HiRefresh,
  HiCheckCircle,
  HiAcademicCap,
} from "react-icons/hi";
import { skillCategories, currentlyExploring } from "../../data/SkillsEntry";
import { Proficiency } from "../../types/skills";

const ICON_MAP: Record<string, any> = {
  HiCode: HiCode,
  HiCloud: HiCloud,
  HiLightningBolt: HiLightningBolt,
  HiDatabase: HiDatabase,
  HiBadgeCheck: HiBadgeCheck,
};

const PROFICIENCY_STYLES: Record<
  Proficiency,
  { border: string; text: string }
> = {
  Advanced: { border: "border-blue-500/50", text: "text-blue-400" },
  Proficient: { border: "border-emerald-500/50", text: "text-emerald-400" },
  Intermediate: { border: "border-amber-500/50", text: "text-amber-400" },
  Learning: { border: "border-purple-500/50", text: "text-purple-400" },
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  const selectedCategory =
    skillCategories.find((c) => c.id === activeCategory) || skillCategories[0];
  const IconComponent = ICON_MAP[selectedCategory.icon];

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-full lg:w-72 lg:sticky lg:top-24 space-y-6 shrink-0">
        <div className="glass-panel p-5 border-l-4 border-l-blue-500/50">
          <div className="flex items-center gap-2 mb-2 text-blue-400 font-bold uppercase tracking-tighter text-xs">
            <HiTerminal className="w-4 h-4" />
            <span>Skills</span>
          </div>
          <p className="text-[10px] text-gray-500 font-mono leading-tight">
            Navigation tree for technical stack and production metrics.
          </p>
        </div>

        <nav className="space-y-2">
          {skillCategories.map((category) => {
            const CategoryIcon = ICON_MAP[category.icon];
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all group ${
                  isActive
                    ? "bg-blue-500/10 border-blue-500/30 text-white shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                    : "bg-white/5 border-transparent text-gray-400 hover:bg-white/[0.08] hover:border-white/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <CategoryIcon
                    className={`w-5 h-5 ${isActive ? "text-blue-400" : "text-gray-600 group-hover:text-gray-400"}`}
                  />
                  <span className="text-[11px] font-bold uppercase tracking-widest truncate max-w-[150px]">
                    {category.title.split("_").join(" ")}
                  </span>
                </div>
                <HiChevronRight
                  className={`w-4 h-4 transition-transform ${isActive ? "text-blue-400 translate-x-1" : "text-gray-700"}`}
                />
              </button>
            );
          })}
        </nav>

        {/* SYSTEM PULSE - Currently Exploring */}
        <div className="glass-panel overflow-hidden border-t-2 border-t-purple-500/30">
          <div className="bg-purple-500/10 px-4 py-2 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-purple-400 font-mono text-[10px] uppercase font-bold tracking-widest">
              <HiRefresh className="w-3 h-3 animate-spin-slow" />
              <span>Active_Growth</span>
            </div>
          </div>
          <div className="p-4 space-y-3 font-mono">
            {currentlyExploring.map((item: any, i) => (
              <div key={i} className="space-y-1 group">
                <div className="flex items-center gap-2 text-[10px]">
                  <span className="text-purple-500/70">{">"}</span>
                  <span className="text-gray-300 font-bold group-hover:text-purple-400 transition-colors">
                    {item.name}
                  </span>
                </div>
                <div className="pl-4 text-[9px] text-gray-600 flex items-center gap-1.5">
                  <span className="w-1 h-[1px] bg-gray-800" />
                  <span className="italic uppercase tracking-tighter">
                    {item.focus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 w-full min-w-0">
        <div className="glass-panel p-8 relative overflow-hidden group/main">
          {/* Background Decorative Icon */}
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none group-hover/main:opacity-[0.05] transition-opacity">
            <IconComponent className="w-48 h-48" />
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/5">
              <div>
                <div className="flex items-center gap-2 text-blue-500/60 font-mono text-[10px] uppercase tracking-[0.3em] mb-2">
                  <HiCursorClick className="w-3 h-3" />
                  <span>Contextual_Cluster</span>
                </div>
                <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-2">
                  {selectedCategory.title.split("_").join(" ")}
                </h2>
                <p className="text-gray-400 max-w-xl italic text-sm leading-relaxed">
                  {selectedCategory.description}
                </p>
              </div>
            </div>

            {/* Themes Grid */}
            <div className="space-y-8">
              {selectedCategory.skills.map((theme, idx) => {
                return (
                  <div
                    key={idx}
                    className="glass-panel p-6 bg-white/[0.01] border-l-2 border-l-white/10 group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-1 group-hover:text-blue-400 transition-colors">
                          {theme.name.split("_").join(" ")}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-gray-600 uppercase">
                            Cluster_Experience:
                          </span>
                          <span className="text-[10px] font-mono font-bold text-gray-400">
                            {theme.years} Years
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Skill Items (The Small Boxes) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {theme.items.map((skill, sIdx) => {
                        const style = PROFICIENCY_STYLES[skill.proficiency];
                        return (
                          <div
                            key={sIdx}
                            className={`p-4 rounded-lg border-l-4 ${style.border} bg-white/5 border-y border-r border-white/10 text-gray-300 hover:bg-white/[0.08] transition-all`}
                          >
                            <div className="flex flex-col gap-2">
                              <span className="text-xs font-bold leading-tight truncate group-hover:text-white transition-colors">
                                {skill.name}
                              </span>
                              <div className="flex items-center justify-between">
                                {skill.hasProductionExp ? (
                                  <div className="flex items-center gap-1 text-[8px] font-mono text-blue-400 uppercase font-black opacity-70 group-hover:opacity-100">
                                    <HiCheckCircle className="w-3 h-3" />
                                    <span>Prod_Ready</span>
                                  </div>
                                ) : (
                                  <div className="flex items-center gap-1 text-[8px] font-mono text-amber-500 uppercase font-black opacity-70 group-hover:opacity-100">
                                    <HiAcademicCap className="w-3 h-3" />
                                    <span>Dev_Only</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skills;

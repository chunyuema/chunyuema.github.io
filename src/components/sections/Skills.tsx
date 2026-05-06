import React, { useState } from "react";
import {
  HiCode,
  HiCloud,
  HiLightningBolt,
  HiDatabase,
  HiBadgeCheck,
  HiRefresh,
  HiCheckCircle,
  HiAcademicCap,
  HiChip,
  HiTerminal,
  HiChevronRight,
  HiCursorClick,
  HiShieldCheck,
  HiInformationCircle,
} from "react-icons/hi";
import { skillThemes } from "../../data/SkillsEntry";

const PILLAR_CONFIG = {
    availability: { 
        label: "Distributed Systems", 
        icon: HiCloud,
        color: "text-cyan-400", 
        border: "border-t-cyan-500/30", 
        bg: "bg-cyan-500/10", 
        accent: "text-cyan-500/70", 
        shadow: "shadow-[0_0_20px_rgba(34,211,238,0.15)]",
        activeBorder: "border-cyan-500/40",
        ring: "ring-cyan-500/20"
    },
    observability: { 
        label: "Observability", 
        icon: HiShieldCheck,
        color: "text-indigo-400", 
        border: "border-t-indigo-500/30", 
        bg: "bg-indigo-500/10", 
        accent: "text-indigo-500/70", 
        shadow: "shadow-[0_0_20px_rgba(129,140,248,0.15)]",
        activeBorder: "border-indigo-500/40",
        ring: "ring-indigo-500/20"
    },
    hpc: { 
        label: "HPC", 
        icon: HiChip,
        color: "text-rose-400", 
        border: "border-t-rose-500/30", 
        bg: "bg-rose-500/10", 
        accent: "text-rose-500/70", 
        shadow: "shadow-[0_0_20px_rgba(251,113,133,0.15)]",
        activeBorder: "border-rose-500/40",
        ring: "ring-rose-500/20"
    }
};

const Skills: React.FC = () => {
  const [activeThemeId, setActiveThemeId] = useState(skillThemes[0].id);

  const selectedTheme =
    skillThemes.find((t) => t.id === activeThemeId) || skillThemes[0];
  
  const currentPillar = (selectedTheme.pillarId ? PILLAR_CONFIG[selectedTheme.pillarId] : PILLAR_CONFIG.availability) as typeof PILLAR_CONFIG.availability;
  const PillarIcon = currentPillar.icon;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* SYSTEM LEGEND */}
      <div className="glass-panel p-4 border-l-4 border-zinc-500/50 flex items-start gap-4 bg-white/[0.02]">
        <div className="p-2 rounded-lg bg-zinc-500/10 text-zinc-400 shrink-0">
          <HiInformationCircle className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 mb-1">Standard_Definition</h4>
          <p className="text-xs text-gray-400 leading-relaxed italic">
            <span className="text-emerald-400 font-bold">Prod Experience</span> := I have worked on code that has been successfully deployed to and executed in a production environment.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* SIDEBAR NAVIGATION */}
        <aside className="w-full lg:w-80 lg:sticky lg:top-24 space-y-6 shrink-0">
          <nav className="space-y-6">
              {(Object.keys(PILLAR_CONFIG) as Array<keyof typeof PILLAR_CONFIG>).map(pillarKey => {
                  const config = PILLAR_CONFIG[pillarKey];
                  const themesInPillar = skillThemes.filter(t => t.pillarId === pillarKey);
                  
                  return (
                      <div key={pillarKey} className="space-y-2">
                          <div className="flex items-center gap-2 px-2 mb-3">
                              <div className={`w-1 h-3 rounded-full ${config.bg.replace('/10', '/50')}`} />
                              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-gray-500">
                                  {config.label}
                              </span>
                          </div>
                          <div className="space-y-1">
                              {themesInPillar.map((theme) => {
                                  const isActive = activeThemeId === theme.id;

                                  return (
                                  <button
                                      key={theme.id}
                                      onClick={() => setActiveThemeId(theme.id)}
                                      className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all group ${
                                      isActive
                                          ? `${config.bg} ${config.activeBorder} text-white ${config.shadow}`
                                          : "bg-white/5 border-transparent text-gray-400 hover:bg-white/[0.08] hover:border-white/10"
                                      }`}
                                  >
                                      <div className="flex items-center gap-3">
                                      <span className="text-[10px] font-bold uppercase tracking-widest text-left">
                                          {theme.title.split("_").join(" ")}
                                      </span>
                                      </div>
                                      <HiChevronRight
                                      className={`w-4 h-4 transition-transform ${isActive ? config.color + " translate-x-1" : "text-gray-700"}`}
                                      />
                                  </button>
                                  );
                              })}
                          </div>
                      </div>
                  );
              })}
          </nav>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 w-full min-w-0">
          <div className={`glass-panel p-8 relative overflow-hidden group/main border-t-4 ${currentPillar.activeBorder} transition-all duration-500 ${currentPillar.shadow}`}>
            {/* Background Decorative Icon */}
            <div className={`absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none group-hover/main:opacity-[0.05] transition-opacity ${currentPillar.color}`}>
              <PillarIcon className="w-48 h-48" />
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/5">
                <div>
                  <div className={`flex items-center gap-2 ${currentPillar.accent} font-mono text-[10px] uppercase tracking-[0.3em] mb-2`}>
                    <HiCursorClick className="w-3 h-3" />
                    <span>{selectedTheme.id.replace(/-/g, '_')}</span>
                  </div>
                  <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-2">
                    {selectedTheme.title.split("_").join(" ")}
                  </h2>
                  <p className="text-gray-400 max-w-xl italic text-sm leading-relaxed">
                    {selectedTheme.description}
                  </p>
                </div>
                <div className="text-right">
                  <span className={`text-[10px] font-mono ${currentPillar.accent} uppercase`}>
                    Experience_Trace:
                  </span>
                  <div className="text-sm font-mono font-bold text-gray-400">
                    {selectedTheme.years} Years
                  </div>
                </div>
              </div>

              {/* Skill Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedTheme.skills.map((skill, sIdx) => {
                  return (
                    <div
                      key={sIdx}
                      className={`p-4 rounded-lg border-l-4 ${skill.hasProductionExp ? "border-l-emerald-500/50" : "border-l-amber-500/50"} bg-white/5 border border-white/5 text-gray-300 hover:bg-white/[0.08] transition-all group/skill`}
                    >
                      <div className="flex flex-col gap-2">
                        <span className="text-xs font-bold leading-tight group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex items-center justify-between mt-1">
                          {skill.hasProductionExp ? (
                            <div className="flex items-center gap-1.5 text-[8px] font-mono text-emerald-400 uppercase font-black opacity-70 group-hover/skill:opacity-100 transition-opacity">
                              <HiCheckCircle className="w-3.5 h-3.5" />
                              <span>Prod Experience</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1.5 text-[8px] font-mono text-amber-500 uppercase font-black opacity-70 group-hover/skill:opacity-100 transition-opacity">
                              <HiAcademicCap className="w-3.5 h-3.5" />
                              <span>Active Growth</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Skills;
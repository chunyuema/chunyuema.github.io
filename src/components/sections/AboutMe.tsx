import React from "react";
import NameCard from "../ui/NameCard";
import { HiLightningBolt, HiEye, HiGlobeAlt, HiCode } from "react-icons/hi";

const AboutMe: React.FC = () => (
    <div className="container mx-auto mt-20 mb-24 px-4 max-w-[1100px]">
        {/* ======= TOP SECTION: Profile & Intro ======= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-4 flex items-center justify-center">
                <NameCard name="Chunyue Ma" title="Software Engineer @ AWS Lambda" />
            </div>

            <div className="lg:col-span-8 space-y-6">
                {/* SYSTEM STATUS BAR */}
                <div className="glass-panel py-3 px-5 border-l-4 border-l-blue-500/50 w-full">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">System.Status</span>
                        </div>
                        <div className="h-4 w-[1px] bg-white/10" />
                        <span className="text-xs font-mono text-blue-400 uppercase">Active // Building_Lambda</span>
                    </div>
                </div>

                {/* MAIN IDENTITY CARD */}
                <div className="glass-panel p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                        <HiCode className="w-32 h-32 -rotate-12" />
                    </div>
                    
                    <div className="relative">
                        <h3 className="text-sm font-mono text-blue-400 mb-4 flex items-center gap-2 uppercase tracking-widest">
                            <span className="animate-pulse">_</span> IDENTITY.txt
                        </h3>
                        <p className="mb-6 leading-relaxed text-gray-200 text-lg">
                            Hello World! I'm <span className="text-white font-bold">Chunyue</span>, 
                            a software engineer passionate about understanding how code, 
                            machines, and software systems work under the hood.
                        </p>
                        <p className="leading-relaxed text-gray-400">
                            I'm fascinated by how complex projects maintain functionality 
                            while continuing to evolve and deliver high performance.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* ======= CORE FOCUS GRID ======= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Resilience Card */}
            <div className="glass-panel p-6 hover:bg-white/[0.08] transition-all border-t-2 border-t-transparent hover:border-t-blue-500/50 group">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                    <HiLightningBolt className="w-6 h-6" />
                </div>
                <h4 className="text-white font-bold mb-3 uppercase tracking-tight">Availability & Resilience</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Exploring how large-scale distributed systems maintain uptime and recover 
                    from failures gracefully in production environments.
                </p>
            </div>

            {/* Observability Card */}
            <div className="glass-panel p-6 hover:bg-white/[0.08] transition-all border-t-2 border-t-transparent hover:border-t-purple-500/50 group">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                    <HiEye className="w-6 h-6" />
                </div>
                <h4 className="text-white font-bold mb-3 uppercase tracking-tight">System Observability</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Diving into cloud-native tracing and monitoring to understand root causes 
                    and respond to production issues with precision.
                </p>
            </div>

            {/* Green Engineering Card */}
            <div className="glass-panel p-6 hover:bg-white/[0.08] transition-all border-t-2 border-t-transparent hover:border-t-emerald-500/50 group">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                    <HiGlobeAlt className="w-6 h-6" />
                </div>
                <h4 className="text-white font-bold mb-3 uppercase tracking-tight">Sustainability & HPC</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Developing high-performance software with a focus on resource efficiency 
                    to address the growing environmental impact of the AI era.
                </p>
            </div>
        </div>
    </div>
);

export default AboutMe;

import React from "react";
import NameCard from "../ui/NameCard";
import { HiLightningBolt, HiEye, HiGlobeAlt } from "react-icons/hi";

const AboutMe: React.FC = () => (
    <div className="container mx-auto mb-24 px-4 max-w-[1200px]">
        {/* ======= HERO SECTION: Side-by-Side Layout ======= */}
        <div className="relative min-h-[700px] flex items-center py-12">
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square bg-blue-500/5 rounded-full blur-[100px] -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                
                {/* Left: NameCard */}
                <div className="lg:col-span-5 flex justify-center lg:justify-start">
                    <div className="w-full max-w-sm">
                        <NameCard name="Chunyue Ma" title="Software Engineer @ AWS Lambda" />
                    </div>
                </div>

                {/* Right: Floating Bubbles (Desktop) */}
                <div className="hidden lg:block lg:col-span-7 relative h-[600px] w-full">
                    {/* Bubble 1: Availability & Resilience */}
                    <div className="absolute top-[5%] left-[10%] animate-float pointer-events-auto transition-all duration-300 hover:z-40">
                        <div className="glass-panel p-6 w-72 border-l-4 border-l-blue-500/50 hover:bg-white/[0.1] hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:border-l-blue-400 cursor-pointer transition-all duration-300 group">
                            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 w-fit mb-4 group-hover:scale-110 group-hover:bg-blue-500/20 transition-transform">
                                <HiLightningBolt className="w-6 h-6" />
                            </div>
                            <h4 className="text-white font-bold mb-2 uppercase tracking-tight text-sm group-hover:text-blue-300 transition-colors">Availability & Resilience</h4>
                            <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">
                                Exploring how large-scale distributed systems maintain uptime and recover gracefully.
                            </p>
                        </div>
                    </div>

                    {/* Bubble 2: System Observability */}
                    <div className="absolute top-[35%] right-[5%] animate-float-delayed pointer-events-auto transition-all duration-300 hover:z-40">
                        <div className="glass-panel p-6 w-72 border-l-4 border-l-purple-500/50 hover:bg-white/[0.1] hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] hover:border-l-purple-400 cursor-pointer transition-all duration-300 group">
                            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 w-fit mb-4 group-hover:scale-110 group-hover:bg-purple-500/20 transition-transform">
                                <HiEye className="w-6 h-6" />
                            </div>
                            <h4 className="text-white font-bold mb-2 uppercase tracking-tight text-sm group-hover:text-purple-300 transition-colors">System Observability</h4>
                            <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">
                                Diving into cloud-native tracing and monitoring to understand root causes.
                            </p>
                        </div>
                    </div>

                    {/* Bubble 3: Sustainability & HPC */}
                    <div className="absolute bottom-[5%] left-[15%] animate-float-slow pointer-events-auto transition-all duration-300 hover:z-40">
                        <div className="glass-panel p-6 w-80 border-l-4 border-l-emerald-500/50 hover:bg-white/[0.1] hover:scale-105 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] hover:border-l-emerald-400 cursor-pointer transition-all duration-300 group">
                            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-4 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-transform">
                                <HiGlobeAlt className="w-6 h-6" />
                            </div>
                            <h4 className="text-white font-bold mb-2 uppercase tracking-tight text-sm group-hover:text-emerald-300 transition-colors">Sustainability & HPC</h4>
                            <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">
                                Developing high-performance software with resource efficiency for the AI era.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bubbles for Mobile / Tablet */}
                <div className="lg:hidden col-span-1 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full">
                    <div className="glass-panel p-6 border-l-4 border-l-blue-500/50 active:scale-95 transition-all">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                                <HiLightningBolt className="w-5 h-5" />
                            </div>
                            <h4 className="text-white font-bold uppercase tracking-tight text-xs">Availability & Resilience</h4>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed">
                            Large-scale distributed systems uptime and graceful recovery.
                        </p>
                    </div>

                    <div className="glass-panel p-6 border-l-4 border-l-purple-500/50 active:scale-95 transition-all">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                                <HiEye className="w-5 h-5" />
                            </div>
                            <h4 className="text-white font-bold uppercase tracking-tight text-xs">System Observability</h4>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed">
                            Cloud-native tracing and monitoring for root cause analysis.
                        </p>
                    </div>

                    <div className="glass-panel p-6 border-l-4 border-l-emerald-500/50 active:scale-95 transition-all">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                                <HiGlobeAlt className="w-5 h-5" />
                            </div>
                            <h4 className="text-white font-bold uppercase tracking-tight text-xs">Sustainability & HPC</h4>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed">
                            High-performance software resource efficiency for the AI era.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AboutMe;

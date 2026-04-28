import React, { useState } from "react";
import NameCard from "../ui/NameCard";
import { HiLightningBolt, HiEye, HiGlobeAlt, HiX } from "react-icons/hi";

interface PillarData {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    icon: React.ReactNode;
    color: string;
    glowColor: string;
}

const AboutMe: React.FC = () => {
    const [selectedPillar, setSelectedPillar] = useState<PillarData | null>(null);

    const pillars: PillarData[] = [
        {
            id: "availability",
            title: "Availability & Resilience",
            description: "Exploring how large-scale distributed systems maintain uptime and recover gracefully.",
            longDescription: "In the world of distributed systems, failure is inevitable. My focus is on designing architectures that don't just survive failures but thrive in spite of them. This involves deep dives into load balancing, fault tolerance, and automated recovery mechanisms that ensure services remain available to users even when individual components fail.",
            icon: <HiLightningBolt className="w-6 h-6" />,
            color: "text-blue-400",
            glowColor: "rgba(59,130,246,0.2)"
        },
        {
            id: "observability",
            title: "System Observability",
            description: "Diving into cloud-native tracing and monitoring to understand root causes.",
            longDescription: "You cannot fix what you cannot see. System observability is about creating transparency in complex software stacks. I work with tracing, metrics, and logging to build a comprehensive picture of system health, enabling faster root cause analysis and proactive issue resolution in high-traffic production environments.",
            icon: <HiEye className="w-6 h-6" />,
            color: "text-purple-400",
            glowColor: "rgba(168,85,247,0.2)"
        },
        {
            id: "sustainability",
            title: "Sustainability & HPC",
            description: "Developing high-performance software with resource efficiency for the AI era.",
            longDescription: "As the demand for compute grows, so does its environmental impact. My work in Green Engineering focuses on optimizing high-performance software to deliver maximum output with minimum energy consumption. This involves algorithmic efficiency, resource management, and hardware-aware programming to build sustainable technology for the future.",
            icon: <HiGlobeAlt className="w-6 h-6" />,
            color: "text-emerald-400",
            glowColor: "rgba(16,185,129,0.2)"
        }
    ];

    return (
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
                        {pillars.map((pillar, index) => {
                            const animations = ["animate-float", "animate-float-delayed", "animate-float-slow"];
                            const positions = [
                                "top-[5%] left-[10%]",
                                "top-[35%] right-[5%]",
                                "bottom-[5%] left-[15%]"
                            ];
                            const widths = ["w-72", "w-72", "w-80"];
                            const borderColors = ["border-l-blue-500/50", "border-l-purple-500/50", "border-l-emerald-500/50"];
                            const hoverBorders = ["hover:border-l-blue-400", "hover:border-l-purple-400", "hover:border-l-emerald-400"];

                            return (
                                <div 
                                    key={pillar.id}
                                    className={`absolute ${positions[index]} ${animations[index]} pointer-events-auto transition-all duration-300 hover:z-40`}
                                    onClick={() => setSelectedPillar(pillar)}
                                >
                                    <div className={`glass-panel p-6 ${widths[index]} border-l-4 ${borderColors[index]} hover:bg-white/[0.1] hover:scale-105 cursor-pointer transition-all duration-300 group`}
                                         style={{'--glow-color': pillar.glowColor} as any}
                                         className={`glass-panel p-6 ${widths[index]} border-l-4 ${borderColors[index]} hover:bg-white/[0.1] hover:scale-105 hover:shadow-[0_0_25px_var(--glow-color)] ${hoverBorders[index]} cursor-pointer transition-all duration-300 group`}
                                    >
                                        <div className={`p-3 rounded-xl bg-white/5 ${pillar.color} w-fit mb-4 group-hover:scale-110 group-hover:bg-white/10 transition-transform`}>
                                            {pillar.icon}
                                        </div>
                                        <h4 className={`text-white font-bold mb-2 uppercase tracking-tight text-sm group-hover:${pillar.color} transition-colors`}>
                                            {pillar.title}
                                        </h4>
                                        <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">
                                            {pillar.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bubbles for Mobile / Tablet */}
                    <div className="lg:hidden col-span-1 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full">
                        {pillars.map((pillar) => (
                            <div 
                                key={pillar.id}
                                className="glass-panel p-6 border-l-4 border-l-blue-500/50 active:scale-95 transition-all cursor-pointer"
                                onClick={() => setSelectedPillar(pillar)}
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className={`p-2 rounded-lg bg-white/5 ${pillar.color}`}>
                                        {pillar.icon}
                                    </div>
                                    <h4 className="text-white font-bold uppercase tracking-tight text-xs">{pillar.title}</h4>
                                </div>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ======= MODAL OVERLAY ======= */}
            {selectedPillar && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
                        onClick={() => setSelectedPillar(null)}
                    />
                    
                    {/* Modal Content */}
                    <div className="relative glass-panel max-w-2xl w-full p-8 md:p-12 border-t-4 border-t-white/20 animate-in fade-in zoom-in duration-300">
                        <button 
                            onClick={() => setSelectedPillar(null)}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                        >
                            <HiX className="w-6 h-6" />
                        </button>

                        <div className="flex flex-col gap-6">
                            <div className={`p-4 rounded-2xl bg-white/5 ${selectedPillar.color} w-fit`}>
                                {React.cloneElement(selectedPillar.icon as React.ReactElement, { className: "w-10 h-10" })}
                            </div>
                            
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase tracking-tight">
                                    {selectedPillar.title}
                                </h3>
                                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-transparent rounded-full mb-6" />
                                
                                <p className="text-gray-200 text-lg leading-relaxed mb-6 italic">
                                    "{selectedPillar.description}"
                                </p>
                                
                                <div className="prose prose-invert max-w-none">
                                    <p className="text-gray-400 leading-relaxed">
                                        {selectedPillar.longDescription}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 pt-6 border-t border-white/10 flex justify-end">
                                <button 
                                    onClick={() => setSelectedPillar(null)}
                                    className="px-6 py-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 font-bold transition-all border border-blue-500/20"
                                >
                                    Close Explorer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AboutMe;

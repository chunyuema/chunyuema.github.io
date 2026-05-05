import React, { useState } from "react";
import NameCard from "../ui/NameCard";
import { HiEye, HiX } from "react-icons/hi";
import { FaMicrochip, FaShieldAlt } from "react-icons/fa";

interface PillarData {
    id: string;
    title: string;
    description: string;
    longDescription: string[];
    icon: React.ReactNode;
    color: string;
    hoverColor: string;
    glowColor: string;
}

const AboutMe: React.FC = () => {
    const [selectedPillar, setSelectedPillar] = useState<PillarData | null>(null);

    const pillars: PillarData[] = [
        {
            id: "availability",
            title: "Distributed Systems & Cloud Infrastructure",
            description: "Architecting resilient, global-scale services that thrive in decentralized complexity.",
            longDescription: [
                "**The Philosophy:** Infrastructure is the 'Macro' layer of systems engineering. I focus on navigating decentralized complexity to architect global-scale services that remain resilient against regional outages and network partitions while maintaining strict performance guarantees.",
                "**Focus Areas:** Service Orchestration (Kubernetes/Nomad), Distributed Consensus (Raft/Paxos), and Cloud-Native Networking."
            ],
            icon: <FaShieldAlt className="w-6 h-6" />,
            color: "text-blue-400",
            hoverColor: "group-hover:text-blue-400",
            glowColor: "rgba(59,130,246,0.2)"
        },
        {
            id: "observability",
            title: "Observability & Systems Reliability (SRE)",
            description: "Transforming raw telemetry into actionable insights for proactive, end-to-end system reliability.",
            longDescription: [
                "**The Philosophy:** Reliability is a byproduct of transparency across the entire stack. I leverage deep-system telemetry—from the kernel and network layer to application-level traces—to move beyond ‘Black Box’ monitoring. My goal is to transform raw data into actionable insights, ensuring system health is proactive rather than reactive.",
                "**Focus Areas:** Deep-System Insight (eBPF), End-to-End Observability (Tracing/Metrics), and Reliability Engineering (SLIs/SLOs)."
            ],
            icon: <HiEye className="w-6 h-6" />,
            color: "text-purple-400",
            hoverColor: "group-hover:text-purple-400",
            glowColor: "rgba(168,85,247,0.2)"
        },
        {
            id: "hpc",
            title: "High-Performance Computing (HPC)",
            description: "Bridging the gap between software and silicon with hardware-optimal execution.",
            longDescription: [
                "**The Philosophy:** In the 'Micro' layer, software must be an extension of the hardware. I am dedicated to 'squeezing the silicon'—minimizing abstraction overhead and optimizing memory-compute paths to transform complex algorithms into high-velocity, close-to-metal implementations.",
                "**Focus Areas:** Hardware-Aware C++, Parallel Programming (OpenMP/MPI), and GPU Acceleration (CUDA/SYCL)."
            ],
            icon: <FaMicrochip className="w-6 h-6" />,
            color: "text-orange-400",
            hoverColor: "group-hover:text-orange-400",
            glowColor: "rgba(251,146,60,0.2)"
        }
    ];

    // Helper to render bold text in descriptions
    const renderDescription = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="text-white font-bold">{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    return (
        <div className="container mx-auto mb-24 px-4 max-w-[1200px]">
            {/* ======= HERO SECTION: Side-by-Side Layout ======= */}
            <div className="relative min-h-[700px] flex items-center py-12">
                
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square bg-zinc-500/5 rounded-full blur-[100px] -z-10" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                    
                    {/* Left: NameCard */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-start">
                        <div className="w-full max-w-sm">
                            <NameCard name="Chunyue Ma" title="Software Engineer @ AWS Lambda" />
                        </div>
                    </div>

                    {/* Right: Floating Bubbles (Desktop) */}
                    <div className="hidden lg:block lg:col-span-7 relative h-[600px] w-full">
                        
                        {/* Connection Lines SVG */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="rgba(59,130,246,0)" />
                                    <stop offset="20%" stopColor="rgba(59,130,246,0.3)" />
                                    <stop offset="100%" stopColor="rgba(59,130,246,0.6)" />
                                </linearGradient>
                                <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="rgba(168,85,247,0)" />
                                    <stop offset="20%" stopColor="rgba(168,85,247,0.3)" />
                                    <stop offset="100%" stopColor="rgba(168,85,247,0.6)" />
                                </linearGradient>
                                <linearGradient id="line-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="rgba(251,146,60,0)" />
                                    <stop offset="20%" stopColor="rgba(251,146,60,0.3)" />
                                    <stop offset="100%" stopColor="rgba(251,146,60,0.6)" />
                                </linearGradient>
                            </defs>
                            
                            {/* Path to Pillar 1 (Top Left) */}
                            <path 
                                d="M -10 50 Q -5 20, 25 20" 
                                stroke="url(#line-gradient-1)" 
                                strokeWidth="0.4" 
                                fill="none" 
                                className="animate-dash"
                            />
                            
                            {/* Path to Pillar 2 (Middle Right) */}
                            <path 
                                d="M -10 50 Q 20 50, 80 45" 
                                stroke="url(#line-gradient-2)" 
                                strokeWidth="0.4" 
                                fill="none" 
                                className="animate-dash"
                                style={{ animationDuration: '4s' }}
                            />
                            
                            {/* Path to Pillar 3 (Bottom Left) */}
                            <path 
                                d="M -10 50 Q -5 80, 30 85" 
                                stroke="url(#line-gradient-3)" 
                                strokeWidth="0.4" 
                                fill="none" 
                                className="animate-dash"
                                style={{ animationDuration: '5s' }}
                            />
                        </svg>

                        {pillars.map((pillar, index) => {
                            const animations = ["animate-float", "animate-float-delayed", "animate-float-slow"];
                            const positions = [
                                "top-[5%] left-[10%]",
                                "top-[35%] right-[5%]",
                                "bottom-[5%] left-[15%]"
                            ];
                            const widths = ["w-72", "w-72", "w-80"];
                            const borderColors = [
                                pillar.id === 'availability' ? "border-l-blue-500/50" : 
                                pillar.id === 'observability' ? "border-l-purple-500/50" : 
                                "border-l-orange-500/50"
                            ];
                            const hoverBorders = [
                                pillar.id === 'availability' ? "hover:border-l-blue-400" : 
                                pillar.id === 'observability' ? "hover:border-l-purple-400" : 
                                "hover:border-l-orange-400"
                            ];

                            return (
                                <div 
                                    key={pillar.id}
                                    className={`absolute ${positions[index]} ${animations[index]} pointer-events-auto transition-all duration-300 hover:z-40`}
                                    onClick={() => setSelectedPillar(pillar)}
                                >
                                    <div 
                                         style={{'--glow-color': pillar.glowColor} as any}
                                         className={`glass-panel p-6 ${widths[index]} border-l-4 ${borderColors[index]} hover:bg-white/[0.1] hover:scale-105 hover:shadow-[0_0_25px_var(--glow-color)] ${hoverBorders[index]} cursor-pointer transition-all duration-300 group`}
                                    >
                                        <div className={`p-3 rounded-xl bg-white/5 ${pillar.color} w-fit mb-4 group-hover:scale-110 group-hover:bg-white/10 transition-transform`}>
                                            {pillar.icon}
                                        </div>
                                        <h4 className={`text-white font-bold mb-2 uppercase tracking-tight text-sm ${pillar.hoverColor} transition-colors`}>
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
                                className={`glass-panel p-6 border-l-4 ${
                                    pillar.id === 'availability' ? "border-l-blue-500/50" : 
                                    pillar.id === 'observability' ? "border-l-purple-500/50" : 
                                    "border-l-orange-500/50"
                                } active:scale-95 transition-all cursor-pointer`}
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
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelectedPillar(null)}
                    />
                    
                    {/* Modal Content */}
                    <div className="relative glass-panel max-w-xl w-full p-8 md:p-10 border-t-4 border-t-white/20 animate-in fade-in zoom-in duration-300">
                        <button 
                            onClick={() => setSelectedPillar(null)}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                        >
                            <HiX className="w-6 h-6" />
                        </button>

                        <div className="flex flex-col gap-6">
                            <div className={`p-3 rounded-xl bg-white/5 ${selectedPillar.color} w-fit`}>
                                {React.cloneElement(selectedPillar.icon as React.ReactElement, { className: "w-8 h-8" })}
                            </div>
                            
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 uppercase tracking-tight">
                                    {selectedPillar.title}
                                </h3>
                                <div className={`h-1 w-16 ${
                                    selectedPillar.id === 'availability' ? 'bg-blue-500/50' :
                                    selectedPillar.id === 'observability' ? 'bg-purple-500/50' :
                                    'bg-orange-500/50'
                                } rounded-full mb-6`} />
                                
                                <div className="space-y-4">
                                    {selectedPillar.longDescription.map((para, i) => (
                                        <p key={i} className="text-gray-400 leading-relaxed text-sm md:text-base">
                                            {renderDescription(para)}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-2 pt-4 border-t border-white/10 flex justify-end">
                                <button 
                                    onClick={() => setSelectedPillar(null)}
                                    className={`px-6 py-2 rounded-full ${
                                        selectedPillar.id === 'availability' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                                        selectedPillar.id === 'observability' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                                        'bg-orange-500/10 text-orange-400 border-orange-500/20'
                                    } text-sm font-bold transition-all border`}
                                >
                                    Back to Overview
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

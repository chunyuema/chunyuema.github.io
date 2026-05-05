import React, { useState, useMemo } from "react";
import { blogPosts } from "../../data/BlogEntry";
import { BlogPost, PillarId } from "../../types/blog";
import Link from "next/link";
import {
  HiSearch,
  HiBookOpen,
  HiCalendar,
  HiTerminal,
  HiArrowRight,
  HiChevronDown,
  HiEye,
  HiLightningBolt,
} from "react-icons/hi";
import { FaMicrochip, FaShieldAlt } from "react-icons/fa";

const POSTS_PER_PAGE = 10;

const PILLARS: Record<PillarId, { icon: React.ReactNode; label: string; color: string; borderColor: string; hoverBorder: string; bg: string }> = {
  availability: {
    icon: <FaShieldAlt className="w-4 h-4" />,
    label: "Distributed Systems",
    color: "text-blue-400",
    borderColor: "border-l-blue-500/50",
    hoverBorder: "hover:border-blue-500/30",
    bg: "bg-blue-500/10"
  },
  observability: {
    icon: <HiEye className="w-4 h-4" />,
    label: "Observability",
    color: "text-purple-400",
    borderColor: "border-l-purple-500/50",
    hoverBorder: "hover:border-purple-500/30",
    bg: "bg-purple-500/10"
  },
  hpc: {
    icon: <FaMicrochip className="w-4 h-4" />,
    label: "HPC & Systems",
    color: "text-orange-400",
    borderColor: "border-l-orange-500/50",
    hoverBorder: "hover:border-orange-500/30",
    bg: "bg-orange-500/10"
  }
};

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPillar, setSelectedPillar] = useState<PillarId | null>(null);
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const filteredPosts = useMemo(() => {
    return blogPosts
      .filter((post) => {
        const matchesSearch =
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase()),
          );

        const matchesPillar = !selectedPillar || post.pillarId === selectedPillar;

        return matchesSearch && matchesPillar;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [searchTerm, selectedPillar]);

  const displayedPosts = useMemo(() => {
    return filteredPosts.slice(0, visibleCount);
  }, [filteredPosts, visibleCount]);

  const getPageIdFromUrl = (url: string) => {
    const cleanUrl = url.split("?")[0];
    const parts = cleanUrl.split("/");
    const lastPart = parts[parts.length - 1];
    const idMatch = lastPart.match(/([a-f0-9]{32})/i);
    return idMatch ? idMatch[1] : lastPart;
  };

  return (
    <div className="max-w-4xl mx-auto w-full space-y-10">
      {/* TOP CONTROLS: Search & Pillars Side-by-Side */}
      <div className="flex flex-col lg:flex-row items-center gap-4">
        {/* Unified Search Bar */}
        <div className="glass-panel p-1.5 flex items-center gap-3 border-l-4 border-l-blue-500/50 group focus-within:border-l-blue-400 transition-all flex-1 w-full">
          <div className="pl-3 text-blue-400/50 group-focus-within:text-blue-400 transition-colors">
            <HiTerminal className="w-4 h-4" />
          </div>
          <div className="relative flex-1">
            <HiSearch className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors w-4 h-4" />
            <input
              type="text"
              placeholder="grep content..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setVisibleCount(POSTS_PER_PAGE);
              }}
              className="w-full pl-6 pr-4 py-2 bg-transparent text-gray-200 focus:outline-none font-mono text-xs placeholder:text-gray-600"
            />
          </div>
        </div>

        {/* Pillar Chips - Horizontal */}
        <div className="flex flex-wrap items-center justify-center gap-2 shrink-0">
          <button
            onClick={() => {
              setSelectedPillar(null);
              setVisibleCount(POSTS_PER_PAGE);
            }}
            className={`px-3 py-2 rounded-full text-[10px] font-mono transition-all border ${
              !selectedPillar
                ? "bg-white/10 text-white border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                : "text-gray-500 border-white/5 hover:text-gray-300 hover:bg-white/5"
            }`}
          >
            all_domains
          </button>
          {(Object.entries(PILLARS) as [PillarId, typeof PILLARS['hpc']][]).map(([id, data]) => (
            <button
              key={id}
              onClick={() => {
                setSelectedPillar(id === selectedPillar ? null : id);
                setVisibleCount(POSTS_PER_PAGE);
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-full text-[10px] font-mono transition-all border ${
                selectedPillar === id
                  ? `${data.bg} ${data.color} border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]`
                  : "text-gray-500 border-white/5 hover:text-gray-300 hover:bg-white/5"
              }`}
            >
              <span className={selectedPillar === id ? "opacity-100" : "opacity-50"}>
                {React.cloneElement(data.icon as React.ReactElement, { className: "w-3 h-3" })}
              </span>
              <span>{data.label.toLowerCase()}</span>
            </button>
          ))}
        </div>
      </div>

      {/* CENTERED CONTENT - Blog Rows */}
      <div className="w-full">
        <div className="space-y-4">
          {displayedPosts.length > 0 ? (
            <div className="space-y-3">
              {displayedPosts.map((post) => {
                const pillar = post.pillarId ? PILLARS[post.pillarId] : null;
                return (
                  <Link
                    key={post.url}
                    href={`/blog/${getPageIdFromUrl(post.url)}`}
                    className="block group"
                  >
                    <div className={`glass-panel p-5 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.08] transition-all duration-300 group border-l-4 ${pillar ? `${pillar.borderColor} ${pillar.hoverBorder}` : "border-l-blue-500/50 hover:border-blue-500/30"}`}>
                      <div className="flex items-center gap-6 flex-1 min-w-0">
                        <div className={`hidden sm:flex p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-all shrink-0 ${pillar ? pillar.color : "text-blue-400/70"}`}>
                          {pillar ? React.cloneElement(pillar.icon as React.ReactElement, { className: "w-6 h-6" }) : <HiBookOpen className="h-6 w-6" />}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            {pillar && (
                              <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${pillar.color} opacity-80`}>
                                {pillar.label}
                              </span>
                            )}
                            <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest flex items-center gap-1">
                              <HiCalendar className="w-3 h-3" />
                              {new Date(post.date).toLocaleDateString(undefined, {
                                month: "short",
                                day: "2-digit",
                                year: "numeric"
                              })}
                            </span>
                          </div>
                          <h2 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors truncate">
                            {post.title}
                          </h2>
                          
                          <div className="mt-2 flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className={`text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-500 group-hover:text-gray-400 transition-colors uppercase`}
                              >
                                #{tag.toLowerCase()}
                              </span>
                            ))}
                          </div>

                          <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-in-out">
                            <p className="text-gray-400 text-sm leading-relaxed mt-4 line-clamp-2 italic border-l-2 border-white/10 pl-4">
                              {post.content}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 shrink-0 justify-end border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                        <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 ${pillar ? pillar.color : "text-blue-500"}`}>
                          <span>OPEN_LOG</span>
                          <HiArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="glass-panel p-20 text-center font-mono text-gray-500">
              <p className="text-sm">404: NO_RECORDS_FOUND</p>
            </div>
          )}

          {/* LOAD MORE BUTTON */}
          {filteredPosts.length > visibleCount && (
            <div className="flex justify-center pt-10">
              <button
                onClick={() => setVisibleCount((prev) => prev + POSTS_PER_PAGE)}
                className="flex items-center gap-3 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white hover:bg-white/10 hover:border-blue-500/30 transition-all group"
              >
                <span>Load_More_Entries</span>
                <HiChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

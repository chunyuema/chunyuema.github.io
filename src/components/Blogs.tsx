import React, { useState, useMemo } from "react";
import { blogPosts, BlogPost } from "../data/BlogEntry";
import Link from 'next/link';
import { HiSearch, HiBookOpen, HiTag, HiCalendar, HiClock, HiTerminal } from "react-icons/hi";

const BlogPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const allTags = useMemo(() => {
        const tagMap: Record<string, number> = {};
        blogPosts.forEach(post => {
            post.tags.forEach(tag => {
                tagMap[tag] = (tagMap[tag] || 0) + 1;
            });
        });
        return Object.entries(tagMap)
            .sort((a, b) => b[1] - a[1])
            .map(([tag]) => tag);
    }, []);

    const filteredPosts = useMemo(() => {
        return blogPosts
            .filter((post) => {
                const matchesSearch = 
                    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
                
                const matchesTag = !selectedTag || post.tags.includes(selectedTag);
                
                return matchesSearch && matchesTag;
            })
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }, [searchTerm, selectedTag]);

    const getPageIdFromUrl = (url: string) => {
      const cleanUrl = url.split('?')[0];
      const parts = cleanUrl.split("/");
      const lastPart = parts[parts.length - 1];
      const idMatch = lastPart.match(/([a-f0-9]{32})/i);
      return idMatch ? idMatch[1] : lastPart;
    };

    return (
        <div className="container mx-auto py-12 px-4 max-w-6xl mt-10">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
                
                {/* LEFT SIDEBAR - Search & Tags */}
                <aside className="w-full lg:w-72 lg:sticky lg:top-24 space-y-6">
                    <div className="glass-panel p-5 border-l-4 border-l-blue-500/50">
                        <div className="flex items-center gap-2 mb-4 text-blue-400 font-bold uppercase tracking-tighter text-sm">
                            <HiTerminal className="w-5 h-5" />
                            <span>System.Search</span>
                        </div>
                        <div className="relative group">
                            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="grep content..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-9 pr-3 py-2 bg-black/40 border border-white/10 rounded-md text-sm text-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all font-mono"
                            />
                        </div>
                    </div>

                    <div className="glass-panel p-5">
                        <div className="flex items-center gap-2 mb-4 text-gray-400 font-bold uppercase tracking-tighter text-sm border-b border-white/5 pb-2">
                            <HiTag className="w-4 h-4" />
                            <span>Labels</span>
                        </div>
                        <div className="flex flex-wrap lg:flex-col gap-2">
                            <button
                                onClick={() => setSelectedTag(null)}
                                className={`text-left px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                                    !selectedTag 
                                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/30 shadow-[0_0_10px_rgba(110,193,255,0.1)]" 
                                    : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                                }`}
                            >
                                {`> all_posts (${blogPosts.length})`}
                            </button>
                            {allTags.map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                                    className={`text-left px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                                        selectedTag === tag 
                                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30 shadow-[0_0_10px_rgba(110,193,255,0.1)]" 
                                        : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                                    }`}
                                >
                                    {`> ${tag.toLowerCase()}`}
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* RIGHT CONTENT - Blog Grid */}
                <div className="flex-1 w-full">
                    <div className="flex items-center justify-between mb-8 px-2">
                        <h1 className="text-2xl font-black italic tracking-tighter text-white uppercase">
                            Technical <span className="text-blue-500 not-italic">Notes</span>
                        </h1>
                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">
                            Found: {filteredPosts.length} matches
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((post) => (
                                <Link 
                                    key={post.url}
                                    href={`/blog/${getPageIdFromUrl(post.url)}`}
                                    className="block group h-full"
                                >
                                    <div className="glass-panel p-5 h-full flex flex-col hover:bg-white/[0.08] hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 group">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-2 rounded bg-white/5 text-blue-400/70 border border-white/5 group-hover:bg-blue-500/10 group-hover:text-blue-400 group-hover:border-blue-500/20 transition-all">
                                                <HiBookOpen className="h-4 w-4" />
                                            </div>
                                            <span className="text-[10px] font-mono text-gray-500 group-hover:text-blue-400/50 transition-colors uppercase tracking-widest">
                                                {new Date(post.date).toLocaleDateString(undefined, {
                                                    month: 'short',
                                                    day: '2-digit',
                                                    year: 'numeric'
                                                })}
                                            </span>
                                        </div>

                                        <h2 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors mb-2 leading-tight">
                                            {post.title}
                                        </h2>

                                        <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 mb-6 flex-1">
                                            {post.content}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
                                            {post.tags.map(tag => (
                                                <span 
                                                    key={tag}
                                                    className="px-2 py-0.5 text-[9px] font-mono text-blue-400/60 uppercase"
                                                >
                                                    #{tag.toLowerCase()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="col-span-full glass-panel p-20 text-center font-mono text-gray-500">
                                <div className="mb-4 opacity-20">
                                    <HiTerminal className="w-16 h-16 mx-auto" />
                                </div>
                                <p className="text-sm">404: No matching records found for "{searchTerm}"</p>
                                <button 
                                    onClick={() => {setSearchTerm(""); setSelectedTag(null);}}
                                    className="mt-6 px-4 py-2 border border-blue-500/30 text-blue-400 text-xs uppercase tracking-widest hover:bg-blue-500/10 transition-all"
                                >
                                    Reset_System
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;

import React, { useState, useMemo } from "react";
import { blogPosts } from "../../data/BlogEntry";
import { BlogPost } from "../../types/blog";
import Link from "next/link";
import {
  HiSearch,
  HiBookOpen,
  HiTag,
  HiCalendar,
  HiTerminal,
  HiArrowRight,
  HiChevronDown,
} from "react-icons/hi";

const POSTS_PER_PAGE = 10;

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const allTags = useMemo(() => {
    const tagMap: Record<string, number> = {};
    blogPosts.forEach((post) => {
      post.tags.forEach((tag) => {
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
          post.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase()),
          );

        const matchesTag = !selectedTag || post.tags.includes(selectedTag);

        return matchesSearch && matchesTag;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [searchTerm, selectedTag]);

  // Group posts by year
  const groupedPosts = useMemo(() => {
    const limitedPosts = filteredPosts.slice(0, visibleCount);
    const groups: Record<string, BlogPost[]> = {};

    limitedPosts.forEach((post) => {
      const year = new Date(post.date).getFullYear().toString();
      if (!groups[year]) groups[year] = [];
      groups[year].push(post);
    });

    return Object.entries(groups).sort((a, b) => b[0].localeCompare(a[0]));
  }, [filteredPosts, visibleCount]);

  const getPageIdFromUrl = (url: string) => {
    const cleanUrl = url.split("?")[0];
    const parts = cleanUrl.split("/");
    const lastPart = parts[parts.length - 1];
    const idMatch = lastPart.match(/([a-f0-9]{32})/i);
    return idMatch ? idMatch[1] : lastPart;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* LEFT SIDEBAR - Search & Tags */}
      <aside className="w-full lg:w-72 lg:sticky lg:top-24 space-y-6 shrink-0">
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
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setVisibleCount(POSTS_PER_PAGE);
              }}
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
              onClick={() => {
                setSelectedTag(null);
                setVisibleCount(POSTS_PER_PAGE);
              }}
              className={`text-left px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                !selectedTag
                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30 shadow-[0_0_10px_rgba(110,193,255,0.1)]"
                  : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
              }`}
            >
              {`> all_posts (${blogPosts.length})`}
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSelectedTag(tag === selectedTag ? null : tag);
                  setVisibleCount(POSTS_PER_PAGE);
                }}
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

      {/* RIGHT CONTENT - Grouped Blog Rows */}
      <div className="flex-1 w-full min-w-0">
        <div className="space-y-12">
          {groupedPosts.length > 0 ? (
            groupedPosts.map(([year, posts]) => (
              <section key={year} className="relative">
                <div className="sticky top-20 z-20 py-2 mb-4 bg-[#0A0A12]/80 backdrop-blur-md">
                  <div className="flex items-center gap-4 px-2">
                    <h2 className="text-sm font-black font-mono text-blue-500 uppercase tracking-[0.3em]">
                      {year}
                    </h2>
                    <div className="flex-1 h-[1px] bg-blue-500/20" />
                  </div>
                </div>

                <div className="space-y-3">
                  {posts.map((post) => (
                    <Link
                      key={post.url}
                      href={`/blog/${getPageIdFromUrl(post.url)}`}
                      className="block group"
                    >
                      <div className="glass-panel p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.08] hover:border-blue-500/30 transition-all duration-300 group">
                        <div className="flex items-center gap-4 flex-1 min-w-0">
                          <div className="hidden sm:flex p-2 rounded bg-white/5 text-blue-400/70 border border-white/5 group-hover:bg-blue-500/10 group-hover:text-blue-400 group-hover:border-blue-500/20 transition-all shrink-0">
                            <HiBookOpen className="h-4 w-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h2 className="text-base font-bold text-gray-200 group-hover:text-white transition-colors truncate">
                              {post.title}
                            </h2>
                            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1">
                              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1">
                                <HiCalendar className="w-3 h-3" />
                                {new Date(post.date).toLocaleDateString(
                                  undefined,
                                  {
                                    month: "short",
                                    day: "2-digit",
                                  },
                                )}
                              </span>
                              <div className="flex gap-2">
                                {post.tags.slice(0, 3).map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-[9px] font-mono text-blue-400/50 uppercase"
                                  >
                                    #{tag.toLowerCase()}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-in-out">
                              <p className="text-gray-400 text-xs leading-relaxed mt-2 line-clamp-2 italic border-l border-blue-500/30 pl-3">
                                {post.content}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 shrink-0 justify-end border-t md:border-t-0 border-white/5 pt-3 md:pt-0">
                          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-500/40 group-hover:text-blue-400 transition-colors">
                            <span>READ_LOG</span>
                            <HiArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="glass-panel p-20 text-center font-mono text-gray-500">
              <p className="text-sm">404: No matching records found</p>
            </div>
          )}

          {/* LOAD MORE BUTTON */}
          {filteredPosts.length > visibleCount && (
            <div className="flex justify-center pt-8">
              <button
                onClick={() => setVisibleCount((prev) => prev + POSTS_PER_PAGE)}
                className="flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/10 hover:border-blue-500/30 transition-all group"
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

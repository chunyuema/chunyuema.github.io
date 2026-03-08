'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { HiArrowLeft, HiCalendar, HiBookOpen } from 'react-icons/hi';
import { BlogPost } from '../../types/blog';
import NotionDynamicWrapper from './NotionDynamicWrapper';
import { useScroll } from '../../hooks/useScroll';

interface BlogPostLayoutProps {
  post: BlogPost | undefined;
  recordMap: any;
  slug: string;
}

export default function BlogPostLayout({ post, recordMap, slug }: BlogPostLayoutProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScrolled = useScroll(scrollRef, 100);

  return (
    <div className="container mx-auto py-10 px-4 max-w-4xl h-[calc(100vh-4rem)] flex flex-col">
      {/* Top Bar with Back Button and Collapsed Title */}
      <div className="mb-6 shrink-0 flex items-center justify-between gap-4">
        <Link 
          href="/?tab=blogs" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all group shrink-0"
        >
          <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline">Back to Blogs</span>
          <span className="sm:hidden text-xs">Back</span>
        </Link>
        
        {/* Animated Sticky Title */}
        <div className={`flex-1 transition-all duration-300 transform ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <div className="flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl backdrop-blur-md shadow-[0_0_20px_rgba(110,193,255,0.15)]">
            <HiBookOpen className="w-4 h-4 text-primary shrink-0" />
            <h2 className="text-sm md:text-base font-bold text-white truncate neon-text">
              {post?.title}
            </h2>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-hidden glass-panel flex flex-col relative">
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto custom-scrollbar"
        >
          {/* Main Blog Header Info */}
          {post && (
            <div className={`p-8 md:p-12 border-b border-white/10 bg-white/[0.02] transition-all duration-500 ${isScrolled ? 'opacity-30' : 'opacity-100'}`}>
              <div className="flex items-center gap-2 text-blue-400 text-sm mb-4 font-medium uppercase tracking-widest">
                <HiBookOpen className="w-4 h-4" />
                <span>Blog Post</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
                <span className="flex items-center gap-1.5">
                  <HiCalendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl italic border-l-2 border-blue-500/30 pl-4">
                {post.content}
              </p>
            </div>
          )}
          
          <div className="p-6 md:p-10">
            <NotionDynamicWrapper recordMap={recordMap} />
          </div>
        </div>
      </div>
    </div>
  );
}

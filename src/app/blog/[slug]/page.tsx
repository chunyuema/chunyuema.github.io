import * as React from 'react';
import { NotionAPI } from 'notion-client';
import NotionDynamicWrapper from '../../../components/NotionDynamicWrapper';
import Link from 'next/link';
import { HiArrowLeft, HiCalendar, HiBookOpen } from 'react-icons/hi';
import { blogPosts } from '../../../data/BlogEntry';

const notion = new NotionAPI();

type Params = Promise<{ slug: string }>;

const getPageIdFromUrl = (url: string) => {
  const cleanUrl = url.split('?')[0];
  const parts = cleanUrl.split("/");
  const lastPart = parts[parts.length - 1];
  const idMatch = lastPart.match(/([a-f0-9]{32})/i);
  return idMatch ? idMatch[1] : lastPart;
};

export default async function NotionPage(props: { params: Params }) {
  const { slug } = await props.params;
  
  // Find the post metadata
  const post = blogPosts.find(p => getPageIdFromUrl(p.url) === slug);

  try {
    const recordMap = await notion.getPage(slug);

    if (!recordMap) {
      throw new Error('No recordMap returned');
    }

    return (
      <div className="container mx-auto py-10 px-4 max-w-4xl h-[calc(100vh-4rem)] flex flex-col">
        <div className="mb-6 shrink-0">
          <Link 
            href="/?tab=blogs" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all group"
          >
            <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blogs</span>
          </Link>
        </div>
        
        <div className="flex-1 overflow-hidden glass-panel flex flex-col">
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {/* Blog Header Info */}
            {post && (
              <div className="p-8 md:p-12 border-b border-white/10 bg-white/[0.02]">
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
  } catch (error) {
    console.error('Error fetching notion page:', error);
    return (
      <div className="container mx-auto py-10 px-4 max-w-4xl h-[calc(100vh-4rem)] flex flex-col">
        <div className="mb-6 shrink-0">
          <Link 
            href="/?tab=blogs" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all group"
          >
            <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blogs</span>
          </Link>
        </div>
        <div className="flex-1 glass-panel p-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold mb-4 neon-text">Post not found</h1>
          <p className="text-gray-400">There was an error loading this blog post ({slug}).</p>
        </div>
      </div>
    );
  }
}

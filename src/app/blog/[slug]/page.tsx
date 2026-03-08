import * as React from 'react';
import { NotionAPI } from 'notion-client';
import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';
import { blogPosts } from '../../../data/BlogEntry';
import BlogPostLayout from '../../../components/notion/BlogPostLayout';

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
      <BlogPostLayout 
        post={post} 
        recordMap={recordMap} 
        slug={slug} 
      />
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

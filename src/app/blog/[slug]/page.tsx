import * as React from 'react';
import { NotionAPI } from 'notion-client';
import NotionDynamicWrapper from '../../../components/NotionDynamicWrapper';
import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';

const notion = new NotionAPI();

type Params = Promise<{ slug: string }>;

export default async function NotionPage(props: { params: Params }) {
  const { slug } = await props.params;

  try {
    const recordMap = await notion.getPage(slug);

    if (!recordMap) {
      throw new Error('No recordMap returned');
    }

    return (
      <div className="container mx-auto py-10 px-4 max-w-4xl">
        <div className="mb-8">
          <Link 
            href="/?tab=blogs" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all group"
          >
            <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blogs</span>
          </Link>
        </div>
        <NotionDynamicWrapper recordMap={recordMap} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching notion page:', error);
    return (
      <div className="container mx-auto py-20 px-4 max-w-4xl">
        <div className="mb-8">
          <Link 
            href="/?tab=blogs" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all group"
          >
            <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blogs</span>
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <p className="text-gray-400">There was an error loading this blog post ({slug}).</p>
      </div>
    );
  }
}

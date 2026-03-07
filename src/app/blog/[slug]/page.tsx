import * as React from 'react';
import { NotionAPI } from 'notion-client';
import dynamic from 'next/dynamic';

const NotionClientRenderer = dynamic(() => import('../../../components/NotionClientRenderer'), {
  ssr: false,
  loading: () => <p className="text-center py-10 text-gray-400">Loading post content...</p>
});

const notion = new NotionAPI();

export default async function NotionPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  try {
    const recordMap = await notion.getPage(slug);

    if (!recordMap) {
      throw new Error('No recordMap returned');
    }

    return (
      <div className="container mx-auto py-20 px-4 max-w-4xl">
        <NotionClientRenderer recordMap={recordMap} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching notion page:', error);
    return (
      <div className="container mx-auto py-20 px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <p className="text-gray-400">There was an error loading this blog post ({slug}).</p>
      </div>
    );
  }
}

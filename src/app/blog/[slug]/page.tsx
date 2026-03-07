import * as React from 'react';
import { NotionAPI } from 'notion-client';
import NotionDynamicWrapper from '../../../components/NotionDynamicWrapper';

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
      <div className="container mx-auto py-20 px-4 max-w-4xl">
        <NotionDynamicWrapper recordMap={recordMap} />
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

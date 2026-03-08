'use client';

import dynamic from 'next/dynamic';

const NotionClientRenderer = dynamic(() => import('./NotionClientRenderer'), {
  ssr: false,
  loading: () => <p className="text-center py-10 text-gray-400 font-mono">Loading post content...</p>
});

export default function NotionDynamicWrapper({ recordMap }: { recordMap: any }) {
  return <NotionClientRenderer recordMap={recordMap} />;
}

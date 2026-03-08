'use client';

import * as React from 'react';
import { NotionRenderer } from 'react-notion-x';

// Styles are imported in the page or here
import 'react-notion-x/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

export default function NotionClientRenderer({ recordMap }: { recordMap: any }) {
  return (
    <div className="glass-panel p-4 md:p-8">
      <NotionRenderer 
        recordMap={recordMap} 
        fullPage={false} 
        darkMode={true}
      />
    </div>
  );
}

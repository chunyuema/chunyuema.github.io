import * as React from 'react';
import './globals.css';

export const metadata = {
  title: 'Personal Site',
  description: 'My personal site and blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A12] text-[#F2F0FF]">
        {children}
      </body>
    </html>
  );
}

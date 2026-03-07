'use client';

import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

// Existing components - we will need to migrate these too
import AboutMe from '../components/AboutMe';
import BlogPage from '../components/Blogs';
import Resume from '../components/Resume';

export default function Home() {
  const [activeTab, setActiveTab] = useState('aboutMe');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'About Me', value: 'aboutMe' },
    { label: 'Resume', value: 'resume' },
    { label: 'Blogs', value: 'blogs' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A12] text-[#F2F0FF] font-mono">
      {/* NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/5 backdrop-blur-md border-b border-white/10 z-50">
        <div className="container mx-auto h-full px-6 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight neon-text">
            Chunyue's Personal Site
          </h1>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setActiveTab(item.value)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeTab === item.value
                    ? 'bg-primary/20 text-primary border border-primary/30 shadow-[0_0_10px_rgba(110,193,255,0.3)]'
                    : 'hover:bg-white/5 text-white/70 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-[#0F0F1A] border-l border-white/10 p-6 flex flex-col space-y-4 shadow-2xl">
            <div className="flex justify-end mb-4">
               <button onClick={() => setIsMenuOpen(false)}><FiX size={24}/></button>
            </div>
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  setActiveTab(item.value);
                  setIsMenuOpen(false);
                }}
                className={`text-left px-4 py-3 rounded-xl transition-all ${
                  activeTab === item.value
                    ? 'bg-primary/20 text-primary border border-primary/30'
                    : 'text-white/60 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main className="pt-24 pb-12 container mx-auto px-6 max-w-5xl">
        <div className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
          {activeTab === 'aboutMe' && <AboutMe />}
          {activeTab === 'resume' && <Resume />}
          {activeTab === 'blogs' && <BlogPage />}
        </div>
      </main>
    </div>
  );
}

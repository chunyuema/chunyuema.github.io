"use client";

import React, { useState, useEffect, Suspense } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useSearchParams } from "next/navigation";

// Existing components - we will need to migrate these too
import AboutMe from '../components/sections/AboutMe';
import BlogPage from '../components/sections/Blogs';
import Resume from '../components/sections/Resume';
import Skills from '../components/sections/Skills';


function HomeContent({ initialTab }: { initialTab: string }) {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(initialTab);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && ["aboutMe", "resume", "blogs", "skills"].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const navItems = [
    { label: "ABOUT_ME", value: "aboutMe" },
    { label: "EXPERIENCE", value: "resume" },
    { label: "SKILLS", value: "skills" },
    { label: "BLOGS", value: "blogs" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A12] text-[#F2F0FF] font-mono selection:bg-blue-500/30">
      {/* NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-[#0A0A12]/80 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="container mx-auto h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            <h1 className="text-sm font-black tracking-tighter uppercase italic group cursor-default">
              CHUNYUE <span className="text-blue-500 not-italic">MA</span>
              <span className="hidden md:inline text-[10px] ml-2 text-gray-600 font-mono font-normal tracking-normal not-italic lowercase opacity-0 group-hover:opacity-100 transition-opacity">
                --welcome to my personal website!
              </span>
            </h1>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setActiveTab(item.value)}
                className={`px-4 py-1.5 rounded-md transition-all duration-300 text-[11px] font-bold tracking-widest ${
                  activeTab === item.value
                    ? "bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                    : "text-gray-500 hover:text-gray-300 hover:bg-white/5 border border-transparent"
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
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-[#0F0F1A] border-l border-white/10 p-6 flex flex-col space-y-4 shadow-2xl">
            <div className="flex justify-end mb-4">
              <button onClick={() => setIsMenuOpen(false)}>
                <FiX size={24} />
              </button>
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
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "text-white/60 hover:bg-white/5"
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
          {activeTab === "aboutMe" && <AboutMe />}
          {activeTab === "resume" && <Resume />}
          {activeTab === "skills" && <Skills />}
          {activeTab === "blogs" && <BlogPage />}
        </div>
      </main>
    </div>
  );
}

export default function Home(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeWrapper searchParams={props.searchParams} />
    </Suspense>
  );
}

function HomeWrapper({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = React.use(searchParams);
  const tab =
    typeof resolvedParams.tab === "string" ? resolvedParams.tab : "aboutMe";
  const initialTab = ["aboutMe", "resume", "blogs", "skills"].includes(tab)
    ? tab
    : "aboutMe";

  return <HomeContent initialTab={initialTab} />;
}

import React, { useState, ChangeEvent } from "react";
import { blogPosts } from "../data/BlogEntry";
import Link from 'next/link';
import { HiSearch, HiBookOpen } from "react-icons/hi";

const BlogPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPosts, setFilteredPosts] = useState(blogPosts);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        setFilteredPosts(
            blogPosts.filter(
                (post) =>
                    post.title.toLowerCase().includes(term) ||
                    post.content.toLowerCase().includes(term)
            )
        );
    };

    const getPageIdFromUrl = (url: string) => {
      const cleanUrl = url.split('?')[0];
      const parts = cleanUrl.split("/");
      const lastPart = parts[parts.length - 1];
      const idMatch = lastPart.match(/([a-f0-9]{32})/i);
      return idMatch ? idMatch[1] : lastPart;
    };

    return (
        <div className="container mx-auto py-20 px-4 max-w-4xl mt-16">
            <div className="glass-panel mb-12 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <h1 className="text-xl font-bold neon-text">
                    What I have been thinking about...
                </h1>
                <div className="relative w-full md:w-72">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <HiSearch className="text-gray-400 h-5 w-5" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-lg bg-white/5 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    />
                </div>
            </div>

            <div className="space-y-4">
                {filteredPosts.map((post) => (
                    <Link 
                        key={post.url}
                        href={`/blog/${getPageIdFromUrl(post.url)}`}
                        className="block group"
                    >
                        <div className="glass-panel p-6 hover:bg-white/10 transition-all duration-300 border-l-4 border-l-transparent hover:border-l-blue-500">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-blue-500/10 p-2 rounded-lg text-blue-400 group-hover:text-blue-300 transition-colors">
                                    <HiBookOpen className="h-6 w-6" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold text-gray-100 group-hover:text-white mb-2 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                                        {post.content}
                                    </p>
                                    <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                                        {new Date(post.date).toLocaleDateString(undefined, {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;

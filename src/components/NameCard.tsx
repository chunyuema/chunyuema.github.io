import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';

interface NameCardProps {
  name: string;
  title: string;
}

const NameCard: React.FC<NameCardProps> = ({ name, title }) => (
  <div className="flex flex-col items-center gap-4 p-6 glass-panel w-full">
    <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
      <Image
        src="/assets/profile.png"
        alt={name}
        fill
        className="object-cover"
      />
    </div>
    
    <div className="text-center">
      <h2 className="text-2xl font-bold neon-text mb-1">
        {name}
      </h2>
      <p className="text-gray-400 font-medium">
        {title}
      </p>
    </div>

    <div className="flex gap-4">
      <a
        href="https://github.com/chunyuema"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300 border border-white/10"
        aria-label="GitHub"
      >
        <FaGithub className="w-6 h-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/chunyue-ma-7b944717a"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300 border border-white/10"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="w-6 h-6" />
      </a>
    </div>
  </div>
);

export default NameCard;

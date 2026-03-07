import React from "react";
import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
  level: number;
}

interface SkillSetProps {
  title?: string;
  skills: Skill[];
}

const SkillSet = ({ title = "Skill Set", skills }: SkillSetProps) => {
  return (
    <div className="px-6 py-4">
      <h2 className="text-2xl font-bold neon-text mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="glass-panel p-6 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:text-blue-300 transition-colors">
                <skill.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-100">
                {skill.name}
              </h3>
            </div>

            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-400 bg-blue-900/20">
                    Level
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-blue-400">
                    {skill.level}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
                <div
                  style={{ width: `${skill.level}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-1000 ease-out"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;

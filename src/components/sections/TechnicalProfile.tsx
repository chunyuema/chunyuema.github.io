import React, { useState } from "react";
import { HiBriefcase, HiCode } from "react-icons/hi";
import { employmentHistoryData } from "../../data/EmploymentEntry";
import Skills from "./Skills";
import EmploymentHistory from "./EmploymentHistory";

const TechnicalProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"experiences" | "skills">("experiences");

  const TabButton = ({ id, label, icon: Icon, count }: { id: "experiences" | "skills", label: string, icon: any, count?: number }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 border-b-2 transition-all duration-300 group ${
        activeTab === id 
          ? "border-blue-500 bg-blue-500/5 text-white" 
          : "border-transparent text-gray-500 hover:text-gray-300 hover:bg-white/5"
      }`}
    >
      <Icon className={`w-5 h-5 transition-colors ${activeTab === id ? "text-blue-400" : "text-gray-600 group-hover:text-gray-400"}`} />
      <div className="text-left">
        <div className="text-[10px] font-mono uppercase tracking-widest opacity-50">Trace_Type</div>
        <div className="text-sm font-bold uppercase tracking-tighter">{label}</div>
      </div>
      {count !== undefined && (
        <span className={`ml-2 px-1.5 py-0.5 rounded text-[10px] font-mono ${activeTab === id ? "bg-blue-500/20 text-blue-400" : "bg-white/5 text-gray-600"}`}>
          {count}
        </span>
      )}
    </button>
  );

  return (
    <div className="container mx-auto mb-20 px-4 max-w-[1100px]">
      <div className="pt-2 pb-12 mx-auto">
        
        {/* EXPLORER TABS */}
        <div className="glass-panel mb-16 overflow-hidden flex flex-row border-b border-white/10">
          <TabButton 
            id="experiences" 
            label="Professional_Trace" 
            icon={HiBriefcase} 
            count={employmentHistoryData.length} 
          />
          <div className="w-[1px] bg-white/10" />
          <TabButton 
            id="skills" 
            label="Technical_Skills" 
            icon={HiCode} 
          />
        </div>

        {activeTab === "experiences" ? (
          <EmploymentHistory />
        ) : (
          <Skills />
        )}
      </div>
    </div>
  );
};

export default TechnicalProfile;

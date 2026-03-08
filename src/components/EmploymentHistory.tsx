import React, { useState } from "react";
import { HiStar, HiBriefcase, HiX, HiChip, HiLightningBolt, HiCode, HiTerminal } from "react-icons/hi";
import {
  EmploymentEntry,
  employmentHistoryData,
} from "../data/EmploymentEntry";

const EmploymentHistory: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<EmploymentEntry | null>(null);

  const handleCardClick = (job: EmploymentEntry) => setSelectedJob(job);
  const handleClose = () => setSelectedJob(null);

  return (
    <div className="py-12 px-4 max-w-[1100px] mx-auto">
      <div className="relative border-l-2 border-dashed border-white/10 ml-4 md:ml-48 space-y-12 pb-10">
        {employmentHistoryData.map((job, index) => {
          const isCurrent = index === 0;

          return (
            <div key={index} className="relative pl-10 group">
              {/* Trace Span Icon */}
              <div className={`absolute -left-[13px] top-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 z-10 ${
                isCurrent 
                  ? "bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]" 
                  : "bg-[#0A0A12] border-2 border-white/20 group-hover:border-blue-500/50"
              }`}>
                {isCurrent && <div className="w-2 h-2 bg-white rounded-full animate-ping" />}
              </div>

              {/* Date & Metadata (Desktop Sidebar) */}
              <div className="hidden md:block absolute -left-44 top-0 w-36 text-right space-y-1">
                <div className={`text-xs font-mono font-bold tracking-tighter ${isCurrent ? "text-blue-400" : "text-gray-500"}`}>
                  {job.dateRange}
                </div>
                <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">
                    {job.location}
                </div>
              </div>

              {/* Span Card */}
              <div
                onClick={() => handleCardClick(job)}
                className={`glass-panel p-6 cursor-pointer hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 border-l-4 ${
                  isCurrent ? "border-l-blue-500" : "border-l-white/10 group-hover:border-l-blue-500/30"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className={`text-xl font-bold tracking-tight ${isCurrent ? "text-white" : "text-gray-300"}`}>
                      {job.position}
                    </h3>
                    <div className="text-blue-400/80 font-mono text-sm">
                        {job.company}
                    </div>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg shrink-0">
                      <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase mb-0.5 tracking-widest">
                          <HiBriefcase className="w-3 h-3" />
                          <span>Organization</span>
                      </div>
                      <div className="text-[11px] font-bold text-gray-300">
                          {job.company === "Amazon Web Services" ? "AWS Lambda" : job.company}
                      </div>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {job.technologies.slice(0, 5).map(tech => (
                        <span key={tech} className="flex items-center gap-1.5 px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[10px] font-mono text-gray-400">
                            <HiChip className="w-3 h-3 text-gray-600" />
                            {tech}
                        </span>
                    ))}
                    {job.technologies.length > 5 && (
                        <span className="text-[10px] font-mono text-gray-600 self-center">
                            +{job.technologies.length - 5} more
                        </span>
                    )}
                </div>
                
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-500/60 group-hover:text-blue-400 transition-colors">
                  <span>Open_Span_Details</span>
                  <HiCode className="w-4 h-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Code-Viewer Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md" 
            onClick={handleClose}
          />
          <div className="relative w-full max-w-3xl bg-[#0F0F1A] border border-white/10 rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh]">
            
            {/* Terminal Header */}
            <div className="bg-[#1A1A2E] px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-xs font-mono text-gray-400 flex items-center gap-2">
                    <HiTerminal className="w-4 h-4" />
                    <span>{selectedJob.company.toLowerCase().replace(/\s/g, '_')}.log</span>
                </div>
              </div>
              <button 
                onClick={handleClose}
                className="p-1 hover:bg-white/10 rounded transition-colors text-gray-400 hover:text-white"
              >
                <HiX className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content - Styled like Code */}
            <div className="p-8 overflow-y-auto custom-scrollbar flex-1">
              <div className="space-y-8">
                <div>
                    <div className="text-blue-400 font-mono text-xs mb-2">// Role Overview</div>
                    <h3 className="text-2xl font-bold text-white mb-1">{selectedJob.position}</h3>
                    <p className="text-gray-400 font-mono text-sm">{selectedJob.company} • {selectedJob.location} • {selectedJob.dateRange}</p>
                </div>

                <div>
                    <div className="text-blue-400 font-mono text-xs mb-4">// System Impact & Contributions</div>
                    <ul className="space-y-4">
                        {selectedJob.descriptionPoints.map((point, i) => (
                        <li key={i} className="flex gap-4 group/item">
                            <span className="text-gray-600 font-mono text-sm mt-1">{String(i+1).padStart(2, '0')}</span>
                            <p className="text-gray-300 leading-relaxed text-sm group-hover/item:text-white transition-colors">
                                {point}
                            </p>
                        </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <div className="text-blue-400 font-mono text-xs mb-4">// Technical Stack</div>
                    <div className="flex flex-wrap gap-2">
                        {selectedJob.technologies.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-xs font-mono text-blue-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
              </div>
            </div>
            
            {/* Terminal Footer */}
            <div className="px-6 py-4 bg-[#1A1A2E] border-t border-white/5 flex justify-between items-center">
              <div className="text-[10px] font-mono text-gray-500 uppercase">
                  End of Trace
              </div>
              <button
                onClick={handleClose}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-widest rounded transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              >
                Return_To_Shell
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmploymentHistory;

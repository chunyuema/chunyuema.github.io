import React, { useState } from "react";
import { HiStar, HiBriefcase, HiX } from "react-icons/hi";
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
      <h2 className="text-3xl font-bold neon-text mb-12 text-center">Employment History</h2>
      
      <div className="relative border-l-2 border-white/10 ml-4 md:ml-32 space-y-12">
        {employmentHistoryData.map((job, index) => {
          const isCurrent = index === 0;

          return (
            <div key={index} className="relative pl-8">
              {/* Timeline Dot/Icon */}
              <div className={`absolute -left-[17px] top-0 w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                isCurrent 
                  ? "bg-blue-500 text-white ring-4 ring-blue-500/20" 
                  : "bg-gray-800 text-blue-400 border border-white/10"
              }`}>
                {isCurrent ? <HiStar className="w-5 h-5" /> : <HiBriefcase className="w-4 h-4" />}
              </div>

              {/* Date (Desktop) */}
              <div className="hidden md:block absolute -left-40 top-1 w-32 text-right">
                <span className={`text-sm font-semibold ${isCurrent ? "text-blue-400" : "text-gray-500"}`}>
                  {job.dateRange}
                </span>
              </div>

              {/* Card */}
              <div
                onClick={() => handleCardClick(job)}
                className={`glass-panel p-6 cursor-pointer hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 border-l-4 ${
                  isCurrent ? "border-l-blue-500" : "border-l-transparent"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <h3 className={`text-xl font-bold ${isCurrent ? "text-blue-400" : "text-gray-100"}`}>
                    {job.company} <span className="text-gray-500 font-normal">|</span> {job.position}
                  </h3>
                  <span className="md:hidden text-sm font-medium text-blue-500/80">
                    {job.dateRange}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">
                  {job.location}
                </p>
                
                <button className="text-xs font-bold uppercase tracking-wider text-blue-500 hover:text-blue-400 transition-colors">
                  View details →
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Dialog */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={handleClose}
          />
          <div className="relative glass-panel w-full max-w-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">
                {selectedJob.company} | {selectedJob.position}
              </h3>
              <button 
                onClick={handleClose}
                className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <HiX className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <p className="text-blue-400 font-semibold mb-6 flex items-center gap-2">
                <HiBriefcase />
                {selectedJob.location} — {selectedJob.dateRange}
              </p>
              
              <ul className="space-y-4">
                {selectedJob.descriptionPoints.map((point, i) => (
                  <li key={i} className="flex gap-3 text-gray-300 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Modal Footer */}
            <div className="p-4 bg-white/5 border-t border-white/10 flex justify-end">
              <button
                onClick={handleClose}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmploymentHistory;

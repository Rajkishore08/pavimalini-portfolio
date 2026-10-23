'use client';

import React, { useState } from 'react';
import { WORK_EXPERIENCES } from '@/data/portfolioData';
import { Calendar, MapPin, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>('exp-01');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden">
      {/* Soft Ambient Aurora Gradient Background Pattern */}
      <div
        className="absolute top-1/4 -right-10 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(186,230,253,0.35)_0%,rgba(224,242,254,0.15)_45%,transparent_70%)] -z-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="section-overline inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#070e1b] font-display tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569] max-w-2xl font-normal font-body leading-relaxed">
            Professional track record bridging full-stack software engineering and responsive product interface design.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#bae6fd] ml-3 md:ml-6 pl-6 md:pl-10 space-y-10">
          
          {WORK_EXPERIENCES.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div key={exp.id} className="relative group text-left">
                
                {/* Timeline Dot with Pulse Effect */}
                <div className="absolute -left-[31px] md:-left-[47px] top-6 w-5 h-5 rounded-full bg-white border-4 border-[#0284c7] shadow-sm group-hover:scale-125 group-hover:border-[#0ea5e9] transition-all duration-300" />

                {/* Frosted Glass Experience Card */}
                <div className="frosted-card rounded-3xl p-6 sm:p-8">
                  
                  {/* Card Header: Role, Company, Period, Location */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0284c7]">
                          Experience 0{index + 1}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono bg-[#e0f2fe] text-[#0369a1] border border-[#bae6fd]">
                          {exp.role.includes('Design') ? 'Product Design' : 'Full Stack'}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#070e1b] font-display">
                        {exp.role}
                      </h3>
                      <div className="text-base sm:text-lg font-bold text-[#0284c7] mt-0.5 font-display">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs font-medium text-[#64748b]">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0f9ff] border border-[#bae6fd] text-[#0b192c] font-mono">
                        <Calendar className="w-3.5 h-3.5 text-[#0284c7]" />
                        <span>{exp.duration}</span>
                      </div>
                      {exp.location && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[#64748b]">
                          <MapPin className="w-3.5 h-3.5 text-[#0ea5e9]" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Primary Description */}
                  <p className="text-sm sm:text-base text-[#1e293b] leading-relaxed mb-5 font-body">
                    {exp.description}
                  </p>

                  {/* Expandable Key Contributions */}
                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <div className="mb-6">
                      <button
                        type="button"
                        onClick={() => toggleExpand(exp.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0284c7] hover:text-[#0b192c] py-1 cursor-pointer transition-colors"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Hide Key Highlights' : 'View Key Highlights & Details'}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      {isExpanded && (
                        <div className="mt-3 p-4 rounded-2xl bg-[#f0f9ff] border border-[#bae6fd] space-y-2.5 animate-in fade-in duration-200">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1e293b] font-body">
                              <CheckCircle2 className="w-4 h-4 text-[#0ea5e9] shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{resp}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Technology Stack Tags */}
                  <div className="pt-4 border-t border-[#bae6fd]/50 flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#64748b] mr-2">
                      Stack:
                    </span>
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-[#e0f2fe] text-[#070e1b] border border-[#bae6fd] hover:bg-[#bae6fd]/60 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

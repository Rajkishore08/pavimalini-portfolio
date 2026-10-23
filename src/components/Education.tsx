'use client';

import React from 'react';
import { EDUCATION_DATA } from '@/data/portfolioData';
import { GraduationCap, Calendar, MapPin, Sparkles, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative overflow-hidden">
      {/* Soft Ambient Aurora Gradient Background Pattern */}
      <div
        className="absolute top-1/2 right-0 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(186,230,253,0.35)_0%,rgba(224,242,254,0.15)_45%,transparent_70%)] -z-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="section-overline inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#070e1b] font-display tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569] max-w-2xl font-normal font-body leading-relaxed">
            Formal coursework and software systems engineering foundation at Coimbatore Institute of Technology.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION_DATA.map((item) => (
            <div
              key={item.id}
              className="frosted-card p-7 sm:p-8 rounded-3xl text-left flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Graduation Icon & Duration Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd]/50 border border-[#bae6fd] flex items-center justify-center text-[#0284c7] shadow-xs">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#f0f9ff] text-[#070e1b] border border-[#bae6fd]">
                    <Calendar className="w-3.5 h-3.5 text-[#0284c7]" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Degree / Qualification */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#070e1b] font-display mb-1">
                  {item.degreeOrQualification}
                </h3>

                {/* Institution */}
                <p className="text-base font-bold text-[#0284c7] font-display mb-4">
                  {item.institution}
                </p>

                {/* Location */}
                <div className="inline-flex items-center gap-1.5 text-xs text-[#64748b] mb-6">
                  <MapPin className="w-3.5 h-3.5 text-[#0ea5e9]" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Bottom Score Highlight Pill */}
              <div className="pt-4 border-t border-[#bae6fd]/50 flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-[#64748b] uppercase tracking-wider">
                  Academic Performance
                </span>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#e0f2fe] text-[#070e1b] border border-[#bae6fd] font-mono font-bold text-sm shadow-xs">
                  <Award className="w-4 h-4 text-[#0284c7]" />
                  <span>
                    {item.scoreLabel}: {item.score}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

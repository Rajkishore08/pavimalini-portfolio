'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Sparkles, Layers, Palette, ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Soft Ambient Aurora Gradient Background Pattern */}
      <div
        className="absolute top-1/2 left-0 w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(186,230,253,0.35)_0%,rgba(224,242,254,0.15)_45%,transparent_70%)] -z-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="section-overline inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>Introduction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#070e1b] font-display tracking-tight">
            {PERSONAL_INFO.about.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569] max-w-2xl font-normal font-body leading-relaxed">
            {PERSONAL_INFO.about.subtitle}
          </p>
        </div>

        {/* Split Layout: Content (Left) & Profile Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Narrative & Pillars (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="frosted-card p-6 sm:p-8 rounded-3xl flex flex-col gap-5 text-left">
              <p className="text-base sm:text-lg text-[#070e1b] font-body leading-relaxed font-medium">
                {PERSONAL_INFO.about.paragraph1}
              </p>
              <p className="text-base sm:text-lg text-[#1e293b] font-body leading-relaxed">
                {PERSONAL_INFO.about.paragraph2}
              </p>
            </div>

            {/* Three Pillars Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PERSONAL_INFO.about.pillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="frosted-card p-5 rounded-2xl flex flex-col gap-2.5 text-left group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/85 text-[#0284c7] flex items-center justify-center border border-white/80 group-hover:scale-105 transition-transform shadow-xs">
                    {idx === 0 && <Layers className="w-5 h-5 text-[#0284c7]" />}
                    {idx === 1 && <Palette className="w-5 h-5 text-[#0ea5e9]" />}
                    {idx === 2 && <Sparkles className="w-5 h-5 text-[#0284c7]" />}
                  </div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-[#070e1b] group-hover:text-[#0284c7] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#334155] font-body leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Minimal Profile Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="frosted-card rounded-3xl p-7 sm:p-8 relative overflow-hidden text-left">
              
              {/* Subtle top badge */}
              <div className="flex items-center justify-between pb-6 border-b border-[#bae6fd]/50 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0ea5e9]" />
                  <span className="section-overline px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                    Candidate Profile
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#e0f2fe] border border-[#bae6fd] text-[#0369a1] font-mono">
                  CIT, Coimbatore
                </span>
              </div>

              {/* Profile Card Fields in Spec Rows */}
              <div className="space-y-1">
                {/* Candidate */}
                <div className="flex items-center justify-between py-2.5 border-b border-[#bae6fd]/60 gap-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#64748b] shrink-0">
                    Candidate
                  </span>
                  <span className="text-sm sm:text-base font-display font-bold text-[#070e1b] text-right">
                    {PERSONAL_INFO.name}
                  </span>
                </div>

                {/* Degree */}
                <div className="flex items-center justify-between py-2.5 border-b border-[#bae6fd]/60 gap-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#64748b] shrink-0">
                    Degree
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-semibold text-[#0284c7] text-right">
                    {PERSONAL_INFO.degree}
                  </span>
                </div>

                {/* Institution */}
                <div className="flex items-center justify-between py-2.5 border-b border-[#bae6fd]/60 gap-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#64748b] shrink-0">
                    Institution
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-medium text-[#070e1b] text-right">
                    {PERSONAL_INFO.institution}
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center justify-between py-2.5 border-b border-[#bae6fd]/60 gap-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#64748b] shrink-0">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-medium text-[#475569] text-right">
                    {PERSONAL_INFO.location}
                  </span>
                </div>

                {/* Focus */}
                <div className="flex items-center justify-between py-2.5 border-b-0 pb-1 gap-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#64748b] shrink-0">
                    Focus
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#0284c7] text-right">
                    Full Stack &amp; UI Systems
                  </span>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="mt-8 pt-6 border-t border-[#bae6fd]/50 flex items-center justify-between">
                <a
                  href="#experience"
                  className="text-xs font-mono font-bold text-[#0284c7] hover:text-[#070e1b] inline-flex items-center gap-1 group transition-colors"
                >
                  <span>View Timeline &amp; Roles</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <div className="flex items-center gap-1.5 font-mono">
                  <span className="w-2 h-2 rounded-full bg-[#0ea5e9]" />
                  <span className="text-xs text-[#64748b] font-medium">CIT Batch 2022-2027</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

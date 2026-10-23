'use client';

import React from 'react';
import { LEADERSHIP_POSITIONS } from '@/data/portfolioData';
import { Users, Calendar, Sparkles, Palette, HeartHandshake } from 'lucide-react';

export default function Leadership() {
  const getRoleIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Users className="w-5 h-5 text-[#0284c7]" />;
      case 1:
        return <Palette className="w-5 h-5 text-[#0ea5e9]" />;
      case 2:
      default:
        return <Sparkles className="w-5 h-5 text-[#0284c7]" />;
    }
  };

  return (
    <section id="leadership" className="py-20 md:py-28 relative overflow-hidden">
      {/* Soft Ambient Aurora Gradient Background Pattern */}
      <div
        className="absolute bottom-10 left-10 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(186,230,253,0.35)_0%,rgba(224,242,254,0.15)_45%,transparent_70%)] -z-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="section-overline inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 shadow-2xs">
            <HeartHandshake className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>Community &amp; Culture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#070e1b] font-display tracking-tight">
            Beyond the Code
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569] max-w-2xl font-normal font-body leading-relaxed">
            Driving technical leadership, product design directions, and collaborative developer initiatives at CIT.
          </p>
        </div>

        {/* 3 Positions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {LEADERSHIP_POSITIONS.map((pos, index) => (
            <div
              key={pos.id}
              className="frosted-card group p-6 sm:p-7 rounded-3xl flex flex-col justify-between text-left"
            >
              <div>
                {/* Top Row: Icon & Period */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd]/50 border border-[#bae6fd] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    {getRoleIcon(index)}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#f0f9ff] text-[#070e1b] border border-[#bae6fd]">
                    <Calendar className="w-3 h-3 text-[#0284c7]" />
                    <span>{pos.duration}</span>
                  </div>
                </div>

                {/* Role Position */}
                <h3 className="text-xl font-extrabold text-[#070e1b] font-display group-hover:text-[#0284c7] transition-colors mb-1">
                  {pos.position}
                </h3>

                {/* Organization */}
                <p className="text-sm font-bold text-[#0ea5e9] font-display mb-4">
                  {pos.organization}
                </p>

                {/* Focus description */}
                <p className="text-xs sm:text-sm text-[#475569] font-body leading-relaxed mb-6">
                  {pos.focus}
                </p>
              </div>

              {/* Bottom Identity Tag */}
              <div className="pt-4 border-t border-[#bae6fd]/50 flex items-center justify-between text-[11px] font-mono font-semibold text-[#0284c7]">
                <span>
                  {index === 0 && 'Executive Leadership'}
                  {index === 1 && 'Creative Direction'}
                  {index === 2 && 'Visual Storyboarding'}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

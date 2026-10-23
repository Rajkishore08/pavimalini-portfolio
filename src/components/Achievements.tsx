'use client';

import React from 'react';
import { ACHIEVEMENTS } from '@/data/portfolioData';
import { Trophy, Award, Sparkles, MapPin, Star } from 'lucide-react';

export default function Achievements() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'leadership':
        return <Star className="w-5 h-5 text-[#0284c7]" />;
      case 'hackathon':
        return <Trophy className="w-5 h-5 text-[#0284c7]" />;
      case 'award':
      default:
        return <Award className="w-5 h-5 text-[#0ea5e9]" />;
    }
  };

  return (
    <section id="achievements" className="py-20 md:py-28 relative overflow-hidden">
      {/* Soft Ambient Aurora Gradient Background Pattern */}
      <div
        className="absolute top-1/3 -left-10 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(186,230,253,0.35)_0%,rgba(224,242,254,0.15)_45%,transparent_70%)] -z-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="section-overline inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>Honors &amp; Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#070e1b] font-display tracking-tight">
            Key Achievements
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569] max-w-2xl font-normal font-body leading-relaxed">
            Verified competitive hackathons, leadership awards, and design challenge recognitions.
          </p>
        </div>

        {/* 4 Cards Grid (2x2 on desktop, 1 col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ACHIEVEMENTS.map((item, index) => (
            <div
              key={item.id}
              className="frosted-card group p-6 sm:p-7 rounded-3xl flex flex-col justify-between text-left relative overflow-hidden"
            >
              {/* Subtle Sky Blue Background Glow */}
              <div
                className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#e0f2fe] via-[#bae6fd]/20 to-transparent rounded-full blur-2xl -z-0 opacity-60 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Top Row: Icon and Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd]/50 border border-[#bae6fd] flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:border-[#0284c7] transition-transform">
                    {getIcon(item.type)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#f0f9ff] text-[#0369a1] border border-[#bae6fd]">
                    Achievement 0{index + 1}
                  </span>
                </div>

                {/* Achievement Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#070e1b] font-display group-hover:text-[#0284c7] transition-colors leading-snug mb-2">
                  {item.title}
                </h3>

                {/* Organization & Location */}
                {(item.organization || item.location) && (
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium text-[#64748b] mt-3">
                    {item.organization && (
                      <span className="font-semibold text-[#0b192c] font-display">
                        {item.organization}
                      </span>
                    )}
                    {item.location && (
                      <div className="flex items-center gap-1 text-[#64748b]">
                        <MapPin className="w-3.5 h-3.5 text-[#0ea5e9]" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Bottom Verification Label */}
              <div className="relative z-10 mt-6 pt-4 border-t border-[#bae6fd]/50 flex items-center justify-between text-xs">
                <span className="font-semibold text-[#0284c7] inline-flex items-center gap-1.5 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]" />
                  Verified Credential
                </span>
                {item.year && (
                  <span className="text-[#64748b] font-mono font-semibold">
                    {item.year}
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

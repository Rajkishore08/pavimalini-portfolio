'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070e1b] text-[#cbd5e1] border-t border-[#1e293b] pt-14 pb-10 text-left relative overflow-hidden">
      {/* Subtle radial ambient glow on footer */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(2,132,199,0.18)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#1e293b]">
          
          {/* Left: Brand Monogram & Bio */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0284c7] to-[#0369a1] border border-[#38bdf8]/40 flex items-center justify-center font-bold text-white text-base shadow-[0_4px_16px_rgba(2,132,199,0.35)] font-display">
              {PERSONAL_INFO.monogram}
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-white font-display">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs text-[#64748b] font-medium font-body">
                Full Stack Developer &amp; Product Designer • Coimbatore, India
              </p>
            </div>
          </div>

          {/* Center: Navigation shortcuts */}
          <nav className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold font-mono text-[#cbd5e1]">
            <a href="#about" className="hover:text-[#38bdf8] transition-colors">About</a>
            <a href="#experience" className="hover:text-[#38bdf8] transition-colors">Experience</a>
            <a href="#projects" className="hover:text-[#38bdf8] transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-[#38bdf8] transition-colors">Achievements</a>
            <a href="#education" className="hover:text-[#38bdf8] transition-colors">Education</a>
            <a href="#leadership" className="hover:text-[#38bdf8] transition-colors">Leadership</a>
            <a href="#skills" className="hover:text-[#38bdf8] transition-colors">Skills</a>
            <a href="#contact" className="hover:text-[#38bdf8] transition-colors">Contact</a>
          </nav>

          {/* Right: Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold text-[#38bdf8] bg-[#0b192c] hover:bg-[#1e293b] border border-[#38bdf8]/30 transition-all shadow-xs cursor-pointer group"
            aria-label="Scroll back to top of the page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748b]">
          <p className="font-mono">
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-[11px] font-body">
            <span>Engineered with industrial precision &amp; modern transparency</span>
            <Heart className="w-3.5 h-3.5 text-[#38bdf8] fill-[#38bdf8]" />
            <span>in Sky Blue &amp; Midnight Navy.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

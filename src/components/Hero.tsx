'use client';

import React from 'react';
import Image from 'next/image';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ArrowDown, ArrowUpRight, FileText, Sparkles, Terminal, Layers, Palette } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden bg-mesh-soft bg-grid-pattern"
    >
      {/* Ambient Sky Blue Radial Glows in Background (Hardware-accelerated) */}
      <div
        className="absolute top-5 left-1/4 w-80 sm:w-[540px] h-80 sm:h-[540px] rounded-full bg-[radial-gradient(circle,rgba(186,230,253,0.5)_0%,rgba(224,242,254,0.2)_45%,transparent_70%)] -z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-5 right-5 w-72 sm:w-[480px] h-72 sm:h-[480px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.25)_0%,rgba(224,242,254,0.3)_45%,transparent_70%)] -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Introduction & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e0f2fe] border border-[#bae6fd] shadow-xs mb-6 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0ea5e9] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0284c7]" />
              </span>
              <span className="text-xs font-semibold text-[#0369a1] font-mono tracking-wide">
                {PERSONAL_INFO.availabilityStatus}
              </span>
            </div>

            {/* Eyebrow */}
            <div className="section-overline inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>{PERSONAL_INFO.hero.eyebrow}</span>
            </div>

            {/* Main Heading with Sky Blue Gradient Highlight */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#070e1b] font-display tracking-tight leading-[1.12] mb-6">
              Designing experiences.{' '}
              <span className="bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#0284c7] bg-clip-text text-transparent">
                Building meaningful
              </span>{' '}
              digital products.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-[#475569] leading-relaxed max-w-2xl mb-8 font-normal font-body">
              {PERSONAL_INFO.hero.subheading}
            </p>

            {/* Three Core Identity Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {PERSONAL_INFO.identities.map((identity, idx) => (
                <div
                  key={identity}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#e0f2fe]/90 text-[#070e1b] border border-[#bae6fd] shadow-2xs"
                >
                  {idx === 0 && <Layers className="w-3.5 h-3.5 text-[#0284c7]" />}
                  {idx === 1 && <Palette className="w-3.5 h-3.5 text-[#0ea5e9]" />}
                  {idx === 2 && <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />}
                  <span>{identity}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Explore My Work (Scrolls to projects) */}
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Let's Connect (Scrolls to contact) */}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-[#070e1b] bg-white/95 hover:bg-[#e0f2fe] border border-[#bae6fd] shadow-xs hover:border-[#0284c7] transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4 text-[#0284c7]" />
              </a>

              {/* View Resume ↗ (Opens /resume.pdf in new tab) */}
              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm text-[#0369a1] hover:text-[#070e1b] bg-[#e0f2fe]/80 hover:bg-[#e0f2fe] border border-[#bae6fd] transition-all shadow-xs"
                title="View Pavimalini's resume PDF in new tab"
              >
                <FileText className="w-4 h-4 text-[#0284c7]" />
                <span>View Resume ↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Creative Visual Composition (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[420px]">
              
              {/* Outer Decorative Glow & Borders */}
              <div
                className="absolute -inset-3 bg-gradient-to-br from-[#A8C7FA]/40 via-[#E3EEFF]/60 to-[#6B9FE8]/30 rounded-3xl blur-xl opacity-70 animate-pulse-glow"
                aria-hidden="true"
              />

              {/* Main Profile Card Container */}
              <div className="relative rounded-3xl p-3 sm:p-4 frosted-card">
                
                {/* Image Wrapper */}
                <div className="relative w-full aspect-[4/4.3] rounded-2xl overflow-hidden bg-gradient-to-b from-[#e0f2fe] to-[#f0f9ff] border border-[#bae6fd]/60 shadow-inner group">
                  <Image
                    src={PERSONAL_INFO.profileImage}
                    alt="Pavimalini T - Full Stack Developer and Product Designer"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b]/70 via-transparent to-transparent opacity-80" />

                  {/* On-image Name Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-white/80 shadow-lg flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#070e1b] font-display">Pavimalini T</p>
                      <p className="text-[11px] font-medium text-[#0284c7]">MSc Software Systems • CIT</p>
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-[#e0f2fe] border border-[#bae6fd] flex items-center justify-center font-mono font-bold text-xs text-[#0284c7]">
                      PT
                    </div>
                  </div>
                </div>

                {/* Floating Micro-Card 1: Developer Code Snippet */}
                <div
                  className="absolute -top-5 -left-4 sm:-left-6 p-3 rounded-2xl frosted-card flex items-center gap-3 animate-float-slow hidden sm:flex"
                  aria-hidden="true"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#e0f2fe] flex items-center justify-center text-[#0284c7]">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div className="text-left font-mono">
                    <p className="text-[10px] text-[#64748b] uppercase tracking-wider">Stack Core</p>
                    <p className="text-xs font-bold text-[#070e1b]">Next.js • Python • RAG</p>
                  </div>
                </div>

                {/* Floating Micro-Card 2: Designer Metric Pill */}
                <div
                  className="absolute -bottom-5 -right-3 sm:-right-5 p-3 rounded-2xl frosted-card flex items-center gap-3 animate-float-reverse"
                  aria-hidden="true"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd]/60 flex items-center justify-center text-[#070e1b]">
                    <Palette className="w-4 h-4 text-[#0284c7]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-[#64748b] uppercase tracking-wider font-semibold">Product Craft</p>
                    <p className="text-xs font-bold text-[#070e1b] font-display">Figma • UI Systems</p>
                  </div>
                </div>

              </div>

              {/* Minimal Geometric Dots Accent */}
              <div
                className="absolute -bottom-8 -left-6 w-24 h-24 bg-dot-pattern opacity-60 -z-10 hidden sm:block"
                aria-hidden="true"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

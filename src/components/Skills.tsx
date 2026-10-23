'use client';

import React, { useState } from 'react';
import { SKILLS_DATA } from '@/data/portfolioData';
import { ExternalLink, Sparkles, Code, Layers, Database, Wrench } from 'lucide-react';

// Tech SVG Icons for recognizable visual flair
const TechIcon = ({ iconName, className = "w-6 h-6" }: { iconName: string; className?: string }) => {
  switch (iconName) {
    case 'python':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 6 4.38 6 4.38L6.01 6.84H12.16V7.74H3.6C3.6 7.74 2 7.54 2 12C2 16.46 3.4 16.26 3.4 16.26H5.2V13.8C5.2 13.8 5.1 11.4 7.6 11.4H13.7V9.6C13.7 9.6 13.8 6.84 10.3 6.84H12V2ZM9.5 4.1C10.05 4.1 10.5 4.55 10.5 5.1C10.5 5.65 10.05 6.1 9.5 6.1C8.95 6.1 8.5 5.65 8.5 5.1C8.5 4.55 8.95 4.1 9.5 4.1Z" fill="#315A91" />
          <path d="M12 22C17.52 22 18 19.62 18 19.62L17.99 17.16H11.84V16.26H20.4C20.4 16.26 22 16.46 22 12C22 7.54 20.6 7.74 20.6 7.74H18.8V10.2C18.8 10.2 18.9 12.6 16.4 12.6H10.3V14.4C10.3 14.4 10.2 17.16 13.7 17.16H12V22ZM14.5 19.9C13.95 19.9 13.5 19.45 13.5 18.9C13.5 18.35 13.95 17.9 14.5 17.9C15.05 17.9 15.5 18.35 15.5 18.9C15.5 19.45 15.05 19.9 14.5 19.9Z" fill="#6B9FE8" />
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#6B9FE8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="#315A91" />
        </svg>
      );
    case 'nodejs':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#315A91" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L3 7.5V16.5L12 22L21 16.5V7.5L12 2Z" />
          <path d="M12 22V12" />
          <path d="M21 7.5L12 12L3 7.5" />
        </svg>
      );
    case 'express':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#172C4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12h16" />
          <path d="M12 4l8 8-8 8" />
          <circle cx="8" cy="8" r="1.5" fill="#315A91" />
          <circle cx="8" cy="16" r="1.5" fill="#6B9FE8" />
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#315A91" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </svg>
      );
    case 'supabase':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.2 2.5L3.8 13.9C3.3 14.5 3.7 15.5 4.6 15.5H11.2V21.5L20.2 10.1C20.7 9.5 20.3 8.5 19.4 8.5H13.2V2.5Z" fill="#315A91" stroke="#6B9FE8" strokeWidth="1.2" />
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#315A91" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <circle cx="18" cy="9" r="2.5" />
          <path d="M6 8.5v7" />
          <path d="M8.5 6h4.5a3 3 0 0 1 3 3v0" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case 'figma':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#315A91" strokeWidth="1.8">
          <circle cx="16" cy="12" r="3" fill="#6B9FE8" />
          <path d="M8 3h4v6H8a3 3 0 0 1 0-6z" fill="#315A91" />
          <path d="M12 3h4a3 3 0 0 1 0 6h-4V3z" fill="#6B9FE8" />
          <path d="M8 9h4v6H8a3 3 0 0 1 0-6z" fill="#A8C7FA" />
          <path d="M8 15h4v3a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 2-2.8z" fill="#315A91" />
        </svg>
      );
    default:
      return <Code className={className} />;
  }
};

const categories = [
  { id: 'All', label: 'All Skills', icon: Sparkles },
  { id: 'Programming Languages', label: 'Languages', icon: Code },
  { id: 'Frameworks', label: 'Frameworks', icon: Layers },
  { id: 'Databases', label: 'Databases', icon: Database },
  { id: 'Tools', label: 'Tools', icon: Wrench },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-gradient-to-b from-[#F5F9FF] via-[#E3EEFF]/30 to-[#F5F9FF] overflow-hidden">
      {/* Soft Ambient Aurora Gradient Background Pattern */}
      <div
        className="absolute top-10 right-0 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(186,230,253,0.35)_0%,rgba(224,242,254,0.15)_45%,transparent_70%)] -z-0 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.22)_0%,rgba(186,230,253,0.25)_45%,transparent_70%)] -z-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-14">
          <div className="section-overline inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#070e1b] font-display tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569] max-w-2xl font-normal font-body leading-relaxed">
            Core programming languages, application frameworks, modern databases, and collaborative design tools from the verified resume.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#070e1b] text-white shadow-md shadow-[#070e1b]/20 transform -translate-y-0.5'
                    : 'bg-white/90 text-[#475569] hover:text-[#070e1b] hover:bg-[#e0f2fe] border border-[#bae6fd]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#38bdf8]' : 'text-[#0284c7]'}`} />
                <span>{cat.label}</span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <a
              key={skill.name}
              href={skill.docUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="frosted-card group relative p-6 rounded-2xl flex flex-col justify-between text-left cursor-pointer"
              title={`Read ${skill.name} official documentation`}
            >
              <div className="relative z-10 flex flex-col gap-3">
                {/* Top row: Icon and Category Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd]/50 border border-[#bae6fd] flex items-center justify-center text-[#070e1b] group-hover:scale-110 transition-transform shadow-xs">
                    <TechIcon iconName={skill.iconName} className="w-6 h-6 text-[#070e1b]" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-[#e0f2fe] text-[#0369a1] border border-[#bae6fd]">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name */}
                <div className="flex items-center gap-1.5 pt-1">
                  <h3 className="font-display font-bold text-lg text-[#070e1b] group-hover:text-[#0284c7] transition-colors">
                    {skill.name}
                  </h3>
                  <ExternalLink className="w-3.5 h-3.5 text-[#64748b] opacity-0 group-hover:opacity-100 group-hover:text-[#0284c7] transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                {/* Skill Description */}
                {skill.description && (
                  <p className="text-xs sm:text-sm text-[#475569] font-body leading-relaxed line-clamp-2">
                    {skill.description}
                  </p>
                )}
              </div>

              {/* Bottom Doc Link Indicator */}
              <div className="relative z-10 mt-5 pt-3 border-t border-[#A8C7FA]/20 flex items-center justify-between text-[11px] font-semibold text-[#6F8099] group-hover:text-[#315A91]">
                <span>View Documentation</span>
                <span className="font-mono text-xs text-[#6B9FE8] group-hover:translate-x-1 transition-transform">↗</span>
              </div>
            </a>
          ))}
        </div>

        {/* Notice strictly adhering to resume */}
        <div className="mt-10 p-4 rounded-xl bg-[#E3EEFF]/50 border border-[#A8C7FA]/40 max-w-xl text-left flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#6B9FE8] shrink-0" />
          <p className="text-xs text-[#315A91] font-medium">
            Strictly curated according to verified proficiencies in core programming, full-stack systems, relational/BaaS persistence, and design systems.
          </p>
        </div>

      </div>
    </section>
  );
}

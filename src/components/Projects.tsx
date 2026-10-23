'use client';

import React, { useState } from 'react';
import { FEATURED_PROJECTS, ProjectItem } from '@/data/portfolioData';
import { ArrowUpRight, Sparkles, Info } from 'lucide-react';
import ProjectMockupDashboard from './ProjectMockupDashboard';
import ProjectMockupAutoRAG from './ProjectMockupAutoRAG';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden">
      {/* Soft Ambient Aurora Gradient Background Pattern */}
      <div
        className="absolute top-1/3 -left-20 w-[460px] h-[460px] rounded-full bg-[radial-gradient(circle,rgba(186,230,253,0.35)_0%,rgba(224,242,254,0.15)_45%,transparent_70%)] -z-0 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -right-20 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.22)_0%,rgba(186,230,253,0.25)_45%,transparent_70%)] -z-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="section-overline inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#070e1b] font-display tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569] max-w-2xl font-normal font-body leading-relaxed">
            Selected full-stack and AI applications engineered for high performance, intuitive UX, and real-world utility.
          </p>
        </div>

        {/* Project Cards Grid (2 Col on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {FEATURED_PROJECTS.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="frosted-card group cursor-pointer rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-left relative overflow-hidden"
            >
              <div>
                {/* Visual Preview Container */}
                <div className="relative w-full rounded-2xl overflow-hidden border border-[#bae6fd] bg-[#f0f9ff] group-hover:border-[#38bdf8] transition-colors duration-300 mb-6">
                  <div className="transform group-hover:scale-[1.02] transition-transform duration-500 ease-out">
                    {project.id === 'techno-tenant' ? (
                      <ProjectMockupDashboard />
                    ) : (
                      <ProjectMockupAutoRAG />
                    )}
                  </div>
                  
                  {/* Subtle Badge on Mockup */}
                  <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md border border-[#bae6fd] text-[10px] font-mono font-bold text-[#070e1b] shadow-xs flex items-center gap-1.5">
                    <Info className="w-3 h-3 text-[#0284c7]" />
                    <span>Click to inspect</span>
                  </div>
                </div>

                {/* Category and Index Eyebrow */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0284c7]">
                    Project 0{index + 1} • {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#e0f2fe] text-[#070e1b] flex items-center justify-center group-hover:bg-[#0284c7] group-hover:text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-0.5 shadow-xs">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-extrabold text-[#070e1b] font-display group-hover:text-[#0284c7] transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Subtitle / Tagline */}
                <p className="text-xs sm:text-sm font-semibold text-[#0284c7] mb-3 font-display">
                  {project.tagline}
                </p>

                {/* Project Description */}
                <p className="text-sm text-[#475569] leading-relaxed mb-6 font-body line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Bottom: Tech Stack Pills & Action CTAs */}
              <div>
                <div className="flex flex-wrap items-center gap-1.5 mb-5">
                  {project.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-[#e0f2fe] text-[#070e1b] border border-[#bae6fd]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#bae6fd]/50 flex items-center justify-between text-xs font-bold text-[#0284c7]">
                  <span className="inline-flex items-center gap-1 group-hover:text-[#0b192c] transition-colors">
                    <span>Explore Full Architecture &amp; Case Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>

                  <span className="text-[11px] font-mono text-[#64748b]">Interactive View</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for In-Depth Project Inspection */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}

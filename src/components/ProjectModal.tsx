'use client';

import React, { useEffect } from 'react';
import { ProjectItem } from '@/data/portfolioData';
import { X, ExternalLink, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ProjectMockupDashboard from './ProjectMockupDashboard';
import ProjectMockupAutoRAG from './ProjectMockupAutoRAG';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#070e1b]/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white/95 backdrop-blur-xl border border-[#38bdf8]/40 shadow-2xl p-6 sm:p-8 text-left z-10 space-y-6">
        
        {/* Modal Top Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#bae6fd]/50">
          <div>
            <div className="section-overline inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>{project.category}</span>
            </div>
            <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-[#070e1b] font-display">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base font-semibold text-[#0284c7] mt-1 font-display">
              {project.tagline}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#f0f9ff] hover:bg-[#e0f2fe] text-[#070e1b] border border-[#bae6fd] transition-colors cursor-pointer"
            aria-label="Close Project Details Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Embedded Interactive Visual Mockup */}
        <div className="rounded-2xl overflow-hidden border border-[#bae6fd] bg-[#f0f9ff]">
          {project.id === 'techno-tenant' ? (
            <ProjectMockupDashboard />
          ) : (
            <ProjectMockupAutoRAG />
          )}
        </div>

        {/* Project Description */}
        <div className="space-y-3">
          <h4 className="text-base font-bold text-[#070e1b] font-display flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
            Project Overview
          </h4>
          <p className="text-sm sm:text-base text-[#1e293b] font-body leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h4 className="text-base font-bold text-[#070e1b] font-display flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0369a1]" />
            Core Architecture &amp; Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#f0f9ff] border border-[#bae6fd] flex items-start gap-2.5 text-xs sm:text-sm text-[#1e293b] font-body"
              >
                <CheckCircle2 className="w-4 h-4 text-[#0ea5e9] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Badges */}
        <div className="space-y-3 pt-2">
          <h4 className="text-base font-bold text-[#070e1b] font-display flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#0284c7]" />
            Technologies &amp; Tools Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.toolsUsed.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-[#e0f2fe] text-[#070e1b] border border-[#bae6fd] shadow-2xs"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Project Links Section */}
        <div className="pt-6 border-t border-[#bae6fd]/50 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#070e1b] hover:bg-[#0b192c] transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository ↗</span>
              </a>
            ) : (
              <div
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold font-mono text-[#64748b] bg-[#f0f9ff] border border-[#bae6fd] cursor-default"
                title="Repository link can be configured in CONFIG"
              >
                <GithubIcon className="w-4 h-4 text-[#64748b]" />
                <span>Code Repository (Configurable)</span>
              </div>
            )}

            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm"
              >
                <span>Live Demo ↗</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <div
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold font-mono text-[#64748b] bg-[#f0f9ff] border border-[#bae6fd] cursor-default"
                title="Live demo link can be configured in CONFIG"
              >
                <ExternalLink className="w-4 h-4 text-[#64748b]" />
                <span>Deployment Link (Configurable)</span>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-[#070e1b] bg-[#e0f2fe] hover:bg-[#bae6fd] border border-[#bae6fd] transition-all cursor-pointer font-mono"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

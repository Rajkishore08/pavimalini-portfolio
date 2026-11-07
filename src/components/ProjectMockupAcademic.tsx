'use client';

import React from 'react';
import { GraduationCap, Brain, TrendingUp, AlertCircle, Bot, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProjectMockupAcademic() {
  return (
    <div className="w-full bg-[#f8fafc] rounded-2xl overflow-hidden border border-[#bae6fd] shadow-inner font-sans text-left text-[#070e1b] select-none pointer-events-none sm:pointer-events-auto">
      {/* Top Application Header */}
      <div className="bg-white/95 px-4 py-3 border-b border-[#bae6fd]/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0284c7] to-[#0ea5e9] flex items-center justify-center text-white font-bold text-xs shadow-xs">
            <GraduationCap className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#070e1b] leading-none">Academic Analytics Platform</h4>
            <span className="text-[10px] text-[#0284c7] font-medium">Random Forest (93.4% Acc) • Google Gemini AI</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#e0f2fe] text-[#0369a1] border border-[#bae6fd]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            2,000 Students Tracked
          </span>
          <span className="text-[10px] text-[#070e1b] font-mono bg-white px-2 py-0.5 rounded border border-[#bae6fd] flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#0284c7]" />
            15,000 Records
          </span>
        </div>
      </div>

      {/* Main Workspace Canvas */}
      <div className="p-3 sm:p-4 space-y-3">
        {/* Metric Overview Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="bg-white p-2.5 rounded-xl border border-[#bae6fd]/60 shadow-xs">
            <div className="flex items-center justify-between text-[#64748b] text-[10px] mb-1">
              <span>Model Accuracy</span>
              <Brain className="w-3 h-3 text-[#0284c7]" />
            </div>
            <div className="text-sm font-mono font-extrabold text-[#070e1b]">93.4%</div>
            <div className="text-[9px] text-emerald-600 font-semibold mt-0.5">Random Forest Classifier</div>
          </div>

          <div className="bg-white p-2.5 rounded-xl border border-[#bae6fd]/60 shadow-xs">
            <div className="flex items-center justify-between text-[#64748b] text-[10px] mb-1">
              <span>Avg Improvement</span>
              <TrendingUp className="w-3 h-3 text-[#0ea5e9]" />
            </div>
            <div className="text-sm font-mono font-extrabold text-[#070e1b]">+14.2%</div>
            <div className="text-[9px] text-[#0284c7] font-semibold mt-0.5">Post-Recommendation</div>
          </div>

          <div className="bg-white p-2.5 rounded-xl border border-[#bae6fd]/60 shadow-xs">
            <div className="flex items-center justify-between text-[#64748b] text-[10px] mb-1">
              <span>Risk Identified</span>
              <AlertCircle className="w-3 h-3 text-amber-500" />
            </div>
            <div className="text-sm font-mono font-extrabold text-[#070e1b]">42 Cohorts</div>
            <div className="text-[9px] text-amber-600 font-semibold mt-0.5">Early Alert Sent</div>
          </div>

          <div className="bg-white p-2.5 rounded-xl border border-[#bae6fd]/60 shadow-xs">
            <div className="flex items-center justify-between text-[#64748b] text-[10px] mb-1">
              <span>AI Interventions</span>
              <Bot className="w-3 h-3 text-[#0284c7]" />
            </div>
            <div className="text-sm font-mono font-extrabold text-[#070e1b]">1,280</div>
            <div className="text-[9px] text-emerald-600 font-semibold mt-0.5">Gemini Study Plans</div>
          </div>
        </div>

        {/* Two-Column Diagnostic & Gemini AI Recommendation Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          {/* Left: Student Performance & Learning Gap Diagnosis (6 cols) */}
          <div className="sm:col-span-6 bg-white p-3 rounded-xl border border-[#bae6fd]/60 shadow-xs space-y-2">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#bae6fd]/40">
              <span className="text-xs font-bold text-[#070e1b] flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-[#0284c7]" />
                Student Learning Gap Diagnostics
              </span>
              <span className="text-[9px] font-mono bg-[#e0f2fe] text-[#0369a1] px-1.5 py-0.5 rounded font-semibold">
                ID: CS2023-142
              </span>
            </div>

            <div className="space-y-1.5 text-[11px]">
              <div className="flex justify-between items-center text-[#475569]">
                <span>Data Structures &amp; Algorithms:</span>
                <span className="font-semibold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                  Concept Gap: Graphs
                </span>
              </div>
              <div className="flex justify-between items-center text-[#475569]">
                <span>Predicted Backlog Risk:</span>
                <span className="font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                  Low Risk (2.4%)
                </span>
              </div>
              <div className="flex justify-between items-center text-[#475569]">
                <span>Continuous Assessment:</span>
                <span className="font-bold text-[#070e1b]">87.5 / 100</span>
              </div>
            </div>

            {/* Progress Bar of Subject Mastery */}
            <div className="pt-1">
              <div className="flex justify-between text-[10px] text-[#64748b] mb-1">
                <span>Curriculum Mastery</span>
                <span className="font-bold text-[#070e1b]">84%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#e0f2fe] overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] rounded-full w-[84%]" />
              </div>
            </div>
          </div>

          {/* Right: Gemini AI Academic Advisor Output (6 cols) */}
          <div className="sm:col-span-6 bg-white p-3 rounded-xl border border-[#bae6fd]/60 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-1.5 border-b border-[#bae6fd]/40">
                <span className="text-xs font-bold text-[#070e1b] flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5 text-[#0284c7]" />
                  Gemini AI Advisor Insights
                </span>
                <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-semibold border border-emerald-200">
                  Personalized Plan
                </span>
              </div>

              <div className="mt-2 p-2 rounded-lg bg-[#f0f9ff] border border-[#bae6fd]/60 text-[11px] text-[#1e293b] space-y-1">
                <p className="font-medium text-[#070e1b] flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#0284c7]" />
                  Tailored Academic Intervention:
                </p>
                <p className="text-[10px] text-[#475569] leading-relaxed">
                  &ldquo;Reinforce Graph Traversal (BFS/DFS) with 3 adaptive problem sets. Projected mastery increase: +18%. Backlog risk remains controlled.&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-2 pt-1.5 border-t border-[#bae6fd]/40 flex items-center justify-between text-[10px] text-[#0284c7] font-semibold">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                Alert Dispatched to Faculty Mentor
              </span>
              <span className="font-mono text-[9px] text-[#64748b]">FastAPI + SQLite</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


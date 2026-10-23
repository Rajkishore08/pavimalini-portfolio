'use client';

import React from 'react';
import { Car, Cpu, Sparkles, CheckCircle2, Bot } from 'lucide-react';

export default function ProjectMockupAutoRAG() {
  return (
    <div className="w-full bg-[#172C4D] rounded-2xl overflow-hidden border border-[#6B9FE8]/40 shadow-inner font-sans text-left text-white select-none pointer-events-none sm:pointer-events-auto">
      {/* Top AI Advisor Status Header */}
      <div className="bg-[#1D2B42]/90 px-4 py-3 border-b border-[#315A91]/60 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#6B9FE8] to-[#A8C7FA] flex items-center justify-center text-[#172C4D] font-bold text-xs">
            <Bot className="w-4 h-4 text-[#172C4D]" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white leading-none">AutoRAG Diagnostics Advisor</h4>
            <span className="text-[10px] text-[#A8C7FA] font-medium">Adaptive Multi-Hop RAG • NVIDIA NIM</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#315A91]/60 text-[#A8C7FA] border border-[#6B9FE8]/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            pgvector Active
          </span>
          <span className="text-[10px] text-slate-300 font-mono bg-[#172C4D] px-2 py-0.5 rounded border border-[#315A91]">
            Mem0 Context
          </span>
        </div>
      </div>

      {/* Main AI Advisor Workspace */}
      <div className="p-3 sm:p-4 space-y-3">
        
        {/* Top Split: Vehicle Info Panel (Left) & Adaptive Query Routing (Right) */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
          
          {/* Vehicle Info Panel (5 cols) */}
          <div className="sm:col-span-5 bg-[#1D2B42]/80 p-3 rounded-xl border border-[#315A91]/50 text-xs space-y-2">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#315A91]/40">
              <span className="font-bold text-[#A8C7FA] flex items-center gap-1.5 text-[11px]">
                <Car className="w-3.5 h-3.5 text-[#6B9FE8]" />
                Vehicle Telemetry
              </span>
              <span className="text-[9px] font-mono bg-[#315A91]/60 px-1.5 py-0.2 rounded text-slate-200">
                OBD-II LIVE
              </span>
            </div>

            <div className="space-y-1 font-mono text-[10px]">
              <div className="flex justify-between text-slate-300">
                <span>Model:</span>
                <span className="font-semibold text-white">Hybrid Crossover 2.5L</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Active Code:</span>
                <span className="text-amber-400 font-bold bg-amber-950/60 px-1 rounded">DTC P0841</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Transmission:</span>
                <span className="text-emerald-300 font-medium">Fluid Temp 88°C (Normal)</span>
              </div>
            </div>
          </div>

          {/* Adaptive Query Classification (7 cols) */}
          <div className="sm:col-span-7 bg-[#1D2B42]/80 p-3 rounded-xl border border-[#315A91]/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-1 border-b border-[#315A91]/40 text-[10px]">
                <span className="font-bold text-[#A8C7FA] flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-[#6B9FE8]" />
                  Query Routing Engine
                </span>
                <span className="text-emerald-400 font-mono font-bold text-[9px] bg-emerald-950/70 px-1.5 py-0.2 rounded">
                  Multi-Hop Mode (Depth: 3)
                </span>
              </div>
              
              <p className="text-[11px] text-slate-200 mt-1.5 italic line-clamp-1">
                &ldquo;Transmission shuddering on decelerating below 25 km/h with sensor code P0841.&rdquo;
              </p>
            </div>

            {/* Dynamic Routing Indicator Pills */}
            <div className="flex items-center gap-1.5 pt-2 text-[9px] font-mono">
              <span className="text-slate-400">Path:</span>
              <span className="px-1.5 py-0.5 rounded bg-[#315A91]/40 text-slate-400 line-through">Direct LLM</span>
              <span className="text-slate-500">→</span>
              <span className="px-1.5 py-0.5 rounded bg-[#315A91]/40 text-slate-400 line-through">Single RAG</span>
              <span className="text-slate-500">→</span>
              <span className="px-1.5 py-0.5 rounded bg-[#6B9FE8] text-[#172C4D] font-bold">Agentic Multi-Hop</span>
            </div>
          </div>

        </div>

        {/* Multi-Hop RAG Workflow Visualization Bar */}
        <div className="bg-[#1D2B42]/90 p-2.5 rounded-xl border border-[#6B9FE8]/30">
          <div className="flex items-center justify-between text-[10px] text-[#A8C7FA] mb-2 font-semibold">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#6B9FE8]" />
              Agentic Reasoning Pipeline Execution
            </span>
            <span className="font-mono text-[9px] text-slate-300">Latency: 420ms</span>
          </div>

          <div className="grid grid-cols-4 gap-1.5 text-[9px] font-mono text-center">
            <div className="bg-[#315A91]/40 border border-[#6B9FE8]/30 p-1.5 rounded-lg">
              <span className="text-[#A8C7FA] block font-bold">1. Symptom Parse</span>
              <span className="text-[8px] text-slate-300">OBD Code DTC</span>
            </div>
            <div className="bg-[#315A91]/40 border border-[#6B9FE8]/30 p-1.5 rounded-lg">
              <span className="text-[#A8C7FA] block font-bold">2. Manual Search</span>
              <span className="text-[8px] text-slate-300">pgvector Top-k</span>
            </div>
            <div className="bg-[#315A91]/40 border border-[#6B9FE8]/30 p-1.5 rounded-lg">
              <span className="text-[#A8C7FA] block font-bold">3. Mem0 Context</span>
              <span className="text-[8px] text-slate-300">Service History</span>
            </div>
            <div className="bg-[#6B9FE8] p-1.5 rounded-lg text-[#172C4D] font-bold border border-white/40">
              <span className="block">4. Synthesized</span>
              <span className="text-[8px] opacity-90">Root Cause Tree</span>
            </div>
          </div>
        </div>

        {/* AI Diagnostic Response Card */}
        <div className="bg-gradient-to-br from-[#1D2B42] to-[#172C4D] p-3 rounded-xl border border-emerald-500/40 space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Diagnostic Assessment: Secondary Fluid Pressure Sensor Circuit</span>
            </div>
            <span className="text-[9px] font-mono text-[#A8C7FA] bg-[#315A91]/50 px-2 py-0.5 rounded">
              Confidence: 96.4%
            </span>
          </div>

          <p className="text-[11px] text-slate-200 leading-relaxed">
            Multi-hop correlation between DTC P0841 and low-speed deceleration shudder points to harness connector degradation or secondary pressure sensor calibration drift. 
          </p>

          <div className="pt-1.5 flex items-center justify-between text-[10px] text-[#A8C7FA] border-t border-[#315A91]/40 font-mono">
            <span>Verified Source: OEM Transmission Section 7.2.4</span>
            <span className="text-emerald-400 font-semibold">Ready for Technician Action</span>
          </div>
        </div>

      </div>
    </div>
  );
}

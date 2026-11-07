'use client';

import React from 'react';
import { Layers, Activity, Eye, AlertTriangle, Radio, Glasses } from 'lucide-react';

export default function ProjectMockupCityTwin() {
  return (
    <div className="w-full bg-[#0a1526] rounded-2xl overflow-hidden border border-[#38bdf8]/40 shadow-inner font-sans text-left text-white select-none pointer-events-none sm:pointer-events-auto">
      {/* Top Digital Twin Application Bar */}
      <div className="bg-[#0f1f38]/95 px-4 py-3 border-b border-[#38bdf8]/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0284c7] to-[#38bdf8] flex items-center justify-center text-white font-bold text-xs shadow-xs">
            CT
          </div>
          <div>
            <h4 className="text-xs font-bold text-white leading-none">City Twin 3D Platform</h4>
            <span className="text-[10px] text-[#7dd3fc] font-medium">Underground Utility Digital Twin • AR/VR</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#0369a1]/40 text-[#7dd3fc] border border-[#38bdf8]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            128 IoT Sensors Live
          </span>
          <span className="text-[10px] text-slate-200 font-mono bg-[#070e1b] px-2 py-0.5 rounded border border-[#38bdf8]/30 flex items-center gap-1">
            <Glasses className="w-3 h-3 text-[#38bdf8]" />
            AR/VR Ready
          </span>
        </div>
      </div>

      {/* Main 3D Twin Workspace Canvas */}
      <div className="p-3 sm:p-4 space-y-3">
        {/* Metric Overview Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="bg-[#0f1f38]/80 p-2.5 rounded-xl border border-[#38bdf8]/30">
            <div className="flex items-center justify-between text-slate-400 text-[10px] mb-1">
              <span>Sub-Surface Depth</span>
              <Layers className="w-3 h-3 text-[#38bdf8]" />
            </div>
            <div className="text-sm font-mono font-extrabold text-white">18.5m</div>
            <div className="text-[9px] text-[#7dd3fc] font-semibold mt-0.5">3 Stratum Layers</div>
          </div>

          <div className="bg-[#0f1f38]/80 p-2.5 rounded-xl border border-[#38bdf8]/30">
            <div className="flex items-center justify-between text-slate-400 text-[10px] mb-1">
              <span>Telemetry Rate</span>
              <Activity className="w-3 h-3 text-emerald-400" />
            </div>
            <div className="text-sm font-mono font-extrabold text-white">420 msgs/s</div>
            <div className="text-[9px] text-emerald-400 font-semibold mt-0.5">Latency &lt; 15ms</div>
          </div>

          <div className="bg-[#0f1f38]/80 p-2.5 rounded-xl border border-[#38bdf8]/30">
            <div className="flex items-center justify-between text-slate-400 text-[10px] mb-1">
              <span>ML Health Index</span>
              <Radio className="w-3 h-3 text-[#0ea5e9]" />
            </div>
            <div className="text-sm font-mono font-extrabold text-white">98.4%</div>
            <div className="text-[9px] text-[#38bdf8] font-semibold mt-0.5">Nominal Operation</div>
          </div>

          <div className="bg-[#0f1f38]/80 p-2.5 rounded-xl border border-amber-500/40 bg-amber-950/20">
            <div className="flex items-center justify-between text-amber-300 text-[10px] mb-1">
              <span>Active Anomaly</span>
              <AlertTriangle className="w-3 h-3 text-amber-400" />
            </div>
            <div className="text-sm font-mono font-extrabold text-amber-400">Sector D-4</div>
            <div className="text-[9px] text-amber-300 font-semibold mt-0.5">Pressure Anomaly</div>
          </div>
        </div>

        {/* 3D Spatial Grid & Conduits Visualization */}
        <div className="relative bg-[#070e1b] rounded-xl border border-[#38bdf8]/30 p-3 overflow-hidden">
          {/* Coordinate grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

          {/* Top 3D Viewport Controls */}
          <div className="relative z-10 flex items-center justify-between pb-2 border-b border-slate-800 text-[10px]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[#7dd3fc] font-bold flex items-center gap-1">
                <Eye className="w-3 h-3 text-[#38bdf8]" />
                Isometric 3D Twin View
              </span>
              <span className="text-[9px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                Grid: Sector 07-E
              </span>
            </div>
            <div className="flex items-center gap-1 font-mono text-[9px]">
              <span className="px-1.5 py-0.5 rounded bg-[#0284c7]/40 text-[#7dd3fc]">Water</span>
              <span className="px-1.5 py-0.5 rounded bg-amber-500/30 text-amber-300">Power Grid</span>
              <span className="px-1.5 py-0.5 rounded bg-purple-500/30 text-purple-300">Fiber Optic</span>
            </div>
          </div>

          {/* Simulated 3D Conduit Pipeline SVG Diagram */}
          <div className="relative z-10 py-4 flex items-center justify-center">
            <svg viewBox="0 0 500 130" className="w-full h-auto max-h-[130px] stroke-current">
              <defs>
                <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
                <linearGradient id="powerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>
              </defs>

              {/* Utility Conduits (Lines in isometric depth) */}
              {/* Ground Plane Horizon */}
              <line x1="20" y1="25" x2="480" y2="25" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
              <text x="25" y="20" fill="#64748b" fontSize="8" fontFamily="monospace">Surface Level (0.0m)</text>

              {/* Water Line */}
              <path d="M 30 50 Q 150 40 260 55 T 470 50" fill="none" stroke="url(#waterGrad)" strokeWidth="3" />
              {/* Power Conduit */}
              <path d="M 30 85 Q 160 95 270 80 T 470 90" fill="none" stroke="url(#powerGrad)" strokeWidth="2.5" />
              {/* Telecom Fiber */}
              <path d="M 30 115 Q 170 110 300 120 T 470 115" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="6 3" />

              {/* Sensor Nodes along lines */}
              <circle cx="150" cy="45" r="4" fill="#38bdf8" className="animate-pulse" />
              <circle cx="260" cy="55" r="4" fill="#38bdf8" />
              <circle cx="380" cy="51" r="5" fill="#ef4444" stroke="#fca5a5" strokeWidth="2" />
              <text x="390" y="52" fill="#ef4444" fontSize="9" fontWeight="bold" fontFamily="monospace">Anomaly +34% Flow</text>

              <circle cx="160" cy="95" r="3.5" fill="#fbbf24" />
              <circle cx="270" cy="80" r="3.5" fill="#fbbf24" />
              <circle cx="360" cy="86" r="3.5" fill="#fbbf24" />

              <circle cx="170" cy="110" r="3" fill="#c084fc" />
              <circle cx="300" cy="120" r="3" fill="#c084fc" />
            </svg>
          </div>

          {/* Anomaly Notification Bar */}
          <div className="relative z-10 flex items-center justify-between p-2 rounded-lg bg-amber-950/40 border border-amber-500/40 text-[10px]">
            <span className="flex items-center gap-1.5 text-amber-300 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              AI/ML Alert: Hydraulic pressure transient in Sector D-4. Predictive failure probability: 82%.
            </span>
            <span className="text-[9px] font-mono font-bold text-amber-400 bg-amber-900/60 px-2 py-0.5 rounded border border-amber-600/50">
              Dispatch Scheduled
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


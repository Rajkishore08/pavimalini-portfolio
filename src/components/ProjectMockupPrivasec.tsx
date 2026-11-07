'use client';

import React from 'react';
import { ShieldCheck, Lock, Activity, EyeOff, KeyRound, Cpu } from 'lucide-react';

export default function ProjectMockupPrivasec() {
  return (
    <div className="w-full bg-[#0d1527] rounded-2xl overflow-hidden border border-[#38bdf8]/40 shadow-inner font-sans text-left text-white select-none pointer-events-none sm:pointer-events-auto">
      {/* Top Application Header */}
      <div className="bg-[#131f38]/95 px-4 py-3 border-b border-[#38bdf8]/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0284c7] to-[#38bdf8] flex items-center justify-center text-white font-bold text-xs shadow-xs">
            <ShieldCheck className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white leading-none">PRIVASEC Cyber Defense</h4>
            <span className="text-[10px] text-[#7dd3fc] font-medium">PII Masking • Isolation Forest ML • AES-256</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#0369a1]/40 text-[#7dd3fc] border border-[#38bdf8]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Shield Active
          </span>
          <span className="text-[10px] text-slate-200 font-mono bg-[#070e1b] px-2 py-0.5 rounded border border-[#38bdf8]/30 flex items-center gap-1">
            <Lock className="w-3 h-3 text-[#38bdf8]" />
            AES-256-GCM
          </span>
        </div>
      </div>

      {/* Main Workspace Canvas */}
      <div className="p-3 sm:p-4 space-y-3">
        {/* Metric Overview Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="bg-[#131f38]/80 p-2.5 rounded-xl border border-[#38bdf8]/30">
            <div className="flex items-center justify-between text-slate-400 text-[10px] mb-1">
              <span>PII Entities Masked</span>
              <EyeOff className="w-3 h-3 text-[#38bdf8]" />
            </div>
            <div className="text-sm font-mono font-extrabold text-white">14,290</div>
            <div className="text-[9px] text-emerald-400 font-semibold mt-0.5">Microsoft Presidio NLP</div>
          </div>

          <div className="bg-[#131f38]/80 p-2.5 rounded-xl border border-[#38bdf8]/30">
            <div className="flex items-center justify-between text-slate-400 text-[10px] mb-1">
              <span>Anomaly Risk Score</span>
              <Activity className="w-3 h-3 text-[#0ea5e9]" />
            </div>
            <div className="text-sm font-mono font-extrabold text-white">0.14 (Low)</div>
            <div className="text-[9px] text-[#7dd3fc] font-semibold mt-0.5">Isolation Forest ML</div>
          </div>

          <div className="bg-[#131f38]/80 p-2.5 rounded-xl border border-[#38bdf8]/30">
            <div className="flex items-center justify-between text-slate-400 text-[10px] mb-1">
              <span>Adaptive MFA</span>
              <KeyRound className="w-3 h-3 text-emerald-400" />
            </div>
            <div className="text-sm font-mono font-extrabold text-emerald-400">Enforced</div>
            <div className="text-[9px] text-slate-300 font-semibold mt-0.5">Risk-Triggered Challenge</div>
          </div>

          <div className="bg-[#131f38]/80 p-2.5 rounded-xl border border-[#38bdf8]/30">
            <div className="flex items-center justify-between text-slate-400 text-[10px] mb-1">
              <span>Service Latency</span>
              <Cpu className="w-3 h-3 text-[#38bdf8]" />
            </div>
            <div className="text-sm font-mono font-extrabold text-white">18ms</div>
            <div className="text-[9px] text-[#7dd3fc] font-semibold mt-0.5">FastAPI + Redis Cache</div>
          </div>
        </div>

        {/* Real-Time PII Masking & Stream Inspection */}
        <div className="bg-[#070e1b] rounded-xl border border-[#38bdf8]/30 p-3 space-y-2 text-xs font-mono">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-[10px]">
            <span className="text-[#7dd3fc] font-bold flex items-center gap-1.5">
              <EyeOff className="w-3.5 h-3.5 text-[#38bdf8]" />
              Presidio Real-Time PII Stream Sanitizer
            </span>
            <span className="text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded text-[9px]">
              Encrypted In-Flight
            </span>
          </div>

          <div className="space-y-1.5 text-[10.5px]">
            <div className="p-2 rounded bg-slate-900/80 border border-slate-800 flex flex-col gap-1">
              <span className="text-slate-400 text-[9px] uppercase tracking-wider font-semibold">Incoming Raw Request:</span>
              <p className="text-slate-300 truncate font-mono">
                &#123; user: &quot;John Doe&quot;, ssn: &quot;982-12-XXXX&quot;, email: &quot;john.d@enterprise.com&quot;, amount: 45000 &#125;
              </p>
            </div>

            <div className="p-2 rounded bg-[#0369a1]/20 border border-[#38bdf8]/40 flex flex-col gap-1">
              <span className="text-[#7dd3fc] text-[9px] uppercase tracking-wider font-semibold">Sanitized &amp; Encrypted Vector:</span>
              <p className="text-white truncate font-mono">
                &#123; user: &quot;<span className="text-amber-300 font-bold">[REDACTED_NAME]</span>&quot;, ssn: &quot;<span className="text-amber-300 font-bold">[MASKED_PII_SSN]</span>&quot;, token: &quot;a7f8e...&quot; &#125;
              </p>
            </div>
          </div>

          {/* Bottom Security Status */}
          <div className="pt-1 flex items-center justify-between text-[9px] text-slate-400">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Isolation Forest: Threat vector distance normal (no adversarial injection detected).
            </span>
            <span className="text-[#7dd3fc] font-mono">Docker + PostgreSQL</span>
          </div>
        </div>
      </div>
    </div>
  );
}


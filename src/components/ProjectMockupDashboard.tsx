'use client';

import React from 'react';
import { Building2, Users, DollarSign, TrendingUp, AlertCircle, ShieldCheck, PieChart } from 'lucide-react';

export default function ProjectMockupDashboard() {
  return (
    <div className="w-full bg-[#F5F9FF] rounded-2xl overflow-hidden border border-[#A8C7FA]/50 shadow-inner font-sans text-left select-none pointer-events-none sm:pointer-events-auto">
      {/* Dashboard Top Application Header */}
      <div className="bg-white/95 px-4 py-3 border-b border-[#A8C7FA]/40 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#315A91] to-[#6B9FE8] flex items-center justify-center text-white font-bold text-xs">
            TT
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#1D2B42] leading-none">Techno Tenant</h4>
            <span className="text-[10px] text-[#6F8099] font-medium">Property &amp; Rent Cloud PWA</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#E3EEFF] text-[#315A91] border border-[#A8C7FA]/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live Sync
          </span>
          <span className="text-[10px] text-[#6F8099] font-mono bg-white px-2 py-0.5 rounded border border-[#A8C7FA]/30">
            Firestore DB
          </span>
        </div>
      </div>

      {/* Main Dashboard Canvas */}
      <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          
          <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-[#A8C7FA]/40 shadow-xs">
            <div className="flex items-center justify-between text-[#6F8099] text-[10px] mb-1">
              <span>Total Rent</span>
              <DollarSign className="w-3 h-3 text-[#315A91]" />
            </div>
            <div className="text-sm sm:text-base font-extrabold text-[#1D2B42]">₹2,84,500</div>
            <div className="text-[9px] text-emerald-600 font-semibold mt-0.5">↑ 98% collected</div>
          </div>

          <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-[#A8C7FA]/40 shadow-xs">
            <div className="flex items-center justify-between text-[#6F8099] text-[10px] mb-1">
              <span>Occupancy</span>
              <Users className="w-3 h-3 text-[#6B9FE8]" />
            </div>
            <div className="text-sm sm:text-base font-extrabold text-[#1D2B42]">94.2%</div>
            <div className="text-[9px] text-[#315A91] font-semibold mt-0.5">18 / 19 Units</div>
          </div>

          <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-[#A8C7FA]/40 shadow-xs">
            <div className="flex items-center justify-between text-[#6F8099] text-[10px] mb-1">
              <span>Pending</span>
              <AlertCircle className="w-3 h-3 text-amber-500" />
            </div>
            <div className="text-sm sm:text-base font-extrabold text-[#1D2B42]">₹18,500</div>
            <div className="text-[9px] text-amber-600 font-semibold mt-0.5">1 overdue notice</div>
          </div>

          <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-[#A8C7FA]/40 shadow-xs">
            <div className="flex items-center justify-between text-[#6F8099] text-[10px] mb-1">
              <span>Net Margin</span>
              <TrendingUp className="w-3 h-3 text-[#315A91]" />
            </div>
            <div className="text-sm sm:text-base font-extrabold text-[#1D2B42]">₹2,32,100</div>
            <div className="text-[9px] text-[#6F8099] font-semibold mt-0.5">Post maintenance</div>
          </div>

        </div>

        {/* Middle Two-Column Grid: Units & Rent Collection Status */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          
          {/* Left: Active Property Units (7 cols) */}
          <div className="sm:col-span-7 bg-white p-3 rounded-xl border border-[#A8C7FA]/40 shadow-xs">
            <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-[#A8C7FA]/20">
              <span className="text-xs font-bold text-[#1D2B42] flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#315A91]" />
                Property Units Overview
              </span>
              <span className="text-[10px] font-semibold text-[#315A91] bg-[#E3EEFF] px-2 py-0.5 rounded">
                Greenwood Residency
              </span>
            </div>

            <div className="space-y-1.5">
              {[
                { unit: 'Unit 201 — 2BHK', tenant: 'Kishore S.', status: 'Paid', date: '01 Oct', amount: '₹22,000' },
                { unit: 'Unit 202 — 3BHK', tenant: 'Ramesh K.', status: 'Paid', date: '03 Oct', amount: '₹34,000' },
                { unit: 'Unit 203 — Studio', tenant: 'Ananya P.', status: 'Pending', date: 'Overdue (3d)', amount: '₹14,500' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-[#F5F9FF] border border-[#A8C7FA]/20 text-[11px]">
                  <div>
                    <span className="font-semibold text-[#1D2B42] block leading-tight">{item.unit}</span>
                    <span className="text-[#6F8099] text-[10px]">{item.tenant}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-[#1D2B42] block">{item.amount}</span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                      item.status === 'Paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Cash Flow & Analytics Breakdown (5 cols) */}
          <div className="sm:col-span-5 bg-white p-3 rounded-xl border border-[#A8C7FA]/40 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-[#A8C7FA]/20">
                <span className="text-xs font-bold text-[#1D2B42] flex items-center gap-1.5">
                  <PieChart className="w-3.5 h-3.5 text-[#6B9FE8]" />
                  Financial Analytics
                </span>
                <span className="text-[9px] font-mono text-[#6F8099]">October 2026</span>
              </div>

              {/* Progress bars for collections vs expenses */}
              <div className="space-y-2 mt-2">
                <div>
                  <div className="flex justify-between text-[10px] text-[#6F8099] mb-0.5">
                    <span>Rent Collected</span>
                    <span className="font-bold text-[#1D2B42]">92%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#E3EEFF] overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#315A91] to-[#6B9FE8] rounded-full w-[92%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] text-[#6F8099] mb-0.5">
                    <span>Expense Budget</span>
                    <span className="font-bold text-[#1D2B42]">18%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#E3EEFF] overflow-hidden">
                    <div className="h-full bg-[#A8C7FA] rounded-full w-[18%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* PWA / Offline capability footer */}
            <div className="mt-3 pt-2 border-t border-[#A8C7FA]/20 flex items-center justify-between text-[10px] text-[#315A91] bg-[#E3EEFF]/50 p-1.5 rounded-lg">
              <span className="inline-flex items-center gap-1 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#315A91]" />
                PWA Offline Cached
              </span>
              <span className="text-[9px] text-[#6F8099]">Auto-sync on</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

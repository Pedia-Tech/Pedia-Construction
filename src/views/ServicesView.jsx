import React from 'react';
import { CAPABILITIES, COMPANY_INFO } from '../data/companyData';
import { ArrowUpRight, Check, Compass, Layers, ShieldCheck, Ruler } from 'lucide-react';

export default function ServicesView({ onOpenQuote }) {
  return (
    <div className="w-full pt-28 pb-24 bg-prime-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* VIEW HERO */}
        <div className="max-w-3xl mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-prime-border rounded-md text-xs font-mono text-prime-accent font-semibold">
            SERVICES PORTFOLIO / ACI & BS STANDARDIZED
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-prime-navy tracking-tight leading-tight">
            ENGINEERING SERVICES DETAILED FOR EXECUTION.
          </h1>
          <p className="text-prime-slate text-base sm:text-lg leading-relaxed">
            Instead of generic drafting services, we operate as an integrated structural reinforcement support division. Each service is engineered for zero-clash tolerances and off-site fabrication compatibility.
          </p>
        </div>

        {/* VERTICAL EDITORIAL EXPERIENCE: EACH SERVICE OCCUPIES A LARGE SECTION */}
        <div className="space-y-16">
          {CAPABILITIES.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-prime-border p-8 sm:p-12 lg:p-16 shadow-technical grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              {/* LEFT: TECHNICAL SPECS & NUMBER */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center justify-between border-b border-prime-borderLight pb-4">
                  <span className="text-3xl font-mono font-bold text-prime-accent">
                    {service.num}
                  </span>
                  <span className="text-xs font-mono text-prime-slate px-3 py-1 bg-prime-subtle rounded border border-prime-borderLight">
                    {service.standards}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-prime-navy tracking-tight">
                  {service.title}
                </h2>

                <p className="text-base text-prime-slate leading-relaxed">
                  {service.description}
                </p>

                {/* Scope list */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase text-prime-slate font-semibold block">
                    Detailed Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs font-mono text-prime-navy">
                        <Check className="w-3.5 h-3.5 text-prime-accent shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={onOpenQuote}
                    className="px-5 py-2.5 bg-prime-navy hover:bg-prime-navyLight text-white rounded-lg text-xs font-mono font-medium tracking-wide shadow-subtle transition-smooth flex items-center gap-1.5"
                  >
                    <span>ENGAGE THIS SERVICE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-prime-accent" />
                  </button>
                </div>
              </div>

              {/* RIGHT: EDITORIAL DATA CARD / SOFTWARE METRICS */}
              <div className="lg:col-span-6 bg-prime-subtle/80 rounded-2xl p-8 border border-prime-border space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-mono text-prime-accent uppercase tracking-wider block font-semibold">
                    Software Platform & CAM Compatibility
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((t, tIdx) => (
                      <span key={tIdx} className="px-3 py-1.5 bg-white border border-prime-border rounded-lg text-xs font-mono text-prime-navy font-medium shadow-2xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-prime-borderLight space-y-2">
                  <div className="text-xs font-mono font-semibold text-prime-navy flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-prime-accent" />
                    Quality Checkpoint Standard
                  </div>
                  <p className="text-xs text-prime-slate leading-relaxed">
                    Every sheet passes 100% clash check verification against structural engineering drawings and architectural clearance envelopes.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 bg-white rounded-lg border border-prime-borderLight">
                    <span className="text-prime-slate text-[10px] block">STANDARD FORMAT</span>
                    <span className="font-semibold text-prime-navy">.DWG / .PDF / .BVBS</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-prime-borderLight">
                    <span className="text-prime-slate text-[10px] block">TURNAROUND SLA</span>
                    <span className="font-semibold text-prime-navy">24–48 Hours / Batch</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

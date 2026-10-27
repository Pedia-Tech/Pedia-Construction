import React, { useState } from 'react';
import { CAPABILITIES } from '../data/companyData';
import { ArrowUpRight, Plus, Minus, Layers, CheckCircle } from 'lucide-react';

export default function SectionCapabilities({ onOpenQuote }) {
  const [expandedId, setExpandedId] = useState(CAPABILITIES[0].id);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F6F5EE] border-b border-prime-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-prime-border gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono text-prime-accent tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-prime-accent" />
              SECTION 03 / TECHNICAL SPECIFICATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-prime-navy tracking-tight leading-tight">
              ENGINEERING CAPABILITIES.
            </h2>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono text-prime-slate uppercase block">
              TOTAL DISCIPLINES: 08
            </span>
            <span className="text-xs font-mono text-prime-accent font-semibold">
              INTERNATIONAL CODE COMPLIANT
            </span>
          </div>
        </div>

        {/* ASYMMETRIC LARGE NUMBERED ROWS */}
        <div className="divide-y divide-prime-border border-y border-prime-border">
          {CAPABILITIES.map((cap) => {
            const isExpanded = expandedId === cap.id;
            return (
              <div
                key={cap.id}
                className={`transition-colors duration-200 ${
                  isExpanded ? 'bg-white shadow-subtle' : 'hover:bg-white/50'
                }`}
              >
                {/* ROW HEADER (CLICKABLE) */}
                <div
                  onClick={() => toggleExpand(cap.id)}
                  className="py-6 sm:py-8 px-4 sm:px-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 group"
                >
                  <div className="flex items-start sm:items-center gap-6 sm:gap-10">
                    <span className="text-xl sm:text-2xl font-mono font-bold text-prime-slate group-hover:text-prime-accent transition-colors">
                      {cap.num}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-prime-navy group-hover:text-prime-navyLight transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-prime-slate mt-1 font-normal max-w-xl">
                        {cap.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end md:self-center shrink-0">
                    <span className="hidden sm:inline-block text-[11px] font-mono px-2.5 py-1 rounded bg-prime-subtle border border-prime-border text-prime-slate">
                      {cap.standards}
                    </span>
                    <button
                      className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
                        isExpanded
                          ? 'bg-prime-navy text-white border-prime-navy rotate-180'
                          : 'bg-white border-prime-border text-prime-navy group-hover:border-prime-accent'
                      }`}
                      aria-label="Expand service details"
                    >
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* EXPANDED ACCORDION DRAWER WITH ASYMMETRIC SPECIFICATION DETAILS */}
                {isExpanded && (
                  <div className="px-4 sm:px-8 pb-8 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-prime-borderLight bg-white animate-in fade-in duration-200">
                    <div className="lg:col-span-6 space-y-4">
                      <p className="text-sm sm:text-base text-prime-slate leading-relaxed">
                        {cap.description}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-2 pt-2">
                        <span className="text-xs font-mono text-prime-slate uppercase mr-2">Core Tools:</span>
                        {cap.tools.map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs font-mono px-2.5 py-1 bg-prime-subtle rounded border border-prime-borderLight text-prime-navy"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-6 bg-prime-subtle/80 p-5 rounded-xl border border-prime-borderLight flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-mono uppercase text-prime-slate tracking-wider block mb-3 font-semibold">
                          Primary Deliverables & Formats
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {cap.deliverables.map((item, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-2 text-xs font-mono text-prime-navy">
                              <span className="w-1.5 h-1.5 rounded-full bg-prime-accent shrink-0" />
                              <span className="truncate">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-prime-borderLight flex items-center justify-between">
                        <span className="text-xs font-mono text-prime-slate">
                          Standard Turnaround: 24–72h / batch
                        </span>
                        <button
                          onClick={onOpenQuote}
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-prime-navy hover:text-prime-accent transition-colors"
                        >
                          <span>REQUEST SCOPE AUDIT</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

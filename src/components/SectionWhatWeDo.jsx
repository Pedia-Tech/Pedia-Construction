import React, { useState } from 'react';
import { CORE_PILLARS } from '../data/companyData';
import { ArrowRight, Check, Compass, Ruler, ShieldAlert } from 'lucide-react';

export default function SectionWhatWeDo({ onSelectCapability }) {
  const [activePillar, setActivePillar] = useState('detail');

  const selectedData = CORE_PILLARS.find((p) => p.key === activePillar) || CORE_PILLARS[0];

  return (
    <section className="relative w-full py-24 sm:py-32 bg-prime-bg border-b border-prime-border overflow-hidden">
      <div className="absolute inset-0 bg-dot-matrix opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* EDITORIAL SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-prime-border gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono text-prime-accent tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-prime-accent" />
              SECTION 02 / CORE OPERATIONAL PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-prime-navy tracking-tight leading-tight">
              WHAT WE ACTUALLY DO.
            </h2>
          </div>
          <p className="text-prime-slate text-sm sm:text-base max-w-md font-normal leading-relaxed">
            We eliminate the friction between structural design intent and on-site ironworking. From calculation sheets to automated bender machines.
          </p>
        </div>

        {/* SPLIT VISUAL COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT: 3 INTERACTIVE EDITORIAL PILLARS */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {CORE_PILLARS.map((pillar) => {
              const isActive = pillar.key === activePillar;
              return (
                <div
                  key={pillar.key}
                  onClick={() => setActivePillar(pillar.key)}
                  className={`p-6 sm:p-8 rounded-2xl cursor-pointer transition-smooth border text-left ${
                    isActive
                      ? 'bg-white border-prime-navy shadow-premium'
                      : 'bg-white/60 hover:bg-white border-prime-borderLight hover:border-prime-border text-prime-slate'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-bold tracking-wider ${isActive ? 'text-prime-accent' : 'text-prime-slateLight'}`}>
                      {pillar.number} / CORE DISCIPLINE
                    </span>
                    <span className={`w-2 h-2 rounded-full transition-transform ${isActive ? 'bg-prime-accent scale-125' : 'bg-transparent'}`} />
                  </div>

                  <h3 className={`text-2xl sm:text-3xl font-display font-bold tracking-tight mb-2 ${isActive ? 'text-prime-navy' : 'text-prime-navy/80'}`}>
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-prime-slate leading-relaxed font-normal">
                    {pillar.headline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* RIGHT: DEEP TECHNICAL BREAKDOWN & SPECIFICATION PANEL */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-prime-border p-8 sm:p-12 shadow-technical flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-prime-borderLight pb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-prime-subtle rounded-md text-xs font-mono text-prime-navy font-medium">
                  <span>DISCIPLINE {selectedData.number}</span>
                  <span className="text-prime-border">|</span>
                  <span className="text-prime-accent">{selectedData.title}</span>
                </div>
                <span className="text-[11px] font-mono text-prime-slate">TOLERANCE ±1.5MM</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-display font-semibold text-prime-navy">
                {selectedData.headline}
              </h4>

              <p className="text-prime-slate text-base sm:text-lg leading-relaxed">
                {selectedData.description}
              </p>

              {/* SPECIFICATION BULLETS */}
              <div className="pt-4">
                <span className="text-xs font-mono uppercase text-prime-slate tracking-wider block mb-3">
                  Scope of Technical Verification
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedData.specs.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-lg bg-prime-subtle border border-prime-borderLight">
                      <div className="w-5 h-5 rounded-md bg-white border border-prime-border flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-prime-accent" />
                      </div>
                      <span className="text-xs font-mono font-medium text-prime-navy">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CALL TO ACTION LINK */}
            <div className="pt-8 mt-8 border-t border-prime-borderLight flex items-center justify-between">
              <div className="text-xs font-mono text-prime-slate">
                CODE ACCREDITED: ACI 318 • BS 8666 • IS 2502
              </div>
              <button
                onClick={() => onSelectCapability(selectedData.key)}
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-prime-navy hover:text-prime-accent transition-colors group"
              >
                <span>EXPLORE CAPABILITIES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

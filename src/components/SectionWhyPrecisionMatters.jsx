import React from 'react';
import { ShieldCheck, TrendingDown, Clock, GitMerge, FileCheck2, Cpu } from 'lucide-react';

export default function SectionWhyPrecisionMatters() {
  const precisionPoints = [
    {
      title: "Material Planning",
      metric: "-15% Variance",
      desc: "Precise estimation prevents steel shortages that halt construction or excessive stockpiling that incurs demurrage and weather degradation.",
      icon: TrendingDown
    },
    {
      title: "Off-Site Fabrication",
      metric: "100% Machine-Ready",
      desc: "Clean BBS shape codes link directly to CNC benders and automated shearlines, eliminating manual cutting errors at the yard.",
      icon: Cpu
    },
    {
      title: "Site Execution Speed",
      metric: "+30% Ironworker Output",
      desc: "Color-coded placement drawings and pre-resolved splice zones allow site ironworkers to place rebar seamlessly without burning hours deciphering blueprints.",
      icon: Clock
    },
    {
      title: "Cost & Budget Control",
      metric: "Zero Unplanned Laps",
      desc: "Detailed bar lap coordination and coupler placement ensure contractors do not absorb unplanned tonnage costs or structural change orders.",
      icon: ShieldCheck
    },
    {
      title: "Waste & Scrap Reduction",
      metric: "< 1.5% Scrap Rate",
      desc: "Linear cut nesting algorithms optimize 12m stock lengths, cutting off-cut wastage to a fraction of the industry average 5–8%.",
      icon: FileCheck2
    },
    {
      title: "Multi-Trade Coordination",
      metric: "LOD 400 Clash-Free",
      desc: "Rebar cages are fully coordinated against MEP conduits, post-tensioning anchors, sleeve penetrations, and embedded steel plates.",
      icon: GitMerge
    }
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F6F5EE] border-b border-prime-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* EDITORIAL HEADER */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-mono text-prime-accent tracking-widest uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-prime-accent" />
            SECTION 05 / STRUCTURAL INTEGRITY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-prime-navy tracking-tight leading-tight">
            SMALL DETAILS CREATE STRONG STRUCTURES.
          </h2>
          <p className="text-prime-slate text-base sm:text-lg leading-relaxed font-normal">
            A single misplaced lap splice or congested beam-column joint can delay a multi-million dollar pour. We engineer predictability into every bar mark.
          </p>
        </div>

        {/* 6-GRID EDITORIAL COMPOSITION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {precisionPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-white rounded-2xl border border-prime-border shadow-subtle hover:shadow-premium transition-smooth flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-prime-subtle border border-prime-border flex items-center justify-center text-prime-accent group-hover:bg-prime-navy group-hover:text-prime-accent transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 bg-prime-subtle text-prime-navy rounded border border-prime-borderLight">
                      {point.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-prime-navy group-hover:text-prime-navyLight transition-colors">
                    {point.title}
                  </h3>

                  <p className="text-sm text-prime-slate leading-relaxed">
                    {point.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-prime-borderLight flex items-center justify-between text-[11px] font-mono text-prime-slate">
                  <span>IMPACT METRIC 0{idx + 1}</span>
                  <span className="text-prime-accent font-semibold">VERIFIED QA</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

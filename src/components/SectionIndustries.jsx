import React, { useState } from 'react';
import { INDUSTRIES_LIST } from '../data/companyData';
import { ArrowRight, Building2, Factory, Landmark, Shield, Layers } from 'lucide-react';

export default function SectionIndustries({ onExploreIndustry }) {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  const industryImages = [
    "/images/projects/raft-foundation-mat.jpg",
    "/images/projects/cantilever-slab-shoring.jpg",
    "/images/projects/heavy-industrial-foundation-pour.jpg",
    "/images/projects/cable-stayed-bridge-viaduct.jpg",
    "/images/projects/column-cage-site-inspection.jpg",
    "/images/projects/raft-foundation-mat.jpg"
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 bg-prime-bg border-b border-prime-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-prime-border gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono text-prime-accent tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-prime-accent" />
              SECTION 09 / STRUCTURAL SECTORS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-prime-navy tracking-tight leading-tight">
              INDUSTRIES WE SERVE.
            </h2>
          </div>
          <p className="text-prime-slate text-sm sm:text-base max-w-md font-normal leading-relaxed">
            From nuclear radiation bunkers to cable-stayed highway viaducts. Every structural sector demands custom detailing protocols.
          </p>
        </div>

        {/* TWO-COLUMN INTERACTIVE LIST & LIVE PREVIEW IMAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: EDITORIAL LIST WITH LARGE TYPOGRAPHY */}
          <div className="lg:col-span-7 divide-y divide-prime-border border-y border-prime-border">
            {INDUSTRIES_LIST.map((ind, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <div
                  key={ind.id}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onClick={() => onExploreIndustry && onExploreIndustry(ind.title)}
                  className={`py-6 px-4 cursor-pointer transition-all duration-300 flex items-center justify-between group ${
                    isHovered ? 'bg-white shadow-subtle pl-6' : 'hover:bg-white/50'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-xs font-mono font-bold ${isHovered ? 'text-prime-accent' : 'text-prime-slateLight'}`}>
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className={`text-xl sm:text-2xl font-display font-bold tracking-tight transition-colors ${
                        isHovered ? 'text-prime-navy' : 'text-prime-navy/80'
                      }`}>
                        {ind.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-prime-slate mt-1 max-w-md leading-relaxed">
                        {ind.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:inline-block text-[11px] font-mono px-2.5 py-1 rounded bg-prime-subtle border border-prime-border text-prime-slate">
                      {ind.stat}
                    </span>
                    <ArrowRight className={`w-4 h-4 text-prime-accent transition-transform ${isHovered ? 'translate-x-1' : 'opacity-0 sm:opacity-40'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: DYNAMIC ARCHITECTURAL PREVIEW CARD */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-prime-border bg-prime-concrete shadow-premium relative">
              <img
                src={industryImages[hoveredIdx % industryImages.length]}
                alt={INDUSTRIES_LIST[hoveredIdx]?.title}
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-prime-navy/85 via-prime-navy/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-xs font-mono text-prime-accent uppercase tracking-widest block font-semibold">
                  SECTOR FOCUS 0{hoveredIdx + 1}
                </span>
                <h4 className="text-2xl font-display font-bold">
                  {INDUSTRIES_LIST[hoveredIdx]?.title}
                </h4>
                <p className="text-xs text-white/80 line-clamp-2 font-light">
                  {INDUSTRIES_LIST[hoveredIdx]?.desc}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

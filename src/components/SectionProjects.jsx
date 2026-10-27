import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/companyData';
import { ArrowUpRight, Layers, MapPin, Calendar, Check, ExternalLink } from 'lucide-react';

export default function SectionProjects({ onSelectProject, onViewAllProjects }) {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-prime-bg border-b border-prime-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* EDITORIAL HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-6 border-b border-prime-border gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono text-prime-accent tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-prime-accent" />
              SECTION 07 / REINFORCEMENT ARCHIVE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-prime-navy tracking-tight leading-tight">
              FEATURED STRUCTURES.
            </h2>
          </div>
          <button
            onClick={onViewAllProjects}
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-prime-navy hover:text-prime-accent transition-colors pb-1 border-b border-prime-navy hover:border-prime-accent"
          >
            <span>VIEW ALL 100+ STRUCTURES</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* ALTERNATING LEFT / RIGHT EDITORIAL SHOWCASE */}
        <div className="space-y-24 sm:space-y-32">
          {PROJECTS_DATA.map((proj, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={proj.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* IMAGE / VISUAL COLUMN */}
                <div
                  className={`lg:col-span-7 relative group cursor-pointer ${
                    isEven ? 'order-1 lg:order-1' : 'order-1 lg:order-2'
                  }`}
                  onClick={() => onSelectProject(proj)}
                >
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-prime-border bg-prime-concrete shadow-premium">
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Gradient Overlay for architectural depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-prime-navy/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Image Badges */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-prime-border shadow-subtle text-xs font-mono font-semibold text-prime-navy">
                      {proj.category}
                    </div>

                    <div className="absolute top-4 right-4 bg-prime-navy/90 backdrop-blur-md text-prime-accent px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono font-bold">
                      {proj.tonnage}
                    </div>

                    {/* Bottom Metadata in Image */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-prime-accent" />
                        {proj.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-prime-accent" />
                        {proj.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CONTENT / METADATA COLUMN */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? 'order-2 lg:order-2' : 'order-2 lg:order-1'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-prime-accent tracking-widest font-semibold">
                      PROJECT 0{idx + 1} / {proj.type}
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-prime-navy tracking-tight">
                      {proj.name}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-prime-slate leading-relaxed">
                    {proj.highlight}
                  </p>

                  {/* SCOPE PILLS */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase text-prime-slate tracking-wider block">
                      Engineering Scope Delivered:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {proj.scope.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 bg-white border border-prime-border rounded-md text-xs font-mono text-prime-navy"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* TONNAGE BREAKDOWN MINI-CARD */}
                  <div className="p-4 bg-white rounded-xl border border-prime-border grid grid-cols-3 gap-2 text-center text-xs font-mono">
                    <div>
                      <span className="text-[10px] text-prime-slate block">FOUNDATION</span>
                      <span className="font-bold text-prime-navy">{proj.stats.foundation}</span>
                    </div>
                    <div className="border-x border-prime-borderLight">
                      <span className="text-[10px] text-prime-slate block">COLUMNS</span>
                      <span className="font-bold text-prime-navy">{proj.stats.columns}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-prime-slate block">SCRAP RATE</span>
                      <span className="font-bold text-prime-accent">{proj.stats.scrapRate}</span>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button
                    onClick={() => onSelectProject(proj)}
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-prime-navy hover:text-prime-accent transition-colors pt-2 group"
                  >
                    <span>INSPECT FULL DRAWINGS & BBS</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/companyData';
import { ArrowUpRight, MapPin, Calendar, Layers, X, FileText, CheckCircle2, ChevronRight } from 'lucide-react';

export default function ProjectsView({ onOpenQuote }) {
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filters = ['ALL', 'COMMERCIAL', 'RESIDENTIAL', 'INDUSTRIAL', 'INFRASTRUCTURE'];

  const filteredProjects = selectedFilter === 'ALL'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedFilter);

  return (
    <div className="w-full pt-28 pb-24 bg-prime-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-prime-border rounded-md text-xs font-mono text-prime-accent font-semibold">
            PROJECT ARCHIVE / BUILT STRUCTURES
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-prime-navy tracking-tight leading-tight">
            ENGINEERED REINFORCEMENT ARCHIVE.
          </h1>
          <p className="text-prime-slate text-base sm:text-lg leading-relaxed">
            Detailed case files demonstrating our rebar placement drawings, bar bending schedules, and BIM clash resolution across global commercial, industrial, and infrastructure developments.
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap items-center gap-2 pb-8 mb-8 border-b border-prime-border">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-smooth border ${
                selectedFilter === f
                  ? 'bg-prime-navy text-white border-prime-navy font-semibold shadow-subtle'
                  : 'bg-white hover:bg-prime-subtle text-prime-navy border-prime-border'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID / EDITORIAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveModalProject(proj)}
              className="bg-white rounded-2xl border border-prime-border overflow-hidden shadow-subtle hover:shadow-premium transition-smooth cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-prime-concrete">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-mono font-semibold text-prime-navy">
                    {proj.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-prime-navy/90 backdrop-blur text-prime-accent px-3 py-1 rounded text-xs font-mono font-bold">
                    {proj.tonnage}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-prime-slate">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-prime-accent" />
                      {proj.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-prime-accent" />
                      {proj.year}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-prime-navy group-hover:text-prime-accent transition-colors">
                    {proj.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-prime-slate leading-relaxed">
                    {proj.highlight}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.scope.map((s, idx) => (
                      <span key={idx} className="text-[11px] font-mono px-2 py-0.5 bg-prime-subtle rounded border border-prime-borderLight text-prime-navy">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 border-t border-prime-borderLight flex items-center justify-between text-xs font-mono text-prime-navy">
                <span className="text-prime-slate">Area: {proj.area}</span>
                <span className="font-semibold text-prime-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  INSPECT PROJECT DOSSIER <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* PROJECT DETAIL MODAL */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-prime-navy/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-4xl bg-white rounded-3xl border border-prime-border shadow-elevated p-6 sm:p-10 max-h-[90vh] overflow-y-auto space-y-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl text-prime-slate hover:text-prime-navy hover:bg-prime-subtle transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* MODAL HEADER */}
            <div className="space-y-2 border-b border-prime-borderLight pb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-prime-accent font-semibold">
                <span>{activeModalProject.category}</span>
                <span>•</span>
                <span>{activeModalProject.year}</span>
                <span>•</span>
                <span>{activeModalProject.location}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-prime-navy">
                {activeModalProject.name}
              </h2>
              <p className="text-sm text-prime-slate">{activeModalProject.type}</p>
            </div>

            {/* IMAGE BANNER */}
            <div className="aspect-[21/9] rounded-2xl overflow-hidden border border-prime-border">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* SECTIONS: OVERVIEW, STRUCTURAL SCOPE, BBS, 3D MODEL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-display font-bold text-prime-navy">
                  Structural Engineering Scope
                </h4>
                <p className="text-sm text-prime-slate leading-relaxed">
                  {activeModalProject.highlight}
                </p>
                <div className="space-y-2 pt-2">
                  {activeModalProject.scope.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-mono text-prime-navy">
                      <CheckCircle2 className="w-4 h-4 text-prime-accent shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-prime-subtle p-6 rounded-2xl border border-prime-border space-y-4">
                <h4 className="text-lg font-display font-bold text-prime-navy">
                  Rebar Tonnage & Waste Metrics
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 bg-white rounded-lg border border-prime-borderLight">
                    <span className="text-prime-slate text-[10px] block">TOTAL TONNAGE</span>
                    <span className="font-bold text-prime-navy">{activeModalProject.tonnage}</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-prime-borderLight">
                    <span className="text-prime-slate text-[10px] block">TOTAL AREA</span>
                    <span className="font-bold text-prime-navy">{activeModalProject.area}</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-prime-borderLight">
                    <span className="text-prime-slate text-[10px] block">FOUNDATION REBAR</span>
                    <span className="font-bold text-prime-navy">{activeModalProject.stats.foundation}</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-prime-borderLight">
                    <span className="text-prime-slate text-[10px] block">REBAR SCRAP METRIC</span>
                    <span className="font-bold text-prime-accent">{activeModalProject.stats.scrapRate}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setActiveModalProject(null);
                    onOpenQuote();
                  }}
                  className="w-full py-3 bg-prime-navy hover:bg-prime-navyLight text-white rounded-xl text-xs font-mono font-semibold transition-smooth flex items-center justify-center gap-2"
                >
                  <span>REQUEST SIMILAR SCOPE ESTIMATE</span>
                  <ArrowUpRight className="w-4 h-4 text-prime-accent" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

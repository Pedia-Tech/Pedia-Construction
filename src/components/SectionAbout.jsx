import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Award, ShieldCheck, Cpu, Users2, FileCode, CheckCircle2 } from 'lucide-react';

export default function SectionAbout({ onReadMore }) {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F6F5EE] border-b border-prime-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* EDITORIAL HEADER */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-mono text-prime-accent tracking-widest uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-prime-accent" />
            SECTION 10 / CORPORATE PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-prime-navy tracking-tight leading-tight">
            PRECISION IS NOT A FEATURE. IT IS OUR STANDARD.
          </h2>
          <p className="text-prime-slate text-base sm:text-lg leading-relaxed font-normal">
            Prime Core Rebar was founded on a singular structural engineering thesis: that the greatest source of jobsite delays, steel tonnage waste, and ironworker frustration is ambiguous rebar detailing.
          </p>
        </div>

        {/* STATS STRIP (EDITABLE PLACEHOLDERS) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {COMPANY_INFO.stats.slice(0, 4).map((stat, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl border border-prime-border shadow-subtle flex flex-col justify-between"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-prime-navy mb-2">
                {stat.value}
              </div>
              <div>
                <div className="text-xs font-mono font-semibold text-prime-navy uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-[11px] text-prime-slate mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SPLIT STORY & TECHNICAL DRAWING OVERLAY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: STORY & FOUR PILLARS */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-display font-bold text-prime-navy">
              Engineering the Information Behind Every Pour
            </h3>
            
            <p className="text-sm sm:text-base text-prime-slate leading-relaxed">
              Based in {COMPANY_INFO.location}, our structural detailing studio operates as a dedicated technical extension to structural consulting firms, steel fabricators, and general contracting enterprises across North America, the UK, Europe, Australia, and the Middle East.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-xl border border-prime-border space-y-1.5">
                <div className="flex items-center gap-2 text-prime-accent">
                  <Cpu className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold text-prime-navy">BIM & 3D Tekla</span>
                </div>
                <p className="text-xs text-prime-slate">
                  LOD 400 models export directly into automated cutting shearlines and bender lines.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-prime-border space-y-1.5">
                <div className="flex items-center gap-2 text-prime-accent">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold text-prime-navy">ISO 9001 QA/QC</span>
                </div>
                <p className="text-xs text-prime-slate">
                  Double peer review by chartered structural engineers guarantees zero-clash tolerancing.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-prime-border space-y-1.5">
                <div className="flex items-center gap-2 text-prime-accent">
                  <FileCode className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold text-prime-navy">Global Code Suite</span>
                </div>
                <p className="text-xs text-prime-slate">
                  Strict detailing adhering to ACI 318, BS 8666, Eurocode 2, and IS 2502 standards.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-prime-border space-y-1.5">
                <div className="flex items-center gap-2 text-prime-accent">
                  <Users2 className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold text-prime-navy">Rapid RFI Support</span>
                </div>
                <p className="text-xs text-prime-slate">
                  Dedicated project coordinators resolving discrepancies within 4–12 hours.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onReadMore}
                className="px-6 py-3 bg-prime-navy hover:bg-prime-navyLight text-white rounded-lg text-xs font-mono font-semibold tracking-wide shadow-subtle transition-smooth"
              >
                READ FULL COMPANY DOSSIER
              </button>
            </div>
          </div>

          {/* RIGHT: ARCHITECTURAL COMPOSITION WITH CAD GRID OVERLAY */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-prime-border bg-prime-concrete shadow-premium">
              <img
                src="/images/projects/column-cage-site-inspection.jpg"
                alt="Prime Core Rebar Engineering Quality Audit"
                className="w-full h-full object-cover object-center"
              />

              {/* Blueprint Wireframe Layer Overlay */}
              <div className="absolute inset-0 bg-tech-grid-dense opacity-30 pointer-events-none" />

              {/* Floating Engineering Quality Stamp */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-prime-border shadow-elevated flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-prime-accent font-bold uppercase">
                    QUALITY ASSURANCE DOSSIER
                  </div>
                  <div className="text-xs font-display font-semibold text-prime-navy">
                    Dual Senior Engineer Sign-Off Protocol
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-prime-subtle border border-prime-border flex items-center justify-center text-prime-accent">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

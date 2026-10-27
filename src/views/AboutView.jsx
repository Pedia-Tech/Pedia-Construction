import React from 'react';
import { COMPANY_INFO, TEAM_MEMBERS } from '../data/companyData';
import { ShieldCheck, Award, Cpu, Code2, Users2, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function AboutView({ onOpenQuote }) {
  return (
    <div className="w-full pt-28 pb-24 bg-prime-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* HERO */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-prime-border rounded-md text-xs font-mono text-prime-accent font-semibold">
            ABOUT PRIME CORE REBAR / COMPANY DOSSIER
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-prime-navy tracking-tight leading-tight">
            ENGINEERING THE INFORMATION BEHIND THE STRUCTURE.
          </h1>
          <p className="text-prime-slate text-base sm:text-lg leading-relaxed">
            We are a high-precision structural rebar detailing, estimation, and BBS engineering company. We turn complex structural engineering intent into build-ready, clash-free reinforcement drawings that fabrication shops fabricate smoothly and ironworkers tie on site with zero ambiguity.
          </p>
        </div>

        {/* EDITABLE STATISTICS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-2xl border border-prime-border shadow-subtle flex flex-col justify-between"
            >
              <div className="text-4xl sm:text-5xl font-mono font-bold text-prime-navy mb-3">
                {stat.value}
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-prime-navy uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-xs text-prime-slate mt-1 font-normal">
                  {stat.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* OUR STORY & APPROACH */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-prime-accent uppercase tracking-widest font-semibold block">
              OUR ORIGIN & PURPOSE
            </span>
            <h2 className="text-3xl font-display font-bold text-prime-navy">
              Born to Eliminate Concrete Site Bottlenecks
            </h2>
            <p className="text-sm sm:text-base text-prime-slate leading-relaxed">
              Based in {COMPANY_INFO.location}, Prime Core Rebar was founded by chartered structural engineers who recognized that construction delays rarely stem from concrete supply—they stem from rebar congestion, uncoordinated laps, bar clashing at column-beam joints, and inaccurate cutting schedules.
            </p>
            <p className="text-sm sm:text-base text-prime-slate leading-relaxed">
              By combining parametric 3D LOD 400 modeling with deep knowledge of international building codes (ACI 318, BS 8666, IS 2502, and Eurocode 2), we give contractors complete confidence before steel is cut or bent.
            </p>
          </div>

          <div className="lg:col-span-6 aspect-[4/3] rounded-3xl overflow-hidden border border-prime-border bg-prime-concrete shadow-premium">
            <img
              src="/images/projects/raft-foundation-mat.jpg"
              alt="Structural Engineering Precision Mat Installation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TECHNOLOGY & QUALITY ASSURANCE PROTOCOLS */}
        <div className="bg-white rounded-3xl border border-prime-border p-8 sm:p-14 shadow-technical space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-prime-accent uppercase tracking-wider font-semibold">
              TECHNOLOGY & QA PROTOCOLS
            </span>
            <h3 className="text-3xl font-display font-bold text-prime-navy">
              Double-Tier Peer Verification System
            </h3>
            <p className="text-sm text-prime-slate">
              No drawing or bar bending schedule leaves our studio without passing our strict 4-step structural compliance review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-prime-subtle rounded-2xl border border-prime-borderLight space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-prime-border flex items-center justify-center text-prime-accent">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-base font-display font-bold text-prime-navy">
                Parametric CAD & Tekla LOD 400
              </h4>
              <p className="text-xs text-prime-slate leading-relaxed">
                Full 3D modeling enables virtual pre-construction clash detection against MEP ductwork, PT cables, and anchor embedments.
              </p>
            </div>

            <div className="p-6 bg-prime-subtle rounded-2xl border border-prime-borderLight space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-prime-border flex items-center justify-center text-prime-accent">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-display font-bold text-prime-navy">
                Senior Chartered Peer Review
              </h4>
              <p className="text-xs text-prime-slate leading-relaxed">
                Every calculation and bar bend shape code is independently audited by a senior civil engineer prior to client sign-off.
              </p>
            </div>

            <div className="p-6 bg-prime-subtle rounded-2xl border border-prime-borderLight space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-prime-border flex items-center justify-center text-prime-accent">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-display font-bold text-prime-navy">
                Automated BVBS CAM Exports
              </h4>
              <p className="text-xs text-prime-slate leading-relaxed">
                Direct export to CNC benders (BVBS standard) ensures zero manual translation error at the steel fabrication yard.
              </p>
            </div>
          </div>
        </div>

        {/* TEAM SECTION */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-prime-border gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-prime-accent uppercase tracking-wider font-semibold">
                LEADERSHIP & STRUCTURAL TALENT
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-prime-navy">
                Meet the Engineering Team.
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-prime-slate max-w-sm">
              All roles and designations are transparent placeholders reflecting our technical delivery organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-2xl border border-prime-border shadow-subtle hover:shadow-premium transition-smooth flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-prime-accent font-bold">0{idx + 1}</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-prime-subtle text-prime-slate">
                      {member.experience}
                    </span>
                  </div>

                  <h4 className="text-xl font-display font-bold text-prime-navy">
                    {member.name}
                  </h4>

                  <div className="text-xs font-mono text-prime-slate font-medium">
                    {member.role}
                  </div>

                  <div className="text-[11px] font-mono text-prime-slateLight">
                    {member.credentials}
                  </div>

                  <p className="text-xs text-prime-slate leading-relaxed pt-2 border-t border-prime-borderLight">
                    {member.bio}
                  </p>
                </div>

                <div className="text-[11px] font-mono text-prime-navy font-semibold bg-prime-subtle p-2.5 rounded-lg border border-prime-borderLight">
                  Core: {member.expertise}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA CARD */}
        <div className="p-8 sm:p-12 bg-prime-navy text-white rounded-3xl shadow-elevated flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-display font-bold">
              Ready to detail your next structural package?
            </h3>
            <p className="text-sm text-white/70 max-w-lg">
              Send over your structural sketches, general notes, or tender drawings for a prompt technical review.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="px-6 py-3.5 bg-prime-accent hover:bg-prime-accentHover text-prime-navy font-mono font-bold text-xs rounded-xl shadow-subtle transition-smooth shrink-0 flex items-center gap-2"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { WORKFLOW_STAGES } from '../data/companyData';
import { ArrowRight, CheckCircle2, ChevronRight, FileText, Check } from 'lucide-react';

export default function SectionWorkflow() {
  const [activeStep, setActiveStep] = useState(2); // default step 03: Detailing

  return (
    <section className="relative w-full py-24 sm:py-32 bg-prime-bg border-b border-prime-border overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-prime-border gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono text-prime-accent tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-prime-accent" />
              SECTION 06 / EXECUTION ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-prime-navy tracking-tight leading-tight">
              OUR WORKFLOW.
            </h2>
          </div>
          <p className="text-prime-slate text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Seven standardized gates from architectural ingestion to build-ready site delivery. No steps skipped; zero unvetted drawings.
          </p>
        </div>

        {/* FLOWING TIMELINE STEPPER (HORIZONTAL SCROLL ON MOBILE, CLEAN FLOW ON DESKTOP) */}
        <div className="relative mb-12">
          {/* Flowing Connected Line */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-0.5 bg-prime-borderLight z-0">
            <div
              className="h-full bg-prime-accent transition-all duration-500 ease-out"
              style={{ width: `${(activeStep / (WORKFLOW_STAGES.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 relative z-10">
            {WORKFLOW_STAGES.map((st, idx) => {
              const isSelected = activeStep === idx;
              const isPassed = idx <= activeStep;
              return (
                <button
                  key={st.stage}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-4 rounded-xl border transition-all duration-300 relative ${
                    isSelected
                      ? 'bg-prime-navy text-white border-prime-navy shadow-premium'
                      : 'bg-white hover:bg-prime-subtle text-prime-navy border-prime-border'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-prime-accent' : isPassed ? 'text-prime-navy' : 'text-prime-slate'}`}>
                      {st.stage}
                    </span>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                      isSelected
                        ? 'bg-prime-accent text-white font-bold'
                        : isPassed
                        ? 'bg-prime-subtle text-prime-accent border border-prime-accent'
                        : 'bg-prime-concrete text-prime-slate'
                    }`}>
                      {isPassed ? <Check className="w-3 h-3 stroke-[2.5]" /> : idx + 1}
                    </div>
                  </div>

                  <h3 className={`text-xs sm:text-sm font-display font-bold truncate ${isSelected ? 'text-white' : 'text-prime-navy'}`}>
                    {st.title}
                  </h3>

                  <div className={`text-[10px] font-mono mt-1 ${isSelected ? 'text-white/70' : 'text-prime-slate'}`}>
                    {st.duration}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* DETAILED ACTIVE WORKFLOW STAGE CARD */}
        {WORKFLOW_STAGES[activeStep] && (
          <div className="bg-white rounded-2xl border border-prime-border p-8 sm:p-12 shadow-technical grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-prime-subtle border border-prime-borderLight rounded text-xs font-mono text-prime-accent font-semibold">
                GATE {WORKFLOW_STAGES[activeStep].stage} / {WORKFLOW_STAGES[activeStep].title}
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-prime-navy">
                {WORKFLOW_STAGES[activeStep].sub}
              </h3>

              <p className="text-prime-slate text-base sm:text-lg leading-relaxed">
                {WORKFLOW_STAGES[activeStep].desc}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-prime-slate">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-prime-accent" />
                  Dual-Pass Peer Audited
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-prime-accent" />
                  Audit Trail Documented
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-prime-subtle rounded-xl p-6 border border-prime-border space-y-4 text-center lg:text-left">
              <div className="text-xs font-mono text-prime-slate uppercase">Estimated Gate Cycle</div>
              <div className="text-2xl font-mono font-bold text-prime-navy">
                {WORKFLOW_STAGES[activeStep].duration}
              </div>
              <p className="text-xs text-prime-slate leading-relaxed">
                Standard turnaround on 500-ton residential or commercial framing batches.
              </p>
              <button
                onClick={() => setActiveStep((prev) => (prev + 1) % WORKFLOW_STAGES.length)}
                className="w-full py-2.5 bg-prime-navy hover:bg-prime-navyLight text-white rounded-lg text-xs font-mono font-medium transition-smooth flex items-center justify-center gap-1.5"
              >
                <span>NEXT STAGE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

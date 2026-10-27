import React, { useState } from 'react';
import { COMPANY_INFO, CAPABILITIES } from '../data/companyData';
import { X, CheckCircle2, Send, FileUp, Sparkles, Building2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Commercial High-Rise',
    service: 'Rebar Detailing & BBS',
    area: '',
    expectedDelivery: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Fire celebratory architectural confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0B1528', '#C5A059', '#ECEAE1', '#505E70']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-prime-navy/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl border border-prime-border shadow-elevated p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-prime-slate hover:text-prime-navy hover:bg-prime-subtle transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-prime-subtle border border-prime-border flex items-center justify-center mx-auto text-prime-accent">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-display font-bold text-prime-navy">
              Project Brief Received
            </h3>
            <p className="text-sm text-prime-slate max-w-md mx-auto leading-relaxed">
              Our Senior Structural Detailing Lead will review your project drawings and send a preliminary scope & turnaround estimate to <span className="font-semibold text-prime-navy">{formData.email || 'your email'}</span> within 6 hours.
            </p>
            <div className="p-4 bg-prime-subtle rounded-xl border border-prime-border max-w-sm mx-auto text-xs font-mono text-prime-navy space-y-1">
              <div>DIRECT DESK: {COMPANY_INFO.phone}</div>
              <div>LOCATION: {COMPANY_INFO.location}</div>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-prime-navy text-white rounded-lg text-xs font-mono font-medium"
            >
              DONE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* MODAL HEADER */}
            <div className="space-y-1 border-b border-prime-borderLight pb-4">
              <div className="text-[10px] font-mono text-prime-accent font-bold uppercase tracking-widest">
                RAPID ESTIMATION DESK
              </div>
              <h3 className="text-2xl font-display font-bold text-prime-navy">
                Request a Project Review & Quote
              </h3>
              <p className="text-xs text-prime-slate">
                Share your structural scope, framing plans, or estimated tonnage for a fast-track feasibility analysis.
              </p>
            </div>

            {/* FORM FIELDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-prime-navy uppercase font-semibold">Your Name *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-prime-border bg-prime-subtle/50 focus:bg-white focus:outline-none focus:border-prime-accent transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-prime-navy uppercase font-semibold">Company / Firm *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Apex Structural Consultants"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-prime-border bg-prime-subtle/50 focus:bg-white focus:outline-none focus:border-prime-accent transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-prime-navy uppercase font-semibold">Email Address *</label>
                <input
                  required
                  type="email"
                  placeholder="name@firm.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-prime-border bg-prime-subtle/50 focus:bg-white focus:outline-none focus:border-prime-accent transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-prime-navy uppercase font-semibold">Phone / WhatsApp *</label>
                <input
                  required
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-prime-border bg-prime-subtle/50 focus:bg-white focus:outline-none focus:border-prime-accent transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-prime-navy uppercase font-semibold">Project Type</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-prime-border bg-white focus:outline-none focus:border-prime-accent"
                >
                  <option>Commercial High-Rise</option>
                  <option>Residential Tower / Podium</option>
                  <option>Industrial Warehouse / Mill</option>
                  <option>Infrastructure Viaduct / Bridge</option>
                  <option>Institutional Hospital / School</option>
                  <option>Water Tank / Retaining Wall</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-prime-navy uppercase font-semibold">Primary Service Required</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-prime-border bg-white focus:outline-none focus:border-prime-accent"
                >
                  <option>Rebar Detailing & Placement Plans</option>
                  <option>Bar Bending Schedule (BBS)</option>
                  <option>Rebar Quantity Takeoff / Estimation</option>
                  <option>3D LOD 400 BIM Rebar Modeling</option>
                  <option>Shop Drawings for Automated Benders</option>
                  <option>Full End-to-End Package</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-prime-navy uppercase font-semibold">Approx. Area / Steel Tonnage</label>
                <input
                  type="text"
                  placeholder="e.g. 250,000 sq.ft or 1,200 MT"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-prime-border bg-prime-subtle/50 focus:bg-white focus:outline-none focus:border-prime-accent transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-prime-navy uppercase font-semibold">Target Delivery Date</label>
                <input
                  type="date"
                  value={formData.expectedDelivery}
                  onChange={(e) => setFormData({ ...formData, expectedDelivery: e.target.value })}
                  className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-prime-border bg-white focus:outline-none focus:border-prime-accent"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-prime-navy uppercase font-semibold">Project Notes / Drawing Link</label>
              <textarea
                rows={3}
                placeholder="Include cloud link (Dropbox, Google Drive, OneDrive) or note any special structural codes (ACI, BS 8666, IS 2502)..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-prime-border bg-prime-subtle/50 focus:bg-white focus:outline-none focus:border-prime-accent transition-colors"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-[10px] font-mono text-prime-slate">
                CONFIDENTIALITY GUARANTEED (NDA STANDARD)
              </span>
              <button
                type="submit"
                className="px-6 py-3 bg-prime-navy hover:bg-prime-navyLight text-white rounded-lg text-xs font-mono font-semibold tracking-wide shadow-premium transition-smooth flex items-center gap-2 group"
              >
                <span>TRANSMIT PROJECT BRIEF</span>
                <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}

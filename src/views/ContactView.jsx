import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Mail, MapPin, Send, FileUp, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactView() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Commercial High-Rise',
    requiredService: 'Rebar Detailing & BBS Package',
    projectArea: '',
    expectedDelivery: '',
    message: '',
    attachmentNote: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#0B1528', '#C5A059', '#ECEAE1', '#505E70']
    });
  };

  return (
    <div className="w-full pt-28 pb-24 bg-prime-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SPLIT-SCREEN COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: EDITORIAL COPY & VERIFIED CONTACT DETAILS */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-prime-border rounded-md text-xs font-mono text-prime-accent font-semibold">
                COMMUNICATIONS & INGESTION DESK
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-prime-navy tracking-tight leading-tight">
                LET'S TALK ABOUT YOUR NEXT STRUCTURE.
              </h1>

              <p className="text-base sm:text-lg text-prime-slate leading-relaxed">
                Whether you need a full rebar shop drawing package, a rapid bar bending schedule audit, or a comprehensive mill-order takeoff, our senior engineering desk is ready to review your structural drawings.
              </p>
            </div>

            {/* DIRECT CONTACT CARDS */}
            <div className="space-y-4 pt-2">
              <div className="p-6 bg-white rounded-2xl border border-prime-border shadow-subtle space-y-4">
                <div className="text-xs font-mono font-bold text-prime-navy uppercase tracking-wider">
                  DIRECT CONTACT CHANNELS
                </div>

                <div className="space-y-3 text-xs font-mono">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center gap-3 text-prime-navy hover:text-prime-accent transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-prime-subtle flex items-center justify-center text-prime-accent">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-prime-slate block">PHONE DESK</span>
                      <span className="font-semibold">{COMPANY_INFO.phone}</span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-center gap-3 text-prime-navy hover:text-prime-accent transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-prime-subtle flex items-center justify-center text-prime-accent">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-prime-slate block">PROJECT INGESTION EMAIL</span>
                      <span className="font-semibold">{COMPANY_INFO.email}</span>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 text-prime-navy">
                    <div className="w-8 h-8 rounded-lg bg-prime-subtle flex items-center justify-center text-prime-accent">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-prime-slate block">WHATSAPP INSTANT DESK</span>
                      <span className="font-semibold">{COMPANY_INFO.whatsapp}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-prime-navy">
                    <div className="w-8 h-8 rounded-lg bg-prime-subtle flex items-center justify-center text-prime-accent">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-prime-slate block">OFFICE LOCATION</span>
                      <span className="font-semibold">{COMPANY_INFO.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SLA BADGE */}
              <div className="p-4 bg-prime-subtle rounded-xl border border-prime-borderLight flex items-center gap-3 text-xs font-mono text-prime-navy">
                <Clock className="w-5 h-5 text-prime-accent shrink-0" />
                <span>Standard Review Turnaround: Initial feedback in &lt; 6 Hours</span>
              </div>
            </div>
          </div>

          {/* RIGHT: PROJECT INQUIRY FORM */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-prime-border p-8 sm:p-12 shadow-technical">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-prime-subtle border border-prime-border flex items-center justify-center mx-auto text-prime-accent">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-display font-bold text-prime-navy">
                  Inquiry Successfully Transmitted
                </h3>
                <p className="text-sm text-prime-slate max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-prime-navy">{formData.name}</span>. Our senior structural coordinator will contact you at <span className="font-semibold text-prime-navy">{formData.email}</span> with a custom detailing proposal and turnaround schedule.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-prime-navy text-white rounded-lg text-xs font-mono font-medium"
                >
                  SEND ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-prime-borderLight pb-4 space-y-1">
                  <span className="text-[11px] font-mono text-prime-accent font-bold uppercase">
                    PROJECT INQUIRY FORM
                  </span>
                  <h3 className="text-2xl font-display font-bold text-prime-navy">
                    Provide Project Specifications
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-prime-navy uppercase font-semibold">Your Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs font-mono rounded-lg border border-prime-border bg-prime-subtle/50 focus:bg-white focus:outline-none focus:border-prime-accent transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-prime-navy uppercase font-semibold">Company / Structural Firm *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Structural Partners LLC"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs font-mono rounded-lg border border-prime-border bg-prime-subtle/50 focus:bg-white focus:outline-none focus:border-prime-accent transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-prime-navy uppercase font-semibold">Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="john@firm.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs font-mono rounded-lg border border-prime-border bg-prime-subtle/50 focus:bg-white focus:outline-none focus:border-prime-accent transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-prime-navy uppercase font-semibold">Phone / WhatsApp *</label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 93637 34963"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs font-mono rounded-lg border border-prime-border bg-prime-subtle/50 focus:bg-white focus:outline-none focus:border-prime-accent transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-prime-navy uppercase font-semibold">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs font-mono rounded-lg border border-prime-border bg-white focus:outline-none focus:border-prime-accent"
                    >
                      <option>Commercial High-Rise / Podium</option>
                      <option>Residential Tower / Villa Complex</option>
                      <option>Industrial Warehouse / Factory Slab</option>
                      <option>Bridge / Viaduct / Highway Structure</option>
                      <option>Institutional Hospital / Educational</option>
                      <option>Water Reservoir / Specialized Tank</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-prime-navy uppercase font-semibold">Required Service</label>
                    <select
                      value={formData.requiredService}
                      onChange={(e) => setFormData({ ...formData, requiredService: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs font-mono rounded-lg border border-prime-border bg-white focus:outline-none focus:border-prime-accent"
                    >
                      <option>Rebar Detailing & Placement Drawings</option>
                      <option>Bar Bending Schedule (BBS)</option>
                      <option>Rebar Quantity Estimation & Takeoff</option>
                      <option>3D BIM LOD 400 Modeling</option>
                      <option>Shop Drawings for Automated Benders</option>
                      <option>Complete Turnkey Detailing Package</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-prime-navy uppercase font-semibold">Project Area / Estimated Tonnage</label>
                    <input
                      type="text"
                      placeholder="e.g. 500,000 sq.ft or 2,500 MT"
                      value={formData.projectArea}
                      onChange={(e) => setFormData({ ...formData, projectArea: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs font-mono rounded-lg border border-prime-border bg-prime-subtle/50 focus:bg-white focus:outline-none focus:border-prime-accent transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-prime-navy uppercase font-semibold">Expected Delivery Date</label>
                    <input
                      type="date"
                      value={formData.expectedDelivery}
                      onChange={(e) => setFormData({ ...formData, expectedDelivery: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs font-mono rounded-lg border border-prime-border bg-white focus:outline-none focus:border-prime-accent"
                    />
                  </div>
                </div>

                {/* ATTACHMENT / CLOUD LINK NOTE */}
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-prime-navy uppercase font-semibold">
                    Attachment / Cloud Drawing Link (Dropbox / Google Drive / OneDrive)
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      placeholder="https://drive.google.com/... or https://dropbox.com/..."
                      value={formData.attachmentNote}
                      onChange={(e) => setFormData({ ...formData, attachmentNote: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 text-xs font-mono rounded-lg border border-prime-border bg-prime-subtle/50 focus:bg-white focus:outline-none focus:border-prime-accent transition-colors"
                    />
                    <FileUp className="w-4 h-4 text-prime-slate absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-prime-navy uppercase font-semibold">Message & Scope Details</label>
                  <textarea
                    rows={4}
                    placeholder="Provide details on project structural code requirements (ACI 318, BS 8666, IS 2502, Eurocode 2), concrete cover specs, or delivery phase milestones..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs font-mono rounded-lg border border-prime-border bg-prime-subtle/50 focus:bg-white focus:outline-none focus:border-prime-accent transition-colors"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-prime-navy hover:bg-prime-navyLight text-white rounded-xl text-xs font-mono font-bold tracking-widest uppercase shadow-premium hover:shadow-elevated transition-smooth flex items-center justify-center gap-2 group"
                  >
                    <span>REQUEST A PROJECT REVIEW</span>
                    <Send className="w-4 h-4 text-prime-accent group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

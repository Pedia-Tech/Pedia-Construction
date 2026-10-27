import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, Compass } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[#F3F1E8] border-t border-prime-border text-prime-navy pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP ROW: BRANDING & CONTACT HIGHLIGHTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-prime-border">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-prime-navy flex items-center justify-center text-prime-accent shadow-sm">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="#C5A059" strokeWidth="1.5" />
                  <path d="M7 8h10" stroke="#FAF9F5" />
                  <path d="M7 12h10" stroke="#FAF9F5" />
                  <path d="M7 16h6" stroke="#C5A059" />
                  <circle cx="16" cy="16" r="1.5" fill="#C5A059" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg tracking-tight text-prime-navy">
                  PRIME CORE REBAR
                </h3>
                <span className="text-[10px] font-mono tracking-widest text-prime-slate uppercase block">
                  PRECISION STRUCTURAL REINFORCEMENT
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-prime-slate leading-relaxed font-normal">
              {COMPANY_INFO.description}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-prime-border flex items-center justify-center text-prime-navy hover:text-prime-accent hover:border-prime-accent transition-colors"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32Z"/>
                </svg>
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-prime-border flex items-center justify-center text-prime-navy hover:text-prime-accent hover:border-prime-accent transition-colors"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-prime-border flex items-center justify-center text-prime-navy hover:text-prime-accent hover:border-prime-accent transition-colors"
                title="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-prime-border flex items-center justify-center text-prime-navy hover:text-prime-accent hover:border-prime-accent transition-colors"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.704 0-1.446.216-1.782.597-.334.379-.387.97-.387 1.815v1.572h4.862l-.658 3.667h-4.204v7.98h-4.606z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold text-prime-navy uppercase tracking-wider">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs font-mono text-prime-slate">
              {['home', 'services', 'capabilities', 'lab', 'projects', 'gallery', 'about', 'contact'].map((view) => (
                <li key={view}>
                  <button
                    onClick={() => {
                      onNavigate(view);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-prime-accent transition-colors capitalize"
                  >
                    {view === 'lab' ? 'Detailing Lab' : view}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CAPABILITIES */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold text-prime-navy uppercase tracking-wider">
              SERVICES
            </div>
            <ul className="space-y-2 text-xs font-mono text-prime-slate">
              <li>Rebar Detailing (2D/3D)</li>
              <li>Bar Bending Schedule (BBS)</li>
              <li>Quantity Estimation & Takeoff</li>
              <li>Tekla LOD 400 BIM Modeling</li>
              <li>Fabrication Shop Drawings</li>
              <li>BVBS Automated Bender Exports</li>
            </ul>
          </div>

          {/* VERIFIED CONTACT DATA */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold text-prime-navy uppercase tracking-wider">
              DIRECT DESK
            </div>
            <div className="space-y-2.5 text-xs font-mono">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 text-prime-slate hover:text-prime-navy transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-prime-accent" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 text-prime-slate hover:text-prime-navy transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-prime-accent" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <div className="flex items-center gap-2 text-prime-slate">
                <MapPin className="w-3.5 h-3.5 text-prime-accent" />
                <span>{COMPANY_INFO.location}</span>
              </div>
              <div className="pt-2">
                <span className="inline-block px-2.5 py-1 bg-white border border-prime-border rounded text-[11px] font-mono text-prime-navy">
                  WhatsApp: {COMPANY_INFO.whatsapp}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: CODE ACCREDITATIONS & LEGAL */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-prime-slate gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span>CODES: ACI 318</span>
            <span>•</span>
            <span>BS 8666</span>
            <span>•</span>
            <span>EUROCODE 2</span>
            <span>•</span>
            <span>IS 2502</span>
            <span>•</span>
            <span>AS/NZS 4671</span>
          </div>

          <div>
            © {currentYear} Prime Core Rebar. All engineering specifications editable.
          </div>
        </div>

      </div>
    </footer>
  );
}

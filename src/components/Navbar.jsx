import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Menu, X, ArrowUpRight, Phone, Mail, Compass, Layers } from 'lucide-react';

export default function Navbar({ activeView, setActiveView, onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Overview' },
    { id: 'services', label: 'Services' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'lab', label: 'Detailing Lab' },
    { id: 'projects', label: 'Work' },
    { id: 'gallery', label: 'Archive' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setActiveView(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 py-3 sm:py-4 pointer-events-none">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between rounded-2xl transition-all duration-300 pointer-events-auto border ${
          scrolled
            ? 'bg-white/92 backdrop-blur-md shadow-premium py-2.5 px-5 border-prime-border'
            : 'bg-white/80 backdrop-blur-sm shadow-subtle py-3.5 px-6 border-prime-border/80'
        }`}
      >
        {/* LOGO */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          {/* Architectural Emblem Icon */}
          <div className="w-10 h-10 rounded-xl bg-prime-navy flex items-center justify-center text-prime-accent shadow-sm group-hover:scale-105 transition-transform">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="#C5A059" strokeWidth="1.5" />
              <path d="M7 8h10" stroke="#FAF9F5" />
              <path d="M7 12h10" stroke="#FAF9F5" />
              <path d="M7 16h6" stroke="#C5A059" />
              <circle cx="16" cy="16" r="1.5" fill="#C5A059" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base tracking-tight text-prime-navy group-hover:text-prime-accent transition-colors">
              PRIME CORE REBAR
            </span>
            <span className="text-[10px] font-mono tracking-widest text-prime-slate uppercase">
              REBAR DETAILING & BBS
            </span>
          </div>
        </button>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-smooth relative ${
                  isActive
                    ? 'text-prime-navy font-semibold bg-prime-subtle'
                    : 'text-prime-slate hover:text-prime-navy hover:bg-prime-concrete/60'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-prime-accent rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* RIGHT CTA & CONTACT MINI-BADGE */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="hidden xl:flex items-center gap-1.5 text-xs font-mono text-prime-slate hover:text-prime-navy px-2.5 py-1.5 rounded-lg hover:bg-prime-subtle transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-prime-accent" />
            <span>{COMPANY_INFO.phone}</span>
          </a>

          <button
            onClick={onOpenQuote}
            className="px-4 py-2 bg-prime-navy hover:bg-prime-navyLight text-white rounded-lg text-xs font-medium tracking-wide shadow-subtle hover:shadow-premium transition-smooth flex items-center gap-1.5 group"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-prime-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-prime-navy hover:bg-prime-subtle rounded-lg transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-5 bg-white/98 backdrop-blur-xl border border-prime-border rounded-2xl shadow-elevated pointer-events-auto space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`p-3 text-left rounded-xl text-xs font-medium transition-smooth ${
                    isActive
                      ? 'bg-prime-navy text-white font-semibold'
                      : 'bg-prime-subtle/80 text-prime-navy hover:bg-prime-concrete'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-prime-borderLight flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 bg-prime-navy text-white text-center rounded-xl text-xs font-medium tracking-wide shadow-subtle flex items-center justify-center gap-2"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowUpRight className="w-4 h-4 text-prime-accent" />
            </button>

            <div className="flex items-center justify-between text-xs text-prime-slate px-1 font-mono">
              <span>{COMPANY_INFO.email}</span>
              <span>{COMPANY_INFO.location}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

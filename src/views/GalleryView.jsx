import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/companyData';
import { X, Maximize2, Layers, Compass, ZoomIn } from 'lucide-react';

export default function GalleryView() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const categories = [
    'ALL',
    'REBAR',
    'DETAILING',
    'DRAWINGS',
    'BBS',
    '3D MODELS',
    'PROJECTS',
    'SITE',
    'TEAM'
  ];

  const filteredItems = activeCategory === 'ALL'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full pt-28 pb-24 bg-prime-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-prime-border rounded-md text-xs font-mono text-prime-accent font-semibold">
            VISUAL DOSSIER / ARCHITECTURAL ASSETS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-prime-navy tracking-tight leading-tight">
            EDITORIAL VISUAL GALLERY.
          </h1>
          <p className="text-prime-slate text-base sm:text-lg leading-relaxed">
            High-resolution visual archives of reinforcement mat installations, LOD 400 BIM rebar geometry, algorithmic bar schedules, and executed structural sites.
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap items-center gap-2 pb-8 mb-10 border-b border-prime-border">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-smooth border ${
                activeCategory === cat
                  ? 'bg-prime-navy text-white border-prime-navy font-semibold shadow-subtle'
                  : 'bg-white hover:bg-prime-subtle text-prime-navy border-prime-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* DYNAMIC EDITORIAL GALLERY WITH VARIED SIZES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const isWide = idx % 4 === 0;
            return (
              <div
                key={item.id}
                onClick={() => setFullscreenImage(item)}
                className={`relative rounded-2xl overflow-hidden border border-prime-border bg-prime-concrete shadow-subtle hover:shadow-premium transition-all duration-300 cursor-pointer group ${
                  isWide ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-square'
                }`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-prime-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/90 text-prime-navy font-semibold">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-prime-accent uppercase tracking-wider block">
                      {item.tag}
                    </span>
                    <h3 className="text-white font-display font-semibold text-lg line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX VIEWER */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-prime-navy/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setFullscreenImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden border border-prime-border shadow-elevated"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-prime-navy shadow-subtle transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="aspect-[16/10] bg-black">
              <img
                src={fullscreenImage.img}
                alt={fullscreenImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-white flex items-center justify-between border-t border-prime-border">
              <div>
                <span className="text-xs font-mono text-prime-accent uppercase tracking-wider font-semibold">
                  {fullscreenImage.category} • {fullscreenImage.tag}
                </span>
                <h3 className="text-xl font-display font-bold text-prime-navy mt-1">
                  {fullscreenImage.title}
                </h3>
              </div>
              <span className="text-xs font-mono text-prime-slate">
                Prime Core Archive Asset #{fullscreenImage.id}
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

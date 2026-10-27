import React, { useState } from 'react';
import { DETAILING_LAB_SAMPLES } from '../data/companyData';
import { Crosshair, Calculator, Layers, FileSpreadsheet, Info, Download, Sparkles } from 'lucide-react';

export default function SectionDetailingLab() {
  const [selectedMemberIdx, setSelectedMemberIdx] = useState(0);
  const activeMember = DETAILING_LAB_SAMPLES[selectedMemberIdx];
  const [activeHotspot, setActiveHotspot] = useState(0); // 0, 1, 2 for the bars

  // Interactive Live Calculation State
  const [customDia, setCustomDia] = useState(25);
  const [customLength, setCustomLength] = useState(4.85);
  const [customQty, setCustomQty] = useState(12);

  // Live Unit Weight (kg/m) = D^2 / 162
  const unitWeight = (customDia * customDia) / 162;
  const liveTotalWeight = unitWeight * customLength * customQty;

  const currentBar = activeMember.bars[activeHotspot] || activeMember.bars[0];

  return (
    <section className="relative w-full py-24 sm:py-32 bg-prime-bg border-b border-prime-border overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-prime-border gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono text-prime-accent tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-prime-accent" />
              SECTION 04 / INTERACTIVE ENGINEERING DRAWING
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-prime-navy tracking-tight leading-tight">
              THE DETAILING LAB.
            </h2>
          </div>
          <p className="text-prime-slate text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Click structural hotspots to inspect bar bending geometry, diameter tolerances, hook extensions, and live steel weight formulas.
          </p>
        </div>

        {/* MEMBER SELECTOR TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
          {DETAILING_LAB_SAMPLES.map((sample, idx) => (
            <button
              key={sample.id}
              onClick={() => {
                setSelectedMemberIdx(idx);
                setActiveHotspot(0);
                setCustomDia(sample.bars[0].dia);
                setCustomLength(sample.bars[0].length);
                setCustomQty(sample.bars[0].count);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-smooth shrink-0 border ${
                selectedMemberIdx === idx
                  ? 'bg-prime-navy text-white border-prime-navy font-semibold shadow-subtle'
                  : 'bg-white hover:bg-prime-subtle text-prime-navy border-prime-border'
              }`}
            >
              {sample.name} ({sample.code})
            </button>
          ))}
        </div>

        {/* MAIN INTERACTIVE DRAFTING BOARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: 2D/3D TECHNICAL DRAWING CANVAS WITH INTERACTIVE HOTSPOTS */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-prime-border p-6 sm:p-8 shadow-technical relative overflow-hidden">
            
            {/* Architectural Drawing Border and Metadata */}
            <div className="flex items-center justify-between border-b border-prime-borderLight pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Crosshair className="w-4 h-4 text-prime-accent" />
                <span className="text-xs font-mono font-semibold text-prime-navy">
                  CAD ELEVATION VIEW: {activeMember.member}
                </span>
              </div>
              <span className="text-[11px] font-mono text-prime-slate">
                CLEAR COVER: {activeMember.cover}
              </span>
            </div>

            {/* SVG TECHNICAL DRAWING OF REBAR JUNCTION */}
            <div className="relative w-full h-[360px] sm:h-[420px] bg-[#FAF9F6] border border-prime-borderLight rounded-xl flex items-center justify-center p-4">
              
              {/* Technical Grid background */}
              <div className="absolute inset-0 bg-tech-grid-dense opacity-50 pointer-events-none" />

              {/* Render dynamic structural SVG schematic */}
              <svg viewBox="0 0 600 400" className="w-full h-full max-h-[380px] drop-shadow-sm">
                {/* Concrete Boundary (Ghosted) */}
                <rect x="180" y="40" width="240" height="320" fill="#ECEAE1" fillOpacity="0.4" stroke="#505E70" strokeWidth="1.5" strokeDasharray="4 4" />
                
                {/* Longitudinal Bars (Vertical) */}
                <line x1="210" y1="40" x2="210" y2="360" stroke="#0B1528" strokeWidth={customDia > 20 ? "7" : "5"} strokeLinecap="round" />
                <line x1="260" y1="40" x2="260" y2="360" stroke="#0B1528" strokeWidth={customDia > 20 ? "7" : "5"} strokeLinecap="round" />
                <line x1="340" y1="40" x2="340" y2="360" stroke="#0B1528" strokeWidth={customDia > 20 ? "7" : "5"} strokeLinecap="round" />
                <line x1="390" y1="40" x2="390" y2="360" stroke="#0B1528" strokeWidth={customDia > 20 ? "7" : "5"} strokeLinecap="round" />

                {/* Closed Lateral Ties / Stirrups */}
                {[90, 150, 210, 270, 330].map((y, tIdx) => (
                  <g key={tIdx}>
                    <rect x="200" y={y} width="200" height="25" rx="6" fill="none" stroke="#B8934A" strokeWidth="3" />
                    {/* 135 deg hook corner */}
                    <line x1="200" y1={y + 6} x2="190" y2={y + 16} stroke="#B8934A" strokeWidth="2.5" />
                  </g>
                ))}

                {/* Dimension Arrows */}
                <line x1="160" y1="40" x2="160" y2="360" stroke="#505E70" strokeWidth="1" markerEnd="url(#arrow)" />
                <text x="140" y="200" fill="#505E70" fontSize="11" fontFamily="JetBrains Mono" transform="rotate(-90 140 200)">
                  L = {customLength} M
                </text>

                <line x1="180" y1="380" x2="420" y2="380" stroke="#505E70" strokeWidth="1" />
                <text x="300" y="394" fill="#505E70" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle">
                  B = 600 MM
                </text>
              </svg>

              {/* INTERACTIVE HOTSPOTS ON TOP OF DRAWING */}
              {/* Hotspot 1: Main Longitudinal Bar */}
              <button
                onClick={() => {
                  setActiveHotspot(0);
                  setCustomDia(activeMember.bars[0].dia);
                  setCustomLength(activeMember.bars[0].length);
                  setCustomQty(activeMember.bars[0].count);
                }}
                className={`absolute top-[40%] left-[34%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer`}
              >
                <div className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 transition-transform ${
                  activeHotspot === 0 ? 'bg-prime-accent text-white border-white scale-110 shadow-lg' : 'bg-white text-prime-navy border-prime-accent hover:scale-105'
                }`}>
                  <span className="text-[10px] font-mono font-bold">01</span>
                  {activeHotspot === 0 && <span className="absolute -inset-1 rounded-full border border-prime-accent animate-ping" />}
                </div>
              </button>

              {/* Hotspot 2: Lateral Tie Stirrup */}
              <button
                onClick={() => {
                  setActiveHotspot(1);
                  if (activeMember.bars[1]) {
                    setCustomDia(activeMember.bars[1].dia);
                    setCustomLength(activeMember.bars[1].length);
                    setCustomQty(activeMember.bars[1].count);
                  }
                }}
                className={`absolute top-[38%] left-[62%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer`}
              >
                <div className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 transition-transform ${
                  activeHotspot === 1 ? 'bg-prime-accent text-white border-white scale-110 shadow-lg' : 'bg-white text-prime-navy border-prime-accent hover:scale-105'
                }`}>
                  <span className="text-[10px] font-mono font-bold">02</span>
                  {activeHotspot === 1 && <span className="absolute -inset-1 rounded-full border border-prime-accent animate-ping" />}
                </div>
              </button>

              {/* Hotspot 3: Concrete Cover Dimension */}
              <button
                onClick={() => {
                  setActiveHotspot(2);
                  if (activeMember.bars[2]) {
                    setCustomDia(activeMember.bars[2].dia);
                    setCustomLength(activeMember.bars[2].length);
                    setCustomQty(activeMember.bars[2].count);
                  }
                }}
                className={`absolute top-[68%] left-[48%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer`}
              >
                <div className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 transition-transform ${
                  activeHotspot === 2 ? 'bg-prime-accent text-white border-white scale-110 shadow-lg' : 'bg-white text-prime-navy border-prime-accent hover:scale-105'
                }`}>
                  <span className="text-[10px] font-mono font-bold">03</span>
                  {activeHotspot === 2 && <span className="absolute -inset-1 rounded-full border border-prime-accent animate-ping" />}
                </div>
              </button>

              {/* Floating Blueprint Stamp */}
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded border border-prime-border text-[10px] font-mono text-prime-navy">
                DRAWING ID: PCR-CAD-{activeMember.id.toUpperCase()}
              </div>
            </div>

            {/* LIVE BBS ROW SUMMARY TABLE */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs font-mono">
                <thead>
                  <tr className="border-b border-prime-border bg-prime-subtle text-prime-slate">
                    <th className="py-2 px-3">BAR MARK</th>
                    <th className="py-2 px-3">TYPE</th>
                    <th className="py-2 px-3">DIA (MM)</th>
                    <th className="py-2 px-3">QTY</th>
                    <th className="py-2 px-3">SHAPE CODE</th>
                    <th className="py-2 px-3 text-right">WEIGHT (KG)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-prime-borderLight">
                  {activeMember.bars.map((b, idx) => (
                    <tr
                      key={idx}
                      onClick={() => {
                        setActiveHotspot(idx);
                        setCustomDia(b.dia);
                        setCustomLength(b.length);
                        setCustomQty(b.count);
                      }}
                      className={`cursor-pointer transition-colors ${
                        activeHotspot === idx ? 'bg-prime-accentLight/60 font-semibold text-prime-navy' : 'hover:bg-prime-subtle/50 text-prime-navy'
                      }`}
                    >
                      <td className="py-2 px-3 font-bold text-prime-accent">{b.mark}</td>
                      <td className="py-2 px-3">{b.type}</td>
                      <td className="py-2 px-3">{b.dia} mm</td>
                      <td className="py-2 px-3">{b.count}</td>
                      <td className="py-2 px-3 text-prime-slate">{b.shapeCode}</td>
                      <td className="py-2 px-3 text-right font-bold">{b.totalWeight.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

          {/* RIGHT: REAL-TIME QUANTITY CALCULATOR & BAR PARAMETER INSPECTOR */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-prime-border p-6 sm:p-8 shadow-technical space-y-6">
            
            <div className="flex items-center justify-between border-b border-prime-borderLight pb-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-prime-accent" />
                <span className="text-xs font-mono font-bold text-prime-navy uppercase">
                  LIVE QUANTITY ENGINE
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-prime-subtle rounded text-prime-slate">
                HOTSPOT 0{activeHotspot + 1}
              </span>
            </div>

            {/* ACTIVE HOTSPOT CALLOUT CARD */}
            <div className="bg-prime-subtle/70 rounded-xl p-4 border border-prime-border space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-prime-navy">
                  MARK: {currentBar.mark}
                </span>
                <span className="text-[11px] font-mono text-prime-accent font-semibold">
                  {currentBar.shapeCode}
                </span>
              </div>
              <div className="text-xs text-prime-slate">
                {currentBar.type} — High Yield Deformed Bars conforming to ASTM A615 / IS 1786.
              </div>
            </div>

            {/* INTERACTIVE CONTROLS */}
            <div className="space-y-4">
              
              {/* Diameter Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-prime-slate">BAR DIAMETER (D):</span>
                  <span className="font-bold text-prime-navy">{customDia} mm</span>
                </div>
                <div className="grid grid-cols-6 gap-1.5 pt-1">
                  {[10, 12, 16, 20, 25, 32].map((dia) => (
                    <button
                      key={dia}
                      onClick={() => setCustomDia(dia)}
                      className={`py-1.5 rounded text-xs font-mono font-semibold border transition-all ${
                        customDia === dia
                          ? 'bg-prime-navy text-white border-prime-navy shadow-sm'
                          : 'bg-white text-prime-navy border-prime-border hover:bg-prime-subtle'
                      }`}
                    >
                      {dia}
                    </button>
                  ))}
                </div>
              </div>

              {/* Length Input */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-prime-slate">CUTTING LENGTH (L):</span>
                  <span className="font-bold text-prime-navy">{customLength.toFixed(2)} M</span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="12.0"
                  step="0.05"
                  value={customLength}
                  onChange={(e) => setCustomLength(parseFloat(e.target.value))}
                  className="w-full accent-prime-accent cursor-pointer"
                />
              </div>

              {/* Quantity Input */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-prime-slate">TOTAL QUANTITY (Q):</span>
                  <span className="font-bold text-prime-navy">{customQty} BARS</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={customQty}
                  onChange={(e) => setCustomQty(parseInt(e.target.value))}
                  className="w-full accent-prime-accent cursor-pointer"
                />
              </div>

            </div>

            {/* WEIGHT FORMULA OUTPUT BOX */}
            <div className="p-5 bg-prime-navy text-white rounded-xl shadow-premium space-y-4">
              <div className="flex items-center justify-between text-[11px] font-mono text-prime-accent">
                <span>FORMULA: W = (D² / 162) × L × Q</span>
                <span>METRIC TON / KG</span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/10">
                <div>
                  <span className="text-[10px] font-mono text-white/60 block">UNIT WEIGHT</span>
                  <span className="text-lg font-mono font-bold text-white">
                    {unitWeight.toFixed(3)} <span className="text-xs font-normal text-white/70">kg/m</span>
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-white/60 block">TOTAL CUT WEIGHT</span>
                  <span className="text-2xl font-mono font-bold text-prime-accent">
                    {liveTotalWeight.toFixed(1)} <span className="text-xs font-normal text-white/70">kg</span>
                  </span>
                </div>
              </div>

              <div className="text-[11px] font-mono text-white/70 pt-1">
                Equivalent to: <span className="text-white font-semibold">{(liveTotalWeight / 1000).toFixed(3)} Metric Tons</span>
              </div>
            </div>

            {/* FOOTER NOTE */}
            <div className="text-[11px] text-prime-slate leading-relaxed border-t border-prime-borderLight pt-4 flex items-start gap-2">
              <Info className="w-4 h-4 text-prime-accent shrink-0 mt-0.5" />
              <span>
                Calculated strictly in accordance with standard density of structural steel (7,850 kg/m³). Bend allowances and hook elongation deducted per BS 8666.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

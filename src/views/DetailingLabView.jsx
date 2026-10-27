import React, { useState } from 'react';
import SectionDetailingLab from '../components/SectionDetailingLab';
import { Calculator, Download, Plus, Trash2, FileSpreadsheet, Sparkles, CheckCircle2 } from 'lucide-react';

export default function DetailingLabView({ onOpenQuote }) {
  // Custom interactive BBS builder table
  const [rows, setRows] = useState([
    { id: 1, mark: 'MK-01', member: 'Col C1 Footing Dowel', dia: 25, shapeCode: 'Shape 21 (L-Bar)', count: 16, length: 2.45 },
    { id: 2, mark: 'MK-02', member: 'Beams Top Negative', dia: 20, shapeCode: 'Shape 00 (Straight)', count: 24, length: 6.80 },
    { id: 3, mark: 'MK-03', member: 'Column Core Stirrup', dia: 10, shapeCode: 'Shape 51 (Tie)', count: 64, length: 1.85 },
    { id: 4, mark: 'MK-04', member: 'Slab Crank Bar', dia: 12, shapeCode: 'Shape 41 (Bent)', count: 32, length: 4.20 }
  ]);

  const addRow = () => {
    const newId = rows.length + 1;
    setRows([
      ...rows,
      { id: newId, mark: `MK-0${newId}`, member: 'Custom Member', dia: 16, shapeCode: 'Shape 00 (Straight)', count: 10, length: 3.5 }
    ]);
  };

  const removeRow = (id) => {
    setRows(rows.filter((r) => r.id !== id));
  };

  // Calculate total tonnage
  const totalBBSWeightKg = rows.reduce((acc, row) => {
    const unitWt = (row.dia * row.dia) / 162;
    return acc + unitWt * row.length * row.count;
  }, 0);

  return (
    <div className="w-full pt-28 pb-24 bg-prime-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* VIEW HEADER */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-prime-border rounded-md text-xs font-mono text-prime-accent font-semibold">
            ENGINEERING WORKBENCH / LIVE CALCULATION ENGINE
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-prime-navy tracking-tight leading-tight">
            THE DETAILING LABORATORY.
          </h1>
          <p className="text-prime-slate text-base sm:text-lg leading-relaxed">
            Test reinforcement geometry, calculate accurate cut weights per meter using standard steel density (7850 kg/m³), and generate production-ready Bar Bending Schedules conforming to BS 8666 and ACI 315.
          </p>
        </div>

        {/* EMBEDDED CAD HOTSPOT INSPECTOR COMPONENT */}
        <SectionDetailingLab />

        {/* INTERACTIVE BBS GENERATOR TABLE */}
        <div className="bg-white rounded-3xl border border-prime-border p-6 sm:p-10 shadow-technical space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-prime-border gap-4">
            <div>
              <div className="text-xs font-mono text-prime-accent font-semibold uppercase">
                ALGORITHMIC SCHEDULING
              </div>
              <h2 className="text-2xl font-display font-bold text-prime-navy">
                Interactive Bar Bending Schedule (BBS) Table
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={addRow}
                className="px-3.5 py-2 bg-prime-subtle hover:bg-prime-concrete text-prime-navy rounded-lg text-xs font-mono font-semibold transition-colors flex items-center gap-1.5 border border-prime-border"
              >
                <Plus className="w-3.5 h-3.5 text-prime-accent" />
                <span>ADD REBAR ITEM</span>
              </button>
            </div>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b border-prime-border bg-prime-subtle text-prime-slate">
                  <th className="py-3 px-3">MARK</th>
                  <th className="py-3 px-3">MEMBER DESCRIPTION</th>
                  <th className="py-3 px-3">DIA (MM)</th>
                  <th className="py-3 px-3">SHAPE CODE</th>
                  <th className="py-3 px-3">LENGTH (M)</th>
                  <th className="py-3 px-3">COUNT</th>
                  <th className="py-3 px-3">UNIT WT (KG/M)</th>
                  <th className="py-3 px-3 text-right">TOTAL WT (KG)</th>
                  <th className="py-3 px-3 text-center">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-prime-borderLight">
                {rows.map((r) => {
                  const unitWt = (r.dia * r.dia) / 162;
                  const itemWeight = unitWt * r.length * r.count;
                  return (
                    <tr key={r.id} className="hover:bg-prime-subtle/50 transition-colors">
                      <td className="py-3 px-3 font-bold text-prime-accent">{r.mark}</td>
                      <td className="py-3 px-3 text-prime-navy font-sans">{r.member}</td>
                      <td className="py-3 px-3 font-semibold">{r.dia} mm</td>
                      <td className="py-3 px-3 text-prime-slate">{r.shapeCode}</td>
                      <td className="py-3 px-3">{r.length.toFixed(2)}</td>
                      <td className="py-3 px-3">{r.count}</td>
                      <td className="py-3 px-3 text-prime-slate">{unitWt.toFixed(3)}</td>
                      <td className="py-3 px-3 text-right font-bold text-prime-navy">
                        {itemWeight.toFixed(2)}
                      </td>
                      <td className="py-3 px-3 text-center">
                        <button
                          onClick={() => removeRow(r.id)}
                          className="p-1 text-prime-slate hover:text-red-500 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* TABLE FOOTER SUMMARY */}
          <div className="p-6 bg-prime-navy text-white rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-prime-accent uppercase tracking-wider block">
                TOTAL COMPUTED WEIGHT SUMMARY
              </span>
              <div className="text-2xl sm:text-3xl font-mono font-bold">
                {totalBBSWeightKg.toFixed(2)} <span className="text-sm font-normal text-white/70">KG</span>
                <span className="text-sm text-prime-accent ml-3">
                  ({(totalBBSWeightKg / 1000).toFixed(3)} Metric Tons)
                </span>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="px-6 py-3 bg-prime-accent hover:bg-prime-accentHover text-prime-navy font-mono font-bold text-xs rounded-xl shadow-subtle transition-smooth"
            >
              ORDER FULL STRUCTURE BBS
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

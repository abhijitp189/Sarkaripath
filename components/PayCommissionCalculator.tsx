'use client';
import { useState } from 'react';

const PAY_LEVELS = [
  { label: 'Level 1 – ₹18,000 (MTS, Peon, Safai Karamchari)', basic: 18000 },
  { label: 'Level 2 – ₹19,900 (MTS Higher Grade, Daftary)', basic: 19900 },
  { label: 'Level 3 – ₹21,700 (LDC, Postal Assistant Jr.)', basic: 21700 },
  { label: 'Level 4 – ₹25,500 (DEO, Typist, Sorting Asst)', basic: 25500 },
  { label: 'Level 5 – ₹29,200 (UDC, Clerk Grade, RA)', basic: 29200 },
  { label: 'Level 6 – ₹35,400 (Inspector CBI/IT/Tax, SSC CGL Gr B)', basic: 35400 },
  { label: 'Level 7 – ₹44,900 (Assistant, Sub-Inspector, CBI SI)', basic: 44900 },
  { label: 'Level 8 – ₹47,600 (ASO, Senior Assistant)', basic: 47600 },
  { label: 'Level 9 – ₹53,100 (Section Officer, SO)', basic: 53100 },
  { label: 'Level 10 – ₹56,100 (Group A Entry, IAS/IPS/IFS Probationer)', basic: 56100 },
  { label: 'Level 11 – ₹67,700 (Senior Grade / Dy. SP)', basic: 67700 },
  { label: 'Level 12 – ₹78,800 (Deputy Director / Under Secretary)', basic: 78800 },
  { label: 'Level 13 – ₹1,23,100 (Director / Senior PPS)', basic: 123100 },
  { label: 'Level 14 – ₹1,44,200 (Joint Secretary / IG Police)', basic: 144200 },
];

const FITMENT_OPTIONS = [
  { value: 1.92, label: '1.92×', sublabel: 'Conservative', bg: 'bg-amber-50 border-amber-200 text-amber-700', active: 'bg-amber-500 border-amber-500 text-white' },
  { value: 2.57, label: '2.57×', sublabel: 'Moderate', bg: 'bg-blue-50 border-blue-200 text-blue-700', active: 'bg-blue-500 border-blue-500 text-white' },
  { value: 2.86, label: '2.86×', sublabel: 'Most Likely', bg: 'bg-primary-50 border-primary-200 text-primary-700', active: 'bg-primary-500 border-primary-500 text-white' },
  { value: 3.83, label: '3.83×', sublabel: 'Union Demand', bg: 'bg-emerald-50 border-emerald-200 text-emerald-700', active: 'bg-emerald-500 border-emerald-500 text-white' },
];

// HRA % of Basic
// 7th CPC current (DA ≥ 50%): X=30%, Y=20%, Z=10%
// 8th CPC Day-1 (DA resets to 0%): X=24%, Y=16%, Z=8%
// (Many analysts project HRA will be revised upward; we show both)
const HRA_CITY = {
  X: { label: 'X Class City (Delhi, Mumbai, Kolkata, Chennai, Bangalore, Hyderabad, Pune, Ahmedabad)', current: 0.30, projected: 0.24 },
  Y: { label: 'Y Class City (Most state capitals & major towns)', current: 0.20, projected: 0.16 },
  Z: { label: 'Z Class City (All other cities & towns)', current: 0.10, projected: 0.08 },
};

function fmt(n: number) {
  return '₹' + Math.round(n).toLocaleString('en-IN');
}

export default function PayCommissionCalculator() {
  const [levelIdx, setLevelIdx] = useState(0);
  const [basicInput, setBasicInput] = useState('18000');
  const [fitment, setFitment] = useState(2.86);
  const [hraCity, setHraCity] = useState<'X' | 'Y' | 'Z'>('X');
  const [taAmount, setTaAmount] = useState('5760');
  const [newDA, setNewDA] = useState(0);

  const basic = parseInt(basicInput) || 0;
  const hra = HRA_CITY[hraCity];

  // Current 7th CPC gross (DA = 60%)
  const currentDA = basic * 0.60;
  const currentHRA = basic * hra.current;
  const currentTA = parseInt(taAmount) || 0;
  const currentGross = basic + currentDA + currentHRA + currentTA;

  // 8th CPC projected
  const newBasic = Math.round(basic * fitment);
  const newDAAmount = Math.round(newBasic * newDA / 100);
  const newHRA = Math.round(newBasic * hra.projected);
  const newGross = newBasic + newDAAmount + newHRA + currentTA;

  const hike = newGross - currentGross;
  const hikePercent = currentGross > 0 ? ((hike / currentGross) * 100).toFixed(1) : '0';

  function handleLevelChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const idx = parseInt(e.target.value);
    setLevelIdx(idx);
    setBasicInput(String(PAY_LEVELS[idx].basic));
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-surface-200 shadow-sm">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 px-6 py-4">
        <h3 className="font-heading font-bold text-white text-lg">🧮 8th Pay Commission Salary Estimator</h3>
        <p className="text-primary-200 text-xs mt-1">Estimate based on proposed Fitment Factors — Final figures TBN</p>
      </div>

      <div className="grid md:grid-cols-2 gap-0">
        {/* LEFT — Inputs */}
        <div className="bg-white p-6 space-y-5 border-r border-surface-200">
          {/* Pay Level */}
          <div>
            <label className="block text-xs font-heading font-semibold text-surface-600 uppercase tracking-wide mb-1.5">
              Pay Level (7th CPC)
            </label>
            <select
              value={levelIdx}
              onChange={handleLevelChange}
              className="w-full border border-surface-200 rounded-xl px-3 py-2.5 text-sm text-surface-800 focus:outline-none focus:ring-2 focus:ring-primary-300 bg-surface-50"
            >
              {PAY_LEVELS.map((lvl, i) => (
                <option key={i} value={i}>{lvl.label}</option>
              ))}
            </select>
          </div>

          {/* Current Basic */}
          <div>
            <label className="block text-xs font-heading font-semibold text-surface-600 uppercase tracking-wide mb-1.5">
              Current Basic Pay (₹) — Edit if different
            </label>
            <input
              type="number"
              value={basicInput}
              onChange={e => setBasicInput(e.target.value)}
              className="w-full border border-surface-200 rounded-xl px-3 py-2.5 text-sm text-surface-800 focus:outline-none focus:ring-2 focus:ring-primary-300"
              min={0}
            />
          </div>

          {/* Fitment Factor */}
          <div>
            <label className="block text-xs font-heading font-semibold text-surface-600 uppercase tracking-wide mb-2">
              Expected Fitment Factor
            </label>
            <div className="grid grid-cols-2 gap-2">
              {FITMENT_OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setFitment(opt.value)}
                  className={`rounded-xl border px-3 py-2.5 text-center transition-all ${
                    fitment === opt.value ? opt.active : opt.bg
                  }`}
                >
                  <div className="font-heading font-bold text-sm">{opt.label}</div>
                  <div className="text-xs opacity-75">{opt.sublabel}</div>
                </button>
              ))}
            </div>
            {fitment === 3.83 && (
              <p className="text-xs text-amber-600 mt-1.5">⚠️ This is the union demand — not confirmed by government</p>
            )}
          </div>

          {/* HRA City */}
          <div>
            <label className="block text-xs font-heading font-semibold text-surface-600 uppercase tracking-wide mb-1.5">
              HRA City Classification
            </label>
            <select
              value={hraCity}
              onChange={e => setHraCity(e.target.value as 'X' | 'Y' | 'Z')}
              className="w-full border border-surface-200 rounded-xl px-3 py-2.5 text-sm text-surface-800 focus:outline-none focus:ring-2 focus:ring-primary-300 bg-surface-50"
            >
              {(Object.keys(HRA_CITY) as Array<keyof typeof HRA_CITY>).map(k => (
                <option key={k} value={k}>{HRA_CITY[k].label}</option>
              ))}
            </select>
          </div>

          {/* TA */}
          <div>
            <label className="block text-xs font-heading font-semibold text-surface-600 uppercase tracking-wide mb-1.5">
              Transport Allowance / month (₹)
            </label>
            <input
              type="number"
              value={taAmount}
              onChange={e => setTaAmount(e.target.value)}
              className="w-full border border-surface-200 rounded-xl px-3 py-2.5 text-sm text-surface-800 focus:outline-none focus:ring-2 focus:ring-primary-300"
              min={0}
            />
            <p className="text-xs text-surface-400 mt-1">Level 9+: ₹11,520 (TPTA cities) | Level 3-8: ₹5,760 (TPTA cities)</p>
          </div>

          {/* DA on new basic */}
          <div>
            <label className="block text-xs font-heading font-semibold text-surface-600 uppercase tracking-wide mb-1.5">
              DA on 8th CPC Basic: <span className="text-primary-600 font-bold">{newDA}%</span>
            </label>
            <input
              type="range"
              min={0}
              max={30}
              value={newDA}
              onChange={e => setNewDA(parseInt(e.target.value))}
              className="w-full accent-primary-500"
            />
            <div className="flex justify-between text-xs text-surface-400 mt-0.5">
              <span>0% (Day 1)</span>
              <span>15%</span>
              <span>30%</span>
            </div>
            <p className="text-xs text-surface-400 mt-1">DA resets to 0% on implementation day. Use slider to project future.</p>
          </div>
        </div>

        {/* RIGHT — Results */}
        <div className="bg-surface-50 p-6">
          <p className="text-xs font-heading font-semibold text-surface-500 uppercase tracking-wide mb-4">Your Estimated Salary</p>

          {/* Comparison Table */}
          <div className="space-y-3 mb-6">
            {/* Headers */}
            <div className="grid grid-cols-3 gap-2 text-xs font-heading font-semibold text-surface-500 uppercase tracking-wide pb-2 border-b border-surface-200">
              <div>Component</div>
              <div className="text-right">7th CPC Now</div>
              <div className="text-right">8th CPC Est.</div>
            </div>

            {[
              { label: 'Basic Pay', current: basic, projected: newBasic, highlight: false },
              { label: `DA (${basic > 0 ? '60%' : '–'} → ${newDA}%)`, current: currentDA, projected: newDAAmount, highlight: false },
              { label: `HRA (${hraCity}: ${(hra.current * 100).toFixed(0)}% → ${(hra.projected * 100).toFixed(0)}%)`, current: currentHRA, projected: newHRA, highlight: false },
              { label: 'Transport Allow.', current: currentTA, projected: currentTA, highlight: false },
            ].map(row => (
              <div key={row.label} className="grid grid-cols-3 gap-2 text-sm py-1.5 border-b border-surface-100">
                <div className="text-surface-600">{row.label}</div>
                <div className="text-right font-body text-surface-700">{fmt(row.current)}</div>
                <div className="text-right font-body text-primary-700 font-medium">{fmt(row.projected)}</div>
              </div>
            ))}

            {/* Gross Row */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              <div className="font-heading font-bold text-surface-900">Gross Salary</div>
              <div className="text-right font-heading font-bold text-surface-700">{fmt(currentGross)}</div>
              <div className="text-right font-heading font-bold text-emerald-600">{fmt(newGross)}</div>
            </div>
          </div>

          {/* Hike Badge */}
          {basic > 0 && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4">
              <div className="text-xs text-emerald-600 font-semibold uppercase tracking-wide mb-1">Estimated Monthly Hike</div>
              <div className="text-2xl font-heading font-bold text-emerald-700">{fmt(hike)}</div>
              <div className="text-sm text-emerald-600">+{hikePercent}% increase from current gross</div>
            </div>
          )}

          {/* Notes */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 space-y-1">
            <p className="text-xs font-semibold text-amber-700">⚠️ Important Disclaimers</p>
            <ul className="text-xs text-amber-600 space-y-1 list-disc ml-3">
              <li>Fitment Factor is <strong>not finalized</strong> — figures are estimates only</li>
              <li>HRA resets to base rate (X=24%) when DA is 0%</li>
              <li>NPS (10%), CGHS (₹250–₹1,000/month) deducted from gross</li>
              <li>Arrears (Jan 1, 2026 onwards) will be paid separately</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

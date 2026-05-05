'use client';

import { useState } from 'react';
import Link from 'next/link';
import { allExams, examCategories } from '@/lib/exams-data';

interface QuickResult {
  id: number;
  name: string;
  slug: string;
  category: string;
  eligible: boolean;
  reason: string;
  relaxedMaxAge: number;
  requiredQual: string;
}

const userQualRank: Record<string, number> = {
  '8th Pass': 1, '10th Pass': 2, '12th Pass': 3,
  'Diploma': 4, 'Graduate': 5, 'Post Graduate': 6,
};

function getRequiredQualRank(qualText: string): number {
  const q = qualText.toLowerCase();
  if (q.includes('8th')) return 1;
  if (q.includes('10th') || q.includes('matric')) return 2;
  if (q.includes('12th')) return 3;
  if (q.includes('diploma') || q.includes('iti')) return 4;
  const stripped = q.replace(/post.?gradu\w*/g, '').replace(/master'?s?\s*(degree)?/g, '').replace(/m\.sc/g, '');
  if (stripped.match(/graduat|degree|b\.e|b\.tech|b\.sc|b\.ed|d\.el\.ed|mbbs/)) return 5;
  if (q.includes('post gradu') || q.includes('master') || q.includes('m.sc')) return 6;
  return 5;
}

function getMinQualDisplay(qualText: string): string {
  const rank = getRequiredQualRank(qualText);
  const map: Record<number, string> = { 1: '8th Pass', 2: '10th Pass', 3: '12th Pass', 4: 'Diploma/ITI', 5: 'Graduate', 6: 'Post Graduate' };
  return map[rank] ?? 'Graduate';
}

function getRelaxation(cat: string): number {
  switch (cat) {
    case 'OBC': return 3;
    case 'SC': case 'ST': return 5;
    case 'PwBD': return 10;
    case 'Ex-Servicemen': return 5;
    default: return 0;
  }
}

function calculateAge(dob: string): number {
  const birth = new Date(dob);
  const ref = new Date(new Date().getFullYear(), 7, 1); // 1 Aug
  let age = ref.getFullYear() - birth.getFullYear();
  const m = ref.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && ref.getDate() < birth.getDate())) age--;
  return age;
}

export default function QuickChecker() {
  const [dob, setDob] = useState('');
  const [category, setCategory] = useState('General');
  const [qualification, setQualification] = useState('Graduate');
  const [filterCategory, setFilterCategory] = useState('All');
  const [results, setResults] = useState<QuickResult[]>([]);
  const [age, setAge] = useState<number | null>(null);
  const [showEligibleOnly, setShowEligibleOnly] = useState(true);

  function checkEligibility() {
    if (!dob) return;
    const calculatedAge = calculateAge(dob);
    setAge(calculatedAge);
    const relaxation = getRelaxation(category);
    const userRank = userQualRank[qualification] || 0;

    const res: QuickResult[] = allExams.map((exam) => {
      const relaxedMaxAge = exam.maxAge === 99 ? 99 : exam.maxAge + relaxation;
      const meetsAge = calculatedAge >= exam.minAge && calculatedAge <= relaxedMaxAge;
      const requiredRank = getRequiredQualRank(exam.qualification);
      const meetsQual = userRank >= requiredRank;
      const eligible = meetsAge && meetsQual;
      const minQualNeeded = getMinQualDisplay(exam.qualification);

      let reason = '';
      if (eligible) {
        reason = `Age ${calculatedAge} within ${exam.minAge}–${relaxedMaxAge === 99 ? 'no limit' : relaxedMaxAge} yrs · Needs: ${minQualNeeded} ✓`;
      } else if (!meetsAge && calculatedAge < exam.minAge) {
        reason = `Min age is ${exam.minAge} yrs. You are ${calculatedAge}.`;
      } else if (!meetsAge) {
        reason = `Max age is ${relaxedMaxAge} yrs (${exam.maxAge}+${relaxation} relaxation). You are ${calculatedAge}.`;
      } else {
        reason = `Needs ${minQualNeeded}. You selected ${qualification}.`;
      }

      return { id: exam.id, name: exam.name, slug: exam.slug, category: exam.category, eligible, reason, relaxedMaxAge, requiredQual: minQualNeeded };
    });

    setResults(res);
    setTimeout(() => document.getElementById('quick-results')?.scrollIntoView({ behavior: 'smooth' }), 100);
  }

  const filtered = results
    .filter(r => showEligibleOnly ? r.eligible : true)
    .filter(r => filterCategory === 'All' || r.category === filterCategory);

  const eligibleCount = results.filter(r => r.eligible).length;
  const relaxation = getRelaxation(category);

  return (
    <div className="max-w-3xl">
      {/* Form */}
      <div className="card p-6 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">📅 Date of Birth <span className="text-red-500">*</span></label>
            <input type="date" value={dob} onChange={e => setDob(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-surface-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">Category</label>
            <select value={category} onChange={e => setCategory(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-surface-300 focus:border-primary-500 outline-none text-sm bg-white">
              {['General', 'OBC', 'SC', 'ST', 'PwBD', 'Ex-Servicemen'].map(c => <option key={c}>{c}</option>)}
            </select>
            {relaxation > 0 && <p className="text-xs text-emerald-600 mt-1 font-medium">+{relaxation} yrs age relaxation applied</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">🎓 Highest Qualification</label>
            <select value={qualification} onChange={e => setQualification(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-surface-300 focus:border-primary-500 outline-none text-sm bg-white">
              {['8th Pass', '10th Pass', '12th Pass', 'Diploma', 'Graduate', 'Post Graduate'].map(q => <option key={q}>{q}</option>)}
            </select>
          </div>
        </div>
        <button onClick={checkEligibility} disabled={!dob}
          className={`btn-primary w-full sm:w-auto ${!dob ? 'opacity-50 cursor-not-allowed' : ''}`}>
          ⚡ Check All 100 Exams Instantly →
        </button>
      </div>

      {/* Results */}
      {age !== null && results.length > 0 && (
        <div id="quick-results">
          {/* Summary */}
          <div className={`rounded-2xl p-5 mb-6 flex items-center gap-4 ${eligibleCount > 0 ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'}`}>
            <span className="text-3xl">{eligibleCount > 30 ? '🎉' : eligibleCount > 10 ? '✅' : eligibleCount > 0 ? '👍' : '😔'}</span>
            <div>
              <p className="font-heading font-bold text-surface-900">
                Eligible for <span className={eligibleCount > 0 ? 'text-emerald-600' : 'text-red-500'}>{eligibleCount} out of {allExams.length}</span> exams in 2026
              </p>
              <p className="text-sm text-surface-500 mt-0.5">
                Age: <strong>{age} years</strong> · {category}{relaxation > 0 ? ` (+${relaxation} yrs relaxation)` : ''} · <strong>{qualification}</strong>
              </p>
              {eligibleCount === 0 && (
                <p className="text-xs text-red-600 mt-1">No exams matched — try checking if your DOB or qualification is correct.</p>
              )}
            </div>
          </div>

          {/* Filter bar */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <button onClick={() => setShowEligibleOnly(!showEligibleOnly)}
              className={`text-sm px-4 py-2 rounded-lg font-medium transition-all border ${showEligibleOnly ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-white text-surface-600 border-surface-300 hover:border-emerald-400'}`}>
              {showEligibleOnly ? `✅ Eligible Only (${eligibleCount})` : `Showing All (${allExams.length})`}
            </button>
            <button onClick={() => setFilterCategory('All')}
              className={`text-sm px-3 py-2 rounded-lg font-medium transition-all ${filterCategory === 'All' ? 'bg-primary-500 text-white' : 'bg-surface-100 text-surface-600 hover:bg-primary-50 hover:text-primary-600'}`}>All</button>
            {examCategories.map(cat => (
              <button key={cat.name} onClick={() => setFilterCategory(cat.name)}
                className={`text-sm px-3 py-2 rounded-lg font-medium transition-all flex items-center gap-1 ${filterCategory === cat.name ? 'bg-primary-500 text-white' : 'bg-surface-100 text-surface-600 hover:bg-primary-50 hover:text-primary-600'}`}>
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          <p className="text-sm text-surface-400 mb-4">Showing <strong className="text-surface-700">{filtered.length}</strong> exams</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filtered.map(r => (
              <div key={r.id} className={`card p-4 border-l-4 ${r.eligible ? 'border-l-emerald-500' : 'border-l-red-300'}`}>
                <div className="flex items-start justify-between mb-1.5 gap-2">
                  <h3 className="font-heading font-semibold text-surface-900 text-sm leading-tight">{r.name}</h3>
                  <span className={`badge flex-shrink-0 text-xs font-heading font-bold ${r.eligible ? 'badge-green' : 'bg-red-100 text-red-700'}`}>
                    {r.eligible ? '✓ Eligible' : '✗'}
                  </span>
                </div>
                <div className="flex gap-2 mb-2 flex-wrap">
                  <span className="badge badge-primary text-xs">{r.category}</span>
                  <span className="text-xs text-surface-400">Min: {r.requiredQual}</span>
                </div>
                <p className="text-xs text-surface-500 mb-2 leading-relaxed">{r.reason}</p>
                <Link href={`/exams/${r.slug}`} className="text-xs text-primary-500 hover:text-primary-600 font-medium">
                  View 2026 Guide →
                </Link>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="card p-10 text-center border-dashed border-2 border-surface-200">
              <div className="text-4xl mb-3">🔍</div>
              <p className="text-surface-600 font-medium">No exams found for this filter</p>
              <p className="text-surface-400 text-sm mt-1">Try switching to &ldquo;All&rdquo; category or disabling &ldquo;Eligible Only&rdquo;</p>
            </div>
          )}

          <p className="text-xs text-surface-400 mt-6 p-4 bg-surface-50 rounded-xl">
            <strong>Disclaimer:</strong> Approximate check based on general eligibility criteria. Age calculated as of 1 August {new Date().getFullYear()}. Some exams require specific degrees (Engineering, MBBS, B.Ed). Always verify from the official 2026 notification.
          </p>
        </div>
      )}
    </div>
  );
}

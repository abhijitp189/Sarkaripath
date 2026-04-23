'use client';

import Link from 'next/link';
import { useState } from 'react';
import { allExams, examCategories } from '@/lib/exams-data';

interface Result {
  id: number;
  name: string;
  slug: string;
  eligible: boolean;
  reason: string;
  relaxedMaxAge: number;
  category: string;
  requiredQual: string;
}

const userQualRank: Record<string, number> = {
  '8th Pass': 1,
  '10th Pass': 2,
  '12th Pass': 3,
  'Diploma': 4,
  'Graduate': 5,
  'Post Graduate': 6,
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
  switch (rank) {
    case 1: return '8th Pass';
    case 2: return '10th Pass';
    case 3: return '12th Pass';
    case 4: return 'Diploma/ITI';
    case 5: return 'Graduate';
    case 6: return 'Post Graduate';
    default: return 'Graduate';
  }
}

export default function AgeCalculatorPage() {
  const [dob, setDob] = useState('');
  const [category, setCategory] = useState('General');
  const [qualification, setQualification] = useState('Graduate');
  const [filterCategory, setFilterCategory] = useState('All');
  const [results, setResults] = useState<Result[]>([]);
  const [calculatedAge, setCalculatedAge] = useState<number | null>(null);
  const [showEligibleOnly, setShowEligibleOnly] = useState(true);

  function calculateAge(dobString: string): number {
    const birthDate = new Date(dobString);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    return age;
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

  function checkEligibility() {
    if (!dob) return;
    const age = calculateAge(dob);
    setCalculatedAge(age);
    const relaxation = getRelaxation(category);
    const userRank = userQualRank[qualification] || 0;

    const eligibilityResults: Result[] = allExams.map((exam) => {
      const relaxedMaxAge = exam.maxAge === 99 ? 99 : exam.maxAge + relaxation;
      const meetsAge = age >= exam.minAge && age <= relaxedMaxAge;
      const requiredRank = getRequiredQualRank(exam.qualification);
      const meetsQual = userRank >= requiredRank;
      const eligible = meetsAge && meetsQual;
      const minQualNeeded = getMinQualDisplay(exam.qualification);

      let reason = '';
      if (eligible) {
        reason = `Age ${age} within ${exam.minAge}–${relaxedMaxAge === 99 ? 'no limit' : relaxedMaxAge} yrs. Requires: ${minQualNeeded} ✓`;
      } else if (!meetsAge && age < exam.minAge) {
        reason = `You are ${age} yrs. Minimum age is ${exam.minAge}.`;
      } else if (!meetsAge) {
        reason = `You are ${age} yrs. Max age is ${relaxedMaxAge} (${exam.maxAge}+${relaxation} yrs relaxation).`;
      } else if (!meetsQual) {
        reason = `Requires: ${minQualNeeded}. You selected: ${qualification}.`;
      }

      return { id: exam.id, name: exam.name, slug: exam.slug, eligible, reason, relaxedMaxAge, category: exam.category, requiredQual: minQualNeeded };
    });

    setResults(eligibilityResults);
  }

  const filtered = results
    .filter(r => showEligibleOnly ? r.eligible : true)
    .filter(r => filterCategory === 'All' || r.category === filterCategory);

  const eligibleCount = results.filter(r => r.eligible).length;

  return (
    <div className="container-main py-10">
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">Eligibility Checker</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-surface-900 font-heading mb-2">Eligibility Checker</h1>
      <p className="text-surface-500 mt-2 text-lg mb-8">
        Find out which of our <strong>100 government exams</strong> you qualify for based on your age, category, and qualification.
      </p>

      <div className="card p-6 sm:p-8 max-w-2xl mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-2">Date of Birth</label>
            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-surface-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-2">Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-surface-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm bg-white">
              <option>General</option>
              <option>OBC</option>
              <option>SC</option>
              <option>ST</option>
              <option>PwBD</option>
              <option>Ex-Servicemen</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-2">Highest Qualification</label>
            <select value={qualification} onChange={(e) => setQualification(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-surface-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm bg-white">
              <option>8th Pass</option>
              <option>10th Pass</option>
              <option>12th Pass</option>
              <option>Diploma</option>
              <option>Graduate</option>
              <option>Post Graduate</option>
            </select>
          </div>
        </div>
        <button onClick={checkEligibility} className="btn-primary w-full sm:w-auto">Check My Eligibility →</button>
      </div>

      {calculatedAge !== null && results.length > 0 && (
        <div>
          <div className={`rounded-xl p-5 mb-6 max-w-3xl ${eligibleCount > 0 ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'}`}>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{eligibleCount > 20 ? '🎉' : eligibleCount > 10 ? '✅' : eligibleCount > 0 ? '👍' : '😔'}</span>
              <div>
                <p className="font-heading font-bold text-surface-900">
                  You are eligible for <span className={eligibleCount > 0 ? 'text-emerald-600' : 'text-red-500'}>{eligibleCount} out of 100</span> exams!
                </p>
                <p className="text-sm text-surface-500 mt-0.5">
                  Age: <strong>{calculatedAge} years</strong> · Category: <strong>{category}</strong> · Relaxation: <strong>+{getRelaxation(category)} yrs</strong> · Qualification: <strong>{qualification}</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-6">
            <button onClick={() => setShowEligibleOnly(!showEligibleOnly)} className={`text-sm px-4 py-2 rounded-lg font-medium transition-all ${showEligibleOnly ? 'bg-emerald-500 text-white' : 'bg-surface-100 text-surface-600'}`}>
              {showEligibleOnly ? `✅ Eligible Only (${eligibleCount})` : `Showing All (100)`}
            </button>
            <button onClick={() => setFilterCategory('All')} className={`text-sm px-3 py-2 rounded-lg font-medium transition-all ${filterCategory === 'All' ? 'bg-primary-500 text-white' : 'bg-surface-100 text-surface-600 hover:bg-primary-50'}`}>All</button>
            {examCategories.map(cat => (
              <button key={cat.name} onClick={() => setFilterCategory(cat.name)} className={`text-sm px-3 py-2 rounded-lg font-medium transition-all flex items-center gap-1 ${filterCategory === cat.name ? 'bg-primary-500 text-white' : 'bg-surface-100 text-surface-600 hover:bg-primary-50'}`}>
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          <p className="text-sm text-surface-400 mb-4">Showing <strong className="text-surface-700">{filtered.length}</strong> results</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((result) => (
              <div key={result.id} className={`card p-4 border-l-4 ${result.eligible ? 'border-l-emerald-500' : 'border-l-red-300'}`}>
                <div className="flex items-start justify-between mb-2 gap-2">
                  <h3 className="font-heading font-semibold text-surface-900 text-sm leading-tight">{result.name}</h3>
                  <span className={`badge flex-shrink-0 ${result.eligible ? 'badge-green' : 'bg-red-100 text-red-700'}`}>
                    {result.eligible ? '✓' : '✗'}
                  </span>
                </div>
                <div className="flex gap-2 mb-2">
                  <span className="badge badge-primary text-xs">{result.category}</span>
                  <span className="text-xs text-surface-400">Requires: {result.requiredQual}</span>
                </div>
                <p className="text-xs text-surface-500 mb-3 leading-relaxed">{result.reason}</p>
                <Link href={`/exams/${result.slug}`} className="text-xs text-primary-500 hover:text-primary-600 font-medium">View Exam Details →</Link>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="card p-10 text-center border-dashed border-2 border-surface-200">
              <div className="text-4xl mb-3">🔍</div>
              <p className="text-surface-600 font-medium">No exams found for this filter</p>
              <p className="text-surface-400 text-sm mt-1">Try changing the category or show all exams</p>
            </div>
          )}

          <p className="text-xs text-surface-400 mt-6 max-w-2xl">
            Disclaimer: This is an approximate eligibility check. Some exams require specific degrees (e.g., Engineering, MBBS, B.Ed). Always verify from the official notification.
          </p>
        </div>
      )}
    </div>
  );
}

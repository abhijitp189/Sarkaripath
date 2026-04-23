'use client';

import Link from 'next/link';
import { useState } from 'react';
import { exams } from '@/lib/exams-data';

interface Result {
  examName: string;
  slug: string;
  eligible: boolean;
  reason: string;
  maxAge: number;
  relaxedMaxAge: number;
}

export default function AgeCalculatorPage() {
  const [dob, setDob] = useState('');
  const [category, setCategory] = useState('General');
  const [qualification, setQualification] = useState('Graduate');
  const [results, setResults] = useState<Result[]>([]);
  const [calculatedAge, setCalculatedAge] = useState<number | null>(null);

  function calculateAge(dobString: string): number {
    const birthDate = new Date(dobString);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  function getRelaxation(category: string): number {
    switch (category) {
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

    const eligibilityResults: Result[] = exams.map((exam) => {
      const relaxedMaxAge = exam.maxAge + relaxation;
      const meetsAge = age >= exam.minAge && age <= relaxedMaxAge;
      const meetsQual = qualification === 'Graduate' || qualification === 'Post Graduate';

      let reason = '';
      if (!meetsAge && age < exam.minAge) {
        reason = `Minimum age is ${exam.minAge}. You are ${age}.`;
      } else if (!meetsAge) {
        reason = `Maximum age is ${relaxedMaxAge} (${exam.maxAge} + ${relaxation} relaxation). You are ${age}.`;
      } else if (!meetsQual) {
        reason = `Requires graduation. Check specific post requirements.`;
      }

      return {
        examName: exam.shortName,
        slug: exam.slug,
        eligible: meetsAge && meetsQual,
        reason: meetsAge && meetsQual ? 'You meet the age and qualification criteria.' : reason,
        maxAge: exam.maxAge,
        relaxedMaxAge,
      };
    });

    setResults(eligibilityResults);
  }

  return (
    <div className="container-main py-10">
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/tools/age-calculator" className="hover:text-primary-500">Tools</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">Eligibility Checker</span>
      </nav>

      <h1 className="section-title mb-2">Eligibility Checker</h1>
      <p className="section-subtitle mb-10">
        Enter your details to find which government exams you are eligible for based on age, category, and qualification.
      </p>

      {/* Input Form */}
      <div className="card p-6 sm:p-8 max-w-2xl mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-2">Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-surface-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-surface-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm bg-white"
            >
              <option>General</option>
              <option>OBC</option>
              <option>SC</option>
              <option>ST</option>
              <option>PwBD</option>
              <option>Ex-Servicemen</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-2">Qualification</label>
            <select
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-surface-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm bg-white"
            >
              <option>10th Pass</option>
              <option>12th Pass</option>
              <option>Graduate</option>
              <option>Post Graduate</option>
            </select>
          </div>
        </div>
        <button onClick={checkEligibility} className="btn-primary w-full sm:w-auto">
          Check Eligibility
        </button>
      </div>

      {/* Results */}
      {calculatedAge !== null && (
        <div>
          <div className="bg-primary-50 border border-primary-200 rounded-xl p-4 mb-6 max-w-2xl">
            <p className="text-sm text-primary-800">
              Your current age: <strong>{calculatedAge} years</strong> · Category: <strong>{category}</strong> · Relaxation: <strong>+{getRelaxation(category)} years</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
            {results.map((result) => (
              <div key={result.slug} className={`card p-5 border-l-4 ${result.eligible ? 'border-l-emerald-500' : 'border-l-red-300'}`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-surface-900">{result.examName}</h3>
                  {result.eligible ? (
                    <span className="badge badge-green">Eligible</span>
                  ) : (
                    <span className="badge bg-red-100 text-red-700">Not Eligible</span>
                  )}
                </div>
                <p className="text-xs text-surface-500 mb-3">{result.reason}</p>
                <div className="text-xs text-surface-400 mb-3">
                  Age limit: {exams.find(e => e.slug === result.slug)?.minAge}–{result.relaxedMaxAge} years
                </div>
                <Link href={`/exams/${result.slug}`} className="text-xs text-primary-500 hover:text-primary-600 font-medium">
                  View Exam Details →
                </Link>
              </div>
            ))}
          </div>

          <p className="text-xs text-surface-400 mt-6 max-w-2xl">
            Disclaimer: This is an approximate check based on general criteria. Some posts within an exam may have different age limits. Always verify eligibility from the official notification before applying.
          </p>
        </div>
      )}
    </div>
  );
}

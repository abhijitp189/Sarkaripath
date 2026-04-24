'use client';

import { useState, useMemo } from 'react';
import {
  examSalaryData,
  calculateSalary,
  formatINR,
  CITY_LABELS,
  type CityType,
} from '@/lib/salary-data';

const EXAM_NAMES = Object.keys(examSalaryData);

const COMPARE_POSTS = [
  { exam: 'UPSC IAS', postIdx: 0, label: 'IAS Officer' },
  { exam: 'SBI PO', postIdx: 0, label: 'SBI PO' },
  { exam: 'SSC CGL', postIdx: 3, label: 'SSC CGL — IT Inspector' },
  { exam: 'IBPS PO', postIdx: 0, label: 'IBPS PO' },
  { exam: 'RRB NTPC', postIdx: 4, label: 'RRB NTPC — Station Master' },
];

export default function SalaryCalculator() {
  const [selectedExam, setSelectedExam] = useState('SSC CGL');
  const [selectedPostIdx, setSelectedPostIdx] = useState(3);
  const [selectedCity, setSelectedCity] = useState<CityType>('X');

  const exam = examSalaryData[selectedExam];
  const post = exam.posts[selectedPostIdx];

  const breakdown = useMemo(
    () => calculateSalary(selectedExam, post.basic, selectedCity),
    [selectedExam, post.basic, selectedCity]
  );

  const comparisons = useMemo(
    () =>
      COMPARE_POSTS.map((c) => {
        const e = examSalaryData[c.exam];
        const p = e.posts[c.postIdx];
        return {
          ...c,
          inHand: calculateSalary(c.exam, p.basic, 'X').inHandSalary,
        };
      }).sort((a, b) => b.inHand - a.inHand),
    []
  );

  const isBanking = exam.type === 'banking' || exam.type === 'banking_sbi';

  return (
    <div className="max-w-3xl mx-auto">
      {/* Selectors */}
      <div className="bg-white rounded-2xl border border-surface-200 p-6 mb-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Exam */}
          <div>
            <label className="block text-xs font-semibold text-surface-500 uppercase tracking-wide mb-2">
              Select Exam
            </label>
            <select
              value={selectedExam}
              onChange={(e) => {
                setSelectedExam(e.target.value);
                setSelectedPostIdx(0);
              }}
              className="w-full border border-surface-200 rounded-xl px-3 py-2.5 text-sm text-surface-800 bg-surface-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {EXAM_NAMES.map((name) => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </div>

          {/* Post */}
          <div>
            <label className="block text-xs font-semibold text-surface-500 uppercase tracking-wide mb-2">
              Select Post
            </label>
            <select
              value={selectedPostIdx}
              onChange={(e) => setSelectedPostIdx(Number(e.target.value))}
              className="w-full border border-surface-200 rounded-xl px-3 py-2.5 text-sm text-surface-800 bg-surface-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {exam.posts.map((p, i) => (
                <option key={i} value={i}>{p.name}</option>
              ))}
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block text-xs font-semibold text-surface-500 uppercase tracking-wide mb-2">
              City Type
            </label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value as CityType)}
              className="w-full border border-surface-200 rounded-xl px-3 py-2.5 text-sm text-surface-800 bg-surface-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {(Object.keys(CITY_LABELS) as CityType[]).map((c) => (
                <option key={c} value={c}>{CITY_LABELS[c]}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Result Hero */}
      <div className="bg-primary-500 rounded-2xl p-6 mb-6 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-primary-200 text-sm font-medium mb-1">{selectedExam}</p>
            <h2 className="font-heading font-semibold text-lg leading-snug">{post.name}</h2>
            <p className="text-primary-200 text-sm mt-1">
              {selectedCity === 'X' ? 'Metro City' : selectedCity === 'Y' ? 'Large City' : 'Small Town / Rural'} posting
            </p>
          </div>
          <div className="sm:text-right">
            <p className="text-primary-200 text-xs uppercase tracking-wide mb-1">Estimated In-Hand / Month</p>
            <p className="font-heading font-semibold text-4xl">{formatINR(breakdown.inHandSalary)}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Breakdown Table */}
        <div className="bg-white rounded-2xl border border-surface-200 p-6 shadow-sm">
          <h3 className="font-heading font-semibold text-surface-800 text-base mb-4">
            Salary Breakdown
          </h3>
          <div className="space-y-0">
            {/* Earnings */}
            <p className="text-xs font-semibold text-surface-400 uppercase tracking-wide mb-2">Earnings</p>

            <div className="flex justify-between py-2 border-b border-surface-100 text-sm">
              <span className="text-surface-600">Basic Pay</span>
              <span className="font-medium text-surface-800">{formatINR(breakdown.basicPay)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-surface-100 text-sm">
              <span className="text-surface-600">
                Dearness Allowance (DA @ {isBanking ? '46.5%' : '53%'})
              </span>
              <span className="font-medium text-green-600">+{formatINR(breakdown.da)}</span>
            </div>

            {isBanking && breakdown.specialAllowance !== undefined && (
              <div className="flex justify-between py-2 border-b border-surface-100 text-sm">
                <span className="text-surface-600">Special Allowance (7.75%)</span>
                <span className="font-medium text-green-600">+{formatINR(breakdown.specialAllowance)}</span>
              </div>
            )}

            <div className="flex justify-between py-2 border-b border-surface-100 text-sm">
              <span className="text-surface-600">
                HRA ({selectedCity === 'X' ? (isBanking ? '9%' : '27%') : selectedCity === 'Y' ? (isBanking ? '8%' : '18%') : (isBanking ? '7%' : '9%')})
              </span>
              <span className="font-medium text-green-600">+{formatINR(breakdown.hra)}</span>
            </div>

            {isBanking && breakdown.cca !== undefined && (
              <div className="flex justify-between py-2 border-b border-surface-100 text-sm">
                <span className="text-surface-600">City Compensatory Allowance (CCA)</span>
                <span className="font-medium text-green-600">+{formatINR(breakdown.cca)}</span>
              </div>
            )}

            <div className="flex justify-between py-2 border-b border-surface-200 text-sm">
              <span className="text-surface-600">Transport Allowance (TA)</span>
              <span className="font-medium text-green-600">+{formatINR(breakdown.ta)}</span>
            </div>

            <div className="flex justify-between py-2.5 border-b border-surface-200 text-sm font-semibold">
              <span className="text-surface-800">Gross Salary</span>
              <span className="text-surface-800">{formatINR(breakdown.grossSalary)}</span>
            </div>

            {/* Deductions */}
            <p className="text-xs font-semibold text-surface-400 uppercase tracking-wide mt-3 mb-2">Deductions</p>

            <div className="flex justify-between py-2 border-b border-surface-100 text-sm">
              <span className="text-surface-600">NPS Contribution (10% of Basic)</span>
              <span className="font-medium text-red-500">−{formatINR(breakdown.npsDeduction)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-surface-200 text-sm">
              <span className="text-surface-600">{isBanking ? 'Professional Tax' : 'CGHS + GIS'}</span>
              <span className="font-medium text-red-500">−{formatINR(breakdown.otherDeductions)}</span>
            </div>

            {/* In-Hand */}
            <div className="flex justify-between pt-3 mt-1">
              <span className="font-heading font-semibold text-surface-800">In-Hand Salary</span>
              <span className="font-heading font-semibold text-primary-600 text-lg">
                {formatINR(breakdown.inHandSalary)}
              </span>
            </div>
          </div>
        </div>

        {/* Perks */}
        <div className="bg-white rounded-2xl border border-surface-200 p-6 shadow-sm">
          <h3 className="font-heading font-semibold text-surface-800 text-base mb-4">
            Additional Perks & Benefits
          </h3>
          <p className="text-xs text-surface-400 mb-3">
            Non-cash benefits (not included in salary above)
          </p>
          <ul className="space-y-2.5">
            {exam.perks.map((perk, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-surface-600">
                <span className="w-5 h-5 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✓</span>
                {perk}
              </li>
            ))}
          </ul>
          <div className="mt-4 p-3 bg-primary-50 rounded-xl">
            <p className="text-xs text-primary-700 font-medium">
              💡 Basic Pay ₹{post.basic.toLocaleString('en-IN')} — Pay Level {post.level ?? '—'} (7th Pay Commission)
            </p>
          </div>
        </div>
      </div>

      {/* Comparison */}
      <div className="bg-white rounded-2xl border border-surface-200 p-6 shadow-sm mb-6">
        <h3 className="font-heading font-semibold text-surface-800 text-base mb-1">
          Compare Top Posts — Metro City (X)
        </h3>
        <p className="text-xs text-surface-400 mb-4">Ranked by estimated in-hand salary</p>
        <div className="space-y-2">
          {comparisons.map((c, i) => {
            const maxSalary = comparisons[0].inHand;
            const pct = Math.round((c.inHand / maxSalary) * 100);
            return (
              <div key={c.exam} className="flex items-center gap-3">
                <div className="w-5 text-xs font-semibold text-surface-400 text-right">{i + 1}</div>
                <div className="w-28 text-xs text-surface-600 truncate">{c.label}</div>
                <div className="flex-1 bg-surface-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-primary-500 transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <div className="w-24 text-right text-sm font-semibold text-surface-800">
                  {formatINR(c.inHand)}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-center text-xs text-surface-400 leading-relaxed">
        Estimates based on 7th Pay Commission · DA @ 53% (Govt) / 46.5% (Banking) · HRA as per city classification.<br />
        Actual salary may vary slightly by department, DA revision, and posting. Verify from official notifications.
      </p>
    </div>
  );
}

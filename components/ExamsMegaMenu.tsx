'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { allExams, examCategories } from '@/lib/exams-data';

// Top 5–6 exams shown per category
const FEATURED_PER_CATEGORY: Record<string, string[]> = {
  UPSC:       ['upsc-ias', 'upsc-nda', 'upsc-cds', 'upsc-ese', 'upsc-epfo', 'upsc-capf'],
  SSC:        ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-je', 'ssc-cpo', 'ssc-stenographer'],
  Banking:    ['ibps-po', 'sbi-po', 'ibps-clerk', 'sbi-clerk', 'rbi-grade-b', 'lic-aao'],
  Railway:    ['rrb-ntpc', 'rrb-group-d', 'rrb-alp', 'rrb-je', 'rpf-si', 'rpf-constable'],
  Defence:    ['upsc-nda', 'upsc-cds', 'afcat', 'upsc-capf', 'drdo-ceptam', 'isro-scientist'],
  'State PSC':['mpsc-rajyaseva', 'uppsc-pcs', 'bpsc-cce', 'rpsc-ras', 'wbcs-executive', 'mppsc-state-service'],
  Teaching:   ['ctet', 'ugc-net', 'kvs-prt-tgt-pgt', 'nvs-teaching', 'dsssb-tgt-pgt-prt'],
  Police:     ['ssc-gd-constable', 'ssc-cpo', 'up-police-constable', 'delhi-police-constable', 'up-police-si', 'bihar-police-si'],
};

// Build a slug→exam lookup once
const examBySlug = Object.fromEntries(allExams.map((e) => [e.slug, e]));

export default function ExamsMegaMenu() {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('UPSC');
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  const featuredSlugs = FEATURED_PER_CATEGORY[activeCategory] ?? [];
  const featuredExams = featuredSlugs.map((s) => examBySlug[s]).filter(Boolean);
  const remainingCount = allExams.filter((e) => e.category === activeCategory).length - featuredExams.length;

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          open
            ? 'text-primary-600 bg-primary-50'
            : 'text-surface-600 hover:text-primary-500 hover:bg-primary-50'
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        Exams
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Mega menu panel */}
      {open && (
        <div
          className="absolute left-0 top-full mt-2 w-[680px] bg-white rounded-2xl shadow-2xl border border-surface-200 overflow-hidden z-50"
          style={{ maxHeight: '520px' }}
        >
          <div className="flex h-full" style={{ minHeight: '420px' }}>
            {/* LEFT: Category list */}
            <div className="w-48 bg-surface-50 border-r border-surface-100 flex-shrink-0 py-2 overflow-y-auto">
              {/* All Exams link */}
              <Link
                href="/exams"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-primary-600 hover:bg-primary-50 transition-colors border-b border-surface-200 mb-1"
              >
                <span>📋</span>
                <span>All Exams</span>
                <svg className="w-3.5 h-3.5 ml-auto opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {examCategories.map((cat) => {
                const count = allExams.filter((e) => e.category === cat.name).length;
                return (
                  <button
                    key={cat.name}
                    onMouseEnter={() => setActiveCategory(cat.name)}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors text-left ${
                      activeCategory === cat.name
                        ? 'bg-white text-primary-600 font-semibold border-r-2 border-primary-500'
                        : 'text-surface-700 hover:bg-white hover:text-primary-500 font-medium'
                    }`}
                  >
                    <span className="text-base leading-none">{cat.icon}</span>
                    <span className="flex-1 truncate">{cat.name}</span>
                    <span className="text-xs text-surface-400 flex-shrink-0">{count}</span>
                  </button>
                );
              })}
            </div>

            {/* RIGHT: Exam grid for active category */}
            <div className="flex-1 p-4 overflow-y-auto">
              {/* Category header */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-surface-800">
                  {examCategories.find((c) => c.name === activeCategory)?.icon}{' '}
                  {activeCategory} Exams
                </h3>
                <Link
                  href={`/exams?category=${encodeURIComponent(activeCategory)}`}
                  onClick={() => setOpen(false)}
                  className="text-xs text-primary-600 hover:underline font-medium"
                >
                  View all →
                </Link>
              </div>

              {/* Exam cards grid */}
              <div className="grid grid-cols-2 gap-2">
                {featuredExams.map((exam) => (
                  <Link
                    key={exam.slug}
                    href={`/exams/${exam.slug}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-primary-50 group transition-colors border border-transparent hover:border-primary-100"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 text-primary-600 text-xs font-bold group-hover:bg-primary-200 transition-colors">
                      {exam.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-surface-800 group-hover:text-primary-700 truncate leading-tight">
                        {exam.name}
                      </p>
                      <p className="text-xs text-surface-400 truncate leading-tight mt-0.5">
                        {exam.conductingBody.split('(')[0].trim()}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* View all link for remaining exams */}
              {remainingCount > 0 && (
                <Link
                  href={`/exams?category=${encodeURIComponent(activeCategory)}`}
                  onClick={() => setOpen(false)}
                  className="mt-3 flex items-center justify-center gap-1.5 w-full py-2 rounded-xl border border-primary-200 text-xs text-primary-600 hover:bg-primary-50 font-medium transition-colors"
                >
                  +{remainingCount} more {activeCategory} exams
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

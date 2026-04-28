'use client';

import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { allExams, examCategories } from '@/lib/exams-data';

// Inner component that uses useSearchParams — must be wrapped in <Suspense>
function ExamsContent() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Pre-fill from URL params (e.g. from universal search or mega menu)
  useEffect(() => {
    const cat = searchParams.get('category');
    const q = searchParams.get('q');
    if (cat) setActiveCategory(cat);
    if (q) setSearchQuery(q);
  }, [searchParams]);

  const filteredExams = allExams
    .filter((exam) => activeCategory === 'All' || exam.category === activeCategory)
    .filter((exam) => searchQuery === '' || exam.name.toLowerCase().includes(searchQuery.toLowerCase()) || exam.conductingBody.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="container-main py-10">
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">Exams</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-surface-900 font-heading mb-2">All Government Exams</h1>
      <p className="text-surface-500 mt-2 text-lg mb-6">Browse 100+ exams with complete preparation guides, syllabus, books, and free resources</p>

      {/* Search */}
      <div className="mb-6 max-w-xl">
        <input
          type="text"
          placeholder="Search exams... (e.g. UPSC, Banking, Police)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-surface-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveCategory('All')}
          className={`text-sm px-4 py-2 rounded-lg font-medium transition-all ${activeCategory === 'All' ? 'bg-primary-500 text-white shadow-sm' : 'bg-surface-100 text-surface-600 hover:bg-primary-50 hover:text-primary-500'}`}
        >All ({allExams.length})</button>
        {examCategories.map((cat) => {
          const count = allExams.filter(e => e.category === cat.name).length;
          return (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`text-sm px-3 py-2 rounded-lg font-medium transition-all flex items-center gap-1.5 ${activeCategory === cat.name ? 'bg-primary-500 text-white shadow-sm' : 'bg-surface-100 text-surface-600 hover:bg-primary-50 hover:text-primary-500'}`}
            >
              <span>{cat.icon}</span> {cat.name} ({count})
            </button>
          );
        })}
      </div>

      <p className="text-sm text-surface-400 mb-6">Showing <strong className="text-surface-700">{filteredExams.length}</strong> exams</p>

      {/* Exam Cards */}
      {filteredExams.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredExams.map((exam) => (
            <Link key={exam.id} href={`/exams/${exam.slug}`} className="card p-5 group flex flex-col">
              <div className="flex items-start justify-between mb-2">
                <span className="badge badge-primary">{exam.category}</span>
                <span className="badge badge-green">{exam.level}</span>
              </div>
              <h2 className="font-heading font-bold text-surface-900 group-hover:text-primary-500 transition-colors mb-1.5 text-sm leading-tight">
                {exam.name}
              </h2>
              <p className="text-xs text-surface-400 mb-3">{exam.conductingBody}</p>
              {exam.description && (
                <p className="text-xs text-surface-500 leading-relaxed mb-3 flex-1">
                  {exam.description.substring(0, 120)}...
                </p>
              )}
              <div className="grid grid-cols-2 gap-2 text-xs mt-auto">
                <div className="bg-surface-50 rounded-lg p-2">
                  <span className="text-surface-400">Age</span>
                  <div className="font-medium text-surface-700">{exam.minAge}–{exam.maxAge === 99 ? 'No limit' : exam.maxAge} yrs</div>
                </div>
                <div className="bg-surface-50 rounded-lg p-2">
                  <span className="text-surface-400">Qualification</span>
                  <div className="font-medium text-surface-700">{exam.qualification}</div>
                </div>
                {exam.salaryRange && (
                  <div className="bg-surface-50 rounded-lg p-2 col-span-2">
                    <span className="text-surface-400">Salary</span>
                    <div className="font-medium text-emerald-600">{exam.salaryRange}</div>
                  </div>
                )}
              </div>
              <div className="mt-3 pt-3 border-t border-surface-100">
                <span className="text-xs font-medium text-primary-500 group-hover:text-primary-600 flex items-center gap-1">
                  View Complete Guide
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="card p-12 text-center border-dashed border-2 border-surface-300">
          <div className="text-4xl mb-3">🔍</div>
          <h3 className="font-heading font-bold text-lg text-surface-700 mb-2">No exams found</h3>
          <p className="text-sm text-surface-500 mb-4">Try a different search term or category</p>
          <button onClick={() => { setActiveCategory('All'); setSearchQuery(''); }} className="btn-primary">Show All Exams</button>
        </div>
      )}
    </div>
  );
}

// Outer page wraps ExamsContent in Suspense — required for static export with useSearchParams
export default function ExamsPage() {
  return (
    <Suspense fallback={
      <div className="container-main py-10">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-surface-200 rounded w-64" />
          <div className="h-4 bg-surface-100 rounded w-96" />
          <div className="flex gap-2 mt-6">
            {[1,2,3,4,5].map(i => <div key={i} className="h-9 w-24 bg-surface-100 rounded-lg" />)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {[1,2,3,4,5,6].map(i => <div key={i} className="h-48 bg-surface-100 rounded-2xl" />)}
          </div>
        </div>
      </div>
    }>
      <ExamsContent />
    </Suspense>
  );
}

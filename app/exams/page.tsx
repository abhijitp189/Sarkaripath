'use client';

import Link from 'next/link';
import { useState } from 'react';
import { exams, examCategories } from '@/lib/exams-data';

export default function ExamsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredExams = activeCategory === 'All'
    ? exams
    : exams.filter((exam) => exam.category === activeCategory);

  return (
    <div className="container-main py-10">
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">Exams</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-surface-900 font-heading mb-2">All Government Exams</h1>
      <p className="text-surface-500 mt-2 text-lg mb-10">Choose an exam to get a complete preparation guide with syllabus, study plan, books, and free resources</p>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={() => setActiveCategory('All')}
          className={`text-sm px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            activeCategory === 'All'
              ? 'bg-primary-500 text-white shadow-sm'
              : 'bg-surface-100 text-surface-600 hover:bg-primary-50 hover:text-primary-500'
          }`}
        >
          All
        </button>
        {examCategories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={`text-sm px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-1.5 ${
              activeCategory === cat.name
                ? 'bg-primary-500 text-white shadow-sm'
                : 'bg-surface-100 text-surface-600 hover:bg-primary-50 hover:text-primary-500'
            }`}
          >
            <span>{cat.icon}</span>
            {cat.name}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-surface-400 mb-6">
        Showing <strong className="text-surface-700">{filteredExams.length}</strong> exam{filteredExams.length !== 1 ? 's' : ''}
        {activeCategory !== 'All' && <> in <strong className="text-primary-500">{activeCategory}</strong></>}
      </p>

      {/* Exam Cards */}
      {filteredExams.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredExams.map((exam) => (
            <Link key={exam.slug} href={`/exams/${exam.slug}`} className="card p-6 group">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="badge badge-primary mr-2">{exam.category}</span>
                  <span className="badge badge-green">{exam.level}</span>
                </div>
              </div>
              <h2 className="font-heading font-bold text-xl text-surface-900 group-hover:text-primary-500 transition-colors mb-2">
                {exam.title}
              </h2>
              <p className="text-sm text-surface-500 leading-relaxed mb-5">
                {exam.description.substring(0, 180)}...
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-surface-50 rounded-lg p-3">
                  <div className="text-surface-400 text-xs">Conducting Body</div>
                  <div className="font-medium text-surface-800 mt-0.5">{exam.conductingBody}</div>
                </div>
                <div className="bg-surface-50 rounded-lg p-3">
                  <div className="text-surface-400 text-xs">Frequency</div>
                  <div className="font-medium text-surface-800 mt-0.5">{exam.frequency.split('(')[0].trim()}</div>
                </div>
                <div className="bg-surface-50 rounded-lg p-3">
                  <div className="text-surface-400 text-xs">Vacancies</div>
                  <div className="font-medium text-surface-800 mt-0.5">{exam.avgVacancies}</div>
                </div>
                <div className="bg-surface-50 rounded-lg p-3">
                  <div className="text-surface-400 text-xs">Salary Range</div>
                  <div className="font-medium text-emerald-600 mt-0.5">{exam.salaryRange.split('(')[0].trim()}</div>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-surface-100 flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-surface-100 text-surface-500 px-2 py-1 rounded">Syllabus</span>
                  <span className="text-xs bg-surface-100 text-surface-500 px-2 py-1 rounded">Study Plan</span>
                  <span className="text-xs bg-surface-100 text-surface-500 px-2 py-1 rounded">Books</span>
                  <span className="text-xs bg-surface-100 text-surface-500 px-2 py-1 rounded">Free Resources</span>
                </div>
                <svg className="w-5 h-5 text-primary-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="card p-12 text-center border-dashed border-2 border-surface-300">
          <div className="text-5xl mb-4">{examCategories.find(c => c.name === activeCategory)?.icon}</div>
          <h3 className="font-heading font-bold text-xl text-surface-700 mb-2">{activeCategory} Exams Coming Soon</h3>
          <p className="text-sm text-surface-500 max-w-md mx-auto mb-6">
            We are working on detailed preparation guides for {activeCategory} exams. Check back soon!
          </p>
          <button onClick={() => setActiveCategory('All')} className="btn-primary">
            View All Available Exams
          </button>
        </div>
      )}

      {activeCategory === 'All' && (
        <div className="mt-10 card p-8 text-center border-dashed border-2 border-surface-300">
          <div className="text-4xl mb-3">🚀</div>
          <h3 className="font-heading font-bold text-lg text-surface-700 mb-2">More Exams Coming Soon</h3>
          <p className="text-sm text-surface-500 max-w-lg mx-auto">
            We are adding detailed guides for NDA, CDS, CTET, State PSC, Police, and many more exams. Bookmark this page and check back regularly.
          </p>
        </div>
      )}
    </div>
  );
}

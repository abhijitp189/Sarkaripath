'use client';

import Link from 'next/link';
import { useState } from 'react';
import { currentAffairsPosts, caCategories, type CaCategory } from '@/lib/current-affairs-data';

const categoryColors: Record<string, string> = {
  National: 'bg-blue-100 text-blue-700',
  International: 'bg-purple-100 text-purple-700',
  Economy: 'bg-emerald-100 text-emerald-700',
  'Sci-Tech': 'bg-orange-100 text-orange-700',
  Sports: 'bg-red-100 text-red-700',
  All: 'bg-surface-100 text-surface-600',
};

const examBadgeColors: Record<string, string> = {
  UPSC: 'bg-purple-50 text-purple-600 border border-purple-200',
  'SSC CGL': 'bg-blue-50 text-blue-600 border border-blue-200',
  'IBPS PO': 'bg-emerald-50 text-emerald-600 border border-emerald-200',
  'RRB NTPC': 'bg-orange-50 text-orange-600 border border-orange-200',
  'SBI PO': 'bg-teal-50 text-teal-600 border border-teal-200',
  'State PSC': 'bg-yellow-50 text-yellow-700 border border-yellow-200',
};

export default function CurrentAffairsPage() {
  const [activeCategory, setActiveCategory] = useState<CaCategory>('All');

  const featured = currentAffairsPosts.find((p) => p.isFeatured);
  const allPosts = activeCategory === 'All'
    ? currentAffairsPosts
    : currentAffairsPosts.filter((p) => p.category === activeCategory);

  const regularPosts = allPosts.filter((p) => !p.isFeatured || activeCategory !== 'All');

  return (
    <div className="bg-surface-50 min-h-screen">

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-surface-200">
        <div className="container-main py-12">
          <nav className="text-sm text-surface-500 mb-6">
            <Link href="/" className="hover:text-primary-500">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-surface-800">Current Affairs</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-100 text-primary-700 font-heading uppercase tracking-wide">
                Updated Weekly
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-heading uppercase tracking-wide">
                100% Free
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-surface-900 mb-4 leading-tight">
              Current Affairs{' '}
              <span className="text-primary-500">2026</span>
            </h1>
            <p className="text-lg text-surface-500 leading-relaxed max-w-2xl">
              Exam-oriented weekly digests and monthly roundups — simplified for UPSC, SSC,
              Banking, and Railway aspirants. No paywalls, no spam.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mt-8">
              {[
                { icon: '📰', label: 'Weekly Roundups', value: `${currentAffairsPosts.length}` },
                { icon: '🎯', label: 'Exams Covered', value: '10+' },
                { icon: '⚡', label: 'Quick Quiz', value: 'Every issue' },
                { icon: '🔖', label: 'Key Points', value: 'Highlighted' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="text-xl">{s.icon}</span>
                  <div>
                    <div className="text-sm font-heading font-bold text-surface-900">{s.value}</div>
                    <div className="text-xs text-surface-400">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container-main py-10">

        {/* ── Featured Card ───────────────────────────────────────────── */}
        {featured && activeCategory === 'All' && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-primary-500">
                ★ Latest Issue
              </span>
            </div>
            <Link
              href={`/current-affairs/${featured.slug}`}
              className="block rounded-2xl bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 p-8 group hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1 text-xs font-heading font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-accent-500 text-white">
                  🆕 New
                </span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20 text-white`}>
                  {featured.category}
                </span>
                <span className="text-xs text-primary-200">📅 {featured.dateRange}</span>
              </div>

              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3 leading-snug group-hover:text-primary-100 transition-colors">
                {featured.title}
              </h2>
              <p className="text-primary-200 leading-relaxed mb-6 max-w-2xl">
                {featured.excerpt}
              </p>

              {/* Key points preview */}
              {featured.keyPoints && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {featured.keyPoints.slice(0, 4).map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-primary-100">
                      <span className="text-accent-400 mt-0.5 flex-shrink-0">▸</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors group-hover:bg-white/20">
                  Read Full Roundup
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {featured.targetExams.slice(0, 4).map((exam) => (
                    <span key={exam} className={`text-xs px-2 py-0.5 rounded font-medium ${examBadgeColors[exam] || 'bg-white/10 text-primary-100'}`}>
                      {exam}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* ── Category Filter Bar ─────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-6">
          {caCategories.map((cat) => {
            const count = cat === 'All'
              ? currentAffairsPosts.length
              : currentAffairsPosts.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as CaCategory)}
                className={`text-sm px-4 py-2 rounded-lg font-heading font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary-500 text-white shadow-sm'
                    : 'bg-white text-surface-600 border border-surface-200 hover:bg-primary-50 hover:text-primary-500 hover:border-primary-200'
                }`}
              >
                {cat} {count > 0 && <span className="opacity-70 text-xs">({count})</span>}
              </button>
            );
          })}
        </div>

        <p className="text-sm text-surface-400 mb-6">
          Showing <strong className="text-surface-700">{allPosts.length}</strong> roundup{allPosts.length !== 1 ? 's' : ''}
        </p>

        {/* ── Posts Grid ───────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {(activeCategory === 'All' ? regularPosts : allPosts).map((post) => (
            <Link
              key={post.slug}
              href={`/current-affairs/${post.slug}`}
              className="card p-6 group hover:border-primary-300 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-heading font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] || 'bg-surface-100 text-surface-600'}`}>
                  {post.category}
                </span>
                <span className="text-xs text-surface-400">📅 {post.dateRange}</span>
              </div>

              <h2 className="font-heading font-bold text-lg text-surface-900 group-hover:text-primary-500 transition-colors mb-2 leading-snug">
                {post.title}
              </h2>

              <p className="text-sm text-surface-500 leading-relaxed mb-4 flex-1">
                {post.excerpt}
              </p>

              {/* Key points preview */}
              {post.keyPoints && (
                <div className="space-y-1.5 mb-4">
                  {post.keyPoints.slice(0, 3).map((point, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-surface-500">
                      <span className="text-primary-400 mt-0.5 flex-shrink-0">▸</span>
                      <span>{point}</span>
                    </div>
                  ))}
                  {(post.keyPoints?.length ?? 0) > 3 && (
                    <div className="text-xs text-primary-500 font-medium pl-3">
                      +{(post.keyPoints?.length ?? 0) - 3} more points →
                    </div>
                  )}
                </div>
              )}

              {/* Target exams */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.targetExams.map((exam) => (
                  <span key={exam} className={`text-xs px-2 py-0.5 rounded font-medium ${examBadgeColors[exam] || 'bg-surface-100 text-surface-500'}`}>
                    {exam}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-surface-400">Published: {post.publishedDate}</span>
                <span className="text-sm font-medium text-primary-500 group-hover:text-primary-600 flex items-center gap-1">
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Coming Soon notice ───────────────────────────────────────── */}
        <div className="mt-10 card p-8 text-center border-dashed border-2 border-surface-300">
          <div className="text-4xl mb-3">📅</div>
          <h3 className="font-heading font-bold text-lg text-surface-700 mb-2">New roundup every Monday</h3>
          <p className="text-sm text-surface-500 max-w-lg mx-auto">
            We publish a fresh weekly current affairs digest every Monday morning — covering everything
            relevant for UPSC, SSC, Banking, and Railway exams. Bookmark this page!
          </p>
        </div>

        {/* ── SEO Info Box ─────────────────────────────────────────────── */}
        <div className="mt-10 bg-primary-50 border border-primary-100 rounded-2xl p-6">
          <h2 className="font-heading font-bold text-lg text-primary-900 mb-3">
            How to Use This Section
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-primary-800">
            {[
              { icon: '📌', title: 'Key Points first', desc: 'Each issue opens with 8–10 bullet facts — review these quickly before any exam.' },
              { icon: '🧠', title: 'Quick Quiz', desc: 'Test yourself with 3 MCQs at the end of each article — exactly like real exam questions.' },
              { icon: '🎯', title: 'Exam Tags', desc: 'Every story is tagged with the exams where it is most likely to appear. Focus accordingly.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="font-semibold mb-1 font-heading">{item.title}</div>
                  <p className="text-primary-700 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

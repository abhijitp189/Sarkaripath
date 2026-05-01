'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { guides } from '@/lib/exams-data';

// ─── Phase configuration ───────────────────────────────────────────────────
const phases = [
  {
    id: 'phase-1',
    number: '01',
    label: 'Phase 1',
    title: 'Getting Started',
    subtitle: "Before you open a single book, understand the landscape. Know which exams suit you, what the rules are, and what papers you need.",
    categories: ['Getting Started', 'Eligibility', 'Documents'],
    accentClass: 'border-primary-500',
    badgeClass: 'bg-primary-100 text-primary-700',
    numberBg: 'bg-primary-500',
    leftBorderClass: 'border-l-primary-500',
    iconPath: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
  },
  {
    id: 'phase-2',
    number: '02',
    label: 'Phase 2',
    title: 'Master the Process',
    subtitle: "Dive into strategy. Learn how to fill forms correctly, build study plans, and optimise your preparation — whether you're a student or working professional.",
    categories: ['Application', 'Preparation', 'Strategy'],
    accentClass: 'border-accent-500',
    badgeClass: 'bg-orange-100 text-orange-700',
    numberBg: 'bg-accent-500',
    leftBorderClass: 'border-l-accent-500',
    iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  },
  {
    id: 'phase-3',
    number: '03',
    label: 'Phase 3',
    title: 'Tools & Resources',
    subtitle: 'Work smarter, not harder. Discover curated free tools, the best YouTube channels, mock test platforms, and everything that top rankers actually use.',
    categories: ['Resources'],
    accentClass: 'border-emerald-500',
    badgeClass: 'bg-emerald-100 text-emerald-700',
    numberBg: 'bg-emerald-600',
    leftBorderClass: 'border-l-emerald-500',
    iconPath: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  },
];

const allCategories = ['All', ...Array.from(new Set(guides.map((g) => g.category)))];
const featuredGuide = guides.find((g) => g.slug === 'how-to-start-government-exam-preparation') ?? guides[0];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Government Exam Preparation Guides — TaiyarHo',
  description: 'Step-by-step preparation guides for Indian government exams.',
  url: 'https://taiyarho.in/guides/',
  numberOfItems: guides.length,
  itemListElement: guides.map((g, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `https://taiyarho.in/guides/${g.slug}`,
    name: g.title,
  })),
};

export default function GuidesPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredGuides = useMemo(() => {
    return guides.filter((g) => {
      const matchesCategory = activeCategory === 'All' || g.category === activeCategory;
      const q = search.trim().toLowerCase();
      const matchesSearch =
        q === '' ||
        g.title.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q) ||
        g.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const isFiltering = search.trim() !== '' || activeCategory !== 'All';

  return (
    <main className="bg-surface-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-main py-12 md:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-primary-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Guides</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-primary-100 text-xs font-heading font-semibold px-3 py-1.5 rounded-full mb-4">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Free · No Login · Updated 2026
            </span>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-4 leading-tight">
              Your Government Exam{' '}
              <span className="text-accent-400">Preparation Roadmap</span>
            </h1>
            <p className="text-primary-200 text-base sm:text-lg leading-relaxed">
              {guides.length} in-depth guides organised into 3 phases — from your very first step to exam-day confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Sticky filter bar */}
      <div className="sticky top-0 z-20 bg-white border-b border-surface-200 shadow-sm">
        <div className="container-main py-3">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <div className="relative flex-1 max-w-sm">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search guides…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-surface-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 bg-surface-50 text-surface-800 placeholder-surface-400"
              />
            </div>
            <nav aria-label="Filter by category" className="flex items-center gap-2 overflow-x-auto">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 text-xs font-heading font-semibold px-3 py-1.5 rounded-full transition-all border ${
                    activeCategory === cat
                      ? 'bg-primary-500 text-white border-primary-500 shadow-sm'
                      : 'bg-white text-surface-600 border-surface-200 hover:border-primary-300 hover:text-primary-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="container-main py-10">

        {/* Featured guide banner — shown only when not filtering */}
        {!isFiltering && (
          <div className="mb-12">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-50 to-blue-50 border-2 border-primary-200 p-6 sm:p-8">
              <div className="absolute -right-8 -top-8 w-40 h-40 bg-primary-100 rounded-full opacity-60 pointer-events-none" />
              <div className="relative flex flex-col sm:flex-row sm:items-center gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-primary-500 rounded-2xl flex items-center justify-center shadow-md">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="badge-primary text-xs font-heading font-semibold">⭐ Start Here</span>
                    <span className="text-xs text-surface-400 font-medium">{featuredGuide.readTime}</span>
                  </div>
                  <h2 className="font-heading font-bold text-xl text-surface-900 mb-1 leading-snug">
                    {featuredGuide.title}
                  </h2>
                  <p className="text-sm text-surface-600 leading-relaxed line-clamp-2">
                    {featuredGuide.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link href={`/guides/${featuredGuide.slug}`} className="btn-primary inline-flex items-center gap-2 text-sm whitespace-nowrap">
                    Read Guide
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filtered results view */}
        {isFiltering ? (
          <section aria-label="Search results">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading font-bold text-xl text-surface-900">
                {filteredGuides.length === 0 ? 'No guides found' : `${filteredGuides.length} guide${filteredGuides.length === 1 ? '' : 's'} found`}
              </h2>
              <button
                onClick={() => { setSearch(''); setActiveCategory('All'); }}
                className="text-sm text-primary-500 hover:text-primary-700 font-medium transition-colors"
              >
                Clear filters ×
              </button>
            </div>
            {filteredGuides.length === 0 ? (
              <div className="card p-12 text-center">
                <p className="font-heading font-semibold text-surface-700 mb-1">No guides match your search</p>
                <p className="text-sm text-surface-500">Try a different keyword or browse all guides below</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredGuides.map((guide) => (
                  <GuideCard key={guide.slug} guide={guide} />
                ))}
              </div>
            )}
          </section>
        ) : (
          /* Roadmap phases */
          <div className="space-y-14">
            {phases.map((phase) => {
              const phaseGuides = guides.filter((g) => phase.categories.includes(g.category));
              if (phaseGuides.length === 0) return null;
              return (
                <section key={phase.id} id={phase.id} aria-labelledby={`${phase.id}-heading`}>
                  {/* Phase header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-2xl ${phase.numberBg} text-white flex items-center justify-center shadow-md`}>
                      <span className="font-heading font-bold text-base leading-none">{phase.number}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-heading font-semibold px-2.5 py-0.5 rounded-full ${phase.badgeClass}`}>
                          {phase.label}
                        </span>
                      </div>
                      <h2 id={`${phase.id}-heading`} className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-1">
                        {phase.title}
                      </h2>
                      <p className="text-sm text-surface-500 leading-relaxed max-w-2xl">
                        {phase.subtitle}
                      </p>
                    </div>
                    <div className="hidden sm:flex flex-shrink-0 items-center bg-surface-100 border border-surface-200 px-3 py-1.5 rounded-full text-xs font-heading font-semibold text-surface-600">
                      {phaseGuides.length} guide{phaseGuides.length !== 1 ? 's' : ''}
                    </div>
                  </div>

                  {/* Guide cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:ml-16">
                    {phaseGuides.map((guide) => (
                      <GuideCard
                        key={guide.slug}
                        guide={guide}
                        leftBorderClass={phase.leftBorderClass}
                        badgeClass={phase.badgeClass}
                      />
                    ))}
                  </div>
                </section>
              );
            })}

            {/* Jump to phase nav */}
            <section aria-label="Jump to phase" className="border-t border-surface-200 pt-10">
              <h2 className="font-heading font-semibold text-surface-700 text-sm uppercase tracking-wider mb-4">Jump to Phase</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {phases.map((phase) => (
                  <a key={phase.id} href={`#${phase.id}`} className="card p-4 group flex items-center gap-3 hover:border-primary-300 hover:shadow-md transition">
                    <div className={`flex-shrink-0 w-9 h-9 rounded-xl ${phase.numberBg} text-white flex items-center justify-center text-sm font-heading font-bold`}>
                      {phase.number}
                    </div>
                    <div className="min-w-0">
                      <p className="font-heading font-semibold text-surface-800 group-hover:text-primary-500 transition-colors text-sm truncate">{phase.title}</p>
                      <p className="text-xs text-surface-400">{guides.filter((g) => phase.categories.includes(g.category)).length} guides</p>
                    </div>
                    <svg className="w-4 h-4 text-surface-400 group-hover:text-primary-400 ml-auto flex-shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary-900 to-primary-700 text-white p-8 sm:p-10 text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-3">Ready to Check Your Eligibility?</h2>
          <p className="text-primary-200 mb-6 max-w-lg mx-auto">
            Find out exactly which exams you qualify for right now — based on your age, qualification, and category.
          </p>
          <Link href="/tools/age-calculator" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-heading font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Use the Free Eligibility Checker
          </Link>
        </div>
      </div>
    </main>
  );
}

// ─── Guide Card ─────────────────────────────────────────────────────────────
function GuideCard({
  guide,
  leftBorderClass,
  badgeClass,
}: {
  guide: { slug: string; title: string; description: string; category: string; readTime: string };
  leftBorderClass?: string;
  badgeClass?: string;
}) {
  const borderColor = leftBorderClass ?? (
    guide.category === 'Resources' ? 'border-l-emerald-500' :
    guide.category === 'Application' || guide.category === 'Strategy' ? 'border-l-accent-500' :
    'border-l-primary-500'
  );
  const badge = badgeClass ?? (
    guide.category === 'Resources' ? 'bg-emerald-100 text-emerald-700' :
    guide.category === 'Application' || guide.category === 'Strategy' ? 'bg-orange-100 text-orange-700' :
    'bg-primary-100 text-primary-700'
  );

  return (
    <article>
      <Link
        href={`/guides/${guide.slug}`}
        className={`card p-5 group flex flex-col border-l-4 ${borderColor} hover:border-primary-300 hover:-translate-y-1 transition-all duration-200 h-full`}
      >
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-heading font-semibold px-2.5 py-0.5 rounded-full ${badge}`}>
            {guide.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-surface-400 font-medium">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {guide.readTime}
          </span>
        </div>
        <h3 className="font-heading font-semibold text-base text-surface-900 group-hover:text-primary-500 transition-colors mb-2 leading-snug flex-1">
          {guide.title}
        </h3>
        <p className="text-xs text-surface-500 leading-relaxed line-clamp-3 mb-4">
          {guide.description}
        </p>
        <div className="flex items-center gap-1 text-sm font-medium text-primary-500 group-hover:text-primary-600 mt-auto pt-3 border-t border-surface-100">
          Read Guide
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </article>
  );
}

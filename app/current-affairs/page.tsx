'use client';

import Link from 'next/link';
import { currentAffairsPosts } from '@/lib/current-affairs-data';

const examBadgeColors: Record<string, string> = {
  UPSC: 'bg-purple-50 text-purple-600 border border-purple-200',
  'SSC CGL': 'bg-blue-50 text-blue-600 border border-blue-200',
  'IBPS PO': 'bg-emerald-50 text-emerald-600 border border-emerald-200',
  'RRB NTPC': 'bg-orange-50 text-orange-600 border border-orange-200',
  'SBI PO': 'bg-teal-50 text-teal-600 border border-teal-200',
  'State PSC': 'bg-yellow-50 text-yellow-700 border border-yellow-200',
};

export default function CurrentAffairsPage() {
  /* Sort posts by publishedDate descending — newest first */
  const sortedPosts = [...currentAffairsPosts].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  const latest = sortedPosts[0];
  const olderPosts = sortedPosts.slice(1);

  return (
    <div className="bg-surface-50 min-h-screen">

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-surface-200">
        <div className="container-main py-10 sm:py-12">
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
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-surface-900 mb-3 leading-tight">
              Weekly Current Affairs{' '}
              <span className="text-primary-500">2026</span>
            </h1>
            <p className="text-surface-500 leading-relaxed max-w-2xl">
              Exam-oriented weekly digests with interactive quizzes — simplified for UPSC, SSC, Banking, and Railway aspirants. Published every Monday.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-5 mt-6 text-sm">
              {[
                { icon: '📰', value: `${currentAffairsPosts.length} Weeks`, label: 'covered' },
                { icon: '🧠', value: 'Quiz', label: 'every issue' },
                { icon: '📄', value: 'Free PDF', label: 'download' },
                { icon: '🎯', value: '10+ Exams', label: 'tagged' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="text-lg">{s.icon}</span>
                  <div>
                    <span className="font-heading font-bold text-surface-900">{s.value}</span>{' '}
                    <span className="text-surface-400 text-xs">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container-main py-8 sm:py-10">

        {/* ── Latest Issue ──────────────────────────────────────────── */}
        {latest && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-primary-500">
                ★ Latest Issue
              </span>
            </div>
            <Link
              href={`/current-affairs/${latest.slug}/`}
              className="block rounded-2xl bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 p-6 sm:p-8 group hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1 text-xs font-heading font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-accent-500 text-white">
                  🆕 New
                </span>
                {latest.weekRange && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20 text-white">
                    {latest.weekRange}
                  </span>
                )}
                {(latest.newsItems || latest.quiz) && (
                  <span className="text-xs text-primary-200">
                    {latest.newsItems ? `${latest.newsItems.length} stories` : ''}
                    {latest.newsItems && latest.quiz ? ' · ' : ''}
                    {latest.quiz ? `${latest.quiz.length} quiz Qs` : ''}
                  </span>
                )}
              </div>

              <h2 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-white mb-3 leading-snug group-hover:text-primary-100 transition-colors">
                Weekly Current Affairs: {latest.dateRange}
              </h2>
              <p className="text-primary-200 leading-relaxed mb-5 max-w-2xl text-sm sm:text-base">
                {latest.excerpt}
              </p>

              {/* Preview headlines */}
              {latest.newsItems && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                  {latest.newsItems.slice(0, 4).map((item) => (
                    <div key={item.id} className="flex items-start gap-2 text-sm text-primary-100">
                      <span className="text-accent-400 mt-0.5 flex-shrink-0">▸</span>
                      <span>{item.headline}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors group-hover:bg-white/20">
                  Read &amp; Take Quiz
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {latest.targetExams.slice(0, 4).map((exam) => (
                    <span key={exam} className={`text-xs px-2 py-0.5 rounded font-medium ${examBadgeColors[exam] || 'bg-white/10 text-primary-100'}`}>
                      {exam}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* ── Previous Weeks ───────────────────────────────────────── */}
        {olderPosts.length > 0 && (
          <div>
            <h2 className="font-heading font-bold text-xl text-surface-900 mb-5">
              Previous Weeks
            </h2>

            <div className="space-y-4">
              {olderPosts.map((post) => {
                const hasRichContent = !!post.newsItems && post.newsItems.length > 0;
                const storyCount = post.newsItems?.length ?? 0;
                const quizCount = post.quiz?.length ?? post.quizQuestions?.length ?? 0;

                return (
                  <Link
                    key={post.slug}
                    href={`/current-affairs/${post.slug}/`}
                    className="card p-5 sm:p-6 group hover:border-primary-300 flex flex-col sm:flex-row sm:items-start gap-4 transition-all"
                  >
                    {/* Date block */}
                    <div className="flex-shrink-0 sm:w-36 flex sm:flex-col items-center sm:items-start gap-2 sm:gap-1">
                      <div className="text-sm font-heading font-bold text-primary-600">
                        {post.dateRange}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-surface-400">
                        {storyCount > 0 && <span>{storyCount} stories</span>}
                        {storyCount > 0 && quizCount > 0 && <span>·</span>}
                        {quizCount > 0 && <span>{quizCount} MCQs</span>}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-semibold text-surface-900 group-hover:text-primary-500 transition-colors mb-2 leading-snug">
                        {post.title}
                      </h3>

                      {/* Preview bullets */}
                      {hasRichContent ? (
                        <div className="space-y-1 mb-3">
                          {post.newsItems!.slice(0, 3).map((item) => (
                            <div key={item.id} className="flex items-start gap-1.5 text-xs text-surface-500">
                              <span className="text-primary-400 mt-0.5 flex-shrink-0">▸</span>
                              <span className="line-clamp-1">{item.headline}</span>
                            </div>
                          ))}
                          {post.newsItems!.length > 3 && (
                            <span className="text-xs text-primary-500 font-medium pl-3">
                              +{post.newsItems!.length - 3} more →
                            </span>
                          )}
                        </div>
                      ) : post.keyPoints ? (
                        <div className="space-y-1 mb-3">
                          {post.keyPoints.slice(0, 3).map((point, i) => (
                            <div key={i} className="flex items-start gap-1.5 text-xs text-surface-500">
                              <span className="text-primary-400 mt-0.5 flex-shrink-0">▸</span>
                              <span className="line-clamp-1">{point}</span>
                            </div>
                          ))}
                          {(post.keyPoints?.length ?? 0) > 3 && (
                            <span className="text-xs text-primary-500 font-medium pl-3">
                              +{(post.keyPoints?.length ?? 0) - 3} more →
                            </span>
                          )}
                        </div>
                      ) : null}

                      {/* Exam badges + CTA */}
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <div className="flex flex-wrap gap-1.5">
                          {post.targetExams.slice(0, 4).map((exam) => (
                            <span key={exam} className={`text-xs px-2 py-0.5 rounded font-medium ${examBadgeColors[exam] || 'bg-surface-100 text-surface-500'}`}>
                              {exam}
                            </span>
                          ))}
                        </div>
                        <span className="text-sm font-medium text-primary-500 group-hover:text-primary-600 flex items-center gap-1 flex-shrink-0">
                          {quizCount > 0 ? 'Read & Quiz' : 'Read More'}
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Coming Soon ─────────────────────────────────────────── */}
        <div className="mt-10 card p-8 text-center border-dashed border-2 border-surface-300">
          <div className="text-4xl mb-3">📅</div>
          <h3 className="font-heading font-bold text-lg text-surface-700 mb-2">New roundup every Monday</h3>
          <p className="text-sm text-surface-500 max-w-lg mx-auto">
            We publish a fresh weekly current affairs digest every Monday morning — covering everything
            relevant for UPSC, SSC, Banking, and Railway exams. Bookmark this page!
          </p>
        </div>

        {/* ── SEO Info Box ─────────────────────────────────────────── */}
        <div className="mt-10 bg-primary-50 border border-primary-100 rounded-2xl p-6">
          <h2 className="font-heading font-bold text-lg text-primary-900 mb-3">
            How to Use This Section
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-primary-800">
            {[
              { icon: '📌', title: 'Key Points first', desc: 'Each issue opens with 8–10 bullet facts — review these quickly before any exam.' },
              { icon: '🧠', title: 'Interactive Quiz', desc: 'Test yourself with 20 MCQs — instant feedback, explanations, and score tracking.' },
              { icon: '🎯', title: 'Exam Tags', desc: 'Every story is tagged with the exams where it is most likely to appear. Focus accordingly.' },
              { icon: '📄', title: 'Download Free PDF', desc: 'Click "Download PDF" on any weekly page to save it for offline revision — no account needed.' },
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

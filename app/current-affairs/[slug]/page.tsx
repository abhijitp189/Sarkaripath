import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { currentAffairsPosts } from '@/lib/current-affairs-data';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return currentAffairsPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = currentAffairsPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Not Found | TaiyarHo' };
  const title = `${post.title} | TaiyarHo Current Affairs`;
  const description = post.excerpt;
  return {
    title,
    description,
    openGraph: { title, description, siteName: 'TaiyarHo', locale: 'en_IN', type: 'article' },
    alternates: { canonical: `https://taiyarho.in/current-affairs/${post.slug}` },
  };
}

const categoryColors: Record<string, string> = {
  National: 'bg-blue-100 text-blue-700',
  International: 'bg-purple-100 text-purple-700',
  Economy: 'bg-emerald-100 text-emerald-700',
  'Sci-Tech': 'bg-orange-100 text-orange-700',
  Sports: 'bg-red-100 text-red-700',
};

const examBadgeColors: Record<string, string> = {
  UPSC: 'bg-purple-50 text-purple-600 border border-purple-200',
  'SSC CGL': 'bg-blue-50 text-blue-600 border border-blue-200',
  'IBPS PO': 'bg-emerald-50 text-emerald-600 border border-emerald-200',
  'RRB NTPC': 'bg-orange-50 text-orange-600 border border-orange-200',
  'SBI PO': 'bg-teal-50 text-teal-600 border border-teal-200',
  'State PSC': 'bg-yellow-50 text-yellow-700 border border-yellow-200',
};

function renderContent(markdown: string) {
  const lines = markdown.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mt-10 mb-4 pb-2 border-b border-surface-200 flex items-center gap-2">
          <span className="w-1 h-6 bg-primary-500 rounded-full inline-block flex-shrink-0" />
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('**') && line.endsWith('**') && !line.startsWith('**[')) {
      elements.push(
        <h3 key={key++} className="text-base font-heading font-bold text-surface-800 mt-6 mb-2">
          {line.replace(/\*\*/g, '')}
        </h3>
      );
    } else if (line.startsWith('---')) {
      elements.push(<hr key={key++} className="border-surface-200 my-6" />);
    } else if (line.startsWith('*Why it matters')) {
      elements.push(
        <div key={key++} className="mt-3 mb-2 flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3">
          <span className="text-amber-500 text-base flex-shrink-0">🎯</span>
          <p className="text-sm text-amber-800 leading-relaxed">{line.replace(/^\*/, '').replace(/\*$/, '')}</p>
        </div>
      );
    } else if (line.trim() === '') {
      elements.push(<div key={key++} className="h-2" />);
    } else {
      // Inline bold: replace **text** with <strong>text</strong>
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      const rendered = parts.map((part, pi) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={pi} className="font-semibold text-surface-800">{part.slice(2, -2)}</strong>;
        }
        return part;
      });
      elements.push(
        <p key={key++} className="text-base text-surface-700 leading-loose mb-0">
          {rendered}
        </p>
      );
    }
  }
  return elements;
}

export default function CurrentAffairsDetailPage({ params }: Props) {
  const post = currentAffairsPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const otherPosts = currentAffairsPosts.filter((p) => p.slug !== post.slug);

  return (
    <div className="bg-surface-50 min-h-screen">
      <div className="container-main py-10">

        {/* Breadcrumb */}
        <nav className="text-sm text-surface-500 mb-6">
          <Link href="/" className="hover:text-primary-500">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/current-affairs" className="hover:text-primary-500">Current Affairs</Link>
          <span className="mx-2">›</span>
          <span className="text-surface-800">{post.dateRange}</span>
        </nav>

        <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 max-w-6xl">

          {/* ── Main Article ─────────────────────────────────────────── */}
          <article>

            {/* Dark hero banner */}
            <div className="bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900 rounded-2xl p-8 mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className={`text-xs font-heading font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] || 'bg-white/20 text-white'}`}>
                  {post.category}
                </span>
                {post.isFeatured && (
                  <span className="text-xs font-heading font-bold px-2.5 py-1 rounded-full bg-accent-500 text-white uppercase tracking-wide">
                    🆕 Latest
                  </span>
                )}
                <span className="text-xs text-surface-400">📅 {post.dateRange}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-snug mb-4">
                {post.title}
              </h1>
              <p className="text-surface-300 leading-relaxed mb-4">{post.excerpt}</p>
              <p className="text-xs text-surface-500">Published: {post.publishedDate} · TaiyarHo Editorial</p>
            </div>

            {/* Key Points */}
            {post.keyPoints && (
              <div className="card p-6 mb-8 border-l-4 border-primary-500">
                <h2 className="font-heading font-bold text-lg text-surface-900 mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm flex-shrink-0">📌</span>
                  Key Points at a Glance
                </h2>
                <ul className="space-y-2.5">
                  {post.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-surface-700 leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-primary-500 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-heading font-bold">
                        {i + 1}
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Target Exams */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="text-xs font-heading font-semibold text-surface-500 uppercase tracking-wide">Relevant for:</span>
              {post.targetExams.map((exam) => (
                <span key={exam} className={`text-xs px-2.5 py-1 rounded-full font-medium ${examBadgeColors[exam] || 'bg-surface-100 text-surface-600'}`}>
                  {exam}
                </span>
              ))}
            </div>

            {/* Main Content */}
            {post.content && (
              <div className="prose-custom mb-10">
                {renderContent(post.content)}
              </div>
            )}

            {/* Quick Quiz */}
            {post.quizQuestions && post.quizQuestions.length > 0 && (
              <div className="card p-6 mb-8 bg-primary-900 border-0">
                <h2 className="font-heading font-bold text-xl text-white mb-2 flex items-center gap-2">
                  <span className="text-2xl">🧠</span>
                  Quick Quiz
                </h2>
                <p className="text-primary-300 text-sm mb-6">Test yourself — based on this week's news</p>
                <div className="space-y-6">
                  {post.quizQuestions.map((q, qi) => (
                    <div key={qi} className="bg-white/5 rounded-xl p-5">
                      <p className="font-heading font-semibold text-white mb-4 leading-snug">
                        Q{qi + 1}. {q.question}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        {q.options.map((opt, oi) => {
                          const letter = ['A', 'B', 'C', 'D'][oi];
                          const isCorrect = opt === q.answer;
                          return (
                            <div
                              key={oi}
                              className={`flex items-center gap-2.5 text-sm px-3 py-2.5 rounded-lg ${
                                isCorrect
                                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                  : 'bg-white/5 text-primary-200 border border-white/10'
                              }`}
                            >
                              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-heading font-bold flex-shrink-0 ${
                                isCorrect ? 'bg-emerald-500 text-white' : 'bg-white/10 text-primary-300'
                              }`}>
                                {isCorrect ? '✓' : letter}
                              </span>
                              {opt}
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                        <span>✅</span>
                        <span>Correct Answer: <strong>{q.answer}</strong></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between pt-6 border-t border-surface-200">
              <Link href="/current-affairs" className="btn-outline text-sm inline-flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                All Current Affairs
              </Link>
              <span className="text-xs text-surface-400">No paywalls. No spam. 100% Free.</span>
            </div>

          </article>

          {/* ── Sidebar ───────────────────────────────────────────────── */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">

              {/* Quick Jump */}
              <div className="card p-5">
                <div className="text-xs font-heading font-semibold uppercase tracking-wide text-surface-500 mb-3">📖 In This Issue</div>
                <ul className="space-y-1.5">
                  {['Key Points at a Glance', 'National Affairs', 'International Affairs', 'Economy', 'Sports', 'Appointments', 'Quick Quiz'].map((label) => (
                    <li key={label}>
                      <a href={`#`} className="block py-1.5 px-3 rounded-lg text-sm text-surface-500 hover:text-primary-500 hover:bg-primary-50 transition-colors">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Eligibility Checker CTA */}
              <div className="card p-5 bg-primary-50 border-primary-200">
                <h3 className="font-heading font-semibold text-primary-800 mb-2 text-sm">🧮 Eligibility Checker</h3>
                <p className="text-xs text-primary-700 mb-3">Enter your details — see every exam you qualify for, with age relaxation applied automatically.</p>
                <Link href="/tools/eligibility-checker" className="btn-primary text-xs w-full text-center block">
                  Check Eligibility →
                </Link>
              </div>

              {/* Other Issues */}
              {otherPosts.length > 0 && (
                <div className="card p-5">
                  <h3 className="font-heading font-semibold text-surface-800 mb-3 text-sm">Previous Issues</h3>
                  <div className="space-y-3">
                    {otherPosts.slice(0, 3).map((p) => (
                      <Link
                        key={p.slug}
                        href={`/current-affairs/${p.slug}`}
                        className="block group"
                      >
                        <div className="text-xs text-surface-400 mb-0.5">{p.dateRange}</div>
                        <div className="text-sm text-surface-700 group-hover:text-primary-500 transition-colors leading-snug font-medium">
                          {p.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link href="/current-affairs" className="block mt-4 text-xs font-medium text-primary-500 hover:text-primary-600">
                    View all issues →
                  </Link>
                </div>
              )}

              {/* Free disclaimer */}
              <div className="card p-4 text-center bg-emerald-50 border-emerald-200">
                <div className="text-2xl mb-1">🔓</div>
                <p className="text-xs text-emerald-700 font-medium font-heading">No paywalls, no spam.</p>
                <p className="text-xs text-emerald-600 mt-0.5">Always 100% free.</p>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

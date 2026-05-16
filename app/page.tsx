import Link from 'next/link';
import { Metadata } from 'next';
import { exams, examCategories, guides, allExams } from '@/lib/exams-data';
import { blogPosts } from '@/lib/blog-data';
import { AnimatedExamText, CountingStats } from '@/components/HeroAnimations';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.taiyarho.in/' },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TaiyarHo',
  url: 'https://www.taiyarho.in',
  logo: 'https://www.taiyarho.in/logo.svg',
  description: 'Free comprehensive guide for Indian government exam preparation. Syllabus, study plans, best books, and free resources for UPSC, SSC, Banking, Railway, and all government exams.',
  sameAs: [],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'TaiyarHo',
  url: 'https://www.taiyarho.in',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.taiyarho.in/exams/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

// Color coding per exam category (used in Browse by Category section)
const categoryColors: Record<string, { iconBg: string; iconText: string; badgeBg: string; badgeText: string; hoverBorder: string }> = {
  'UPSC':      { iconBg: 'bg-purple-100', iconText: 'text-purple-600', badgeBg: 'bg-purple-100', badgeText: 'text-purple-700', hoverBorder: 'hover:border-purple-300' },
  'SSC':       { iconBg: 'bg-blue-100',   iconText: 'text-blue-600',   badgeBg: 'bg-blue-100',   badgeText: 'text-blue-700',   hoverBorder: 'hover:border-blue-300'   },
  'Banking':   { iconBg: 'bg-emerald-100',iconText: 'text-emerald-600',badgeBg: 'bg-emerald-100',badgeText: 'text-emerald-700',hoverBorder: 'hover:border-emerald-300'},
  'Railway':   { iconBg: 'bg-orange-100', iconText: 'text-orange-600', badgeBg: 'bg-orange-100', badgeText: 'text-orange-700', hoverBorder: 'hover:border-orange-300' },
  'Defence':   { iconBg: 'bg-red-100',    iconText: 'text-red-600',    badgeBg: 'bg-red-100',    badgeText: 'text-red-700',    hoverBorder: 'hover:border-red-300'    },
  'State PSC': { iconBg: 'bg-yellow-100', iconText: 'text-yellow-700', badgeBg: 'bg-yellow-100', badgeText: 'text-yellow-700', hoverBorder: 'hover:border-yellow-300' },
  'Teaching':  { iconBg: 'bg-pink-100',   iconText: 'text-pink-600',   badgeBg: 'bg-pink-100',   badgeText: 'text-pink-700',   hoverBorder: 'hover:border-pink-300'   },
  'Police':    { iconBg: 'bg-indigo-100', iconText: 'text-indigo-600', badgeBg: 'bg-indigo-100', badgeText: 'text-indigo-700', hoverBorder: 'hover:border-indigo-300' },
};

// Color coding for blog category top-border accents
const blogCategoryColors: Record<string, { bg: string; text: string; topBorder: string }> = {
  'SSC':         { bg: 'bg-blue-100',   text: 'text-blue-700',   topBorder: 'border-t-[3px] border-blue-400'   },
  'UPSC':        { bg: 'bg-purple-100', text: 'text-purple-700', topBorder: 'border-t-[3px] border-purple-400' },
  'Banking':     { bg: 'bg-emerald-100',text: 'text-emerald-700',topBorder: 'border-t-[3px] border-emerald-400'},
  'Railway':     { bg: 'bg-orange-100', text: 'text-orange-700', topBorder: 'border-t-[3px] border-orange-400' },
  'Defence':     { bg: 'bg-red-100',    text: 'text-red-700',    topBorder: 'border-t-[3px] border-red-400'    },
  'State PSC':   { bg: 'bg-yellow-100', text: 'text-yellow-700', topBorder: 'border-t-[3px] border-yellow-400' },
  'Teaching':    { bg: 'bg-pink-100',   text: 'text-pink-700',   topBorder: 'border-t-[3px] border-pink-400'   },
  'Police':      { bg: 'bg-indigo-100', text: 'text-indigo-700', topBorder: 'border-t-[3px] border-indigo-400' },
  'Preparation': { bg: 'bg-amber-100',  text: 'text-amber-700',  topBorder: 'border-t-[3px] border-amber-400'  },
  'Career':      { bg: 'bg-teal-100',   text: 'text-teal-700',   topBorder: 'border-t-[3px] border-teal-400'   },
};

// Sort blog posts by publishedDate descending so the most recently published appear first
const sortedBlogPosts = [...blogPosts].sort(
  (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
);

// Feature list for "Why TaiyarHo" — each with a coloured icon background
const features = [
  { icon: '🆓', iconBg: 'bg-blue-100',    title: '100% Free Forever',      description: 'No hidden charges, no premium plans, no login walls. Every piece of information is freely accessible.' },
  { icon: '🎯', iconBg: 'bg-orange-100',  title: 'Focused & Clutter-Free', description: 'Clean, ad-minimal design. No pop-ups, no spam, no confusing navigation. Just the information you need.' },
  { icon: '📋', iconBg: 'bg-purple-100',  title: 'Complete Study Plans',    description: 'Month-by-month preparation roadmaps for every exam. Know exactly what to study and when.' },
  { icon: '📚', iconBg: 'bg-emerald-100', title: 'Curated Free Resources',  description: 'Handpicked YouTube channels, websites, Telegram groups, and free PDFs. No paid course promotions.' },
  { icon: '✅', iconBg: 'bg-green-100',   title: 'Verified Information',    description: 'All syllabus, eligibility, and exam pattern data cross-verified with official sources.' },
  { icon: '📱', iconBg: 'bg-indigo-100',  title: 'Mobile Friendly',         description: 'Designed for mobile-first reading. Study and browse comfortably on your phone anytime.' },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />

      {/* ── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-800 text-white overflow-hidden" style={{ minHeight: '520px' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
        </div>
        <div className="absolute right-0 bottom-0 hidden lg:block pointer-events-none" style={{ width: '55%', height: '100%' }}>
          <img
            src="/students.png"
            alt="Students preparing for government exams"
            style={{ position: 'absolute', bottom: 0, right: 0, height: '100%', width: 'auto', maxWidth: 'none' }}
          />
        </div>
        <div className="container-main relative py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="relative z-10">
              <div
                className="rounded-2xl p-7 sm:p-8"
                style={{ background: 'rgba(10,30,79,0.55)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-sm font-medium mb-5">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  100% Free – No Login Required
                </div>
                <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-5 text-white" style={{ lineHeight: '1.25' }}>
                  Your Complete Guide
                  <br />
                  <span className="block mt-3">to <AnimatedExamText /></span>
                </h1>
                <p className="text-base sm:text-lg leading-relaxed mb-7 max-w-xl" style={{ color: 'rgba(255,255,255,0.92)' }}>
                  Syllabus, study plans, best books, and free resources for UPSC, SSC, Banking, Railway, and all major government exams. Everything in one place.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/exams" className="inline-flex items-center px-7 py-3.5 bg-white text-primary-600 font-heading font-bold rounded-xl hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl active:scale-[0.98] text-sm">
                    Explore All Exams
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </Link>
                  <Link href="/tools/eligibility-checker" className="inline-flex items-center px-7 py-3.5 border-2 border-white/40 text-white font-heading font-semibold rounded-xl hover:bg-white/10 transition-all text-sm">
                    Check Your Eligibility
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>
          <CountingStats />
        </div>
      </section>

      {/* ── Browse by Category ───────────────────────────────────────────── */}
      <section className="container-main py-16">
        <div className="text-center mb-10">
          <h2 className="section-title">Browse by Category</h2>
          <p className="section-subtitle mt-2">Choose your exam category to find detailed preparation guides</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {examCategories.map((cat) => {
            const count = allExams.filter(e => e.category === cat.name).length;
            const c = categoryColors[cat.name] ?? { iconBg: 'bg-surface-100', iconText: 'text-surface-600', badgeBg: 'bg-surface-100', badgeText: 'text-surface-600', hoverBorder: 'hover:border-primary-300' };
            return (
              <Link
                key={cat.name}
                href={`/exams?category=${cat.name}`}
                className={`card p-5 text-center group transition ${c.hoverBorder}`}
              >
                <div className={`w-14 h-14 ${c.iconBg} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3 group-hover:scale-105 transition-transform`}>
                  {cat.icon}
                </div>
                <h3 className="font-heading font-semibold text-surface-800 group-hover:text-primary-500 transition-colors text-sm sm:text-base">{cat.name}</h3>
                <p className="text-xs text-surface-400 mt-1 leading-tight">{cat.description}</p>
                <span className={`inline-block mt-3 px-2.5 py-0.5 rounded-full text-xs font-heading font-semibold ${c.badgeBg} ${c.badgeText}`}>
                  {count} exams
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── Most Popular Exams ────────────────────────────────────────────── */}
      <section className="bg-surface-100 py-16">
        <div className="container-main">
          <h2 className="section-title">Most Popular Exams</h2>
          <p className="section-subtitle mb-10">Detailed preparation guides with syllabus, books, and study plans</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exams.map((exam) => (
              <Link key={exam.slug} href={`/exams/${exam.slug}`} className="card p-6 group flex flex-col hover:border-primary-300">
                <div className="flex items-start justify-between mb-3">
                  <span className="badge badge-primary">{exam.category}</span>
                  <span className="badge badge-green">{exam.level}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-surface-900 group-hover:text-primary-500 transition-colors mb-2">
                  {exam.shortName}
                </h3>
                <p className="text-sm text-surface-500 leading-relaxed mb-4 flex-1">
                  {exam.description.substring(0, 140)}...
                </p>
                <div className="space-y-2 text-sm text-surface-600">
                  <div className="flex justify-between">
                    <span>Conducting Body</span>
                    <span className="font-medium text-surface-800">{exam.conductingBody.split(' ').slice(0, 3).join(' ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vacancies</span>
                    <span className="font-medium text-surface-800">{exam.avgVacancies.split(' ')[0]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Salary Range</span>
                    <span className="font-medium text-emerald-600">{exam.salaryRange.split('–')[0].trim()}</span>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-surface-100">
                  <span className="text-sm font-medium text-primary-500 group-hover:text-primary-600 flex items-center gap-1">
                    View Complete Guide
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/exams" className="btn-outline">View All Exams →</Link>
          </div>
        </div>
      </section>

      {/* ── Why TaiyarHo ─────────────────────────────────────────────────── */}
      {/* Subtle blue-to-white gradient breaks the plain-white monotony */}
      <section className="py-16" style={{ background: 'linear-gradient(160deg, #eff6ff 0%, #ffffff 55%)' }}>
        <div className="container-main">
          <div className="text-center mb-10">
            <h2 className="section-title">Why TaiyarHo?</h2>
            <p className="section-subtitle mt-2">What makes us different from other exam preparation websites</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card p-6 hover:border-primary-200 transition">
                <div className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="font-heading font-semibold text-surface-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-surface-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Preparation Guides ────────────────────────────────────────────── */}
      <section className="bg-surface-100 py-16">
        <div className="container-main">
          <h2 className="section-title">Preparation Guides</h2>
          <p className="section-subtitle mb-10">Step-by-step guides to help you at every stage of your preparation</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.slice(0, 6).map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`} className="card p-6 group hover:border-primary-300 flex flex-col">
                <span className="badge badge-accent mb-3 self-start">{guide.category}</span>
                <h3 className="font-heading font-semibold text-surface-900 group-hover:text-primary-500 transition-colors mb-2 flex-1">
                  {guide.title}
                </h3>
                <p className="text-sm text-surface-500 leading-relaxed mb-4">{guide.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-surface-100">
                  <span className="text-xs text-surface-400">{guide.readTime}</span>
                  <span className="text-xs font-medium text-primary-500 group-hover:text-primary-600 flex items-center gap-1">
                    Read Guide
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/guides" className="btn-outline">View All Guides →</Link>
          </div>
        </div>
      </section>

      {/* ── Latest from the Blog ─────────────────────────────────────────── */}
      {/* sortedBlogPosts ensures the 3 most recently published show first */}
      <section className="container-main py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="section-title">Latest from the Blog</h2>
            <p className="section-subtitle">In-depth guides on syllabus, exam pattern, and preparation strategy</p>
          </div>
          <Link href="/blog" className="hidden sm:inline-flex text-sm font-medium text-primary-500 hover:text-primary-600 items-center gap-1">
            View All Posts →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedBlogPosts.slice(0, 3).map((post) => {
            const catColor = blogCategoryColors[post.category] ?? { bg: 'bg-surface-100', text: 'text-surface-600', topBorder: 'border-t-[3px] border-surface-300' };
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`card group flex flex-col hover:border-primary-300 overflow-hidden ${catColor.topBorder}`}
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-heading font-semibold ${catColor.bg} ${catColor.text}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-surface-400">{post.readTime}</span>
                  </div>
                  <h3 className="font-heading font-bold text-surface-900 group-hover:text-primary-500 transition-colors mb-2 leading-snug flex-1">
                    {post.title}
                  </h3>
                  <p className="text-xs text-surface-500 leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-surface-100">
                    <span className="text-xs text-surface-400">{post.publishedDate}</span>
                    <span className="text-xs font-medium text-primary-500 group-hover:text-primary-600 flex items-center gap-1">
                      Read
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link href="/blog" className="btn-outline">View All Posts →</Link>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="container-main py-16">
        <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-3xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4">Not Sure Which Exam to Choose?</h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-6">
            Use our Eligibility Checker to find out which government exams you qualify for based on your age, qualification, and category.
          </p>
          <Link href="/tools/eligibility-checker" className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-heading font-bold rounded-xl hover:bg-primary-50 transition-all shadow-lg">
            Check Your Eligibility →
          </Link>
        </div>
      </section>

      {/* ── All Government Exams — SEO internal link grid ────────────────── */}
      <section className="bg-surface-50 py-12">
        <div className="container-main">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-2">All Government Exams</h2>
          <p className="text-surface-500 text-sm mb-8">Browse preparation guides for {allExams.length} government exams across 8 categories</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {examCategories.map((cat) => {
              const catExams = allExams.filter(e => e.category === cat.name);
              if (catExams.length === 0) return null;
              return (
                <div key={cat.name}>
                  <h3 className="font-heading font-bold text-surface-800 text-sm mb-3 flex items-center gap-2">
                    <span>{cat.icon}</span> {cat.name} Exams
                  </h3>
                  <ul className="space-y-1.5">
                    {catExams.map((exam) => (
                      <li key={exam.slug}>
                        <Link href={`/exams/${exam.slug}`} className="text-xs text-surface-500 hover:text-primary-500 transition-colors leading-tight block">
                          {exam.name.length > 40 ? exam.name.substring(0, 40) + '…' : exam.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

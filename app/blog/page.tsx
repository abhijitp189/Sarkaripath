import Link from 'next/link';
import { Metadata } from 'next';
import { blogPosts, BlogPost } from '@/lib/blog-data';
import { Calendar, Clock, ChevronRight, TrendingUp, BookOpen, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog – Government Exam Guides, Syllabus & Tips | TaiyarHo',
  description:
    'Free in-depth articles on government exam syllabus, preparation strategy, exam pattern, books, and tips. SSC, UPSC, Banking, Railway and more.',
  alternates: { canonical: 'https://taiyarho.in/blog/' },
};

// ─── JSON-LD Blog Schema ─────────────────────────────────────────────────────
const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'TaiyarHo Blog',
  description:
    'Free in-depth guides on government exam syllabus, exam pattern, preparation strategy, and tips for SSC, Banking, UPSC, and Railway exams.',
  url: 'https://taiyarho.in/blog/',
  publisher: {
    '@type': 'Organization',
    name: 'TaiyarHo',
    url: 'https://taiyarho.in',
  },
  blogPost: blogPosts.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    url: `https://taiyarho.in/blog/${p.slug}/`,
    datePublished: p.publishedDate,
    author: { '@type': 'Organization', name: p.author },
  })),
};

// ─── Category colour palette ─────────────────────────────────────────────────
const categoryConfig: Record<
  string,
  { badge: string; accent: string; dot: string }
> = {
  SSC: {
    badge: 'bg-blue-100 text-blue-700 border border-blue-200',
    accent: 'text-blue-600',
    dot: 'bg-blue-500',
  },
  UPSC: {
    badge: 'bg-purple-100 text-purple-700 border border-purple-200',
    accent: 'text-purple-600',
    dot: 'bg-purple-500',
  },
  Banking: {
    badge: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
    accent: 'text-emerald-600',
    dot: 'bg-emerald-500',
  },
  Railway: {
    badge: 'bg-orange-100 text-orange-700 border border-orange-200',
    accent: 'text-orange-600',
    dot: 'bg-orange-500',
  },
  Defence: {
    badge: 'bg-red-100 text-red-700 border border-red-200',
    accent: 'text-red-600',
    dot: 'bg-red-500',
  },
  'State PSC': {
    badge: 'bg-yellow-100 text-yellow-700 border border-yellow-200',
    accent: 'text-yellow-600',
    dot: 'bg-yellow-500',
  },
  Teaching: {
    badge: 'bg-pink-100 text-pink-700 border border-pink-200',
    accent: 'text-pink-600',
    dot: 'bg-pink-500',
  },
  Police: {
    badge: 'bg-indigo-100 text-indigo-700 border border-indigo-200',
    accent: 'text-indigo-600',
    dot: 'bg-indigo-500',
  },
  Preparation: {
    badge: 'bg-amber-100 text-amber-700 border border-amber-200',
    accent: 'text-amber-600',
    dot: 'bg-amber-500',
  },
};

function getCategoryConfig(category: string) {
  return (
    categoryConfig[category] ?? {
      badge: 'bg-surface-100 text-surface-600 border border-surface-200',
      accent: 'text-surface-600',
      dot: 'bg-surface-400',
    }
  );
}

// ─── Parse date for sorting ──────────────────────────────────────────────────
function parseDate(dateStr: string): number {
  return new Date(dateStr).getTime() || 0;
}

// ─── Sorted posts (newest first) ────────────────────────────────────────────
const sortedPosts = [...blogPosts].sort(
  (a, b) => parseDate(b.publishedDate) - parseDate(a.publishedDate)
);

// ─── All unique categories ───────────────────────────────────────────────────
const allCategories = Array.from(new Set(sortedPosts.map((p) => p.category)));

// ─── Sub-components ──────────────────────────────────────────────────────────

function CategoryBadge({ category }: { category: string }) {
  const cfg = getCategoryConfig(category);
  return (
    <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${cfg.badge}`}>
      {category}
    </span>
  );
}

function TagPill({ tag }: { tag: string }) {
  return (
    <span className="text-xs bg-surface-100 text-surface-500 px-2 py-0.5 rounded-md border border-surface-200">
      {tag}
    </span>
  );
}

// Featured hero card
function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group block relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a1e4f] via-[#0f2d6b] to-[#1a3a80] p-8 md:p-10 border border-white/10 hover:border-white/25 transition-all duration-300 shadow-xl hover:shadow-2xl"
    >
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full border-2 border-white" />
        <div className="absolute -bottom-16 -left-8 w-56 h-56 rounded-full border border-white" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full border border-white" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#f97316] text-white px-3 py-1 rounded-full uppercase tracking-wider">
            <TrendingUp className="w-3 h-3" aria-hidden="true" />
            Featured
          </span>
          <CategoryBadge category={post.category} />
        </div>

        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white leading-snug mb-4 group-hover:text-orange-300 transition-colors">
          {post.title}
        </h2>

        <p className="text-blue-200 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {post.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-white/10 text-blue-200 px-2.5 py-0.5 rounded-md border border-white/15"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-blue-300">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              {post.publishedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              {post.readTime}
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#f97316] group-hover:gap-2.5 transition-all">
            Read Full Article
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}

// Standard article card
function ArticleCard({ post }: { post: BlogPost }) {
  const cfg = getCategoryConfig(post.category);
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group flex flex-col bg-white border border-surface-200 rounded-xl p-5 hover:border-primary-300 hover:shadow-lg transition-all duration-200"
    >
      <div className="flex flex-wrap items-center gap-1.5 mb-3">
        <CategoryBadge category={post.category} />
        {post.tags.slice(0, 2).map((tag) => (
          <TagPill key={tag} tag={tag} />
        ))}
      </div>

      <h3 className={`font-heading font-bold text-base text-surface-900 group-hover:${cfg.accent} transition-colors leading-snug mb-2 line-clamp-2 flex-1`}>
        {post.title}
      </h3>

      <p className="text-xs text-surface-500 leading-relaxed mb-4 line-clamp-2">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between mt-auto pt-3 border-t border-surface-100">
        <div className="flex items-center gap-3 text-xs text-surface-400">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" aria-hidden="true" />
            {post.publishedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" aria-hidden="true" />
            {post.readTime}
          </span>
        </div>
        <span className={`text-xs font-semibold ${cfg.accent} flex items-center gap-0.5 group-hover:gap-1.5 transition-all`}>
          Read
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

// Sidebar latest-post list item
function LatestFeedItem({ post, rank }: { post: BlogPost; rank: number }) {
  const cfg = getCategoryConfig(post.category);
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group flex items-start gap-3 py-3 border-b border-surface-100 last:border-0 hover:bg-surface-50 -mx-3 px-3 rounded-lg transition-colors"
    >
      <span
        className={`flex-shrink-0 w-7 h-7 rounded-lg ${cfg.dot} flex items-center justify-center text-xs font-bold text-white mt-0.5`}
        aria-hidden="true"
      >
        {rank}
      </span>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-surface-800 group-hover:text-primary-600 line-clamp-2 leading-snug transition-colors">
          {post.title}
        </p>
        <div className="flex items-center gap-2 mt-1 text-xs text-surface-400">
          <span>{post.category}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
}

// Category section with grid of cards
function CategorySection({ category, posts }: { category: string; posts: BlogPost[] }) {
  const cfg = getCategoryConfig(category);
  if (posts.length === 0) return null;

  const sectionLabel =
    category === 'SSC' ? 'SSC Guides' :
    category === 'UPSC' ? 'UPSC Guides' :
    category === 'Banking' ? 'Banking Exam Guides' :
    category === 'Railway' ? 'Railway Exam Guides' :
    category === 'Preparation' ? 'Preparation Strategies' :
    `${category} Articles`;

  return (
    <section aria-label={`${category} articles`} className="mb-12">
      <div className="flex items-center gap-3 mb-5">
        <span className={`w-3 h-3 rounded-full flex-shrink-0 ${cfg.dot}`} aria-hidden="true" />
        <h2 className="font-heading font-bold text-lg text-surface-900">{sectionLabel}</h2>
        <div className="flex-1 h-px bg-surface-200" />
        <span className="text-xs text-surface-400 font-medium">
          {posts.length} article{posts.length !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}

// ─── Page Component ──────────────────────────────────────────────────────────
export default function BlogPage() {
  const featuredPost = sortedPosts[0];
  const restPosts = sortedPosts.slice(1);
  const latestFive = sortedPosts.slice(0, 5);

  // Group remaining posts by category (preserving category order of first appearance)
  const postsByCategory: Record<string, BlogPost[]> = {};
  for (const cat of allCategories) {
    const inCat = restPosts.filter((p) => p.category === cat);
    if (inCat.length > 0) postsByCategory[cat] = inCat;
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <div className="bg-surface-50 min-h-screen">
        <div className="container-main py-10">

          {/* Breadcrumb */}
          <nav className="text-sm text-surface-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary-500 transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-surface-800 font-medium">Blog</span>
          </nav>

          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-surface-900 mb-2">
              TaiyarHo <span className="text-primary-600">Blog</span>
            </h1>
            <p className="text-surface-500 text-base max-w-2xl">
              Free, in-depth guides on syllabus, exam pattern, preparation strategy, and salary
              breakdowns for every major Indian government exam.
            </p>
          </div>

          {/* Sticky Category Nav */}
          <div className="sticky top-0 z-20 bg-surface-50/95 backdrop-blur-sm py-3 mb-8 -mx-4 px-4 border-b border-surface-200">
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <span className="flex-shrink-0 text-xs font-semibold text-surface-500 uppercase tracking-wide mr-1">
                Jump to:
              </span>
              {allCategories.map((cat) => {
                const cfg = getCategoryConfig(cat);
                return (
                  <a
                    key={cat}
                    href={`#cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full border transition-opacity hover:opacity-70 ${cfg.badge}`}
                  >
                    {cat}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Main two-column layout */}
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">

            {/* LEFT — articles */}
            <main>

              {/* Featured Hero */}
              {featuredPost && (
                <section aria-label="Featured article" className="mb-10">
                  <FeaturedCard post={featuredPost} />
                </section>
              )}

              {/* Per-category sections */}
              {allCategories.map((cat) => {
                const posts = postsByCategory[cat];
                if (!posts || posts.length === 0) return null;
                return (
                  <div
                    key={cat}
                    id={`cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <CategorySection category={cat} posts={posts} />
                  </div>
                );
              })}

              {/* Coming Soon */}
              <div className="mt-4 rounded-2xl border-2 border-dashed border-surface-300 bg-white p-10 text-center">
                <div className="text-4xl mb-3" aria-hidden="true">✍️</div>
                <h3 className="font-heading font-bold text-lg text-surface-700 mb-2">
                  More Articles Coming Soon
                </h3>
                <p className="text-sm text-surface-500 max-w-md mx-auto">
                  We are working on in-depth guides for UPSC, Railway, Defence, and State PSC
                  exams. Bookmark this page and check back weekly!
                </p>
              </div>
            </main>

            {/* RIGHT — sidebar */}
            <aside className="mt-10 lg:mt-0 space-y-6" aria-label="Blog sidebar">

              {/* Latest Updates */}
              <div className="bg-white border border-surface-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-4 h-4 text-[#f97316]" aria-hidden="true" />
                  <h2 className="font-heading font-bold text-sm text-surface-900 uppercase tracking-wide">
                    Latest Updates
                  </h2>
                </div>
                <div>
                  {latestFive.map((post, i) => (
                    <LatestFeedItem key={post.slug} post={post} rank={i + 1} />
                  ))}
                </div>
              </div>

              {/* Browse by Category */}
              <div className="bg-white border border-surface-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="w-4 h-4 text-primary-500" aria-hidden="true" />
                  <h2 className="font-heading font-bold text-sm text-surface-900 uppercase tracking-wide">
                    Browse by Category
                  </h2>
                </div>
                <div className="space-y-2">
                  {allCategories.map((cat) => {
                    const count = sortedPosts.filter((p) => p.category === cat).length;
                    const cfg = getCategoryConfig(cat);
                    return (
                      <a
                        key={cat}
                        href={`#cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center justify-between py-1.5 group"
                      >
                        <span className="flex items-center gap-2 text-sm text-surface-700 group-hover:text-primary-600 transition-colors">
                          <span className={`w-2 h-2 rounded-full ${cfg.dot}`} aria-hidden="true" />
                          {cat}
                        </span>
                        <span className="text-xs bg-surface-100 text-surface-500 px-2 py-0.5 rounded-full font-medium">
                          {count}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Exam Resources CTA */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl p-5 text-white shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-orange-300" aria-hidden="true" />
                  <h2 className="font-heading font-bold text-sm uppercase tracking-wide text-orange-200">
                    Exam Resources
                  </h2>
                </div>
                <p className="text-blue-200 text-xs mb-4 leading-relaxed">
                  Beyond the blog — use our free tools and exam guides.
                </p>
                <div className="space-y-2">
                  {[
                    { label: 'All 100 Exams', href: '/exams/' },
                    { label: 'Free Resources', href: '/resources/' },
                    { label: 'Eligibility Checker', href: '/tools/age-calculator/' },
                    { label: 'Preparation Guides', href: '/guides/getting-started/' },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between text-sm font-medium text-white/90 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg px-3 py-2 transition-colors"
                    >
                      {link.label}
                      <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>

        </div>
      </div>
    </>
  );
}

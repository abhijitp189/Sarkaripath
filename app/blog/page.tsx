import Link from 'next/link';
import { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog – Government Exam Guides, Syllabus & Tips | TaiyarHo',
  description: 'Free in-depth articles on government exam syllabus, preparation strategy, exam pattern, books, and tips. SSC, UPSC, Banking, Railway and more.',
};

const categoryColors: Record<string, string> = {
  SSC: 'bg-blue-100 text-blue-700',
  UPSC: 'bg-purple-100 text-purple-700',
  Banking: 'bg-emerald-100 text-emerald-700',
  Railway: 'bg-orange-100 text-orange-700',
  Defence: 'bg-red-100 text-red-700',
  'State PSC': 'bg-yellow-100 text-yellow-700',
  Teaching: 'bg-pink-100 text-pink-700',
  Police: 'bg-indigo-100 text-indigo-700',
};

export default function BlogPage() {
  return (
    <div className="container-main py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">Blog</span>
      </nav>

      <div className="max-w-4xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-surface-900 font-heading mb-2">
          TaiyarHo Blog
        </h1>
        <p className="text-surface-500 text-lg mb-10">
          Free in-depth guides on syllabus, exam pattern, preparation strategy, and tips for all major government exams.
        </p>

        {/* Blog Posts Grid */}
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card p-6 group flex flex-col sm:flex-row gap-5 hover:border-primary-300"
            >
              {/* Category Badge & Meta */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] || 'bg-surface-100 text-surface-600'}`}>
                    {post.category}
                  </span>
                  {post.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs bg-surface-100 text-surface-500 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="font-heading font-bold text-xl text-surface-900 group-hover:text-primary-500 transition-colors mb-2 leading-snug">
                  {post.title}
                </h2>

                <p className="text-sm text-surface-500 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs text-surface-400">
                  <span>📅 {post.publishedDate}</span>
                  <span>⏱ {post.readTime}</span>
                  <span>✍️ {post.author}</span>
                </div>
              </div>

              <div className="sm:self-center">
                <span className="text-sm font-medium text-primary-500 group-hover:text-primary-600 flex items-center gap-1 whitespace-nowrap">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming soon notice */}
        <div className="mt-10 card p-8 text-center border-dashed border-2 border-surface-300">
          <div className="text-4xl mb-3">✍️</div>
          <h3 className="font-heading font-bold text-lg text-surface-700 mb-2">More Articles Coming Soon</h3>
          <p className="text-sm text-surface-500 max-w-lg mx-auto">
            We are working on in-depth syllabus guides, exam pattern breakdowns, and preparation strategies for UPSC, Banking, Railway, and more. Bookmark this page!
          </p>
        </div>
      </div>
    </div>
  );
}

import type { CurrentAffairsPost } from '@/lib/current-affairs-data';

interface Props {
  post: CurrentAffairsPost;
}

export default function CurrentAffairsHero({ post }: Props) {
  const newsCount = post.newsItems?.length ?? 0;
  const quizCount = post.quiz?.length ?? 0;

  return (
    <div className="bg-gradient-to-br from-primary-500 to-primary-800 rounded-2xl p-6 sm:p-8 mb-8 text-white">
      {/* Eyebrow */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-xs font-heading font-semibold px-3 py-1 rounded-full bg-white/20 uppercase tracking-wide">
          Weekly Current Affairs
        </span>
        {post.weekRange && (
          <span className="text-xs font-heading font-medium px-3 py-1 rounded-full bg-white/10">
            {post.weekRange}
          </span>
        )}
        {post.isFeatured && (
          <span className="text-xs font-heading font-bold px-2.5 py-1 rounded-full bg-accent-500 text-white uppercase tracking-wide">
            Latest
          </span>
        )}
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold leading-snug mb-4">
        {post.title}
      </h1>

      {/* Tagline */}
      <p className="text-primary-100 text-sm sm:text-base mb-5 max-w-3xl">
        Your verified, exam-ready digest for the week
      </p>

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-primary-200">
        <span className="flex items-center gap-1.5">
          <span>📅</span> Published: {post.publishedDate}
        </span>
        {newsCount > 0 && (
          <span className="flex items-center gap-1.5">
            <span>📰</span> {newsCount} stories
          </span>
        )}
        {quizCount > 0 && (
          <span className="flex items-center gap-1.5">
            <span>🧠</span> {quizCount} quiz questions
          </span>
        )}
        <span className="flex items-center gap-1.5">
          <span>✍️</span> TaiyarHo Editorial
        </span>
      </div>
    </div>
  );
}

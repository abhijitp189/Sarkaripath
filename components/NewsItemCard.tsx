import type { NewsItem } from '@/lib/current-affairs-data';
import { categoryTheme } from '@/lib/current-affairs-theme';

interface Props {
  item: NewsItem;
}

export default function NewsItemCard({ item }: Props) {
  const theme = categoryTheme[item.category] ?? categoryTheme.misc;

  return (
    <div
      id={item.id}
      className={`bg-white rounded-2xl border border-surface-200 shadow-sm overflow-hidden border-l-4 ${theme.borderClass} mb-6`}
    >
      {/* Top strip */}
      <div className="px-5 pt-5 pb-0">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={`text-xs font-heading font-semibold px-2.5 py-1 rounded-full ${theme.badgeClass}`}>
            {theme.emoji} {theme.label}
          </span>
          <span className="text-xs text-surface-400 font-medium">
            📅 {item.eventDate}
          </span>
          {item.location && (
            <span className="text-xs text-surface-400 font-medium ml-auto hidden sm:inline">
              📍 {item.location}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pb-5">
        {/* Headline */}
        <h3 className="text-lg sm:text-xl font-heading font-bold text-surface-900 mb-3">
          {item.headline}
        </h3>

        {/* Summary */}
        <p className="text-surface-700 leading-relaxed mb-4 text-sm sm:text-base">
          {item.summary}
        </p>

        {/* Key Facts */}
        <div className="mb-4">
          <p className="text-xs font-heading font-semibold text-surface-500 uppercase tracking-wide mb-2">Key Facts</p>
          <ul className="list-disc ml-6 space-y-1 text-surface-700 text-sm">
            {item.keyFacts.map((fact, i) => (
              <li key={i} className="leading-relaxed">{fact}</li>
            ))}
          </ul>
        </div>

        {/* Why It Matters */}
        <div className="bg-primary-50 border-l-4 border-primary-500 rounded-r-xl p-4 my-4">
          <p className="text-xs font-heading font-bold text-primary-800 mb-1">📌 Why It Matters</p>
          <p className="text-sm text-primary-700 leading-relaxed">{item.whyItMatters}</p>
        </div>

        {/* Static GK Connect */}
        {item.staticGkConnect && (
          <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-3 mb-4">
            <p className="text-xs font-heading font-bold text-emerald-800 mb-1">🧠 Static GK Connect</p>
            <p className="text-sm text-emerald-700 leading-relaxed">{item.staticGkConnect}</p>
          </div>
        )}

        {/* Exam Relevance tags */}
        <div className="flex flex-wrap items-center gap-1.5 mt-3">
          <span className="text-xs text-surface-400 font-heading font-semibold uppercase tracking-wide mr-1">Exams:</span>
          {item.examRelevance.map((exam) => (
            <span key={exam} className="bg-primary-100 text-primary-700 text-xs px-2.5 py-0.5 rounded-full font-medium">
              {exam}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

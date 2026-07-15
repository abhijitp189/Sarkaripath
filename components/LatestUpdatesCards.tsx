import Link from 'next/link';

/**
 * LatestUpdatesCards — static, compact notice cards for the homepage.
 *
 * - Desktop (lg+): all cards side by side in a grid. No motion.
 * - Mobile/tablet: a horizontally swipeable row with scroll-snap — the next
 *   card "peeks" from the right edge, which invites the swipe. User-driven,
 *   no animation, so it behaves identically regardless of the OS
 *   reduce-motion setting (which is what broke the previous two versions).
 * - Each card has a coloured top edge matching its tag for scannability.
 * - All content is plain crawlable HTML.
 *
 * Content comes from app/page.tsx (auto-derived CA digest + lib/home-updates.ts).
 */

export interface UpdateCardItem {
  tag: string;
  /** Full Tailwind class strings, computed in page.tsx so the compiler sees them verbatim. */
  tagClass: string;
  accentBorder: string;
  text: string;
  href?: string;
  linkLabel?: string;
}

export default function LatestUpdatesCards({ items }: { items: UpdateCardItem[] }) {
  if (items.length === 0) return null;
  return (
    <div className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory pb-1 lg:grid lg:grid-cols-4 lg:overflow-visible">
      {items.map((item, i) => (
        <article
          key={item.tag + i}
          className={`card p-4 w-72 shrink-0 snap-start lg:w-auto border-t-4 ${item.accentBorder} flex flex-col`}
        >
          <span className={`badge font-heading font-semibold w-fit ${item.tagClass}`}>{item.tag}</span>
          <p className="text-sm text-surface-700 leading-relaxed mt-2 flex-1">{item.text}</p>
          {item.href && item.linkLabel && (
            <Link
              href={item.href}
              className="mt-3 text-sm font-medium text-primary-500 hover:text-primary-600 w-fit"
            >
              {item.linkLabel} →
            </Link>
          )}
        </article>
      ))}
    </div>
  );
}

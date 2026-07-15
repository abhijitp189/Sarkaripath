import Link from 'next/link';

/**
 * LatestUpdatesTicker — continuously scrolling news ticker (CSS-only).
 *
 * How it works:
 * - The track contains the item list TWICE. A CSS keyframe animation
 *   (.ticker-track in globals.css) slides the track from 0 to -50%, then
 *   loops — because the second half is identical, the loop is seamless.
 * - No JavaScript, no hydration, no state: it cannot "fail to start" and
 *   costs nothing on low-end phones.
 * - Hovering (or touching, via :active on mobile browsers that support it)
 *   pauses the animation — handled in globals.css.
 * - prefers-reduced-motion: animation is disabled, the duplicate half is
 *   hidden, and the strip becomes a normal side-scrollable line.
 * - SEO: the first copy of every item is real crawlable HTML; the duplicate
 *   half is aria-hidden so screen readers hear each notice once.
 *
 * Content comes from app/page.tsx (auto-derived CA digest + lib/home-updates.ts).
 */

export interface TickerItem {
  tag: string;
  /** Full Tailwind class string, computed in page.tsx so the compiler sees it verbatim. */
  tagClass: string;
  text: string;
  href?: string;
  linkLabel?: string;
}

function TickerRun({ items, hidden }: { items: TickerItem[]; hidden?: boolean }) {
  return (
    <div className={`flex items-center ${hidden ? 'ticker-dup' : ''}`} aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <span key={item.tag + i} className="flex items-center whitespace-nowrap">
          <span className={`badge font-heading font-semibold mr-2 ${item.tagClass}`}>{item.tag}</span>
          <span className="text-sm text-surface-700">{item.text}</span>
          {item.href && item.linkLabel && (
            <Link
              href={item.href}
              className="text-sm text-primary-500 hover:text-primary-600 font-medium ml-2"
              tabIndex={hidden ? -1 : 0}
            >
              {item.linkLabel} →
            </Link>
          )}
          <span className="mx-6 text-surface-300" aria-hidden="true">
            •
          </span>
        </span>
      ))}
    </div>
  );
}

export default function LatestUpdatesTicker({ items }: { items: TickerItem[] }) {
  if (items.length === 0) return null;
  return (
    <div className="ticker-viewport flex-1 min-w-0 overflow-hidden" role="region" aria-label="Latest updates">
      <div className="ticker-track flex items-center w-max">
        <TickerRun items={items} />
        <TickerRun items={items} hidden />
      </div>
    </div>
  );
}

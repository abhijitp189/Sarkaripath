'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

/**
 * LatestUpdatesTicker — rotating one-at-a-time display for homepage updates.
 *
 * Behaviour:
 * - Auto-advances every 6 seconds with a gentle slide-up fade.
 * - Pauses while hovered, touched, or keyboard-focused (so links are clickable
 *   and screen-reader users aren't rushed).
 * - Respects the OS "reduce motion" setting: no auto-rotation, no slide
 *   animation — users navigate manually with the dots.
 * - ALL items are always present in the DOM (inactive ones are visually hidden
 *   with opacity + aria-hidden). This means every notice is in the static HTML
 *   that Google crawls — the rotation is purely visual.
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

const ROTATE_MS = 6000;

export default function LatestUpdatesTicker({ items }: { items: TickerItem[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Detect the OS-level "reduce motion" preference.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Auto-advance.
  useEffect(() => {
    if (paused || reducedMotion || items.length < 2) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, ROTATE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, reducedMotion, items.length]);

  if (items.length === 0) return null;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Latest updates"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Rotating viewport: active item is in normal flow (sets the height);
          inactive items are stacked absolutely behind it, faded out. */}
      <div className="relative overflow-hidden">
        {items.map((item, i) => {
          const isActive = i === index;
          return (
            <div
              key={item.tag + i}
              aria-hidden={!isActive}
              className={`${
                isActive
                  ? 'relative opacity-100 translate-y-0'
                  : 'absolute inset-x-0 top-0 opacity-0 translate-y-3 pointer-events-none'
              } ${
                reducedMotion ? '' : 'transition-all duration-500 ease-out'
              } flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3`}
            >
              <span className={`badge font-heading font-semibold shrink-0 w-fit ${item.tagClass}`}>
                {item.tag}
              </span>
              <p className="text-sm text-surface-700 leading-relaxed">
                {item.text}
                {item.href && item.linkLabel && (
                  <>
                    {' '}
                    <Link
                      href={item.href}
                      className="text-primary-500 hover:text-primary-600 font-medium whitespace-nowrap"
                      tabIndex={isActive ? 0 : -1}
                    >
                      {item.linkLabel} →
                    </Link>
                  </>
                )}
              </p>
            </div>
          );
        })}
      </div>

      {/* Dot navigation */}
      {items.length > 1 && (
        <div className="flex items-center gap-1.5 mt-4" role="tablist" aria-label="Choose update">
          {items.map((item, i) => (
            <button
              key={item.tag + i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show update ${i + 1} of ${items.length}: ${item.tag}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? 'w-5 bg-primary-500'
                  : 'w-2 bg-surface-300 hover:bg-surface-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

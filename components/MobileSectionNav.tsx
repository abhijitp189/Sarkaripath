'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * MobileSectionNav — sticky horizontal chip bar for exam detail pages (mobile/tablet only).
 *
 * The desktop "On This Page" sidebar is hidden below lg, leaving mobile users
 * (the majority of traffic) with no way to jump between sections on very long
 * exam pages. This component fixes that.
 *
 * How it works:
 * 1. After mount, it scans the rendered page for `section[id]` elements (plus the
 *    `div#overview` InfoCards grid) IN DOCUMENT ORDER. Because pages vary — some
 *    have Salary/Cut-off/Physical Test sections, some skip Resources — the nav
 *    always reflects exactly what exists on the current page. No per-page config.
 * 2. Known ids get short chip labels (see SHORT_LABELS); unknown ids fall back to
 *    the section's own <h2> heading text.
 * 3. A scroll listener highlights the section currently in view, and the bar
 *    auto-scrolls so the active chip stays visible.
 *
 * The bar shell renders server-side at a fixed height (h-12) so there is no
 * layout shift when chips hydrate in. If no sections are found after mount
 * (e.g. the Exam Not Found page), the bar removes itself.
 */

const SHORT_LABELS: Record<string, string> = {
  overview: 'Overview',
  'important-dates': 'Dates',
  dates: 'Dates',
  vacancies: 'Vacancies',
  vacancy: 'Vacancies',
  'posts-vacancies': 'Vacancies',
  'vacancy-history': 'Vacancies',
  eligibility: 'Eligibility',
  'exam-pattern': 'Pattern',
  syllabus: 'Syllabus',
  salary: 'Salary',
  'study-plan': 'Study Plan',
  books: 'Books',
  resources: 'Resources',
  tips: 'Tips',
  faq: 'FAQs',
  faqs: 'FAQs',
  cutoff: 'Cut-off',
  selection: 'Selection',
  physical: 'Physical Test',
  'pet-pmt': 'Physical Test',
  'pet-medical': 'Physical Test',
  pet: 'Physical Test',
  'how-to-apply': 'How to Apply',
  apply: 'How to Apply',
  application: 'How to Apply',
  'application-fee': 'Fees',
  'current-status': 'Status',
  status: 'Status',
  'latest-update': 'Updates',
  'latest-updates': 'Updates',
  'job-profile': 'Job Profile',
  career: 'Career',
};

interface NavItem {
  id: string;
  label: string;
}

export default function MobileSectionNav() {
  const [items, setItems] = useState<NavItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [mounted, setMounted] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // 1) Discover the sections that actually exist on this page (document order).
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>('section[id], div#overview')
    );
    const seen = new Set<string>();
    const found: NavItem[] = [];
    for (const el of els) {
      const id = el.id;
      if (!id || seen.has(id)) continue;
      seen.add(id);
      const heading = el.querySelector('h2');
      const label =
        SHORT_LABELS[id] ||
        heading?.textContent?.trim() ||
        id.replace(/-/g, ' ');
      found.push({ id, label });
    }
    setItems(found);
    if (found.length > 0) setActiveId(found[0].id);
    setMounted(true);
  }, []);

  // 2) Highlight the section currently in view (rAF-throttled scroll listener).
  useEffect(() => {
    if (items.length === 0) return;
    let ticking = false;
    const compute = () => {
      ticking = false;
      // Measure the bar's real bottom edge so the offset is correct at every
      // breakpoint (navbar is 56px on mobile but 96px on md+ tablets).
      const barBottom = barRef.current?.getBoundingClientRect().bottom ?? 104;
      const offset = barBottom + 28;
      let current = items[0].id;
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }
      setActiveId(current);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(compute);
      }
    };
    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [items]);

  // 3) Keep the active chip visible inside the horizontal bar.
  useEffect(() => {
    const bar = barRef.current;
    const chip = chipRefs.current[activeId];
    if (bar && chip) {
      const target = chip.offsetLeft - bar.clientWidth / 2 + chip.clientWidth / 2;
      bar.scrollTo({ left: target, behavior: 'smooth' });
    }
  }, [activeId]);

  // After mount, if the page genuinely has no sections (e.g. Exam Not Found),
  // remove the bar entirely.
  if (mounted && items.length === 0) return null;

  return (
    <nav
      aria-label="Jump to section"
      className="lg:hidden sticky top-14 md:top-24 z-40 bg-white/95 backdrop-blur-md border-b border-surface-200 shadow-sm"
    >
      <div
        ref={barRef}
        className="no-scrollbar flex h-12 items-center gap-2 overflow-x-auto px-4"
      >
        {items.map(({ id, label }) => {
          const isActive = id === activeId;
          return (
            <a
              key={id}
              href={`#${id}`}
              ref={(el) => {
                chipRefs.current[id] = el;
              }}
              onClick={() => setActiveId(id)}
              className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-heading font-semibold transition-colors ${
                isActive
                  ? 'bg-primary-500 text-white'
                  : 'bg-surface-100 text-surface-600 active:bg-surface-200'
              }`}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

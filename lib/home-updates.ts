/**
 * Homepage "Latest Updates" strip — curated notices.
 *
 * ⚠️ CONTENT RULE (non-negotiable): Every notice added here MUST already be
 * verified through the standard TaiyarHo protocol (official source + 2
 * independent trusted sources). Never add a claim directly from a Google
 * Alert, Gemini output, or an aggregator. Unconfirmed dates → do not add.
 *
 * The newest weekly Current Affairs digest is added AUTOMATICALLY on the
 * homepage (derived from lib/current-affairs-data.ts) — do not add CA
 * digests here manually.
 *
 * Keep this list short: the homepage shows the 3 newest notices. Remove
 * items once they are stale (e.g. after a deadline passes).
 */

export interface HomeNotice {
  /** ISO date used only for ordering (newest first). */
  sortDate: string;
  /** Short badge label shown before the text. */
  tag: string;
  /** Badge colour — maps to Tailwind classes in app/page.tsx. */
  tagColor: 'blue' | 'emerald' | 'orange' | 'purple' | 'red';
  /** The notice text. Verified facts only. */
  text: string;
  /** Optional internal link for "read more". */
  href?: string;
  linkLabel?: string;
}

export const homeNotices: HomeNotice[] = [
  {
    sortDate: '2026-07-01',
    tag: 'Railway',
    tagColor: 'orange',
    text: 'All 21 regional RRB websites will be discontinued after 31 July 2026 and replaced by a single unified portal. Applications continue on rrbapply.gov.in as usual.',
    href: '/exams/rrb-ntpc/',
    linkLabel: 'RRB NTPC guide',
  },
  {
    sortDate: '2026-04-18',
    tag: 'Salary',
    tagColor: 'emerald',
    text: 'Dearness Allowance is 60% with effect from 1 January 2026 (Cabinet approval: 18 April 2026). Salary figures on TaiyarHo exam pages reflect the updated rate.',
    href: '/blog/ssc-cgl-salary-2026-post-wise-in-hand/',
    linkLabel: 'See salary breakdown',
  },
  {
    sortDate: '2025-11-15',
    tag: 'Pay Commission',
    tagColor: 'purple',
    text: '8th Pay Commission constituted in November 2025 under Justice Ranjana Prakash Desai; report expected around mid-2027. Current salaries remain under the 7th CPC.',
    href: '/blog/8th-pay-commission-salary-calculator-2026/',
    linkLabel: 'Salary calculator',
  },
];

'use client';

import { useState } from 'react';
import Link from 'next/link';

// ─── TYPES ───────────────────────────────────────────────────────────────────
interface UpcomingExam {
  name: string;
  date: string;
  status: 'OFFICIAL' | 'TENTATIVE';
  category: string;
  internalSlug?: string;
  externalUrl: string;
  note?: string;
}

interface MonthGroup {
  month: string;
  exams: UpcomingExam[];
}

// ─── WHICH SLUGS HAVE INTERNAL PAGES ────────────────────────────────────────
const KNOWN_SLUGS = new Set([
  'upsc-ias', 'ssc-cgl', 'ibps-po', 'rrb-ntpc', 'sbi-po',
  'ssc-gd-constable', 'ssc-chsl', 'ssc-mts', 'ssc-stenographer', 'ssc-cpo',
  'ssc-je', 'ssc-jht',
  'rrb-alp', 'rrb-je', 'rrb-technician', 'rrb-group-d',
  'ibps-rrb-po', 'ibps-rrb-clerk', 'sbi-clerk', 'rbi-assistant', 'rbi-grade-b',
  'upsc-nda', 'upsc-cds', 'upsc-capf',
  'up-police-constable', 'up-police-si', 'up-police-asi',
  'up-tet', 'up-tgt', 'up-pgt',
  'ctet', 'htet',
  'gate', 'afcat',
  'bihar-teacher',
  'uppsc', 'mppsc',
]);

// ─── UPCOMING EXAMS (verified from official sources) ─────────────────────────
// Sources: upsc.gov.in, ssc.gov.in, rbi.org.in, ibps.in, rrbapply.gov.in
// Last updated: 5 May 2026
const upcomingExams: MonthGroup[] = [
  {
    month: 'May 2026',
    exams: [
      {
        name: 'SSC GD Constable (CBT)',
        date: '27 Apr – 30 May 2026',
        status: 'OFFICIAL',
        category: 'Police',
        internalSlug: 'ssc-gd-constable',
        externalUrl: 'https://ssc.gov.in',
        note: '25,487 vacancies • Exam ongoing',
      },
      {
        name: 'RRB NTPC UG (CBT 1)',
        date: '7–9 May & 13–21 Jun 2026',
        status: 'OFFICIAL',
        category: 'Railway',
        internalSlug: 'rrb-ntpc',
        externalUrl: 'https://rrbapply.gov.in',
        note: '3,058 vacancies (12th-level) • CEN 07/2025',
      },
      {
        name: 'UPSC Civil Services (Prelims)',
        date: '24 May 2026',
        status: 'OFFICIAL',
        category: 'UPSC',
        internalSlug: 'upsc-ias',
        externalUrl: 'https://upsc.gov.in',
        note: '933 vacancies (IAS/IPS/IFS)',
      },
      {
        name: 'UPSC CDS (I)',
        date: '24 May 2026',
        status: 'OFFICIAL',
        category: 'Defence',
        internalSlug: 'upsc-cds',
        externalUrl: 'https://upsc.gov.in',
      },
      {
        name: 'Haryana TET (HTET)',
        date: '30–31 May 2026',
        status: 'OFFICIAL',
        category: 'Teaching',
        internalSlug: 'htet',
        externalUrl: 'https://bseh.org.in',
      },
      {
        name: 'UP Police Constable',
        date: 'May 2026',
        status: 'TENTATIVE',
        category: 'Police',
        internalSlug: 'up-police-constable',
        externalUrl: 'https://uppbpb.gov.in',
      },
    ],
  },
  {
    month: 'June 2026',
    exams: [
      {
        name: 'RBI Assistant (Mains)',
        date: '7 Jun 2026',
        status: 'OFFICIAL',
        category: 'Banking',
        internalSlug: 'rbi-assistant',
        externalUrl: 'https://rbi.org.in',
        note: '650 vacancies • Prelims conducted Apr 2026',
      },
      {
        name: 'UP TGT',
        date: '3–4 Jun 2026',
        status: 'OFFICIAL',
        category: 'Teaching',
        internalSlug: 'up-tgt',
        externalUrl: 'https://upsessb.org',
      },
      {
        name: 'SSC CGL (Notification)',
        date: 'Jun 2026',
        status: 'TENTATIVE',
        category: 'SSC',
        internalSlug: 'ssc-cgl',
        externalUrl: 'https://ssc.gov.in',
        note: '~15,000 vacancies expected • Tier 1 Jun–Jul 2026',
      },
    ],
  },
  {
    month: 'July 2026',
    exams: [
      {
        name: 'SSC CGL (Tier 1 CBT)',
        date: 'Jun–Jul 2026',
        status: 'TENTATIVE',
        category: 'SSC',
        internalSlug: 'ssc-cgl',
        externalUrl: 'https://ssc.gov.in',
        note: 'As per SSC Exam Calendar 2026–27',
      },
      {
        name: 'SSC CHSL (Tier 1)',
        date: 'Jul–Sep 2026',
        status: 'OFFICIAL',
        category: 'SSC',
        internalSlug: 'ssc-chsl',
        externalUrl: 'https://ssc.gov.in',
        note: 'As per SSC Exam Calendar 2026–27',
      },
      {
        name: 'UP TET',
        date: '2–4 Jul 2026',
        status: 'OFFICIAL',
        category: 'Teaching',
        internalSlug: 'up-tet',
        externalUrl: 'https://updeled.gov.in',
      },
      {
        name: 'UPSC CAPF (AC)',
        date: '19 Jul 2026',
        status: 'OFFICIAL',
        category: 'Defence',
        internalSlug: 'upsc-capf',
        externalUrl: 'https://upsc.gov.in',
      },
      {
        name: 'RRB ALP',
        date: 'Jul 2026',
        status: 'TENTATIVE',
        category: 'Railway',
        internalSlug: 'rrb-alp',
        externalUrl: 'https://indianrailways.gov.in',
      },
    ],
  },
  {
    month: 'August 2026',
    exams: [
      {
        name: 'UPSC Civil Services (Mains)',
        date: '21 Aug 2026 (5 days)',
        status: 'OFFICIAL',
        category: 'UPSC',
        internalSlug: 'upsc-ias',
        externalUrl: 'https://upsc.gov.in',
      },
      {
        name: 'SBI PO (Prelims)',
        date: '1–2 Aug 2026',
        status: 'TENTATIVE',
        category: 'Banking',
        internalSlug: 'sbi-po',
        externalUrl: 'https://sbi.co.in/careers',
        note: 'Notification expected May–Jun 2026',
      },
      {
        name: 'IBPS PO (Prelims)',
        date: '22–23 Aug 2026',
        status: 'OFFICIAL',
        category: 'Banking',
        internalSlug: 'ibps-po',
        externalUrl: 'https://ibps.in',
        note: 'As per IBPS Calendar 2026 (released Jan 2026)',
      },
      {
        name: 'IBPS SO (Prelims)',
        date: '29 Aug 2026',
        status: 'OFFICIAL',
        category: 'Banking',
        externalUrl: 'https://ibps.in',
        note: 'As per IBPS Calendar 2026',
      },
    ],
  },
  {
    month: 'September 2026',
    exams: [
      {
        name: 'UPSC NDA (II)',
        date: '13 Sep 2026',
        status: 'OFFICIAL',
        category: 'Defence',
        internalSlug: 'upsc-nda',
        externalUrl: 'https://upsc.gov.in',
      },
      {
        name: 'UPSC CDS (II)',
        date: '13 Sep 2026',
        status: 'OFFICIAL',
        category: 'Defence',
        internalSlug: 'upsc-cds',
        externalUrl: 'https://upsc.gov.in',
      },
      {
        name: 'SBI PO (Mains)',
        date: '12 Sep 2026',
        status: 'TENTATIVE',
        category: 'Banking',
        internalSlug: 'sbi-po',
        externalUrl: 'https://sbi.co.in/careers',
      },
      {
        name: 'Bihar Teacher (BPSC)',
        date: '22–27 Sep 2026',
        status: 'OFFICIAL',
        category: 'Teaching',
        internalSlug: 'bihar-teacher',
        externalUrl: 'https://bpsc.bih.nic.in',
      },
      {
        name: 'SBI Clerk (Prelims)',
        date: '27 Sep & 3 Oct 2026',
        status: 'TENTATIVE',
        category: 'Banking',
        internalSlug: 'sbi-clerk',
        externalUrl: 'https://sbi.co.in/careers',
      },
    ],
  },
  {
    month: 'October 2026',
    exams: [
      {
        name: 'IBPS PO (Mains)',
        date: '4 Oct 2026',
        status: 'OFFICIAL',
        category: 'Banking',
        internalSlug: 'ibps-po',
        externalUrl: 'https://ibps.in',
        note: 'As per IBPS Calendar 2026',
      },
      {
        name: 'IBPS Clerk (Prelims)',
        date: '10–11 Oct 2026',
        status: 'OFFICIAL',
        category: 'Banking',
        internalSlug: 'ibps-rrb-clerk',
        externalUrl: 'https://ibps.in',
        note: 'As per IBPS Calendar 2026',
      },
      {
        name: 'SSC Stenographer',
        date: 'Oct 2026',
        status: 'TENTATIVE',
        category: 'SSC',
        internalSlug: 'ssc-stenographer',
        externalUrl: 'https://ssc.gov.in',
      },
      {
        name: 'SSC JHT',
        date: 'Oct 2026',
        status: 'TENTATIVE',
        category: 'SSC',
        internalSlug: 'ssc-jht',
        externalUrl: 'https://ssc.gov.in',
      },
      {
        name: 'UP Police ASI',
        date: 'Oct 2026',
        status: 'TENTATIVE',
        category: 'Police',
        internalSlug: 'up-police-asi',
        externalUrl: 'https://uppbpb.gov.in',
      },
    ],
  },
  {
    month: 'November 2026',
    exams: [
      {
        name: 'IBPS RRB PO (Prelims)',
        date: '21–22 Nov 2026',
        status: 'OFFICIAL',
        category: 'Banking',
        internalSlug: 'ibps-rrb-po',
        externalUrl: 'https://ibps.in',
        note: 'As per IBPS Calendar 2026',
      },
      {
        name: 'SBI Clerk (Mains)',
        date: '7 Nov 2026',
        status: 'TENTATIVE',
        category: 'Banking',
        internalSlug: 'sbi-clerk',
        externalUrl: 'https://sbi.co.in/careers',
      },
      {
        name: 'UPSC IFS (Mains)',
        date: '22 Nov 2026',
        status: 'OFFICIAL',
        category: 'UPSC',
        externalUrl: 'https://upsc.gov.in',
      },
      {
        name: 'RRB Technician (CBT)',
        date: 'Nov 2026',
        status: 'TENTATIVE',
        category: 'Railway',
        internalSlug: 'rrb-technician',
        externalUrl: 'https://indianrailways.gov.in',
      },
    ],
  },
  {
    month: 'December 2026',
    exams: [
      {
        name: 'IBPS Clerk (Mains)',
        date: '27 Dec 2026',
        status: 'OFFICIAL',
        category: 'Banking',
        internalSlug: 'ibps-rrb-clerk',
        externalUrl: 'https://ibps.in',
        note: 'As per IBPS Calendar 2026',
      },
      {
        name: 'RRB Group D (Notification)',
        date: 'Dec 2026',
        status: 'TENTATIVE',
        category: 'Railway',
        internalSlug: 'rrb-group-d',
        externalUrl: 'https://rrbapply.gov.in',
        note: 'As per RRB Exam Calendar 2026',
      },
      {
        name: 'SSC CPO (Tier 1)',
        date: 'Dec 2026',
        status: 'TENTATIVE',
        category: 'SSC',
        internalSlug: 'ssc-cpo',
        externalUrl: 'https://ssc.gov.in',
      },
    ],
  },
];

// ─── PAST EXAMS (Jan – Apr 2026, already conducted) ─────────────────────────
const pastExams: MonthGroup[] = [
  {
    month: 'April 2026',
    exams: [
      {
        name: 'UPSC NDA (I)',
        date: '12 Apr 2026',
        status: 'OFFICIAL',
        category: 'Defence',
        internalSlug: 'upsc-nda',
        externalUrl: 'https://upsc.gov.in',
        note: '394 vacancies • Answer key released',
      },
      {
        name: 'RBI Assistant (Prelims)',
        date: '11 & 13 Apr 2026',
        status: 'OFFICIAL',
        category: 'Banking',
        internalSlug: 'rbi-assistant',
        externalUrl: 'https://rbi.org.in',
        note: '650 vacancies',
      },
      {
        name: 'RBI Grade B (Notification)',
        date: '29 Apr 2026',
        status: 'OFFICIAL',
        category: 'Banking',
        internalSlug: 'rbi-grade-b',
        externalUrl: 'https://rbi.org.in',
        note: 'Phase 1 exam expected Jun 2026',
      },
    ],
  },
  {
    month: 'March 2026',
    exams: [
      {
        name: 'RRB NTPC Graduate (CBT 1)',
        date: '16–27 Mar 2026',
        status: 'OFFICIAL',
        category: 'Railway',
        internalSlug: 'rrb-ntpc',
        externalUrl: 'https://rrbapply.gov.in',
        note: '5,810 vacancies (Graduate posts) • CEN 06/2025',
      },
      {
        name: 'RRB Technician (CBT)',
        date: '5–9 Mar 2026',
        status: 'OFFICIAL',
        category: 'Railway',
        internalSlug: 'rrb-technician',
        externalUrl: 'https://indianrailways.gov.in',
      },
      {
        name: 'UP Police SI',
        date: '14–15 Mar 2026',
        status: 'OFFICIAL',
        category: 'Police',
        internalSlug: 'up-police-si',
        externalUrl: 'https://uppbpb.gov.in',
      },
      {
        name: 'DRDO CEPTAM',
        date: '23 Mar 2026',
        status: 'OFFICIAL',
        category: 'Defence',
        externalUrl: 'https://drdo.gov.in',
      },
    ],
  },
  {
    month: 'February 2026',
    exams: [
      {
        name: 'CTET',
        date: '8 Feb 2026',
        status: 'OFFICIAL',
        category: 'Teaching',
        internalSlug: 'ctet',
        externalUrl: 'https://ctet.nic.in',
      },
      {
        name: 'SSC MTS',
        date: '4 Feb 2026',
        status: 'OFFICIAL',
        category: 'SSC',
        internalSlug: 'ssc-mts',
        externalUrl: 'https://ssc.gov.in',
      },
      {
        name: 'GATE 2026',
        date: '7–15 Feb 2026',
        status: 'OFFICIAL',
        category: 'UPSC',
        internalSlug: 'gate',
        externalUrl: 'https://gate2026.iisc.ac.in',
      },
      {
        name: 'RRB ALP (CBT)',
        date: '16–18 Feb 2026',
        status: 'OFFICIAL',
        category: 'Railway',
        internalSlug: 'rrb-alp',
        externalUrl: 'https://indianrailways.gov.in',
      },
      {
        name: 'RRB JE (CBT)',
        date: '19–20 Feb & 3 Mar 2026',
        status: 'OFFICIAL',
        category: 'Railway',
        internalSlug: 'rrb-je',
        externalUrl: 'https://indianrailways.gov.in',
      },
      {
        name: 'UPPSC RO/ARO',
        date: '2–3 Feb 2026',
        status: 'OFFICIAL',
        category: 'State PSC',
        internalSlug: 'uppsc',
        externalUrl: 'https://uppsc.up.nic.in',
      },
      {
        name: 'IB Security Assistant (Phase 2)',
        date: '22 Feb 2026',
        status: 'OFFICIAL',
        category: 'Defence',
        externalUrl: 'https://mha.gov.in/IB',
      },
    ],
  },
  {
    month: 'January 2026',
    exams: [
      {
        name: 'SSC CGL (Tier 2)',
        date: '18–19 Jan 2026',
        status: 'OFFICIAL',
        category: 'SSC',
        internalSlug: 'ssc-cgl',
        externalUrl: 'https://ssc.gov.in',
      },
      {
        name: 'AFCAT',
        date: '31 Jan 2026',
        status: 'OFFICIAL',
        category: 'Defence',
        internalSlug: 'afcat',
        externalUrl: 'https://afcat.cdac.in',
      },
      {
        name: 'SEBI Grade A',
        date: '10 Jan 2026',
        status: 'OFFICIAL',
        category: 'Banking',
        externalUrl: 'https://sebi.gov.in',
      },
      {
        name: 'KVS PRT / TGT / PGT',
        date: '10–11 Jan 2026',
        status: 'OFFICIAL',
        category: 'Teaching',
        externalUrl: 'https://kvsangathan.nic.in',
      },
      {
        name: 'NVS TGT / PGT',
        date: '10–11 Jan 2026',
        status: 'OFFICIAL',
        category: 'Teaching',
        externalUrl: 'https://navodaya.gov.in',
      },
      {
        name: 'ECGC PO',
        date: '11 Jan 2026',
        status: 'OFFICIAL',
        category: 'Banking',
        externalUrl: 'https://ecgc.in',
      },
    ],
  },
];

const ALL_CATEGORIES = ['All', 'UPSC', 'SSC', 'Banking', 'Railway', 'Defence', 'Teaching', 'Police', 'State PSC'];

const CATEGORY_COLORS: Record<string, string> = {
  UPSC: 'bg-purple-100 text-purple-700',
  SSC: 'bg-blue-100 text-blue-700',
  Banking: 'bg-green-100 text-green-700',
  Railway: 'bg-orange-100 text-orange-700',
  Defence: 'bg-red-100 text-red-700',
  Teaching: 'bg-yellow-100 text-yellow-700',
  Police: 'bg-slate-100 text-slate-700',
  'State PSC': 'bg-teal-100 text-teal-700',
};

function hasInternalPage(slug?: string): boolean {
  return !!slug && KNOWN_SLUGS.has(slug);
}

function countExams(data: MonthGroup[], category: string): number {
  return data.flatMap((m) => m.exams).filter((e) => category === 'All' || e.category === category).length;
}

function filterMonths(data: MonthGroup[], category: string): MonthGroup[] {
  return data
    .map((m) => ({ ...m, exams: m.exams.filter((e) => category === 'All' || e.category === category) }))
    .filter((m) => m.exams.length > 0);
}

function ExamCard({ exam, isPast }: { exam: UpcomingExam; isPast?: boolean }) {
  const hasPage = hasInternalPage(exam.internalSlug);
  const catColor = CATEGORY_COLORS[exam.category] ?? 'bg-gray-100 text-gray-700';

  return (
    <div className={`card p-5 flex flex-col gap-3 transition-shadow ${isPast ? 'opacity-80' : 'hover:shadow-md'}`}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-1.5 text-xs font-medium text-surface-500">
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {exam.date}
        </div>
        <span
          className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full ${
            isPast
              ? 'bg-surface-100 text-surface-500'
              : exam.status === 'OFFICIAL'
              ? 'bg-green-100 text-green-700'
              : 'bg-amber-100 text-amber-700'
          }`}
        >
          {isPast ? 'Completed' : exam.status === 'OFFICIAL' ? '✓ Official' : '~ Tentative'}
        </span>
      </div>

      <h3 className="font-heading font-bold text-surface-900 text-base leading-snug">{exam.name}</h3>

      {exam.note && <p className="text-xs text-surface-400 -mt-1">{exam.note}</p>}

      <div className="flex items-center justify-between mt-auto">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-lg ${catColor}`}>{exam.category}</span>

        {hasPage ? (
          <Link
            href={`/exams/${exam.internalSlug}`}
            className="text-xs font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1"
          >
            View Guide →
          </Link>
        ) : (
          <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg">
            Info Coming Soon
          </span>
        )}
      </div>

      {!hasPage && (
        <a
          href={exam.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-surface-400 hover:text-primary-500 flex items-center gap-1 transition-colors"
        >
          Official Website ↗
        </a>
      )}
    </div>
  );
}

function MonthSection({ data, isPast }: { data: MonthGroup[]; isPast?: boolean }) {
  if (data.length === 0) {
    return (
      <div className="text-center py-16 text-surface-400">
        <div className="text-5xl mb-4">🔍</div>
        <p className="font-medium text-surface-600">No exams found for this category.</p>
        <p className="text-sm mt-1">Try selecting a different category above.</p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {data.map((monthData) => (
        <div key={monthData.month}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`font-heading font-bold text-sm px-4 py-1.5 rounded-lg ${isPast ? 'bg-surface-300 text-surface-700' : 'bg-primary-600 text-white'}`}>
              {monthData.month}
            </div>
            <div className="h-px flex-1 bg-surface-200" />
            <span className="text-sm text-surface-400">
              {monthData.exams.length} exam{monthData.exams.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {monthData.exams.map((exam) => (
              <ExamCard key={`${monthData.month}-${exam.name}`} exam={exam} isPast={isPast} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ExamCalendarPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showPast, setShowPast] = useState(false);

  const totalUpcoming = countExams(upcomingExams, 'All');
  const officialCount = upcomingExams.flatMap((m) => m.exams).filter((e) => e.status === 'OFFICIAL').length;
  const tentativeCount = totalUpcoming - officialCount;

  const filteredUpcoming = filterMonths(upcomingExams, activeCategory);
  const filteredPast = filterMonths(pastExams, activeCategory);
  const totalPast = countExams(pastExams, 'All');

  return (
    <div className="bg-surface-50 min-h-screen pb-20">
      {/* HERO */}
      <div className="bg-gradient-to-br from-[#0a1e4f] to-[#1a56db] text-white py-14">
        <div className="container-main">
          <nav className="text-sm text-blue-200 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Exam Calendar 2026</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">📅</span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-heading font-bold">
                Upcoming Government Exams 2026
              </h1>
              <p className="text-blue-200 mt-1 text-sm sm:text-base">
                Official &amp; tentative exam dates — plan your preparation ahead of time
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            {[
              { label: 'Upcoming Exams', value: totalUpcoming, color: 'text-white' },
              { label: 'Official Dates', value: officialCount, color: 'text-green-300' },
              { label: 'Tentative Dates', value: tentativeCount, color: 'text-amber-300' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 rounded-xl px-5 py-3 text-center min-w-[110px]">
                <div className={`text-2xl font-heading font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-blue-200 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LEGEND */}
      <div className="container-main mt-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl px-5 py-4 flex flex-wrap gap-5 text-sm text-surface-600">
          <div className="flex items-center gap-2">
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">✓ Official</span>
            <span>Date officially confirmed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded-full">~ Tentative</span>
            <span>Expected (may change)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-amber-50 text-amber-600 text-xs font-medium px-2.5 py-1 rounded-lg">Info Coming Soon</span>
            <span>Guide page in progress</span>
          </div>
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <div className="container-main mt-6">
        <div className="flex flex-wrap gap-2">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white shadow'
                  : 'bg-white border border-surface-200 text-surface-600 hover:border-primary-300 hover:text-primary-600'
              }`}
            >
              {cat}
              {cat !== 'All' && (
                <span className="ml-1.5 opacity-60 text-xs">({countExams(upcomingExams, cat)})</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* UPCOMING EXAMS */}
      <div className="container-main mt-8">
        <MonthSection data={filteredUpcoming} />
      </div>

      {/* PAST EXAMS (collapsible) */}
      <div className="container-main mt-12">
        <button
          onClick={() => setShowPast(!showPast)}
          className="w-full bg-white border border-surface-200 rounded-xl px-6 py-4 flex items-center justify-between hover:border-primary-300 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">📋</span>
            <div className="text-left">
              <h2 className="font-heading font-bold text-surface-900 text-lg">Past Exams (Jan–Apr 2026)</h2>
              <p className="text-sm text-surface-500">{totalPast} exams already conducted this year</p>
            </div>
          </div>
          <svg
            className={`w-5 h-5 text-surface-400 transition-transform ${showPast ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showPast && (
          <div className="mt-6">
            <MonthSection data={filteredPast} isPast />
          </div>
        )}
      </div>

      {/* DISCLAIMER */}
      <div className="container-main mt-12">
        <div className="bg-surface-100 border border-surface-200 rounded-xl px-5 py-4 text-sm text-surface-500">
          <strong className="text-surface-700">Disclaimer:</strong> Exam dates are sourced from official notifications
          (upsc.gov.in, ssc.gov.in, rbi.org.in, ibps.in, rrbapply.gov.in) and may change without notice.
          Tentative dates are based on official exam calendars and previous-year patterns. Always verify from the
          official conducting body&apos;s website before applying. Last updated: 5 May 2026.
        </div>
      </div>
    </div>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import TabSwitcher from '@/components/TabSwitcher';

export const metadata: Metadata = {
  title: 'Govt Exam Eligibility Checker 2026 — UPSC, SSC, Banking, Railway | TaiyarHo',
  description: 'Check your eligibility for 100+ government exams in 2026. Instant age check for all exams or deep check for UPSC, SSC CGL, IBPS PO, SBI PO, RRB NTPC with category relaxation, attempt limits & physical standards. Free tool.',
  keywords: [
    'government exam eligibility checker 2026',
    'UPSC eligibility check 2026',
    'SSC CGL age limit 2026',
    'IBPS PO eligibility 2026',
    'RRB NTPC eligibility 2026',
    'OBC age relaxation government exam',
    'eligibility checker tool India',
  ],
  openGraph: {
    title: 'Government Exam Eligibility Checker 2026 | TaiyarHo',
    description: 'Find out which government exams you qualify for in 2026. Free tool with Quick Check (100 exams) and Deep Check (UPSC, SSC, Banking, Railway).',
    type: 'website',
    url: 'https://www.taiyarho.in/tools/eligibility-checker/',
  },
  alternates: { canonical: 'https://www.taiyarho.in/tools/eligibility-checker/' },
};

// ─── Page-level FAQ data ──────────────────────────────────────────────────────
const faqs = [
  {
    question: 'How is age calculated for government exam eligibility in 2026?',
    answer: 'Most central government exams use 1st August of the exam year as the age cut-off date. For SSC CGL 2026, the cut-off is 1st January 2026. For IBPS PO and SBI PO, it is the date mentioned in the official notification. This tool uses 1st August as the standard default reference date.',
  },
  {
    question: 'Do OBC, SC/ST candidates get age relaxation in government exams in 2026?',
    answer: 'Yes. OBC (Non-Creamy Layer) candidates get 3 years of age relaxation in almost all central government exams. SC/ST candidates get 5 years relaxation. PwBD candidates get 10 years (General), 13 years (OBC), or 15 years (SC/ST). EWS candidates do NOT get any age relaxation — same as General.',
  },
  {
    question: 'Can a final year graduation student apply for UPSC CSE 2026?',
    answer: 'Yes — UPSC Civil Services (IAS/IPS/IFS) allows candidates appearing in the final year of graduation. However, IBPS PO 2026 and SBI PO 2026 require completed graduation at the time of applying. Final-year students are NOT eligible for bank PO exams.',
  },
  {
    question: 'Is there any attempt limit for SSC CGL, IBPS PO, or RRB NTPC in 2026?',
    answer: 'No. SSC CGL, IBPS PO, SBI PO, and RRB NTPC have no official attempt limit — you can keep appearing until you exceed the age limit. Only UPSC IAS has a strict attempt limit: 6 attempts for General/EWS, 9 for OBC, and unlimited for SC/ST (up to the age limit).',
  },
  {
    question: 'What physical standards are required for Railway NTPC 2026 posts?',
    answer: 'All RRB NTPC posts require minimum vision of 6/9 (one eye) and 6/12 (the other), without glasses. Normal colour vision and no night blindness are compulsory. Station Master posts additionally require height of 158cm (Male) / 152cm (Female). SSC CPO (Sub-Inspector) requires height 170cm (Male) / 157cm (Female), chest 80/85cm, and corrected vision 6/6 + 6/9.',
  },
  {
    question: 'Which government exams can a 12th pass student apply for in 2026?',
    answer: 'A 12th pass candidate can apply for SSC CHSL 2026, RRB NTPC Under-Graduate posts (Junior Clerk, Ticket Clerk, Commercial Apprentice), NDA 2026, Agniveer (Army, Navy, Air Force), SSC GD Constable, and many state police exams. UPSC, SSC CGL, IBPS PO, and SBI PO all require a graduation degree.',
  },
  {
    question: 'How does EWS reservation work for government exam eligibility in 2026?',
    answer: 'EWS (Economically Weaker Section) candidates get 10% reservation in all central government jobs under the 103rd Constitutional Amendment. However, EWS does NOT receive any age relaxation — the age limit is the same as the General category. An EWS certificate from a competent authority is required at the time of document verification.',
  },
];

// ─── Static eligibility reference table ──────────────────────────────────────
const quickRefTable = [
  { exam: 'UPSC IAS 2026', minAge: 21, maxAge: 32, qualification: 'Graduate', attempts: '6 (Gen)', notification: 'Feb 2026' },
  { exam: 'SSC CGL 2026', minAge: 18, maxAge: 32, qualification: 'Graduate', attempts: 'No limit', notification: 'Apr 2026' },
  { exam: 'IBPS PO 2026', minAge: 20, maxAge: 30, qualification: 'Graduate (complete)', attempts: 'No limit', notification: 'Jul 2026' },
  { exam: 'SBI PO 2026', minAge: 21, maxAge: 30, qualification: 'Graduate (complete)', attempts: 'No limit', notification: 'Mar 2026' },
  { exam: 'RRB NTPC 2026', minAge: 18, maxAge: 33, qualification: '12th / Graduate', attempts: 'No limit', notification: 'TBN' },
  { exam: 'SSC CHSL 2026', minAge: 18, maxAge: 27, qualification: '12th Pass', attempts: 'No limit', notification: 'May 2026' },
  { exam: 'NDA 2026', minAge: 16.5, maxAge: 19.5, qualification: '12th Pass', attempts: 'No limit', notification: 'Dec 2025 / Jun 2026' },
  { exam: 'Agniveer 2026', minAge: 17.5, maxAge: 21, qualification: '10th / 12th', attempts: 'No limit', notification: 'TBN' },
];

// ─── Stats bar ────────────────────────────────────────────────────────────────
const stats = [
  { label: 'Exams Covered', value: '100+', sub: 'All categories' },
  { label: 'Age Reference Date', value: '1 Aug', sub: 'Standard cut-off' },
  { label: 'OBC Relaxation', value: '+3 yrs', sub: 'Central exams' },
  { label: 'SC / ST Relaxation', value: '+5 yrs', sub: 'Central exams' },
  { label: 'PwBD Relaxation', value: '+10 yrs', sub: 'General category' },
];

// ─── JSON-LD Schema ───────────────────────────────────────────────────────────
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Government Exam Eligibility Checker 2026',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  description: 'Check your eligibility for 100+ Indian government exams in 2026. Free tool by TaiyarHo.',
  url: 'https://www.taiyarho.in/tools/eligibility-checker/',
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function EligibilityCheckerPage() {
  return (
    <>
      <div className="container-main py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-surface-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary-500">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/tools/eligibility-checker/" className="hover:text-primary-500">Tools</Link>
          <span className="mx-2">›</span>
          <span className="text-surface-800">Eligibility Checker 2026</span>
        </nav>

        {/* ── HERO HEADER ── */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 font-heading">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            Free Tool · Updated for 2026 Cycles
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-surface-900 mb-3 leading-tight">
            Government Exam Eligibility Checker{' '}
            <span className="text-accent-500">2026</span>
          </h1>
          <p className="text-surface-500 text-lg leading-relaxed mb-4">
            Instantly find out which government exams you are eligible for in 2026 — based on your age, category, qualification, and domicile. No login. No spam. 100% free.
          </p>
          <p className="text-surface-500 text-base leading-relaxed">
            Use <strong className="text-surface-700">⚡ Quick Check</strong> to scan all 100 exams in seconds, or <strong className="text-surface-700">🔍 Deep Check</strong> for a full eligibility report on UPSC IAS, SSC CGL, IBPS PO, SBI PO, and RRB NTPC — including attempt counts, domicile rules, and physical standards.
          </p>
        </div>

        {/* ── STATS BAR ── */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8 max-w-3xl">
          {stats.map(s => (
            <div key={s.label} className="card p-4 text-center">
              <div className="text-xl font-heading font-bold text-primary-600">{s.value}</div>
              <div className="text-xs font-semibold text-surface-700 mt-0.5 leading-tight">{s.label}</div>
              <div className="text-xs text-surface-400 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* ── TOOL ── */}
        <TabSwitcher />

        {/* ── ELIGIBILITY REFERENCE TABLE ── */}
        <section className="max-w-4xl mt-16" aria-labelledby="ref-table-heading">
          <h2 id="ref-table-heading" className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-2">
            📋 Government Exam Eligibility at a Glance — 2026
          </h2>
          <p className="text-surface-500 text-sm mb-5">
            Quick reference for age limits and qualifications for the most popular central government exams.{' '}
            OBC gets +3 years, SC/ST gets +5 years on top of the General maximum age below.
          </p>
          <div className="card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-900 text-white">
                  <th className="text-left px-4 py-3 font-heading font-semibold text-xs uppercase tracking-wide">Exam</th>
                  <th className="px-4 py-3 font-heading font-semibold text-xs uppercase tracking-wide text-center">Min Age</th>
                  <th className="px-4 py-3 font-heading font-semibold text-xs uppercase tracking-wide text-center">Max Age (Gen)</th>
                  <th className="text-left px-4 py-3 font-heading font-semibold text-xs uppercase tracking-wide">Minimum Qualification</th>
                  <th className="px-4 py-3 font-heading font-semibold text-xs uppercase tracking-wide text-center">Attempt Limit</th>
                  <th className="px-4 py-3 font-heading font-semibold text-xs uppercase tracking-wide text-center">2026 Notification</th>
                </tr>
              </thead>
              <tbody>
                {quickRefTable.map((row, i) => (
                  <tr key={row.exam} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : 'bg-white'}`}>
                    <td className="px-4 py-3 font-medium text-surface-900">{row.exam}</td>
                    <td className="px-4 py-3 text-center text-surface-700">{row.minAge}</td>
                    <td className="px-4 py-3 text-center font-semibold text-primary-600">{row.maxAge}</td>
                    <td className="px-4 py-3 text-surface-600">{row.qualification}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`badge text-xs font-heading ${row.attempts === 'No limit' ? 'badge-green' : 'badge-primary'}`}>{row.attempts}</span>
                    </td>
                    <td className="px-4 py-3 text-center text-surface-500 text-xs">{row.notification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-surface-400 mt-2">
            ⚠️ Age limits shown are for General/EWS category as of 1 August 2026 (standard cut-off). NDA/Agniveer ages calculated from DOB as per official notification. Always verify from the official notification before applying.
          </p>
        </section>

        {/* ── CATEGORY RELAXATION BOX ── */}
        <section className="max-w-3xl mt-12" aria-labelledby="relaxation-heading">
          <h2 id="relaxation-heading" className="text-xl font-heading font-bold text-surface-900 mb-4">
            📋 Age Relaxation for All Categories — 2026
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { cat: '🟡 OBC (Non-Creamy Layer)', relax: '+3 years', note: 'Applies to all central govt exams. NCL certificate required.', color: 'border-amber-300 bg-amber-50' },
              { cat: '🔵 SC / ST', relax: '+5 years', note: 'For all central govt exams. Caste certificate from competent authority required.', color: 'border-blue-300 bg-blue-50' },
              { cat: '🟢 PwBD (General)', relax: '+10 years', note: 'Person with Benchmark Disability. Disability certificate (40%+) required.', color: 'border-emerald-300 bg-emerald-50' },
              { cat: '🟢 PwBD (OBC)', relax: '+13 years', note: 'OBC relaxation (3) + PwBD relaxation (10) = 13 years total.', color: 'border-emerald-300 bg-emerald-50' },
              { cat: '🟢 PwBD (SC/ST)', relax: '+15 years', note: 'SC/ST relaxation (5) + PwBD relaxation (10) = 15 years total.', color: 'border-emerald-300 bg-emerald-50' },
              { cat: '🟠 Ex-Servicemen', relax: '+5 years', note: 'Plus actual military service period for some exams. Discharge certificate required.', color: 'border-orange-300 bg-orange-50' },
              { cat: '⚪ EWS', relax: '0 years', note: 'EWS gets 10% reservation but NO age relaxation. Same age limit as General.', color: 'border-surface-300 bg-surface-50' },
              { cat: '🔵 J&K Domicile', relax: '+5 years', note: 'Applicable for UPSC and some central exams. Domicile certificate required.', color: 'border-blue-300 bg-blue-50' },
            ].map(item => (
              <div key={item.cat} className={`rounded-xl border p-4 ${item.color}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-heading font-semibold text-surface-800 text-sm">{item.cat}</span>
                  <span className="text-base font-bold text-primary-600 font-heading">{item.relax}</span>
                </div>
                <p className="text-xs text-surface-600 leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 card p-4 bg-primary-50 border-primary-200">
            <p className="text-sm text-primary-800 leading-relaxed">
              <strong>📖 Want the complete guide?</strong>{' '}
              Read our{' '}
              <Link href="/blog/government-exam-age-limit-obc-sc-st-relaxation-2026" className="text-primary-600 hover:underline font-semibold">
                Government Exam Age Limit with OBC, SC/ST Relaxation 2026 — Full List
              </Link>{' '}
              for exam-wise tables and all edge cases.
            </p>
          </div>
        </section>

        {/* ── INTERNAL LINKS / RELATED TOOLS ── */}
        <section className="max-w-3xl mt-12" aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-xl font-heading font-bold text-surface-900 mb-4">
            🔗 Related Tools & Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/exams/upsc-ias', label: 'UPSC IAS 2026 — Complete Guide', sub: 'Syllabus, eligibility, salary, books', icon: '🏛️' },
              { href: '/exams/ssc-cgl', label: 'SSC CGL 2026 — Full Details', sub: 'Age limit, posts, salary, cut-offs', icon: '📝' },
              { href: '/exams/ibps-po', label: 'IBPS PO 2026 — Preparation Guide', sub: 'Eligibility, syllabus, in-hand salary', icon: '🏦' },
              { href: '/exams/sbi-po', label: 'SBI PO 2026 — Complete Guide', sub: 'Notification, exam pattern, career path', icon: '💼' },
              { href: '/exams/rrb-ntpc', label: 'RRB NTPC 2026 — Railway Guide', sub: 'Posts, eligibility, physical standards', icon: '🚂' },
              { href: '/blog/government-exam-age-limit-obc-sc-st-relaxation-2026', label: 'Age Relaxation 2026 — Full Guide', sub: 'OBC, SC/ST, PwBD, Ex-SM rules', icon: '📅' },
              { href: '/guides/age-relaxation-government-exams', label: 'Age Relaxation Deep Dive', sub: 'Category-wise rules, documents needed', icon: '📋' },
              { href: '/resources', label: 'Free Resources Hub', sub: 'Books, YouTube, mock tests — all free', icon: '📚' },
            ].map(link => (
              <Link key={link.href} href={link.href}
                className="card p-4 flex items-start gap-3 hover:border-primary-300 hover:shadow-md transition-all group">
                <span className="text-xl mt-0.5">{link.icon}</span>
                <div>
                  <div className="font-heading font-semibold text-sm text-surface-800 group-hover:text-primary-600 transition-colors">{link.label}</div>
                  <div className="text-xs text-surface-400 mt-0.5">{link.sub}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── FAQ SECTION ── */}
        <section className="max-w-3xl mt-14" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-xl font-heading font-bold text-surface-900 mb-5">
            Frequently Asked Questions — Eligibility Checker 2026
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="card group">
                <summary className="p-5 cursor-pointer flex items-start justify-between font-medium text-surface-800 hover:text-primary-500 transition-colors list-none gap-3">
                  <span>{faq.question}</span>
                  <svg className="w-5 h-5 text-surface-400 group-open:rotate-180 transition-transform flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-surface-600 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </section>

        {/* ── DISCLAIMER ── */}
        <div className="max-w-3xl mt-10 p-4 bg-surface-50 rounded-xl border border-surface-200">
          <p className="text-xs text-surface-500 leading-relaxed">
            <strong>Disclaimer:</strong> This tool provides an approximate eligibility assessment based on official general eligibility rules. Age is calculated as of 1 August of the current year as the default. Some exams have specific cut-off dates — always refer to the official notification. Eligibility for certain posts may additionally require subject-specific degrees (e.g., B.E./B.Tech for engineering posts, MBBS for medical, B.Ed for teaching). TaiyarHo is not affiliated with UPSC, SSC, IBPS, SBI, or any Railway Recruitment Board.
          </p>
        </div>
      </div>

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
    </>
  );
}

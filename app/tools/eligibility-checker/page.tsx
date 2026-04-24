import { Metadata } from 'next';
import Link from 'next/link';
import EligibilityChecker from '@/components/EligibilityChecker';

export const metadata: Metadata = {
  title: 'Government Exam Eligibility Checker 2026 — UPSC, SSC CGL, IBPS PO, RRB NTPC | TaiyarHo',
  description: 'Check if you are eligible for UPSC IAS, SSC CGL, IBPS PO, SBI PO and RRB NTPC in seconds. Checks age, qualification, attempt count, domicile and physical standards. Free tool by TaiyarHo.',
  openGraph: {
    title: 'Government Exam Eligibility Checker 2026 | TaiyarHo',
    description: 'Instantly check your eligibility for UPSC, SSC CGL, IBPS PO, SBI PO and RRB NTPC based on age, category, qualification and more.',
  },
};

const faqs = [
  {
    question: 'How is age calculated for government exam eligibility?',
    answer: 'Most government exams calculate age as of a specific reference date mentioned in the notification — typically 1st January or 1st August of the exam year. This tool uses 1st August as the reference date, which is standard for most exams.',
  },
  {
    question: 'Do OBC candidates get age relaxation in all government exams?',
    answer: 'Yes, OBC (Non-Creamy Layer) candidates get 3 years of age relaxation in almost all central government exams. This means if the upper age limit is 30, OBC candidates can apply up to age 33.',
  },
  {
    question: 'Can a final year student apply for UPSC and SSC CGL?',
    answer: 'Yes — UPSC Civil Services allows final year graduation students to appear in Prelims. SSC CGL also allows final year students. However, IBPS PO and SBI PO require completed graduation — final year students are NOT eligible for bank PO exams.',
  },
  {
    question: 'Is there any attempt limit for SSC CGL, IBPS PO, or RRB NTPC?',
    answer: 'No. SSC CGL, IBPS PO, SBI PO, and RRB NTPC have no official attempt limit. Candidates can appear as many times as they want until they exceed the upper age limit. Only UPSC IAS has an attempt limit — 6 for General, 9 for OBC, unlimited for SC/ST.',
  },
  {
    question: 'What physical standards are required for Railway NTPC jobs?',
    answer: 'All RRB NTPC posts require vision standards: 6/9 in one eye and 6/12 in the other (without glasses), normal colour vision, and no night blindness. Station Master posts additionally require a minimum height of 158 cm (male) and 152 cm (female).',
  },
];

export default function EligibilityCheckerPage() {
  return (
    <>
      <div className="container-main py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-surface-500 mb-6">
          <Link href="/" className="hover:text-primary-500">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/tools/eligibility-checker" className="hover:text-primary-500">Tools</Link>
          <span className="mx-2">›</span>
          <span className="text-surface-800">Eligibility Checker 2.0</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
            Updated for 2026
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-surface-900 mb-3">
            Government Exam Eligibility Checker
          </h1>
          <p className="text-surface-500 text-lg leading-relaxed mb-4">
            Fill one form and instantly know your eligibility for <strong>5 major exams</strong> — UPSC IAS, SSC CGL, IBPS PO, SBI PO, and RRB NTPC. Checks age, category relaxation, qualification, attempt count, domicile, and physical standards.
          </p>
          {/* Exam pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: '🏛️ UPSC IAS', slug: 'upsc-ias' },
              { label: '📝 SSC CGL', slug: 'ssc-cgl' },
              { label: '🏦 IBPS PO', slug: 'ibps-po' },
              { label: '💼 SBI PO', slug: 'sbi-po' },
              { label: '🚂 RRB NTPC', slug: 'rrb-ntpc' },
            ].map(e => (
              <Link key={e.slug} href={`/exams/${e.slug}`}
                className="text-xs font-medium bg-surface-100 text-surface-600 hover:bg-primary-50 hover:text-primary-500 px-3 py-1.5 rounded-lg transition-colors">
                {e.label}
              </Link>
            ))}
          </div>
        </div>

        {/* The interactive form */}
        <EligibilityChecker />

        {/* FAQ section with structured data */}
        <section className="max-w-3xl mt-16">
          <h2 className="text-xl font-heading font-bold text-surface-900 mb-5">
            Frequently Asked Questions
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
      </div>

      {/* JSON-LD FAQ schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(f => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }),
        }}
      />
    </>
  );
}

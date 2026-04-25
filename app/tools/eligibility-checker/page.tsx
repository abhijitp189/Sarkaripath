import { Metadata } from 'next';
import Link from 'next/link';
import EligibilityChecker from '@/components/EligibilityChecker';
import QuickChecker from '@/components/QuickChecker';

export const metadata: Metadata = {
  title: 'Government Exam Eligibility Checker 2026 — UPSC, SSC, Banking, Railway | TaiyarHo',
  description: 'Check if you are eligible for 100+ government exams including UPSC IAS, SSC CGL, IBPS PO, SBI PO and RRB NTPC. Quick check for all 100 exams or deep check with full rules. Free tool by TaiyarHo.',
  openGraph: {
    title: 'Government Exam Eligibility Checker 2026 | TaiyarHo',
    description: 'Instantly check your eligibility for 100+ government exams. Free tool by TaiyarHo.',
  },
};

const faqs = [
  {
    question: 'How is age calculated for government exam eligibility?',
    answer: 'Most government exams calculate age as of a specific reference date — typically 1st January or 1st August of the exam year. This tool uses 1st August as the standard reference date.',
  },
  {
    question: 'Do OBC candidates get age relaxation in all government exams?',
    answer: 'Yes, OBC (Non-Creamy Layer) candidates get 3 years of age relaxation in almost all central government exams. SC/ST candidates get 5 years. PwBD candidates get 10 years.',
  },
  {
    question: 'Can a final year student apply for UPSC and SSC CGL?',
    answer: 'Yes — UPSC Civil Services and SSC CGL allow final year graduation students. However, IBPS PO and SBI PO require completed graduation — final year students are NOT eligible for bank PO exams.',
  },
  {
    question: 'Is there any attempt limit for SSC CGL, IBPS PO, or RRB NTPC?',
    answer: 'No. SSC CGL, IBPS PO, SBI PO, and RRB NTPC have no official attempt limit. Only UPSC IAS has an attempt limit — 6 for General, 9 for OBC, unlimited for SC/ST.',
  },
  {
    question: 'What physical standards are required for Railway NTPC jobs?',
    answer: 'All RRB NTPC posts require vision standards: 6/9 in one eye and 6/12 in the other (without glasses), normal colour vision, and no night blindness. Station Master posts additionally require minimum height of 158cm (male) / 152cm (female).',
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
          <span className="text-surface-800">Eligibility Checker</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full animate-pulse" />
            Updated for 2026
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-surface-900 mb-3">
            Government Exam Eligibility Checker
          </h1>
          <p className="text-surface-500 text-lg leading-relaxed">
            Find out which government exams you qualify for. Choose <strong>Quick Check</strong> to scan all 100 exams instantly, or <strong>Deep Check</strong> for a detailed analysis of 5 major exams including attempt limits, domicile, and physical standards.
          </p>
        </div>

        {/* Tab switcher — client component handles this */}
        <TabPage faqs={faqs} />
      </div>

      {/* JSON-LD */}
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

// Server component passes faqs as props to avoid serialization issues
function TabPage({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <>
      <TabSwitcher />
      {/* FAQ */}
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
    </>
  );
}

// The tab UI needs to be client-side
import TabSwitcher from '@/components/TabSwitcher';

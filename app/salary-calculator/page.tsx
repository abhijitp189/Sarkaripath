// app/salary-calculator/page.tsx
import type { Metadata } from 'next';
import SalaryCalculator from '@/components/SalaryCalculator';

export const metadata: Metadata = {
  title: 'Government Job Salary Calculator 2026 — UPSC IAS, SSC CGL, SBI PO, IBPS PO, RRB NTPC | TaiyarHo',
  description:
    'Find out your exact in-hand salary after joining a government job. Calculate post-wise salary for UPSC IAS, SSC CGL, SBI PO, IBPS PO, and RRB NTPC including DA, HRA, TA and all deductions. Free tool by TaiyarHo.',
  keywords: [
    'government job salary calculator',
    'SSC CGL salary in hand 2026',
    'IBPS PO salary per month',
    'SBI PO salary in hand',
    'IAS officer salary',
    'RRB NTPC salary',
    'sarkari naukri salary',
    '7th pay commission salary calculator',
  ],
  openGraph: {
    title: 'Government Job Salary Calculator 2026 | TaiyarHo',
    description:
      'Calculate your exact in-hand salary for UPSC IAS, SSC CGL, SBI PO, IBPS PO, RRB NTPC — including DA, HRA, TA, and all deductions.',
    url: 'https://taiyarho.in/salary-calculator',
    siteName: 'TaiyarHo',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function SalaryCalculatorPage() {
  return (
    <main className="min-h-screen bg-surface-50">
      {/* Hero */}
      <section className="bg-white border-b border-surface-200 py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-accent-100 text-accent-600 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Free Tool · No Login Needed
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-surface-900 mb-3">
            Government Job Salary Calculator
          </h1>
          <p className="text-surface-500 text-base max-w-xl mx-auto leading-relaxed">
            Find out your exact in-hand salary for any government post — including DA, HRA, TA, and
            all deductions. Data verified from 7th Pay Commission & official bank notifications.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-10 px-4">
        <SalaryCalculator />
      </section>

      {/* SEO FAQ Section */}
      <section className="bg-white border-t border-surface-200 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-2xl text-surface-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <div key={i} className="border-b border-surface-100 pb-6">
                <h3 className="font-heading font-semibold text-surface-800 mb-2">{item.q}</h3>
                <p className="text-surface-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const faqItems = [
  {
    q: 'What is the in-hand salary for SSC CGL Income Tax Inspector in Delhi?',
    a: 'An SSC CGL Income Tax Inspector (Pay Level 7, Basic ₹44,900) posted in Delhi (X-class city) earns approximately ₹62,000–₹70,000 in-hand per month after DA, HRA, TA, and NPS deductions as per the 7th Pay Commission.',
  },
  {
    q: 'How much does an SBI PO earn per month in 2026?',
    a: "An SBI Probationary Officer's starting basic pay is ₹56,480 as per the revised bipartite settlement. After adding DA, Special Allowance, HRA, and CCA, and deducting NPS, the in-hand salary in a metro city is approximately ₹84,000–₹86,000 per month.",
  },
  {
    q: 'What is the difference between gross salary and in-hand salary?',
    a: 'Gross salary is your total earnings including Basic Pay + DA + HRA + TA + Special Allowances. In-hand salary is what is actually credited to your bank account after deductions like NPS (10% of basic), CGHS, Professional Tax, and Group Insurance.',
  },
  {
    q: 'Is IAS salary higher than SBI PO salary?',
    a: 'Yes. A fresh IAS officer earns approximately ₹75,000–₹85,000 in-hand per month in a metro city, compared to ~₹84,000 for SBI PO. However, IAS officers also receive massive non-cash perks like a government bungalow, vehicle, staff, free utilities, and significantly higher career-growth salary.',
  },
  {
    q: 'What city categories are used for HRA calculation in government jobs?',
    a: 'The government classifies cities into three categories: X (metros like Delhi, Mumbai, Bengaluru, Chennai, Hyderabad, Pune, Kolkata) with 27% HRA, Y (cities with 5 lakh+ population) with 18% HRA, and Z (all other towns and rural areas) with 9% HRA.',
  },
  {
    q: 'What is DA (Dearness Allowance) in 2026?',
    a: 'For central government employees (SSC, RRB, IAS), DA is approximately 53% of Basic Pay as of early 2026 and is revised twice a year (January and July). For banking sector employees (IBPS, SBI), DA is approximately 46.5% of Basic Pay.',
  },
];

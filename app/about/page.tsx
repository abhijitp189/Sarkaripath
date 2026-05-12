import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | TaiyarHo.in',
  description:
    'TaiyarHo.in is a free website helping lakhs of Indian students prepare for government exams like SSC CGL, UPSC, IBPS, RRB, and more.',
  alternates: {
    canonical: 'https://www.taiyarho.in/about/',
  },
};

export default function AboutPage() {
  return (
    <main className="container-main py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">About Us</span>
      </nav>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-surface-900 mb-3">
          About TaiyarHo.in
        </h1>
        <p className="text-surface-500 text-lg mb-8">
          Free exam guidance for every serious government job aspirant in India.
        </p>

        <div className="card p-6 sm:p-8 space-y-6 text-surface-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              Who We Are
            </h2>
            <p>
              TaiyarHo.in is a free, ad-supported website dedicated to helping Indian students
              prepare for government competitive exams. We cover 100+ exams across categories
              including SSC, UPSC, Banking, Railway, Defence, State PSC, Teaching, and Police.
            </p>
            <p className="mt-3">
              The website is built and maintained by a small team passionate about making quality
              exam guidance accessible to everyone — whether you are in a metro city or a small town.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              What We Offer
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-surface-700">
              <li>Complete syllabus breakdowns for all major government exams</li>
              <li>Eligibility information — age, qualification, category-wise details</li>
              <li>Curated lists of the best books for each exam</li>
              <li>Free YouTube channels, Telegram groups, and PDF resources</li>
              <li>Study plans and preparation tips from toppers</li>
              <li>An <Link href="/tools/eligibility-checker/" className="text-primary-500 hover:underline">Eligibility Checker tool</Link> to instantly know if you qualify for an exam</li>
              <li>Current affairs updates relevant to government exams</li>
              <li>Preparation guides for different exam categories</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              Our Mission
            </h2>
            <p>
              Millions of students in India aspire to government jobs every year. Coaching centres
              are expensive and not always accessible. TaiyarHo.in exists to bridge that gap — to
              give every student, regardless of background, access to reliable, up-to-date,
              and well-organised exam information completely free of cost.
            </p>
            <p className="mt-3">
              <em>Taiyar Ho?</em> — Are you ready? That is the question we ask every visitor. And
              our job is to make sure your answer is yes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              Accuracy & Updates
            </h2>
            <p>
              We make every effort to keep exam information accurate and up to date. However,
              government exam notifications, eligibility criteria, and exam patterns can change
              at any time. We always recommend verifying important details from the official
              notification or the relevant recruiting body&apos;s website before applying.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              Contact Us
            </h2>
            <p>
              Have a suggestion, found an error, or want to contribute? We would love to hear
              from you. Visit our{' '}
              <Link href="/contact/" className="text-primary-500 hover:underline">
                Contact page
              </Link>{' '}
              to get in touch.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}

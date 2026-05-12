import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | TaiyarHo.in',
  description:
    'Read the disclaimer for TaiyarHo.in. We provide exam information for educational purposes — always verify details from official sources before applying.',
  alternates: {
    canonical: 'https://www.taiyarho.in/disclaimer/',
  },
};

export default function DisclaimerPage() {
  return (
    <main className="container-main py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">Disclaimer</span>
      </nav>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-surface-900 mb-3">
          Disclaimer
        </h1>
        <p className="text-surface-500 text-lg mb-2">
          Last updated: May 12, 2026
        </p>
        <p className="text-surface-500 mb-8">
          Please read this disclaimer carefully before using <strong>taiyarho.in</strong>.
        </p>

        <div className="card p-6 sm:p-8 space-y-6 text-surface-700 leading-relaxed">

          {/* Important notice box */}
          <div className="bg-accent-50 border-l-4 border-accent-500 rounded-r-xl p-4">
            <p className="font-heading font-semibold text-surface-800 mb-1">⚠️ Important Notice</p>
            <p className="text-sm">
              TaiyarHo.in is an independent educational website. We are <strong>not affiliated
              with any government body, exam authority, or recruiting organisation</strong>.
              Always verify exam details from the official notification or official website
              before applying.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              1. General Information Only
            </h2>
            <p>
              All content on TaiyarHo.in — including exam eligibility, syllabus, exam pattern,
              salary, cut-off marks, and application dates — is provided for general
              informational and educational purposes only. This information is compiled
              from publicly available official sources, but may not always be current or complete.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              2. No Affiliation with Government Bodies
            </h2>
            <p>
              TaiyarHo.in is a private, independent website. We have no affiliation,
              endorsement, or official connection with any of the following or similar bodies:
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>Staff Selection Commission (SSC)</li>
              <li>Union Public Service Commission (UPSC)</li>
              <li>Institute of Banking Personnel Selection (IBPS)</li>
              <li>Railway Recruitment Board (RRB)</li>
              <li>State Public Service Commissions</li>
              <li>Any other government recruiting authority mentioned on this site</li>
            </ul>
            <p className="mt-3">
              All trademarks, logos, and exam names mentioned on this website belong to their
              respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              3. Accuracy of Information
            </h2>
            <p>
              We make every effort to keep the information on this website accurate and
              up to date. However, government exam notifications, eligibility conditions,
              syllabus, application dates, and selection processes <strong>change frequently
              and without notice</strong>.
            </p>
            <p className="mt-3">
              TaiyarHo.in shall not be held responsible for any errors, omissions, or outdated
              information. Decisions based solely on the content of this website — such as
              submitting an application — are made entirely at your own risk.
            </p>
            <p className="mt-3">
              <strong>Always refer to the official notification</strong> published by the
              recruiting body before filling any application form.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              4. External Links
            </h2>
            <p>
              Our website includes links to external websites including official exam portals,
              YouTube channels, book purchase pages, and Telegram groups. These are provided
              for convenience and reference only. TaiyarHo.in does not endorse or take
              responsibility for the content, accuracy, or availability of any external site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              5. Book & Resource Recommendations
            </h2>
            <p>
              Book recommendations and resource lists on this website are based on general
              popularity among aspirants. We may include affiliate links in the future. Any
              such links will be clearly disclosed. We do not guarantee results from using
              any recommended book or resource.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, TaiyarHo.in and its owner(s) shall not
              be liable for any direct, indirect, incidental, or consequential damages arising
              from the use or inability to use this website or its content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              7. Changes to This Disclaimer
            </h2>
            <p>
              We reserve the right to update this disclaimer at any time. Any changes will
              be reflected on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              8. Questions
            </h2>
            <p>
              If you have questions or concerns about this disclaimer, please{' '}
              <Link href="/contact/" className="text-primary-500 hover:underline">
                contact us
              </Link>
              .
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}

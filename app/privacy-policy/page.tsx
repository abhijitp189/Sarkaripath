import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | TaiyarHo.in',
  description:
    'Privacy Policy for TaiyarHo.in — learn how we collect, use, and protect your information.',
  alternates: {
    canonical: 'https://www.taiyarho.in/privacy-policy/',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container-main py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">Privacy Policy</span>
      </nav>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-surface-900 mb-3">
          Privacy Policy
        </h1>
        <p className="text-surface-500 text-lg mb-2">
          Last updated: May 2026
        </p>
        <p className="text-surface-500 mb-8">
          This policy applies to <strong>taiyarho.in</strong> and all its sub-pages.
        </p>

        <div className="card p-6 sm:p-8 space-y-6 text-surface-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              1. Information We Collect
            </h2>
            <p>
              TaiyarHo.in does not require you to create an account or provide any personal
              information to use the website. We do not collect your name, email address, or
              phone number unless you voluntarily contact us.
            </p>
            <p className="mt-3">
              We use <strong>Google Analytics</strong> to collect anonymous, aggregated data about
              how visitors use our website — such as which pages are visited, how long visitors
              stay, and what devices or browsers are used. This data does not identify you
              personally.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              2. Cookies
            </h2>
            <p>
              Our website uses cookies through Google Analytics and Google AdSense to help us
              understand site traffic and to display relevant advertisements. These cookies are
              set by Google, not by us directly.
            </p>
            <p className="mt-3">
              You can opt out of Google Analytics tracking by installing the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:underline"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              . You can also manage cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              3. Google AdSense & Advertising
            </h2>
            <p>
              TaiyarHo.in uses Google AdSense to display advertisements. Google may use cookies
              to serve ads based on your prior visits to this or other websites. You can opt out
              of personalised advertising by visiting{' '}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:underline"
              >
                Google&apos;s Ads Settings
              </a>
              .
            </p>
            <p className="mt-3">
              We do not control the content of ads displayed by Google and are not responsible
              for their content or the privacy practices of advertised websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              4. Third-Party Links
            </h2>
            <p>
              Our website contains links to external websites such as official exam portals,
              YouTube channels, Telegram groups, and book purchase pages. Once you leave
              TaiyarHo.in, this Privacy Policy no longer applies. We encourage you to read
              the privacy policies of any external sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              5. Children&apos;s Privacy
            </h2>
            <p>
              TaiyarHo.in is intended for students who are generally 18 years of age or older.
              We do not knowingly collect any personal information from children under 13. If
              you believe a child has submitted personal information to us, please contact us
              and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              6. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be reflected
              on this page with an updated date at the top. We recommend reviewing this page
              periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              7. Contact
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please visit our{' '}
              <Link href="/contact/" className="text-primary-500 hover:underline">
                Contact page
              </Link>
              .
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}

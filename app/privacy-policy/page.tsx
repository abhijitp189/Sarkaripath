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
          Last updated: May 12, 2026
        </p>
        <p className="text-surface-500 mb-8">
          This policy applies to <strong>www.taiyarho.in</strong> and all its sub-pages.
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
              stay, and what devices or browsers are used. This data does not personally
              identify you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              2. Log Data
            </h2>
            <p>
              Like most websites, our hosting provider automatically collects certain log data
              when you visit TaiyarHo.in. This may include your IP address, browser type,
              operating system, referring URL, pages visited, and the date and time of your
              visit. This information is used for security, performance monitoring, and
              diagnosing technical issues. It is not linked to any personally identifiable
              information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              3. Cookies
            </h2>
            <p>
              Cookies are small text files stored on your device by your browser. Our website
              uses cookies through Google Analytics and Google AdSense. These cookies help us
              understand how visitors use the site and allow Google to display relevant
              advertisements. We do not set any first-party cookies ourselves.
            </p>
            <p className="mt-3">
              You can instruct your browser to refuse all cookies or to notify you when a
              cookie is being set. However, some parts of the website may not function properly
              without cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              4. Google Analytics
            </h2>
            <p>
              We use Google Analytics to understand how our site is used. Google Analytics
              collects information such as how often users visit the site, what pages they
              visit, and what other sites they used prior to coming to this site. We use the
              information only to improve TaiyarHo.in.
            </p>
            <p className="mt-3">
              Google Analytics collects only the IP address assigned to you on the date you
              visit the site, not your name or other identifying information. We do not combine
              data collected through Google Analytics with personally identifiable information.
            </p>
            <p className="mt-3">
              You can opt out of Google Analytics by installing the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:underline"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              . For more information on how Google uses data, please visit:{' '}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:underline"
              >
                How Google uses information from sites or apps that use our services
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              5. Google AdSense &amp; Interest-Based Advertising
            </h2>
            <p>
              TaiyarHo.in uses <strong>Google AdSense</strong> to display advertisements.
              Google AdSense uses cookies, including the DoubleClick cookie, to serve ads
              based on your prior visits to this website and other websites on the internet.
              This is known as <strong>interest-based</strong> or <strong>personalised advertising</strong>.
            </p>
            <p className="mt-3">
              Third-party vendors, including Google, use cookies to serve ads based on a
              user&apos;s prior visits to TaiyarHo.in or other websites. Google&apos;s use
              of advertising cookies enables it and its partners to serve ads based on visits
              to our site and/or other sites on the internet.
            </p>
            <p className="mt-3">
              You may opt out of personalised advertising by visiting{' '}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:underline"
              >
                Google&apos;s Ads Settings
              </a>
              {' '}or{' '}
              <a
                href="http://www.networkadvertising.org/managing/opt_out.asp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:underline"
              >
                networkadvertising.org
              </a>
              . You can also opt out via{' '}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:underline"
              >
                aboutads.info
              </a>
              .
            </p>
            <p className="mt-3">
              We do not control the content of ads displayed by Google. Google&apos;s use of
              advertising data is governed by{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:underline"
              >
                Google&apos;s Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              6. Third-Party Links
            </h2>
            <p>
              Our website contains links to external websites such as official exam portals,
              YouTube channels, Telegram groups, and book purchase pages. Once you leave
              TaiyarHo.in, this Privacy Policy no longer applies. We are not responsible for
              the privacy practices of those external sites and encourage you to read their
              privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              7. Data Retention
            </h2>
            <p>
              We do not store any personal data on our own servers. Data collected by Google
              Analytics is retained according to{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:underline"
              >
                Google&apos;s data retention policies
              </a>
              . If you contact us by email, we retain your message only as long as necessary
              to respond to and resolve your query.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              8. Children&apos;s Privacy
            </h2>
            <p>
              TaiyarHo.in is intended for students who are generally 18 years of age or older
              preparing for government competitive examinations. We do not knowingly collect
              any personal information from children under 13. If you believe a child has
              provided personal information to us, please contact us and we will delete it
              promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              9. Governing Law
            </h2>
            <p>
              This Privacy Policy is governed by the laws of India, including the Information
              Technology Act, 2000 and its amendments. Any disputes relating to this policy
              shall be subject to the jurisdiction of courts in India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be
              reflected on this page with an updated date at the top. We recommend reviewing
              this page periodically. Your continued use of the website after changes are
              posted constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-3">
              11. Contact
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please visit our{' '}
              <Link href="/contact/" className="text-primary-500 hover:underline">
                Contact page
              </Link>{' '}
              or email us at{' '}
              <a
                href="mailto:taiyarho1@gmail.com"
                className="text-primary-500 hover:underline"
              >
                taiyarho1@gmail.com
              </a>
              .
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import UniversalSearch from '@/components/UniversalSearch';
import ExamsMegaMenu from '@/components/ExamsMegaMenu';
import GoogleTranslate from '@/components/GoogleTranslate';
import './globals.css';

export const metadata: Metadata = {
  title: 'TaiyarHo – Free Guide for Indian Government Exam Preparation',
  description: 'Complete free guide for all Indian government exams – UPSC, SSC, Banking, Railway. Syllabus, study plans, best books, free resources, and exam strategies.',
  keywords: 'government exam preparation, sarkari exam, sarkari naukri taiyari, UPSC preparation, SSC CGL, IBPS PO, railway exam, government job guide, free study material, सरकारी नौकरी तैयारी, सरकारी परीक्षा, SSC CGL तैयारी, UPSC परीक्षा',
  metadataBase: new URL('https://www.taiyarho.in'),
  alternates: { canonical: 'https://www.taiyarho.in/' },
  openGraph: {
    title: 'TaiyarHo – Free Guide for Indian Government Exam Preparation',
    description: 'Complete free guide for all Indian government exams. Syllabus, study plans, best books, and free resources.',
    siteName: 'TaiyarHo',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-surface-200">
      <nav className="container-main flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img src="/logo.svg" alt="TaiyarHo" className="h-14 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {/* Primary links — always visible */}
          <ExamsMegaMenu />
          <NavLink href="/current-affairs">Current Affairs</NavLink>
          <NavLink href="/blog">Blog</NavLink>

          {/* More dropdown — secondary links */}
          <MoreMenu />

          {/* Utilities */}
          <div className="ml-2 flex items-center gap-1.5">
            <UniversalSearch />
            <GoogleTranslate />
          </div>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden flex items-center gap-1.5">
          <UniversalSearch />
          <MobileMenuButton />
        </div>
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-lg text-sm font-medium text-surface-600 hover:text-primary-500 hover:bg-primary-50 transition-all duration-200 whitespace-nowrap"
    >
      {children}
    </Link>
  );
}

/** Secondary links tucked into a "More ▾" dropdown */
function MoreMenu() {
  return (
    <details className="relative group">
      <summary className="list-none cursor-pointer flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-surface-600 hover:text-primary-500 hover:bg-primary-50 transition-all duration-200 select-none">
        More
        <svg className="w-3.5 h-3.5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="absolute left-0 top-full mt-2 w-52 bg-white rounded-xl shadow-xl border border-surface-200 py-1.5 z-50">
        <MoreMenuLink href="/guides" icon="📖">Guides</MoreMenuLink>
        <MoreMenuLink href="/exam-calendar" icon="📅">Exam Calendar</MoreMenuLink>
        <MoreMenuLink href="/resources" icon="📚">Resources</MoreMenuLink>
        <div className="my-1 border-t border-surface-100" />
        <MoreMenuLink href="/tools/eligibility-checker" icon="✅">Eligibility Checker</MoreMenuLink>
      </div>
    </details>
  );
}

function MoreMenuLink({ href, icon, children }: { href: string; icon: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-surface-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
    >
      <span className="text-base leading-none">{icon}</span>
      <span className="font-medium">{children}</span>
    </Link>
  );
}

function MobileMenuButton() {
  return (
    <details className="relative">
      <summary className="list-none cursor-pointer p-2 rounded-lg hover:bg-surface-100">
        <svg className="w-6 h-6 text-surface-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </summary>
      <div className="absolute right-0 top-full mt-2 w-60 bg-white rounded-xl shadow-lg border border-surface-200 py-2 z-50">
        <MobileNavLink href="/exams" icon="🏛️">All Exams</MobileNavLink>
        <MobileNavLink href="/current-affairs" icon="📰">Current Affairs</MobileNavLink>
        <MobileNavLink href="/blog" icon="✍️">Blog</MobileNavLink>
        <div className="my-1 border-t border-surface-100" />
        <MobileNavLink href="/guides" icon="📖">Guides</MobileNavLink>
        <MobileNavLink href="/exam-calendar" icon="📅">Exam Calendar</MobileNavLink>
        <MobileNavLink href="/resources" icon="📚">Resources</MobileNavLink>
        <MobileNavLink href="/tools/eligibility-checker" icon="✅">Eligibility Checker</MobileNavLink>
        <div className="my-1 border-t border-surface-100" />
        <div className="px-4 py-2">
          <GoogleTranslate />
        </div>
      </div>
    </details>
  );
}

function MobileNavLink({ href, icon, children }: { href: string; icon?: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-surface-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
      {icon && <span className="text-base leading-none">{icon}</span>}
      <span className="font-medium">{children}</span>
    </Link>
  );
}

function Footer() {
  return (
    <footer className="bg-surface-900 text-surface-300 mt-20">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="TaiyarHo" className="h-10 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
            </div>
            <p className="text-sm text-surface-400 leading-relaxed">
              Taiyar Ho? Your free, complete guide for Indian government exam preparation. No paywalls, no spam.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Popular Exams</h3>
            <div className="space-y-2">
              <FooterLink href="/exams/upsc-ias">UPSC IAS</FooterLink>
              <FooterLink href="/exams/ssc-cgl">SSC CGL</FooterLink>
              <FooterLink href="/exams/ibps-po">IBPS PO</FooterLink>
              <FooterLink href="/exams/rrb-ntpc">RRB NTPC</FooterLink>
              <FooterLink href="/exams/sbi-po">SBI PO</FooterLink>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Guides</h3>
            <div className="space-y-2">
              <FooterLink href="/guides/how-to-start-government-exam-preparation">Getting Started</FooterLink>
              <FooterLink href="/guides/best-free-resources-government-exams">Free Resources</FooterLink>
              <FooterLink href="/guides/age-limit-relaxation-government-jobs">Age Relaxation</FooterLink>
              <FooterLink href="/tools/eligibility-checker">Eligibility Checker</FooterLink>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <div className="space-y-2">
              <FooterLink href="/exams">All Exams</FooterLink>
              <FooterLink href="/current-affairs">Current Affairs</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/resources">Free Resources</FooterLink>
              <FooterLink href="/guides">Preparation Guides</FooterLink>
            </div>
          </div>
        </div>

        <div className="border-t border-surface-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-surface-500">&copy; {new Date().getFullYear()} TaiyarHo. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-surface-500 uppercase tracking-wider font-heading">Follow us</span>
            <div className="w-px h-4 bg-surface-700"></div>
            <a href="https://www.facebook.com/TaiyarHo/" target="_blank" rel="noopener noreferrer" aria-label="TaiyarHo on Facebook" className="text-surface-500 hover:text-primary-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.instagram.com/taiyarho1/" target="_blank" rel="noopener noreferrer" aria-label="TaiyarHo on Instagram" className="text-surface-500 hover:text-primary-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <p className="text-xs text-surface-600">
            Disclaimer: This is an informational resource. Always verify details from official exam websites.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block text-sm text-surface-400 hover:text-primary-400 transition-colors">
      {children}
    </Link>
  );
}

function AdSlot({ position }: { position: 'header-banner' | 'sidebar' | 'in-content' | 'footer-banner' }) {
  const adSenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;
  if (!adSenseId) return null;

  return (
    <div className={`ad-slot ad-${position} flex items-center justify-center bg-surface-100 rounded-lg text-surface-400 text-xs ${
      position === 'header-banner' || position === 'footer-banner' ? 'h-24 my-2' : 'h-64 my-4'
    }`}>
      {/* Google AdSense code goes here after approval */}
      {/* <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client={adSenseId} data-ad-slot="YOUR_AD_SLOT" data-ad-format="auto" data-full-width-responsive="true" /> */}
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        {process.env.NEXT_PUBLIC_ADSENSE_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
            crossOrigin="anonymous"
          />
        )}
        {/* WebSite schema — tells Google the official site name is "TaiyarHo" */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'TaiyarHo',
              alternateName: 'TaiyarHo.in',
              url: 'https://www.taiyarho.in',
              description: 'Free comprehensive guide for Indian government exam preparation. Syllabus, study plans, best books, free resources for UPSC, SSC, Banking, Railway and all sarkari exams.',
              inLanguage: ['en-IN', 'hi-IN'],
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.taiyarho.in/exams?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <AdSlot position="header-banner" />
        <main className="flex-1">{children}</main>
        <AdSlot position="footer-banner" />
        <Footer />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7Z5G3W10VG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7Z5G3W10VG');
          `}
        </Script>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'TaiyarHo – Free Guide for Indian Government Exam Preparation',
  description: 'Complete free guide for all Indian government exams – UPSC, SSC, Banking, Railway. Syllabus, study plans, best books, free resources, and exam strategies.',
  keywords: 'government exam preparation, sarkari exam, UPSC preparation, SSC CGL, IBPS PO, railway exam, government job guide, free study material',
  metadataBase: new URL('https://taiyarho.in'),
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
};

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-surface-200">
      <nav className="container-main flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-heading font-bold text-lg shadow-sm">
            S
          </div>
          <span className="font-heading font-bold text-xl text-surface-900 group-hover:text-primary-500 transition-colors">
            Taiyar<span className="text-primary-500">Ho</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <NavLink href="/exams">Exams</NavLink>
          <NavLink href="/guides">Guides</NavLink>
          <NavLink href="/resources">Resources</NavLink>
          <NavLink href="/tools/age-calculator">Eligibility Checker</NavLink>
        </div>

        <div className="md:hidden">
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
      className="px-4 py-2 rounded-lg text-sm font-medium text-surface-600 hover:text-primary-500 hover:bg-primary-50 transition-all duration-200"
    >
      {children}
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
      <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg border border-surface-200 py-2 z-50">
        <MobileNavLink href="/exams">Exams</MobileNavLink>
        <MobileNavLink href="/guides">Guides</MobileNavLink>
        <MobileNavLink href="/resources">Resources</MobileNavLink>
        <MobileNavLink href="/tools/age-calculator">Eligibility Checker</MobileNavLink>
      </div>
    </details>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block px-4 py-3 text-sm text-surface-700 hover:bg-primary-50 hover:text-primary-500">
      {children}
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
              <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center text-white font-heading font-bold">S</div>
              <span className="font-heading font-bold text-lg text-white">TaiyarHo</span>
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
              <FooterLink href="/tools/age-calculator">Eligibility Checker</FooterLink>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <div className="space-y-2">
              <FooterLink href="/exams">All Exams</FooterLink>
              <FooterLink href="/resources">Free Resources</FooterLink>
              <FooterLink href="/guides">Preparation Guides</FooterLink>
            </div>
          </div>
        </div>

        <div className="border-t border-surface-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-surface-500">&copy; {new Date().getFullYear()} TaiyarHo. All rights reserved.</p>
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
        {process.env.NEXT_PUBLIC_ADSENSE_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <AdSlot position="header-banner" />
        <main className="flex-1">{children}</main>
        <AdSlot position="footer-banner" />
        <Footer />
      </body>
    </html>
  );
}

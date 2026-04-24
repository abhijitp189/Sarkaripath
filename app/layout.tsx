// app/layout.tsx
import type { Metadata } from 'next';
import { Poppins, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-source-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'TaiyarHo — Free Guide for Indian Government Exam Preparation',
    template: '%s | TaiyarHo',
  },
  description:
    'Free preparation guide for UPSC IAS, SSC CGL, IBPS PO, RRB NTPC, and SBI PO. Syllabus, study plans, salary calculator, free resources — all in one place.',
  keywords: ['UPSC preparation', 'SSC CGL guide', 'IBPS PO', 'RRB NTPC', 'SBI PO', 'government exam free guide', 'sarkari naukri'],
  metadataBase: new URL('https://taiyarho.in'),
  openGraph: {
    siteName: 'TaiyarHo',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${sourceSans3.variable}`}>
      <body className="font-body text-surface-800 bg-surface-50 antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="bg-white border-b border-surface-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="/" className="font-heading font-bold text-primary-600 text-xl tracking-tight">
          Taiyar<span className="text-accent-500">Ho</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-surface-600 font-medium">
          <a href="/" className="hover:text-primary-600 transition-colors">Home</a>
          <a href="/salary-calculator" className="hover:text-primary-600 transition-colors">Salary Calculator</a>
          <a
            href="/salary-calculator"
            className="bg-primary-500 text-white px-4 py-1.5 rounded-full text-sm hover:bg-primary-600 transition-colors"
          >
            Free Tools
          </a>
        </nav>
        {/* Mobile nav */}
        <a
          href="/salary-calculator"
          className="sm:hidden bg-primary-500 text-white px-3 py-1.5 rounded-full text-xs font-medium"
        >
          Salary Calculator
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-surface-900 text-surface-400 py-10 px-4 mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <p className="font-heading font-bold text-white text-lg">
              Taiyar<span className="text-accent-400">Ho</span>
            </p>
            <p className="text-sm mt-1">Free guide for Indian Government Exam preparation</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/salary-calculator" className="hover:text-white transition-colors">Salary Calculator</a>
          </div>
        </div>
        <div className="border-t border-surface-700 pt-6 text-xs text-surface-500">
          <p>
            Salary data based on 7th Pay Commission guidelines. Figures are estimates for
            informational purposes. Always verify from official notifications.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} TaiyarHo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

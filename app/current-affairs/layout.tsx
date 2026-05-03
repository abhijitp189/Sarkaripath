import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Current Affairs 2026 for Govt Exams | TaiyarHo.in',
  description:
    'Stay updated with weekly current affairs and general knowledge for SSC, UPSC, Banking, and Railway exams. 100% Free. No paywalls, no spam.',
  keywords:
    'current affairs 2026, weekly current affairs for UPSC, SSC current affairs, banking current affairs 2026, GK for government exams, current affairs India',
  openGraph: {
    title: 'Current Affairs 2026 for Govt Exams | TaiyarHo.in',
    description:
      'Exam-oriented weekly digests and monthly roundups. Simplified for aspirants. 100% Free.',
    siteName: 'TaiyarHo',
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://taiyarho.in/current-affairs',
  },
};

export default function CurrentAffairsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

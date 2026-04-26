import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upcoming Government Exams 2026 – Exam Calendar | TaiyarHo',
  description:
    'Check official and tentative dates for all upcoming government exams in 2026 — UPSC, SSC, Banking, Railway, Teaching, Police and more. Plan your preparation with TaiyarHo exam calendar.',
  keywords: [
    'upcoming government exams 2026',
    'government exam calendar 2026',
    'sarkari exam dates 2026',
    'UPSC 2026 date',
    'SSC CGL 2026 date',
    'SBI PO 2026',
    'upcoming sarkari naukri exams',
  ],
  alternates: {
    canonical: 'https://taiyarho.in/exam-calendar/',
  },
  openGraph: {
    title: 'Upcoming Government Exams 2026 – Exam Calendar | TaiyarHo',
    description:
      'Official & tentative exam dates for UPSC, SSC, Banking, Railway, Teaching, Police exams in 2026.',
    url: 'https://taiyarho.in/exam-calendar/',
    siteName: 'TaiyarHo',
    type: 'website',
  },
};

export default function ExamCalendarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

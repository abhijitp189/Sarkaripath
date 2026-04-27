import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Government Exams 2026 – UPSC, SSC, Banking, Railway & More | TaiyarHo',
  description: 'Complete list of 100+ Indian government exams. Browse UPSC, SSC, Banking, Railway, Defence, State PSC, Teaching, and Police exams with syllabus and preparation guides.',
  alternates: { canonical: 'https://taiyarho.in/exams/' },
};

export default function ExamsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

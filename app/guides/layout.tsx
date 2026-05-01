import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preparation Guides – How to Prepare for Government Exams | TaiyarHo',
  description:
    'Step-by-step preparation guides for Indian government exams. Learn how to start preparing, find free resources, understand eligibility, and create study plans.',
  alternates: { canonical: 'https://taiyarho.in/guides/' },
};

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

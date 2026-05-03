import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Government Exam Age Calculator – Check Eligibility by Age | TaiyarHo',
  description: 'Calculate your age eligibility for government exams. Check if you qualify for UPSC, SSC, Banking, and Railway exams based on your date of birth and category.',
  alternates: { canonical: 'https://www.taiyarho.in/tools/age-calculator/' },
};

export default function AgeCalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

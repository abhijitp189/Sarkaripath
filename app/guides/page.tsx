import Link from 'next/link';
import { Metadata } from 'next';
import { guides } from '@/lib/exams-data';

export const metadata: Metadata = {
  title: 'Preparation Guides – How to Prepare for Government Exams | SarkariPath',
  description: 'Step-by-step preparation guides for Indian government exams. Learn how to start preparing, find free resources, understand eligibility, and create study plans.',
};

export default function GuidesPage() {
  return (
    <div className="container-main py-10">
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">Guides</span>
      </nav>

      <h1 className="section-title mb-2">Preparation Guides</h1>
      <p className="section-subtitle mb-10">Everything you need to know about preparing for government exams – from getting started to exam day</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <Link key={guide.slug} href={`/guides/${guide.slug}`} className="card p-6 group flex flex-col">
            <span className="badge badge-accent mb-3 self-start">{guide.category}</span>
            <h2 className="font-heading font-bold text-lg text-surface-900 group-hover:text-primary-500 transition-colors mb-3">
              {guide.title}
            </h2>
            <p className="text-sm text-surface-500 leading-relaxed flex-1">{guide.description}</p>
            <div className="mt-4 pt-4 border-t border-surface-100 flex items-center justify-between">
              <span className="text-xs text-surface-400">{guide.readTime}</span>
              <span className="text-sm font-medium text-primary-500 group-hover:text-primary-600 flex items-center gap-1">
                Read Guide
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

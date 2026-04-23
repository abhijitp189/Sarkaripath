import Link from 'next/link';
import { Metadata } from 'next';
import { exams, getExamBySlug } from '@/lib/exams-data';
import { generateFaqJsonLd, generateBreadcrumbJsonLd, generateExamJsonLd } from '@/lib/seo';

export function generateStaticParams() {
  return exams.map((exam) => ({ slug: exam.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const exam = getExamBySlug(params.slug);
  if (!exam) return { title: 'Exam Not Found' };

  return {
    title: `${exam.title} – Complete Preparation Guide, Syllabus, Books | TaiyarHo`,
    description: `${exam.shortName} preparation guide: syllabus, exam pattern, best books, free resources, study plan, eligibility, and tips. Everything you need for ${exam.shortName} in one page.`,
    openGraph: {
      title: `${exam.shortName} Preparation Guide | TaiyarHo`,
      description: `Complete ${exam.shortName} guide with syllabus, study plan, best books, and free resources.`,
    },
  };
}

export default function ExamDetailPage({ params }: { params: { slug: string } }) {
  const exam = getExamBySlug(params.slug);

  if (!exam) {
    return (
      <div className="container-main py-20 text-center">
        <h1 className="text-2xl font-heading font-bold text-surface-800 mb-4">Exam Not Found</h1>
        <Link href="/exams" className="btn-primary">Browse All Exams</Link>
      </div>
    );
  }

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'exam-pattern', label: 'Exam Pattern' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'study-plan', label: 'Study Plan' },
    { id: 'books', label: 'Best Books' },
    { id: 'resources', label: 'Free Resources' },
    { id: 'tips', label: 'Tips' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <>
      <div className="container-main py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-surface-500 mb-6">
          <Link href="/" className="hover:text-primary-500">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/exams" className="hover:text-primary-500">Exams</Link>
          <span className="mx-2">›</span>
          <span className="text-surface-800">{exam.shortName}</span>
        </nav>

        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          {/* Main Content */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="badge badge-primary">{exam.category}</span>
                <span className="badge badge-green">{exam.level}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-heading font-bold text-surface-900 mb-3">{exam.title}</h1>
              <p className="text-surface-500 leading-relaxed">{exam.description}</p>
              <a href={exam.officialWebsite} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary-500 hover:text-primary-600 mt-3 font-medium">
                Official Website →
              </a>
            </div>

            {/* Quick Info Cards */}
            <div id="overview" className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
              {[
                { label: 'Conducting Body', value: exam.conductingBody },
                { label: 'Frequency', value: exam.frequency.split('(')[0].trim() },
                { label: 'Vacancies', value: exam.avgVacancies },
                { label: 'Salary Range', value: exam.salaryRange.split('(')[0].trim() },
              ].map((item) => (
                <div key={item.label} className="bg-surface-50 rounded-xl p-4 border border-surface-200">
                  <div className="text-xs text-surface-400 uppercase tracking-wide">{item.label}</div>
                  <div className="font-semibold text-surface-800 mt-1 text-sm">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Eligibility */}
            <section id="eligibility" className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-surface-900 mb-5 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm">1</span>
                Eligibility Criteria
              </h2>

              <div className="card p-6 mb-4">
                <h3 className="font-semibold text-surface-800 mb-2">Educational Qualification</h3>
                <p className="text-surface-600">{exam.qualification}</p>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-surface-800 mb-4">Age Limit & Relaxation</h3>
                <div className="mb-3 text-sm text-surface-600">
                  Minimum Age: <strong>{exam.minAge} years</strong> · Maximum Age: <strong>{exam.maxAge} years</strong>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface-50">
                        <th className="text-left p-3 font-semibold text-surface-700 rounded-tl-lg">Category</th>
                        <th className="text-left p-3 font-semibold text-surface-700 rounded-tr-lg">Age Relaxation / Attempts</th>
                      </tr>
                    </thead>
                    <tbody>
                      {exam.ageRelaxations.map((ar, i) => (
                        <tr key={i} className="border-t border-surface-100">
                          <td className="p-3 font-medium text-surface-800">{ar.category}</td>
                          <td className="p-3 text-surface-600">{ar.relaxation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Exam Pattern */}
            <section id="exam-pattern" className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-surface-900 mb-5 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm">2</span>
                Exam Pattern
              </h2>

              <div className="space-y-4">
                {exam.examStages.map((stage, i) => (
                  <div key={i} className="card p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-heading font-bold text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-surface-900">{stage.name}</h3>
                        <span className="text-xs text-surface-400">{stage.type}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-surface-50 rounded-lg p-3">
                        <div className="text-xs text-surface-400">Total Marks</div>
                        <div className="font-bold text-surface-800">{stage.totalMarks}</div>
                      </div>
                      <div className="bg-surface-50 rounded-lg p-3">
                        <div className="text-xs text-surface-400">Duration</div>
                        <div className="font-bold text-surface-800">{stage.duration}</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-surface-400 uppercase tracking-wide mb-2">Subjects / Papers</div>
                      <div className="space-y-1.5">
                        {stage.subjects.map((sub, j) => (
                          <div key={j} className="flex items-start gap-2 text-sm text-surface-700">
                            <svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                            </svg>
                            {sub}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Syllabus */}
            <section id="syllabus" className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-surface-900 mb-5 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm">3</span>
                Detailed Syllabus
              </h2>

              <div className="space-y-4">
                {exam.syllabus.map((section, i) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="p-5 cursor-pointer flex items-center justify-between font-heading font-semibold text-surface-800 hover:text-primary-500 transition-colors list-none">
                      <span className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-primary-50 rounded-md flex items-center justify-center text-primary-500 text-xs font-bold">{i + 1}</span>
                        {section.subject}
                      </span>
                      <svg className="w-5 h-5 text-surface-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-5">
                      <div className="space-y-2 ml-9">
                        {section.topics.map((topic, j) => (
                          <div key={j} className="flex items-start gap-2 text-sm text-surface-600">
                            <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Study Plan */}
            <section id="study-plan" className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-surface-900 mb-5 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm">4</span>
                {exam.studyPlan.length}-Month Study Plan
              </h2>

              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-primary-200 hidden sm:block" />
                <div className="space-y-4">
                  {exam.studyPlan.map((step, i) => (
                    <div key={i} className="sm:pl-14 relative">
                      <div className="hidden sm:flex absolute left-0 top-4 w-10 h-10 bg-primary-500 rounded-xl items-center justify-center text-white font-heading font-bold text-sm z-10">
                        {i + 1}
                      </div>
                      <div className="card p-5">
                        <div className="sm:hidden badge badge-primary mb-2">Month {i + 1}</div>
                        <p className="text-surface-700 leading-relaxed text-sm">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Best Books */}
            <section id="books" className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-surface-900 mb-5 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm">5</span>
                Best Books
              </h2>

              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface-50">
                        <th className="text-left p-4 font-semibold text-surface-700">Book Title</th>
                        <th className="text-left p-4 font-semibold text-surface-700">Author</th>
                        <th className="text-left p-4 font-semibold text-surface-700">Subject</th>
                        <th className="text-left p-4 font-semibold text-surface-700">Free Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      {exam.bestBooks.map((book, i) => (
                        <tr key={i} className="border-t border-surface-100">
                          <td className="p-4 font-medium text-surface-800">{book.title}</td>
                          <td className="p-4 text-surface-600">{book.author}</td>
                          <td className="p-4"><span className="badge badge-primary">{book.subject}</span></td>
                          <td className="p-4">
                            {book.freeLink ? (
                              <a href={book.freeLink} target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 font-medium">
                                Free →
                              </a>
                            ) : (
                              <span className="text-surface-400">Buy online</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Free Resources */}
            <section id="resources" className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-surface-900 mb-5 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm">6</span>
                Free Resources
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {exam.freeResources.map((res, i) => (
                  <a key={i} href={res.url} target="_blank" rel="noopener noreferrer" className="card p-5 group hover:border-primary-300">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">
                        {res.type === 'youtube' ? '🎥' : res.type === 'telegram' ? '💬' : res.type === 'app' ? '📱' : '🌐'}
                      </span>
                      <span className="badge badge-primary capitalize">{res.type}</span>
                    </div>
                    <h3 className="font-semibold text-surface-800 group-hover:text-primary-500 transition-colors mb-1">{res.name}</h3>
                    <p className="text-xs text-surface-500">{res.description}</p>
                  </a>
                ))}
              </div>
            </section>

            {/* Tips */}
            <section id="tips" className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-surface-900 mb-5 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center text-accent-600 text-sm">💡</span>
                Expert Tips
              </h2>

              <div className="card p-6 bg-accent-50 border-accent-200">
                <div className="space-y-3">
                  {exam.tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-surface-700">
                      <span className="w-6 h-6 bg-accent-200 rounded-full flex items-center justify-center text-accent-700 text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {tip}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-surface-900 mb-5 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm">?</span>
                Frequently Asked Questions
              </h2>

              <div className="space-y-3">
                {exam.faqs.map((faq, i) => (
                  <details key={i} className="card group">
                    <summary className="p-5 cursor-pointer flex items-center justify-between font-medium text-surface-800 hover:text-primary-500 transition-colors list-none">
                      {faq.question}
                      <svg className="w-5 h-5 text-surface-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-sm text-surface-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="card p-5">
                <h3 className="font-heading font-semibold text-surface-800 mb-4 text-sm uppercase tracking-wide">On This Page</h3>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <a key={s.id} href={`#${s.id}`} className="block py-1.5 px-3 rounded-lg text-sm text-surface-500 hover:text-primary-500 hover:bg-primary-50 transition-colors">
                      {s.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="card p-5 mt-4 bg-primary-50 border-primary-200">
                <h3 className="font-heading font-semibold text-primary-800 mb-2 text-sm">Official Website</h3>
                <a href={exam.officialWebsite} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 hover:text-primary-700 break-all">
                  {exam.officialWebsite.replace('https://', '')} →
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateExamJsonLd(exam)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(exam.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd([
        { name: 'Home', url: '/' },
        { name: 'Exams', url: '/exams' },
        { name: exam.shortName, url: `/exams/${exam.slug}` },
      ])) }} />
    </>
  );
}

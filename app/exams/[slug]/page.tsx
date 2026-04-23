import Link from 'next/link';
import { Metadata } from 'next';
import { exams, getExamBySlug, allExams, getExamBriefBySlug, getAllExamSlugs } from '@/lib/exams-data';
import { generateFaqJsonLd, generateBreadcrumbJsonLd, generateExamJsonLd } from '@/lib/seo';
import { getCategoryContent } from '@/lib/category-content';

export function generateStaticParams() {
  return getAllExamSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const brief = getExamBriefBySlug(params.slug);
  const detailed = getExamBySlug(params.slug);
  const exam = detailed || brief;
  if (!exam) return { title: 'Exam Not Found' };
  const name = detailed ? detailed.shortName : brief!.name;
  const desc = detailed ? detailed.description : brief!.description || '';
  return {
    title: `${name} – Complete Preparation Guide | TaiyarHo`,
    description: `${name}: syllabus, exam pattern, eligibility, best books, free resources, study plan. ${desc.substring(0, 100)}`,
  };
}

export default function ExamDetailPage({ params }: { params: { slug: string } }) {
  const detailed = getExamBySlug(params.slug);
  const brief = getExamBriefBySlug(params.slug);

  if (!detailed && !brief) {
    return (
      <div className="container-main py-20 text-center">
        <h1 className="text-2xl font-heading font-bold text-surface-800 mb-4">Exam Not Found</h1>
        <Link href="/exams" className="btn-primary">Browse All Exams</Link>
      </div>
    );
  }

  if (detailed) return <DetailedExamPage exam={detailed} />;
  return <BasicExamPage exam={brief!} />;
}

// ─── DETAILED EXAM PAGE (exams with full content) ───────────────────────────
function DetailedExamPage({ exam }: { exam: any }) {
  const sections = [
    { id: 'overview', label: 'Overview' }, { id: 'eligibility', label: 'Eligibility' },
    { id: 'exam-pattern', label: 'Exam Pattern' }, { id: 'syllabus', label: 'Syllabus' },
    { id: 'study-plan', label: 'Study Plan' }, { id: 'books', label: 'Best Books' },
    { id: 'resources', label: 'Free Resources' }, { id: 'tips', label: 'Tips' }, { id: 'faq', label: 'FAQ' },
  ];

  return (
    <>
      <div className="container-main py-10">
        <nav className="text-sm text-surface-500 mb-6">
          <Link href="/" className="hover:text-primary-500">Home</Link><span className="mx-2">›</span>
          <Link href="/exams" className="hover:text-primary-500">Exams</Link><span className="mx-2">›</span>
          <span className="text-surface-800">{exam.shortName}</span>
        </nav>

        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div>
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-3"><span className="badge badge-primary">{exam.category}</span><span className="badge badge-green">{exam.level}</span></div>
              <h1 className="text-3xl sm:text-4xl font-heading font-bold text-surface-900 mb-3">{exam.title}</h1>
              <p className="text-surface-500 leading-relaxed">{exam.description}</p>
              <a href={exam.officialWebsite} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary-500 hover:text-primary-600 mt-3 font-medium">Official Website →</a>
            </div>

            <div id="overview" className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
              {[{ label: 'Conducting Body', value: exam.conductingBody }, { label: 'Frequency', value: exam.frequency.split('(')[0].trim() }, { label: 'Vacancies', value: exam.avgVacancies }, { label: 'Salary Range', value: exam.salaryRange.split('(')[0].trim() }].map((item) => (
                <div key={item.label} className="bg-surface-50 rounded-xl p-4 border border-surface-200">
                  <div className="text-xs text-surface-400 uppercase tracking-wide">{item.label}</div>
                  <div className="font-semibold text-surface-800 mt-1 text-sm">{item.value}</div>
                </div>
              ))}
            </div>

            <section id="eligibility" className="mb-12">
              <SectionHeading num="1" title="Eligibility Criteria" />
              <div className="card p-6 mb-4"><h3 className="font-semibold text-surface-800 mb-2">Educational Qualification</h3><p className="text-surface-600">{exam.qualification}</p></div>
              <div className="card p-6">
                <h3 className="font-semibold text-surface-800 mb-4">Age Limit & Relaxation</h3>
                <div className="mb-3 text-sm text-surface-600">Minimum: <strong>{exam.minAge} years</strong> · Maximum: <strong>{exam.maxAge} years</strong></div>
                <div className="overflow-x-auto"><table className="w-full text-sm">
                  <thead><tr className="bg-surface-50"><th className="text-left p-3 font-semibold text-surface-700">Category</th><th className="text-left p-3 font-semibold text-surface-700">Relaxation</th></tr></thead>
                  <tbody>{exam.ageRelaxations.map((ar: any, i: number) => (<tr key={i} className="border-t border-surface-100"><td className="p-3 font-medium text-surface-800">{ar.category}</td><td className="p-3 text-surface-600">{ar.relaxation}</td></tr>))}</tbody>
                </table></div>
              </div>
            </section>

            <section id="exam-pattern" className="mb-12">
              <SectionHeading num="2" title="Exam Pattern" />
              <div className="space-y-4">{exam.examStages.map((stage: any, i: number) => (
                <div key={i} className="card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-heading font-bold text-sm">{i + 1}</div>
                    <div><h3 className="font-heading font-semibold text-surface-900">{stage.name}</h3><span className="text-xs text-surface-400">{stage.type}</span></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-surface-50 rounded-lg p-3"><div className="text-xs text-surface-400">Total Marks</div><div className="font-bold text-surface-800">{stage.totalMarks}</div></div>
                    <div className="bg-surface-50 rounded-lg p-3"><div className="text-xs text-surface-400">Duration</div><div className="font-bold text-surface-800">{stage.duration}</div></div>
                  </div>
                  <div className="space-y-1.5">{stage.subjects.map((sub: string, j: number) => (
                    <div key={j} className="flex items-start gap-2 text-sm text-surface-700"><svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>{sub}</div>
                  ))}</div>
                </div>
              ))}</div>
            </section>

            <section id="syllabus" className="mb-12">
              <SectionHeading num="3" title="Detailed Syllabus" />
              <div className="space-y-4">{exam.syllabus.map((section: any, i: number) => (
                <details key={i} className="card group" open={i === 0}>
                  <summary className="p-5 cursor-pointer flex items-center justify-between font-heading font-semibold text-surface-800 hover:text-primary-500 transition-colors list-none">
                    <span className="flex items-center gap-3"><span className="w-6 h-6 bg-primary-50 rounded-md flex items-center justify-center text-primary-500 text-xs font-bold">{i + 1}</span>{section.subject}</span>
                    <svg className="w-5 h-5 text-surface-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-5 pb-5 ml-9 space-y-2">{section.topics.map((topic: string, j: number) => (
                    <div key={j} className="flex items-start gap-2 text-sm text-surface-600"><span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />{topic}</div>
                  ))}</div>
                </details>
              ))}</div>
            </section>

            <section id="study-plan" className="mb-12">
              <SectionHeading num="4" title="Study Plan" />
              <div className="relative"><div className="absolute left-5 top-0 bottom-0 w-0.5 bg-primary-200 hidden sm:block" />
                <div className="space-y-4">{exam.studyPlan.map((step: string, i: number) => (
                  <div key={i} className="sm:pl-14 relative">
                    <div className="hidden sm:flex absolute left-0 top-4 w-10 h-10 bg-primary-500 rounded-xl items-center justify-center text-white font-heading font-bold text-sm z-10">{i + 1}</div>
                    <div className="card p-5"><p className="text-surface-700 leading-relaxed text-sm">{step}</p></div>
                  </div>
                ))}</div>
              </div>
            </section>

            <section id="books" className="mb-12">
              <SectionHeading num="5" title="Best Books" />
              <BooksTable books={exam.bestBooks} />
            </section>

            <section id="resources" className="mb-12">
              <SectionHeading num="6" title="Free Resources" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{exam.freeResources.map((res: any, i: number) => (
                <a key={i} href={res.url} target="_blank" rel="noopener noreferrer" className="card p-5 group hover:border-primary-300">
                  <div className="flex items-center gap-2 mb-2"><span className="text-lg">{res.type === 'youtube' ? '🎥' : '🌐'}</span><span className="badge badge-primary capitalize">{res.type}</span></div>
                  <h3 className="font-semibold text-surface-800 group-hover:text-primary-500 transition-colors mb-1">{res.name}</h3>
                  <p className="text-xs text-surface-500">{res.description}</p>
                </a>
              ))}</div>
            </section>

            <section id="tips" className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-surface-900 mb-5 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center text-accent-600 text-sm">💡</span>Expert Tips
              </h2>
              <TipsList tips={exam.tips} />
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-surface-900 mb-5">Frequently Asked Questions</h2>
              <div className="space-y-3">{exam.faqs.map((faq: any, i: number) => (
                <details key={i} className="card group">
                  <summary className="p-5 cursor-pointer flex items-center justify-between font-medium text-surface-800 hover:text-primary-500 list-none">
                    {faq.question}
                    <svg className="w-5 h-5 text-surface-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-sm text-surface-600 leading-relaxed">{faq.answer}</p></div>
                </details>
              ))}</div>
            </section>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="card p-5">
                <h3 className="font-heading font-semibold text-surface-800 mb-4 text-sm uppercase tracking-wide">On This Page</h3>
                <nav className="space-y-1">{sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="block py-1.5 px-3 rounded-lg text-sm text-surface-500 hover:text-primary-500 hover:bg-primary-50 transition-colors">{s.label}</a>
                ))}</nav>
              </div>
              <div className="card p-5 mt-4 bg-primary-50 border-primary-200">
                <h3 className="font-heading font-semibold text-primary-800 mb-2 text-sm">Official Website</h3>
                <a href={exam.officialWebsite} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 break-all">{exam.officialWebsite.replace('https://', '')} →</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateExamJsonLd(exam)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(exam.faqs)) }} />
    </>
  );
}

// ─── ENHANCED BASIC EXAM PAGE (with category-specific content) ──────────────
function BasicExamPage({ exam }: { exam: any }) {
  const catContent = getCategoryContent(exam.category);
  const sections = [
    { id: 'overview', label: 'Overview' }, { id: 'eligibility', label: 'Eligibility' },
    { id: 'selection', label: 'Selection Process' }, { id: 'subjects', label: 'Key Subjects' },
    { id: 'study-plan', label: 'Study Approach' }, { id: 'books', label: 'Recommended Books' },
    { id: 'resources', label: 'Free Resources' }, { id: 'tips', label: 'Preparation Tips' },
  ];

  return (
    <div className="container-main py-10">
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link><span className="mx-2">›</span>
        <Link href="/exams" className="hover:text-primary-500">Exams</Link><span className="mx-2">›</span>
        <span className="text-surface-800">{exam.name}</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
        <div>
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="badge badge-primary">{exam.category}</span>
              <span className="badge badge-green">{exam.level}</span>
              <span className="badge bg-surface-100 text-surface-600">{exam.frequency}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-surface-900 mb-3">{exam.name}</h1>
            {exam.description && <p className="text-surface-500 leading-relaxed text-lg">{exam.description}</p>}
            <a href={`https://${exam.officialWebsite}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary-500 hover:text-primary-600 mt-3 font-medium">Official Website →</a>
          </div>

          {/* Quick Info */}
          <div id="overview" className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            <InfoCard label="Conducting Body" value={exam.conductingBody} />
            <InfoCard label="Age Limit" value={`${exam.minAge} – ${exam.maxAge === 99 ? 'No limit' : exam.maxAge + ' years'}`} />
            <InfoCard label="Qualification" value={exam.qualification} />
            <InfoCard label="Salary Range" value={exam.salaryRange || 'Varies by post'} highlight />
            {exam.avgVacancies && <InfoCard label="Vacancies" value={exam.avgVacancies} />}
            <InfoCard label="Frequency" value={exam.frequency} />
          </div>

          {/* Eligibility */}
          <section id="eligibility" className="mb-12">
            <SectionHeading num="1" title="Eligibility Criteria" />
            <div className="card p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm mb-6">
                <div><h3 className="font-semibold text-surface-800 mb-1">Educational Qualification</h3><p className="text-surface-600">{exam.qualification}</p></div>
                <div><h3 className="font-semibold text-surface-800 mb-1">Age Limit (General)</h3><p className="text-surface-600">{exam.minAge} – {exam.maxAge === 99 ? 'No upper limit' : exam.maxAge + ' years'}</p></div>
                {exam.avgVacancies && <div><h3 className="font-semibold text-surface-800 mb-1">Approximate Vacancies</h3><p className="text-surface-600">{exam.avgVacancies}</p></div>}
                <div><h3 className="font-semibold text-surface-800 mb-1">Level</h3><p className="text-surface-600">{exam.level} Government</p></div>
              </div>
              <div className="pt-4 border-t border-surface-100">
                <h3 className="font-semibold text-surface-800 mb-3">Standard Age Relaxation</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="bg-surface-50 rounded-lg p-3"><span className="text-surface-400">OBC</span><div className="font-bold text-surface-700 mt-1">+3 years</div></div>
                  <div className="bg-surface-50 rounded-lg p-3"><span className="text-surface-400">SC/ST</span><div className="font-bold text-surface-700 mt-1">+5 years</div></div>
                  <div className="bg-surface-50 rounded-lg p-3"><span className="text-surface-400">PwBD</span><div className="font-bold text-surface-700 mt-1">+10 years</div></div>
                  <div className="bg-surface-50 rounded-lg p-3"><span className="text-surface-400">Ex-Servicemen</span><div className="font-bold text-surface-700 mt-1">+5 years</div></div>
                </div>
                <p className="text-xs text-surface-400 mt-2">* Relaxation may vary by exam. Always verify from the official notification.</p>
              </div>
            </div>
          </section>

          {/* Selection Process */}
          <section id="selection" className="mb-12">
            <SectionHeading num="2" title="Selection Process" />
            <div className="card p-6">
              <div className="flex flex-wrap gap-3">
                {exam.selectionProcess.split(',').map((stage: string, i: number) => (
                  <div key={i} className="flex items-center gap-2">
                    {i > 0 && <svg className="w-4 h-4 text-surface-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>}
                    <span className="bg-primary-50 text-primary-700 px-4 py-2 rounded-lg text-sm font-medium">{stage.trim()}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Key Subjects */}
          {catContent && catContent.commonSubjects.length > 0 && (
            <section id="subjects" className="mb-12">
              <SectionHeading num="3" title={`Key Subjects for ${exam.category} Exams`} />
              <div className="card p-6">
                <div className="flex flex-wrap gap-2">
                  {catContent.commonSubjects.map((sub, i) => (
                    <span key={i} className="bg-primary-50 text-primary-700 px-3 py-2 rounded-lg text-sm font-medium">{sub}</span>
                  ))}
                </div>
                <p className="text-xs text-surface-400 mt-4">* Exact subjects may vary. Check the official notification for the complete syllabus.</p>
              </div>
            </section>
          )}

          {/* Study Approach */}
          {catContent && catContent.studyApproach.length > 0 && (
            <section id="study-plan" className="mb-12">
              <SectionHeading num="4" title="Recommended Study Approach" />
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-primary-200 hidden sm:block" />
                <div className="space-y-4">
                  {catContent.studyApproach.map((step, i) => (
                    <div key={i} className="sm:pl-14 relative">
                      <div className="hidden sm:flex absolute left-0 top-4 w-10 h-10 bg-primary-500 rounded-xl items-center justify-center text-white font-heading font-bold text-sm z-10">{i + 1}</div>
                      <div className="card p-5"><p className="text-surface-700 leading-relaxed text-sm">{step}</p></div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-surface-400 mt-3">* This is a general approach for {exam.category} exams. Adjust based on your specific exam&apos;s syllabus.</p>
            </section>
          )}

          {/* Recommended Books */}
          {catContent && catContent.commonBooks.length > 0 && (
            <section id="books" className="mb-12">
              <SectionHeading num="5" title={`Recommended Books for ${exam.category} Exams`} />
              <BooksTable books={catContent.commonBooks} />
              <p className="text-xs text-surface-400 mt-3">* These are commonly recommended books for {exam.category} exams. Check exam-specific book lists for detailed coverage.</p>
            </section>
          )}

          {/* Free Resources */}
          {catContent && (
            <section id="resources" className="mb-12">
              <SectionHeading num="6" title="Free Resources" />
              <h3 className="font-heading font-semibold text-surface-800 mb-3 text-sm">YouTube Channels</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {catContent.youtubeChannels.map((ch, i) => (
                  <a key={i} href={ch.url} target="_blank" rel="noopener noreferrer" className="card p-4 group hover:border-primary-300">
                    <div className="flex items-center gap-2 mb-1"><span className="text-lg">🎥</span><span className="badge badge-primary text-xs">YouTube</span></div>
                    <h4 className="font-semibold text-surface-800 group-hover:text-primary-500 transition-colors text-sm">{ch.name}</h4>
                    <p className="text-xs text-surface-500">{ch.desc}</p>
                  </a>
                ))}
              </div>
              <h3 className="font-heading font-semibold text-surface-800 mb-3 text-sm">Useful Websites</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {catContent.websites.map((w, i) => (
                  <a key={i} href={w.url} target="_blank" rel="noopener noreferrer" className="card p-4 group hover:border-primary-300">
                    <div className="flex items-center gap-2 mb-1"><span className="text-lg">🌐</span><span className="badge badge-primary text-xs">Website</span></div>
                    <h4 className="font-semibold text-surface-800 group-hover:text-primary-500 transition-colors text-sm">{w.name}</h4>
                    <p className="text-xs text-surface-500">{w.desc}</p>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Preparation Tips */}
          {catContent && catContent.generalTips.length > 0 && (
            <section id="tips" className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-surface-900 mb-5 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center text-accent-600 text-sm">💡</span>
                Preparation Tips for {exam.category} Exams
              </h2>
              <TipsList tips={catContent.generalTips} />
            </section>
          )}

          {/* Official Website */}
          <section className="mb-10">
            <SectionHeading num="7" title="Official Website & Links" />
            <div className="card p-6">
              <a href={`https://${exam.officialWebsite}`} target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 font-medium text-lg break-all">{exam.officialWebsite} →</a>
              <p className="text-sm text-surface-500 mt-2">Visit the official website for latest notifications, admit cards, results, and application forms.</p>
            </div>
          </section>

          {/* Eligibility CTA */}
          <div className="card p-6 bg-primary-50 border-primary-200 text-center mb-10">
            <h3 className="font-heading font-bold text-primary-800 mb-2">Check Your Eligibility</h3>
            <p className="text-sm text-primary-600 mb-4">Use our eligibility checker to see if you qualify for {exam.name}</p>
            <Link href="/tools/age-calculator" className="btn-primary">Check Eligibility →</Link>
          </div>

          <div className="text-xs text-surface-400 bg-surface-50 rounded-lg p-4">
            <strong>Disclaimer:</strong> Information provided is for general guidance. Exam patterns, syllabus, and eligibility may change. Always refer to the official notification on {exam.officialWebsite} for the latest details.
          </div>
        </div>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <div className="card p-5">
              <h3 className="font-heading font-semibold text-surface-800 mb-4 text-sm uppercase tracking-wide">On This Page</h3>
              <nav className="space-y-1">{sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="block py-1.5 px-3 rounded-lg text-sm text-surface-500 hover:text-primary-500 hover:bg-primary-50 transition-colors">{s.label}</a>
              ))}</nav>
            </div>
            <div className="card p-5 mt-4 bg-primary-50 border-primary-200">
              <h3 className="font-heading font-semibold text-primary-800 mb-2 text-sm">Official Website</h3>
              <a href={`https://${exam.officialWebsite}`} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 break-all">{exam.officialWebsite} →</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

// ─── SHARED COMPONENTS ──────────────────────────────────────────────────────
function SectionHeading({ num, title }: { num: string; title: string }) {
  return (
    <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5 flex items-center gap-2">
      <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm">{num}</span>
      {title}
    </h2>
  );
}

function InfoCard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="bg-surface-50 rounded-xl p-4 border border-surface-200">
      <div className="text-xs text-surface-400 uppercase tracking-wide">{label}</div>
      <div className={`font-semibold mt-1 text-sm ${highlight ? 'text-emerald-600' : 'text-surface-800'}`}>{value}</div>
    </div>
  );
}

function BooksTable({ books }: { books: { title: string; author: string; subject: string; freeLink?: string }[] }) {
  return (
    <div className="card overflow-hidden"><div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead><tr className="bg-surface-50">
          <th className="text-left p-4 font-semibold text-surface-700">Book</th>
          <th className="text-left p-4 font-semibold text-surface-700">Author</th>
          <th className="text-left p-4 font-semibold text-surface-700">Subject</th>
        </tr></thead>
        <tbody>{books.map((book, i) => (
          <tr key={i} className="border-t border-surface-100">
            <td className="p-4 font-medium text-surface-800">{book.title}</td>
            <td className="p-4 text-surface-600">{book.author}</td>
            <td className="p-4"><span className="badge badge-primary">{book.subject}</span></td>
          </tr>
        ))}</tbody>
      </table>
    </div></div>
  );
}

function TipsList({ tips }: { tips: string[] }) {
  return (
    <div className="card p-6 bg-accent-50 border-accent-200 space-y-3">
      {tips.map((tip, i) => (
        <div key={i} className="flex items-start gap-3 text-sm text-surface-700">
          <span className="w-6 h-6 bg-accent-200 rounded-full flex items-center justify-center text-accent-700 text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>{tip}
        </div>
      ))}
    </div>
  );
}

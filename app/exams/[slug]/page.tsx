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

  if (params.slug === 'ssc-cgl') {
    return {
      title: 'SSC CGL 2026 – Complete Preparation Guide: Syllabus, Pattern, Eligibility | TaiyarHo',
      description: 'SSC CGL 2026 notification released. Tier 1 exam in May–June 2026. Check complete syllabus, exam pattern, eligibility, 14,000+ vacancies, salary, best books and free study resources.',
      alternates: { canonical: 'https://taiyarho.in/exams/ssc-cgl/' },
    };
  }

  return {
    title: `${name} – Complete Preparation Guide | TaiyarHo`,
    description: `${name}: syllabus, exam pattern, eligibility, best books, free resources, study plan. ${desc.substring(0, 100)}`,
    alternates: { canonical: `https://taiyarho.in/exams/${params.slug}/` },
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

  if (detailed && detailed.slug === 'ssc-cgl') return <SscCglPage exam={detailed} />;
  if (detailed) return <DetailedExamPage exam={detailed} />;
  return <BasicExamPage exam={brief!} />;
}

// ─── SSC CGL RICH PAGE (custom layout with dates, posts, salary tables) ────────
function SscCglPage({ exam }: { exam: any }) {
  const toc = [
    { id: 'overview', label: 'Overview' },
    { id: 'important-dates', label: 'Important Dates' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'vacancies', label: 'Vacancies & Posts' },
    { id: 'exam-pattern', label: 'Exam Pattern' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'salary', label: 'Salary & Posts' },
    { id: 'study-plan', label: 'Study Plan' },
    { id: 'books', label: 'Best Books' },
    { id: 'resources', label: 'Free Resources' },
    { id: 'tips', label: 'Expert Tips' },
    { id: 'faq', label: 'FAQs' },
  ];

  const importantDates = [
    { event: 'Official Notification Released', date: '31 March 2026', status: 'released' },
    { event: 'Online Application Opens', date: '31 March 2026', status: 'released' },
    { event: 'Last Date to Apply Online', date: '30 April 2026', status: 'upcoming' },
    { event: 'Application Correction Window', date: 'May 2026 (TBN)', status: 'tbn' },
    { event: 'Tier 1 Admit Card', date: 'Last week of April 2026 (TBN)', status: 'tbn' },
    { event: 'Tier 1 Exam Date', date: 'May – June 2026', status: 'upcoming' },
    { event: 'Tier 1 Answer Key Release', date: 'Within 1 week of exam (TBN)', status: 'tbn' },
    { event: 'Tier 1 Result', date: 'To be notified (TBN)', status: 'tbn' },
    { event: 'Tier 2 Admit Card', date: 'To be notified (TBN)', status: 'tbn' },
    { event: 'Tier 2 Exam Date', date: 'To be notified (TBN)', status: 'tbn' },
    { event: 'Tier 2 Result & Final Merit List', date: 'To be notified (TBN)', status: 'tbn' },
    { event: 'Document Verification', date: 'To be notified (TBN)', status: 'tbn' },
  ];

  const topPosts = [
    { post: 'Assistant Audit Officer / Asst Accounts Officer', ministry: 'C&AG / CGA', payLevel: '8', basicPay: '₹47,600', group: 'B (Gazetted)' },
    { post: 'Income Tax Inspector', ministry: 'CBDT', payLevel: '7', basicPay: '₹44,900', group: 'C' },
    { post: 'Inspector (Central Excise & Customs)', ministry: 'CBIC', payLevel: '7', basicPay: '₹44,900', group: 'C' },
    { post: 'Inspector (Preventive Officer / Examiner)', ministry: 'CBIC', payLevel: '7', basicPay: '₹44,900', group: 'C' },
    { post: 'Sub Inspector', ministry: 'CBI / NIA', payLevel: '6', basicPay: '₹35,400', group: 'C' },
    { post: 'Assistant Section Officer', ministry: 'MEA / CSS / IB / AFHQ', payLevel: '6', basicPay: '₹35,400', group: 'C' },
    { post: 'Statistical Investigator Grade II', ministry: 'RGI', payLevel: '6', basicPay: '₹35,400', group: 'C' },
    { post: 'Auditor', ministry: 'CAG / CGDA / CGAE', payLevel: '5', basicPay: '₹29,200', group: 'C' },
    { post: 'Accountant / Junior Accountant', ministry: 'C&AG / CGA', payLevel: '5', basicPay: '₹29,200', group: 'C' },
    { post: 'Tax Assistant', ministry: 'CBDT / CBIC', payLevel: '4', basicPay: '₹25,500', group: 'C' },
    { post: 'Upper Division Clerk (UDC)', ministry: 'Various', payLevel: '4', basicPay: '₹25,500', group: 'C' },
  ];

  const tier1Pattern = [
    { section: 'General Intelligence & Reasoning', questions: 25, marks: 50, time: 'Combined' },
    { section: 'General Awareness', questions: 25, marks: 50, time: 'Combined' },
    { section: 'Quantitative Aptitude', questions: 25, marks: 50, time: 'Combined' },
    { section: 'English Language & Comprehension', questions: 25, marks: 50, time: 'Combined' },
  ];

  const tier2Pattern = [
    { section: 'Maths Abilities (Part A, Section I)', questions: 30, marks: 90, session: 'I', neg: '–1' },
    { section: 'Reasoning & General Intelligence (Part B, Section I)', questions: 30, marks: 90, session: 'I', neg: '–1' },
    { section: 'English Language & Comprehension (Part A, Section II)', questions: 45, marks: 135, session: 'II', neg: '–1' },
    { section: 'General Awareness (Part B, Section II)', questions: 25, marks: 75, session: 'II', neg: '–1' },
    { section: 'Computer Knowledge (Section III, Module A)', questions: 20, marks: 60, session: 'II', neg: '–0.50' },
    { section: 'DEST – Data Entry Speed Test (Section III, Module B)', questions: null, marks: null, session: 'II', neg: 'Qualifying only' },
  ];

  const vacancyTrend = [
    { year: '2017', vacancies: '8,089' },
    { year: '2018', vacancies: '11,271' },
    { year: '2019', vacancies: '8,582' },
    { year: '2020', vacancies: '7,035' },
    { year: '2022', vacancies: '20,000+' },
    { year: '2023', vacancies: '17,727' },
    { year: '2024', vacancies: '17,727' },
    { year: '2025', vacancies: '14,582' },
    { year: '2026', vacancies: '14,000–15,000 (Expected)' },
  ];

  const statusColor = (s: string) => {
    if (s === 'released') return 'bg-emerald-100 text-emerald-700';
    if (s === 'upcoming') return 'bg-blue-100 text-blue-700';
    return 'bg-surface-100 text-surface-500';
  };
  const statusLabel = (s: string) => {
    if (s === 'released') return 'Released';
    if (s === 'upcoming') return 'Upcoming';
    return 'TBN';
  };

  return (
    <>
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-[#0a1e4f] via-[#1a3580] to-[#1a56db] text-white">
        <div className="container-main py-10 pb-8">
          <nav className="text-sm text-blue-200 mb-5 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-1 opacity-50">›</span>
            <Link href="/exams" className="hover:text-white">Exams</Link>
            <span className="mx-1 opacity-50">›</span>
            <span className="text-white">SSC CGL 2026</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full">SSC</span>
            <span className="bg-emerald-500/20 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">Central Govt</span>
            <span className="bg-orange-400/20 text-orange-200 text-xs font-semibold px-3 py-1 rounded-full">🔔 Notification Out</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-3 leading-tight">
            SSC CGL 2026 – Complete<br className="hidden sm:block" /> Preparation Guide
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl leading-relaxed mb-6">
            SSC CGL 2026 notification released on 31 March 2026. Tier 1 exam in May–June 2026. 14,000+ vacancies for Group B & C posts in Central Government.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Vacancies (2025)', value: '14,582' },
              { label: 'Tier 1 Exam', value: 'May–Jun 2026' },
              { label: 'Application Deadline', value: '30 Apr 2026' },
              { label: 'Salary (Max)', value: '₹1,51,100/mo' },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 rounded-xl px-4 py-3 border border-white/10">
                <div className="text-xs text-blue-200 mb-0.5">{item.label}</div>
                <div className="font-heading font-bold text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-main py-10">
        {/* Table of Contents (mobile) */}
        <div className="card p-5 mb-8 border-l-4 border-primary-500 lg:hidden">
          <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">📖 Quick Navigation</div>
          <ol className="grid grid-cols-2 gap-x-4 gap-y-1.5 list-decimal list-inside">
            {toc.map(item => (
              <li key={item.id}><a href={`#${item.id}`} className="text-sm text-primary-500 hover:underline">{item.label}</a></li>
            ))}
          </ol>
        </div>

        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div>

            {/* OVERVIEW */}
            <section id="overview" className="mb-12">
              <SectionHeading num="1" title="What is SSC CGL 2026?" />
              <div className="card p-6 mb-4">
                <p className="text-surface-600 leading-relaxed mb-4">
                  The <strong>Staff Selection Commission Combined Graduate Level (SSC CGL) 2026</strong> is one of India&apos;s most sought-after government recruitment exams. Conducted annually by SSC, it fills <strong>Group B and Group C</strong> posts across central government ministries, departments, and organizations — from Income Tax Inspector and CBI Sub Inspector to Auditor, Accountant, and Assistant Section Officer.
                </p>
                <p className="text-surface-600 leading-relaxed mb-4">
                  With <strong>over 20 lakh aspirants</strong> competing for approximately 14,000–15,000 vacancies each cycle, SSC CGL offers unmatched job security, a structured career path, and a competitive salary — making it the dream exam for millions of graduates across India.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
                  <strong>💡 Key update for 2026:</strong> The SSC CGL 2026 official notification was released on <strong>31 March 2026</strong>. The Tier 1 Computer Based Examination is scheduled for <strong>May–June 2026</strong>. Applications close on <strong>30 April 2026</strong>. Complete your One-Time Registration (OTR) on ssc.gov.in now.
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { label: 'Conducting Body', value: 'Staff Selection Commission (SSC)' },
                  { label: 'Exam Level', value: 'National – Central Government' },
                  { label: 'Qualification', value: 'Any Bachelor\'s Degree' },
                  { label: 'Age Limit', value: '18–32 years (post-wise)' },
                  { label: 'Application Fee', value: '₹100 (Gen/OBC) | Free (SC/ST/Women)' },
                  { label: 'Official Website', value: 'ssc.gov.in' },
                ].map(item => (
                  <div key={item.label} className="bg-surface-50 rounded-xl p-4 border border-surface-200">
                    <div className="text-xs text-surface-400 uppercase tracking-wide mb-1">{item.label}</div>
                    <div className="font-semibold text-surface-800 text-sm">{item.value}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* IMPORTANT DATES */}
            <section id="important-dates" className="mb-12">
              <SectionHeading num="2" title="SSC CGL 2026 Important Dates" />
              <div className="card overflow-hidden mb-4">
                <div className="bg-surface-900 text-white px-5 py-3 text-sm font-semibold flex items-center gap-2">
                  <span>📅</span> Official Schedule – SSC CGL 2026
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface-50 border-b border-surface-200">
                        <th className="text-left p-4 font-semibold text-surface-700">Event</th>
                        <th className="p-4 font-semibold text-surface-700 text-center">Date</th>
                        <th className="p-4 font-semibold text-surface-700 text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {importantDates.map((row, i) => (
                        <tr key={i} className={`border-t border-surface-100 ${i % 2 === 0 ? '' : 'bg-surface-50/50'}`}>
                          <td className="p-4 font-medium text-surface-800">{row.event}</td>
                          <td className="p-4 text-center text-surface-600">{row.date}</td>
                          <td className="p-4 text-center">
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColor(row.status)}`}>{statusLabel(row.status)}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs text-surface-400 bg-surface-50 rounded-lg p-3">
                ⚠️ TBN = To Be Notified. Dates are subject to change per official SSC announcements. Always verify on{' '}
                <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary-500 underline">ssc.gov.in</a>.
              </p>
            </section>

            {/* ELIGIBILITY */}
            <section id="eligibility" className="mb-12">
              <SectionHeading num="3" title="SSC CGL 2026 Eligibility Criteria" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-lg">🎓</span>
                    <h3 className="font-heading font-semibold text-surface-800">Educational Qualification</h3>
                  </div>
                  <p className="text-surface-600 text-sm leading-relaxed mb-3">{exam.qualification}</p>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800">
                    <strong>Special posts:</strong> JSO (Junior Statistical Officer) requires 60% in Maths in Class 12 or Statistics as a graduation subject.
                  </div>
                </div>
                <div className="card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-lg">🪪</span>
                    <h3 className="font-heading font-semibold text-surface-800">Nationality</h3>
                  </div>
                  <p className="text-surface-600 text-sm leading-relaxed">Must be a citizen of India. Subjects of Nepal/Bhutan and Tibetan refugees who settled before January 1, 1962 may also be eligible. Refer to the official notification for full nationality criteria.</p>
                </div>
              </div>
              <div className="card p-6">
                <h3 className="font-heading font-semibold text-surface-800 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 bg-primary-100 rounded text-primary-600 flex items-center justify-center text-xs">📋</span>
                  Age Limit & Relaxation (as of 01 August 2026)
                </h3>
                <div className="mb-3 flex flex-wrap gap-3">
                  <div className="bg-surface-50 rounded-lg px-4 py-2 text-sm"><span className="text-surface-400">Min Age</span> <strong className="text-surface-800 ml-1">18 years</strong></div>
                  <div className="bg-surface-50 rounded-lg px-4 py-2 text-sm"><span className="text-surface-400">Max Age (General)</span> <strong className="text-surface-800 ml-1">32 years</strong></div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-primary-900 text-white">
                        <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Category</th>
                        <th className="p-3 font-semibold text-xs uppercase tracking-wide text-center">Relaxation</th>
                        <th className="p-3 font-semibold text-xs uppercase tracking-wide text-center">Max Age</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { cat: 'General / EWS', rel: 'None', max: '32 years' },
                        { cat: 'OBC (Non-Creamy Layer)', rel: '+3 years', max: '35 years' },
                        { cat: 'SC / ST', rel: '+5 years', max: '37 years' },
                        { cat: 'PwBD – General', rel: '+10 years', max: '42 years' },
                        { cat: 'PwBD – OBC', rel: '+13 years', max: '45 years' },
                        { cat: 'PwBD – SC/ST', rel: '+15 years', max: '47 years' },
                        { cat: 'Ex-Servicemen (General)', rel: '3 yrs after deducting military service', max: 'Varies' },
                      ].map((row, i) => (
                        <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                          <td className="p-3 font-medium text-surface-800">{row.cat}</td>
                          <td className="p-3 text-center text-emerald-600 font-semibold">{row.rel}</td>
                          <td className="p-3 text-center text-surface-600">{row.max}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* VACANCIES & POSTS */}
            <section id="vacancies" className="mb-12">
              <SectionHeading num="4" title="SSC CGL 2026 Vacancies & Posts" />
              <div className="card p-5 mb-5 bg-blue-50 border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Vacancy Update:</strong> SSC CGL 2026 vacancy details will be released with the official notification. Based on previous years, approximately <strong>14,000–15,000 posts</strong> are expected. SSC CGL 2025 had <strong>14,582 officially notified vacancies</strong>.
                </p>
              </div>
              <h3 className="font-heading font-semibold text-surface-800 mb-3 text-sm uppercase tracking-wide">Vacancy Trend (Last 8 Years)</h3>
              <div className="overflow-x-auto rounded-xl border border-surface-200 mb-6">
                <table className="w-full text-sm">
                  <thead className="bg-surface-900 text-white">
                    <tr>
                      {vacancyTrend.map(v => <th key={v.year} className="p-3 text-center text-xs font-semibold">{v.year}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {vacancyTrend.map(v => <td key={v.year} className="p-3 text-center font-semibold text-primary-600 border-t border-surface-100">{v.vacancies}</td>)}
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3 className="font-heading font-semibold text-surface-800 mb-3 text-sm uppercase tracking-wide">Popular Posts Available Through SSC CGL</h3>
              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-surface-900 text-white">
                      <tr>
                        <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Post Name</th>
                        <th className="p-3 font-semibold text-xs uppercase tracking-wide">Ministry/Dept</th>
                        <th className="p-3 font-semibold text-xs uppercase tracking-wide text-center">Pay Level</th>
                        <th className="p-3 font-semibold text-xs uppercase tracking-wide text-center">Basic Pay</th>
                        <th className="p-3 font-semibold text-xs uppercase tracking-wide text-center">Group</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topPosts.map((post, i) => (
                        <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                          <td className="p-3 font-medium text-surface-800">{post.post}</td>
                          <td className="p-3 text-surface-600 text-xs">{post.ministry}</td>
                          <td className="p-3 text-center"><span className="badge badge-primary">Level {post.payLevel}</span></td>
                          <td className="p-3 text-center font-semibold text-emerald-600">{post.basicPay}</td>
                          <td className="p-3 text-center text-xs text-surface-500">{post.group}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* EXAM PATTERN */}
            <section id="exam-pattern" className="mb-12">
              <SectionHeading num="5" title="SSC CGL 2026 Exam Pattern" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="card p-5 border-amber-300 bg-amber-50">
                  <div className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-1">Stage 1</div>
                  <div className="text-2xl font-heading font-bold text-surface-800">Tier 1</div>
                  <div className="text-xs text-surface-500 mt-1">100 questions · 200 marks · 60 minutes</div>
                  <span className="inline-block mt-2 text-xs bg-amber-200 text-amber-800 px-3 py-1 rounded-full font-semibold">⚠️ Qualifying Only – Marks Not Counted</span>
                </div>
                <div className="card p-5 border-primary-300 bg-primary-50">
                  <div className="text-xs font-semibold uppercase tracking-wide text-primary-600 mb-1">Stage 2</div>
                  <div className="text-2xl font-heading font-bold text-primary-600">Tier 2</div>
                  <div className="text-xs text-surface-500 mt-1">Paper I (all) + Paper II (JSO posts) + DEST</div>
                  <span className="inline-block mt-2 text-xs bg-primary-200 text-primary-800 px-3 py-1 rounded-full font-semibold">✅ Decides Final Merit & Post Allocation</span>
                </div>
              </div>

              <h3 className="font-heading font-semibold text-surface-800 mb-3 mt-6">Tier 1 Exam Pattern</h3>
              <div className="card overflow-hidden mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-surface-900 text-white">
                      <tr>
                        <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Section</th>
                        <th className="p-3 font-semibold text-xs uppercase tracking-wide text-center">Questions</th>
                        <th className="p-3 font-semibold text-xs uppercase tracking-wide text-center">Marks</th>
                        <th className="p-3 font-semibold text-xs uppercase tracking-wide text-center">Negative Marking</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tier1Pattern.map((row, i) => (
                        <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                          <td className="p-3 font-medium text-surface-800">{row.section}</td>
                          <td className="p-3 text-center text-surface-600">{row.questions}</td>
                          <td className="p-3 text-center font-semibold text-surface-800">{row.marks}</td>
                          <td className="p-3 text-center text-red-500 font-semibold">–0.50</td>
                        </tr>
                      ))}
                      <tr className="border-t-2 border-surface-300 bg-surface-900 text-white">
                        <td className="p-3 font-bold">Total</td>
                        <td className="p-3 text-center font-bold">100</td>
                        <td className="p-3 text-center font-bold">200</td>
                        <td className="p-3 text-center text-xs">60 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="font-heading font-semibold text-surface-800 mb-3">Tier 2 Exam Pattern (Paper I – All Posts)</h3>
              <div className="card overflow-hidden mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-primary-900 text-white">
                      <tr>
                        <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Section / Module</th>
                        <th className="p-3 font-semibold text-xs uppercase tracking-wide text-center">Questions</th>
                        <th className="p-3 font-semibold text-xs uppercase tracking-wide text-center">Marks</th>
                        <th className="p-3 font-semibold text-xs uppercase tracking-wide text-center">Session</th>
                        <th className="p-3 font-semibold text-xs uppercase tracking-wide text-center">Negative</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tier2Pattern.map((row, i) => (
                        <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''} ${row.questions === null ? 'bg-amber-50' : ''}`}>
                          <td className="p-3 font-medium text-surface-800">{row.section}</td>
                          <td className="p-3 text-center text-surface-600">{row.questions ?? '—'}</td>
                          <td className="p-3 text-center font-semibold text-surface-800">{row.marks ?? '—'}</td>
                          <td className="p-3 text-center text-xs text-surface-500">Session {row.session}</td>
                          <td className="p-3 text-center text-red-500 font-semibold text-xs">{row.neg}</td>
                        </tr>
                      ))}
                      <tr className="border-t-2 border-surface-300 bg-primary-900 text-white">
                        <td className="p-3 font-bold">Total (Scoring)</td>
                        <td className="p-3 text-center font-bold">150</td>
                        <td className="p-3 text-center font-bold">450</td>
                        <td className="p-3 text-center text-xs">~4.5 hrs</td>
                        <td className="p-3"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 text-sm text-surface-600">
                <strong className="text-surface-800">Important:</strong> Section III (Computer Knowledge) is evaluated <em>only</em> for candidates who clear the Section I + II cut-off. DEST is compulsory for all posts but only qualifying — it does not add to your merit score. Paper II (Statistics) is only for JSO and Statistical Investigator posts.
              </div>
            </section>

            {/* SYLLABUS */}
            <section id="syllabus" className="mb-12">
              <SectionHeading num="6" title="SSC CGL 2026 Syllabus" />
              <div className="space-y-3">
                {exam.syllabus.map((sec: any, i: number) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="p-5 cursor-pointer flex items-center justify-between font-heading font-semibold text-surface-800 hover:text-primary-500 transition-colors list-none">
                      <span className="flex items-center gap-3">
                        <span className="w-7 h-7 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-xs font-bold">{i + 1}</span>
                        {sec.subject}
                      </span>
                      <svg className="w-5 h-5 text-surface-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </summary>
                    <div className="px-5 pb-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-10">
                        {sec.topics.map((topic: string, j: number) => (
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

            {/* SALARY */}
            <section id="salary" className="mb-12">
              <SectionHeading num="7" title="SSC CGL Salary & Job Profile" />
              <div className="card overflow-hidden mb-4">
                <div className="bg-emerald-700 text-white px-5 py-3 text-sm font-semibold">
                  💰 In-Hand Salary Estimates (Post-Wise)
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-surface-50 border-b border-surface-200">
                      <tr>
                        <th className="text-left p-4 font-semibold text-surface-700">Post</th>
                        <th className="p-4 text-center font-semibold text-surface-700">Pay Level</th>
                        <th className="p-4 text-center font-semibold text-surface-700">Basic Pay</th>
                        <th className="p-4 text-center font-semibold text-surface-700">Approx. In-Hand (Metro)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { post: 'Asst. Audit Officer / Asst. Accounts Officer', level: '8', basic: '₹47,600', inhand: '₹70,000–80,000' },
                        { post: 'Income Tax Inspector / Customs Inspector', level: '7', basic: '₹44,900', inhand: '₹65,000–75,000' },
                        { post: 'Sub Inspector (CBI/NIA) / ASO (MEA/CSS)', level: '6', basic: '₹35,400', inhand: '₹55,000–65,000' },
                        { post: 'Statistical Investigator Gr. II', level: '6', basic: '₹35,400', inhand: '₹55,000–65,000' },
                        { post: 'Auditor / Accountant', level: '5', basic: '₹29,200', inhand: '₹45,000–55,000' },
                        { post: 'Tax Assistant / UDC', level: '4', basic: '₹25,500', inhand: '₹40,000–50,000' },
                      ].map((row, i) => (
                        <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                          <td className="p-4 font-medium text-surface-800 text-sm">{row.post}</td>
                          <td className="p-4 text-center"><span className="badge badge-primary text-xs">Level {row.level}</span></td>
                          <td className="p-4 text-center font-semibold text-surface-700">{row.basic}</td>
                          <td className="p-4 text-center font-semibold text-emerald-600">{row.inhand}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs text-surface-400 bg-surface-50 rounded-lg p-3">
                In-hand estimates include DA (53%), HRA (27% for metro cities), and TA. Actual salary varies by posting city, DA revision, and applicable allowances. Last DA revision: January 2025.
              </p>
            </section>

            {/* STUDY PLAN */}
            <section id="study-plan" className="mb-12">
              <SectionHeading num="8" title="6-Month Study Plan for SSC CGL 2026" />
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-primary-200 hidden sm:block" />
                <div className="space-y-4">
                  {exam.studyPlan.map((step: string, i: number) => (
                    <div key={i} className="sm:pl-14 relative">
                      <div className="hidden sm:flex absolute left-0 top-4 w-10 h-10 bg-primary-500 rounded-xl items-center justify-center text-white font-heading font-bold text-sm z-10">{i + 1}</div>
                      <div className="card p-5"><p className="text-surface-700 leading-relaxed text-sm">{step}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* BOOKS */}
            <section id="books" className="mb-12">
              <SectionHeading num="9" title="Best Books for SSC CGL 2026" />
              <BooksTable books={exam.bestBooks} />
            </section>

            {/* FREE RESOURCES */}
            <section id="resources" className="mb-12">
              <SectionHeading num="10" title="Free Preparation Resources" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {exam.freeResources.map((res: any, i: number) => (
                  <a key={i} href={res.url} target="_blank" rel="noopener noreferrer" className="card p-5 group hover:border-primary-300">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{res.type === 'youtube' ? '🎥' : '🌐'}</span>
                      <span className="badge badge-primary capitalize">{res.type}</span>
                    </div>
                    <h3 className="font-semibold text-surface-800 group-hover:text-primary-500 transition-colors mb-1">{res.name}</h3>
                    <p className="text-xs text-surface-500">{res.description}</p>
                  </a>
                ))}
              </div>
            </section>

            {/* TIPS */}
            <section id="tips" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center text-accent-600 text-sm">💡</span>
                Expert Preparation Tips for SSC CGL
              </h2>
              <div className="card p-6 bg-accent-50 border-accent-200 space-y-4">
                {exam.tips.map((tip: string, i: number) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-surface-700">
                    <span className="w-6 h-6 bg-accent-200 rounded-full flex items-center justify-center text-accent-700 text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                    {tip}
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {exam.faqs.map((faq: any, i: number) => (
                  <details key={i} className="card group">
                    <summary className="p-5 cursor-pointer flex items-center justify-between font-medium text-surface-800 hover:text-primary-500 list-none">
                      <span className="flex-1">{faq.question}</span>
                      <svg className="w-5 h-5 text-surface-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </summary>
                    <div className="px-5 pb-5"><p className="text-sm text-surface-600 leading-relaxed">{faq.answer}</p></div>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#0a1e4f] to-[#1a56db] rounded-2xl p-8 text-center text-white mb-8">
              <h3 className="font-heading font-bold text-xl mb-2">Ready to Start Your SSC CGL 2026 Preparation?</h3>
              <p className="text-blue-100 text-sm mb-5">Everything you need is free on TaiyarHo — previous papers, guides, current affairs, eligibility checker.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/resources" className="bg-white text-primary-700 font-heading font-bold px-6 py-3 rounded-xl hover:bg-primary-50 transition-all text-sm">Free Resources →</Link>
                <Link href="/tools/age-calculator" className="border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all text-sm">Check Eligibility</Link>
              </div>
            </div>

            <p className="text-xs text-surface-400 bg-surface-50 rounded-lg p-4">
              <strong>Disclaimer:</strong> Information is based on the official SSC CGL notification and trusted educational sources. Exam dates and vacancies may change. Always refer to the official notification at{' '}
              <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary-500">ssc.gov.in</a> before applying.
            </p>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="card p-5">
                <h3 className="font-heading font-semibold text-surface-800 mb-4 text-sm uppercase tracking-wide">On This Page</h3>
                <nav className="space-y-1">
                  {toc.map((s) => (
                    <a key={s.id} href={`#${s.id}`} className="block py-1.5 px-3 rounded-lg text-sm text-surface-500 hover:text-primary-500 hover:bg-primary-50 transition-colors">{s.label}</a>
                  ))}
                </nav>
              </div>
              <div className="card p-5 bg-emerald-50 border-emerald-200">
                <h3 className="font-heading font-semibold text-emerald-800 mb-2 text-sm">🔔 Apply Online</h3>
                <p className="text-xs text-emerald-700 mb-3">Notification released. Last date: 30 April 2026</p>
                <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center text-sm font-semibold py-2 rounded-lg transition-colors">Apply at ssc.gov.in →</a>
              </div>
              <div className="card p-5 bg-primary-50 border-primary-200">
                <h3 className="font-heading font-semibold text-primary-800 mb-2 text-sm">Quick Facts</h3>
                <div className="space-y-2 text-xs text-primary-700">
                  <div className="flex justify-between"><span>Application Fee</span><strong>₹100</strong></div>
                  <div className="flex justify-between"><span>Vacancies (2025)</span><strong>14,582</strong></div>
                  <div className="flex justify-between"><span>Tier 1</span><strong>May–Jun 2026</strong></div>
                  <div className="flex justify-between"><span>Interview</span><strong>No Interview</strong></div>
                  <div className="flex justify-between"><span>Attempts</span><strong>Unlimited</strong></div>
                </div>
              </div>
              <div className="card p-5">
                <h3 className="font-heading font-semibold text-surface-800 mb-3 text-sm">Related Exams</h3>
                <div className="space-y-2">
                  {['ssc-chsl', 'ssc-gd', 'upsc-ias', 'ibps-po'].map(slug => (
                    <Link key={slug} href={`/exams/${slug}`} className="block text-sm text-primary-500 hover:text-primary-600 hover:underline uppercase tracking-wide">{slug.replace(/-/g, ' ')}</Link>
                  ))}
                </div>
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
            <Link href="/tools/eligibility-checker" className="btn-primary">Check Eligibility →</Link>
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

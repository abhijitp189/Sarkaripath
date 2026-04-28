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
      title: 'SSC CGL 2026 – Syllabus, Eligibility & Preparation Guide | TaiyarHo',
      description: 'SSC CGL 2026 notification released. Tier 1 exam in May–June 2026. Check complete syllabus, exam pattern, eligibility, 14,000+ vacancies, salary, best books and free study resources.',
      alternates: { canonical: 'https://taiyarho.in/exams/ssc-cgl/' },
    };
  }

  if (params.slug === 'ssc-gd-constable') {
    return {
      title: 'SSC GD Constable 2026 – Syllabus, Eligibility & Guide | TaiyarHo',
      description: 'SSC GD Constable 2026: CBT exam from 27 Apr–30 May 2026. 25,487 vacancies in BSF, CISF, CRPF, ITBP. Check syllabus, exam pattern, physical standards (PET/PST), eligibility, salary and free resources.',
      alternates: { canonical: 'https://taiyarho.in/exams/ssc-gd-constable/' },
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
  if (detailed && detailed.slug === 'ssc-gd-constable') return <SscGdPage exam={detailed} />;
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


// ─── SSC GD CONSTABLE RICH PAGE ──────────────────────────────────────────────
function SscGdPage({ exam }: { exam: any }) {
  const toc = [
    { id: 'overview', label: 'Overview' },
    { id: 'important-dates', label: 'Important Dates' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'vacancies', label: 'Vacancies & Forces' },
    { id: 'exam-pattern', label: 'Exam Pattern (CBT)' },
    { id: 'physical', label: 'Physical Test (PET/PST)' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'salary', label: 'Salary & Benefits' },
    { id: 'study-plan', label: 'Study Plan' },
    { id: 'books', label: 'Best Books' },
    { id: 'resources', label: 'Free Resources' },
    { id: 'tips', label: 'Expert Tips' },
    { id: 'faq', label: 'FAQs' },
  ];

  const importantDates = [
    { event: 'Official Notification Released', date: '01 December 2025', status: 'released' },
    { event: 'Online Application Opens', date: '01 December 2025', status: 'released' },
    { event: 'Last Date to Apply Online', date: '31 December 2025', status: 'released' },
    { event: 'Fee Payment Last Date', date: '01 January 2026', status: 'released' },
    { event: 'Application Correction Window', date: '08–10 January 2026', status: 'released' },
    { event: 'Exam City Intimation Slip', date: 'Released', status: 'released' },
    { event: 'Admit Card Released', date: 'Released (download at ssc.gov.in)', status: 'released' },
    { event: 'CBT Exam Date', date: '27 April – 30 May 2026', status: 'upcoming' },
    { event: 'CBT Answer Key', date: 'To be notified (TBN)', status: 'tbn' },
    { event: 'CBT Result', date: 'To be notified (TBN)', status: 'tbn' },
    { event: 'PET / PST Date', date: 'To be notified (TBN)', status: 'tbn' },
    { event: 'Medical Examination & DV', date: 'To be notified (TBN)', status: 'tbn' },
    { event: 'Final Merit List', date: 'To be notified (TBN)', status: 'tbn' },
  ];

  const cbtPattern = [
    { section: 'General Intelligence & Reasoning', questions: 20, marks: 40 },
    { section: 'General Knowledge & General Awareness', questions: 20, marks: 40 },
    { section: 'Elementary Mathematics', questions: 20, marks: 40 },
    { section: 'English / Hindi Language', questions: 20, marks: 40 },
  ];

  const vacancyData = [
    { force: 'BSF (Border Security Force)', male: '~9,500', female: '~800', total: '~10,300' },
    { force: 'CRPF (Central Reserve Police Force)', male: '~5,500', female: '~550', total: '~6,050' },
    { force: 'CISF (Central Industrial Security Force)', male: '~3,200', female: '~350', total: '~3,550' },
    { force: 'SSB (Sashastra Seema Bal)', male: '~2,500', female: '~150', total: '~2,650' },
    { force: 'ITBP (Indo-Tibetan Border Police)', male: '~1,500', female: '~100', total: '~1,600' },
    { force: 'AR (Assam Rifles – Rifleman)', male: '~800', female: '~50', total: '~850' },
    { force: 'SSF / NCB / Others', male: '~467', female: '~20', total: '~487' },
    { force: 'TOTAL (Official)', male: '23,467', female: '2,020', total: '25,487' },
  ];

  const vacancyTrend = [
    { year: '2018', vacancies: '54,953' },
    { year: '2021', vacancies: '25,271' },
    { year: '2023', vacancies: '26,146' },
    { year: '2024', vacancies: '39,481' },
    { year: '2025 (CBT Feb 2025)', vacancies: '53,690 (revised)' },
    { year: '2026 (CBT Apr–May 2026)', vacancies: '25,487' },
  ];

  const physicalPet = [
    { category: 'Male – General/OBC/EWS/SC/ST', distance: '5 km', time: '24 minutes' },
    { category: 'Female – General/OBC/EWS/SC/ST', distance: '1.6 km', time: '8 minutes 30 seconds' },
    { category: 'Male – Ladakh / Tribal / NE Regions', distance: '1.6 km', time: '6 minutes 30 seconds' },
    { category: 'Female – Ladakh / Tribal / NE Regions', distance: '800 m', time: '4 minutes' },
    { category: 'Ex-Servicemen (all categories)', distance: 'Exempt', time: 'PST only (measurements)' },
  ];

  const physicalPst = [
    { category: 'Male – General / OBC / EWS', height: '170 cm', chest: '80–85 cm' },
    { category: 'Male – SC / ST', height: '162.5 cm', chest: '77–82 cm' },
    { category: 'Male – NE States / Tribal', height: '162.5 cm', chest: '77–82 cm' },
    { category: 'Female – General / OBC / EWS', height: '157 cm', chest: 'N/A' },
    { category: 'Female – SC / ST', height: '150 cm', chest: 'N/A' },
    { category: 'Female – NE States / Tribal', height: '150 cm', chest: 'N/A' },
  ];

  const statusColor = (s: string) => {
    if (s === 'released') return 'bg-emerald-100 text-emerald-700';
    if (s === 'upcoming') return 'bg-blue-100 text-blue-700';
    return 'bg-surface-100 text-surface-500';
  };
  const statusLabel = (s: string) => {
    if (s === 'released') return '✓ Released';
    if (s === 'upcoming') return '🔔 Active';
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
            <span className="text-white">SSC GD Constable 2026</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full">Police / CAPF</span>
            <span className="bg-emerald-500/20 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">Central Govt</span>
            <span className="bg-orange-400/20 text-orange-200 text-xs font-semibold px-3 py-1 rounded-full">🔔 CBT Active: Apr–May 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-3 leading-tight">
            SSC GD Constable 2026 –<br className="hidden sm:block" /> Complete Preparation Guide
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl leading-relaxed mb-6">
            CBT exam underway: 27 April – 30 May 2026. 25,487 vacancies in BSF, CISF, CRPF, ITBP, SSB, Assam Rifles & NCB. Class 10 pass eligible.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Total Vacancies', value: '25,487' },
              { label: 'CBT Exam', value: 'Apr–May 2026' },
              { label: 'Min. Qualification', value: 'Class 10 Pass' },
              { label: 'Salary (Gross)', value: '₹30K–42K/mo' },
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
        {/* TOC Mobile */}
        <div className="card p-5 mb-8 border-l-4 border-primary-500 lg:hidden">
          <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">📖 Quick Navigation</div>
          <ol className="grid grid-cols-2 gap-x-4 gap-y-1.5 list-decimal list-inside">
            {toc.map((s) => (
              <li key={s.id}><a href={`#${s.id}`} className="text-sm text-primary-500 hover:underline">{s.label}</a></li>
            ))}
          </ol>
        </div>

        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div>
            {/* OVERVIEW */}
            <section id="overview" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">What is SSC GD Constable?</h2>
              <div className="card p-6 mb-5">
                <p className="text-surface-600 leading-relaxed mb-4">
                  SSC GD Constable is conducted by the <strong>Staff Selection Commission (SSC)</strong> to recruit Constable (General Duty) in Central Armed Police Forces (CAPFs) and other central security organisations. It is one of India&apos;s largest central government recruitments — open to candidates who have passed Class 10.
                </p>
                <p className="text-surface-600 leading-relaxed">
                  The selection involves a <strong>Computer-Based Test (CBT)</strong>, followed by <strong>Physical Efficiency Test (PET)</strong>, <strong>Physical Standard Test (PST)</strong>, and a <strong>Medical Examination</strong>. There is no interview — final merit is based on CBT score (with NCC bonus where applicable).
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Conducting Body', value: 'Staff Selection Commission (SSC)' },
                  { label: 'Post Type', value: 'Group C, Non-Gazetted' },
                  { label: 'Pay Level', value: 'Level 3 (₹21,700–₹69,100)' },
                  { label: 'Minimum Qualification', value: '10th Pass (Matric)' },
                ].map((item) => (
                  <div key={item.label} className="bg-surface-50 rounded-xl p-4 border border-surface-200">
                    <div className="text-xs text-surface-400 uppercase tracking-wide">{item.label}</div>
                    <div className="font-semibold mt-1 text-sm text-surface-800">{item.value}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* IMPORTANT DATES */}
            <section id="important-dates" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">📅 Important Dates – SSC GD 2026</h2>
              <div className="overflow-x-auto rounded-xl border border-surface-200">
                <table className="w-full text-sm">
                  <thead className="bg-surface-900 text-white">
                    <tr>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Event</th>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Date</th>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {importantDates.map((row, i) => (
                      <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : 'bg-white'}`}>
                        <td className="p-3 font-medium text-surface-800">{row.event}</td>
                        <td className="p-3 text-surface-600">{row.date}</td>
                        <td className="p-3">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded ${statusColor(row.status)}`}>{statusLabel(row.status)}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-surface-400 mt-2">* Dates from official SSC notification (ssc.gov.in). TBN = To Be Notified. Always verify from official source.</p>
            </section>

            {/* ELIGIBILITY */}
            <section id="eligibility" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">Eligibility Criteria</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                {[
                  { label: 'Nationality', value: 'Indian citizen (also accepts subjects of Nepal, Bhutan, and specific migrant communities)' },
                  { label: 'Age Limit', value: '18–23 years as on 01 January 2026 (born: 02 Jan 2003 – 01 Jan 2008)' },
                  { label: 'Educational Qualification', value: 'Matriculation (Class 10) pass from a recognised Board by 01 January 2026' },
                  { label: 'Application Fee', value: '₹100 for General/OBC/EWS male | Exempted: Female, SC, ST, PwBD, Ex-SM' },
                ].map((item) => (
                  <div key={item.label} className="bg-surface-50 rounded-xl p-4 border border-surface-200">
                    <div className="text-xs text-surface-400 uppercase tracking-wide mb-1">{item.label}</div>
                    <div className="font-medium text-sm text-surface-800">{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="card p-5">
                <h3 className="font-heading font-semibold text-surface-800 mb-3 text-sm uppercase tracking-wide">Age Relaxation</h3>
                <div className="overflow-x-auto rounded-lg border border-surface-100">
                  <table className="w-full text-sm">
                    <thead className="bg-surface-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-surface-700">Category</th>
                        <th className="text-left p-3 font-semibold text-surface-700">Relaxation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {exam.ageRelaxations.map((r: any, i: number) => (
                        <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                          <td className="p-3 font-medium text-surface-800">{r.category}</td>
                          <td className="p-3 text-surface-600">{r.relaxation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* VACANCIES */}
            <section id="vacancies" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">Vacancies & Forces – SSC GD 2026</h2>
              <div className="overflow-x-auto rounded-xl border border-surface-200 mb-5">
                <table className="w-full text-sm">
                  <thead className="bg-surface-900 text-white">
                    <tr>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Force</th>
                      <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide">Male</th>
                      <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide">Female</th>
                      <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vacancyData.map((row, i) => (
                      <tr key={i} className={`border-t border-surface-100 ${row.force.startsWith('TOTAL') ? 'bg-primary-50 font-bold' : i % 2 === 1 ? 'bg-surface-50' : 'bg-white'}`}>
                        <td className="p-3 font-medium text-surface-800">{row.force}</td>
                        <td className="p-3 text-center text-surface-600">{row.male}</td>
                        <td className="p-3 text-center text-surface-600">{row.female}</td>
                        <td className={`p-3 text-center font-semibold ${row.force.startsWith('TOTAL') ? 'text-primary-700' : 'text-surface-700'}`}>{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card p-5">
                <h3 className="font-heading font-semibold text-surface-800 mb-3 text-sm">Vacancy Trend (Past Cycles)</h3>
                <div className="flex flex-wrap gap-2">
                  {vacancyTrend.map((v) => (
                    <div key={v.year} className="bg-surface-50 border border-surface-200 rounded-lg px-4 py-2 text-center min-w-[110px]">
                      <div className="text-xs text-surface-400">{v.year}</div>
                      <div className="font-semibold text-sm text-surface-800">{v.vacancies}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-surface-400 mt-3">Note: Vacancies vary significantly each cycle. Always check the official notification for exact numbers.</p>
              </div>
            </section>

            {/* CBT EXAM PATTERN */}
            <section id="exam-pattern" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">Exam Pattern – Computer Based Test (CBT)</h2>
              <div className="overflow-x-auto rounded-xl border border-surface-200 mb-4">
                <table className="w-full text-sm">
                  <thead className="bg-surface-900 text-white">
                    <tr>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Subject</th>
                      <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide">Questions</th>
                      <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide">Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cbtPattern.map((row, i) => (
                      <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : 'bg-white'}`}>
                        <td className="p-3 font-medium text-surface-800">{row.section}</td>
                        <td className="p-3 text-center font-semibold text-primary-700">{row.questions}</td>
                        <td className="p-3 text-center font-semibold text-emerald-600">{row.marks}</td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-surface-300 bg-primary-50 font-bold">
                      <td className="p-3 text-primary-800">TOTAL</td>
                      <td className="p-3 text-center text-primary-800">80</td>
                      <td className="p-3 text-center text-emerald-700">160</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                {[
                  { label: 'Duration', value: '60 minutes (no sectional timer)' },
                  { label: 'Negative Marking', value: '–0.25 per wrong answer' },
                  { label: 'Languages', value: 'English, Hindi & 13 regional languages' },
                ].map((item) => (
                  <div key={item.label} className="card p-4 text-center">
                    <div className="text-xs text-surface-400 uppercase tracking-wide mb-1">{item.label}</div>
                    <div className="font-semibold text-sm text-surface-800">{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                <strong>💡 NCC Bonus Marks:</strong> NCC &apos;A&apos; certificate = 2% bonus | NCC &apos;B&apos; = 3% bonus | NCC &apos;C&apos; = 5% bonus — added to normalized CBT score in the final merit list.
              </div>
            </section>

            {/* PHYSICAL TEST */}
            <section id="physical" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">Physical Test – PET & PST Standards</h2>
              <div className="card p-1 mb-5">
                <div className="bg-surface-900 text-white px-5 py-3 rounded-t-xl">
                  <h3 className="font-heading font-semibold text-sm">Physical Efficiency Test (PET) – Running Standards</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-surface-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-surface-700">Category</th>
                        <th className="text-center p-3 font-semibold text-surface-700">Distance</th>
                        <th className="text-center p-3 font-semibold text-surface-700">Time Limit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {physicalPet.map((row, i) => (
                        <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                          <td className="p-3 font-medium text-surface-800">{row.category}</td>
                          <td className="p-3 text-center text-surface-600">{row.distance}</td>
                          <td className={`p-3 text-center font-semibold ${row.distance === 'Exempt' ? 'text-surface-400' : 'text-emerald-600'}`}>{row.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card p-1 mb-4">
                <div className="bg-surface-900 text-white px-5 py-3 rounded-t-xl">
                  <h3 className="font-heading font-semibold text-sm">Physical Standard Test (PST) – Height & Chest</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-surface-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-surface-700">Category</th>
                        <th className="text-center p-3 font-semibold text-surface-700">Height</th>
                        <th className="text-center p-3 font-semibold text-surface-700">Chest (Male only)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {physicalPst.map((row, i) => (
                        <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                          <td className="p-3 font-medium text-surface-800">{row.category}</td>
                          <td className="p-3 text-center font-semibold text-primary-700">{row.height}</td>
                          <td className="p-3 text-center text-surface-600">{row.chest}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-800">
                <strong>⚠️ Important:</strong> PET is QUALIFYING only — no marks added to merit. However, if you fail the race, you are immediately eliminated. There is no second chance for PET. Appeals are only allowed for PST (height/chest) on the same day. Start running training from Month 1 of your preparation.
              </div>
            </section>

            {/* SYLLABUS */}
            <section id="syllabus" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">SSC GD Syllabus 2026 – Subject Wise</h2>
              <p className="text-surface-500 text-sm mb-4">Syllabus is at <strong>Matriculation (Class 10) level</strong>. Click each subject to expand the topic list.</p>
              <div className="space-y-3">
                {exam.syllabus.map((section: any, i: number) => (
                  <details key={i} className="card group">
                    <summary className="p-5 cursor-pointer flex items-center gap-3 list-none font-heading font-semibold text-surface-800 hover:text-primary-500">
                      <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm flex-shrink-0">{i + 1}</span>
                      <span className="flex-1">{section.subject}</span>
                      <svg className="w-5 h-5 text-surface-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </summary>
                    <div className="px-5 pb-5 ml-9 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {section.topics.map((topic: string, j: number) => (
                        <div key={j} className="flex items-start gap-2 text-sm text-surface-600">
                          <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />{topic}
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* SALARY */}
            <section id="salary" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">SSC GD Constable Salary & Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                {[
                  { label: 'Pay Scale', value: 'Pay Level 3: ₹21,700 – ₹69,100/month', color: 'text-emerald-700' },
                  { label: 'Estimated Gross (metro)', value: '₹38,000 – ₹45,000/month', color: 'text-emerald-700' },
                  { label: 'Estimated Gross (non-metro)', value: '₹30,000 – ₹38,000/month', color: 'text-emerald-700' },
                  { label: 'Annual Increment', value: '3% of basic pay each year', color: 'text-surface-700' },
                ].map((item) => (
                  <div key={item.label} className="bg-surface-50 rounded-xl p-4 border border-surface-200">
                    <div className="text-xs text-surface-400 uppercase tracking-wide mb-1">{item.label}</div>
                    <div className={`font-semibold text-sm ${item.color}`}>{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="card p-5">
                <h3 className="font-heading font-semibold text-surface-800 mb-3 text-sm">Additional Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Dearness Allowance (DA) – revised quarterly',
                    'House Rent Allowance (HRA) – 8–27% of basic based on city',
                    'Transport Allowance (TA)',
                    'Free ration / ration money',
                    'Risk & Hardship Allowance (for border postings)',
                    'Government accommodation at posting (where available)',
                    'Medical facilities for self and family (CGHS / force hospital)',
                    'Pension under New Pension Scheme (NPS)',
                    '30 days annual leave + sick leave + CL',
                    'Promotion path: Constable → Head Constable → ASI → SI',
                  ].map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-surface-600">
                      <span className="text-emerald-500 mt-0.5">✓</span>{b}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* STUDY PLAN */}
            <section id="study-plan" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">6-Month Study Plan for SSC GD 2026</h2>
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
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">Best Books for SSC GD Constable 2026</h2>
              <BooksTable books={exam.bestBooks} />
            </section>

            {/* FREE RESOURCES */}
            <section id="resources" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">Free Preparation Resources</h2>
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
                Expert Preparation Tips for SSC GD 2026
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
              <h3 className="font-heading font-bold text-xl mb-2">Start Your SSC GD 2026 Preparation Today</h3>
              <p className="text-blue-100 text-sm mb-5">Free resources, previous year papers, and eligibility checker — all free on TaiyarHo.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/resources" className="bg-white text-primary-700 font-heading font-bold px-6 py-3 rounded-xl hover:bg-primary-50 transition-all text-sm">Free Resources →</Link>
                <Link href="/tools/age-calculator" className="border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all text-sm">Check Eligibility</Link>
              </div>
            </div>

            <p className="text-xs text-surface-400 bg-surface-50 rounded-lg p-4">
              <strong>Disclaimer:</strong> Information is based on the official SSC GD Constable 2025 notification (released 01 December 2025) and verified educational sources. Exam dates and vacancies may change. Always refer to the official notification at{' '}
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
              <div className="card p-5 bg-orange-50 border-orange-200">
                <h3 className="font-heading font-semibold text-orange-800 mb-2 text-sm">🔔 CBT Active</h3>
                <p className="text-xs text-orange-700 mb-3">Exam running: 27 Apr – 30 May 2026. Download admit card at ssc.gov.in</p>
                <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" className="block w-full bg-orange-600 hover:bg-orange-700 text-white text-center text-sm font-semibold py-2 rounded-lg transition-colors">Go to ssc.gov.in →</a>
              </div>
              <div className="card p-5 bg-primary-50 border-primary-200">
                <h3 className="font-heading font-semibold text-primary-800 mb-2 text-sm">Quick Facts</h3>
                <div className="space-y-2 text-xs text-primary-700">
                  <div className="flex justify-between"><span>Vacancies</span><strong>25,487</strong></div>
                  <div className="flex justify-between"><span>CBT Date</span><strong>Apr–May 2026</strong></div>
                  <div className="flex justify-between"><span>Application Fee</span><strong>₹100</strong></div>
                  <div className="flex justify-between"><span>Qualification</span><strong>Class 10</strong></div>
                  <div className="flex justify-between"><span>Interview</span><strong>No Interview</strong></div>
                  <div className="flex justify-between"><span>Pay Level</span><strong>Level 3</strong></div>
                </div>
              </div>
              <div className="card p-5">
                <h3 className="font-heading font-semibold text-surface-800 mb-3 text-sm">Related Exams</h3>
                <div className="space-y-2">
                  {[['ssc-cpo', 'SSC CPO'], ['ssc-chsl', 'SSC CHSL'], ['up-police-constable', 'UP Police Constable'], ['delhi-police-constable', 'Delhi Police Constable']].map(([slug, label]) => (
                    <Link key={slug} href={`/exams/${slug}`} className="block text-sm text-primary-500 hover:text-primary-600 hover:underline">{label}</Link>
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

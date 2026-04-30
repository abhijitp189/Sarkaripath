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

  if (params.slug === 'up-police-constable') {
    return {
      title: 'UP Police Constable 2026 – Syllabus, Eligibility, Exam Date & Guide | TaiyarHo',
      description: 'UP Police Constable 2026: 32,679 vacancies. Written exam on 8–10 June 2026. Check syllabus, exam pattern (150 Qs, 300 marks), PET/PST physical standards, eligibility, age limit, salary ₹21,700–₹69,100 and free resources.',
      alternates: { canonical: 'https://taiyarho.in/exams/up-police-constable/' },
    };
  }

  if (params.slug === 'ctet') {
    return {
      title: 'CTET 2026 – Syllabus, Eligibility, Exam Date, Pattern & Complete Guide | TaiyarHo',
      description: 'CTET July 2026 exam on 5 July 2026. Check complete syllabus for Paper 1 & Paper 2, eligibility criteria, exam pattern (150 MCQs, no negative marking), application dates, qualifying marks and free preparation resources.',
      alternates: { canonical: 'https://taiyarho.in/exams/ctet/' },
    };
  }

  if (params.slug === 'ssc-mts') {
    return {
      title: 'SSC MTS 2026 – Syllabus, Exam Pattern, Eligibility & Complete Guide | TaiyarHo',
      description: 'SSC MTS 2026: 7,948 vacancies. CBT conducted Feb 4–20, 2026. Answer key released March 3. Check syllabus, exam pattern (Session I & II), eligibility (10th pass, 18–27 yrs), salary ₹18,000–₹22,000/month, and free preparation resources.',
      alternates: { canonical: 'https://taiyarho.in/exams/ssc-mts/' },
    };
  }

  if (params.slug === 'ibps-clerk') {
    return {
      title: 'IBPS Clerk 2026 (CRP CSA-XVI) – Syllabus, Exam Date, Eligibility & Complete Guide | TaiyarHo',
      description: 'IBPS Clerk 2026: Prelims on 10–11 Oct, Mains on 27 Dec. 15,000+ vacancies in 11 public sector banks. Check complete syllabus, exam pattern (revised Mains), eligibility, age limit, salary ₹28,000–₹32,000/month and free preparation resources.',
      alternates: { canonical: 'https://taiyarho.in/exams/ibps-clerk/' },
    };
  }

  if (params.slug === 'sbi-clerk') {
    return {
      title: 'SBI Clerk 2026 (Junior Associate) – Syllabus, Exam Date, Eligibility & Complete Guide | TaiyarHo',
      description: 'SBI Clerk 2026 notification expected July/August 2026. 6,000+ vacancies. Check complete syllabus, exam pattern (Prelims + Mains), eligibility, age limit 20–28 years, salary ₹46,000/month and free preparation resources for Junior Associate exam.',
      alternates: { canonical: 'https://taiyarho.in/exams/sbi-clerk/' },
    };
  }

  if (params.slug === 'ugc-net') {
    return {
      title: 'UGC NET 2026 – Notification Out, Application Dates, Syllabus, Eligibility & Complete Guide | TaiyarHo',
      description: 'UGC NET June 2026 notification released on 29 April 2026. Exam from 22–30 June 2026. Apply by 20 May 2026. Check complete syllabus for Paper 1 & Paper 2 (85 subjects), eligibility (Master\'s degree, 55%), exam pattern, JRF age limit 30 years, application fee and free preparation resources.',
      alternates: { canonical: 'https://taiyarho.in/exams/ugc-net/' },
    };
  }
  if (params.slug === 'army-agniveer') {
    return {
      title: 'Army Agniveer 2026 – Eligibility, CEE Exam, Salary & Guide | TaiyarHo',
      description: 'Complete guide on Indian Army Agniveer 2026: 25,000+ vacancies, CEE exam pattern, eligibility, physical standards, salary ₹30k–₹40k, Seva Nidhi ₹11.71 lakh.',
      alternates: { canonical: 'https://taiyarho.in/exams/army-agniveer/' },
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
  if (brief && brief.slug === 'up-police-constable') return <UpPoliceConstablePage exam={brief} />;
  if (brief && brief.slug === 'ctet') return <CtetPage exam={brief} />;
  if (brief && brief.slug === 'ssc-mts') return <SscMtsPage exam={brief} />;
  if (brief && brief.slug === 'sbi-clerk') return <SbiClerkPage exam={brief} />;
  if (brief && brief.slug === 'ugc-net') return <UgcNetPage exam={brief} />;
  if (brief && brief.slug === 'army-agniveer') return <ArmyAgniveerPage exam={brief} />;
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

// ─── UP POLICE CONSTABLE RICH PAGE ──────────────────────────────────────────
function UpPoliceConstablePage({ exam }: { exam: any }) {
  const toc = [
    { id: 'overview', label: 'Overview' },
    { id: 'important-dates', label: 'Important Dates' },
    { id: 'eligibility', label: 'Eligibility Criteria' },
    { id: 'vacancies', label: 'Vacancies & Posts' },
    { id: 'exam-pattern', label: 'Exam Pattern' },
    { id: 'physical', label: 'Physical Test (PET/PST)' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'salary', label: 'Salary & Benefits' },
    { id: 'how-to-apply', label: 'How to Apply' },
    { id: 'study-plan', label: 'Study Plan' },
    { id: 'books', label: 'Best Books' },
    { id: 'tips', label: 'Expert Tips' },
    { id: 'faq', label: 'FAQs' },
  ];

  const importantDates = [
    { event: 'Official Notification Released', date: '31 December 2025', status: 'released' },
    { event: 'Online Application Opens', date: '31 December 2025', status: 'released' },
    { event: 'Last Date to Apply Online', date: '30 January 2026', status: 'released' },
    { event: 'OTR (One-Time Registration) Mandatory', date: 'Active at uppbpb.gov.in', status: 'released' },
    { event: 'Admit Card Release', date: 'To be notified (TBN)', status: 'tbn' },
    { event: 'Written Exam – Day 1', date: '08 June 2026', status: 'upcoming' },
    { event: 'Written Exam – Day 2', date: '09 June 2026', status: 'upcoming' },
    { event: 'Written Exam – Day 3', date: '10 June 2026', status: 'upcoming' },
    { event: 'Answer Key Release', date: 'To be notified (TBN)', status: 'tbn' },
    { event: 'Written Exam Result', date: 'To be notified (TBN)', status: 'tbn' },
    { event: 'Physical Tests (PET / PST)', date: 'To be notified (TBN)', status: 'tbn' },
    { event: 'Document Verification & Medical', date: 'To be notified (TBN)', status: 'tbn' },
    { event: 'Final Merit List', date: 'To be notified (TBN)', status: 'tbn' },
  ];

  const examPattern = [
    { subject: 'General Hindi', questions: 37, marks: 74 },
    { subject: 'General Knowledge', questions: 38, marks: 76 },
    { subject: 'Numerical & Mental Ability', questions: 38, marks: 76 },
    { subject: 'Mental Aptitude / IQ / Reasoning', questions: 37, marks: 74 },
  ];

  const vacancyData = [
    { post: 'Constable Civil Police', male: 'Yes', female: 'Yes', total: 'Major share' },
    { post: 'Constable PAC / Armed Police', male: 'Yes', female: 'Yes (Women Battalion)', total: 'Major share' },
    { post: 'Constable Special Security Force (SSF)', male: 'Yes', female: 'No', total: 'Included' },
    { post: 'Jail Warder (Male)', male: 'Yes', female: 'No', total: 'Included' },
    { post: 'Mounted Police', male: 'Yes', female: 'No', total: 'Included' },
    { post: 'TOTAL (Official 2025–26 Cycle)', male: '–', female: '–', total: '32,679' },
  ];

  const ageLimit = [
    { category: 'General – Male', min: '18 years', max: '25 years*' },
    { category: 'General – Female', min: '18 years', max: '28 years*' },
    { category: 'OBC – Male', min: '18 years', max: '28 years*' },
    { category: 'OBC – Female', min: '18 years', max: '31 years*' },
    { category: 'SC / ST – Male', min: '18 years', max: '30 years*' },
    { category: 'SC / ST – Female', min: '18 years', max: '33 years*' },
    { category: 'Ex-Serviceman', min: '–', max: 'Service period + 3 yrs' },
  ];

  const physicalPst = [
    { category: 'Male – General / OBC / EWS / SC', height: '168 cm', chest: '79 cm (min. 5 cm expansion)', weight: 'Proportionate' },
    { category: 'Male – ST / Hilly / Tribal Areas', height: '160 cm', chest: '77 cm (min. 5 cm expansion)', weight: 'Proportionate' },
    { category: 'Female – General / OBC / EWS / SC', height: '152 cm', chest: 'N/A', weight: 'Proportionate' },
    { category: 'Female – ST / Hilly / Tribal Areas', height: '147 cm', chest: 'N/A', weight: 'Proportionate' },
  ];

  const physicalPet = [
    { category: 'Male – All Categories', distance: '4.8 km', time: '25 minutes' },
    { category: 'Female – All Categories', distance: '2.4 km', time: '14 minutes' },
  ];

  const syllabus = [
    {
      subject: '📘 General Hindi',
      topics: [
        'Hindi alphabet, punctuation marks',
        'Word formation: Sandhi, Samas, prefixes, suffixes',
        'Antonyms, synonyms, idioms and proverbs',
        'Sentence structure and sentence correction',
        'Letter writing, essay, paragraph composition',
        'Comprehension passages',
        'Tatsam, tadbhav, deshaj, foreign-origin words',
      ],
    },
    {
      subject: '🌐 General Knowledge',
      topics: [
        'Indian history – ancient, medieval, modern',
        'Indian geography and Uttar Pradesh geography',
        'Indian Constitution and polity',
        'Indian economy and agriculture',
        'General science – Physics, Chemistry, Biology',
        'National and international current affairs',
        'Uttar Pradesh – administration, culture, awards',
        'Sports, computers, cyber crime, banking awareness',
      ],
    },
    {
      subject: '🔢 Numerical & Mental Ability',
      topics: [
        'Number system, simplification',
        'Percentage, profit & loss, discount',
        'Simple and compound interest',
        'Time, speed & distance; time and work',
        'Mensuration (area, volume)',
        'Average, ratio and proportion',
        'Data interpretation: bar, pie, line graphs',
      ],
    },
    {
      subject: '🧠 Mental Aptitude / IQ / Reasoning',
      topics: [
        'Alphabet and number series',
        'Coding and decoding',
        'Direction sense, mirror images',
        'Blood relations, puzzles',
        'Syllogism and logical reasoning',
        'Public behaviour and ethical judgement',
        'Law and order situations',
        'Analytical ability and decision making',
      ],
    },
  ];

  const statusColor = (s: string) => {
    if (s === 'released') return 'bg-emerald-100 text-emerald-700';
    if (s === 'upcoming') return 'bg-blue-100 text-blue-700';
    return 'bg-surface-100 text-surface-500';
  };
  const statusLabel = (s: string) => {
    if (s === 'released') return '✓ Released';
    if (s === 'upcoming') return '🔔 Scheduled';
    return 'TBN';
  };

  const faqs = [
    { q: 'How many vacancies are there in UP Police Constable 2026?', a: 'UPPRPB has announced a total of 32,679 vacancies in its notification released on 31 December 2025. These include posts for Civil Police, PAC, Special Security Force, Jail Warder, and Mounted Police.' },
    { q: 'When is the UP Police Constable 2026 written exam?', a: 'The written examination is scheduled across three days – 8, 9, and 10 June 2026. It will be conducted in offline (OMR-based) mode across multiple exam centres in Uttar Pradesh.' },
    { q: 'Is there negative marking in the UP Police Constable exam?', a: 'There is some conflicting information across sources. Some report that negative marking has been removed for 2026, while others mention 0.5 marks deducted per wrong answer. Always verify the exact rule from the official UPPRPB notification at uppbpb.gov.in before the exam.' },
    { q: 'What is the minimum educational qualification for UP Police Constable?', a: 'Candidates must have passed Class 12 (Intermediate) or an equivalent examination from a recognised board. This qualification must be completed on or before the last date of application.' },
    { q: 'Are the physical tests (PET and PST) part of the merit calculation?', a: 'No. Both the Physical Efficiency Test (PET) and Physical Standard Test (PST) are qualifying in nature only. The final merit list is prepared entirely on the basis of written examination marks.' },
    { q: 'What is the salary of a UP Police Constable?', a: 'The basic pay scale is Rs.21,700 to Rs.69,100 per month under Level 3 of the 7th Pay Commission. Including allowances such as DA, HRA, and TA, the gross monthly salary typically ranges from Rs.30,000 to Rs.40,000.' },
    { q: 'What is OTR (One-Time Registration) and is it mandatory?', a: 'UPPRPB introduced mandatory One-Time Registration (OTR) from July 2025. Candidates must create an OTR account at uppbpb.gov.in once, entering their personal details. This avoids re-entering the same information for future recruitments.' },
  ];

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
            <span className="text-white">UP Police Constable 2026</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full">🚔 State Police</span>
            <span className="bg-emerald-500/20 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">Uttar Pradesh</span>
            <span className="bg-orange-400/20 text-orange-200 text-xs font-semibold px-3 py-1 rounded-full">📝 Exam: 8–10 June 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-3 leading-tight">
            UP Police Constable 2026 –<br className="hidden sm:block" /> Complete Preparation Guide
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl leading-relaxed mb-6">
            UPPRPB has announced 32,679 constable vacancies. Written exam scheduled 8–10 June 2026. Minimum qualification: 12th Pass. 150 questions, 300 marks, 2 hours.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Total Vacancies', value: '32,679' },
              { label: 'Written Exam', value: '8–10 June 2026' },
              { label: 'Min. Qualification', value: '12th Pass' },
              { label: 'Salary (Basic)', value: '₹21,700/month' },
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
        {/* Mobile TOC */}
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
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">What is UP Police Constable Recruitment?</h2>
              <div className="card p-6 mb-5">
                <p className="text-surface-600 leading-relaxed mb-4">
                  The <strong>UP Police Constable Recruitment</strong> is conducted by the <strong>Uttar Pradesh Police Recruitment and Promotion Board (UPPRPB)</strong> to fill vacancies in the state police force. It is one of the largest state-level police recruitments in India — the current 2025–26 cycle has announced <strong>32,679 posts</strong>.
                </p>
                <p className="text-surface-600 leading-relaxed mb-4">
                  The recruitment covers multiple posts including Civil Police, PAC (Provincial Armed Constabulary), Special Security Force, Jail Warder, and Mounted Police. The selection process follows the stages: <strong>Written Exam → Document Verification → Physical Standard Test (PST) → Physical Efficiency Test (PET) → Medical Examination</strong>. The final merit list is based solely on written exam scores.
                </p>
                <p className="text-surface-600 leading-relaxed">
                  The written exam is scheduled for <strong>8, 9, and 10 June 2026</strong> in offline OMR-based mode. This is a great opportunity for 12th pass candidates across Uttar Pradesh who want a stable government job with good salary and career growth.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Conducting Body', value: 'UPPRPB' },
                  { label: 'Post Type', value: 'State Govt, Group C' },
                  { label: 'Pay Scale', value: '₹21,700 – ₹69,100' },
                  { label: 'Qualification', value: '12th Pass (Intermediate)' },
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
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">📅 Important Dates – UP Police Constable 2026</h2>
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
              <p className="text-xs text-surface-400 mt-2">* Source: UPPRPB official notification (31 Dec 2025). TBN = To Be Notified. Always verify at uppbpb.gov.in before taking action.</p>
            </section>

            {/* ELIGIBILITY */}
            <section id="eligibility" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">Eligibility Criteria</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                {[
                  { label: 'Nationality', value: 'Indian citizen. Tibetan refugees who arrived in India before 1 January 1962 are also eligible under specified conditions.' },
                  { label: 'Educational Qualification', value: 'Class 12 (Intermediate) pass or equivalent from a recognised board. Must be completed on or before the last date of application.' },
                  { label: 'Application Fee', value: 'General / OBC / EWS: ₹400 | SC / ST / Female: ₹400. Payment via Debit Card, Credit Card, or Net Banking.' },
                  { label: 'Age Reference Date', value: 'Age calculated as on 1 July 2025. The UP Government granted a one-time 3-year relaxation in the upper age limit for all categories.' },
                ].map((item) => (
                  <div key={item.label} className="bg-surface-50 rounded-xl p-4 border border-surface-200">
                    <div className="text-xs text-surface-400 uppercase tracking-wide mb-1">{item.label}</div>
                    <div className="font-medium text-sm text-surface-800">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="card p-5 mb-5">
                <h3 className="font-heading font-semibold text-surface-800 mb-3">Age Limit – 2025–26 Recruitment Cycle</h3>
                <div className="overflow-x-auto rounded-lg border border-surface-100">
                  <table className="w-full text-sm">
                    <thead className="bg-surface-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-surface-700">Category</th>
                        <th className="text-left p-3 font-semibold text-surface-700">Minimum Age</th>
                        <th className="text-left p-3 font-semibold text-surface-700">Maximum Age*</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ageLimit.map((r, i) => (
                        <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                          <td className="p-3 font-medium text-surface-800">{r.category}</td>
                          <td className="p-3 text-surface-600">{r.min}</td>
                          <td className="p-3 text-surface-600">{r.max}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-surface-400 mt-2">* The UP Government approved a one-time 3-year relaxation in the upper age limit for all categories under this recruitment cycle (Official Notice: 5 Jan 2026).</p>
              </div>
            </section>

            {/* VACANCIES */}
            <section id="vacancies" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">Vacancies – 32,679 Posts (2025–26 Cycle)</h2>
              <div className="overflow-x-auto rounded-xl border border-surface-200 mb-4">
                <table className="w-full text-sm">
                  <thead className="bg-surface-900 text-white">
                    <tr>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Post Name</th>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Male</th>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Female</th>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vacancyData.map((row, i) => (
                      <tr key={i} className={`border-t border-surface-100 ${i === vacancyData.length - 1 ? 'bg-blue-50 font-bold' : i % 2 === 1 ? 'bg-surface-50' : 'bg-white'}`}>
                        <td className="p-3 font-medium text-surface-800">{row.post}</td>
                        <td className="p-3 text-surface-600">{row.male}</td>
                        <td className="p-3 text-surface-600">{row.female}</td>
                        <td className="p-3 text-surface-700 font-semibold">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-sm text-amber-800"><strong>📌 Note:</strong> Category-wise breakdown (UR / OBC / SC / ST / EWS) is available in the official UPPRPB notification PDF at uppbpb.gov.in. Vacancy figures may be subject to minor revision via official corrigendum.</p>
              </div>
            </section>

            {/* EXAM PATTERN */}
            <section id="exam-pattern" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">Exam Pattern – Written Test 2026</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                {[
                  { label: 'Mode', value: 'Offline (OMR-based)' },
                  { label: 'Total Questions', value: '150 MCQs' },
                  { label: 'Total Marks', value: '300 marks' },
                  { label: 'Duration', value: '2 hours (120 min)' },
                ].map((item) => (
                  <div key={item.label} className="bg-primary-50 rounded-xl p-4 border border-primary-100 text-center">
                    <div className="text-xs text-primary-400 uppercase tracking-wide mb-1">{item.label}</div>
                    <div className="font-heading font-bold text-primary-700">{item.value}</div>
                  </div>
                ))}
              </div>
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
                    {examPattern.map((row, i) => (
                      <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : 'bg-white'}`}>
                        <td className="p-3 font-medium text-surface-800">{row.subject}</td>
                        <td className="p-3 text-center text-surface-700 font-semibold">{row.questions}</td>
                        <td className="p-3 text-center text-surface-700 font-semibold">{row.marks}</td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-surface-300 bg-blue-50 font-bold">
                      <td className="p-3 text-surface-900">TOTAL</td>
                      <td className="p-3 text-center text-surface-900">150</td>
                      <td className="p-3 text-center text-surface-900">300</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card p-5">
                <h3 className="font-heading font-semibold text-surface-800 mb-3 text-sm">📌 Key Exam Rules</h3>
                <ul className="space-y-2 text-sm text-surface-600">
                  <li className="flex gap-2"><span className="text-emerald-500 font-bold">✓</span> Each correct answer: <strong>+2 marks</strong></li>
                  <li className="flex gap-2"><span className="text-red-400 font-bold">✗</span> Negative marking: <strong>0.5 marks deducted per wrong answer</strong> — verify the exact rule from the official notification at uppbpb.gov.in</li>
                  <li className="flex gap-2"><span className="text-blue-500">ℹ</span> Language: <strong>Bilingual</strong> (Hindi and English)</li>
                  <li className="flex gap-2"><span className="text-blue-500">ℹ</span> Final merit is based <strong>only on written exam marks</strong>. Physical tests are qualifying only and do not add to the score.</li>
                  <li className="flex gap-2"><span className="text-blue-500">ℹ</span> Exam conducted in <strong>multiple shifts</strong> across 3 days — scores may be normalised across shifts.</li>
                </ul>
              </div>
            </section>

            {/* PHYSICAL TEST */}
            <section id="physical" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">Physical Test – PST &amp; PET 2026</h2>
              <p className="text-surface-600 mb-5 text-sm leading-relaxed">
                Candidates who qualify the written exam are called for the Physical Standard Test (PST) and Physical Efficiency Test (PET). Both stages are <strong>qualifying in nature only</strong> — they do not contribute marks to the final merit list.
              </p>

              <h3 className="font-heading font-semibold text-surface-800 mb-3 text-base">Physical Standard Test (PST) – Measurements</h3>
              <div className="overflow-x-auto rounded-xl border border-surface-200 mb-6">
                <table className="w-full text-sm">
                  <thead className="bg-surface-900 text-white">
                    <tr>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Category</th>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Height</th>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Chest (Male only)</th>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    {physicalPst.map((row, i) => (
                      <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : 'bg-white'}`}>
                        <td className="p-3 font-medium text-surface-800">{row.category}</td>
                        <td className="p-3 text-surface-600">{row.height}</td>
                        <td className="p-3 text-surface-600">{row.chest}</td>
                        <td className="p-3 text-surface-600">{row.weight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="font-heading font-semibold text-surface-800 mb-3 text-base">Physical Efficiency Test (PET) – Running Race</h3>
              <div className="overflow-x-auto rounded-xl border border-surface-200 mb-4">
                <table className="w-full text-sm">
                  <thead className="bg-surface-900 text-white">
                    <tr>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Category</th>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Distance</th>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Time Limit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {physicalPet.map((row, i) => (
                      <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : 'bg-white'}`}>
                        <td className="p-3 font-medium text-surface-800">{row.category}</td>
                        <td className="p-3 text-surface-600 font-semibold">{row.distance}</td>
                        <td className="p-3 text-surface-600 font-semibold">{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-sm text-blue-800"><strong>💡 Tip:</strong> Start your running practice well before the exam. Male candidates need to cover 4.8 km in just 25 minutes — that requires consistent training over at least 2–3 months. Begin with shorter distances and build up gradually.</p>
              </div>
            </section>

            {/* SYLLABUS */}
            <section id="syllabus" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">Detailed Syllabus – UP Police Constable 2026</h2>
              <div className="space-y-4">
                {syllabus.map((sec, i) => (
                  <div key={i} className="card p-5">
                    <h3 className="font-heading font-semibold text-surface-800 mb-3">{sec.subject}</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                      {sec.topics.map((t, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-surface-600">
                          <span className="text-primary-400 mt-0.5">•</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
                <p className="text-sm text-amber-800"><strong>🎯 Focus Areas:</strong> Uttar Pradesh-specific General Knowledge (administration, geography, culture) carries significant weight and is often overlooked. Hindi grammar and idioms are high-scoring repeat topics. Make sure to cover all four subjects equally — the paper is well balanced.</p>
              </div>
            </section>

            {/* SALARY */}
            <section id="salary" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">Salary &amp; Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                {[
                  { label: 'Basic Pay (Pay Scale)', value: '₹21,700 – ₹69,100/month', sub: 'Level 3 – 7th Pay Commission' },
                  { label: 'Grade Pay', value: '₹2,000', sub: 'Fixed as per government norms' },
                  { label: 'Gross Salary (with allowances)', value: '₹30,000 – ₹40,000/month', sub: 'Approx. including DA, HRA, TA' },
                ].map((item) => (
                  <div key={item.label} className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-5 border border-primary-100">
                    <div className="text-xs text-primary-400 uppercase tracking-wide mb-1">{item.label}</div>
                    <div className="font-heading font-bold text-primary-700 text-lg">{item.value}</div>
                    <div className="text-xs text-surface-500 mt-0.5">{item.sub}</div>
                  </div>
                ))}
              </div>
              <div className="card p-5">
                <h3 className="font-heading font-semibold text-surface-800 mb-3 text-sm">Additional Perks &amp; Benefits</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-surface-600">
                  {[
                    'Dearness Allowance (DA) – revised bi-annually',
                    'House Rent Allowance (HRA) – based on city',
                    'Travel Allowance (TA)',
                    'Medical allowance and family health benefits',
                    'Uniform and gear allowance',
                    'Leave Travel Concession (LTC)',
                    'Pension benefits under NPS',
                    'Annual increment as per 7th Pay Commission',
                    'City Compensatory Allowance',
                    'Job security and promotion opportunities',
                  ].map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold mt-0.5">✓</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* HOW TO APPLY */}
            <section id="how-to-apply" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">How to Apply</h2>
              <div className="card p-5 mb-4">
                <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                  ⚠️ The application window for the current cycle closed on <strong>30 January 2026</strong>. The steps below are for reference when the next cycle opens.
                </p>
                <ol className="space-y-3">
                  {[
                    { title: 'Complete OTR Registration (Mandatory)', desc: 'Visit uppbpb.gov.in and create a One-Time Registration (OTR) account. Enter your mobile number, email address, and basic personal details.' },
                    { title: 'Log in and Fill the Application Form', desc: 'Use your OTR credentials to log in. Fill in personal details, educational qualifications, and other required information carefully.' },
                    { title: 'Upload Documents', desc: 'Upload a clear passport-size photograph, signature, 10th/12th certificates, and category certificate (if applicable) in the prescribed format and file size.' },
                    { title: 'Pay the Application Fee', desc: 'All categories (General / OBC / EWS / SC / ST / Female): Rs.400. Payment accepted via Debit Card, Credit Card, or Net Banking.' },
                    { title: 'Submit and Save Confirmation', desc: 'Review all details before submitting. Download and print the submitted application form for future reference.' },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs font-bold">{i + 1}</div>
                      <div>
                        <div className="font-semibold text-sm text-surface-800">{item.title}</div>
                        <div className="text-sm text-surface-600 mt-0.5">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* STUDY PLAN */}
            <section id="study-plan" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">3-Month Study Plan</h2>
              <div className="space-y-4">
                {[
                  {
                    month: 'Month 1 – Build the Foundation',
                    color: 'blue',
                    tasks: [
                      'UP-specific GK: cover history, geography, polity, and administration thoroughly',
                      'Hindi grammar basics: focus on word formation, antonyms, synonyms',
                      'Maths: percentage, profit & loss, SI/CI, time-work, speed-distance',
                      'Reasoning: series, direction sense, blood relations — 30 questions daily',
                    ],
                  },
                  {
                    month: 'Month 2 – Deep Preparation',
                    color: 'orange',
                    tasks: [
                      'Current affairs: read newspaper daily and revise a monthly magazine',
                      'Hindi: comprehension passages, idioms, and proverbs practice',
                      'Maths: mensuration, average, ratio — target 50 questions per day',
                      'Weekly mock tests: attempt full 150-question paper within 2 hours',
                    ],
                  },
                  {
                    month: 'Month 3 – Revision + Physical Fitness',
                    color: 'emerald',
                    tasks: [
                      'Full syllabus revision with extra focus on weak areas',
                      'Solve previous year UP Police Constable papers (2018, 2019)',
                      'Physical training: build up running from 2 km to 4.8 km daily',
                      'Speed drills: aim to attempt 150 questions within 1 hour 45 minutes',
                    ],
                  },
                ].map((m, i) => (
                  <div key={i} className={`card p-5 border-l-4 ${m.color === 'blue' ? 'border-blue-400' : m.color === 'orange' ? 'border-orange-400' : 'border-emerald-400'}`}>
                    <h3 className="font-heading font-semibold text-surface-800 mb-3">{m.month}</h3>
                    <ul className="space-y-1.5">
                      {m.tasks.map((t, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-surface-600">
                          <span className={`mt-0.5 font-bold ${m.color === 'blue' ? 'text-blue-500' : m.color === 'orange' ? 'text-orange-500' : 'text-emerald-500'}`}>→</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* BEST BOOKS */}
            <section id="books" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">Best Books for Preparation</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { subject: 'General Knowledge + UP GK', book: "Lucent's General Knowledge", author: 'Lucent Publications' },
                  { subject: 'General Hindi', book: 'Samanya Hindi', author: 'Dr. Hardev Bahri / Arihant' },
                  { subject: 'Numerical Ability', book: 'Quantitative Aptitude', author: 'R.S. Aggarwal' },
                  { subject: 'Reasoning & Intelligence', book: 'A Modern Approach to Verbal & Non-Verbal Reasoning', author: 'R.S. Aggarwal' },
                  { subject: 'UP Police Previous Year Papers', book: 'UP Police Constable Solved Papers', author: 'Arihant / Kiran Publications' },
                  { subject: 'Complete Guide', book: 'UP Police Constable Bharti Pariksha', author: 'Upkar / Arihant' },
                ].map((item, i) => (
                  <div key={i} className="bg-surface-50 rounded-xl p-4 border border-surface-200 flex gap-3">
                    <div className="text-2xl">📗</div>
                    <div>
                      <div className="font-semibold text-sm text-surface-800">{item.book}</div>
                      <div className="text-xs text-surface-500">{item.author}</div>
                      <div className="text-xs text-primary-500 mt-0.5">{item.subject}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* EXPERT TIPS */}
            <section id="tips" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">Expert Tips – Preparation Strategy</h2>
              <div className="space-y-3">
                {[
                  { icon: '🎯', tip: 'Prioritise UP-specific General Knowledge', desc: 'Questions on Uttar Pradesh administration, geography, culture, and historic sites carry significant weight. Candidates who focus only on national GK books often miss these easy marks.' },
                  { icon: '📝', tip: 'Practice Hindi grammar every day', desc: 'Idioms, proverbs, and one-word substitutions are repeat topics across UP Police papers and are high-scoring. Dedicate at least 20 minutes daily to Hindi grammar drills.' },
                  { icon: '⏱️', tip: 'Time management is critical', desc: '150 questions in 120 minutes means roughly 48 seconds per question. Without timed practice, you will struggle on exam day. Attempt at least one full mock test per week.' },
                  { icon: '🏃', tip: 'Begin physical training now', desc: 'Start running well before the written exam date. Male candidates need to cover 4.8 km in 25 minutes — this level of fitness requires consistent training over 2–3 months minimum.' },
                  { icon: '📊', tip: 'Solve previous year papers', desc: 'Past UP Police Constable papers (2018, 2019 cycles) will show you the actual difficulty level, question distribution, and which topics repeat most often.' },
                  { icon: '✅', tip: 'Verify negative marking rules before exam day', desc: 'There is conflicting information on whether negative marking applies in 2026. Always check the official UPPRPB notification at uppbpb.gov.in before finalising your exam strategy.' },
                ].map((item, i) => (
                  <div key={i} className="card p-4 flex gap-4">
                    <div className="text-2xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-sm text-surface-800 mb-0.5">{item.tip}</div>
                      <div className="text-sm text-surface-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">Frequently Asked Questions (FAQs)</h2>
              <div className="space-y-3">
                {faqs.map((item, i) => (
                  <div key={i} className="card p-5">
                    <h3 className="font-semibold text-surface-800 mb-2 text-sm">Q{i + 1}: {item.q}</h3>
                    <p className="text-sm text-surface-600 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* SIDEBAR */}
          <aside className="hidden lg:block space-y-6">
            <div className="card p-5 sticky top-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">📖 On This Page</div>
              <ol className="space-y-1.5 list-decimal list-inside">
                {toc.map((s) => (
                  <li key={s.id}><a href={`#${s.id}`} className="text-sm text-primary-500 hover:underline hover:text-primary-700">{s.label}</a></li>
                ))}
              </ol>
            </div>

            <div className="card p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">⚡ Quick Facts</div>
              <dl className="space-y-3 text-sm">
                {[
                  { label: 'Conducting Body', value: 'UPPRPB' },
                  { label: 'Vacancies', value: '32,679' },
                  { label: 'Written Exam', value: '8–10 June 2026' },
                  { label: 'Qualification', value: '12th Pass' },
                  { label: 'Age (Gen Male)', value: '18–25 years' },
                  { label: 'Age (Gen Female)', value: '18–28 years' },
                  { label: 'Total Questions', value: '150 MCQs' },
                  { label: 'Total Marks', value: '300 marks' },
                  { label: 'Exam Duration', value: '2 hours' },
                  { label: 'Basic Pay', value: '₹21,700/month' },
                  { label: 'Official Website', value: 'uppbpb.gov.in' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between border-b border-surface-100 pb-2">
                    <dt className="text-surface-500">{item.label}</dt>
                    <dd className="font-semibold text-surface-800 text-right max-w-[120px]">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="card p-5 bg-gradient-to-br from-primary-50 to-blue-50 border-primary-100">
              <div className="text-xs font-semibold uppercase tracking-wide text-primary-400 mb-3">🔗 Official Links</div>
              <div className="space-y-2">
                <a href="https://uppbpb.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 font-medium">
                  <span>🌐</span> uppbpb.gov.in (Official)
                </a>
                <a href="https://uppbpb.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800">
                  <span>📄</span> Download Notification PDF
                </a>
                <a href="https://uppbpb.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800">
                  <span>📝</span> Apply Online / OTR
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
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

// ─── CTET RICH PAGE ──────────────────────────────────────────────────────────
function CtetPage({ exam }: { exam: any }) {
  const toc = [
    { id: 'overview', label: 'Overview' },
    { id: 'important-dates', label: 'Important Dates' },
    { id: 'eligibility', label: 'Eligibility Criteria' },
    { id: 'exam-pattern', label: 'Exam Pattern' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'qualifying-marks', label: 'Qualifying Marks' },
    { id: 'how-to-apply', label: 'How to Apply' },
    { id: 'after-ctet', label: 'After Clearing CTET' },
    { id: 'study-plan', label: 'Study Plan' },
    { id: 'books', label: 'Best Books' },
    { id: 'tips', label: 'Expert Tips' },
    { id: 'faq', label: 'FAQs' },
  ];

  // July 2026 cycle (most current) + Feb 2026 cycle reference
  const importantDates = [
    { event: 'CTET Feb 2026 – Notification Released', date: '27 November 2025', status: 'released' },
    { event: 'CTET Feb 2026 – Application Window', date: '27 Nov – 18 Dec 2025', status: 'released' },
    { event: 'CTET Feb 2026 – Exam Date', date: '7 & 8 February 2026', status: 'released' },
    { event: 'CTET Feb 2026 – Result Declared', date: 'March 2026', status: 'released' },
    { event: 'CTET July 2026 – Notification Released', date: '5 March 2026', status: 'released' },
    { event: 'CTET July 2026 – Application Opens', date: '5 March 2026', status: 'released' },
    { event: 'CTET July 2026 – Last Date to Apply', date: '2 April 2026', status: 'released' },
    { event: 'CTET July 2026 – Admit Card', date: 'Mid-June 2026 (Expected)', status: 'upcoming' },
    { event: 'CTET July 2026 – Exam Date', date: '5 July 2026 (Sunday)', status: 'upcoming' },
    { event: 'CTET July 2026 – Answer Key', date: 'Within 2–3 weeks of exam (TBN)', status: 'tbn' },
    { event: 'CTET July 2026 – Result', date: 'To be notified (TBN)', status: 'tbn' },
    { event: 'CTET Dec 2026 – Notification', date: 'Oct–Nov 2026 (Expected)', status: 'tbn' },
  ];

  const paper1Pattern = [
    { section: 'Child Development & Pedagogy', questions: 30, marks: 30, notes: 'Compulsory' },
    { section: 'Language I (Medium of Instruction)', questions: 30, marks: 30, notes: 'Compulsory' },
    { section: 'Language II (Other Language)', questions: 30, marks: 30, notes: 'Compulsory' },
    { section: 'Mathematics', questions: 30, marks: 30, notes: 'Compulsory' },
    { section: 'Environmental Studies (EVS)', questions: 30, marks: 30, notes: 'Compulsory' },
  ];

  const paper2Pattern = [
    { section: 'Child Development & Pedagogy', questions: 30, marks: 30, notes: 'Compulsory' },
    { section: 'Language I (Medium of Instruction)', questions: 30, marks: 30, notes: 'Compulsory' },
    { section: 'Language II (Other Language)', questions: 30, marks: 30, notes: 'Compulsory' },
    { section: 'Mathematics & Science (or) Social Studies', questions: 60, marks: 60, notes: 'Choose 1 specialisation' },
  ];

  const qualifyingMarks = [
    { category: 'General / EWS', minMarks: '90 out of 150', percentage: '60%' },
    { category: 'OBC (Non-Creamy Layer)', minMarks: '82 out of 150', percentage: '55%' },
    { category: 'SC / ST', minMarks: '82 out of 150', percentage: '55%' },
    { category: 'PwD (Persons with Disabilities)', minMarks: '82 out of 150', percentage: '55%' },
  ];

  const eligibilityPaper1 = [
    { qualification: 'Senior Secondary (Class 12)', requirement: 'Minimum 50% marks + passed/appearing in 2-year D.El.Ed' },
    { qualification: 'Senior Secondary (Class 12)', requirement: 'Minimum 45% marks + passed/appearing in 2-year D.El.Ed (under NCTE norms 2002)' },
    { qualification: 'Senior Secondary (Class 12)', requirement: 'Minimum 50% marks + 4-year B.El.Ed (Integrated)' },
    { qualification: 'Senior Secondary (Class 12)', requirement: 'Minimum 50% marks + 2-year Diploma in Education (Special Education)' },
    { qualification: 'Graduation', requirement: 'Any degree + 2-year D.El.Ed' },
  ];

  const eligibilityPaper2 = [
    { qualification: 'Graduation', requirement: 'Minimum 50% marks + passed/appearing in 1-year B.Ed' },
    { qualification: 'Graduation', requirement: 'Minimum 45% marks + 1-year B.Ed (under NCTE norms)' },
    { qualification: 'Senior Secondary (Class 12)', requirement: 'Minimum 50% marks + 4-year B.A.B.Ed / B.Sc.B.Ed (Integrated)' },
    { qualification: 'Graduation', requirement: 'Minimum 50% marks + 1-year B.Ed (Special Education)' },
    { qualification: 'Senior Secondary (Class 12)', requirement: 'Minimum 50% marks + 4-year B.El.Ed (Integrated)' },
  ];

  const paper1Syllabus = [
    {
      subject: '🧒 Child Development & Pedagogy (30 Qs)',
      topics: [
        'Development of child (age 6–11): Piaget, Vygotsky, Kohlberg theories',
        'Concept of inclusive education – children with special needs',
        'Learning and pedagogy: how children learn and think',
        'Individual differences: language, caste, gender, community, religion',
        'Continuous Comprehensive Evaluation (CCE) and assessment',
        'Intelligence: theories of multiple intelligences (Gardner)',
        'Motivation, emotion and behavioural challenges',
        'Socio-cultural context of learning (Bronfenbrenner)',
      ],
    },
    {
      subject: '📐 Mathematics (30 Qs)',
      topics: [
        'Numbers: whole numbers, LCM, HCF, fractions, decimals',
        'Geometry: shapes, space, angles, symmetry',
        'Measurement: length, weight, volume, time, money',
        'Data handling: tables, graphs, bar charts',
        'Patterns, algebra (basic), division, multiplication',
        'Pedagogical issues: nature of maths, teaching methods, problem-solving',
      ],
    },
    {
      subject: '🌿 Environmental Studies – EVS (30 Qs)',
      topics: [
        'Family & friends, food, shelter, water, travel',
        'Things we make and do (work, industry)',
        'Animals, plants and natural resources',
        'Environmental concerns, conservation, biodiversity',
        'EVS pedagogy: objectives, integration with science & social studies',
        'Activities, experiments and hands-on learning',
      ],
    },
    {
      subject: '🔤 Language I & Language II (30 + 30 Qs)',
      topics: [
        'Reading comprehension: two unseen passages (prose + poem)',
        'Grammar: tenses, active/passive voice, reported speech',
        'Language pedagogy: language acquisition and development',
        'Challenges in diverse classrooms, language errors, disorders',
        'Remedial teaching and language enrichment techniques',
      ],
    },
  ];

  const paper2Syllabus = [
    {
      subject: '🧠 Child Development & Pedagogy (30 Qs)',
      topics: [
        'Development of children aged 11–14 years',
        'Adolescence: characteristics, challenges, peer influence',
        'Theories: Piaget (formal operational stage), Vygotsky, Kohlberg',
        'Concepts of assessment and evaluation at upper primary stage',
        'Inclusive education and children with special needs (11–14 yrs)',
        'Learning disabilities: dyslexia, ADHD, autism – classroom strategies',
        'Classroom management and creating inclusive environments',
      ],
    },
    {
      subject: '🔢 Mathematics & Science – Paper II (60 Qs)',
      topics: [
        'Mathematics: Number system, algebra, geometry, mensuration, statistics',
        'Mathematics pedagogy: nature of math, place of math in curriculum',
        'Science: Food, materials, the world of the living, moving things',
        'Science: How things work, natural phenomena, natural resources',
        'Science pedagogy: scientific method, innovation, observation',
        'Problems in teaching science; activities and experiments',
      ],
    },
    {
      subject: '🌏 Social Studies / Social Sciences – Paper II (60 Qs)',
      topics: [
        'History: when, where, how; earliest cities; early states; new ideas',
        'History: first empire, trade contacts, culture, political developments',
        'Geography: our environment, inside our earth, natural vegetation',
        'Geography: human environment, life in tropical/desert regions',
        'Political Science: democracy, state government, women and gender',
        'Economics: poverty, food security, markets, understanding media',
        'Pedagogical issues: developing critical thinking and problem-solving',
      ],
    },
  ];

  const applySteps = [
    'Visit the official CTET website at ctet.nic.in',
    'Click "Apply Online" → complete new registration with name, email, and mobile number',
    'Fill the application form carefully – choose Paper I, Paper II or Both',
    'Choose your preferred language(s) for Language I and Language II',
    'Upload a recent passport-size photograph and signature (as per size/format specs)',
    'Pay the examination fee online (Debit/Credit card or Net Banking)',
    'Submit the form and save/print the Confirmation Page with Application Number',
    'Download Admit Card from ctet.nic.in approximately 2–3 weeks before the exam',
  ];

  const afterCtetOpportunities = [
    { org: 'Kendriya Vidyalaya Sangathan (KVS)', role: 'PRT / TGT', requirement: 'CTET Paper I / II mandatory', salary: '₹35,400 – ₹1,12,400/month' },
    { org: 'Navodaya Vidyalaya Samiti (NVS)', role: 'TGT / Misc Teaching', requirement: 'CTET Paper II mandatory', salary: '₹44,900 – ₹1,42,400/month' },
    { org: 'Army Public Schools (AWES)', role: 'PRT / TGT / PGT', requirement: 'CTET required for lower classes', salary: '₹35,400 – ₹1,12,400/month' },
    { org: 'Central Tibetan Schools (CTS)', role: 'PRT / TGT', requirement: 'CTET mandatory', salary: 'As per 7th Pay Commission' },
    { org: 'CBSE-affiliated Private Schools', role: 'PRT / TGT', requirement: 'CTET preferred / mandatory', salary: 'Varies (₹25,000 – ₹60,000)' },
    { org: 'State School Service Commissions', role: 'Teacher posts', requirement: 'State TET or CTET accepted', salary: 'As per state pay scales' },
  ];

  const books = [
    { title: 'Child Development & Pedagogy', author: 'Disha Experts', subject: 'CDP' },
    { title: 'CTET Paper 1 – 10 Practice Sets', author: 'Arihant Publications', subject: 'Paper I' },
    { title: 'CTET Paper 2 – 10 Practice Sets', author: 'Arihant Publications', subject: 'Paper II' },
    { title: 'Mathematics & Pedagogy for CTET Paper 1', author: 'RS Aggarwal / Pearson', subject: 'Maths' },
    { title: 'Environmental Studies for CTET Paper 1', author: 'Arihant Experts', subject: 'EVS' },
    { title: 'CTET Social Studies Paper 2 Guide', author: 'Disha Publications', subject: 'Social Studies' },
    { title: 'CTET & TET English Language & Pedagogy', author: 'Pearson / Arihant', subject: 'Language' },
    { title: 'NCERT Books Class 1–8 (All Subjects)', author: 'NCERT', subject: 'Core Study Material' },
  ];

  const studyPlan = [
    { week: 'Week 1–2', focus: 'Child Development & Pedagogy (CDP)', tasks: 'Master all major theorists (Piaget, Vygotsky, Kohlberg, Gardner). Solve 200+ MCQs on CDP. This section is common to both papers — highest ROI.' },
    { week: 'Week 3–4', focus: 'Language I & Language II', tasks: 'Practice comprehension passages daily. Revise grammar rules and language pedagogy concepts. Aim for 80%+ accuracy here.' },
    { week: 'Week 5–6', focus: 'Mathematics / EVS (Paper I) or Subject Specialisation (Paper II)', tasks: 'Cover NCERT textbooks Class 1–8 thoroughly. For Paper II, deep-dive into your chosen specialisation (Maths & Science OR Social Studies).' },
    { week: 'Week 7–8', focus: 'Full Mock Tests + Weak Area Revision', tasks: 'Attempt 2 full-length mock tests per week. Analyse mistakes. Revise weak chapters. Target 120+ marks out of 150 to ensure a safe qualifying margin.' },
  ];

  const tips = [
    'CTET has NO negative marking — attempt every single question. Never leave any blank.',
    'CDP (Child Development & Pedagogy) is common to both papers and contributes 30 marks — prioritise it above all else.',
    'NCERT textbooks (Class 1–8) are the single most important study source. Questions are directly concept-based, not fact-recall.',
    'The CTET certificate is now valid for a lifetime (since 2021 amendment) — qualifying once is sufficient, no need to re-appear.',
    'Solve at least 5 previous year question papers in exam conditions. Time management is key within the 2.5 hour window.',
    'For Language I & II, pick languages you are genuinely strong in — the pedagogy section is scorable with the right conceptual approach.',
    'For Paper II aspirants: Maths & Science is generally higher scoring for science graduates; Social Studies suits arts graduates. Choose wisely.',
    'Aim for 120–130/150 to have a strong score that satisfies both General (90) and reserved category (82) thresholds comfortably.',
  ];

  const faqs = [
    { q: 'What is CTET and who conducts it?', a: 'CTET (Central Teacher Eligibility Test) is a national-level eligibility exam conducted by CBSE (Central Board of Secondary Education). It is a mandatory qualification for anyone seeking teaching posts in central government schools like KVS, NVS, and Army Public Schools for Classes I to VIII.' },
    { q: 'When is the CTET July 2026 exam date?', a: 'CTET July 2026 is confirmed and scheduled for 5 July 2026 (Sunday). The notification was officially released on 5 March 2026. Paper II (Classes 6–8) will be held from 9:30 AM to 12:00 Noon, and Paper I (Classes 1–5) from 2:00 PM to 4:30 PM.' },
    { q: 'Can I apply for CTET July 2026 now?', a: 'No. The CTET July 2026 application window was open from 5 March to 2 April 2026 and is now closed. Candidates who have successfully registered should focus on exam preparation. The next cycle (December 2026) is expected to open for applications around October–November 2026.' },
    { q: 'Is there negative marking in CTET?', a: 'No. CTET has no negative marking for wrong answers. Both Paper I and Paper II consist of 150 MCQs worth 150 marks, with no deductions for incorrect responses. You should attempt all questions.' },
    { q: 'What are the qualifying marks in CTET?', a: 'General / EWS candidates must score at least 60% (90 out of 150). OBC, SC, ST, and PwD candidates need at least 55% (82 out of 150). Candidates qualifying this threshold receive a CTET Eligibility Certificate.' },
    { q: 'Is the CTET certificate valid for life?', a: 'Yes. As per the CBSE amendment effective June 2021, the CTET qualification certificate is now valid for lifetime. Previously it was valid for only 7 years. A single qualifying score is sufficient for all future teaching job applications.' },
    { q: 'What is the age limit for CTET?', a: 'CTET has no upper age limit. The minimum age is 18 years. There is no age relaxation or category-based age distinction because it is an eligibility test, not a direct recruitment exam.' },
    { q: 'How many times is CTET conducted in a year?', a: 'CBSE conducts CTET twice a year — typically a February/July session and a December/January session. Both cycles follow a similar pattern of notification, application, exam, and result declaration.' },
    { q: 'Does clearing CTET guarantee a teaching job?', a: 'No. Clearing CTET makes you eligible to apply for teaching posts but does not guarantee a job. You still need to apply and clear the recruitment process (written test, interview, demo class) for specific organisations like KVS, NVS, DSSSB, or state boards that require CTET scores.' },
    { q: 'What is the application fee for CTET?', a: 'For one paper: General/OBC candidates pay ₹1,000 and SC/ST/PwD candidates pay ₹500. For both papers: General/OBC candidates pay ₹1,200 and SC/ST/PwD candidates pay ₹600. Fees may be subject to revision per official notification.' },
  ];

  const statusColor = (s: string) => {
    if (s === 'released') return 'bg-emerald-100 text-emerald-700';
    if (s === 'upcoming') return 'bg-blue-100 text-blue-700';
    return 'bg-surface-100 text-surface-500';
  };
  const statusLabel = (s: string) => {
    if (s === 'released') return '✓ Released';
    if (s === 'upcoming') return '🔔 Scheduled';
    return 'TBN';
  };

  return (
    <>
      {/* ── Hero Banner ── */}
      <div className="bg-gradient-to-br from-[#0a1e4f] via-[#1a3580] to-[#1a56db] text-white">
        <div className="container-main py-10 pb-8">
          <nav className="text-sm text-blue-200 mb-5 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-1 opacity-50">›</span>
            <Link href="/exams" className="hover:text-white">Exams</Link>
            <span className="mx-1 opacity-50">›</span>
            <span className="text-white">CTET 2026</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full">📚 Teaching</span>
            <span className="bg-emerald-500/20 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">CBSE / Central Govt</span>
            <span className="bg-orange-400/20 text-orange-200 text-xs font-semibold px-3 py-1 rounded-full">📝 Exam: 5 July 2026</span>
            <span className="bg-purple-400/20 text-purple-200 text-xs font-semibold px-3 py-1 rounded-full">🎓 Lifetime Validity</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-3 leading-tight">
            CTET 2026 – Complete<br className="hidden sm:block" /> Preparation Guide
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl leading-relaxed mb-6">
            CTET July 2026 exam confirmed for 5 July 2026. Mandatory eligibility test conducted by CBSE for teaching posts in KVS, NVS & Army schools. 150 MCQs, no negative marking, lifetime valid certificate.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Exam Date', value: '5 July 2026' },
              { label: 'Total Questions', value: '150 MCQs' },
              { label: 'Negative Marking', value: 'None' },
              { label: 'Certificate Validity', value: 'Lifetime' },
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
        {/* Mobile TOC */}
        <div className="card p-5 mb-8 border-l-4 border-primary-500 lg:hidden">
          <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">📖 Quick Navigation</div>
          <ol className="grid grid-cols-2 gap-x-4 gap-y-1.5 list-decimal list-inside">
            {toc.map((s) => (
              <li key={s.id}><a href={`#${s.id}`} className="text-sm text-primary-500 hover:underline">{s.label}</a></li>
            ))}
          </ol>
        </div>

        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          {/* Main content */}
          <div className="space-y-14">

            {/* 1. Overview */}
            <section id="overview">
              <SectionHeading num="1" title="CTET 2026 – What is it?" />
              <div className="card p-6 mb-6">
                <p className="text-surface-700 leading-relaxed mb-4">
                  The <strong>Central Teacher Eligibility Test (CTET)</strong> is a national-level eligibility examination conducted by the <strong>Central Board of Secondary Education (CBSE)</strong>, New Delhi. It is a mandatory qualification for candidates aspiring to teach in <strong>Classes I to VIII</strong> in central government schools — including Kendriya Vidyalayas (KVS), Navodaya Vidyalayas (NVS), Army Public Schools, and other centrally administered institutions.
                </p>
                <p className="text-surface-700 leading-relaxed mb-4">
                  CTET is held <strong>twice a year</strong> — typically in February/July and December. The exam has <strong>two papers</strong>: Paper I for those who wish to teach Classes 1–5, and Paper II for Classes 6–8. Candidates who want to be eligible for both levels must appear in both papers.
                </p>
                <p className="text-surface-700 leading-relaxed">
                  Since 2021, the CTET qualification certificate carries <strong>lifetime validity</strong> — once you clear it, you never need to re-appear. This makes CTET one of the most valuable certifications in India's government education sector.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { label: 'Conducting Body', value: 'CBSE' },
                  { label: 'Exam Level', value: 'National' },
                  { label: 'Frequency', value: 'Twice a year' },
                  { label: 'Mode', value: 'Offline (Pen & Paper)' },
                  { label: 'Total Marks', value: '150 per paper' },
                  { label: 'Duration', value: '2 hours 30 minutes' },
                  { label: 'No. of Papers', value: 'Paper I & Paper II' },
                  { label: 'Negative Marking', value: 'None' },
                  { label: 'Certificate Validity', value: 'Lifetime (since 2021)' },
                  { label: 'Official Website', value: 'ctet.nic.in' },
                  { label: 'Age Limit', value: 'Min 18 yrs, No upper limit' },
                  { label: 'Min. Qualification', value: 'D.El.Ed / B.Ed (Paper-wise)' },
                ].map((i) => <InfoCard key={i.label} label={i.label} value={i.value} />)}
              </div>
            </section>

            {/* 2. Important Dates */}
            <section id="important-dates">
              <SectionHeading num="2" title="CTET 2026 Important Dates" />
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 text-sm text-amber-800">
                ⚠️ <strong>Note:</strong> CTET July 2026 application window (5 Mar – 2 Apr 2026) is now <strong>closed</strong>. If you did not apply, the next opportunity is the <strong>December 2026 cycle</strong>, expected around October–November 2026. Focus on preparation now!
              </div>
              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface-50">
                        <th className="text-left p-4 font-semibold text-surface-700">Event</th>
                        <th className="text-left p-4 font-semibold text-surface-700">Date</th>
                        <th className="text-left p-4 font-semibold text-surface-700">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {importantDates.map((row, i) => (
                        <tr key={i} className="border-t border-surface-100">
                          <td className="p-4 font-medium text-surface-800">{row.event}</td>
                          <td className="p-4 text-surface-600">{row.date}</td>
                          <td className="p-4">
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColor(row.status)}`}>
                              {statusLabel(row.status)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 3. Eligibility */}
            <section id="eligibility">
              <SectionHeading num="3" title="CTET 2026 Eligibility Criteria" />

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-sm text-blue-800">
                📌 <strong>Key Points:</strong> There is <strong>NO upper age limit</strong> for CTET. Minimum age is 18 years. Nationality: Indian citizen (or specified categories of persons of Indian origin). Both passed and appearing candidates in teacher training courses are eligible.
              </div>

              <h3 className="text-lg font-heading font-semibold text-surface-800 mb-3 mt-6">Paper I – For Classes 1 to 5 (Primary Teachers)</h3>
              <div className="card overflow-hidden mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-primary-50">
                        <th className="text-left p-4 font-semibold text-primary-700">Qualification</th>
                        <th className="text-left p-4 font-semibold text-primary-700">Requirement</th>
                      </tr>
                    </thead>
                    <tbody>
                      {eligibilityPaper1.map((row, i) => (
                        <tr key={i} className="border-t border-surface-100">
                          <td className="p-4 font-medium text-surface-800 whitespace-nowrap">{row.qualification}</td>
                          <td className="p-4 text-surface-600">{row.requirement}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-lg font-heading font-semibold text-surface-800 mb-3">Paper II – For Classes 6 to 8 (Upper Primary Teachers)</h3>
              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-primary-50">
                        <th className="text-left p-4 font-semibold text-primary-700">Qualification</th>
                        <th className="text-left p-4 font-semibold text-primary-700">Requirement</th>
                      </tr>
                    </thead>
                    <tbody>
                      {eligibilityPaper2.map((row, i) => (
                        <tr key={i} className="border-t border-surface-100">
                          <td className="p-4 font-medium text-surface-800 whitespace-nowrap">{row.qualification}</td>
                          <td className="p-4 text-surface-600">{row.requirement}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 4. Exam Pattern */}
            <section id="exam-pattern">
              <SectionHeading num="4" title="CTET 2026 Exam Pattern" />

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { label: 'Exam Mode', value: 'Offline – Pen & Paper (OMR Sheet)' },
                  { label: 'Total Questions', value: '150 MCQs per paper' },
                  { label: 'Total Marks', value: '150 marks per paper' },
                  { label: 'Duration', value: '2 hours 30 minutes' },
                  { label: 'Negative Marking', value: 'None – attempt every question!' },
                  { label: 'Language of Paper', value: '20 languages available (including Hindi, English)' },
                ].map((i) => <InfoCard key={i.label} label={i.label} value={i.value} highlight={i.label === 'Negative Marking'} />)}
              </div>

              <h3 className="text-lg font-heading font-semibold text-surface-800 mb-3">Paper I – Classes 1–5 (Primary Level)</h3>
              <div className="card overflow-hidden mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface-50">
                        <th className="text-left p-4 font-semibold text-surface-700">Section</th>
                        <th className="text-center p-4 font-semibold text-surface-700">Questions</th>
                        <th className="text-center p-4 font-semibold text-surface-700">Marks</th>
                        <th className="text-left p-4 font-semibold text-surface-700">Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paper1Pattern.map((row, i) => (
                        <tr key={i} className="border-t border-surface-100">
                          <td className="p-4 font-medium text-surface-800">{row.section}</td>
                          <td className="p-4 text-center text-surface-600">{row.questions}</td>
                          <td className="p-4 text-center text-surface-600">{row.marks}</td>
                          <td className="p-4"><span className="badge badge-primary">{row.notes}</span></td>
                        </tr>
                      ))}
                      <tr className="border-t-2 border-primary-200 bg-primary-50">
                        <td className="p-4 font-bold text-primary-700">Total</td>
                        <td className="p-4 text-center font-bold text-primary-700">150</td>
                        <td className="p-4 text-center font-bold text-primary-700">150</td>
                        <td className="p-4 text-sm text-surface-500">2.5 hours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-lg font-heading font-semibold text-surface-800 mb-3">Paper II – Classes 6–8 (Upper Primary Level)</h3>
              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface-50">
                        <th className="text-left p-4 font-semibold text-surface-700">Section</th>
                        <th className="text-center p-4 font-semibold text-surface-700">Questions</th>
                        <th className="text-center p-4 font-semibold text-surface-700">Marks</th>
                        <th className="text-left p-4 font-semibold text-surface-700">Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paper2Pattern.map((row, i) => (
                        <tr key={i} className="border-t border-surface-100">
                          <td className="p-4 font-medium text-surface-800">{row.section}</td>
                          <td className="p-4 text-center text-surface-600">{row.questions}</td>
                          <td className="p-4 text-center text-surface-600">{row.marks}</td>
                          <td className="p-4"><span className="badge badge-primary">{row.notes}</span></td>
                        </tr>
                      ))}
                      <tr className="border-t-2 border-primary-200 bg-primary-50">
                        <td className="p-4 font-bold text-primary-700">Total</td>
                        <td className="p-4 text-center font-bold text-primary-700">150</td>
                        <td className="p-4 text-center font-bold text-primary-700">150</td>
                        <td className="p-4 text-sm text-surface-500">2.5 hours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-sm text-surface-500 mt-3">* Paper II candidates must choose <strong>one</strong> specialisation: either Mathematics & Science OR Social Studies / Social Sciences.</p>
            </section>

            {/* 5. Syllabus */}
            <section id="syllabus">
              <SectionHeading num="5" title="CTET 2026 Syllabus" />

              <h3 className="text-lg font-heading font-semibold text-surface-800 mb-4">Paper I Syllabus (Classes 1–5)</h3>
              <div className="space-y-4 mb-8">
                {paper1Syllabus.map((sec) => (
                  <div key={sec.subject} className="card p-5">
                    <h4 className="font-heading font-semibold text-surface-800 mb-3">{sec.subject}</h4>
                    <ul className="grid sm:grid-cols-2 gap-1.5">
                      {sec.topics.map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-surface-600">
                          <span className="text-primary-400 mt-0.5">•</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-heading font-semibold text-surface-800 mb-4">Paper II Syllabus (Classes 6–8)</h3>
              <div className="space-y-4">
                {paper2Syllabus.map((sec) => (
                  <div key={sec.subject} className="card p-5">
                    <h4 className="font-heading font-semibold text-surface-800 mb-3">{sec.subject}</h4>
                    <ul className="grid sm:grid-cols-2 gap-1.5">
                      {sec.topics.map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-surface-600">
                          <span className="text-primary-400 mt-0.5">•</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Qualifying Marks */}
            <section id="qualifying-marks">
              <SectionHeading num="6" title="CTET Qualifying Marks & Cutoff" />
              <div className="card overflow-hidden mb-5">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface-50">
                        <th className="text-left p-4 font-semibold text-surface-700">Category</th>
                        <th className="text-center p-4 font-semibold text-surface-700">Min. Marks (out of 150)</th>
                        <th className="text-center p-4 font-semibold text-surface-700">Min. Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {qualifyingMarks.map((row, i) => (
                        <tr key={i} className="border-t border-surface-100">
                          <td className="p-4 font-medium text-surface-800">{row.category}</td>
                          <td className="p-4 text-center font-semibold text-emerald-600">{row.minMarks}</td>
                          <td className="p-4 text-center text-surface-600">{row.percentage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-800">
                🏆 <strong>Pro Tip:</strong> While the minimum qualifying score is 90/150 for General category, most competitive KVS/NVS recruitment processes shortlist candidates scoring <strong>120+</strong>. Aim high!
              </div>
            </section>

            {/* 7. How to Apply */}
            <section id="how-to-apply">
              <SectionHeading num="7" title="How to Apply for CTET" />
              <div className="card p-6">
                <p className="text-sm text-surface-500 mb-4">The application process is fully online at <strong>ctet.nic.in</strong>. Here are the steps:</p>
                <ol className="space-y-3">
                  {applySteps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-surface-700">
                      <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
                <div className="mt-5 p-4 bg-surface-50 rounded-xl text-sm">
                  <p className="font-semibold text-surface-700 mb-2">📋 Application Fee (per notification):</p>
                  <ul className="space-y-1 text-surface-600">
                    <li>• One Paper – General / OBC / EWS: <strong>₹1,000</strong></li>
                    <li>• One Paper – SC / ST / PwD: <strong>₹500</strong></li>
                    <li>• Both Papers – General / OBC / EWS: <strong>₹1,200</strong></li>
                    <li>• Both Papers – SC / ST / PwD: <strong>₹600</strong></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 8. After CTET */}
            <section id="after-ctet">
              <SectionHeading num="8" title="Career Opportunities After Clearing CTET" />
              <p className="text-surface-600 mb-4 text-sm">Clearing CTET opens the door to teaching jobs in central government schools. Here are the major employers:</p>
              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface-50">
                        <th className="text-left p-4 font-semibold text-surface-700">Organisation</th>
                        <th className="text-left p-4 font-semibold text-surface-700">Role</th>
                        <th className="text-left p-4 font-semibold text-surface-700">CTET Requirement</th>
                        <th className="text-left p-4 font-semibold text-surface-700">Salary Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      {afterCtetOpportunities.map((row, i) => (
                        <tr key={i} className="border-t border-surface-100">
                          <td className="p-4 font-medium text-surface-800">{row.org}</td>
                          <td className="p-4 text-surface-600">{row.role}</td>
                          <td className="p-4"><span className="badge badge-primary">{row.requirement}</span></td>
                          <td className="p-4 text-emerald-600 font-medium">{row.salary}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 9. Study Plan */}
            <section id="study-plan">
              <SectionHeading num="9" title="CTET 8-Week Study Plan" />
              <div className="space-y-4">
                {studyPlan.map((week) => (
                  <div key={week.week} className="card p-5 border-l-4 border-primary-400">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold bg-primary-100 text-primary-700 px-2 py-1 rounded">{week.week}</span>
                      <span className="font-heading font-semibold text-surface-800">{week.focus}</span>
                    </div>
                    <p className="text-sm text-surface-600">{week.tasks}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 10. Best Books */}
            <section id="books">
              <SectionHeading num="10" title="Best Books for CTET 2026 Preparation" />
              <BooksTable books={books} />
              <p className="text-sm text-surface-500 mt-3">💡 <strong>Most Important:</strong> NCERT textbooks for Classes 1–8 in all subjects are the primary source for CTET questions. Always read them before any guide book.</p>
            </section>

            {/* 11. Expert Tips */}
            <section id="tips">
              <SectionHeading num="11" title="Expert Tips to Crack CTET 2026" />
              <TipsList tips={tips} />
            </section>

            {/* 12. FAQs */}
            <section id="faq">
              <SectionHeading num="12" title="CTET 2026 – Frequently Asked Questions" />
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="card p-5">
                    <p className="font-semibold text-surface-800 mb-2 text-sm">Q{i + 1}. {faq.q}</p>
                    <p className="text-sm text-surface-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* ── Sidebar ── */}
          <aside className="hidden lg:block space-y-6 sticky top-6 self-start">
            {/* TOC */}
            <div className="card p-5 border-l-4 border-primary-500">
              <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">📖 On This Page</div>
              <ol className="space-y-1.5 list-decimal list-inside">
                {toc.map((s) => (
                  <li key={s.id}><a href={`#${s.id}`} className="text-sm text-primary-500 hover:underline">{s.label}</a></li>
                ))}
              </ol>
            </div>

            {/* Key Facts */}
            <div className="card p-5 bg-primary-50 border-primary-200">
              <div className="text-xs font-semibold uppercase tracking-wide text-primary-600 mb-3">📌 Key Facts</div>
              <ul className="space-y-2 text-sm text-surface-700">
                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span>Exam: 5 July 2026</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span>150 MCQs, 150 Marks</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span>No Negative Marking</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span>Qualifying: 60% (Gen), 55% (Reserved)</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span>Certificate valid for Lifetime</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span>No upper age limit</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span>Conducted by CBSE</li>
              </ul>
            </div>

            {/* Exam Timeline */}
            <div className="card p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">📅 July 2026 Timeline</div>
              <div className="space-y-3 text-sm">
                {[
                  { event: 'Notification', date: '5 Mar 2026', done: true },
                  { event: 'Application Closes', date: '2 Apr 2026', done: true },
                  { event: 'Admit Card', date: 'Mid-June 2026', done: false },
                  { event: 'Exam Day', date: '5 July 2026', done: false },
                  { event: 'Result', date: 'TBN', done: false },
                ].map((step) => (
                  <div key={step.event} className="flex items-center gap-3">
                    <span className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${step.done ? 'bg-emerald-500 text-white' : 'bg-surface-200 text-surface-500'}`}>
                      {step.done ? '✓' : '○'}
                    </span>
                    <div>
                      <div className="font-medium text-surface-700">{step.event}</div>
                      <div className="text-xs text-surface-400">{step.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="card p-5 bg-gradient-to-br from-[#0a1e4f] to-[#1a56db] text-white">
              <div className="text-sm font-semibold mb-2">🎯 Start CTET Preparation</div>
              <p className="text-blue-100 text-xs mb-4">Exam on 5 July 2026 – start your preparation today!</p>
              <Link href="/resources" className="block text-center bg-white text-primary-600 font-semibold text-sm py-2 rounded-lg hover:bg-blue-50 transition-colors">
                Free Study Resources →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}


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

// ─── SSC MTS RICH PAGE ───────────────────────────────────────────────────────
function SscMtsPage({ exam }: { exam: any }) {
  const toc = [
    { id: 'overview', label: 'Overview' },
    { id: 'important-dates', label: 'Important Dates' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'vacancies', label: 'Vacancies & Posts' },
    { id: 'exam-pattern', label: 'Exam Pattern' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'physical', label: 'Physical Test (Havaldar)' },
    { id: 'salary', label: 'Salary & Benefits' },
    { id: 'study-plan', label: 'Study Plan' },
    { id: 'books', label: 'Best Books' },
    { id: 'tips', label: 'Expert Tips' },
    { id: 'faq', label: 'FAQs' },
  ];

  const importantDates = [
    { event: 'Official Notification Released', date: '26 June 2025', status: 'done' },
    { event: 'Online Application Opens', date: '26 June 2025', status: 'done' },
    { event: 'Last Date to Apply Online', date: '24 July 2025', status: 'done' },
    { event: 'Fee Payment Last Date', date: '25 July 2025 (11 PM)', status: 'done' },
    { event: 'Application Correction Window', date: '4–6 August 2025', status: 'done' },
    { event: 'Vacancies Revised (Increased)', date: 'September 2025', status: 'done' },
    { event: 'Exam City Intimation / Self-Slotting', date: '16–25 January 2026', status: 'done' },
    { event: 'Admit Card Released', date: '2 February 2026', status: 'done' },
    { event: 'CBT Exam (Paper I)', date: '4 February – 20 February 2026', status: 'done' },
    { event: 'Tentative Answer Key Released', date: '3 March 2026', status: 'done' },
    { event: 'Answer Key Objection Window', date: '3–6 March 2026', status: 'done' },
    { event: 'Final Answer Key', date: 'To be notified (TBN)', status: 'tbn' },
    { event: 'CBT Result Declared', date: 'Expected April–June 2026', status: 'tbn' },
    { event: 'PET / PST (Havaldar only)', date: 'To be notified (TBN)', status: 'tbn' },
    { event: 'Final Merit List', date: 'To be notified (TBN)', status: 'tbn' },
    { event: 'SSC MTS 2026 Notification', date: 'Expected June–July 2026', status: 'upcoming' },
  ];

  const examPatternS1 = [
    { subject: 'Numerical & Mathematical Ability', questions: 20, marks: 60, negative: 'None' },
    { subject: 'Reasoning Ability & Problem Solving', questions: 20, marks: 60, negative: 'None' },
  ];

  const examPatternS2 = [
    { subject: 'General Awareness', questions: 25, marks: 75, negative: '−1 per wrong answer' },
    { subject: 'English Language & Comprehension', questions: 25, marks: 75, negative: '−1 per wrong answer' },
  ];

  const vacancyData = [
    { post: 'MTS (Multi-Tasking Staff) – General', ur: '3,249', obc: '1,935', sc: '1,183', st: '567', ews: '646', total: '7,580' },
    { post: 'Havaldar – CBIC', ur: '539', obc: '286', sc: '157', st: '93', ews: '63', total: '1,138' },
    { post: 'Havaldar – CBN', ur: '—', obc: '—', sc: '—', st: '—', ews: '—', total: '~230' },
    { post: 'TOTAL (Revised)', ur: '—', obc: '—', sc: '—', st: '—', ews: '—', total: '7,948' },
  ];

  const physicalPet = [
    { category: 'Male – All Categories', task: 'Walk 1,600 m', time: '15 minutes' },
    { category: 'Female – All Categories', task: 'Walk 1 km', time: '20 minutes' },
    { category: 'Male Cyclothon (alternative)', task: 'Cycle 3 km', time: '25 minutes' },
  ];

  const physicalPst = [
    { category: 'Male – General / OBC / EWS / SC', height: '157.5 cm', weight: 'Proportionate', chest: '76–81 cm' },
    { category: 'Male – ST / Tribal / NE States', height: '152.5 cm', weight: 'Proportionate', chest: '74–79 cm' },
    { category: 'Female – General / OBC / EWS / SC', height: '152 cm', weight: 'Proportionate', chest: 'N/A' },
    { category: 'Female – ST / Tribal / NE States', height: '148 cm', weight: 'Proportionate', chest: 'N/A' },
  ];

  const faqs = [
    { q: 'What is the educational qualification for SSC MTS?', a: 'Candidates must have passed Matriculation (Class 10) or an equivalent examination from a recognised board. Graduation or higher degrees are NOT required.' },
    { q: 'What is the age limit for SSC MTS 2026?', a: 'For MTS posts: 18–25 years. For Havaldar posts (CBIC & CBN): 18–27 years. Age is calculated as of 1 August 2025. OBC gets +3 years relaxation, SC/ST gets +5 years, and PwBD gets +10 years.' },
    { q: 'Is there negative marking in SSC MTS?', a: 'Session I (Maths & Reasoning): No negative marking — attempt all 40 questions freely. Session II (General Awareness & English): 1 mark deducted per wrong answer — be careful here.' },
    { q: 'What is the SSC MTS salary per month?', a: 'MTS posts are in Pay Level 1: basic pay ₹18,000/month. With DA, HRA and other allowances, in-hand salary is approximately ₹18,000–₹22,000/month depending on posting city. Havaldar posts (Pay Level 1) get similar pay with additional allowances for field duty.' },
    { q: 'Is PET/PST required for all SSC MTS candidates?', a: 'No. PET/PST is required only for candidates who apply for the Havaldar post under CBIC & CBN. Candidates applying only for MTS (General) posts do not have any physical test.' },
    { q: 'How many times can I attempt SSC MTS?', a: 'There is no limit on the number of attempts. You can appear as many times as you wish, as long as you meet the age criteria on the specified cut-off date.' },
    { q: 'Can female candidates apply for Havaldar?', a: 'Yes. Female candidates can apply for Havaldar posts. However, they must meet the separate physical standards (height, weight) prescribed for female candidates.' },
    { q: 'What is the difference between MTS and Havaldar in SSC MTS exam?', a: 'MTS (Multi-Tasking Staff) is a general Group C post in central government offices — clerical/peon type work. Havaldar posts are under CBIC (tax department) and CBN (narcotics), requiring physical fitness and field duties. Havaldar has a higher age limit (27) and an additional PET/PST round.' },
  ];

  const statusColor = (s: string) => {
    if (s === 'done') return 'bg-emerald-100 text-emerald-700';
    if (s === 'upcoming') return 'bg-blue-100 text-blue-700';
    return 'bg-surface-100 text-surface-500';
  };
  const statusLabel = (s: string) => {
    if (s === 'done') return '✓ Done';
    if (s === 'upcoming') return '🔔 Upcoming';
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
            <span className="text-white">SSC MTS 2026</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full">SSC</span>
            <span className="bg-emerald-500/20 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">Central Govt</span>
            <span className="bg-orange-400/20 text-orange-200 text-xs font-semibold px-3 py-1 rounded-full">10th Pass Eligible</span>
            <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full">🗓️ Result Expected: June 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-3 leading-tight">
            SSC MTS 2026 –<br className="hidden sm:block" /> Complete Guide: Syllabus, Pattern & Eligibility
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl leading-relaxed mb-6">
            CBT completed (Feb 4–20, 2026). Answer key released March 3, 2026. Result expected April–June 2026. 7,948 total vacancies for MTS and Havaldar posts. Class 10 pass eligible.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Total Vacancies', value: '7,948' },
              { label: 'CBT Conducted', value: 'Feb 2026' },
              { label: 'Min. Qualification', value: 'Class 10 Pass' },
              { label: 'In-Hand Salary', value: '₹18K–22K/mo' },
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
        {/* Mobile TOC */}
        <div className="card p-5 mb-8 border-l-4 border-primary-500 lg:hidden">
          <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">📖 Quick Navigation</div>
          <ol className="grid grid-cols-2 gap-x-4 gap-y-1.5 list-decimal list-inside">
            {toc.map((s) => (
              <li key={s.id}><a href={`#${s.id}`} className="text-sm text-primary-500 hover:underline">{s.label}</a></li>
            ))}
          </ol>
        </div>

        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          {/* MAIN CONTENT */}
          <div>

            {/* OVERVIEW */}
            <section id="overview" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">What is SSC MTS?</h2>
              <div className="card p-6 mb-5">
                <p className="text-surface-600 leading-relaxed mb-4">
                  <strong>SSC MTS (Multi-Tasking Staff)</strong> is a national-level recruitment exam conducted annually by the <strong>Staff Selection Commission (SSC)</strong> to fill Group C, non-gazetted, non-ministerial posts across central government ministries, departments, and offices. It is the most accessible central government exam in India — open to anyone who has passed Class 10.
                </p>
                <p className="text-surface-600 leading-relaxed mb-4">
                  The 2025 cycle also recruits for <strong>Havaldar posts under CBIC (Central Board of Indirect Taxes) and CBN (Central Bureau of Narcotics)</strong>, which require an additional Physical Efficiency Test and Physical Standard Test (PET/PST) for shortlisted candidates.
                </p>
                <p className="text-surface-600 leading-relaxed">
                  The selection process has a single Computer-Based Test (CBT) in two sessions, followed by PET/PST for Havaldar applicants only. There is no typing test, no interview, and no Paper II (it was removed from the exam pattern). Final merit is based entirely on CBT scores.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Conducting Body', value: 'Staff Selection Commission (SSC)' },
                  { label: 'Post Type', value: 'Group C, Non-Gazetted' },
                  { label: 'Pay Level', value: 'Level 1 (₹18,000–₹56,900)' },
                  { label: 'Min. Qualification', value: 'Matriculation (10th Pass)' },
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
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-2">📅 Important Dates – SSC MTS 2026</h2>
              <p className="text-sm text-surface-500 mb-5">The 2025 cycle exam has been completed. The table below reflects actual dates from the official notification and subsequent updates.</p>
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
                      <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                        <td className="p-3 font-medium text-surface-800">{row.event}</td>
                        <td className="p-3 text-surface-600">{row.date}</td>
                        <td className="p-3">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusColor(row.status)}`}>
                            {statusLabel(row.status)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-surface-400 mt-3">Source: Official SSC notification (ssc.gov.in) and subsequent corrigenda. Always verify dates on the official website before acting.</p>
            </section>

            {/* ELIGIBILITY */}
            <section id="eligibility" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">Eligibility Criteria – SSC MTS 2026</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-surface-50 rounded-xl p-5 border border-surface-200">
                  <div className="text-xs text-surface-400 uppercase tracking-wide mb-1">Nationality</div>
                  <div className="font-semibold text-sm text-surface-800 mb-2">Indian Citizen (or equivalent)</div>
                  <p className="text-xs text-surface-500">Citizens of Nepal, Bhutan, Tibetan refugees (pre-1962), and persons of Indian origin migrating from specified countries are also eligible under specific conditions.</p>
                </div>
                <div className="bg-surface-50 rounded-xl p-5 border border-surface-200">
                  <div className="text-xs text-surface-400 uppercase tracking-wide mb-1">Educational Qualification</div>
                  <div className="font-semibold text-sm text-surface-800 mb-2">Matriculation (Class 10) Pass</div>
                  <p className="text-xs text-surface-500">From any recognised board (CBSE, ICSE, State boards). No graduation required. There is no minimum percentage specified.</p>
                </div>
              </div>

              <h3 className="font-heading font-semibold text-surface-800 mb-3">Age Limit</h3>
              <div className="overflow-x-auto rounded-xl border border-surface-200 mb-4">
                <table className="w-full text-sm">
                  <thead className="bg-surface-900 text-white">
                    <tr>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Post</th>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Min Age</th>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Max Age</th>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Age Cutoff</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { post: 'MTS (General) – Most posts', min: '18 years', max: '25 years', cutoff: '01 August 2025' },
                      { post: 'MTS – Some specific posts', min: '18 years', max: '27 years', cutoff: '01 August 2025' },
                      { post: 'Havaldar (CBIC & CBN)', min: '18 years', max: '27 years', cutoff: '01 August 2025' },
                    ].map((row, i) => (
                      <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                        <td className="p-3 font-medium text-surface-800">{row.post}</td>
                        <td className="p-3 text-surface-600">{row.min}</td>
                        <td className="p-3 text-surface-600">{row.max}</td>
                        <td className="p-3 text-surface-600">{row.cutoff}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="font-heading font-semibold text-surface-800 mb-3">Age Relaxation</h3>
              <div className="overflow-x-auto rounded-xl border border-surface-200">
                <table className="w-full text-sm">
                  <thead className="bg-primary-900 text-white">
                    <tr>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Category</th>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Relaxation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { cat: 'OBC (Non-creamy layer)', relax: '+3 years' },
                      { cat: 'SC / ST', relax: '+5 years' },
                      { cat: 'PwBD – General / EWS', relax: '+10 years' },
                      { cat: 'PwBD – OBC', relax: '+13 years' },
                      { cat: 'PwBD – SC / ST', relax: '+15 years' },
                      { cat: 'Ex-Servicemen (General / OBC)', relax: '+3 years (after service period deduction)' },
                      { cat: 'Ex-Servicemen (SC / ST)', relax: '+8 years (after service period deduction)' },
                      { cat: 'Widows / Divorced Women (General)', relax: 'Up to 35 years' },
                      { cat: 'Widows / Divorced Women (OBC)', relax: 'Up to 38 years' },
                      { cat: 'Widows / Divorced Women (SC / ST)', relax: 'Up to 40 years' },
                    ].map((row, i) => (
                      <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                        <td className="p-3 font-medium text-surface-800">{row.cat}</td>
                        <td className="p-3 text-emerald-700 font-semibold">{row.relax}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800 mt-4">
                <strong>📌 Note:</strong> Age relaxation applies to the upper age limit only. The lower age limit of 18 years remains fixed for all categories. Certificates must be produced during Document Verification to claim relaxation.
              </div>
            </section>

            {/* VACANCIES */}
            <section id="vacancies" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-2">Vacancies & Posts – SSC MTS 2026</h2>
              <p className="text-sm text-surface-500 mb-5">SSC initially notified 8,021 vacancies (6,946 MTS + 1,075 Havaldar). After revision, the total was updated to <strong>7,948 posts</strong>.</p>
              <div className="overflow-x-auto rounded-xl border border-surface-200 mb-5">
                <table className="w-full text-sm">
                  <thead className="bg-surface-900 text-white">
                    <tr>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Post</th>
                      <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide">UR</th>
                      <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide">OBC</th>
                      <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide">SC</th>
                      <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide">ST</th>
                      <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide">EWS</th>
                      <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vacancyData.map((row, i) => (
                      <tr key={i} className={`border-t border-surface-100 ${i === vacancyData.length - 1 ? 'bg-primary-50 font-bold' : i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                        <td className="p-3 font-medium text-surface-800">{row.post}</td>
                        <td className="p-3 text-center text-surface-600">{row.ur}</td>
                        <td className="p-3 text-center text-surface-600">{row.obc}</td>
                        <td className="p-3 text-center text-surface-600">{row.sc}</td>
                        <td className="p-3 text-center text-surface-600">{row.st}</td>
                        <td className="p-3 text-center text-surface-600">{row.ews}</td>
                        <td className="p-3 text-center font-semibold text-primary-700">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'MTS (General) Posts', value: '6,810', color: 'text-primary-700', bg: 'bg-primary-50 border-primary-200' },
                  { label: 'Havaldar (CBIC) Posts', value: '1,075 → revised 1,138', color: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-200' },
                  { label: 'Total Vacancies (Revised)', value: '7,948', color: 'text-accent-600', bg: 'bg-orange-50 border-orange-200' },
                ].map((item) => (
                  <div key={item.label} className={`rounded-xl p-4 border ${item.bg} text-center`}>
                    <div className="text-xs text-surface-500 uppercase tracking-wide mb-1">{item.label}</div>
                    <div className={`text-xl font-heading font-bold ${item.color}`}>{item.value}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* EXAM PATTERN */}
            <section id="exam-pattern" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-2">Exam Pattern – SSC MTS 2026</h2>
              <p className="text-sm text-surface-500 mb-5">The CBT is conducted in two compulsory sessions on the same day. Missing either session results in automatic disqualification. Total marks: <strong>270</strong>. Total time: <strong>90 minutes</strong>.</p>

              <div className="card p-5 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary-100 text-primary-700 text-xs font-bold px-3 py-1 rounded-full">Session I</span>
                  <span className="text-surface-600 text-sm">40 Questions | 120 Marks | 45 Minutes | <span className="text-emerald-700 font-semibold">No Negative Marking</span></span>
                </div>
                <div className="overflow-x-auto rounded-xl border border-surface-200">
                  <table className="w-full text-sm">
                    <thead className="bg-surface-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide text-surface-600">Subject</th>
                        <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide text-surface-600">Questions</th>
                        <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide text-surface-600">Marks</th>
                        <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide text-surface-600">Negative Marking</th>
                      </tr>
                    </thead>
                    <tbody>
                      {examPatternS1.map((row, i) => (
                        <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                          <td className="p-3 font-medium text-surface-800">{row.subject}</td>
                          <td className="p-3 text-center text-surface-600">{row.questions}</td>
                          <td className="p-3 text-center font-semibold text-primary-700">{row.marks}</td>
                          <td className="p-3 text-center text-emerald-700 font-semibold">{row.negative}</td>
                        </tr>
                      ))}
                      <tr className="border-t border-surface-200 bg-surface-50 font-bold">
                        <td className="p-3 text-surface-800">Session I Total</td>
                        <td className="p-3 text-center text-surface-800">40</td>
                        <td className="p-3 text-center text-primary-700">120</td>
                        <td className="p-3 text-center text-emerald-700">No Penalty</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="card p-5 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">Session II</span>
                  <span className="text-surface-600 text-sm">50 Questions | 150 Marks | 45 Minutes | <span className="text-red-600 font-semibold">−1 per wrong answer</span></span>
                </div>
                <div className="overflow-x-auto rounded-xl border border-surface-200">
                  <table className="w-full text-sm">
                    <thead className="bg-surface-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide text-surface-600">Subject</th>
                        <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide text-surface-600">Questions</th>
                        <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide text-surface-600">Marks</th>
                        <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide text-surface-600">Negative Marking</th>
                      </tr>
                    </thead>
                    <tbody>
                      {examPatternS2.map((row, i) => (
                        <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                          <td className="p-3 font-medium text-surface-800">{row.subject}</td>
                          <td className="p-3 text-center text-surface-600">{row.questions}</td>
                          <td className="p-3 text-center font-semibold text-primary-700">{row.marks}</td>
                          <td className="p-3 text-center text-red-600 font-semibold">{row.negative}</td>
                        </tr>
                      ))}
                      <tr className="border-t border-surface-200 bg-surface-50 font-bold">
                        <td className="p-3 text-surface-800">Session II Total</td>
                        <td className="p-3 text-center text-surface-800">50</td>
                        <td className="p-3 text-center text-primary-700">150</td>
                        <td className="p-3 text-center text-red-600">−1 per wrong</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl border border-surface-200">
                <table className="w-full text-sm">
                  <thead className="bg-primary-900 text-white">
                    <tr>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Parameter</th>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { param: 'Mode of Exam', detail: 'Computer-Based Test (CBT) — online' },
                      { param: 'Type of Questions', detail: 'Objective MCQ (4 options each)' },
                      { param: 'Total Questions', detail: '90 (Session I: 40 + Session II: 50)' },
                      { param: 'Total Marks', detail: '270 (Session I: 120 + Session II: 150)' },
                      { param: 'Marks per Question', detail: '+3 marks for correct answer (both sessions)' },
                      { param: 'Negative Marking', detail: 'Session I: None | Session II: −1 per wrong answer' },
                      { param: 'Total Duration', detail: '90 minutes (45 min each session)' },
                      { param: 'Language of Exam', detail: 'English, Hindi & 13 regional languages (excluding English section)' },
                      { param: 'PwBD Candidates', detail: '60 minutes total (extra time allowed)' },
                      { param: 'Normalisation', detail: 'Yes — scores normalised across shifts' },
                    ].map((row, i) => (
                      <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                        <td className="p-3 font-semibold text-surface-800">{row.param}</td>
                        <td className="p-3 text-surface-600">{row.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mt-4">
                <strong>⚠️ Key Strategy:</strong> Attempt ALL 40 questions in Session I — no penalty for wrong answers. In Session II, be selective — a wrong answer costs you 1 mark (not just +3 gone, but −1 deducted too, a 4-mark swing). Only guess if you can eliminate at least 2 options.
              </div>
            </section>

            {/* SYLLABUS */}
            <section id="syllabus" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-2">SSC MTS Syllabus 2025 – Subject Wise</h2>
              <p className="text-surface-500 text-sm mb-5">Syllabus level is <strong>Matriculation (Class 10)</strong>. All topics below are from the official SSC MTS notification. Click each subject to expand.</p>
              <div className="space-y-3">
                {[
                  {
                    subject: 'Session I — Numerical & Mathematical Ability',
                    badge: '20 Qs · 60 Marks · No Negative Marking',
                    badgeColor: 'bg-primary-100 text-primary-700',
                    topics: [
                      'Number Systems – integers, natural numbers, whole numbers',
                      'LCM and HCF',
                      'Decimals and Fractions',
                      'Ratio and Proportion',
                      'Percentage',
                      'Average',
                      'Simple Interest & Compound Interest',
                      'Profit, Loss and Discount',
                      'Mensuration – area, perimeter (2D shapes)',
                      'Time and Work',
                      'Time, Speed and Distance',
                      'Basic Algebra and Elementary Surds',
                      'Geometry – triangles, circles, quadrilaterals',
                      'Data Interpretation (bar chart, pie chart, table)',
                    ],
                  },
                  {
                    subject: 'Session I — Reasoning Ability & Problem Solving',
                    badge: '20 Qs · 60 Marks · No Negative Marking',
                    badgeColor: 'bg-primary-100 text-primary-700',
                    topics: [
                      'Analogies (Word, Number, Figure)',
                      'Classification / Odd One Out',
                      'Series Completion (Number, Alphabetic, Mixed)',
                      'Coding and Decoding',
                      'Blood Relations',
                      'Directions and Distance',
                      'Order and Ranking',
                      'Venn Diagrams',
                      'Syllogism',
                      'Non-Verbal Reasoning (Mirror image, Paper folding, Figure counting)',
                      'Matrix and Pattern Completion',
                      'Missing Number in Grid / Table',
                      'Statement and Conclusion',
                    ],
                  },
                  {
                    subject: 'Session II — General Awareness',
                    badge: '25 Qs · 75 Marks · −1 Negative Marking',
                    badgeColor: 'bg-orange-100 text-orange-700',
                    topics: [
                      'History – Ancient, Medieval, Modern Indian History',
                      'Geography – India & World (rivers, mountains, climate, resources)',
                      'Indian Polity (Constitution, Parliament, Judiciary, Amendments)',
                      'Indian Economy (budget terms, banks, GDP basics)',
                      'General Science – Physics, Chemistry, Biology (Class 8–10 level)',
                      'Environment and Ecology',
                      'Art and Culture – classical dances, music, painting, festivals',
                      'Current Affairs – National and International (last 6 months)',
                      'Important Schemes and Programmes of Government of India',
                      'Books and Authors, Awards and Honours',
                      'Important Dates and Days',
                      'Sports – major events, tournaments, Indian achievements',
                    ],
                  },
                  {
                    subject: 'Session II — English Language & Comprehension',
                    badge: '25 Qs · 75 Marks · −1 Negative Marking',
                    badgeColor: 'bg-orange-100 text-orange-700',
                    topics: [
                      'Reading Comprehension (passage-based)',
                      'Fill in the Blanks (grammar-based)',
                      'Spotting Errors (sentence correction)',
                      'Para Jumbles (sentence rearrangement)',
                      'Synonyms and Antonyms',
                      'Idioms and Phrases',
                      'One Word Substitution',
                      'Cloze Test',
                      'Active and Passive Voice',
                      'Direct and Indirect Speech (Narration)',
                      'Nouns, Pronouns, Verbs, Adjectives, Adverbs',
                      'Prepositions and Articles',
                      'Tenses and Subject-Verb Agreement',
                    ],
                  },
                ].map((section, i) => (
                  <details key={i} className="card group">
                    <summary className="p-5 cursor-pointer flex items-center gap-3 list-none font-heading font-semibold text-surface-800 hover:text-primary-500">
                      <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm flex-shrink-0">{i + 1}</span>
                      <span className="flex-1">{section.subject}</span>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full hidden sm:inline ${section.badgeColor}`}>{section.badge}</span>
                      <svg className="w-5 h-5 text-surface-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </summary>
                    <div className="px-5 pb-5 ml-11 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {section.topics.map((topic, j) => (
                        <div key={j} className="flex items-start gap-2 text-sm text-surface-600">
                          <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />{topic}
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* PHYSICAL TEST (HAVALDAR) */}
            <section id="physical" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-2">Physical Test – Havaldar Post (PET & PST)</h2>
              <p className="text-sm text-surface-500 mb-5">PET/PST is <strong>only for Havaldar (CBIC & CBN)</strong> applicants — not for regular MTS posts. It is a qualifying round with no marks added to the merit.</p>

              <h3 className="font-heading font-semibold text-surface-800 mb-3">Physical Efficiency Test (PET)</h3>
              <div className="overflow-x-auto rounded-xl border border-surface-200 mb-5">
                <table className="w-full text-sm">
                  <thead className="bg-surface-900 text-white">
                    <tr>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Category</th>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Task</th>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Time Limit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {physicalPet.map((row, i) => (
                      <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                        <td className="p-3 font-medium text-surface-800">{row.category}</td>
                        <td className="p-3 text-surface-600">{row.task}</td>
                        <td className="p-3 font-semibold text-primary-700">{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="font-heading font-semibold text-surface-800 mb-3">Physical Standard Test (PST)</h3>
              <div className="overflow-x-auto rounded-xl border border-surface-200 mb-4">
                <table className="w-full text-sm">
                  <thead className="bg-surface-900 text-white">
                    <tr>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Category</th>
                      <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide">Height</th>
                      <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide">Weight</th>
                      <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide">Chest (Male)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {physicalPst.map((row, i) => (
                      <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                        <td className="p-3 font-medium text-surface-800">{row.category}</td>
                        <td className="p-3 text-center text-surface-600">{row.height}</td>
                        <td className="p-3 text-center text-surface-600">{row.weight}</td>
                        <td className="p-3 text-center text-surface-600">{row.chest}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-800">
                <strong>⚠️ Important:</strong> PET is QUALIFYING only — failing the walk/cycle means immediate elimination. No second chance. If you applied for Havaldar, begin physical training from Month 1 of your preparation.
              </div>
            </section>

            {/* SALARY */}
            <section id="salary" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">SSC MTS Salary & Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                {[
                  { label: 'Pay Scale (7th CPC)', value: 'Pay Level 1: ₹18,000–₹56,900/month', color: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-200' },
                  { label: 'Estimated In-Hand (X City)', value: '₹21,000–₹22,000/month', color: 'text-primary-700', bg: 'bg-primary-50 border-primary-200' },
                  { label: 'Estimated In-Hand (Y City)', value: '₹19,500–₹20,500/month', color: 'text-primary-700', bg: 'bg-primary-50 border-primary-200' },
                ].map((item) => (
                  <div key={item.label} className={`rounded-xl p-4 border ${item.bg}`}>
                    <div className="text-xs text-surface-500 uppercase tracking-wide mb-1">{item.label}</div>
                    <div className={`font-heading font-bold ${item.color}`}>{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="overflow-x-auto rounded-xl border border-surface-200">
                <table className="w-full text-sm">
                  <thead className="bg-surface-900 text-white">
                    <tr>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Component</th>
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Amount (Approx.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { component: 'Basic Pay', amount: '₹18,000/month' },
                      { component: 'Dearness Allowance (DA) ~50%', amount: '₹9,000/month' },
                      { component: 'House Rent Allowance (HRA) – X city 24%', amount: '₹4,320/month' },
                      { component: 'House Rent Allowance (HRA) – Y city 16%', amount: '₹2,880/month' },
                      { component: 'Transport Allowance (TA)', amount: '₹1,350/month' },
                      { component: 'Gross Salary (X city approximate)', amount: '₹32,670/month' },
                      { component: 'Deductions (NPS + CGHS + CGEGIS)', amount: '~₹2,000–3,000/month' },
                      { component: 'In-Hand Take-Home (X city)', amount: '₹21,000–22,000/month' },
                    ].map((row, i) => (
                      <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                        <td className="p-3 font-medium text-surface-800">{row.component}</td>
                        <td className="p-3 text-emerald-700 font-semibold">{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                <div className="card p-5">
                  <h3 className="font-heading font-semibold text-surface-800 mb-3">Other Benefits</h3>
                  <ul className="space-y-2">
                    {[
                      'Central Government Health Scheme (CGHS) for employee and family',
                      'Leave Travel Concession (LTC) — travel reimbursement twice in 4 years',
                      'NPS pension (National Pension System) — 10% of basic deducted, 14% contributed by Govt',
                      'Maternity / Paternity / Child Care Leave',
                      'Group Insurance (CGEGIS)',
                      'Annual increments in basic pay',
                      'Promotion opportunities through departmental exams after 5 years',
                    ].map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-surface-600">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />{b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card p-5">
                  <h3 className="font-heading font-semibold text-surface-800 mb-3">Job Profile</h3>
                  <ul className="space-y-2">
                    {[
                      'Filing, photocopying, carrying papers within offices',
                      'Cleaning, maintenance and upkeep of office premises',
                      'Delivery of dak (official correspondence)',
                      'Opening and closing of government offices',
                      'Assisting senior officials as required',
                      'Watch and ward duties (applicable to some ministries)',
                      'Havaldar: Field inspection, escort, and collection duties under CBIC/CBN',
                    ].map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-surface-600">
                        <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* STUDY PLAN */}
            <section id="study-plan" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">3-Month Study Plan for SSC MTS</h2>
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-primary-200 hidden sm:block" />
                <div className="space-y-4">
                  {[
                    {
                      month: 'Month 1',
                      title: 'Build the Foundation',
                      tasks: [
                        'Revise Class 6–10 Maths — NCERT is sufficient. Focus on percentage, ratio, SI/CI, profit-loss.',
                        'Practice 20 Reasoning questions daily — start with simple analogies and series.',
                        'Read one newspaper article daily for General Awareness habit-building.',
                        'Start a GK notebook — write 10 facts per day (history, geography, polity).',
                      ],
                    },
                    {
                      month: 'Month 2',
                      title: 'Speed and Accuracy',
                      tasks: [
                        'Give 1 full mock test per week — both sessions together (simulate real exam).',
                        'Target Session I accuracy: 35/40 correct, Session II: 35/50 correct.',
                        'English: solve 30 grammar questions daily — focus on error spotting and fill-in-the-blanks.',
                        'Current Affairs: subscribe to a monthly capsule (Adda247 or GK Today).',
                        'Revise GK notes from Month 1 — repetition is key.',
                      ],
                    },
                    {
                      month: 'Month 3',
                      title: 'Revision and Mock Tests',
                      tasks: [
                        'Give 2 full mock tests per week and analyse every wrong answer.',
                        'Focus on weak sections identified from mock test analysis.',
                        'Complete at least 5 previous year SSC MTS papers (2019–2024).',
                        'Final 2 weeks: only revision — no new topics.',
                        'For Havaldar aspirants: physical training (walking/cycling) daily from Month 1.',
                      ],
                    },
                  ].map((step, i) => (
                    <div key={i} className="sm:pl-14 relative card p-5">
                      <span className="hidden sm:flex absolute left-0 top-4 w-10 h-10 bg-primary-500 rounded-xl items-center justify-center text-white font-heading font-bold text-sm z-10">{i + 1}</span>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="badge-primary text-xs">{step.month}</span>
                        <h3 className="font-heading font-semibold text-surface-800">{step.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {step.tasks.map((t, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-surface-600">
                            <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />{t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* BOOKS */}
            <section id="books" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">Best Books for SSC MTS 2026</h2>
              <div className="overflow-x-auto rounded-xl border border-surface-200">
                <table className="w-full text-sm">
                  <thead className="bg-surface-900 text-white">
                    <tr>
                      <th className="text-left p-4 font-semibold text-xs uppercase tracking-wide">Book Name</th>
                      <th className="text-left p-4 font-semibold text-xs uppercase tracking-wide">Author / Publisher</th>
                      <th className="text-left p-4 font-semibold text-xs uppercase tracking-wide">Subject</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'SSC MTS Selection Mantra (TCS MCQs)', pub: 'Arihant Publications', sub: 'All Subjects (PYQs)' },
                      { name: 'Quantitative Aptitude for Competitive Examinations', pub: 'R.S. Aggarwal', sub: 'Mathematics' },
                      { name: 'A Modern Approach to Verbal & Non-Verbal Reasoning', pub: 'R.S. Aggarwal', sub: 'Reasoning' },
                      { name: 'Lucent\'s General Knowledge', pub: 'Lucent Publications', sub: 'General Awareness' },
                      { name: 'Plinth to Paramount (English Grammar)', pub: 'KD Campus', sub: 'English' },
                      { name: 'SSC MTS Previous Year Papers (last 5 years)', pub: 'Kiran Publications', sub: 'Practice / PYQs' },
                    ].map((book, i) => (
                      <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                        <td className="p-4 font-medium text-surface-800">{book.name}</td>
                        <td className="p-4 text-surface-600">{book.pub}</td>
                        <td className="p-4"><span className="badge-primary">{book.sub}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-surface-400 mt-3">💡 You do not need all 6 books. Pick ONE Maths book + ONE Reasoning book + Lucent GK + Previous Year Papers. That is enough to crack SSC MTS.</p>
            </section>

            {/* TIPS */}
            <section id="tips" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">Expert Preparation Tips for SSC MTS</h2>
              <div className="card p-6 bg-orange-50 border-orange-200 space-y-3">
                {[
                  'Attempt ALL questions in Session I — no negative marking means zero risk. Even blind guesses statistically add marks here.',
                  'In Session II, attempt questions you are 70%+ confident about. Skip uncertain ones — a wrong answer costs you 4 effective marks (you lose +3 and also incur −1).',
                  'General Awareness is the highest-scoring section for toppers. Spend at least 40% of your study time on GK — it directly separates merit list candidates.',
                  'Do not neglect English. For Hindi-medium students, focus only on grammar rules and synonyms/antonyms — skip heavy comprehension initially.',
                  'Solve previous year papers (2019–2024). At least 20–30% of questions are repeated or follow the same pattern.',
                  'Current Affairs from the last 6 months (before exam date) is heavily tested. Maintain a monthly capsule printout.',
                  'SSC uses normalisation — do not worry about exam difficulty. Focus on your score relative to your preparation, not the paper.',
                  'If applying for Havaldar, start physical training (1.6 km walk) from day one. PET disqualification means losing everything after clearing CBT.',
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-surface-700">
                    <span className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>{tip}
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5">Frequently Asked Questions – SSC MTS</h2>
              <div className="space-y-3">
                {faqs.map((item, i) => (
                  <details key={i} className="card group">
                    <summary className="p-5 cursor-pointer flex items-center gap-3 list-none font-heading font-semibold text-surface-800 hover:text-primary-500">
                      <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">Q</span>
                      <span className="flex-1 text-sm">{item.q}</span>
                      <svg className="w-5 h-5 text-surface-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </summary>
                    <div className="px-5 pb-5 ml-9 text-sm text-surface-600 leading-relaxed">{item.a}</div>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500 p-8 text-center text-white mb-8">
              <h3 className="font-heading font-bold text-xl mb-2">Prepare for SSC MTS 2026</h3>
              <p className="text-blue-100 text-sm mb-5 max-w-md mx-auto">The 2026 notification is expected in June–July 2026. Use this time to build your foundation now — those who start early top the merit list.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/tools/age-calculator" className="bg-white text-primary-600 font-heading font-bold px-6 py-3 rounded-xl hover:bg-primary-50 transition-all text-sm">
                  Check Eligibility →
                </Link>
                <Link href="/resources" className="border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all text-sm">
                  Free Resources
                </Link>
              </div>
            </div>

            <p className="text-xs text-surface-400 bg-surface-50 rounded-lg p-4">
              All data sourced from the official SSC MTS 2026 notification (ssc.gov.in), corrigenda, and verified educational platforms (Shiksha, Careers360, Testbook, Adda247). Last updated: April 2026. Always verify dates from <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary-500">ssc.gov.in</a> before applying.
            </p>
          </div>

          {/* SIDEBAR */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="card p-5">
                <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">On This Page</div>
                <nav className="space-y-0.5">
                  {toc.map((s) => (
                    <a key={s.id} href={`#${s.id}`} className="block py-1.5 px-3 rounded-lg text-sm text-surface-500 hover:text-primary-500 hover:bg-primary-50 transition-colors">{s.label}</a>
                  ))}
                </nav>
              </div>
              <div className="card p-5 bg-primary-50 border-primary-200">
                <div className="text-xs font-semibold uppercase tracking-wide text-primary-800 mb-2">Official Website</div>
                <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 break-all hover:underline">ssc.gov.in →</a>
              </div>
              <div className="card p-5 bg-emerald-50 border-emerald-200">
                <div className="text-xs font-semibold uppercase tracking-wide text-emerald-800 mb-2">Current Status</div>
                <div className="text-sm font-semibold text-emerald-700 mb-1">CBT Completed ✓</div>
                <div className="text-xs text-surface-500">Answer key released March 3, 2026. Result expected April–June 2026.</div>
              </div>
              <div className="card p-5">
                <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">Quick Facts</div>
                <ul className="space-y-2">
                  {[
                    { label: 'Total Vacancies', val: '7,948' },
                    { label: 'Exam Level', val: 'Class 10 (Matric)' },
                    { label: 'Application Fee', val: '₹100 (Gen) | Free (SC/ST/Exsm/Female)' },
                    { label: 'No. of Attempts', val: 'Unlimited' },
                    { label: 'Typing Test', val: 'None' },
                    { label: 'Interview', val: 'None' },
                  ].map((f) => (
                    <li key={f.label} className="text-xs">
                      <span className="text-surface-400">{f.label}: </span>
                      <span className="font-semibold text-surface-700">{f.val}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card p-5">
                <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">Related Exams</div>
                <div className="space-y-2">
                  {[
                    { name: 'SSC CGL', slug: 'ssc-cgl' },
                    { name: 'SSC CHSL', slug: 'ssc-chsl' },
                    { name: 'SSC GD Constable', slug: 'ssc-gd-constable' },
                    { name: 'RRB Group D', slug: 'rrb-group-d' },
                  ].map((e) => (
                    <Link key={e.slug} href={`/exams/${e.slug}`} className="block text-sm text-primary-500 hover:text-primary-700 hover:underline">{e.name} →</Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   SBI CLERK 2026 DETAILED PAGE
   ───────────────────────────────────────────────────────────────────────── */
function SbiClerkPage({ exam }: { exam: any }) {
  const toc = [
    { id: 'overview',        label: 'Overview' },
    { id: 'important-dates', label: 'Important Dates' },
    { id: 'eligibility',     label: 'Eligibility Criteria' },
    { id: 'vacancies',       label: 'Vacancies & Posts' },
    { id: 'selection',       label: 'Selection Process' },
    { id: 'exam-pattern',    label: 'Exam Pattern' },
    { id: 'syllabus',        label: 'Detailed Syllabus' },
    { id: 'salary',          label: 'Salary & Benefits' },
    { id: 'apply',           label: 'How to Apply' },
    { id: 'study-plan',      label: 'Study Plan' },
    { id: 'books',           label: 'Best Books' },
    { id: 'tips',            label: 'Expert Tips' },
    { id: 'faq',             label: 'FAQs' },
  ];

  /* ── Important Dates ── */
  const importantDates = [
    /* 2025 cycle (completed) */
    { event: 'Official Notification Released (2025 cycle)',  date: '5 August 2025',                    status: 'done' },
    { event: 'Online Application Starts',                   date: '6 August 2025',                    status: 'done' },
    { event: 'Last Date to Apply Online',                   date: '26 August 2025',                   status: 'done' },
    { event: 'Pre-Examination Training Call Letter',        date: 'September 2025',                   status: 'done' },
    { event: 'Prelims Admit Card Released',                 date: 'September 2025',                   status: 'done' },
    { event: 'Prelims Exam (Phase I)',                      date: '20, 21 & 27 September 2025',       status: 'done' },
    { event: 'Prelims Result Declared',                     date: 'October / November 2025',          status: 'done' },
    { event: 'Mains Admit Card Released',                   date: 'November 2025',                    status: 'done' },
    { event: 'Mains Exam (Phase II)',                       date: '21 November 2025',                 status: 'done' },
    { event: 'Mains Result Declared',                       date: '27 February 2026',                 status: 'done' },
    { event: 'Mains Cutoff & Scorecard Released',           date: '10 March 2026',                    status: 'done' },
    { event: 'Language Proficiency Test (LPT)',             date: 'To be notified (TBN)',             status: 'tbn'  },
    { event: 'Document Verification & Final Joining',       date: 'To be notified (TBN)',             status: 'tbn'  },
    /* 2026 cycle (upcoming) */
    { event: 'SBI Clerk 2026 Notification Expected',        date: 'July / August 2026',               status: 'upcoming' },
    { event: 'Application Window (2026 cycle)',             date: 'August 2026 (expected)',           status: 'upcoming' },
    { event: 'Prelims Exam 2026 (expected)',                date: 'September / October 2026',         status: 'upcoming' },
    { event: 'Mains Exam 2026 (expected)',                  date: 'November / December 2026',         status: 'upcoming' },
  ];

  /* ── Prelims Pattern ── */
  const prelimsPattern = [
    { section: 'English Language',      questions: 30, marks: 30, duration: '20 min', negative: '−0.25/wrong' },
    { section: 'Numerical Ability',     questions: 35, marks: 35, duration: '20 min', negative: '−0.25/wrong' },
    { section: 'Reasoning Ability',     questions: 35, marks: 35, duration: '20 min', negative: '−0.25/wrong' },
  ];

  /* ── Mains Pattern ── */
  const mainsPattern = [
    { section: 'General/Financial Awareness', questions: 50, marks: 50,  duration: '35 min', negative: '−0.25/wrong' },
    { section: 'General English',             questions: 40, marks: 40,  duration: '35 min', negative: '−0.25/wrong' },
    { section: 'Quantitative Aptitude & DI',  questions: 50, marks: 50,  duration: '45 min', negative: '−0.25/wrong' },
    { section: 'Reasoning & Computer Aptitude', questions: 50, marks: 60, duration: '45 min', negative: '−0.25/wrong' },
  ];

  /* ── Syllabus ── */
  const syllabus = [
    {
      subject: 'Reasoning Ability',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50 border-indigo-200',
      topics: [
        'Puzzles – Floor, Box, Month-based, Scheduling',
        'Seating Arrangement – Linear, Circular, Square',
        'Syllogisms (Direct + Reverse Pattern)',
        'Coding-Decoding (New pattern)',
        'Blood Relations, Direction & Distance',
        'Inequality (Direct + Coded)',
        'Order & Ranking, Alphanumeric Series',
        'Data Sufficiency, Input-Output',
      ],
    },
    {
      subject: 'Numerical / Quantitative Aptitude',
      color: 'text-emerald-700',
      bg: 'bg-emerald-50 border-emerald-200',
      topics: [
        'Simplification & Approximation',
        'Number Series (Missing & Wrong)',
        'Data Interpretation – Bar, Line, Pie, Table, Caselet',
        'Percentage, Average, Ratio & Proportion',
        'Profit & Loss, Discount, Markup',
        'Simple & Compound Interest',
        'Time & Work, Pipe & Cistern',
        'Speed, Distance & Time, Boats & Streams',
        'Permutation, Combination & Probability',
        'Quadratic Equations, Mensuration',
      ],
    },
    {
      subject: 'English Language',
      color: 'text-blue-700',
      bg: 'bg-blue-50 border-blue-200',
      topics: [
        'Reading Comprehension (1–2 passages)',
        'Cloze Test (Single + Double Blank)',
        'Error Detection & Spotting',
        'Sentence Rearrangement (Para Jumbles)',
        'Fill in the Blanks (Single/Double)',
        'Phrase Replacement, Word Usage',
        'Match the Column, Vocabulary-based Questions',
      ],
    },
    {
      subject: 'General / Financial Awareness (Mains only)',
      color: 'text-orange-700',
      bg: 'bg-orange-50 border-orange-200',
      topics: [
        'Current Affairs – Last 6 months (National + International)',
        'Banking Awareness – Types of Accounts, NPA, CRAR, CBS',
        'RBI – Monetary Policy, Repo Rate, CRR, SLR',
        'Government Schemes – PMJDY, MUDRA, PM Suraksha Bima',
        'SBI – History, Products, Awards, Branches, Subsidiaries',
        'Financial Terms – Inflation, GDP, Budget, Fiscal Deficit',
        'Capital Markets, Insurance Basics, SEBI, IRDAI',
        'Important Appointments, Sports, Awards, Summits',
      ],
    },
    {
      subject: 'Computer Aptitude (Mains only)',
      color: 'text-purple-700',
      bg: 'bg-purple-50 border-purple-200',
      topics: [
        'Computer Basics – Hardware & Software',
        'MS Office – Word, Excel, PowerPoint shortcuts',
        'Internet & Networking – Browsers, URLs, IP, DNS',
        'Security – Virus, Malware, Firewall, Encryption',
        'Operating Systems – Windows, Linux basics',
        'DBMS Basics, Binary & Number Systems',
        'Input/Output Devices, Memory types',
      ],
    },
  ];

  /* ── Salary data ── */
  const salaryComponents = [
    { component: 'Basic Pay (Graduate – 2 advance increments)', amount: '₹26,730' },
    { component: 'Dearness Allowance (DA – at current rate)', amount: '~₹9,500' },
    { component: 'House Rent Allowance (HRA)', amount: '₹1,750 – ₹2,550' },
    { component: 'Transport Allowance', amount: '₹500 – ₹1,000' },
    { component: 'Special Allowance', amount: '~₹2,500' },
    { component: 'Other Allowances (Medical, Uniform etc.)', amount: '~₹2,000' },
  ];

  /* ── Year-wise vacancies ── */
  const vacancyHistory = [
    { year: '2025', vacancies: '6,589 (5,180 regular + 1,409 backlog)' },
    { year: '2023', vacancies: '8,773' },
    { year: '2021', vacancies: '5,008' },
    { year: '2020', vacancies: '8,000' },
    { year: '2019', vacancies: '8,904' },
  ];

  /* ── Books ── */
  const books = [
    { subject: 'Reasoning',    title: 'A New Approach to Reasoning',       author: 'B.S. Sijwali (Arihant)',           freeLink: '' },
    { subject: 'Reasoning',    title: 'Analytical Reasoning',              author: 'M.K. Pandey (BSC)',               freeLink: '' },
    { subject: 'Quant',        title: 'Quantitative Aptitude for Competitive Exams', author: 'R.S. Aggarwal (S.Chand)', freeLink: '' },
    { subject: 'Quant',        title: 'Data Interpretation for Banking',   author: 'Arun Sharma (TMH)',               freeLink: '' },
    { subject: 'English',      title: 'Objective English for Competitive Exams', author: 'Hari Mohan Prasad (TMH)',   freeLink: '' },
    { subject: 'English',      title: 'Word Power Made Easy',              author: 'Norman Lewis',                    freeLink: '' },
    { subject: 'Banking GK',   title: 'Banking Awareness',                 author: 'Arihant / Disha Publications',    freeLink: '' },
    { subject: 'Current Affairs', title: 'GK Digest – Monthly',           author: 'Adda247 / GK Today (online)',      freeLink: 'https://www.gktoday.in' },
  ];

  /* ── FAQs ── */
  const faqs = [
    { q: 'What is the full name of SBI Clerk post?', a: 'The official designation is Junior Associate (Customer Support & Sales) in the clerical cadre of State Bank of India. It is commonly called SBI Clerk.' },
    { q: 'What is the age limit for SBI Clerk 2026?', a: 'Candidates must be between 20 and 28 years of age. This means born not earlier than 02 April 1997 and not later than 01 April 2005 (based on 2025 cycle norms; the 2026 cut-off date will be specified in the official notification). OBC gets +3 years, SC/ST gets +5 years, PwBD gets +10 years.' },
    { q: 'Is there an interview in SBI Clerk?', a: 'No. SBI Clerk has no Group Discussion or Personal Interview. Final selection is based entirely on the marks obtained in the Mains exam (objective portion only). The Language Proficiency Test (LPT) is qualifying in nature – marks are not counted.' },
    { q: 'How is SBI Clerk different from IBPS Clerk?', a: 'SBI Clerk recruits exclusively for State Bank of India – the country\'s largest public sector bank. IBPS Clerk recruits for 11 other public sector banks. SBI Clerk exam is separate, generally tougher, and offers a slightly better salary and career growth due to SBI\'s scale and brand.' },
    { q: 'What is the SBI Clerk salary per month in 2026?', a: 'Starting basic pay is ₹26,730/month (₹24,050 + 2 advance increments for graduates). With all allowances (DA, HRA, Transport, Special Pay), gross in-hand salary is approximately ₹46,000–₹48,000/month. Pay scale: ₹24,050 – ₹64,480 with periodic increments.' },
    { q: 'Can final-year graduation students apply for SBI Clerk?', a: 'Yes. Candidates in the final year or final semester of graduation may apply provisionally. If selected, they must produce their graduation degree/marksheet by 31 December 2026 (or as specified in the 2026 notification). If you fail to do so, the provisional selection is cancelled.' },
    { q: 'Is there sectional cut-off in SBI Clerk?', a: 'Prelims: No sectional cut-off as per recent notifications – you just need to qualify overall. Mains: No sectional cut-off either; overall Mains score determines final merit. However, minimum qualifying marks in aggregate are prescribed (with 5% relaxation for SC/ST/OBC/PwBD/XS candidates).' },
    { q: 'Can I apply for SBI Clerk in more than one state?', a: 'No. Each candidate can apply for vacancies in only one state or Union Territory. You will also be required to have proficiency in the local language of the state you choose. There is no inter-circle or inter-state transfer after joining.' },
    { q: 'What is the application fee for SBI Clerk?', a: 'Based on the 2025 notification: General/EWS/OBC candidates pay ₹750. SC/ST/PwBD/Ex-Servicemen candidates are exempt from the fee. This may vary slightly in the 2026 notification.' },
    { q: 'How many attempts are allowed for SBI Clerk?', a: 'There is no official limit on the number of attempts for SBI Clerk. You can apply every year as long as you meet the age and qualification criteria on the specified cut-off date.' },
  ];

  const statusColor = (s: string) => {
    if (s === 'done') return 'bg-emerald-100 text-emerald-700';
    if (s === 'upcoming') return 'bg-blue-100 text-blue-700';
    return 'bg-surface-100 text-surface-500';
  };
  const statusLabel = (s: string) => {
    if (s === 'done') return '✓ Done';
    if (s === 'upcoming') return '🔔 Upcoming';
    return 'TBN';
  };

  return (
    <>
      {/* ── HERO BANNER ── */}
      <div className="bg-gradient-to-br from-[#0a1e4f] via-[#1a3580] to-[#1a56db] text-white">
        <div className="container-main py-10 pb-8">
          <nav className="text-sm text-blue-200 mb-5 flex items-center gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-1 opacity-50">›</span>
            <Link href="/exams" className="hover:text-white">Exams</Link>
            <span className="mx-1 opacity-50">›</span>
            <span className="text-white">SBI Clerk 2026</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full">Banking</span>
            <span className="bg-emerald-500/20 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">Central Govt</span>
            <span className="bg-orange-400/20 text-orange-200 text-xs font-semibold px-3 py-1 rounded-full">Graduate Eligible</span>
            <span className="bg-purple-400/20 text-purple-200 text-xs font-semibold px-3 py-1 rounded-full">No Interview</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-3 leading-tight">
            SBI Clerk 2026 (Junior Associate) – Complete Guide
          </h1>
          <p className="text-blue-100 leading-relaxed max-w-2xl text-base">
            The SBI Clerk exam recruits Junior Associates (Customer Support &amp; Sales) for State Bank of India branches across India. With 6,000+ vacancies annually, it is one of the most sought-after banking jobs for graduates. The 2025 cycle results are declared; the 2026 notification is expected in July/August 2026.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <a href="https://sbi.co.in/web/careers" target="_blank" rel="noopener noreferrer"
               className="text-blue-200 hover:text-white underline underline-offset-2">
              🔗 Official SBI Careers Page →
            </a>
          </div>
          {/* Quick stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
            {[
              { label: 'Conducting Body', value: 'State Bank of India' },
              { label: 'Vacancies (2025)',  value: '6,589 Posts' },
              { label: 'Age Limit',         value: '20 – 28 Years' },
              { label: 'Gross Salary',      value: '~₹46,000/month' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/15">
                <div className="text-xs text-blue-300 uppercase tracking-wide mb-1">{stat.label}</div>
                <div className="font-semibold text-white text-sm">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT + SIDEBAR ── */}
      <div className="container-main py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">

          {/* ── LEFT CONTENT ── */}
          <div className="min-w-0">

            {/* ── SECTION 1: OVERVIEW ── */}
            <section id="overview" className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">1</div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">SBI Clerk 2026 Overview</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  { label: 'Full Post Name',        value: 'Junior Associate (Customer Support & Sales)' },
                  { label: 'Conducting Body',       value: 'State Bank of India (SBI)' },
                  { label: 'Exam Level',            value: 'National (Central Government Bank)' },
                  { label: 'Frequency',             value: 'Annual (every year)' },
                  { label: 'Selection Stages',      value: 'Prelims → Mains → Language Proficiency Test (LPT)' },
                  { label: 'Interview',             value: 'No Group Discussion / No Interview' },
                  { label: 'Vacancies (2025 cycle)',value: '6,589 (5,180 regular + 1,409 backlog)' },
                  { label: 'Starting Basic Pay',    value: '₹26,730/month (gross ~₹46,000)' },
                  { label: 'Posting',               value: 'State/UT chosen at time of application – no inter-state transfer' },
                  { label: 'Age Limit',             value: '20 – 28 years (with relaxation for reserved categories)' },
                  { label: 'Qualification',         value: 'Any Graduate from recognised university' },
                  { label: 'Official Website',      value: 'sbi.co.in/web/careers' },
                ].map((item) => (
                  <div key={item.label} className="bg-surface-50 rounded-xl p-4 border border-surface-200">
                    <div className="text-xs text-surface-400 uppercase tracking-wide mb-1">{item.label}</div>
                    <div className="font-semibold text-surface-800 text-sm">{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="card p-5 bg-emerald-50 border-emerald-200">
                <p className="text-sm text-emerald-800 leading-relaxed">
                  <strong>2025 Cycle Status:</strong> The SBI Clerk 2025 Mains was held on 21 November 2025 for 6,589 vacancies. Mains results were declared on 27 February 2026 and the cutoff/scorecard was released on 10 March 2026. The Language Proficiency Test (LPT) and final joining are awaited. The next SBI Clerk 2026 notification is expected in July/August 2026.
                </p>
              </div>
            </section>

            {/* ── SECTION 2: IMPORTANT DATES ── */}
            <section id="important-dates" className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">2</div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">SBI Clerk Important Dates 2025–2026</h2>
              </div>
              <p className="text-surface-500 text-sm mb-4">The table below covers both the completed 2025 cycle and the expected 2026 cycle schedule. All confirmed dates are sourced from official SBI notifications.</p>
              <div className="overflow-x-auto rounded-xl border border-surface-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface-900 text-white">
                      <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Event</th>
                      <th className="p-3 font-semibold text-xs uppercase tracking-wide text-center">Date / Schedule</th>
                      <th className="p-3 font-semibold text-xs uppercase tracking-wide text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {importantDates.map((row, i) => (
                      <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : 'bg-white'}`}>
                        <td className="p-3 text-surface-800 font-medium">{row.event}</td>
                        <td className="p-3 text-center text-surface-600">{row.date}</td>
                        <td className="p-3 text-center">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusColor(row.status)}`}>
                            {statusLabel(row.status)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-surface-400 mt-3">
                ⚠ TBN = To Be Notified. All 2026 dates are tentative based on the previous year pattern. Always verify at <a href="https://sbi.co.in/web/careers" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">sbi.co.in/web/careers</a>.
              </p>
            </section>

            {/* ── SECTION 3: ELIGIBILITY ── */}
            <section id="eligibility" className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">3</div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">SBI Clerk 2026 Eligibility Criteria</h2>
              </div>

              {/* Nationality */}
              <div className="card p-5 mb-4">
                <h3 className="font-heading font-semibold text-surface-800 mb-3 text-base flex items-center gap-2">
                  <span className="text-xl">🌏</span> Nationality
                </h3>
                <p className="text-sm text-surface-600 leading-relaxed">
                  Candidates must be: (a) a Citizen of India, or (b) a subject of Nepal/Bhutan, or (c) a Tibetan Refugee who came to India before 1 January 1962, or (d) a Person of Indian Origin (PIO) who migrated from specific countries with the intent of permanent settlement. Non-Indian candidates must hold a Certificate of Eligibility issued by the Government of India.
                </p>
              </div>

              {/* Age limit */}
              <div className="card p-5 mb-4">
                <h3 className="font-heading font-semibold text-surface-800 mb-3 text-base flex items-center gap-2">
                  <span className="text-xl">🎂</span> Age Limit
                </h3>
                <p className="text-sm text-surface-600 mb-4">Minimum 20 years — Maximum 28 years (as on the cut-off date specified in the notification, typically 1 April of the application year).</p>
                <div className="overflow-x-auto rounded-lg border border-surface-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface-900 text-white">
                        <th className="text-left p-3 text-xs uppercase tracking-wide font-semibold">Category</th>
                        <th className="p-3 text-xs uppercase tracking-wide font-semibold text-center">Age Relaxation</th>
                        <th className="p-3 text-xs uppercase tracking-wide font-semibold text-center">Effective Upper Age</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { cat: 'General / EWS',                 relax: 'No relaxation',  max: '28 years' },
                        { cat: 'OBC (Non-Creamy Layer)',        relax: '+3 years',        max: '31 years' },
                        { cat: 'SC / ST',                       relax: '+5 years',        max: '33 years' },
                        { cat: 'PwBD (General)',                relax: '+10 years',       max: '38 years' },
                        { cat: 'PwBD (OBC)',                   relax: '+13 years',       max: '41 years' },
                        { cat: 'PwBD (SC/ST)',                 relax: '+15 years',       max: '43 years' },
                        { cat: 'Ex-Servicemen',                relax: 'Actual service + 3 yrs', max: 'As applicable' },
                        { cat: 'Widows / Divorced Women (Gen)', relax: '+9 years',       max: '37 years' },
                      ].map((row, i) => (
                        <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                          <td className="p-3 font-medium text-surface-800">{row.cat}</td>
                          <td className="p-3 text-center text-surface-600">{row.relax}</td>
                          <td className="p-3 text-center font-semibold text-emerald-700">{row.max}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Educational Qualification */}
              <div className="card p-5 mb-4">
                <h3 className="font-heading font-semibold text-surface-800 mb-3 text-base flex items-center gap-2">
                  <span className="text-xl">🎓</span> Educational Qualification
                </h3>
                <ul className="space-y-2 text-sm text-surface-600">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>A <strong>Bachelor's Degree in any discipline</strong> from a recognised university or its equivalent qualification recognised by the Central Government.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>Candidates with an <strong>Integrated Dual Degree (IDD)</strong> certificate must ensure the date of passing is on or before the application deadline.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span><strong>Final year / semester students</strong> may also apply provisionally. If selected, they must produce proof of graduation by 31 December 2026.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>Candidates must also have <strong>proficiency in reading, writing, and speaking the local language</strong> of the state they apply for.</li>
                </ul>
              </div>

              {/* Special note for apprentices */}
              <div className="card p-4 bg-amber-50 border-amber-200">
                <p className="text-sm text-amber-800">
                  <strong>🎯 Bonus for SBI Apprentices:</strong> Trained SBI Apprentices who completed at least 1 year of branch experience (start date on or after 01 January 2022, with satisfactory conduct) are eligible for 2.5% bonus marks (5 out of 200) in the Mains Examination.
                </p>
              </div>
            </section>

            {/* ── SECTION 4: VACANCIES ── */}
            <section id="vacancies" className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">4</div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">SBI Clerk Vacancies – Trend & Distribution</h2>
              </div>
              <div className="card p-5 bg-primary-50 border-primary-200 mb-6">
                <p className="text-sm text-primary-800">
                  <strong>2026 Vacancy:</strong> The exact vacancy count for SBI Clerk 2026 will be announced with the official notification in July/August 2026. Based on the 5-year trend, expect 6,000–9,000 vacancies, distributed state-wise and category-wise across SBI circles.
                </p>
              </div>
              <h3 className="font-heading font-semibold text-surface-800 mb-3">Year-wise Vacancy Trend</h3>
              <div className="overflow-x-auto rounded-xl border border-surface-200 mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface-900 text-white">
                      <th className="text-left p-3 text-xs uppercase tracking-wide font-semibold">Recruitment Year</th>
                      <th className="p-3 text-xs uppercase tracking-wide font-semibold text-center">Total Vacancies</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vacancyHistory.map((row, i) => (
                      <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                        <td className="p-3 font-medium text-surface-800">{row.year}</td>
                        <td className="p-3 text-center font-semibold text-emerald-700">{row.vacancies}</td>
                      </tr>
                    ))}
                    <tr className="border-t border-primary-200 bg-primary-50">
                      <td className="p-3 font-bold text-primary-800">2026 (Expected)</td>
                      <td className="p-3 text-center font-bold text-primary-700">To be notified (TBN)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-surface-500">State-wise and category-wise (UR/OBC/SC/ST/EWS) vacancy breakdown will be published in the official notification PDF. Top states with highest vacancies historically include Uttar Pradesh, Maharashtra, Tamil Nadu, Karnataka, and West Bengal.</p>
            </section>

            {/* ── SECTION 5: SELECTION PROCESS ── */}
            <section id="selection" className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">5</div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">SBI Clerk Selection Process</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {[
                  { stage: '1', name: 'Preliminary Exam', desc: '100 questions · 100 marks · 1 hour (sectional timing) · Qualifying in nature', color: 'border-blue-300 bg-blue-50', badge: 'Qualifying Only', badgeColor: 'bg-amber-100 text-amber-700' },
                  { stage: '2', name: 'Mains Exam',       desc: '190 questions · 200 marks · 2 hrs 40 min · Decides final merit & cut-off', color: 'border-primary-300 bg-primary-50', badge: 'Merit Deciding', badgeColor: 'bg-emerald-100 text-emerald-700' },
                  { stage: '3', name: 'Language Proficiency Test (LPT)', desc: 'For candidates who have not studied the opted local language in Class 10/12. Qualifying in nature.', color: 'border-purple-300 bg-purple-50', badge: 'Qualifying Only', badgeColor: 'bg-amber-100 text-amber-700' },
                ].map((s) => (
                  <div key={s.stage} className={`card p-5 ${s.color}`}>
                    <div className="text-xs font-semibold uppercase tracking-wide text-surface-400 mb-1">Stage {s.stage}</div>
                    <div className="text-lg font-heading font-bold text-surface-800 mb-2">{s.name}</div>
                    <p className="text-xs text-surface-500 mb-3">{s.desc}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${s.badgeColor}`}>{s.badge}</span>
                  </div>
                ))}
              </div>
              <div className="card p-4 bg-surface-50 border-surface-200">
                <p className="text-sm text-surface-700 leading-relaxed">
                  <strong>Key Points:</strong> The Prelims exam only shortlists candidates for Mains — Prelims marks are NOT included in the final merit. The final selection is based solely on Mains performance. There is no interview, group discussion, or physical test. Posting is state-specific with no inter-state transfer.
                </p>
              </div>
            </section>

            {/* ── SECTION 6: EXAM PATTERN ── */}
            <section id="exam-pattern" className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">6</div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">SBI Clerk 2026 Exam Pattern</h2>
              </div>

              {/* Prelims */}
              <h3 className="font-heading font-semibold text-surface-800 text-lg mb-3">Phase I – Preliminary Exam (Qualifying)</h3>
              <div className="overflow-x-auto rounded-xl border border-surface-200 mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface-900 text-white">
                      <th className="text-left p-3 text-xs uppercase tracking-wide font-semibold">Section</th>
                      <th className="p-3 text-xs uppercase tracking-wide font-semibold text-center">Questions</th>
                      <th className="p-3 text-xs uppercase tracking-wide font-semibold text-center">Marks</th>
                      <th className="p-3 text-xs uppercase tracking-wide font-semibold text-center">Duration</th>
                      <th className="p-3 text-xs uppercase tracking-wide font-semibold text-center">Negative</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prelimsPattern.map((row, i) => (
                      <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                        <td className="p-3 font-medium text-surface-800">{row.section}</td>
                        <td className="p-3 text-center text-surface-600">{row.questions}</td>
                        <td className="p-3 text-center font-semibold text-surface-800">{row.marks}</td>
                        <td className="p-3 text-center text-surface-600">{row.duration}</td>
                        <td className="p-3 text-center text-red-500 text-xs font-semibold">{row.negative}</td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-surface-300 bg-surface-900 text-white">
                      <td className="p-3 font-bold">Total</td>
                      <td className="p-3 text-center font-bold">100</td>
                      <td className="p-3 text-center font-bold">100</td>
                      <td className="p-3 text-center font-bold">1 hour</td>
                      <td className="p-3 text-center text-xs">Sectional Timing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card p-3 bg-amber-50 border-amber-200 mb-8">
                <p className="text-xs text-amber-800"><strong>⚠ Important:</strong> Each section in Prelims has its own time limit (20 minutes each). You cannot move to the next section before the time is up. There is NO sectional cut-off — you must qualify overall to proceed to Mains.</p>
              </div>

              {/* Mains */}
              <h3 className="font-heading font-semibold text-surface-800 text-lg mb-3">Phase II – Mains Exam (Merit Deciding)</h3>
              <div className="overflow-x-auto rounded-xl border border-surface-200 mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface-900 text-white">
                      <th className="text-left p-3 text-xs uppercase tracking-wide font-semibold">Section</th>
                      <th className="p-3 text-xs uppercase tracking-wide font-semibold text-center">Questions</th>
                      <th className="p-3 text-xs uppercase tracking-wide font-semibold text-center">Marks</th>
                      <th className="p-3 text-xs uppercase tracking-wide font-semibold text-center">Duration</th>
                      <th className="p-3 text-xs uppercase tracking-wide font-semibold text-center">Negative</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mainsPattern.map((row, i) => (
                      <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                        <td className="p-3 font-medium text-surface-800">{row.section}</td>
                        <td className="p-3 text-center text-surface-600">{row.questions}</td>
                        <td className="p-3 text-center font-semibold text-surface-800">{row.marks}</td>
                        <td className="p-3 text-center text-surface-600">{row.duration}</td>
                        <td className="p-3 text-center text-red-500 text-xs font-semibold">{row.negative}</td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-surface-300 bg-surface-900 text-white">
                      <td className="p-3 font-bold">Total</td>
                      <td className="p-3 text-center font-bold">190</td>
                      <td className="p-3 text-center font-bold">200</td>
                      <td className="p-3 text-center font-bold">2 hrs 40 min</td>
                      <td className="p-3 text-center text-xs">Sectional Timing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card p-3 bg-emerald-50 border-emerald-200">
                <p className="text-xs text-emerald-800"><strong>✅ Final Merit:</strong> Based only on Mains marks (out of 200). No interview. No descriptive test. Mains is the only stage that determines your selection. Language choice: Hindi, English, or a regional language (except for the English section).</p>
              </div>
            </section>

            {/* ── SECTION 7: SYLLABUS ── */}
            <section id="syllabus" className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">7</div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">SBI Clerk 2026 Detailed Syllabus</h2>
              </div>
              <p className="text-surface-500 text-sm mb-5">SBI does not publish an official topic-wise syllabus. The topics below are based on a thorough analysis of the past 5 years of Prelims and Mains question papers.</p>
              <div className="space-y-3">
                {syllabus.map((sub) => (
                  <details key={sub.subject} className={`card border rounded-xl overflow-hidden ${sub.bg}`}>
                    <summary className="flex items-center justify-between cursor-pointer p-4 gap-3 select-none">
                      <div className="flex items-center gap-3">
                        <span className={`font-heading font-semibold text-base ${sub.color}`}>{sub.subject}</span>
                        <span className="text-xs text-surface-400">({sub.topics.length} topics)</span>
                      </div>
                      <svg className="w-4 h-4 text-surface-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4 pt-1 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {sub.topics.map((t) => (
                        <div key={t} className="flex items-start gap-2 text-sm text-surface-700">
                          <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                          {t}
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* ── SECTION 8: SALARY ── */}
            <section id="salary" className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">8</div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">SBI Clerk Salary & Benefits 2026</h2>
              </div>
              <div className="card p-5 mb-5 border-emerald-200 bg-emerald-50">
                <div className="text-xs text-emerald-600 uppercase tracking-wide font-semibold mb-1">Approximate Gross Monthly Salary</div>
                <div className="text-3xl font-heading font-bold text-emerald-700">~₹46,000</div>
                <div className="text-sm text-emerald-600 mt-1">Starting salary (new joinees in metro cities)</div>
              </div>
              <div className="overflow-x-auto rounded-xl border border-surface-200 mb-5">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface-900 text-white">
                      <th className="text-left p-3 text-xs uppercase tracking-wide font-semibold">Pay Component</th>
                      <th className="p-3 text-xs uppercase tracking-wide font-semibold text-center">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salaryComponents.map((row, i) => (
                      <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                        <td className="p-3 text-surface-700">{row.component}</td>
                        <td className="p-3 text-center font-semibold text-emerald-700">{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h3 className="font-heading font-semibold text-surface-800 mb-3 text-base">Pay Scale Progression</h3>
              <p className="text-sm text-surface-600 mb-4">Pay scale: <strong>₹24,050 – ₹64,480</strong> with periodic increments.</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                {[
                  { years: 'After 3 yrs', pay: '₹28,070' },
                  { years: 'After 6 yrs', pay: '₹33,020' },
                  { years: 'After 10 yrs', pay: '₹41,020' },
                  { years: 'After 17 yrs', pay: '₹57,400' },
                ].map((p) => (
                  <div key={p.years} className="bg-surface-50 rounded-xl p-3 border border-surface-200 text-center">
                    <div className="text-xs text-surface-400 mb-1">{p.years}</div>
                    <div className="font-bold text-surface-800 text-sm">{p.pay}</div>
                  </div>
                ))}
              </div>
              <h3 className="font-heading font-semibold text-surface-800 mb-3 text-base">Additional Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {['Provident Fund (PF) & Gratuity', 'Pension (NPS scheme)', 'Medical Aid for self and dependents', 'Concessional home loan & car loan', 'Leave Fare Concession (LFC)', 'Subsidised staff canteen', 'Annual performance bonus', 'Clear promotion path to Officer grade via internal exams'].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm text-surface-700 bg-surface-50 rounded-lg px-3 py-2 border border-surface-100">
                    <span className="text-emerald-500 text-base">✓</span> {b}
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION 9: HOW TO APPLY ── */}
            <section id="apply" className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">9</div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">How to Apply for SBI Clerk 2026</h2>
              </div>
              <div className="card p-4 bg-amber-50 border-amber-200 mb-5">
                <p className="text-sm text-amber-800"><strong>⚠ Note:</strong> The 2026 application window will open after the official notification is released (expected July/August 2026). The steps below are based on the standard SBI Clerk online application process.</p>
              </div>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Visit Official Website', desc: 'Go to sbi.co.in/web/careers and click on "Recruitment of Junior Associates (Customer Support & Sales)" under Current Openings.' },
                  { step: '2', title: 'New Registration', desc: 'Click "Apply Online" → "New Registration". Enter your name, mobile number, and email ID. Save the Registration Number and Password sent to your phone/email.' },
                  { step: '3', title: 'Fill Application Form', desc: 'Log in and fill the application form carefully. Select your preferred State/UT (you can choose only ONE). Fill personal, educational, and category details accurately.' },
                  { step: '4', title: 'Upload Documents', desc: 'Upload scanned photo (20–50 KB, JPG), signature (10–20 KB, JPG), left thumb impression, and hand-written declaration (as per specification in the notification).' },
                  { step: '5', title: 'Pay Application Fee', desc: 'General/OBC/EWS: ₹750 (approximate — confirm in official notification). SC/ST/PwBD/XS: Exempt. Pay via internet banking, debit/credit card, or UPI.' },
                  { step: '6', title: 'Submit & Print', desc: 'Review all details before final submission. After submission, take a printout of the application form and fee payment receipt. Keep them safe for future reference.' },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4 card p-5">
                    <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center text-white font-heading font-bold text-base flex-shrink-0">{s.step}</div>
                    <div>
                      <div className="font-heading font-semibold text-surface-800 mb-1">{s.title}</div>
                      <p className="text-sm text-surface-600">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION 10: STUDY PLAN ── */}
            <section id="study-plan" className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">10</div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">SBI Clerk 6-Month Study Plan</h2>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary-200"></div>
                {[
                  { month: 'Month 1', title: 'Build Your Foundation', tasks: ['Reasoning: Syllogisms, Inequalities, Coding-Decoding', 'Quant: Number System, Percentages, Ratio & Proportion, Simplification', 'English: Grammar rules, 10 new words daily from Word Power Made Easy', 'Start reading The Hindu or Economic Times for 30 min/day'] },
                  { month: 'Month 2', title: 'Core Concepts – Deep Dive', tasks: ['Reasoning: Seating Arrangement (Linear & Circular), Blood Relations', 'Quant: Data Interpretation (Bar, Line, Pie Charts)', 'English: Reading Comprehension practice (1 passage/day)', 'GK: Start making notes on Banking Awareness — types of accounts, RBI functions'] },
                  { month: 'Month 3', title: 'Advanced Topics', tasks: ['Reasoning: Floor puzzles, Complex seating, Input-Output', 'Quant: Caselets, Time & Work, Probability, Quadratic Equations', 'English: Para Jumbles, Cloze Tests, Error Detection', 'GK: Current Affairs (last 3 months), Government schemes'] },
                  { month: 'Month 4', title: 'Sectional Tests & Speed Building', tasks: ['Take 2 sectional tests per day (rotate sections)', 'Focus on accuracy first, then increase speed', 'Computer Aptitude: Basics, MS Office, Networking (for Mains)', 'GK: SBI-specific knowledge — history, subsidiaries, products'] },
                  { month: 'Month 5', title: 'Full Mock Tests', tasks: ['2 full Prelims mock tests per week with analysis', '1 full Mains mock test per week', 'Identify weak sections and revise them immediately', 'Current Affairs: Last 6 months compilation'] },
                  { month: 'Month 6', title: 'Final Revision & Exam Ready', tasks: ['Daily mocks and PYQs (Last 5 years) — simulate actual exam conditions', 'Revise all Banking Awareness and GK notes', 'Focus on high-scoring topics: GFA, Reasoning puzzles', 'Sleep well, manage stress — consistency beats cramming'] },
                ].map((m) => (
                  <div key={m.month} className="relative mb-6 pl-8">
                    <div className="absolute -left-3 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs font-bold">{m.month.split(' ')[1]}</div>
                    <div className="card p-5">
                      <div className="font-heading font-semibold text-surface-800 mb-3">{m.month}: {m.title}</div>
                      <ul className="space-y-1.5">
                        {m.tasks.map((t) => (
                          <li key={t} className="flex items-start gap-2 text-sm text-surface-600">
                            <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>{t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION 11: BEST BOOKS ── */}
            <section id="books" className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">11</div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">Best Books for SBI Clerk 2026</h2>
              </div>
              <div className="overflow-x-auto rounded-xl border border-surface-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface-900 text-white">
                      <th className="text-left p-3 text-xs uppercase tracking-wide font-semibold">Subject</th>
                      <th className="text-left p-3 text-xs uppercase tracking-wide font-semibold">Book Title</th>
                      <th className="text-left p-3 text-xs uppercase tracking-wide font-semibold">Author / Publisher</th>
                      <th className="p-3 text-xs uppercase tracking-wide font-semibold text-center">Free Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {books.map((b, i) => (
                      <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                        <td className="p-3"><span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full font-semibold">{b.subject}</span></td>
                        <td className="p-3 font-medium text-surface-800">{b.title}</td>
                        <td className="p-3 text-surface-500 text-xs">{b.author}</td>
                        <td className="p-3 text-center">
                          {b.freeLink ? (
                            <a href={b.freeLink} target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-700 text-xs font-medium">Free →</a>
                          ) : (
                            <span className="text-surface-300 text-xs">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── SECTION 12: EXPERT TIPS ── */}
            <section id="tips" className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">12</div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">Expert Tips to Crack SBI Clerk</h2>
              </div>
              <div className="space-y-4">
                {[
                  { num: '1', tip: 'GFA is your biggest weapon in Mains.', detail: 'General/Financial Awareness carries 50 marks in Mains and takes the least time to answer. Aspirants who score 40+ in GFA have a huge advantage. Invest 20–25% of your total study time here.' },
                  { num: '2', tip: 'Prelims is a speed game — not a knowledge game.', detail: '100 marks in 60 minutes means 36 seconds per question. Practise daily with a timer. Master simplification, basic reasoning, and grammar rules — these are fast scoring and high in frequency.' },
                  { num: '3', tip: 'Puzzles and DI decide your Mains rank.', detail: 'Reasoning Puzzles and Data Interpretation together carry 50–60% of the Mains questions. Solve 3 new puzzles and 2 DI sets every single day. No shortcuts here — only consistent practice.' },
                  { num: '4', tip: 'Never skip negative marking calculations.', detail: 'SBI Clerk deducts 0.25 marks per wrong answer. A wrong attempt in Prelims where you had 33% chance costs you 0.25 marks. Skip questions where you have no idea — do NOT guess blindly.' },
                  { num: '5', tip: 'Solving previous year papers is non-negotiable.', detail: 'SBI Clerk repeats question patterns heavily year after year. Solving 5 years of Prelims and Mains PYQs will reveal exactly which topics appear most and what the difficulty level is. Do it before month 4.' },
                  { num: '6', tip: 'Choose your state wisely.', detail: 'You apply for vacancies in ONE state. States like Uttar Pradesh, Maharashtra, and Tamil Nadu typically have the most vacancies but also the highest competition. Smaller states may have lower competition. Research the state-wise vacancy distribution before applying.' },
                ].map((t) => (
                  <div key={t.num} className="card p-5 flex gap-4">
                    <div className="w-10 h-10 bg-accent-100 text-accent-600 rounded-lg flex items-center justify-center font-heading font-bold text-base flex-shrink-0">{t.num}</div>
                    <div>
                      <div className="font-heading font-semibold text-surface-800 mb-1">{t.tip}</div>
                      <p className="text-sm text-surface-600 leading-relaxed">{t.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION 13: FAQs ── */}
            <section id="faq" className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">13</div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <details key={i} className="card border border-surface-200 rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between cursor-pointer p-4 gap-4 select-none">
                      <span className="font-heading font-semibold text-surface-800 text-sm pr-2">{faq.q}</span>
                      <svg className="w-4 h-4 text-surface-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4 pt-1 text-sm text-surface-600 leading-relaxed border-t border-surface-100">{faq.a}</div>
                  </details>
                ))}
              </div>
            </section>

            {/* Disclaimer */}
            <div className="card p-5 bg-surface-50 border-surface-200 text-xs text-surface-400 leading-relaxed">
              <strong className="text-surface-600">Disclaimer:</strong> The information on this page is compiled from official SBI notifications (Advt. No. CRPD/CR/2025-26/06) and trusted educational sources. All 2026 dates are tentative based on the previous year pattern. Always verify latest details at the official SBI Careers page: <a href="https://sbi.co.in/web/careers" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">sbi.co.in/web/careers</a>. TaiyarHo is not affiliated with SBI.
            </div>
          </div>

          {/* ── SIDEBAR ── */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              {/* TOC */}
              <div className="card p-5">
                <div className="font-heading font-semibold text-surface-800 text-sm uppercase tracking-wide mb-3">On This Page</div>
                <nav className="space-y-0.5">
                  {toc.map((s) => (
                    <a key={s.id} href={`#${s.id}`} className="block py-1.5 px-3 rounded-lg text-sm text-surface-500 hover:text-primary-500 hover:bg-primary-50 transition-colors">
                      {s.label}
                    </a>
                  ))}
                </nav>
              </div>
              {/* Official Website */}
              <div className="card p-5 bg-primary-50 border-primary-200">
                <div className="font-heading font-semibold text-primary-800 text-sm mb-2">Official Website</div>
                <a href="https://sbi.co.in/web/careers" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 break-all hover:text-primary-800">
                  sbi.co.in/web/careers →
                </a>
              </div>
              {/* Eligibility Checker CTA */}
              <div className="card p-5 bg-emerald-50 border-emerald-200">
                <div className="font-heading font-semibold text-emerald-800 text-sm mb-2">Check Your Eligibility</div>
                <p className="text-xs text-emerald-700 mb-3">Use our free tool to instantly check if you qualify for SBI Clerk 2026.</p>
                <Link href="/tools/age-calculator" className="block text-center text-xs font-semibold bg-emerald-600 text-white px-3 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                  Check Eligibility →
                </Link>
              </div>
              {/* Related Banking Exams */}
              <div className="card p-5">
                <div className="font-heading font-semibold text-surface-800 text-sm mb-3">Related Banking Exams</div>
                <div className="space-y-1.5">
                  {[
                    { name: 'SBI PO', slug: 'sbi-po' },
                    { name: 'IBPS PO', slug: 'ibps-po' },
                    { name: 'IBPS Clerk', slug: 'ibps-clerk' },
                    { name: 'RBI Grade B', slug: 'rbi-grade-b' },
                    { name: 'IBPS RRB', slug: 'ibps-rrb' },
                  ].map((e) => (
                    <Link key={e.slug} href={`/exams/${e.slug}`} className="block text-sm text-primary-500 hover:text-primary-700 hover:underline">{e.name} →</Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

// ─── UGC NET 2026 RICH PAGE ──────────────────────────────────────────────────
function UgcNetPage({ exam }: { exam: any }) {
  const toc = [
    { id: 'overview', label: 'Overview' },
    { id: 'important-dates', label: 'Important Dates' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'exam-pattern', label: 'Exam Pattern' },
    { id: 'syllabus', label: 'Paper 1 Syllabus' },
    { id: 'application', label: 'How to Apply' },
    { id: 'study-plan', label: 'Study Plan' },
    { id: 'books', label: 'Best Books' },
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
          <span className="text-surface-800">UGC NET</span>
        </nav>

        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          {/* ── MAIN CONTENT ── */}
          <div>
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="badge badge-primary">Teaching</span>
                <span className="badge badge-green">Central</span>
                <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 rounded-full px-2.5 py-0.5 text-xs font-medium">🔔 Notification Out</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-heading font-bold text-surface-900 mb-3">
                UGC NET 2026 – Complete Guide (June Session)
              </h1>
              <p className="text-surface-500 leading-relaxed">
                UGC NET (National Eligibility Test) is India's most prestigious national exam for eligibility as <strong>Assistant Professor</strong> and for the award of <strong>Junior Research Fellowship (JRF)</strong> in Indian universities and colleges. Conducted by NTA twice a year (June &amp; December), UGC NET is the gateway to a career in academia and research across 85 subjects. The June 2026 notification has been released on 29 April 2026 — applications are now open.
              </p>
              <a href="https://ugcnet.nta.nic.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary-500 hover:text-primary-600 mt-3 font-medium">
                Official Website: ugcnet.nta.nic.in →
              </a>
            </div>

            {/* ── SECTION 1: OVERVIEW STATS ── */}
            <div id="overview" className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
              {[
                { label: 'Conducting Body', value: 'NTA (for UGC)' },
                { label: 'Frequency', value: 'Twice a Year' },
                { label: 'Subjects', value: '85 Subjects' },
                { label: 'JRF Fellowship', value: '₹37,000/month' },
              ].map((item) => (
                <div key={item.label} className="bg-surface-50 rounded-xl p-4 border border-surface-200">
                  <div className="text-xs text-surface-400 uppercase tracking-wide">{item.label}</div>
                  <div className={`font-semibold mt-1 text-sm ${item.label === 'JRF Fellowship' ? 'text-emerald-600' : 'text-surface-800'}`}>{item.value}</div>
                </div>
              ))}
            </div>

            {/* ── SECTION 2: IMPORTANT DATES ── */}
            <section id="important-dates" className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">1</div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">UGC NET 2026 Important Dates</h2>
              </div>

              {/* June 2026 Session — ACTIVE NOW */}
              <div className="card p-5 mb-4 border-primary-200 bg-primary-50">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">June 2026 Session — NOW OPEN</span>
                </div>
                <div className="overflow-x-auto rounded-xl border border-primary-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-primary-700 text-white">
                        <th className="text-left p-3 font-semibold">Event</th>
                        <th className="text-left p-3 font-semibold">Date</th>
                        <th className="text-left p-3 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { event: 'Notification Released', date: '29 April 2026', status: '✅ Done' },
                        { event: 'Application Window Opens', date: '29 April 2026', status: '✅ Open Now' },
                        { event: 'Last Date to Apply', date: '20 May 2026', status: '⏳ Active' },
                        { event: 'Application Correction Window', date: '22–24 May 2026', status: '🔜 Upcoming' },
                        { event: 'City Intimation Slip', date: '~June 12, 2026', status: '🔜 Upcoming' },
                        { event: 'Admit Card Release', date: '~June 15, 2026', status: '🔜 Upcoming' },
                        { event: 'Exam Dates', date: '22–30 June 2026', status: '🔜 Upcoming' },
                        { event: 'Provisional Answer Key', date: 'July 2026 (TBN)', status: 'TBN' },
                        { event: 'Result Declaration', date: 'August 2026 (TBN)', status: 'TBN' },
                        { event: 'e-Certificate Issuance', date: 'September 2026 (TBN)', status: 'TBN' },
                      ].map((row, i) => (
                        <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : 'bg-white'}`}>
                          <td className="p-3 font-medium text-surface-800">{row.event}</td>
                          <td className="p-3 text-surface-700">{row.date}</td>
                          <td className="p-3">
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${row.status.includes('✅') ? 'bg-emerald-100 text-emerald-700' : row.status === 'TBN' ? 'bg-surface-100 text-surface-500' : 'bg-amber-100 text-amber-700'}`}>{row.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-primary-700 mt-3 font-medium">⚠ TBN = To Be Notified. Always verify exact dates on the official site: ugcnet.nta.nic.in</p>
              </div>

              {/* December 2025 Session — Completed */}
              <div className="card p-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-surface-600 text-white text-xs font-bold px-3 py-1 rounded-full">December 2025 Session — Completed</span>
                </div>
                <div className="overflow-x-auto rounded-xl border border-surface-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface-800 text-white">
                        <th className="text-left p-3 font-semibold">Event</th>
                        <th className="text-left p-3 font-semibold">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { event: 'Notification Released', date: '7 October 2025' },
                        { event: 'Application Window', date: '7 October – 7 November 2025' },
                        { event: 'Application Correction', date: '10–12 November 2025' },
                        { event: 'Exam Dates', date: '31 Dec 2025 – 7 Jan 2026' },
                        { event: 'Provisional Answer Key', date: '14 January 2026' },
                        { event: 'Answer Key Challenge', date: '14–17 January 2026' },
                        { event: 'Result Declared', date: '4 February 2026' },
                        { event: 'e-Certificate Issued', date: '23 April 2026' },
                      ].map((row, i) => (
                        <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : 'bg-white'}`}>
                          <td className="p-3 font-medium text-surface-800">{row.event}</td>
                          <td className="p-3 text-emerald-700 font-medium">{row.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ── SECTION 3: ELIGIBILITY ── */}
            <section id="eligibility" className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">2</div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">Eligibility Criteria</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {[
                  { label: 'Nationality', value: 'Indian National' },
                  { label: 'Educational Qualification', value: "Master's Degree (55% for General/EWS, 50% for OBC-NCL/SC/ST/PwBD/Transgender)" },
                  { label: 'Age Limit – JRF', value: '30 years (as of 01 June 2026)' },
                  { label: 'Age Limit – Assistant Professor / PhD', value: 'No upper age limit' },
                ].map((item) => (
                  <div key={item.label} className="bg-surface-50 rounded-xl p-4 border border-surface-200">
                    <div className="text-xs text-surface-400 uppercase tracking-wide mb-1">{item.label}</div>
                    <div className="font-semibold text-sm text-surface-800">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="card p-5">
                <h3 className="font-heading font-semibold text-surface-800 mb-3">Age Relaxation (for JRF only)</h3>
                <div className="overflow-x-auto rounded-xl border border-surface-200">
                  <table className="w-full text-sm">
                    <thead className="bg-surface-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-xs uppercase text-surface-600">Category</th>
                        <th className="text-left p-3 font-semibold text-xs uppercase text-surface-600">Relaxation</th>
                        <th className="text-left p-3 font-semibold text-xs uppercase text-surface-600">Effective Age Limit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { cat: 'OBC – Non Creamy Layer', rel: '3 Years', age: '33 Years' },
                        { cat: 'SC / ST', rel: '5 Years', age: '35 Years' },
                        { cat: 'PwBD (40%+ disability)', rel: '10 Years', age: '40 Years' },
                        { cat: 'Women candidates', rel: '5 Years', age: '35 Years' },
                        { cat: 'Ex-Servicemen (ESM)', rel: '5 Years', age: '35 Years' },
                        { cat: 'Transgender (OBC/SC/ST)', rel: 'Applicable as per category', age: 'As applicable' },
                      ].map((row, i) => (
                        <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : 'bg-white'}`}>
                          <td className="p-3 font-medium text-surface-800">{row.cat}</td>
                          <td className="p-3 text-primary-700 font-semibold">{row.rel}</td>
                          <td className="p-3 text-emerald-700 font-semibold">{row.age}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-surface-500 mt-3">Note: Total age relaxation cannot exceed 5 years under any combination of grounds.</p>
              </div>

              <div className="card p-5 mt-3 bg-amber-50 border-amber-200">
                <h3 className="font-heading font-semibold text-amber-800 mb-2 text-sm">✅ Qualification Note</h3>
                <ul className="space-y-1.5 text-sm text-amber-900">
                  <li>• Candidates appearing in the final year of their Master's degree are also eligible to apply (provisionally).</li>
                  <li>• Candidates with a 4-year Bachelor's Degree (FYUP) can also apply for PhD admission subject to UGC regulations.</li>
                  <li>• No limit on the number of attempts — you can appear as many times as needed.</li>
                  <li>• JRF certificate is valid for 3 years; Assistant Professor certificate is valid for lifetime.</li>
                </ul>
              </div>
            </section>

            {/* ── SECTION 4: EXAM PATTERN ── */}
            <section id="exam-pattern" className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">3</div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">UGC NET Exam Pattern 2026</h2>
              </div>
              <p className="text-surface-600 text-sm mb-4">UGC NET is conducted in <strong>CBT (Computer-Based Test)</strong> mode in a single sitting of 3 hours. Both papers are compulsory. There is <strong className="text-emerald-700">no negative marking</strong>.</p>

              <div className="overflow-x-auto rounded-xl border border-surface-200 mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface-800 text-white">
                      <th className="text-left p-3 font-semibold">Paper</th>
                      <th className="text-center p-3 font-semibold">Questions</th>
                      <th className="text-center p-3 font-semibold">Marks</th>
                      <th className="text-center p-3 font-semibold">Duration</th>
                      <th className="text-center p-3 font-semibold">Negative Marking</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { paper: 'Paper I – Teaching & Research Aptitude (General)', q: 50, m: 100, dur: '—', neg: 'None' },
                      { paper: 'Paper II – Subject Specific (your chosen subject)', q: 100, m: 200, dur: '—', neg: 'None' },
                      { paper: 'Total', q: 150, m: 300, dur: '3 Hours', neg: 'None' },
                    ].map((row, i) => (
                      <tr key={i} className={`border-t border-surface-100 ${i === 2 ? 'bg-surface-100 font-bold' : i % 2 === 1 ? 'bg-surface-50' : 'bg-white'}`}>
                        <td className="p-3 text-surface-800">{row.paper}</td>
                        <td className="p-3 text-center text-surface-700">{row.q}</td>
                        <td className="p-3 text-center font-semibold text-primary-700">{row.m}</td>
                        <td className="p-3 text-center text-surface-700">{row.dur}</td>
                        <td className="p-3 text-center text-emerald-700 font-semibold">{row.neg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: '💡', title: 'Mode', desc: 'Computer-Based Test (CBT) — online at exam centres' },
                  { icon: '🌐', title: 'Language', desc: 'English and Hindi (except language-specific papers)' },
                  { icon: '📋', title: 'Question Type', desc: 'Objective MCQs — 4 options, 1 correct answer' },
                ].map((item) => (
                  <div key={item.title} className="card p-4">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-heading font-semibold text-surface-800 text-sm">{item.title}</div>
                    <div className="text-xs text-surface-500 mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>

              {/* Qualifying Criteria */}
              <div className="card p-5 mt-4 bg-blue-50 border-blue-200">
                <h3 className="font-heading font-semibold text-blue-800 mb-3 text-sm">Qualifying Criteria &amp; Categories</h3>
                <div className="space-y-2 text-sm text-blue-900">
                  <div className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-blue-200 text-blue-800 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span><strong>JRF + Assistant Professor:</strong> Top merit + age ≤ 30 yrs. JRF fellowship ₹37,000/month (1st 2 years) → ₹42,000/month (next 3 years as SRF).</span></div>
                  <div className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-blue-200 text-blue-800 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span><strong>Assistant Professor + PhD Admission:</strong> Top 6% candidates per subject qualify. No age limit. Lifetime validity.</span></div>
                  <div className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-blue-200 text-blue-800 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span><strong>PhD Admission Only:</strong> Separate merit list for candidates who only seek PhD admission.</span></div>
                </div>
                <div className="mt-3 pt-3 border-t border-blue-200 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    { cat: 'General / EWS', pct: '40%' },
                    { cat: 'OBC-NCL', pct: '35%' },
                    { cat: 'SC / ST / PwBD', pct: '35%' },
                    { cat: 'Transgender', pct: '35%' },
                  ].map((c) => (
                    <div key={c.cat} className="bg-white rounded-lg p-2 border border-blue-100 text-center">
                      <div className="text-blue-500 font-bold text-base">{c.pct}</div>
                      <div className="text-blue-700">{c.cat}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-blue-600 mt-2">Minimum qualifying percentages in aggregate (Paper I + Paper II combined)</p>
              </div>
            </section>

            {/* ── SECTION 5: PAPER 1 SYLLABUS ── */}
            <section id="syllabus" className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">4</div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">UGC NET Paper 1 Syllabus (All Subjects)</h2>
              </div>
              <p className="text-surface-500 text-sm mb-4">Paper 1 is <strong>common for all candidates</strong>, regardless of their chosen subject. It tests teaching &amp; research aptitude across 10 units — 5 questions per unit.</p>

              <div className="space-y-2">
                {[
                  { unit: 1, title: 'Teaching Aptitude', topics: 'Nature, Objectives, Levels of Teaching; Teaching Methods & Aids; Characteristics of effective teachers; Evaluation Systems' },
                  { unit: 2, title: 'Research Aptitude', topics: 'Research: Meaning, Types, Methods; Steps of Research; Thesis & Article Writing; Research Ethics' },
                  { unit: 3, title: 'Reading Comprehension', topics: 'Passage-based questions — inference, vocabulary, analysis (5 questions from one passage)' },
                  { unit: 4, title: 'Communication', topics: 'Communication: Meaning, Types, Barriers; Effective Communication; Mass Communication; Digital Communication' },
                  { unit: 5, title: 'Mathematical Reasoning & Aptitude', topics: 'Number Series; Letter Series; Codes; Relationships; Venn Diagrams; Data Interpretation' },
                  { unit: 6, title: 'Logical Reasoning', topics: 'Deductive & Inductive Reasoning; Verbal and Non-verbal Arguments; Analogy; Syllogism; Fallacies' },
                  { unit: 7, title: 'Data Interpretation', topics: 'Bar Chart, Pie Chart, Line Graph, Table; Reading, Comparing & Interpreting Data' },
                  { unit: 8, title: 'Information & Communication Technology (ICT)', topics: 'ICT: Basics, Internet, Email, Social Media; Digital Divide; Cybersecurity; Digital Initiatives in Education' },
                  { unit: 9, title: 'People, Development & Environment', topics: 'Human and Environment Interaction; Climate Change; Sustainable Development; Environmental Policies; Biodiversity' },
                  { unit: 10, title: 'Higher Education System', topics: 'Governance & Institutions: UGC, NAAC, AICTE, NEP 2020; Professional Ethics; Central & State Acts; Research Institutions' },
                ].map((unit) => (
                  <details key={unit.unit} className="card p-0 overflow-hidden group">
                    <summary className="flex items-center gap-3 cursor-pointer p-4 hover:bg-surface-50 transition-colors">
                      <div className="w-7 h-7 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-xs font-bold flex-shrink-0">{unit.unit}</div>
                      <span className="font-heading font-semibold text-surface-800 flex-1">Unit {unit.unit}: {unit.title}</span>
                      <svg className="w-4 h-4 text-surface-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-surface-600 border-t border-surface-100 pt-3">
                      {unit.topics}
                    </div>
                  </details>
                ))}
              </div>

              <div className="card p-5 mt-4 bg-surface-50">
                <h3 className="font-heading font-semibold text-surface-800 text-sm mb-2">Paper 2 – Subject-Specific</h3>
                <p className="text-sm text-surface-600">Paper 2 is based on the subject you choose at the time of application. There are <strong>85 subjects</strong> available — ranging from Commerce, Economics, History, Psychology, Computer Science, Hindi, English, Environmental Science, to Law, Education, and more. The syllabus for each subject is available on the official UGC website.</p>
                <a href="https://www.ugcnetonline.in/syllabus-new.php" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary-500 hover:text-primary-600 mt-2 font-medium">Download Subject-wise Syllabus PDF →</a>
              </div>
            </section>

            {/* ── SECTION 6: APPLICATION FEE & PROCESS ── */}
            <section id="application" className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">5</div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">Application Fee &amp; How to Apply</h2>
              </div>

              <div className="card p-5 mb-4">
                <h3 className="font-heading font-semibold text-surface-800 mb-3">Application Fee (June 2026)</h3>
                <div className="overflow-x-auto rounded-xl border border-surface-200">
                  <table className="w-full text-sm">
                    <thead className="bg-surface-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-xs uppercase text-surface-600">Category</th>
                        <th className="text-right p-3 font-semibold text-xs uppercase text-surface-600">Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { cat: 'General / Unreserved (UR)', fee: '₹1,150' },
                        { cat: 'EWS / OBC – Non Creamy Layer', fee: '₹600' },
                        { cat: 'SC / ST / PwBD / Transgender', fee: '₹325' },
                      ].map((row, i) => (
                        <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : 'bg-white'}`}>
                          <td className="p-3 font-medium text-surface-800">{row.cat}</td>
                          <td className="p-3 text-right text-primary-700 font-bold">{row.fee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-surface-500 mt-2">Payment modes: Debit Card / Credit Card / Net Banking / UPI. Fee once paid is non-refundable.</p>
              </div>

              <div className="card p-5">
                <h3 className="font-heading font-semibold text-surface-800 mb-3">Step-by-Step: How to Apply Online</h3>
                <ol className="space-y-3">
                  {[
                    { step: 'Visit Official Website', desc: 'Go to ugcnet.nta.nic.in — click "Apply for UGC NET June 2026".' },
                    { step: 'New Registration', desc: 'Enter name, date of birth, mobile number, and email. Generate your application number and password.' },
                    { step: 'Fill Application Form', desc: 'Log in and complete personal details, category, educational qualifications, and choose your subject for Paper 2.' },
                    { step: 'Select Exam Cities', desc: 'Choose 4 preferred exam cities from the available list (you will be allotted one).' },
                    { step: 'Upload Documents', desc: 'Upload recent passport-size photo and scanned signature in the required format (JPG, specified dimensions).' },
                    { step: 'Pay Application Fee', desc: 'Pay online using Debit/Credit Card, Net Banking, or UPI. Download fee receipt.' },
                    { step: 'Download Confirmation', desc: 'Save the confirmation page and application PDF for future reference. NTA will not send physical documents.' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</div>
                      <div>
                        <div className="font-semibold text-sm text-surface-800">{item.step}</div>
                        <div className="text-xs text-surface-500 mt-0.5">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* ── SECTION 7: STUDY PLAN ── */}
            <section id="study-plan" className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">6</div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">UGC NET Study Plan (6-Week Crash Plan)</h2>
              </div>
              <p className="text-surface-500 text-sm mb-5">With exams starting 22 June 2026, here is a focused 6-week plan if you begin now (1 May):</p>

              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-primary-200 hidden sm:block" />
                <div className="space-y-4">
                  {[
                    { week: 'Week 1', title: 'Foundation – Paper 1 Units 1–5', desc: 'Cover Teaching Aptitude, Research Aptitude, Reading Comprehension, Communication, and Mathematical Reasoning. Solve 50 PYQs from these units.', color: 'bg-blue-500' },
                    { week: 'Week 2', title: 'Foundation – Paper 1 Units 6–10', desc: 'Cover Logical Reasoning, Data Interpretation, ICT, Environment, and Higher Education System. Complete the full Paper 1 syllabus with a mock test.', color: 'bg-purple-500' },
                    { week: 'Week 3', title: 'Paper 2 – Core Subject (Part A)', desc: 'Start your chosen subject. Cover 50% of Paper 2 syllabus. Focus on high-weightage units based on previous papers.', color: 'bg-emerald-500' },
                    { week: 'Week 4', title: 'Paper 2 – Core Subject (Part B)', desc: 'Complete remaining 50% of Paper 2. Attempt 2 full-length subject mock tests. Revise weak areas.', color: 'bg-orange-500' },
                    { week: 'Week 5', title: 'Full-Length Mock Tests', desc: 'Take one full mock test every day (Paper 1 + Paper 2). Analyse mistakes. Revise Paper 1 ICT and Higher Education — most-asked topics.', color: 'bg-red-500' },
                    { week: 'Week 6 (Pre-Exam)', title: 'Revision + PYQs', desc: 'Only revision — no new topics. Solve last 5 years\' PYQs. Keep Paper 1 sharp. Download admit card. Prepare documents.', color: 'bg-amber-500' },
                  ].map((item) => (
                    <div key={item.week} className="card p-5 sm:pl-14 relative">
                      <div className={`absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 ${item.color} rounded-xl text-white text-xs font-bold hidden sm:flex items-center justify-center`}>
                        {item.week.replace('Week ', '')}
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`sm:hidden w-6 h-6 ${item.color} rounded-lg text-white text-xs font-bold flex items-center justify-center`}>{item.week.replace('Week ', '')}</span>
                        <span className="font-heading font-semibold text-surface-800">{item.week}: {item.title}</span>
                      </div>
                      <p className="text-sm text-surface-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── SECTION 8: BEST BOOKS ── */}
            <section id="books" className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">7</div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">Best Books for UGC NET 2026</h2>
              </div>

              <div className="card overflow-hidden mb-4">
                <div className="bg-surface-800 text-white p-3 text-xs font-semibold uppercase tracking-wide">Paper 1 – Teaching &amp; Research Aptitude</div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-surface-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-xs uppercase text-surface-600">Book Title</th>
                        <th className="text-left p-3 font-semibold text-xs uppercase text-surface-600">Author / Publisher</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { title: 'NTA UGC NET/SET Paper 1 – Teaching & Research Aptitude', author: 'KVS Madaan (Pearson)' },
                        { title: 'UGC NET Paper I: Teaching & Research Aptitude', author: 'R. Gupta (Ramesh Publishing)' },
                        { title: 'Trueman\'s UGC NET Teaching & Research Aptitude', author: 'Danika Publishing' },
                        { title: 'NTA UGC NET Paper 1 (Topic-wise Solved Papers)', author: 'Arihant Experts' },
                        { title: 'UGC NET Paper 1 Official Mock Tests', author: 'NTA (Free on ugcnet.nta.nic.in)' },
                      ].map((row, i) => (
                        <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : 'bg-white'}`}>
                          <td className="p-3 font-medium text-surface-800">{row.title}</td>
                          <td className="p-3 text-surface-600">{row.author}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="card p-5 bg-surface-50">
                <h3 className="font-heading font-semibold text-surface-700 text-sm mb-2">📌 Paper 2 Book Tip</h3>
                <p className="text-sm text-surface-600">For Paper 2, use your subject's standard postgraduate-level textbooks. Supplement with subject-specific UGC NET solved papers (Arihant / CBS / Trueman's series covers most subjects). Practice minimum 3 previous year papers for your subject before the exam.</p>
              </div>
            </section>

            {/* ── SECTION 9: FAQ ── */}
            <section id="faq" className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">8</div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-2">
                {[
                  { q: 'What is the difference between UGC NET and CSIR NET?', a: 'UGC NET is for Arts, Humanities, Social Sciences, Commerce, Management and some Science subjects (85 subjects). CSIR NET is specifically for Science subjects like Life Sciences, Chemical Sciences, Physical Sciences, Mathematical Sciences, and Earth Sciences. Both are conducted by NTA and both qualify you for JRF and Assistant Professor posts.' },
                  { q: 'Is there any negative marking in UGC NET 2026?', a: 'No. There is no negative marking in UGC NET. Unanswered or unattempted questions also carry zero marks — so always attempt all questions.' },
                  { q: 'How many times can I attempt UGC NET?', a: 'There is no limit on the number of attempts. You can appear in UGC NET as many times as you wish, as long as you meet the eligibility criteria (age limit for JRF applies).' },
                  { q: 'What is the validity of the UGC NET certificate?', a: 'The JRF certificate is valid for 3 years from the date of issue. The Assistant Professor eligibility certificate is valid for lifetime.' },
                  { q: 'Can I appear in UGC NET if I am in the final year of my Master\'s degree?', a: 'Yes. Candidates appearing in the final year of their Master\'s degree are eligible to apply provisionally. However, the final qualifying certificate must be submitted to the institution at the time of appointment.' },
                  { q: 'What is the JRF fellowship amount in 2026?', a: 'JRF fellows receive ₹37,000 per month for the first two years. After two years (as Senior Research Fellow / SRF), the fellowship increases to ₹42,000 per month for the remaining period.' },
                  { q: 'How is UGC NET result calculated?', a: 'NTA declares a merit list for JRF and a separate list for Assistant Professor / PhD eligibility. For Assistant Professor: top 6% of candidates per subject who score above the minimum qualifying marks (40% for General, 35% for reserved categories) are declared qualified.' },
                ].map((item, i) => (
                  <details key={i} className="card p-0 overflow-hidden group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-surface-50 transition-colors">
                      <span className="font-heading font-semibold text-surface-800 pr-4 text-sm">{item.q}</span>
                      <svg className="w-4 h-4 text-surface-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-surface-600 leading-relaxed border-t border-surface-100 pt-3">{item.a}</div>
                  </details>
                ))}
              </div>
            </section>

            {/* Disclaimer */}
            <div className="card p-5 bg-amber-50 border-amber-200 text-sm text-amber-800">
              <strong>⚠ Disclaimer:</strong> All dates and information above are based on the official NTA notification released on 29 April 2026 and are accurate as of 30 April 2026. UGC NET notifications may include corrigendums (corrections) — always verify on <a href="https://ugcnet.nta.nic.in" target="_blank" rel="noopener noreferrer" className="underline font-medium">ugcnet.nta.nic.in</a> before taking any action.
            </div>
          </div>

          {/* ── SIDEBAR ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              {/* TOC */}
              <div className="card p-5">
                <div className="font-heading font-semibold text-surface-800 text-sm uppercase tracking-wide mb-3">On This Page</div>
                <nav className="space-y-1">
                  {toc.map((s) => (
                    <a key={s.id} href={`#${s.id}`} className="block py-1.5 px-3 rounded-lg text-sm text-surface-500 hover:text-primary-500 hover:bg-primary-50 transition-colors">{s.label}</a>
                  ))}
                </nav>
              </div>

              {/* Apply Now CTA */}
              <div className="card p-5 bg-emerald-50 border-emerald-200">
                <div className="font-heading font-semibold text-emerald-800 text-sm mb-1">🔔 Apply Now — June 2026</div>
                <p className="text-xs text-emerald-700 mb-3">Application window is open. Last date: <strong>20 May 2026</strong>.</p>
                <a href="https://ugcnet.nta.nic.in" target="_blank" rel="noopener noreferrer" className="block text-center text-xs font-semibold bg-emerald-600 text-white px-3 py-2 rounded-lg hover:bg-emerald-700 transition-colors">Apply at ugcnet.nta.nic.in →</a>
              </div>

              {/* Official Links */}
              <div className="card p-5 bg-primary-50 border-primary-200">
                <div className="text-xs font-semibold uppercase tracking-wide text-primary-400 mb-3">🔗 Official Links</div>
                <div className="space-y-2">
                  <a href="https://ugcnet.nta.nic.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 font-medium"><span>🌐</span> ugcnet.nta.nic.in (Official)</a>
                  <a href="https://cdnbbsr.s3waas.gov.in/s301eee509ee2f68dc6014898c309e86bf/uploads/2026/04/202604291863555100.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800"><span>📄</span> June 2026 Notification PDF</a>
                  <a href="https://ugcnet.nta.nic.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800"><span>📝</span> Apply Online (June 2026)</a>
                  <a href="https://www.ugcnetonline.in/syllabus-new.php" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800"><span>📚</span> Subject-wise Syllabus PDFs</a>
                </div>
              </div>

              {/* Related Teaching Exams */}
              <div className="card p-5">
                <div className="font-heading font-semibold text-surface-800 text-sm mb-3">Related Teaching Exams</div>
                <div className="space-y-1.5">
                  {[
                    { name: 'CTET 2026', slug: 'ctet' },
                    { name: 'KVS PRT/TGT/PGT', slug: 'kvs-prt-tgt-pgt' },
                    { name: 'NVS Teaching Staff', slug: 'nvs-teaching' },
                    { name: 'DSSSB TGT/PGT', slug: 'dsssb' },
                  ].map((e) => (
                    <Link key={e.slug} href={`/exams/${e.slug}`} className="block text-sm text-primary-500 hover:text-primary-700 hover:underline">{e.name} →</Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

// ─── ARMY AGNIVEER RICH PAGE ─────────────────────────────────────────────────
function ArmyAgniveerPage({ exam }: { exam: any }) {
  const toc = [
    { id: 'overview',        label: 'Overview' },
    { id: 'important-dates', label: 'Important Dates' },
    { id: 'eligibility',     label: 'Eligibility Criteria' },
    { id: 'vacancies',       label: 'Posts & Vacancies' },
    { id: 'selection',       label: 'Selection Process' },
    { id: 'exam-pattern',    label: 'CEE Exam Pattern' },
    { id: 'physical',        label: 'Physical Standards' },
    { id: 'salary',          label: 'Salary & Benefits' },
    { id: 'after-4-years',   label: 'After 4 Years' },
    { id: 'study-plan',      label: 'Preparation Plan' },
    { id: 'books',           label: 'Best Books' },
    { id: 'faq',             label: 'FAQs' },
  ];

  const importantDates = [
    { event: 'Official Notification Released',   date: '12 February 2026',        status: 'done' },
    { event: 'Online Application Opens',         date: '13 February 2026',        status: 'done' },
    { event: 'Last Date to Apply (Extended)',    date: '10 April 2026',           status: 'done' },
    { event: 'CEE Admit Card',                   date: 'To be notified (TBN)',    status: 'tbn'  },
    { event: 'CEE Online Exam Window',           date: '01 – 16 June 2026',       status: 'upcoming' },
    { event: 'CEE Result / Shortlist',           date: 'To be notified (TBN)',    status: 'tbn'  },
    { event: 'Recruitment Rally (Physical)',     date: 'Zone-wise – TBN',         status: 'tbn'  },
    { event: 'Medical Examination',             date: 'After Rally – TBN',       status: 'tbn'  },
    { event: 'Final Merit List & Joining',      date: 'To be notified (TBN)',    status: 'tbn'  },
  ];

  const posts = [
    { post: 'Agniveer General Duty (GD) – Male',  qual: '10th Pass, 45% aggregate, 33% per subject',        ageMax: '21 yrs' },
    { post: 'Agniveer GD (Women Military Police)', qual: '10th Pass, 45% aggregate, 33% per subject',        ageMax: '21 yrs' },
    { post: 'Agniveer Technical',                  qual: '12th (PCM) with 50% aggregate',                    ageMax: '21 yrs' },
    { post: 'Agniveer Clerk / Store Keeper Technical', qual: '12th (any stream) with 60% aggregate; 50% in English & Maths', ageMax: '21 yrs' },
    { post: 'Agniveer Tradesman (10th Pass)',       qual: '10th Pass with 33% marks in each subject',         ageMax: '21 yrs' },
    { post: 'Agniveer Tradesman (8th Pass)',        qual: '8th Pass with 33% marks in each subject',          ageMax: '21 yrs' },
    { post: 'Sepoy Pharma / Nursing Assistant',    qual: '12th (PCB) + specific technical qualification',    ageMax: '25 yrs' },
    { post: 'JCO Religious Teacher (RT)',           qual: 'Graduate + relevant religious qualification',       ageMax: '34 yrs' },
  ];

  const ceePatternGD = [
    { subject: 'General Knowledge',    questions: 15, marks: 30, negMarking: '−0.5' },
    { subject: 'General Science',      questions: 15, marks: 30, negMarking: '−0.5' },
    { subject: 'Mathematics',          questions: 10, marks: 20, negMarking: '−0.5' },
    { subject: 'Logical Reasoning',    questions: 10, marks: 20, negMarking: '−0.5' },
  ];

  const ceePatternClerk = [
    { subject: 'General Knowledge',    questions: 25, marks: 50, negMarking: '−0.5' },
    { subject: 'General Science',      questions: 10, marks: 20, negMarking: '−0.5' },
    { subject: 'Mathematics',          questions: 25, marks: 50, negMarking: '−0.5' },
    { subject: 'Computer Science',     questions: 10, marks: 20, negMarking: '−0.5' },
    { subject: 'English',              questions: 25, marks: 50, negMarking: '−0.5' },
    { subject: 'General Reasoning',    questions: 5,  marks: 10, negMarking: '−0.5' },
  ];

  const physicalMale = [
    { test: '1.6 km Run',     group1: 'Up to 5 min 30 sec (Bonus marks)',    group2: '5 min 31 sec – 5 min 45 sec' },
    { test: 'Pull Ups',       group1: '10 pull-ups (max bonus)',              group2: 'Minimum 6 pull-ups required' },
    { test: '9-Foot Ditch',   group1: 'Must clear in single jump',           group2: 'Qualifying – no marks' },
    { test: 'Zig-Zag Balance', group1: 'Complete the course without errors', group2: 'Qualifying – no marks' },
    { test: 'Height (Min)',   group1: '170 cm (General/OBC/EWS)',            group2: '162.5 cm (SC/ST/NE/Tribal)' },
    { test: 'Chest (Male)',   group1: 'Unexpanded: 80 cm',                   group2: 'Minimum expansion: 5 cm' },
  ];

  const salaryTable = [
    { year: 'Year 1', gross: '₹30,000', deduction: '₹9,000', inHand: '~₹21,000', annualPkg: '₹4.76 Lakh' },
    { year: 'Year 2', gross: '₹33,000', deduction: '₹9,900', inHand: '~₹23,100', annualPkg: '₹5.24 Lakh' },
    { year: 'Year 3', gross: '₹36,500', deduction: '₹10,950', inHand: '~₹25,550', annualPkg: '₹5.80 Lakh' },
    { year: 'Year 4', gross: '₹40,000', deduction: '₹12,000', inHand: '~₹28,000', annualPkg: '₹6.92 Lakh' },
  ];

  const books = [
    { subject: 'GK & Current Affairs', title: 'Lucent\'s General Knowledge', author: 'Lucent Publications', freeLink: '' },
    { subject: 'Mathematics',          title: 'Quantitative Aptitude for Competitive Exams', author: 'R.S. Aggarwal (S. Chand)', freeLink: '' },
    { subject: 'General Science',      title: 'Lucent\'s General Science', author: 'Lucent Publications', freeLink: '' },
    { subject: 'Logical Reasoning',    title: 'A Modern Approach to Verbal & Non-Verbal Reasoning', author: 'R.S. Aggarwal', freeLink: '' },
    { subject: 'English (Clerk post)', title: 'Objective English for Competitive Exams', author: 'S.P. Bakshi (Arihant)', freeLink: '' },
    { subject: 'Previous Papers',      title: 'Army Agniveer Previous Year Papers (Chapter-wise)', author: 'Arihant / Oswaal', freeLink: '' },
  ];

  const faqs = [
    {
      q: 'What is the age limit for Army Agniveer 2026?',
      a: 'For most posts (GD, Technical, Clerk, Tradesman), the age must be between 17.5 years and 21 years as on 01 July 2026. Sepoy Pharma allows up to 25 years, and JCO Religious Teacher up to 34 years.',
    },
    {
      q: 'How many vacancies are there in Army Agniveer 2026?',
      a: 'The Indian Army has announced 25,000+ vacancies across all categories for the 2026 recruitment cycle. Post-wise breakup is published by individual Army Recruiting Offices (AROs).',
    },
    {
      q: 'What is the Seva Nidhi package in the Agniveer scheme?',
      a: 'After completing 4 years of service, every Agniveer receives a tax-free lump-sum Seva Nidhi payout of approximately ₹11.71 lakh. This includes your own contributions (30% of monthly package) + equal government contribution + accrued interest.',
    },
    {
      q: 'Can girls / female candidates apply for Army Agniveer?',
      a: 'Yes. Female candidates can apply for the Agniveer General Duty (Women Military Police) category. Other posts are currently open to male candidates only. Check the official notification for the latest update.',
    },
    {
      q: 'Is there negative marking in the Agniveer CEE exam?',
      a: 'Yes. Each wrong answer carries a penalty of −0.5 marks. Unattempted questions carry no penalty. Plan your attempts carefully to avoid losing marks.',
    },
    {
      q: 'What happens after 4 years? Can I continue in the Army?',
      a: 'Up to 25% of top-performing Agniveers are selected for regular enrolment in the Indian Army based on merit, medical fitness, and organisational requirements. The remaining 75% receive the Seva Nidhi package, a skill certificate, and priority consideration for Central Armed Police Forces (CAPF) and state government jobs.',
    },
  ];

  const statusColor = (s: string) => {
    if (s === 'done') return 'bg-emerald-100 text-emerald-700';
    if (s === 'upcoming') return 'bg-blue-100 text-blue-700';
    return 'bg-amber-100 text-amber-700';
  };
  const statusLabel = (s: string) => s === 'done' ? 'Completed' : s === 'upcoming' ? 'Upcoming' : 'TBN';

  return (
    <>
      <div className="container-main py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-surface-500 mb-6">
          <Link href="/" className="hover:text-primary-500">Home</Link><span className="mx-2">›</span>
          <Link href="/exams" className="hover:text-primary-500">Exams</Link><span className="mx-2">›</span>
          <span className="text-surface-800">Indian Army Agniveer</span>
        </nav>

        {/* Mobile TOC */}
        <div className="card p-5 mb-8 border-l-4 border-primary-500 lg:hidden">
          <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">📖 Quick Navigation</div>
          <ol className="grid grid-cols-2 gap-x-4 gap-y-1.5 list-decimal list-inside">
            {toc.map((s) => (
              <li key={s.id}><a href={`#${s.id}`} className="text-sm text-primary-500 hover:underline">{s.label}</a></li>
            ))}
          </ol>
        </div>

        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          {/* ── Main Content ── */}
          <div>
            {/* Page Header */}
            <div className="mb-8" id="overview">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="badge badge-primary">Defence</span>
                <span className="badge badge-green">Central Govt</span>
                <span className="badge bg-surface-100 text-surface-600">Biannual</span>
                <span className="badge bg-red-100 text-red-700">Agnipath Scheme</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-heading font-bold text-surface-900 mb-3">Indian Army Agniveer 2026 – Complete Guide</h1>
              <p className="text-surface-500 leading-relaxed text-lg">
                Join the Indian Army for a 4-year tenure under the Agnipath Scheme. Open to candidates who have passed 8th, 10th, or 12th class across various trades. Over 25,000 vacancies announced for the 2026 cycle.
              </p>
              <a href="https://joinindianarmy.nic.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary-500 hover:text-primary-600 mt-3 font-medium">Official Website: joinindianarmy.nic.in →</a>
            </div>

            {/* Hero Highlight Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
              {[
                { label: '📋 Vacancies',           value: '25,000+' },
                { label: '📅 CEE Exam Window',      value: '1 – 16 Jun 2026' },
                { label: '⏳ Apply Last Date',      value: '10 Apr 2026 (Done)' },
                { label: '💰 Monthly Package',      value: '₹30,000 – ₹40,000' },
              ].map((item) => (
                <div key={item.label} className="bg-surface-50 rounded-xl p-4 border border-surface-200">
                  <div className="text-xs text-surface-400 uppercase tracking-wide mb-1">{item.label}</div>
                  <div className="font-semibold text-surface-800 text-sm">{item.value}</div>
                </div>
              ))}
            </div>

            {/* 💡 Update Callout */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-10 text-sm text-blue-800">
              <strong>💡 Key update for 2026:</strong> Indian Army Agniveer CEE notification was released on <strong>12 February 2026</strong>. Application window was open from 13 Feb to <strong>10 April 2026 (extended)</strong>. CEE exam will be conducted from <strong>1 to 16 June 2026</strong>. Shortlisted candidates will be called for recruitment rallies (physical + medical). Check joinindianarmy.nic.in for zone-wise rally schedules.
            </div>

            {/* ── 1. Important Dates ── */}
            <section id="important-dates" className="mb-12">
              <SectionHeading num="1" title="📅 Important Dates – Army Agniveer 2026" />
              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface-800 text-white">
                        <th className="text-left px-4 py-3 font-heading font-semibold">Event</th>
                        <th className="text-left px-4 py-3 font-heading font-semibold">Date</th>
                        <th className="text-left px-4 py-3 font-heading font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {importantDates.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                          <td className="px-4 py-3 text-surface-700">{row.event}</td>
                          <td className="px-4 py-3 text-surface-800 font-medium">{row.date}</td>
                          <td className="px-4 py-3">
                            <span className={`text-xs px-2 py-1 rounded-full font-semibold ${statusColor(row.status)}`}>
                              {statusLabel(row.status)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs text-surface-400 mt-2">⚠️ TBN = To Be Notified. Dates are subject to change. Always verify at joinindianarmy.nic.in.</p>
            </section>

            {/* ── 2. Eligibility ── */}
            <section id="eligibility" className="mb-12">
              <SectionHeading num="2" title="🎓 Eligibility Criteria" />
              <div className="card p-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="bg-surface-50 rounded-xl p-4 border border-surface-200">
                    <div className="text-xs text-surface-400 uppercase tracking-wide mb-1">🪪 Nationality</div>
                    <div className="font-semibold text-surface-800">Indian Citizen (Undivided India residents also eligible for some posts)</div>
                  </div>
                  <div className="bg-surface-50 rounded-xl p-4 border border-surface-200">
                    <div className="text-xs text-surface-400 uppercase tracking-wide mb-1">📋 Age (Most Posts)</div>
                    <div className="font-semibold text-surface-800">17.5 – 21 years as on 01 July 2026</div>
                    <div className="text-xs text-surface-500 mt-1">Born between 01 Oct 2005 – 01 Jan 2009 (GD/Technical/Clerk)</div>
                  </div>
                  <div className="bg-surface-50 rounded-xl p-4 border border-surface-200">
                    <div className="text-xs text-surface-400 uppercase tracking-wide mb-1">📋 Marital Status</div>
                    <div className="font-semibold text-surface-800">Must be unmarried at time of enrolment</div>
                  </div>
                  <div className="bg-surface-50 rounded-xl p-4 border border-surface-200">
                    <div className="text-xs text-surface-400 uppercase tracking-wide mb-1">🎓 Qualification (Varies by Post)</div>
                    <div className="font-semibold text-surface-800">8th / 10th / 12th Pass depending on trade</div>
                  </div>
                </div>
                <div className="pt-2 border-t border-surface-100">
                  <h3 className="font-semibold text-surface-800 mb-3 text-sm">Age Relaxation</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div className="bg-surface-50 rounded-lg p-3"><span className="text-surface-400">OBC (NCL)</span><div className="font-bold text-surface-700 mt-1">+2 years</div></div>
                    <div className="bg-surface-50 rounded-lg p-3"><span className="text-surface-400">SC / ST</span><div className="font-bold text-surface-700 mt-1">+3 years</div></div>
                    <div className="bg-surface-50 rounded-lg p-3"><span className="text-surface-400">J&K Domicile</span><div className="font-bold text-surface-700 mt-1">+5 years</div></div>
                    <div className="bg-surface-50 rounded-lg p-3"><span className="text-surface-400">Tribal / NE areas</span><div className="font-bold text-surface-700 mt-1">Height relaxation</div></div>
                  </div>
                  <p className="text-xs text-surface-400 mt-2">* Always check the official notification for post-specific age relaxation rules.</p>
                </div>
              </div>
            </section>

            {/* ── 3. Posts & Vacancies ── */}
            <section id="vacancies" className="mb-12">
              <SectionHeading num="3" title="📋 Posts, Vacancies & Education" />
              <div className="card overflow-hidden mb-3">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface-800 text-white">
                        <th className="text-left px-4 py-3 font-heading font-semibold">Post</th>
                        <th className="text-left px-4 py-3 font-heading font-semibold">Educational Qualification</th>
                        <th className="text-left px-4 py-3 font-heading font-semibold">Max Age</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                          <td className="px-4 py-3 font-medium text-surface-800">{row.post}</td>
                          <td className="px-4 py-3 text-surface-600">{row.qual}</td>
                          <td className="px-4 py-3 text-surface-700">{row.ageMax}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-800">
                <strong>✅ Total Vacancies 2026:</strong> 25,000+ posts announced. Exact post-wise numbers are published by individual Army Recruiting Offices (AROs). Candidates may apply for up to two categories based on their eligibility.
              </div>
            </section>

            {/* ── 4. Selection Process ── */}
            <section id="selection" className="mb-12">
              <SectionHeading num="4" title="Selection Process" />
              <div className="card p-6">
                <div className="flex flex-wrap gap-3 mb-6">
                  {['Stage 1: CEE (Online Written Test)', 'Stage 2: Recruitment Rally', 'Physical Fitness Test (PFT)', 'Physical Measurement Test (PMT)', 'Medical Examination', 'Document Verification', 'Final Merit & Enrolment'].map((stage, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {i > 0 && <svg className="w-4 h-4 text-surface-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>}
                      <span className="bg-primary-50 text-primary-700 px-3 py-2 rounded-lg text-sm font-medium">{stage}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 text-sm text-surface-700">
                  <div className="flex items-start gap-2"><svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>CEE is conducted online at designated centres across India in 13 regional languages.</div>
                  <div className="flex items-start gap-2"><svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>CEE shortlisted candidates are called for a physical recruitment rally at their zonal ARO centre.</div>
                  <div className="flex items-start gap-2"><svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>The PFT is marks-based (run timing and pull-ups earn bonus marks); PMT and Medical are qualifying.</div>
                  <div className="flex items-start gap-2"><svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>Final merit = CEE score + PFT bonus marks. Ties are broken by date of birth (older gets priority).</div>
                </div>
              </div>
            </section>

            {/* ── 5. CEE Exam Pattern ── */}
            <section id="exam-pattern" className="mb-12">
              <SectionHeading num="5" title="📋 CEE Exam Pattern" />
              <p className="text-sm text-surface-500 mb-4">The Common Entrance Exam (CEE) is an online MCQ-based test. Pattern varies by post. The two most common patterns are shown below.</p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading font-semibold text-surface-800 mb-3">Agniveer GD (50 Questions | 100 Marks | 60 Minutes)</h3>
                  <div className="card overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-surface-800 text-white">
                            <th className="text-left px-4 py-3 font-heading font-semibold">Subject</th>
                            <th className="text-center px-4 py-3 font-heading font-semibold">Questions</th>
                            <th className="text-center px-4 py-3 font-heading font-semibold">Marks</th>
                            <th className="text-center px-4 py-3 font-heading font-semibold">Negative Marking</th>
                          </tr>
                        </thead>
                        <tbody>
                          {ceePatternGD.map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                              <td className="px-4 py-3 text-surface-700">{row.subject}</td>
                              <td className="px-4 py-3 text-center text-surface-800 font-medium">{row.questions}</td>
                              <td className="px-4 py-3 text-center text-surface-800 font-medium">{row.marks}</td>
                              <td className="px-4 py-3 text-center text-red-600 font-medium">{row.negMarking}</td>
                            </tr>
                          ))}
                          <tr className="bg-surface-800 text-white">
                            <td className="px-4 py-3 font-heading font-semibold">Total</td>
                            <td className="px-4 py-3 text-center font-bold">50</td>
                            <td className="px-4 py-3 text-center font-bold">100</td>
                            <td className="px-4 py-3 text-center">−0.5 per wrong</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-surface-800 mb-3">Agniveer Clerk / SKT (100 Questions | 200 Marks | 120 Minutes)</h3>
                  <div className="card overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-surface-800 text-white">
                            <th className="text-left px-4 py-3 font-heading font-semibold">Subject</th>
                            <th className="text-center px-4 py-3 font-heading font-semibold">Questions</th>
                            <th className="text-center px-4 py-3 font-heading font-semibold">Marks</th>
                            <th className="text-center px-4 py-3 font-heading font-semibold">Negative Marking</th>
                          </tr>
                        </thead>
                        <tbody>
                          {ceePatternClerk.map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                              <td className="px-4 py-3 text-surface-700">{row.subject}</td>
                              <td className="px-4 py-3 text-center text-surface-800 font-medium">{row.questions}</td>
                              <td className="px-4 py-3 text-center text-surface-800 font-medium">{row.marks}</td>
                              <td className="px-4 py-3 text-center text-red-600 font-medium">{row.negMarking}</td>
                            </tr>
                          ))}
                          <tr className="bg-surface-800 text-white">
                            <td className="px-4 py-3 font-heading font-semibold">Total</td>
                            <td className="px-4 py-3 text-center font-bold">100</td>
                            <td className="px-4 py-3 text-center font-bold">200</td>
                            <td className="px-4 py-3 text-center">−0.5 per wrong</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-surface-400 mt-3">⚠️ Technical post has a separate 100-question pattern with PCM and technical subjects. Download the official pattern PDF from joinindianarmy.nic.in.</p>
            </section>

            {/* ── 6. Physical Standards ── */}
            <section id="physical" className="mb-12">
              <SectionHeading num="6" title="Physical Fitness & Measurement Standards" />
              <div className="card overflow-hidden mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface-800 text-white">
                        <th className="text-left px-4 py-3 font-heading font-semibold">Physical Test</th>
                        <th className="text-left px-4 py-3 font-heading font-semibold">Group I / Standard</th>
                        <th className="text-left px-4 py-3 font-heading font-semibold">Group II / Minimum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {physicalMale.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                          <td className="px-4 py-3 font-medium text-surface-800">{row.test}</td>
                          <td className="px-4 py-3 text-surface-600">{row.group1}</td>
                          <td className="px-4 py-3 text-surface-600">{row.group2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-sm text-surface-500">Run timing earns bonus marks (Group I = higher bonus). Height, chest, and weight are assessed as part of the Physical Measurement Test (PMT) — these are qualifying standards, not scored.</p>
            </section>

            {/* ── 7. Salary ── */}
            <section id="salary" className="mb-12">
              <SectionHeading num="7" title="💰 Salary, Package & Benefits" />
              <div className="card overflow-hidden mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface-800 text-white">
                        <th className="text-left px-4 py-3 font-heading font-semibold">Year</th>
                        <th className="text-center px-4 py-3 font-heading font-semibold">Gross Package</th>
                        <th className="text-center px-4 py-3 font-heading font-semibold">Seva Nidhi Deduction (30%)</th>
                        <th className="text-center px-4 py-3 font-heading font-semibold">In-Hand Salary</th>
                        <th className="text-center px-4 py-3 font-heading font-semibold">Annual CTC</th>
                      </tr>
                    </thead>
                    <tbody>
                      {salaryTable.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                          <td className="px-4 py-3 font-semibold text-surface-800">{row.year}</td>
                          <td className="px-4 py-3 text-center text-surface-700">{row.gross}</td>
                          <td className="px-4 py-3 text-center text-red-600">{row.deduction}</td>
                          <td className="px-4 py-3 text-center font-bold text-emerald-600">{row.inHand}</td>
                          <td className="px-4 py-3 text-center text-surface-700">{row.annualPkg}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <div className="font-semibold text-emerald-800 mb-2">✅ Seva Nidhi Package (End of 4 Years)</div>
                  <div className="text-2xl font-heading font-bold text-emerald-700 mb-1">~₹11.71 Lakh</div>
                  <div className="text-xs text-emerald-600">Tax-free lump sum. Includes your contribution + equal govt match + interest.</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="font-semibold text-blue-800 mb-2">🛡️ Life Insurance During Service</div>
                  <div className="text-2xl font-heading font-bold text-blue-700 mb-1">₹48 Lakh</div>
                  <div className="text-xs text-blue-600">Non-contributory cover. Family receives full amount in case of unfortunate demise.</div>
                </div>
              </div>
              <div className="card p-5">
                <h3 className="font-heading font-semibold text-surface-800 mb-3 text-sm">Other Benefits & Allowances</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-surface-600">
                  {['⚔️ Risk & Hardship Allowance (based on deployment)', '🍽️ Ration Allowance', '👗 Dress Allowance', '🚆 Travel Allowance', '🏥 Medical facilities at Service Hospitals', '🛒 CSD Canteen access (subsidised rates)', '📄 30 days annual leave per year', '🎓 Class 12th certificate for 10th pass Agniveers (on completion)'].map((b, i) => (
                    <div key={i} className="flex items-start gap-2"><span className="mt-0.5 flex-shrink-0">{b.split(' ')[0]}</span><span>{b.split(' ').slice(1).join(' ')}</span></div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 8. After 4 Years ── */}
            <section id="after-4-years" className="mb-12">
              <SectionHeading num="8" title="After 4 Years – Career Pathways" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="card p-5 border-emerald-300">
                  <div className="text-2xl mb-2">🎖️</div>
                  <h3 className="font-heading font-semibold text-surface-800 mb-2">Regular Army Enrolment (25%)</h3>
                  <p className="text-sm text-surface-600">Top 25% performers (by merit, medical fitness, and vacancy) are inducted into the regular Indian Army. Full career of 15+ years, higher pay scales, pension benefits, and promotion opportunities.</p>
                </div>
                <div className="card p-5 border-blue-300">
                  <div className="text-2xl mb-2">💰</div>
                  <h3 className="font-heading font-semibold text-surface-800 mb-2">Seva Nidhi + Civilian Life (75%)</h3>
                  <p className="text-sm text-surface-600">Receive ₹11.71 lakh Seva Nidhi, a detailed skill certificate, and a Class 12 equivalent certificate (if enrolled after 10th). Priority for CAPF & state government jobs.</p>
                </div>
                <div className="card p-5">
                  <div className="text-2xl mb-2">👮</div>
                  <h3 className="font-heading font-semibold text-surface-800 mb-2">CAPF Priority Hiring</h3>
                  <p className="text-sm text-surface-600">Agniveer completers get priority and age relaxation for recruitment into BSF, CRPF, CISF, ITBP, SSB, and other Central Armed Police Forces.</p>
                </div>
                <div className="card p-5">
                  <div className="text-2xl mb-2">🏢</div>
                  <h3 className="font-heading font-semibold text-surface-800 mb-2">State Govt & Private Jobs</h3>
                  <p className="text-sm text-surface-600">Several state governments and private companies offer priority consideration to Agniveer completers. The discipline, skills, and service record carry significant value in the job market.</p>
                </div>
              </div>
            </section>

            {/* ── 9. Preparation Plan ── */}
            <section id="study-plan" className="mb-12">
              <SectionHeading num="9" title="🗓️ 90-Day Preparation Plan" />
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-primary-200 hidden sm:block" />
                <div className="space-y-4">
                  {[
                    'Month 1 – Foundation: Focus on GK (Lucent\'s), Basic Maths (R.S. Aggarwal up to Class 10 level), and General Science. Cover 2 chapters per subject per day. Run 1 km daily to build stamina.',
                    'Month 2 – Practice: Shift to topic-wise MCQ practice. Solve 50+ questions per day. Begin timed mock tests (30 minutes). Increase run distance to 1.6 km and start pull-up training.',
                    'Month 3 – Mock Tests & Revision: Solve 5 full mock tests per week. Analyse mistakes and revise weak topics. Aim for 1.6 km in under 5:45 min and 10+ pull-ups consistently.',
                    'Final 2 Weeks: Revision only. Re-read GK notes, solve 2 mocks per day. Focus on physical fitness — do not start new topics. Rest properly before the exam.',
                  ].map((step, i) => (
                    <div key={i} className="sm:pl-14 relative">
                      <div className="hidden sm:flex absolute left-0 top-4 w-10 h-10 bg-primary-500 rounded-xl items-center justify-center text-white font-heading font-bold text-sm z-10">{i + 1}</div>
                      <div className="card p-5"><p className="text-surface-700 leading-relaxed text-sm">{step}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 10. Books ── */}
            <section id="books" className="mb-12">
              <SectionHeading num="10" title="📚 Recommended Books" />
              <BooksTable books={books} />
              <p className="text-xs text-surface-400 mt-3">Practice with Army Agniveer-specific previous year papers for best results. Free PDFs may be available on official prep channels.</p>
            </section>

            {/* ── 11. FAQ ── */}
            <section id="faq" className="mb-12">
              <SectionHeading num="11" title="❓ Frequently Asked Questions" />
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <details key={i} className="card group">
                    <summary className="p-5 cursor-pointer flex items-center justify-between font-heading font-semibold text-surface-800 hover:text-primary-500 transition-colors list-none">
                      <span>{faq.q}</span>
                      <svg className="w-5 h-5 text-surface-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </summary>
                    <div className="px-5 pb-5 text-sm text-surface-600 leading-relaxed">{faq.a}</div>
                  </details>
                ))}
              </div>
            </section>

            {/* Internal Links */}
            <div className="card p-6 bg-surface-50 mb-6">
              <h3 className="font-heading font-semibold text-surface-800 mb-3 text-sm">Related Defence Exams</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {[
                  { name: 'IAF Agniveer Vayu', slug: 'iaf-agniveer' },
                  { name: 'Indian Navy Agniveer SSR/MR', slug: 'navy-agniveer' },
                  { name: 'UPSC CAPF Assistant Commandant', slug: 'upsc-capf' },
                  { name: 'AFCAT – Air Force Officer', slug: 'afcat' },
                  { name: 'Indian Coast Guard Navik GD', slug: 'coast-guard-navik-gd' },
                  { name: 'SSC GD Constable', slug: 'ssc-gd-constable' },
                ].map((e) => (
                  <Link key={e.slug} href={`/exams/${e.slug}`} className="block text-primary-500 hover:text-primary-700 hover:underline">{e.name} →</Link>
                ))}
              </div>
            </div>

            {/* Eligibility CTA */}
            <div className="card p-6 bg-primary-50 border-primary-200 text-center mb-6">
              <h3 className="font-heading font-bold text-primary-800 mb-2">Check If You Are Eligible</h3>
              <p className="text-sm text-primary-600 mb-4">Use our free eligibility checker to see if you qualify for Indian Army Agniveer.</p>
              <Link href="/tools/age-calculator" className="btn-primary">Check Eligibility →</Link>
            </div>

            <div className="text-xs text-surface-400 bg-surface-50 rounded-lg p-4">
              <strong>Disclaimer:</strong> All information is sourced from official notifications and reputable sources. Exam dates, vacancies, and eligibility criteria may change. Always refer to the official website joinindianarmy.nic.in for the latest details.
            </div>
          </div>

          {/* ── Sidebar ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="card p-5">
                <h3 className="font-heading font-semibold text-surface-800 mb-4 text-sm uppercase tracking-wide">On This Page</h3>
                <nav className="space-y-1">
                  {toc.map((s) => (
                    <a key={s.id} href={`#${s.id}`} className="block py-1.5 px-3 rounded-lg text-sm text-surface-500 hover:text-primary-500 hover:bg-primary-50 transition-colors">{s.label}</a>
                  ))}
                </nav>
              </div>
              <div className="card p-5 mt-4 bg-primary-50 border-primary-200">
                <h3 className="font-heading font-semibold text-primary-800 mb-2 text-sm">Official Website</h3>
                <a href="https://joinindianarmy.nic.in" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 break-all">joinindianarmy.nic.in →</a>
              </div>
              <div className="card p-5 mt-4">
                <div className="font-heading font-semibold text-surface-800 text-sm mb-3">Quick Facts</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-surface-500">Scheme</span><span className="font-medium text-surface-800">Agnipath</span></div>
                  <div className="flex justify-between"><span className="text-surface-500">Tenure</span><span className="font-medium text-surface-800">4 Years</span></div>
                  <div className="flex justify-between"><span className="text-surface-500">Vacancies</span><span className="font-medium text-surface-800">25,000+</span></div>
                  <div className="flex justify-between"><span className="text-surface-500">Age</span><span className="font-medium text-surface-800">17.5 – 21 yrs</span></div>
                  <div className="flex justify-between"><span className="text-surface-500">Min Qual</span><span className="font-medium text-surface-800">8th Pass</span></div>
                  <div className="flex justify-between"><span className="text-surface-500">Start Salary</span><span className="font-medium text-emerald-600">₹30,000/mo</span></div>
                  <div className="flex justify-between"><span className="text-surface-500">Seva Nidhi</span><span className="font-medium text-emerald-600">~₹11.71 L</span></div>
                  <div className="flex justify-between"><span className="text-surface-500">App Fee</span><span className="font-medium text-surface-800">₹250</span></div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

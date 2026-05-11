import Link from 'next/link';
import { Metadata } from 'next';
import { blogPosts, getBlogPostBySlug } from '@/lib/blog-data';
import PayCommissionCalculator from '@/components/PayCommissionCalculator';

export function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: 'Article Not Found' };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: { title: post.metaTitle, description: post.metaDescription, type: 'article' },
    alternates: { canonical: `https://www.taiyarho.in/blog/${params.slug}/` },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="container-main py-20 text-center">
        <h1 className="text-2xl font-heading font-bold text-surface-800 mb-4">Article Not Found</h1>
        <Link href="/blog" className="btn-primary">Back to Blog</Link>
      </div>
    );
  }

  // Route to correct article renderer
  if (post.slug === 'ibps-po-salary-in-hand-2026') {
    return <IbpsPOSalaryArticle post={post} />;
  }
  if (post.slug === 'ssc-cgl-vs-chsl-which-is-easier-2026') {
    return <SscCglVsChslArticle post={post} />;
  }
  if (post.slug === 'ssc-cgl-2026-syllabus-complete-guide') {
    return <SscCgl2026Article post={post} />;
  }
  if (post.slug === 'government-exam-preparation-beginners-2026') {
    return <GovExamBeginnersArticle post={post} />;
  }
  if (post.slug === 'rrb-ntpc-2026-syllabus-tier-1-tier-2') {
    return <RrbNtpcSyllabusArticle post={post} />;
  }
  if (post.slug === 'government-exam-age-limit-obc-sc-st-relaxation-2026') {
    return <AgeLimit2026Article post={post} />;
  }
  if (post.slug === 'highest-salary-government-exam-after-12th-2026') {
    return <HighestSalary12thArticle post={post} />;
  }

  if (post.slug === 'best-telegram-channels-govt-exams-2026') {
    return <TelegramChannelsArticle post={post} />;
  }

  if (post.slug === '8th-pay-commission-salary-calculator-2026') {
    return <PayCommissionArticle post={post} />;
  }

  return <div className="container-main py-20 text-center"><p>Article coming soon.</p></div>;
}

// ─── SSC CGL 2026 ARTICLE ────────────────────────────────────────────────────
function SscCgl2026Article({ post }: { post: any }) {
  const toc = [
    { id: 'overview', label: 'Exam Overview' },
    { id: 'eligibility', label: 'Eligibility Criteria' },
    { id: 'pattern', label: 'Exam Pattern' },
    { id: 'tier1', label: 'Tier 1 Syllabus' },
    { id: 'tier2', label: 'Tier 2 Syllabus' },
    { id: 'weightage', label: 'Topic-wise Weightage' },
    { id: 'books', label: 'Best Books' },
    { id: 'strategy', label: 'Preparation Strategy' },
    { id: 'faq', label: 'FAQs' },
  ];

  return (
    <div className="container-main py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/blog" className="hover:text-primary-500">Blog</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">SSC CGL 2026 Syllabus</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-10 max-w-6xl">
        {/* MAIN CONTENT */}
        <article>
          {/* Hero */}
          <div className="bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900 rounded-2xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-accent-500/20 border border-accent-500/40 text-accent-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse" />
                  Updated {post.publishedDate}
                </span>
                <span className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded">SSC CGL</span>
                <span className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded">Syllabus 2026</span>
                <span className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded">Tier 1 & Tier 2</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight mb-3">
                SSC CGL 2026 Syllabus: <span className="text-accent-300 italic">Complete Guide</span> for Tier 1 & Tier 2
              </h1>
              <p className="text-surface-300 text-base leading-relaxed mb-5">
                Everything you need — full topic lists, exam pattern, marking scheme, and topic-wise weightage. 100% free. No signup needed.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-surface-400">
                <span>📅 Published: {post.publishedDate}</span>
                <span>⏱ {post.readTime}</span>
                <span>👁 Based on official SSC notification</span>
              </div>
            </div>
          </div>

          {/* Quick Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {[
              { label: 'Notification', value: 'Soon', sub: 'Expected April 2026' },
              { label: 'Tier 1 Exam', value: 'May–Jun', sub: '2026 (expected)' },
              { label: 'Vacancies', value: 'TBA', sub: 'Released with official notification' },
              { label: 'Apply By', value: 'Apr–May', sub: '2026 (tentative)' },
            ].map(f => (
              <div key={f.label} className="card p-4 text-center">
                <div className="text-xs text-surface-400 uppercase tracking-wide font-semibold">{f.label}</div>
                <div className="text-xl font-heading font-bold text-accent-500 mt-1">{f.value}</div>
                <div className="text-xs text-surface-400 mt-0.5">{f.sub}</div>
              </div>
            ))}
          </div>

          {/* Action Required callout */}
          <Callout type="warning" title="⚡ Action Required Now">
            The SSC CGL 2026 notification will be released as per the official SSC exam calendar on <strong>ssc.gov.in</strong>. Dates may change — always check the official calendar for the latest schedule. Complete your One-Time Registration (OTR) now so you're ready to apply the moment it opens.
          </Callout>

          {/* Table of Contents (mobile) */}
          <div className="card p-5 mb-10 border-l-4 border-primary-500 lg:hidden">
            <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">📖 Table of Contents</div>
            <ol className="grid grid-cols-2 gap-x-4 gap-y-1.5 list-decimal list-inside">
              {toc.map(item => (
                <li key={item.id}><a href={`#${item.id}`} className="text-sm text-primary-500 hover:underline">{item.label}</a></li>
              ))}
            </ol>
          </div>

          {/* OVERVIEW */}
          <Section id="overview" title="What is SSC CGL? A Quick Overview">
            <p className="text-surface-600 leading-relaxed mb-4">
              The <strong>Staff Selection Commission Combined Graduate Level (SSC CGL)</strong> exam is one of India's most competitive government recruitment examinations. Conducted annually by the SSC, it fills Group B and Group C posts across central government ministries, departments, and organizations.
            </p>
            <p className="text-surface-600 leading-relaxed mb-4">
              If you are a graduate dreaming of a government career with a stable salary, good perks, and job security — SSC CGL is one of the best paths available. Vacancies are announced with the official notification each year and vary based on departmental requirements.
            </p>
            <Callout type="info" title="💡 Key Structure to Know">
              SSC CGL follows a <strong>two-tier computer-based examination</strong> only. There is no Tier 3 descriptive paper and no interview. <strong>Tier I is qualifying</strong> — its marks do not count toward final merit. <strong>Tier II determines your final rank</strong> — all five sections of Paper I (including Computer Knowledge) are scoring and contribute to merit. Only the DEST is qualifying within Tier II. Syllabus and pattern are based on the official SSC notification — always verify at <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary-500 underline">ssc.gov.in</a>.
            </Callout>
          </Section>

          {/* ELIGIBILITY */}
          <Section id="eligibility" title="Eligibility Criteria at a Glance">
            <div className="overflow-x-auto rounded-xl border border-surface-200 mb-4">
              <table className="w-full text-sm">
                <thead className="bg-surface-900 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Criteria</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Requirement</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-surface-100">
                    <td className="p-3 font-medium text-surface-800">Educational Qualification</td>
                    <td className="p-3 text-surface-600">Bachelor's degree (any stream)</td>
                    <td className="p-3 text-surface-500 text-xs">Final-year students can also apply</td>
                  </tr>
                  <tr className="border-t border-surface-100 bg-surface-50">
                    <td className="p-3 font-medium text-surface-800">Age Limit</td>
                    <td className="p-3 text-surface-600">18–32 years (general)</td>
                    <td className="p-3 text-surface-500 text-xs">SC/ST: +5 yrs | OBC: +3 yrs | PwD: +10 yrs</td>
                  </tr>
                  <tr className="border-t border-surface-100">
                    <td className="p-3 font-medium text-surface-800">Nationality</td>
                    <td className="p-3 text-surface-600">Indian citizen</td>
                    <td className="p-3 text-surface-500 text-xs">Certain OCI/PIO categories also eligible</td>
                  </tr>
                  <tr className="border-t border-surface-100 bg-surface-50">
                    <td className="p-3 font-medium text-surface-800">Application Deadline</td>
                    <td className="p-3 text-surface-600">April–May 2026 (tentative)</td>
                    <td className="p-3 text-surface-500 text-xs">Exact date confirmed in official notification</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Callout type="tip" title="✅ TaiyarHo Tip">
              Final-year graduation students can apply — you just need to complete your degree before the document verification stage. Don't skip this opportunity because your result isn't out yet.
            </Callout>
          </Section>

          {/* EXAM PATTERN */}
          <Section id="pattern" title="SSC CGL 2026 Exam Pattern">
            <p className="text-surface-600 leading-relaxed mb-6">
              SSC CGL 2026 follows a <strong>two-tier computer-based examination structure</strong>. Tier I is qualifying in nature — its marks are not counted in the final merit. Tier II is the main examination and determines your final selection and post allocation.
            </p>

            {/* Tier flow */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center mb-6">
              <div className="card p-5 text-center border-surface-200">
                <div className="text-xs font-semibold uppercase tracking-wide text-surface-400 mb-1">Stage 1</div>
                <div className="text-2xl font-heading font-bold text-surface-800">Tier 1</div>
                <div className="text-xs text-surface-500 mt-1">100 questions · 200 marks · 60 minutes</div>
                <span className="inline-block mt-2 text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-semibold">Qualifying only</span>
              </div>
              <div className="text-center text-surface-400 text-sm">
                <div className="text-2xl text-accent-500">→</div>
                <div className="text-xs">15–20× vacancies shortlisted</div>
              </div>
              <div className="card p-5 text-center border-primary-300 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-wide text-surface-400 mb-1">Stage 2</div>
                <div className="text-2xl font-heading font-bold text-primary-500">Tier 2</div>
                <div className="text-xs text-surface-500 mt-1">Paper I (all) + Paper II (JSO only)</div>
                <span className="inline-block mt-2 text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold">Decides final merit</span>
              </div>
            </div>

            <h3 className="font-heading font-semibold text-surface-800 text-lg mb-3 mt-6">Tier 1 Pattern</h3>
            <div className="overflow-x-auto rounded-xl border border-surface-200 mb-4">
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
                  {[
                    ['General Intelligence & Reasoning', '25', '50', '–0.50/wrong'],
                    ['Quantitative Aptitude', '25', '50', '–0.50/wrong'],
                    ['English Language & Comprehension', '25', '50', '–0.50/wrong'],
                    ['General Awareness', '25', '50', '–0.50/wrong'],
                  ].map(([section, q, m, neg], i) => (
                    <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                      <td className="p-3 font-medium text-surface-800">{section}</td>
                      <td className="p-3 text-center text-surface-600">{q}</td>
                      <td className="p-3 text-center text-surface-600">{m}</td>
                      <td className="p-3 text-center text-surface-500 text-xs">{neg}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-surface-300 bg-surface-100">
                    <td className="p-3 font-bold text-surface-900">Total</td>
                    <td className="p-3 text-center font-bold text-surface-900">100</td>
                    <td className="p-3 text-center font-bold text-surface-900">200</td>
                    <td className="p-3 text-center font-semibold text-surface-700 text-xs">Time: 60 min</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout type="info" title="📌 Minimum Qualifying Marks">
              Candidates must clear section-wise minimums in Tier 2 Paper I. Minimum qualifying marks: <strong>30% for UR/EWS</strong>, <strong>25% for OBC</strong>, <strong>20% for SC/ST/PwD</strong>. Clearing each section individually is mandatory — a high overall score does not compensate for failing a section.
            </Callout>

            <h3 className="font-heading font-semibold text-surface-800 text-lg mb-3 mt-6">Tier 2 Pattern (Paper I — Compulsory for All)</h3>
            <div className="overflow-x-auto rounded-xl border border-surface-200 mb-4">
              <table className="w-full text-sm">
                <thead className="bg-surface-900 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Section / Module</th>
                    <th className="p-3 font-semibold text-xs uppercase tracking-wide text-center">Questions</th>
                    <th className="p-3 font-semibold text-xs uppercase tracking-wide text-center">Marks</th>
                    <th className="p-3 font-semibold text-xs uppercase tracking-wide text-center">Negative</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Section I — A: Mathematical Abilities', '30', '90', '–1/wrong'],
                    ['Section I — B: Reasoning & General Intelligence', '30', '90', '–1/wrong'],
                    ['Section II — A: English Language & Comprehension', '45', '135', '–1/wrong'],
                    ['Section II — B: General Awareness', '25', '75', '–1/wrong'],
                    ['Section III — Module I: Computer Knowledge', '20', '60', '–0.50/wrong'],
                    ['Section III — Module II: Data Entry Speed Test (DEST)', '—', 'Qualifying only', 'No penalty'],
                  ].map(([section, q, m, neg], i) => (
                    <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                      <td className="p-3 font-medium text-surface-800">{section}</td>
                      <td className="p-3 text-center text-surface-600">{q}</td>
                      <td className="p-3 text-center text-surface-600 text-xs">{m}</td>
                      <td className="p-3 text-center text-surface-500 text-xs">{neg}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-surface-300 bg-surface-100">
                    <td className="p-3 font-bold text-surface-900">Total Scored Marks</td>
                    <td className="p-3 text-center font-bold text-surface-900">150</td>
                    <td className="p-3 text-center font-bold text-surface-900">450</td>
                    <td className="p-3 text-center text-surface-600 text-xs">–1 (Sec I & II) / –0.50 (Sec III)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Callout type="warning" title="⚠️ Critical Note">
              In Tier 2: Sections I and II carry <strong>–1 mark per wrong answer</strong>. Section III (Computer Knowledge) carries <strong>–0.50 per wrong answer</strong>. DEST has no negative marking. <strong>Computer Knowledge is scoring</strong> — its 60 marks count toward your final merit. Only DEST is qualifying and does not affect ranking. Total scored marks in Tier 2 Paper I = <strong>450</strong>.
            </Callout>
          </Section>

          {/* TIER 1 SYLLABUS */}
          <Section id="tier1" title="SSC CGL Tier 1 Syllabus 2026">
            <p className="text-surface-600 leading-relaxed mb-6">
              Tier 1 is your entry gate. You need to clear it to sit for Tier 2, but the marks don't count toward your final rank. The goal here is to <strong>clear the cut-off comfortably</strong> — don't over-invest time in Tier 1 at the cost of Tier 2 preparation.
            </p>

            <SubjectCard
              num="1" name="General Intelligence & Reasoning" meta="25 questions · 50 marks · Graduation level" badge="High Scoring"
              desc="Both verbal and non-verbal questions. Pattern recognition and logical thinking are the keys here — not formula memorization."
              hotTopics={['Analogies', 'Series completion', 'Coding–Decoding', 'Blood relations', 'Direction & distance']}
              normalTopics={['Syllogism', 'Classification', 'Matrix', 'Venn diagrams', 'Embedded figures', 'Paper folding', 'Mirror & water image', 'Statement & conclusions', 'Ranking & arrangement']}
            />

            <SubjectCard
              num="2" name="Quantitative Aptitude" meta="25 questions · 50 marks · Matriculation level" badge="High Weightage"
              desc="Questions are based on Class 10 Maths but at a competitive level. Speed and accuracy in calculation are essential. Learn shortcuts early."
              hotTopics={['Ratio & Proportion', 'Percentages', 'Profit & Loss', 'Geometry & Mensuration', 'Trigonometry']}
              normalTopics={['Number Systems', 'LCM & HCF', 'Time & Work', 'Speed, Distance & Time', 'Simple & Compound Interest', 'Average', 'Mixture & Alligation', 'Data Interpretation']}
            />

            <SubjectCard
              num="3" name="English Language & Comprehension" meta="25 questions · 50 marks · Graduation level" badge="Differentiator"
              desc="This section separates high scorers from average ones. Focus on grammar rules, vocabulary, and reading speed."
              hotTopics={['Reading Comprehension', 'Fill in the Blanks (Cloze Test)', 'Sentence Improvement', 'Error Detection']}
              normalTopics={['Synonyms & Antonyms', 'One Word Substitution', 'Idioms & Phrases', 'Para Jumbles', 'Spelling Errors', 'Active/Passive Voice', 'Direct/Indirect Speech']}
            />

            <SubjectCard
              num="4" name="General Awareness" meta="25 questions · 50 marks · No defined level" badge="Score Booster"
              desc="Covers static GK, current affairs (last 6 months), and basic science. Can be scored quickly with consistent daily reading."
              hotTopics={['Current Affairs (last 6 months)', 'Indian History & Culture', 'Geography', 'Polity & Constitution']}
              normalTopics={['Economics & Budget', 'Science (Physics, Chemistry, Biology)', 'Important Days & Events', 'Sports & Awards', 'Books & Authors', 'Government Schemes']}
            />
          </Section>

          {/* TIER 2 SYLLABUS */}
          <Section id="tier2" title="SSC CGL Tier 2 Syllabus 2026">
            <p className="text-surface-600 leading-relaxed mb-6">
              Tier 2 is where the real game is played. Your Tier 2 score (out of 450) determines your final rank and post allocation. Negative marking is <strong>–1 per wrong answer</strong> in Sections I & II, and <strong>–0.50</strong> in Section III (Computer Knowledge) — accuracy matters far more here than in Tier 1.
            </p>

            <h3 className="font-heading font-semibold text-surface-800 text-lg mb-3">Tier 2 — Section I: Mathematical Abilities (30 questions, 90 marks)</h3>
            <TopicGrid
              hot={['Algebra & Coordinate Geometry', 'Mensuration (2D & 3D)', 'Profit, Loss & Discount', 'Data Interpretation (Tables, Charts, Graphs)']}
              normal={['Number systems & BODMAS', 'Ratio, Proportion & Mixture', 'Simple & Compound Interest', 'Time, Work & Distance', 'Trigonometry & Heights', 'Statistics & Probability']}
            />

            <h3 className="font-heading font-semibold text-surface-800 text-lg mb-3 mt-6">Tier 2 — Section I: Reasoning & General Intelligence (30 questions, 90 marks)</h3>
            <p className="text-sm text-surface-500 mb-3">Harder than Tier 1 — more complex puzzles, multi-step logical chains, and advanced non-verbal reasoning.</p>
            <TopicGrid
              hot={['Seating Arrangement (linear & circular)', 'Puzzles (floor, scheduling)', 'Input-Output', 'Syllogism (advanced)']}
              normal={['Coding-Decoding (new pattern)', 'Blood Relations', 'Direction & Distance', 'Venn Diagrams', 'Analogy & Classification', 'Statement & Conclusions']}
            />

            <h3 className="font-heading font-semibold text-surface-800 text-lg mb-3 mt-6">Tier 2 — Section II: English Language & Comprehension (45 questions, 135 marks)</h3>
            <p className="text-sm text-surface-500 mb-3">The highest-marks section in Tier 2. RC passages are longer and vocabulary-based questions are trickier than in Tier 1.</p>
            <TopicGrid
              hot={['Reading Comprehension (2-3 long passages)', 'Cloze Test (fill-in-the-blanks paragraph)', 'Para Jumbles']}
              normal={['Synonyms & Antonyms', 'Sentence Improvement / Correction', 'Vocabulary in context', 'Idioms & phrases', 'Error detection']}
            />

            <h3 className="font-heading font-semibold text-surface-800 text-lg mb-3 mt-6">Tier 2 — Section II: General Awareness (25 questions, 75 marks)</h3>
            <p className="text-sm text-surface-500 mb-3">Slightly higher difficulty than Tier 1 GA. More analytical questions on economy, polity, and current affairs. Budget and government schemes feature heavily.</p>

            <h3 className="font-heading font-semibold text-surface-800 text-lg mb-3 mt-6">Tier 2 — Section III: Computer Knowledge (20 questions, 60 marks — Scoring)</h3>
            <TopicGrid
              hot={['Computer basics & history', 'MS Office (Word, Excel, PowerPoint)', 'Internet & networking basics', 'Keyboard shortcuts']}
              normal={['Operating systems', 'Cybersecurity basics', 'Database basics']}
            />

            <Callout type="info" title="📌 About DEST">
              The Data Entry Speed Test (DEST) requires typing approximately 2,000 key depressions in 15 minutes. It is compulsory for all but is only qualifying — it does not add to your marks. Practice daily typing to get your speed above <strong>8,000 keystrokes/hour</strong> well before the exam.
            </Callout>
          </Section>

          {/* WEIGHTAGE */}
          <Section id="weightage" title="Topic-wise Weightage (Based on Previous Year Papers)">
            <p className="text-surface-600 leading-relaxed mb-5">
              The charts below show approximate topic weightage derived from analysis of previous years' Tier 2 papers. Prioritize accordingly.
            </p>

            <h3 className="font-heading font-semibold text-surface-800 text-lg mb-3">Mathematical Abilities — Topic Frequency</h3>
            <div className="card p-5 mb-6 space-y-3">
              {[
                { label: 'Algebra & Geometry', pct: 78, text: '~25%' },
                { label: 'Profit/Loss/Discount', pct: 60, text: '~18%' },
                { label: 'Data Interpretation', pct: 55, text: '~16%' },
                { label: 'Time, Speed & Work', pct: 45, text: '~14%' },
                { label: 'Trigonometry', pct: 38, text: '~12%' },
                { label: 'Other topics', pct: 50, text: '~15%', grey: true },
              ].map(bar => (
                <div key={bar.label} className="flex items-center gap-3">
                  <span className="text-xs text-surface-600 w-40 flex-shrink-0">{bar.label}</span>
                  <div className="flex-1 bg-surface-100 rounded-full h-2.5 overflow-hidden">
                    <div className={`h-full rounded-full ${bar.grey ? 'bg-surface-400' : 'bg-accent-500'}`} style={{ width: `${bar.pct}%` }} />
                  </div>
                  <span className="text-xs font-semibold text-surface-600 w-10 text-right">{bar.text}</span>
                </div>
              ))}
            </div>

            <h3 className="font-heading font-semibold text-surface-800 text-lg mb-3">English — Topic Frequency</h3>
            <div className="card p-5 space-y-3">
              {[
                { label: 'Reading Comprehension', pct: 80, text: '~30%' },
                { label: 'Fill in blanks / Cloze', pct: 55, text: '~20%' },
                { label: 'Error detection', pct: 42, text: '~15%' },
                { label: 'Para jumbles', pct: 35, text: '~12%' },
                { label: 'Vocabulary', pct: 30, text: '~10%' },
                { label: 'Grammar rules', pct: 25, text: '~13%', grey: true },
              ].map(bar => (
                <div key={bar.label} className="flex items-center gap-3">
                  <span className="text-xs text-surface-600 w-40 flex-shrink-0">{bar.label}</span>
                  <div className="flex-1 bg-surface-100 rounded-full h-2.5 overflow-hidden">
                    <div className={`h-full rounded-full ${bar.grey ? 'bg-surface-400' : 'bg-primary-500'}`} style={{ width: `${bar.pct}%` }} />
                  </div>
                  <span className="text-xs font-semibold text-surface-600 w-10 text-right">{bar.text}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* BOOKS */}
          <Section id="books" title="Best Books for SSC CGL 2026 Preparation">
            <div className="overflow-x-auto rounded-xl border border-surface-200 mb-4">
              <table className="w-full text-sm">
                <thead className="bg-surface-900 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Subject</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Recommended Book</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Why It Works</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Quantitative Aptitude', 'Quantitative Aptitude — R.S. Aggarwal', 'trusted', 'Most trusted. Covers all topics with shortcuts'],
                    ['Quantitative Aptitude', 'Magical Book on Quicker Maths — M. Tyra', 'trusted', 'Best for time-saving calculation methods'],
                    ['Reasoning', 'A Modern Approach to Verbal Reasoning — R.S. Aggarwal', 'standard', 'Covers all reasoning types comprehensively'],
                    ['English', 'Objective General English — S.P. Bakshi', 'trusted', 'Most popular. Grammar + vocab + exercises'],
                    ['General Awareness', "Lucent's General Knowledge", 'standard', 'Comprehensive static GK facts'],
                    ['Previous Papers', 'SSC CGL Previous Year Papers — Kiran Publication', 'trusted', 'Must-have. Real exam feel + pattern analysis'],
                  ].map(([subject, book, badge, why], i) => (
                    <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                      <td className="p-3 font-medium text-surface-800">{subject}</td>
                      <td className="p-3 text-surface-700">{book}</td>
                      <td className="p-3">
                        <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded mr-1 ${badge === 'trusted' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                          {badge === 'trusted' ? '✓ Trusted' : 'Standard'}
                        </span>
                        <span className="text-xs text-surface-500">{why}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Callout type="tip" title="✅ Golden Rule">
              Don't buy 5 books on the same subject. Pick <strong>one reliable source per subject</strong> and finish it completely before starting another. Consistency with a single source beats scattered reading of many.
            </Callout>
          </Section>

          {/* STRATEGY */}
          <Section id="strategy" title="Preparation Strategy for SSC CGL 2026">
            <p className="text-surface-600 leading-relaxed mb-5">
              With Tier 1 expected in May–June 2026, here's how to use the time left effectively:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                { num: '01', title: 'Master the syllabus, then the pattern', desc: 'Download the official syllabus PDF. Mark topics you know vs topics you need to learn. Build your study plan around the gaps.' },
                { num: '02', title: 'Treat every subject differently', desc: 'Quant needs daily practice. English needs rule clarity. Reasoning needs pattern exposure. GA needs consistent revision. One approach does not fit all.' },
                { num: '03', title: 'Prioritize Tier 2 from day one', desc: "Tier 1 is qualifying — don't over-prepare for it. Spend 60% of your time on Tier 2 syllabus topics right from the start." },
                { num: '04', title: 'Mock tests are non-negotiable', desc: 'Take at least one full-length mock every week. Review your mistakes after every test. It\'s the only way to know where you actually stand.' },
              ].map(card => (
                <div key={card.num} className="card p-5">
                  <div className="text-4xl font-heading font-bold text-surface-200 leading-none mb-2">{card.num}</div>
                  <div className="font-semibold text-surface-800 mb-2 text-sm">{card.title}</div>
                  <div className="text-xs text-surface-500 leading-relaxed">{card.desc}</div>
                </div>
              ))}
            </div>

            <h3 className="font-heading font-semibold text-surface-800 text-lg mb-3">Preparation Checklist</h3>
            <div className="card p-5 space-y-2">
              {[
                'Complete OTR registration on ssc.gov.in before application deadline',
                'Download and read the official SSC CGL 2026 notification PDF',
                'Bookmark TaiyarHo\'s monthly current affairs for GA preparation',
                'Solve last 5 years of SSC CGL previous year papers (at least once)',
                'Practice DEST typing daily — aim for 8,000+ keystrokes/hour',
                'Take one full mock test per week and review all mistakes',
                'Revise formulas, shortcuts, and vocabulary every weekend',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-2 border-b border-surface-100 last:border-0">
                  <div className="w-5 h-5 bg-accent-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-sm text-surface-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* FAQ */}
          <Section id="faq" title="Frequently Asked Questions">
            <div className="space-y-0">
              {[
                { q: 'Is Tier 1 score counted in the final SSC CGL merit list?', a: 'No. Tier 1 is purely qualifying. Only your Tier 2 (Paper I) score determines your final rank and post allocation. However, you must clear the Tier 1 cut-off to appear for Tier 2.' },
                { q: 'Is there a negative marking in SSC CGL?', a: 'Yes, in both tiers. In Tier 1, it\'s –0.50 marks per wrong answer. In Tier 2, it\'s –1 mark per wrong answer in Sections I and II, and –0.50 per wrong answer for Section III (Computer Knowledge). DEST has no negative marking.' },
                { q: 'Can I write SSC CGL in Hindi?', a: 'Most sections of Tier 1 and Tier 2 are bilingual (English and Hindi). The only exception is the English Language & Comprehension section, which must be answered in English only.' },
                { q: 'Is there an SSC CGL interview?', a: 'No. SSC CGL has no interview since 2016. Selection is entirely based on your written exam performance in Tier 2. Some posts require a skill test (DEST/typing) which is qualifying in nature.' },
                { q: 'What is the DEST test and who needs it?', a: 'DEST (Data Entry Speed Test) requires candidates to type approximately 2,000 key depressions in 15 minutes. It is compulsory for all SSC CGL candidates but only qualifying — it does not affect your merit rank.' },
                { q: 'What is a good score in SSC CGL Tier 2?', a: 'Total scored marks in Tier 2 Paper I are 450. Based on previous years\' cut-off trends, scoring above 340–360 out of 450 puts you in a strong position for most posts. The exact cut-off varies by category, post, and competition level each year.' },
              ].map((faq, i) => (
                <details key={i} className="border-b border-surface-200 group">
                  <summary className="flex items-start gap-3 py-4 cursor-pointer list-none font-medium text-surface-800 hover:text-primary-500 transition-colors">
                    <span className="w-6 h-6 bg-accent-500 text-white text-xs font-bold rounded flex items-center justify-center flex-shrink-0 mt-0.5">Q</span>
                    <span className="flex-1">{faq.q}</span>
                    <svg className="w-4 h-4 text-surface-400 flex-shrink-0 mt-1 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="pl-9 pb-4 text-sm text-surface-600 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </Section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-8 text-center text-white mb-10">
            <h3 className="font-heading font-bold text-xl mb-2">Start Your SSC CGL Preparation Today — It's Free</h3>
            <p className="text-primary-100 text-sm mb-5">Access free study notes, previous year papers, monthly current affairs, and exam guides on TaiyarHo. No fees. No hidden charges.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/exams/ssc-cgl" className="bg-white text-primary-600 font-heading font-bold px-6 py-3 rounded-xl hover:bg-primary-50 transition-all text-sm">
                View Full SSC CGL Guide →
              </Link>
              <Link href="/resources" className="border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all text-sm">
                Free Resources
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-surface-400 bg-surface-50 rounded-lg p-4">
            This article is based on official SSC notifications and publicly available exam data. Last updated: {post.updatedDate}. Always refer to the official notification on <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary-500">ssc.gov.in</a> for the latest information.
          </p>
        </article>

        {/* SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4">
            {/* TOC */}
            <div className="card p-5 border-l-4 border-primary-500">
              <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">📖 Table of Contents</div>
              <ol className="space-y-2 list-decimal list-inside">
                {toc.map(item => (
                  <li key={item.id} className="text-sm">
                    <a href={`#${item.id}`} className="text-primary-500 hover:text-primary-600 hover:underline">{item.label}</a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Related */}
            <div className="card p-5 bg-primary-50 border-primary-200">
              <h3 className="font-heading font-semibold text-primary-800 mb-3 text-sm">Related Guide</h3>
              <Link href="/exams/ssc-cgl" className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">
                Full SSC CGL Exam Guide →
              </Link>
              <p className="text-xs text-primary-500 mt-1">Books, study plan, free resources</p>
            </div>

            {/* Eligibility */}
            <div className="card p-5">
              <h3 className="font-heading font-semibold text-surface-800 mb-2 text-sm">Check Your Eligibility</h3>
              <p className="text-xs text-surface-500 mb-3">See if you qualify for SSC CGL based on your age and qualification.</p>
              <Link href="/tools/eligibility-checker" className="btn-primary text-xs w-full text-center">Check Now →</Link>
            </div>
          </div>
        </aside>
      </div>

      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'SSC CGL 2026 Syllabus: Complete Guide (Tier 1 & Tier 2)',
            description: 'Complete SSC CGL 2026 syllabus with topic-wise breakdown for Tier 1 and Tier 2, exam pattern, marking scheme, and free preparation tips. Updated April 2026.',
            datePublished: '2026-04-24',
            dateModified: '2026-04-26',
            author: { '@type': 'Organization', name: 'TaiyarHo', url: 'https://www.taiyarho.in' },
            publisher: { '@type': 'Organization', name: 'TaiyarHo', url: 'https://www.taiyarho.in', logo: { '@type': 'ImageObject', url: 'https://www.taiyarho.in/logo.svg' } },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.taiyarho.in/blog/ssc-cgl-2026-syllabus-complete-guide/' },
          }),
        }}
      />
      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What is the SSC CGL 2026 exam date?', acceptedAnswer: { '@type': 'Answer', text: 'SSC CGL 2026 Tier 1 is expected between September–October 2026. The official notification is typically released in April–May. Check ssc.gov.in for the latest schedule.' } },
              { '@type': 'Question', name: 'How many subjects are in SSC CGL Tier 1?', acceptedAnswer: { '@type': 'Answer', text: 'SSC CGL Tier 1 has 4 sections: General Intelligence & Reasoning (25 Qs), General Awareness (25 Qs), Quantitative Aptitude (25 Qs), and English Comprehension (25 Qs). Total: 100 questions, 200 marks, 60 minutes.' } },
              { '@type': 'Question', name: 'Is there negative marking in SSC CGL?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. In Tier 1, there is a negative marking of 0.50 marks for each wrong answer. In Tier 2, Module 1 of Paper 1 carries 1 mark negative marking per wrong answer.' } },
              { '@type': 'Question', name: 'What is the syllabus for SSC CGL Tier 2?', acceptedAnswer: { '@type': 'Answer', text: 'SSC CGL Tier 2 Paper 1 has three modules: Module 1 (Mathematical Abilities + Reasoning), Module 2 (English Language), and Module 3 (General Awareness + Computer Knowledge + Data Entry Speed Test). Paper 2 is Statistics for JSO post.' } },
            ],
          }),
        }}
      />
    </div>
  );
}

// ─── GOVERNMENT EXAM PREPARATION FOR BEGINNERS 2026 ──────────────────────────
function GovExamBeginnersArticle({ post }: { post: any }) {
  const toc = [
    { id: 'why', label: 'Why Government Jobs?' },
    { id: 'choose', label: 'Which Exam to Choose' },
    { id: 'roadmap', label: '12-Month Roadmap' },
    { id: 'subjects', label: 'Subject-wise Strategy' },
    { id: 'timetable', label: 'Daily Study Timetable' },
    { id: 'resources', label: 'Free Resources' },
    { id: 'mistakes', label: 'Mistakes to Avoid' },
    { id: 'faq', label: 'FAQs' },
  ];

  return (
    <div className="container-main py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/blog" className="hover:text-primary-500">Blog</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">Government Exam Preparation for Beginners</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-10 max-w-6xl">
        {/* MAIN CONTENT */}
        <article>
          {/* Hero */}
          <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-surface-900 rounded-2xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-400 rounded-full opacity-10 translate-y-1/2 -translate-x-1/4" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-accent-500/20 border border-accent-500/40 text-accent-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse" />
                  Updated {post.updatedDate}
                </span>
                <span className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded">Beginners</span>
                <span className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded">2026 Roadmap</span>
                <span className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded">Free Guide</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight mb-3">
                Government Exam Preparation for Beginners 2026 — <span className="text-accent-300 italic">From Zero to Selection</span>
              </h1>
              <p className="text-primary-200 text-base leading-relaxed mb-5 max-w-2xl">
                You have no coaching, no background, no idea where to start. This guide gives you the complete roadmap — which exam to pick, what to study, and a 12-month plan to get selected. 100% free.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-primary-300">
                <span>📅 {post.publishedDate}</span>
                <span>⏱ {post.readTime}</span>
                <span>🎯 For fresh starters, 18–30 yrs</span>
              </div>
            </div>
          </div>

          {/* Quick Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {[
              { label: 'Exams Covered', value: '100+', sub: 'Across 8 categories' },
              { label: 'Min. Qualification', value: '8th Pass', sub: 'Some exams need just 8th' },
              { label: 'Avg. Salary', value: '₹25K–₹60K', sub: 'Starting (before DA/HRA)' },
              { label: 'Prep Time', value: '6–12 mo', sub: 'For most beginner exams' },
            ].map(f => (
              <div key={f.label} className="card p-4 text-center">
                <div className="text-xs text-surface-400 uppercase tracking-wide font-semibold">{f.label}</div>
                <div className="text-xl font-heading font-bold text-accent-500 mt-1">{f.value}</div>
                <div className="text-xs text-surface-400 mt-0.5">{f.sub}</div>
              </div>
            ))}
          </div>

          {/* Hook callout */}
          <Callout type="info" title="🎯 Who Is This Guide For?">
            This guide is for complete beginners — students who just graduated, working professionals thinking of switching, or anyone who has heard about &quot;sarkari naukri&quot; but doesn&apos;t know where to start. No prior knowledge assumed. We cover everything from choosing an exam to getting selected.
          </Callout>

          {/* Mobile TOC */}
          <div className="card p-5 mb-10 border-l-4 border-primary-500 lg:hidden">
            <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">📖 Table of Contents</div>
            <ol className="grid grid-cols-2 gap-x-4 gap-y-1.5 list-decimal list-inside">
              {toc.map(item => (
                <li key={item.id}><a href={`#${item.id}`} className="text-sm text-primary-500 hover:underline">{item.label}</a></li>
              ))}
            </ol>
          </div>

          {/* ═══ SECTION 1: WHY GOVERNMENT JOBS ═══ */}
          <Section id="why" title="Why Government Jobs Are Still Worth It in 2026">
            <p className="text-surface-600 leading-relaxed mb-5">
              Every year, over 3 crore candidates apply for government exams in India. That&apos;s not blind herd mentality — government jobs offer benefits that most private sector positions simply cannot match, especially at the entry level.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {[
                { icon: '🔒', title: 'Job Security', desc: 'No layoffs, no downsizing. Your job is protected till retirement at 58–60.' },
                { icon: '💰', title: 'Salary + Perks', desc: '7th Pay Commission salary, DA, HRA, pension (NPS/OPS), medical benefits, LTC.' },
                { icon: '⚖️', title: 'Work-Life Balance', desc: 'Fixed working hours, gazetted holidays, earned leave. No midnight emails.' },
                { icon: '🏥', title: 'Medical & Pension', desc: 'CGHS/State health scheme for you and family. Pension after retirement.' },
                { icon: '📈', title: 'Career Growth', desc: 'Time-bound promotions. Many Group C officers retire as Group B or even Group A.' },
                { icon: '🏡', title: 'Social Status', desc: 'Government officer designation carries weight in society, especially in tier-2/3 cities.' },
              ].map(item => (
                <div key={item.title} className="card p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-surface-800 text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-surface-500 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
            <Callout type="tip" title="✅ Reality Check">
              Government jobs are competitive — but so is everything worth having. The key difference? Government exams have a <strong>defined syllabus, a transparent process, and no referral culture</strong>. If you study the right things, you will clear.
            </Callout>
          </Section>

          {/* ═══ SECTION 2: WHICH EXAM TO CHOOSE ═══ */}
          <Section id="choose" title="Which Government Exam Should You Choose?">
            <p className="text-surface-600 leading-relaxed mb-5">
              This is the most important decision you&apos;ll make. The wrong choice wastes months. Use this table to match your qualification and interest to the right exam category.
            </p>

            {/* Qualification-based exam picker */}
            <h3 className="font-heading font-semibold text-surface-800 text-lg mb-3">Find Your Exam by Qualification</h3>
            <div className="overflow-x-auto rounded-xl border border-surface-200 mb-6">
              <table className="w-full text-sm">
                <thead className="bg-surface-900 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Your Qualification</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Best Exams to Target</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Salary Range</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['8th / 10th Pass', 'SSC MTS, RRB Group D, State Police Constable', '₹18K–₹25K', 'Easy–Medium'],
                    ['12th Pass', 'SSC CHSL, SSC GD, Railway NTPC, Delhi Police', '₹22K–₹35K', 'Medium'],
                    ['Graduate (Any)', 'SSC CGL, IBPS PO/Clerk, RBI Assistant, State PSC', '₹30K–₹55K', 'Medium–Hard'],
                    ['Graduate (Specific)', 'UPSC IAS, UPSC ESE, SSC JE, SEBI, RBI Grade B', '₹50K–₹2L', 'Hard–Very Hard'],
                    ['Post Graduate', 'UGC NET, KVS PGT, NVS, UPSC, NABARD', '₹55K–₹1.5L', 'Hard'],
                  ].map(([qual, exams, salary, diff], i) => (
                    <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                      <td className="p-3 font-medium text-surface-800">{qual}</td>
                      <td className="p-3 text-surface-600">{exams}</td>
                      <td className="p-3 text-emerald-600 font-semibold text-xs">{salary}</td>
                      <td className="p-3">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                          diff === 'Easy–Medium' ? 'bg-emerald-100 text-emerald-700' :
                          diff === 'Medium' ? 'bg-blue-100 text-blue-700' :
                          diff === 'Medium–Hard' ? 'bg-amber-100 text-amber-700' :
                          diff === 'Hard' ? 'bg-orange-100 text-orange-700' :
                          'bg-red-100 text-red-700'
                        }`}>{diff}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Exam category comparison */}
            <h3 className="font-heading font-semibold text-surface-800 text-lg mb-3">Major Exam Categories at a Glance</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                { cat: 'SSC Exams', icon: '📝', exams: 'CGL, CHSL, MTS, GD, CPO', bestFor: 'Graduates wanting central govt desk jobs', prep: '6–8 months' },
                { cat: 'Banking Exams', icon: '🏦', exams: 'IBPS PO, SBI PO, RBI Assistant', bestFor: 'Graduates who like numbers and finance', prep: '4–6 months' },
                { cat: 'Railway Exams', icon: '🚂', exams: 'RRB NTPC, Group D, ALP, JE', bestFor: '10th/12th pass, huge vacancies', prep: '4–6 months' },
                { cat: 'UPSC Exams', icon: '🏛️', exams: 'IAS, NDA, CDS, CAPF', bestFor: 'Top-tier aspirants, leadership roles', prep: '12–24 months' },
                { cat: 'State PSC', icon: '🗺️', exams: 'MPSC, UPPSC, BPSC, RPSC', bestFor: 'Want to serve in home state', prep: '8–14 months' },
                { cat: 'Defence Exams', icon: '🎖️', exams: 'NDA, CDS, AFCAT, Agniveer', bestFor: 'Physically fit, want armed forces life', prep: '4–8 months' },
              ].map(item => (
                <div key={item.cat} className="card p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-heading font-bold text-surface-800">{item.cat}</span>
                  </div>
                  <div className="text-xs text-surface-500 mb-2">Popular: {item.exams}</div>
                  <div className="text-xs text-surface-600 mb-1"><strong>Best for:</strong> {item.bestFor}</div>
                  <div className="text-xs text-primary-500 font-semibold">Prep time: {item.prep}</div>
                </div>
              ))}
            </div>

            <Callout type="warning" title="⚡ Golden Rule for Beginners">
              Pick <strong>one exam category</strong> (e.g., SSC or Banking) and prepare for 2–3 exams within that category. Their syllabi overlap by 70–80%. Preparing for SSC CGL + CHSL + NTPC together makes sense. Preparing for SSC CGL + UPSC IAS + IBPS PO together does not.
            </Callout>

            <p className="text-sm text-surface-500 mt-4">
              Not sure which exam you qualify for? Use our <Link href="/tools/eligibility-checker" className="text-primary-500 font-semibold hover:underline">Eligibility Checker</Link> — enter your age and qualification, and it shows every exam you can apply for.
            </p>
          </Section>

          {/* ═══ SECTION 3: 12-MONTH ROADMAP ═══ */}
          <Section id="roadmap" title="The 12-Month Roadmap: From Zero to Selection">
            <p className="text-surface-600 leading-relaxed mb-6">
              Most government exams for graduates (SSC, Banking, Railway) can be cracked within 6–12 months of focused preparation. Here is a phase-wise roadmap that works for almost every beginner.
            </p>

            {/* Phase cards */}
            <div className="space-y-4 mb-6">
              {[
                {
                  phase: 'Phase 1',
                  title: 'Foundation',
                  months: 'Month 1–3',
                  color: 'bg-blue-500',
                  pct: '25%',
                  tasks: [
                    'Download and study the official syllabus of your target exam',
                    'Start with NCERT books (Class 6–10) for Maths, Science, and Social Studies',
                    'Learn one subject at a time — finish basics before moving to the next',
                    'Read one newspaper daily (The Hindu / Indian Express) for current affairs',
                    'Maintain a handwritten formula notebook from day one',
                  ],
                  tip: 'Don\'t take mock tests yet. Build concepts first. Speed comes later.',
                },
                {
                  phase: 'Phase 2',
                  title: 'Building',
                  months: 'Month 4–6',
                  color: 'bg-amber-500',
                  pct: '50%',
                  tasks: [
                    'Move to standard reference books (R.S. Aggarwal, S.P. Bakshi, Lucent GK)',
                    'Start solving topic-wise previous year questions',
                    'Begin sectional mock tests (one subject at a time)',
                    'Revise NCERT notes weekly — do not forget the foundation',
                    'Compile a monthly current affairs PDF and revise it regularly',
                  ],
                  tip: 'By Month 6, you should have covered 80% of the syllabus at least once.',
                },
                {
                  phase: 'Phase 3',
                  title: 'Practice & Mock Tests',
                  months: 'Month 7–10',
                  color: 'bg-orange-500',
                  pct: '80%',
                  tasks: [
                    'Take 2–3 full-length mock tests every week',
                    'Analyze every mock: find weak topics, time-wasters, silly mistakes',
                    'Solve last 5 years of previous year papers of your target exam',
                    'Focus on speed and accuracy — learn shortcuts and elimination techniques',
                    'Revise current affairs from last 6 months thoroughly',
                  ],
                  tip: 'Your rank is decided by mock test performance, not how many books you read.',
                },
                {
                  phase: 'Phase 4',
                  title: 'Revision & Exam',
                  months: 'Month 11–12',
                  color: 'bg-emerald-500',
                  pct: '100%',
                  tasks: [
                    'Stop learning new topics — only revise what you already know',
                    'Take one full-length mock daily in exam-like conditions',
                    'Revise formula notebook, error notebook, and current affairs notes',
                    'Practice time management: decide which questions to skip in advance',
                    'Sleep well, eat well, and stay calm before the exam',
                  ],
                  tip: 'In the last month, revision beats new learning. Trust your preparation.',
                },
              ].map(phase => (
                <div key={phase.phase} className="card overflow-hidden">
                  <div className="flex items-center gap-4 p-5 border-b border-surface-100">
                    <div className={`w-12 h-12 ${phase.color} rounded-xl flex items-center justify-center`}>
                      <span className="text-white font-heading font-bold text-sm">{phase.phase.split(' ')[1]}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-bold text-surface-900">{phase.phase}: {phase.title}</span>
                        <span className="text-xs bg-surface-100 text-surface-500 px-2 py-0.5 rounded">{phase.months}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 bg-surface-100 rounded-full h-1.5 overflow-hidden max-w-[200px]">
                          <div className={`h-full rounded-full ${phase.color}`} style={{ width: phase.pct }} />
                        </div>
                        <span className="text-xs text-surface-400">{phase.pct} syllabus</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="space-y-2 mb-3">
                      {phase.tasks.map((task, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 ${phase.color} rounded-full mt-1.5 flex-shrink-0`} />
                          <span className="text-sm text-surface-600">{task}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-surface-50 rounded-lg p-3 text-xs text-surface-500">
                      <strong className="text-surface-700">Pro tip:</strong> {phase.tip}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Callout type="info" title="📌 What If You Have Less Than 6 Months?">
              Compress Phases 1 and 2 into 2 months total. Skip NCERT and go directly to standard books + previous year papers. Increase mock test frequency to daily from Month 3. Many candidates clear exams like SSC CHSL, Banking Clerk, and RRB Group D in 3–4 months of focused study.
            </Callout>
          </Section>

          {/* ═══ SECTION 4: SUBJECT-WISE STRATEGY ═══ */}
          <Section id="subjects" title="Subject-wise Preparation Strategy">
            <p className="text-surface-600 leading-relaxed mb-6">
              Most government exams test four core subjects. Here is what to focus on in each — and what to skip.
            </p>

            <SubjectCard
              num="1" name="Quantitative Aptitude / Maths" meta="Tested in: SSC, Banking, Railway, State PSC" badge="Practice Heavy"
              desc="This is where most beginners struggle — and where toppers score highest. The secret is daily practice, not just reading theory. Learn shortcut methods early."
              hotTopics={['Percentage', 'Profit & Loss', 'Ratio & Proportion', 'Time & Work', 'Simple & Compound Interest']}
              normalTopics={['Number System', 'Average', 'Speed & Distance', 'Geometry', 'Trigonometry', 'Algebra', 'Data Interpretation', 'Mensuration']}
            />

            <SubjectCard
              num="2" name="Reasoning & Logic" meta="Tested in: SSC, Banking, Railway, Defence" badge="High Scoring"
              desc="Easiest subject to score in for beginners. No formulas to memorize — it's pure pattern recognition. Solve 20–30 questions daily and you'll see improvement within weeks."
              hotTopics={['Coding–Decoding', 'Blood Relations', 'Syllogism', 'Puzzles & Seating Arrangement', 'Direction Sense']}
              normalTopics={['Series', 'Analogies', 'Classification', 'Order & Ranking', 'Inequality', 'Data Sufficiency', 'Venn Diagrams', 'Mirror & Water Images']}
            />

            <SubjectCard
              num="3" name="English Language" meta="Tested in: SSC, Banking, UPSC (CSAT), Defence" badge="Differentiator"
              desc="Even Hindi-medium students can master English for exams. Focus on grammar rules and reading comprehension. Vocabulary improves naturally with daily newspaper reading."
              hotTopics={['Reading Comprehension', 'Error Detection', 'Fill in the Blanks (Cloze)', 'Sentence Improvement']}
              normalTopics={['Synonyms & Antonyms', 'One Word Substitution', 'Idioms & Phrases', 'Para Jumbles', 'Spelling Errors', 'Active/Passive Voice', 'Direct/Indirect Speech']}
            />

            <SubjectCard
              num="4" name="General Awareness / GK" meta="Tested in: All government exams" badge="Score Booster"
              desc="Divided into Static GK (history, geography, polity, science) and Current Affairs (last 6–12 months). NCERT is the foundation for static GK. Current affairs needs daily reading."
              hotTopics={['Current Affairs (last 6 months)', 'Indian History', 'Indian Polity & Constitution', 'Geography']}
              normalTopics={['Economics & Budget', 'General Science', 'Government Schemes', 'Sports & Awards', 'Important Days', 'Computer Basics', 'Banking Awareness']}
            />

            <Callout type="tip" title="✅ Priority Order for Beginners">
              <strong>Start with:</strong> Reasoning (easiest wins) → Maths (needs most practice) → English (grammar rules) → GK (daily habit). Don&apos;t try to study all four subjects on day one. Master one at a time in the first 2 months, then study all four daily.
            </Callout>
          </Section>

          {/* ═══ SECTION 5: DAILY TIMETABLE ═══ */}
          <Section id="timetable" title="Daily Study Timetable for Beginners">
            <p className="text-surface-600 leading-relaxed mb-5">
              You don&apos;t need 12 hours a day. Consistent 5–6 focused hours beat irregular 10-hour marathons. Here are two plans — one for full-time aspirants and one for working professionals.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
              {/* Full-time */}
              <div className="card overflow-hidden">
                <div className="bg-primary-500 text-white p-4">
                  <div className="font-heading font-bold">Full-Time Aspirant</div>
                  <div className="text-xs text-primary-100">5–6 hours/day | 6 days/week</div>
                </div>
                <div className="p-4 space-y-0">
                  {[
                    { time: '7:00 – 7:30 AM', task: 'Newspaper reading (current affairs)', tag: 'GK' },
                    { time: '8:00 – 10:00 AM', task: 'Maths — new concepts + practice', tag: 'Maths' },
                    { time: '10:30 – 12:00 PM', task: 'Reasoning — topic-wise questions', tag: 'Reasoning' },
                    { time: '2:00 – 3:00 PM', task: 'English — grammar + comprehension', tag: 'English' },
                    { time: '3:30 – 4:30 PM', task: 'GK — static + revision', tag: 'GK' },
                    { time: '8:00 – 9:00 PM', task: 'Revision + error notebook', tag: 'Revision' },
                  ].map((slot, i) => (
                    <div key={i} className="flex items-center gap-3 py-2.5 border-b border-surface-100 last:border-0">
                      <span className="text-xs text-surface-400 w-28 flex-shrink-0 font-mono">{slot.time}</span>
                      <span className="text-sm text-surface-700 flex-1">{slot.task}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                        slot.tag === 'Maths' ? 'bg-blue-100 text-blue-700' :
                        slot.tag === 'Reasoning' ? 'bg-purple-100 text-purple-700' :
                        slot.tag === 'English' ? 'bg-amber-100 text-amber-700' :
                        slot.tag === 'GK' ? 'bg-emerald-100 text-emerald-700' :
                        'bg-surface-100 text-surface-600'
                      }`}>{slot.tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Working professional */}
              <div className="card overflow-hidden">
                <div className="bg-surface-800 text-white p-4">
                  <div className="font-heading font-bold">Working Professional</div>
                  <div className="text-xs text-surface-300">3–4 hours/day | 7 days/week</div>
                </div>
                <div className="p-4 space-y-0">
                  {[
                    { time: '6:00 – 7:00 AM', task: 'Maths — practice 30 questions', tag: 'Maths' },
                    { time: '7:00 – 7:30 AM', task: 'Newspaper scan (headlines + editorials)', tag: 'GK' },
                    { time: 'Commute', task: 'YouTube lectures or GK revision app', tag: 'Flexible' },
                    { time: 'Lunch Break', task: 'English — 1 RC passage + grammar quiz', tag: 'English' },
                    { time: '9:00 – 10:30 PM', task: 'Reasoning + revision + mock analysis', tag: 'Reasoning' },
                    { time: 'Weekends', task: 'Full-length mock test + deep analysis', tag: 'Mock' },
                  ].map((slot, i) => (
                    <div key={i} className="flex items-center gap-3 py-2.5 border-b border-surface-100 last:border-0">
                      <span className="text-xs text-surface-400 w-28 flex-shrink-0 font-mono">{slot.time}</span>
                      <span className="text-sm text-surface-700 flex-1">{slot.task}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                        slot.tag === 'Maths' ? 'bg-blue-100 text-blue-700' :
                        slot.tag === 'Reasoning' ? 'bg-purple-100 text-purple-700' :
                        slot.tag === 'English' ? 'bg-amber-100 text-amber-700' :
                        slot.tag === 'GK' ? 'bg-emerald-100 text-emerald-700' :
                        slot.tag === 'Mock' ? 'bg-accent-50 text-accent-700' :
                        'bg-surface-100 text-surface-600'
                      }`}>{slot.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Callout type="tip" title="✅ Consistency Beats Intensity">
              Studying 4 hours every single day for 6 months is <strong>far more effective</strong> than studying 12 hours for 10 days and then burning out. Set a realistic target and stick to it. Use our <Link href="/guides/study-plan-working-professionals" className="text-emerald-700 underline font-semibold">study plan for working professionals</Link> for more detailed strategies.
            </Callout>
          </Section>

          {/* ═══ SECTION 6: FREE RESOURCES ═══ */}
          <Section id="resources" title="Best Free Resources (No Money Needed)">
            <p className="text-surface-600 leading-relaxed mb-5">
              You do <strong>not</strong> need expensive coaching or premium apps to crack government exams. Here are free resources that are genuinely enough.
            </p>

            <div className="overflow-x-auto rounded-xl border border-surface-200 mb-6">
              <table className="w-full text-sm">
                <thead className="bg-surface-900 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Resource</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Best For</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Cost</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['NCERT Books (ncert.nic.in)', 'Foundation for all subjects', 'Free', '⭐⭐⭐⭐⭐'],
                    ['YouTube (StudyIQ, Adda247, Exampur)', 'Video lectures for all exams', 'Free', '⭐⭐⭐⭐⭐'],
                    ['Official exam websites (ssc.gov.in, ibps.in)', 'Previous year papers + notifications', 'Free', '⭐⭐⭐⭐⭐'],
                    ['Testbook / Oliveboard free mocks', 'Mock tests with analysis', 'Free (limited)', '⭐⭐⭐⭐'],
                    ['Daily newspaper (The Hindu / Indian Express)', 'Current affairs', '₹0–₹300/mo', '⭐⭐⭐⭐⭐'],
                    ['Telegram groups (exam-specific)', 'Daily PDFs, quizzes, notifications', 'Free', '⭐⭐⭐'],
                    ['TaiyarHo.in', 'Exam guides, eligibility checker, resources', 'Free', '⭐⭐⭐⭐⭐'],
                  ].map(([resource, best, cost, rating], i) => (
                    <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                      <td className="p-3 font-medium text-surface-800">{resource}</td>
                      <td className="p-3 text-surface-600 text-xs">{best}</td>
                      <td className="p-3">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded ${cost === 'Free' ? 'bg-emerald-100 text-emerald-700' : 'bg-surface-100 text-surface-600'}`}>{cost}</span>
                      </td>
                      <td className="p-3 text-xs">{rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-heading font-semibold text-surface-800 text-lg mb-3">Recommended Books (Budget-Friendly)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {[
                { subject: 'Maths', book: 'Quantitative Aptitude — R.S. Aggarwal', price: '~₹500' },
                { subject: 'Reasoning', book: 'A Modern Approach — R.S. Aggarwal', price: '~₹450' },
                { subject: 'English', book: 'Objective General English — S.P. Bakshi', price: '~₹350' },
                { subject: 'GK', book: "Lucent's General Knowledge", price: '~₹250' },
              ].map(item => (
                <div key={item.subject} className="card p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 font-heading font-bold text-xs flex-shrink-0">
                    {item.subject.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-surface-800">{item.book}</div>
                    <div className="text-xs text-surface-400">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-surface-500">
              For a complete list of exam-specific free resources, visit our <Link href="/resources" className="text-primary-500 font-semibold hover:underline">Free Resources Hub</Link> and our guide on <Link href="/guides/best-free-resources-government-exams" className="text-primary-500 font-semibold hover:underline">Best Free Resources for Government Exams</Link>.
            </p>
          </Section>

          {/* ═══ SECTION 7: COMMON MISTAKES ═══ */}
          <Section id="mistakes" title="8 Mistakes That Fail 90% of Beginners">
            <p className="text-surface-600 leading-relaxed mb-5">
              Most aspirants don&apos;t fail because the exam is too hard — they fail because of avoidable mistakes. Learn from others&apos; failures.
            </p>

            <div className="space-y-3 mb-6">
              {[
                { num: '1', mistake: 'Preparing for too many exams at once', fix: 'Pick one exam category (SSC/Banking/Railway). Prepare for 2–3 exams within that category only.' },
                { num: '2', mistake: 'Buying 10 books and finishing none', fix: 'One book per subject. Finish it completely. Revise 3–4 times. Then (maybe) add another.' },
                { num: '3', mistake: 'Skipping mock tests until "syllabus is complete"', fix: 'Start mocks by Month 3. The syllabus is never "complete." Mocks show you what matters.' },
                { num: '4', mistake: 'Ignoring current affairs until exam month', fix: 'Read 30 minutes of news daily from day one. Current affairs is 20–25% of most exams.' },
                { num: '5', mistake: 'Not analyzing mock tests after taking them', fix: 'Spend equal time analyzing as taking the test. Find WHY you got wrong — not just WHAT.' },
                { num: '6', mistake: 'Studying 12 hours on Day 1, zero on Day 5', fix: 'Consistency wins. Even 2 hours daily beats random 10-hour bursts.' },
                { num: '7', mistake: 'Only reading theory, never practicing questions', fix: 'For every 1 hour of theory, spend 2 hours solving questions. Exams test speed, not memory.' },
                { num: '8', mistake: 'Following 20 YouTube channels and Telegram groups', fix: 'Pick 2–3 quality sources. Information overload is worse than no information.' },
              ].map(item => (
                <div key={item.num} className="card p-4 flex gap-4">
                  <div className="w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.num}
                  </div>
                  <div>
                    <div className="font-semibold text-surface-800 text-sm mb-1">❌ {item.mistake}</div>
                    <div className="text-xs text-surface-500 leading-relaxed">✅ <strong>Fix:</strong> {item.fix}</div>
                  </div>
                </div>
              ))}
            </div>

            <Callout type="warning" title="⚠️ The #1 Reason Aspirants Quit">
              They compare their beginning with someone else&apos;s middle. If you&apos;re starting in 2026 and see someone who has been preparing for 2 years, don&apos;t get discouraged. Everyone started from zero. Focus on <strong>your</strong> daily progress, not others&apos; highlight reels.
            </Callout>
          </Section>

          {/* ═══ SECTION 8: FAQ ═══ */}
          <Section id="faq" title="Frequently Asked Questions">
            <div className="space-y-0">
              {[
                { q: 'Can I crack a government exam without coaching?', a: 'Absolutely. Lakhs of candidates clear SSC, Banking, and Railway exams every year through self-study using free YouTube lectures, NCERT books, and mock tests. Coaching is optional — strategy and consistency are not.' },
                { q: 'How many hours should I study daily as a beginner?', a: 'Start with 3–4 focused hours and gradually increase to 5–6 hours over the first month. Quality matters more than quantity. Four distraction-free hours beat eight hours of scrolling between books and social media.' },
                { q: 'What is the easiest government exam to crack?', a: 'For 10th/12th pass: RRB Group D and SSC MTS have the simplest syllabi. For graduates: Banking Clerk exams (IBPS Clerk, SBI Clerk) have shorter syllabi and relatively lower cut-offs. However, "easy" depends on your strengths — pick what matches your profile.' },
                { q: 'I am a Hindi-medium student. Can I still prepare?', a: 'Yes. Most exams (SSC, Railway, State PSC) are available in Hindi medium. For the English section, focus on grammar rules and basic comprehension — you do not need fluent English. Many toppers are Hindi-medium students.' },
                { q: 'Is there an age limit for government exams?', a: 'Yes, every exam has minimum and maximum age limits. Most central government exams have an upper age limit of 27–32 years for general category, with relaxations for OBC (+3 years), SC/ST (+5 years), and PwBD (+10 years). Check our Age Relaxation Guide for detailed information.' },
                { q: 'How much does government exam preparation cost?', a: 'You can prepare almost entirely for free using NCERTs, YouTube, and official mock tests. If you want to buy books, budget ₹1,500–₹2,000 for four standard books. A premium mock test subscription costs ₹300–₹500/year. Total: under ₹2,500.' },
                { q: 'Which exam should I start with if I have no idea?', a: 'If you are a graduate, start preparing for SSC CGL or IBPS PO. They have well-defined syllabi, regular annual recruitment, large vacancies, and plenty of free study material available. Use our Eligibility Checker to see all exams you qualify for.' },
                { q: 'Can working professionals prepare for government exams?', a: 'Yes. Many successful candidates are working professionals who study 3–4 hours daily (early morning + late night + weekends). The key is consistency and using commute time for passive learning like podcasts and audio current affairs.' },
              ].map((faq, i) => (
                <details key={i} className="border-b border-surface-200 group">
                  <summary className="flex items-start gap-3 py-4 cursor-pointer list-none font-medium text-surface-800 hover:text-primary-500 transition-colors">
                    <span className="w-6 h-6 bg-accent-500 text-white text-xs font-bold rounded flex items-center justify-center flex-shrink-0 mt-0.5">Q</span>
                    <span className="flex-1">{faq.q}</span>
                    <svg className="w-4 h-4 text-surface-400 flex-shrink-0 mt-1 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="pl-9 pb-4 text-sm text-surface-600 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </Section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-8 text-center text-white mb-10">
            <h3 className="font-heading font-bold text-xl mb-2">Start Your Government Exam Journey Today — It&apos;s Free</h3>
            <p className="text-primary-100 text-sm mb-5 max-w-xl mx-auto">Browse exam guides, use the eligibility checker, and access free resources on TaiyarHo. No registration. No fees. Just start.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/exams" className="bg-white text-primary-600 font-heading font-bold px-6 py-3 rounded-xl hover:bg-primary-50 transition-all text-sm">
                Browse All Exams →
              </Link>
              <Link href="/tools/eligibility-checker" className="border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all text-sm">
                Check Your Eligibility
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-surface-400 bg-surface-50 rounded-lg p-4">
            This article is for informational purposes only. Exam patterns, eligibility, and syllabi may change — always verify from official exam websites. Last updated: {post.updatedDate}. Visit <Link href="/exams" className="text-primary-500">our exam pages</Link> for links to all official websites.
          </p>
        </article>

        {/* SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4">
            {/* TOC */}
            <div className="card p-5 border-l-4 border-primary-500">
              <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">📖 Table of Contents</div>
              <ol className="space-y-2 list-decimal list-inside">
                {toc.map(item => (
                  <li key={item.id} className="text-sm">
                    <a href={`#${item.id}`} className="text-primary-500 hover:text-primary-600 hover:underline">{item.label}</a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Popular exams */}
            <div className="card p-5 bg-primary-50 border-primary-200">
              <h3 className="font-heading font-semibold text-primary-800 mb-3 text-sm">Popular Exam Guides</h3>
              <div className="space-y-2">
                <Link href="/exams/ssc-cgl" className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">SSC CGL →</Link>
                <Link href="/exams/ibps-po" className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">IBPS PO →</Link>
                <Link href="/exams/rrb-ntpc" className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">RRB NTPC →</Link>
                <Link href="/exams/upsc-ias" className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">UPSC IAS →</Link>
              </div>
            </div>

            {/* Eligibility checker */}
            <div className="card p-5">
              <h3 className="font-heading font-semibold text-surface-800 mb-2 text-sm">Find Your Exams</h3>
              <p className="text-xs text-surface-500 mb-3">Enter your age and qualification — see every exam you qualify for.</p>
              <Link href="/tools/eligibility-checker" className="btn-primary text-xs w-full text-center">Check Eligibility →</Link>
            </div>

            {/* Free resources */}
            <div className="card p-5">
              <h3 className="font-heading font-semibold text-surface-800 mb-2 text-sm">Free Resources</h3>
              <p className="text-xs text-surface-500 mb-3">Books, YouTube channels, apps, and mock tests — all free.</p>
              <Link href="/resources" className="text-sm text-primary-500 hover:text-primary-600 font-medium">View Resources →</Link>
            </div>
          </div>
        </aside>
      </div>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.metaDescription,
            datePublished: '2026-04-27',
            dateModified: '2026-04-27',
            author: { '@type': 'Organization', name: 'TaiyarHo', url: 'https://www.taiyarho.in' },
            publisher: { '@type': 'Organization', name: 'TaiyarHo', url: 'https://www.taiyarho.in' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.taiyarho.in/blog/government-exam-preparation-beginners-2026/' },
          }),
        }}
      />
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Can I crack a government exam without coaching?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Lakhs of candidates clear SSC, Banking, and Railway exams every year through self-study using free YouTube lectures, NCERT books, and mock tests.' } },
              { '@type': 'Question', name: 'How many hours should I study daily as a beginner?', acceptedAnswer: { '@type': 'Answer', text: 'Start with 3–4 focused hours and gradually increase to 5–6 hours. Quality matters more than quantity.' } },
              { '@type': 'Question', name: 'What is the easiest government exam to crack?', acceptedAnswer: { '@type': 'Answer', text: 'For 10th/12th pass: RRB Group D and SSC MTS. For graduates: Banking Clerk exams have shorter syllabi and lower cut-offs.' } },
              { '@type': 'Question', name: 'I am a Hindi-medium student. Can I still prepare?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most exams are available in Hindi medium. For the English section, focus on grammar rules and basic comprehension.' } },
              { '@type': 'Question', name: 'How much does government exam preparation cost?', acceptedAnswer: { '@type': 'Answer', text: 'You can prepare almost entirely for free. Budget ₹1,500–₹2,000 for books and ₹300–₹500/year for premium mock tests. Total: under ₹2,500.' } },
              { '@type': 'Question', name: 'Which exam should I start with if I have no idea?', acceptedAnswer: { '@type': 'Answer', text: 'If you are a graduate, start with SSC CGL or IBPS PO. They have well-defined syllabi, regular recruitment, and plenty of free study material.' } },
            ],
          }),
        }}
      />
    </div>
  );
}


// ─── SSC CGL VS CHSL 2026 ARTICLE ────────────────────────────────────────────
function SscCglVsChslArticle({ post }: { post: any }) {
  const toc = [
    { id: 'snapshot', label: 'Quick Snapshot' },
    { id: 'eligibility', label: 'Eligibility Comparison' },
    { id: 'exam-pattern', label: 'Exam Pattern & Difficulty' },
    { id: 'syllabus', label: 'Syllabus Depth' },
    { id: 'posts-salary', label: 'Posts & Salary 2026' },
    { id: 'vacancies', label: 'Vacancies Trend' },
    { id: 'career-growth', label: 'Career Growth' },
    { id: 'faq', label: 'FAQs' },
    { id: 'verdict', label: 'Final Verdict' },
  ];

  return (
    <div className="container-main py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/blog" className="hover:text-primary-500">Blog</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">SSC CGL vs CHSL 2026</span>
      </nav>

      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.metaDescription,
            datePublished: '2026-04-28',
            dateModified: '2026-04-28',
            author: { '@type': 'Organization', name: 'TaiyarHo', url: 'https://www.taiyarho.in' },
            publisher: { '@type': 'Organization', name: 'TaiyarHo', url: 'https://www.taiyarho.in' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.taiyarho.in/blog/ssc-cgl-vs-chsl-which-is-easier-2026/' },
          }),
        }}
      />
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Is SSC CGL harder than SSC CHSL?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. SSC CGL is significantly harder than SSC CHSL. CGL has deeper mathematics (Algebra, Trigonometry, Data Interpretation), tougher English, and more questions per section. CHSL questions are of Class 10–12 standard, while CGL expects graduation-level depth. CGL competition is also much higher.' } },
              { '@type': 'Question', name: 'Will SSC CGL vacancies increase in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'SSC CGL 2026 is expected to have approximately 14,000–15,000 vacancies, similar to 2025 which had 14,582 posts. The trend shows stable vacancy numbers over the past 3 years. An increase cannot be confirmed until the official notification is released on ssc.gov.in.' } },
              { '@type': 'Question', name: 'What is the salary of SSC CHSL in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'SSC CHSL salary in 2026 ranges from ₹25,000–₹30,000 per month for LDC/JSA posts to ₹35,000–₹42,000 per month for DEO/PA/SA posts. This includes basic pay plus DA, HRA, and TA allowances under the 7th Pay Commission.' } },
              { '@type': 'Question', name: 'Which job is called mini IAS?', acceptedAnswer: { '@type': 'Answer', text: 'The Assistant Section Officer (ASO) in the Central Secretariat Service (CSS) under SSC CGL is often called the "mini IAS." ASOs work directly with IAS officers on policy files and have one of the fastest promotion tracks in SSC CGL — ASO to Section Officer in just 3–5 years.' } },
              { '@type': 'Question', name: 'Who is the rank 1 topper of SSC CHSL?', acceptedAnswer: { '@type': 'Answer', text: 'SSC does not officially publish a single rank 1 topper for CHSL. Final merit is category-wise and post-wise. The highest scorers are typically from the General category in DEO Grade A posts. SSC publishes merit lists on ssc.gov.in after each cycle.' } },
              { '@type': 'Question', name: 'Can a 12th pass student appear in SSC CGL?', acceptedAnswer: { '@type': 'Answer', text: 'No. SSC CGL requires a graduation degree (any stream) from a recognised university. Final year students can apply conditionally, but must produce their degree certificate by the document verification stage.' } },
            ],
          }),
        }}
      />

      <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-10 max-w-6xl">
        {/* MAIN CONTENT */}
        <article>
          {/* Hero */}
          <div className="bg-gradient-to-br from-surface-900 via-primary-900 to-surface-900 rounded-2xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-accent-500 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-400 rounded-full opacity-10 translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-accent-500/20 border border-accent-500/40 text-accent-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse" />
                  Updated {post.publishedDate}
                </span>
                <span className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded">SSC CGL</span>
                <span className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded">SSC CHSL</span>
                <span className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded">Comparison 2026</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight mb-3">
                SSC CGL vs CHSL: <span className="text-accent-300 italic">Which is Easier</span> and More Worth It in 2026?
              </h1>
              <p className="text-surface-300 text-base leading-relaxed mb-5">
                A clear, data-backed comparison of both exams — eligibility, salary, difficulty, posts, vacancies, and a definitive recommendation based on your profile.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-surface-400">
                <span>📅 {post.publishedDate}</span>
                <span>⏱ {post.readTime}</span>
                <span>📊 Based on official SSC data</span>
              </div>
            </div>
          </div>

          {/* Key Answer Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {[
              { q: 'Which is harder?', a: 'SSC CGL', sub: 'By a significant margin' },
              { q: 'Better salary?', a: 'SSC CGL', sub: '₹50K–75K/month in metros' },
              { q: 'Easier to clear?', a: 'SSC CHSL', sub: 'Simpler syllabus, Class 10–12 level' },
            ].map(f => (
              <div key={f.q} className="card p-4 text-center border-t-4 border-accent-500">
                <div className="text-xs text-surface-400 uppercase tracking-wide font-semibold">{f.q}</div>
                <div className="text-lg font-heading font-bold text-accent-500 mt-1">{f.a}</div>
                <div className="text-xs text-surface-400 mt-0.5">{f.sub}</div>
              </div>
            ))}
          </div>

          <Callout type="info" title="📌 Who Should Read This?">
            If you are a <strong>12th pass student</strong> wondering whether to wait for graduation and target CGL, or jump into CHSL now — this comparison is written exactly for you. Also useful for <strong>graduates</strong> deciding whether CGL's extra effort is worth it over CHSL.
          </Callout>

          {/* TOC mobile */}
          <div className="card p-5 mb-10 border-l-4 border-primary-500 lg:hidden">
            <div className="font-heading font-bold text-sm text-surface-800 mb-3">📋 Table of Contents</div>
            <ol className="space-y-1.5">
              {toc.map((item, i) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-sm text-primary-600 hover:text-primary-800 hover:underline">
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* SECTION 1: QUICK SNAPSHOT */}
          <Section id="snapshot" title="1. Quick Snapshot: CGL vs CHSL at a Glance">
            <p className="text-surface-600 text-sm mb-5 leading-relaxed">
              Before diving deep, here's the complete side-by-side picture. Both exams are conducted by the Staff Selection Commission (SSC) but are fundamentally different in who they're for and what they offer.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-900 text-white">
                    <th className="p-3 text-left font-heading font-semibold rounded-tl-lg">Parameter</th>
                    <th className="p-3 text-center font-heading font-semibold text-accent-300">SSC CGL</th>
                    <th className="p-3 text-center font-heading font-semibold text-emerald-300 rounded-tr-lg">SSC CHSL</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Full Form', 'Combined Graduate Level', 'Combined Higher Secondary Level'],
                    ['Minimum Education', 'Graduation (any stream)', '12th Pass (10+2)'],
                    ['Age Limit', '18–32 years (varies by post)', '18–27 years'],
                    ['Number of Tiers', '2 Tiers (Tier 1 qualifying)', '2 Tiers (Tier 1 qualifying)'],
                    ['Difficulty Level', '⭐⭐⭐⭐⭐ High', '⭐⭐⭐ Moderate'],
                    ['Vacancies (2025)', '~14,582 posts', '~3,131 posts'],
                    ['Expected Vacancies 2026', '14,000–15,000', '~3,500 (estimated)'],
                    ['Post Category', 'Group B & Group C', 'Group C (mostly clerical)'],
                    ['Top Posts', 'Income Tax Inspector, ASO, CBI SI', 'LDC, DEO, Postal Assistant'],
                    ['Starting In-Hand Salary', '₹44,000–₹55,000/month', '₹25,000–₹42,000/month'],
                    ['Promotion Speed', 'Faster (merit-based)', 'Slower (departmental exams)'],
                    ['Conducting Body', 'Staff Selection Commission', 'Staff Selection Commission'],
                    ['Official Website', 'ssc.gov.in', 'ssc.gov.in'],
                  ].map(([param, cgl, chsl], idx) => (
                    <tr key={param} className={idx % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="p-3 font-medium text-surface-700 border-b border-surface-100">{param}</td>
                      <td className="p-3 text-center text-surface-600 border-b border-surface-100">{cgl}</td>
                      <td className="p-3 text-center text-surface-600 border-b border-surface-100">{chsl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Callout type="tip" title="💡 Key Takeaway">
              Both exams are from the same body (SSC) but are aimed at entirely different candidates. CGL is for graduates chasing officer-level posts. CHSL is for 12th-pass aspirants wanting a stable central government job early.
            </Callout>
          </Section>

          {/* SECTION 2: ELIGIBILITY */}
          <Section id="eligibility" title="2. Eligibility Comparison: Who Can Apply?">
            <p className="text-surface-600 text-sm mb-5 leading-relaxed">
              Eligibility is the most fundamental difference. If you haven't graduated yet, you simply cannot apply for CGL — and that's where CHSL becomes the smarter starting move.
            </p>
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div className="card p-5 border-t-4 border-accent-500">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 bg-accent-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">CGL</span>
                  <h3 className="font-heading font-bold text-surface-900">SSC CGL 2026</h3>
                </div>
                <ul className="space-y-2 text-sm text-surface-600">
                  <li className="flex gap-2"><span className="text-accent-500 font-bold mt-0.5">✓</span><span><strong>Education:</strong> Bachelor's Degree (any stream) from a recognised university. Final year students can apply conditionally.</span></li>
                  <li className="flex gap-2"><span className="text-accent-500 font-bold mt-0.5">✓</span><span><strong>Age:</strong> 18–32 years (General). Varies by post — some posts go up to 30 years.</span></li>
                  <li className="flex gap-2"><span className="text-accent-500 font-bold mt-0.5">✓</span><span><strong>Relaxation:</strong> OBC +3 yrs, SC/ST +5 yrs, PwBD +10 yrs, Ex-Servicemen +5 yrs</span></li>
                  <li className="flex gap-2"><span className="text-accent-500 font-bold mt-0.5">✓</span><span><strong>Special:</strong> AAO post requires CA/MBA Finance/CMA. JSO requires Statistics as a subject in graduation.</span></li>
                  <li className="flex gap-2"><span className="text-accent-500 font-bold mt-0.5">✓</span><span><strong>Attempts:</strong> Unlimited — only upper age limit matters.</span></li>
                </ul>
              </div>
              <div className="card p-5 border-t-4 border-emerald-500">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">CHSL</span>
                  <h3 className="font-heading font-bold text-surface-900">SSC CHSL 2026</h3>
                </div>
                <ul className="space-y-2 text-sm text-surface-600">
                  <li className="flex gap-2"><span className="text-emerald-500 font-bold mt-0.5">✓</span><span><strong>Education:</strong> 12th Pass (10+2) or equivalent from any recognised board. No specific stream required for most posts.</span></li>
                  <li className="flex gap-2"><span className="text-emerald-500 font-bold mt-0.5">✓</span><span><strong>Age:</strong> 18–27 years (General). Narrower age window than CGL.</span></li>
                  <li className="flex gap-2"><span className="text-emerald-500 font-bold mt-0.5">✓</span><span><strong>Relaxation:</strong> OBC +3 yrs, SC/ST +5 yrs, PwBD +10 yrs, Ex-Servicemen as per govt rules</span></li>
                  <li className="flex gap-2"><span className="text-emerald-500 font-bold mt-0.5">✓</span><span><strong>Special:</strong> DEO post requires Science stream with Maths in Class 12. DEO Grade A (Department of Posts) has specific eligibility.</span></li>
                  <li className="flex gap-2"><span className="text-emerald-500 font-bold mt-0.5">✓</span><span><strong>Key point:</strong> Graduates can also apply for CHSL and often gain an edge in English and reasoning sections.</span></li>
                </ul>
              </div>
            </div>
            <Callout type="warning" title="⚠️ Age Trap — Read Before You Plan">
              CHSL has a stricter upper age limit of 27 years for General category. If you're 25+ and still a graduate student, your CHSL window is closing fast. Plan accordingly: many aspirants complete graduation first, attempt CGL, and simultaneously appear for CHSL as a backup.
            </Callout>
          </Section>

          {/* SECTION 3: EXAM PATTERN */}
          <Section id="exam-pattern" title="3. Exam Pattern & Difficulty Level">
            <p className="text-surface-600 text-sm mb-5 leading-relaxed">
              Both exams now follow a streamlined 2-tier structure after SSC's 2023 restructuring. But the <em>depth</em> of questions is where they diverge sharply.
            </p>
            <div className="overflow-x-auto mb-5">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-800 text-white">
                    <th className="p-3 text-left font-heading">Aspect</th>
                    <th className="p-3 text-center font-heading text-accent-300">SSC CGL</th>
                    <th className="p-3 text-center font-heading text-emerald-300">SSC CHSL</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Tiers', '2 Tiers', '2 Tiers'],
                    ['Tier 1 Role', 'Qualifying only (marks NOT counted)', 'Qualifying only (marks NOT counted)'],
                    ['Tier 2 Role', 'Final merit list — main exam', 'Final merit list — main exam'],
                    ['Tier 1 Qs / Marks', '100 Qs / 200 marks / 60 min', '100 Qs / 200 marks / 60 min'],
                    ['Tier 2 Paper I', 'Compulsory for all — 3 sections, ~2.5 hrs', 'Compulsory for all — 3 sections, ~2.5 hrs'],
                    ['Tier 2 Paper II', 'Only for JSO posts (Statistics)', 'Not applicable'],
                    ['Maths Depth', 'Advanced: Algebra, Trigonometry, DI', 'Basic: Arithmetic, BODMAS level'],
                    ['English Depth', 'Cloze test, Para-jumbles, Reading Comprehension', 'Grammar rules, Synonyms, Fill-in-the-blanks'],
                    ['Negative Marking', '0.50 marks per wrong answer (Tier 1)', '0.50 marks per wrong answer (Tier 1)'],
                    ['Competition Level', 'Very High (~30–40 lakh applicants)', 'High (~20–25 lakh applicants)'],
                    ['Cut-off Pattern', 'Generally 130–150/200 (Tier 1)', 'Generally 115–135/200 (Tier 1)'],
                    ['Overall Difficulty', '⭐⭐⭐⭐⭐ High', '⭐⭐⭐ Moderate'],
                  ].map(([asp, cgl, chsl], idx) => (
                    <tr key={asp} className={idx % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="p-3 font-medium text-surface-700 border-b border-surface-100">{asp}</td>
                      <td className="p-3 text-center text-surface-600 border-b border-surface-100">{cgl}</td>
                      <td className="p-3 text-center text-surface-600 border-b border-surface-100">{chsl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5">
              <h4 className="font-heading font-bold text-amber-800 mb-3">🔥 Is SSC CGL Harder Than CHSL? — The Honest Answer</h4>
              <p className="text-sm text-amber-700 leading-relaxed mb-3">
                <strong>Yes, significantly harder.</strong> Here's the exact breakdown:
              </p>
              <ul className="space-y-2 text-sm text-amber-700">
                <li><strong>Quantitative Aptitude:</strong> CGL expects Algebra, Trigonometry, Coordinate Geometry, and Data Interpretation at degree level. CHSL stays at basic arithmetic — percentage, ratio, profit-loss.</li>
                <li><strong>English:</strong> CGL has longer reading passages, complex cloze tests, and advanced vocabulary. CHSL focuses on grammar rules and simpler comprehension.</li>
                <li><strong>General Awareness:</strong> Overlap is high, but CGL expects deeper current affairs and static GK coverage.</li>
                <li><strong>Competition:</strong> CGL sees a cut-off 10–20 marks higher than CHSL in most categories in Tier 1.</li>
                <li><strong>Preparation time:</strong> CHSL can be cracked with 4–6 months of serious prep. CGL typically demands 8–12 months for a fresh graduate.</li>
              </ul>
            </div>
          </Section>

          {/* SECTION 4: SYLLABUS */}
          <Section id="syllabus" title="4. Syllabus Depth — Where They Actually Differ">
            <p className="text-surface-600 text-sm mb-4 leading-relaxed">
              The subjects are the same in both exams. But the level of questions is where the real gap lies.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse mb-4">
                <thead>
                  <tr className="bg-primary-900 text-white">
                    <th className="p-3 text-left font-heading">Subject</th>
                    <th className="p-3 text-center font-heading text-accent-300">SSC CGL Level</th>
                    <th className="p-3 text-center font-heading text-emerald-300">SSC CHSL Level</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Quantitative Aptitude', 'Advanced — Algebra, Trigonometry, Geometry, DI, Surds', 'Basic — Arithmetic, Percentage, SI/CI, Profit-Loss'],
                    ['Reasoning / Intelligence', 'Complex analogies, syllogisms, matrix, non-verbal patterns', 'Moderate — Series, analogy, coding-decoding, Venn diagrams'],
                    ['English Language', 'Reading Comprehension, Cloze, Para-jumbles, Advanced Vocabulary', 'Grammar, Synonyms/Antonyms, Sentence correction, Fill-in-the-blanks'],
                    ['General Awareness', 'Current affairs + deep Static GK, Economy, Polity, Science', 'Current affairs + standard Static GK (lighter depth)'],
                    ['Computer Knowledge', 'Qualifying only — basic MS Office, internet concepts', 'Qualifying only — similar to CGL'],
                  ].map(([sub, cgl, chsl], idx) => (
                    <tr key={sub} className={idx % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="p-3 font-medium text-surface-700 border-b border-surface-100">{sub}</td>
                      <td className="p-3 text-sm text-surface-600 border-b border-surface-100">{cgl}</td>
                      <td className="p-3 text-sm text-surface-600 border-b border-surface-100">{chsl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Callout type="tip" title="💡 Smart Strategy for Dual Aspirants">
              If you are preparing for SSC CGL, your preparation automatically covers the entire CHSL syllabus — and goes well beyond it. Many serious aspirants appear for CHSL as a safety net while targeting CGL as their primary goal. This dual strategy is highly recommended.
            </Callout>
          </Section>

          {/* SECTION 5: POSTS & SALARY */}
          <Section id="posts-salary" title="5. Posts & Salary in 2026 — The Complete Picture">
            <p className="text-surface-600 text-sm mb-5 leading-relaxed">
              Salary is often the deciding factor. Here is the full, honest breakdown including in-hand pay, not just basic pay.
            </p>

            <h3 className="font-heading font-bold text-surface-800 mb-3 text-lg">SSC CGL 2026 — Top Posts & Salary</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-800 text-white">
                    <th className="p-3 text-left font-heading">Post</th>
                    <th className="p-3 text-center font-heading">Pay Level</th>
                    <th className="p-3 text-center font-heading">Basic Pay</th>
                    <th className="p-3 text-center font-heading">In-Hand (Metro)</th>
                    <th className="p-3 text-center font-heading">Department</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Income Tax Inspector', 'Level 7', '₹44,900', '₹65,000–75,000', 'CBDT'],
                    ['Assistant Section Officer (CSS)', 'Level 7', '₹44,900', '₹60,000–72,000', 'DoPT / Various Ministries'],
                    ['Assistant Enforcement Officer', 'Level 7', '₹44,900', '₹62,000–74,000', 'Enforcement Directorate'],
                    ['Sub-Inspector (CBI)', 'Level 6', '₹35,400', '₹55,000–65,000', 'CBI'],
                    ['Inspector (Central Excise)', 'Level 7', '₹44,900', '₹60,000–70,000', 'CBIC'],
                    ['Auditor', 'Level 5', '₹29,200', '₹44,000–52,000', 'CAG / CGDA'],
                    ['Tax Assistant', 'Level 4', '₹25,500', '₹38,000–48,000', 'CBDT / CBIC'],
                    ['Junior Statistical Officer', 'Level 6', '₹35,400', '₹52,000–62,000', 'M/o Statistics'],
                  ].map(([post, lvl, basic, inhand, dept], idx) => (
                    <tr key={post} className={idx % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="p-3 font-medium text-surface-800 border-b border-surface-100">{post}</td>
                      <td className="p-3 text-center text-surface-600 border-b border-surface-100">{lvl}</td>
                      <td className="p-3 text-center text-surface-600 border-b border-surface-100">{basic}</td>
                      <td className="p-3 text-center font-semibold text-accent-600 border-b border-surface-100">{inhand}</td>
                      <td className="p-3 text-center text-surface-500 text-xs border-b border-surface-100">{dept}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-heading font-bold text-surface-800 mb-3 text-lg">SSC CHSL 2026 — Posts & Salary</h3>
            <div className="overflow-x-auto mb-5">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-800 text-white">
                    <th className="p-3 text-left font-heading">Post</th>
                    <th className="p-3 text-center font-heading">Pay Level</th>
                    <th className="p-3 text-center font-heading">Basic Pay</th>
                    <th className="p-3 text-center font-heading">In-Hand (Metro)</th>
                    <th className="p-3 text-center font-heading">Nature of Work</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Lower Division Clerk (LDC)', 'Level 2', '₹19,900', '₹27,000–32,000', 'Clerical / File management'],
                    ['Junior Secretariat Asst. (JSA)', 'Level 2', '₹19,900', '₹27,000–32,000', 'Clerical in ministries'],
                    ['Postal Assistant (PA)', 'Level 4', '₹25,500', '₹35,000–42,000', 'Mail handling / postal ops'],
                    ['Sorting Assistant (SA)', 'Level 4', '₹25,500', '₹35,000–42,000', 'Sorting mail, Dept. of Posts'],
                    ['Data Entry Operator (DEO)', 'Level 4', '₹25,500', '₹35,000–42,000', 'Computer-based data entry'],
                    ['DEO Grade A (Dept. of Posts)', 'Level 5', '₹29,200', '₹38,000–46,000', 'Senior DEO role'],
                  ].map(([post, lvl, basic, inhand, nature], idx) => (
                    <tr key={post} className={idx % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="p-3 font-medium text-surface-800 border-b border-surface-100">{post}</td>
                      <td className="p-3 text-center text-surface-600 border-b border-surface-100">{lvl}</td>
                      <td className="p-3 text-center text-surface-600 border-b border-surface-100">{basic}</td>
                      <td className="p-3 text-center font-semibold text-emerald-600 border-b border-surface-100">{inhand}</td>
                      <td className="p-3 text-center text-surface-500 text-xs border-b border-surface-100">{nature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h4 className="font-heading font-bold text-blue-800 mb-2">🏆 Which Job is Called "Mini IAS"?</h4>
              <p className="text-sm text-blue-700 leading-relaxed">
                The <strong>Assistant Section Officer (ASO) in the Central Secretariat Service (CSS)</strong> under SSC CGL is widely known as the <strong>"Mini IAS"</strong> in government job circles. Here's why: ASOs work directly with IAS officers on policy files in central government ministries. They process decisions that shape national policy, draft important communications, and sit in the same secretariat where the country's administration happens. The promotion path is also the fastest in all of SSC CGL — ASO → Section Officer in just 3–5 years → Under Secretary → Deputy Secretary → Joint Secretary. An ASO who plays their cards right can reach a position equivalent to a State IAS officer within 15–20 years — without ever having to crack UPSC.
              </p>
            </div>
          </Section>

          {/* SECTION 6: VACANCIES */}
          <Section id="vacancies" title="6. Vacancies Trend — Will CGL Vacancies Increase in 2026?">
            <p className="text-surface-600 text-sm mb-5 leading-relaxed">
              One of the biggest questions aspirants ask every year: will vacancies go up? Here's what the data actually shows.
            </p>
            <div className="overflow-x-auto mb-5">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-800 text-white">
                    <th className="p-3 text-left font-heading">Year</th>
                    <th className="p-3 text-center font-heading text-accent-300">SSC CGL Vacancies</th>
                    <th className="p-3 text-center font-heading text-emerald-300">SSC CHSL Vacancies</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['2022', '20,000+', '4,500+'],
                    ['2023', '7,500 (low year)', '~3,500'],
                    ['2024', '17,727', '~3,700'],
                    ['2025', '14,582', '~3,131'],
                    ['2026 (Expected)', '14,000–15,000', '~3,500 (estimated)'],
                  ].map(([year, cgl, chsl], idx) => (
                    <tr key={year} className={idx % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="p-3 font-medium text-surface-700 border-b border-surface-100">{year}</td>
                      <td className={`p-3 text-center font-semibold border-b border-surface-100 ${year === '2026 (Expected)' ? 'text-accent-600' : 'text-surface-600'}`}>{cgl}</td>
                      <td className={`p-3 text-center font-semibold border-b border-surface-100 ${year === '2026 (Expected)' ? 'text-emerald-600' : 'text-surface-600'}`}>{chsl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Callout type="info" title="📊 Vacancy Verdict for 2026">
              <strong>CGL 2026:</strong> Approximately 14,000–15,000 vacancies are expected based on the 2024–2025 trend. A significant surge (like 2022) is unlikely but not impossible — it depends on government hiring requirements. The official notification on ssc.gov.in will confirm numbers.<br/><br/>
              <strong>CHSL 2026:</strong> CHSL consistently sees fewer vacancies than CGL (around 3,000–4,000 posts), making competition per seat actually comparable despite the easier syllabus. Don't assume CHSL is easy to get just because the paper is easier — the final merit is highly competitive too.
            </Callout>
          </Section>

          {/* SECTION 7: CAREER GROWTH */}
          <Section id="career-growth" title="7. Career Growth — The Long Game">
            <p className="text-surface-600 text-sm mb-5 leading-relaxed">
              Salary at joining is one thing. The 20-year trajectory is where CGL and CHSL diverge most dramatically.
            </p>
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div className="card p-5">
                <h4 className="font-heading font-bold text-accent-600 mb-3">SSC CGL Career Path</h4>
                <div className="space-y-3">
                  {[
                    { year: 'Year 0', role: 'Inspector / ASO / Auditor', pay: '₹44,000–65,000/month' },
                    { year: 'Year 5–7', role: 'Section Officer / Senior Inspector', pay: '₹55,000–80,000/month' },
                    { year: 'Year 10–12', role: 'Under Secretary / Dy. Commissioner', pay: '₹70,000–1,00,000/month' },
                    { year: 'Year 15–20', role: 'Deputy Secretary / Joint Secretary level', pay: '₹1,00,000–1,60,000/month' },
                  ].map(step => (
                    <div key={step.year} className="flex items-start gap-3">
                      <span className="text-xs bg-accent-100 text-accent-700 font-bold px-2 py-1 rounded whitespace-nowrap">{step.year}</span>
                      <div>
                        <div className="font-medium text-sm text-surface-800">{step.role}</div>
                        <div className="text-xs text-surface-500">{step.pay}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card p-5">
                <h4 className="font-heading font-bold text-emerald-600 mb-3">SSC CHSL Career Path</h4>
                <div className="space-y-3">
                  {[
                    { year: 'Year 0', role: 'LDC / DEO / Postal Assistant', pay: '₹27,000–42,000/month' },
                    { year: 'Year 5–8', role: 'Upper Division Clerk (after dept. exam)', pay: '₹35,000–50,000/month' },
                    { year: 'Year 10–15', role: 'Section Officer / Assistant (with dept. exams)', pay: '₹50,000–65,000/month' },
                    { year: 'Year 20+', role: 'Senior Section Officer / Deputy Manager', pay: '₹65,000–85,000/month' },
                  ].map(step => (
                    <div key={step.year} className="flex items-start gap-3">
                      <span className="text-xs bg-emerald-100 text-emerald-700 font-bold px-2 py-1 rounded whitespace-nowrap">{step.year}</span>
                      <div>
                        <div className="font-medium text-sm text-surface-800">{step.role}</div>
                        <div className="text-xs text-surface-500">{step.pay}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Callout type="info" title="📌 CHSL to CGL — The Bridge Strategy">
              Many CHSL joiners appear for SSC CGL after joining, use their job security as a psychological cushion, and crack CGL from inside a government job. This is one of the smartest strategies in the SSC ecosystem. You get a stable salary, no exam anxiety, and a genuine shot at upgrading your designation.
            </Callout>
          </Section>

          {/* SECTION 8: FAQs */}
          <Section id="faq" title="8. FAQs — Everything Aspirants Actually Ask">
            <div className="space-y-4">
              {[
                {
                  q: 'Is SSC CGL harder than SSC CHSL?',
                  a: 'Yes — significantly. CGL demands graduation-level maths (Algebra, Trigonometry, DI) and deeper English. CHSL is Class 10–12 level across all subjects. CGL also has more competition with higher cut-offs. If you can crack CGL, CHSL would feel easy — not the other way around.',
                },
                {
                  q: 'Will SSC CGL vacancies increase in 2026?',
                  a: 'Based on the 3-year trend (17,727 in 2024 → 14,582 in 2025), CGL 2026 is expected to have 14,000–15,000 posts. A major increase like 2022 (20,000+) is possible but not guaranteed. Always check the official notification at ssc.gov.in once released — likely in late April 2026.',
                },
                {
                  q: 'What is the salary of SSC CHSL in 2026?',
                  a: 'SSC CHSL salary depends on the post and your posting city. For LDC/JSA: ₹27,000–₹32,000 per month in-hand (metro). For DEO/PA/SA: ₹35,000–₹42,000 per month in-hand. The basic pay starts at ₹19,900 (LDC) and goes up to ₹29,200 (DEO Grade A) under the 7th Pay Commission. All posts include DA, HRA, TA, and pension.',
                },
                {
                  q: 'Which job is called "Mini IAS"?',
                  a: 'The Assistant Section Officer (ASO) in the Central Secretariat Service (CSS) recruited through SSC CGL is called the "Mini IAS." ASOs work directly with IAS officers in central government ministries on policy-level files. The CSS promotion track (ASO → Section Officer → Under Secretary → Deputy Secretary → Joint Secretary) is the fastest in all of SSC and can take a non-IAS officer to near-parity with state IAS officers over a career.',
                },
                {
                  q: 'Who is rank 1 topper of SSC CHSL?',
                  a: 'SSC does not announce a single "rank 1 topper" officially. The merit list is category-wise (General, OBC, SC, ST) and post-wise. Top scorers are typically from the General category competing for DEO Grade A posts, which have the fewest vacancies. SSC publishes final merit lists and selected candidates\' marks on ssc.gov.in after each cycle. Past cycle toppers are sometimes featured in coaching institute testimonials.',
                },
                {
                  q: 'Can a 12th pass student appear in SSC CGL?',
                  a: 'No. SSC CGL strictly requires a Bachelor\'s degree from a recognised university. However, final year graduation students can apply conditionally — they must produce their final degree certificate before the document verification stage. Plan your CGL timeline accordingly if you\'re currently in final year.',
                },
                {
                  q: 'Can I prepare for both CGL and CHSL simultaneously?',
                  a: 'Absolutely yes — and this is the recommended strategy. CGL preparation covers the entire CHSL syllabus (and more). By targeting CGL as your primary exam and treating CHSL as a safety net, you maximise your chances with minimal extra effort. The only additional investment for CHSL is a typing test / skill test practice.',
                },
                {
                  q: 'Is SSC CHSL worth it in 2026?',
                  a: 'Yes — especially for 12th-pass candidates. A central government job at 20–22 years with job security, pension, HRA, and paid leave is genuinely valuable. The CHSL→MACP promotion system means your salary grows steadily even without cracking departmental exams. And if you clear CGL later, you can upgrade. CHSL is not a consolation prize — it\'s a solid career foundation.',
                },
              ].map((item) => (
                <details key={item.q} className="card p-5 group">
                  <summary className="font-heading font-semibold text-surface-900 cursor-pointer flex items-center justify-between text-sm sm:text-base">
                    {item.q}
                    <span className="ml-3 text-primary-500 group-open:rotate-180 transition-transform duration-200 text-lg">▾</span>
                  </summary>
                  <p className="text-sm text-surface-600 leading-relaxed mt-3 pt-3 border-t border-surface-100">{item.a}</p>
                </details>
              ))}
            </div>
          </Section>

          {/* SECTION 9: VERDICT */}
          <Section id="verdict" title="9. Final Verdict — Which Should You Choose?">
            <p className="text-surface-600 text-sm mb-5 leading-relaxed">
              There is no universal answer — but there is a right answer <em>for your situation</em>. Here is the definitive guide:
            </p>
            <div className="space-y-4 mb-6">
              {[
                {
                  profile: '✅ Choose SSC CGL if…',
                  color: 'border-accent-500 bg-accent-50',
                  titleColor: 'text-accent-700',
                  points: [
                    'You are a graduate (or final-year student) in any stream',
                    'You want an officer-level post with real authority and decision-making',
                    'Your target is Income Tax Inspector, CBI Sub-Inspector, or ASO (Mini IAS)',
                    'You are willing to invest 8–12 months in serious, structured preparation',
                    'You want the fastest route to ₹50,000–₹75,000+ per month starting salary',
                    'Career growth and promotions matter more to you than taking the easier path',
                  ],
                },
                {
                  profile: '✅ Choose SSC CHSL if…',
                  color: 'border-emerald-500 bg-emerald-50',
                  titleColor: 'text-emerald-700',
                  points: [
                    'You have completed Class 12 and want to start earning in government ASAP',
                    'You prefer a simpler syllabus and faster preparation timeline (4–6 months)',
                    'You want job security, work-life balance, and steady income over high ambition',
                    'Your age is nearing 27 (General) and you cannot wait to finish graduation',
                    'You plan to prepare for CGL from inside a government job (smart dual strategy)',
                    'A PA/DEO role in a central ministry with pension and benefits meets your goals',
                  ],
                },
                {
                  profile: '🎯 Best Strategy: Target Both',
                  color: 'border-primary-500 bg-primary-50',
                  titleColor: 'text-primary-700',
                  points: [
                    'If you are a graduate: Prepare seriously for CGL, appear for CHSL as backup — minimal extra effort',
                    'If you are in final year of graduation: Apply for CHSL now (you\'re eligible), start CGL prep',
                    'If you just joined via CHSL: Use job stability to prepare for CGL without financial pressure',
                    'Remember: One exam\'s preparation supports the other. They share 80% of the syllabus.',
                  ],
                },
              ].map(section => (
                <div key={section.profile} className={`card p-5 border-l-4 ${section.color}`}>
                  <h4 className={`font-heading font-bold mb-3 ${section.titleColor}`}>{section.profile}</h4>
                  <ul className="space-y-2">
                    {section.points.map(pt => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-surface-700">
                        <span className="mt-0.5 text-surface-400">→</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="bg-surface-900 text-white rounded-2xl p-6 text-center">
              <div className="text-2xl mb-3">🏆</div>
              <h3 className="font-heading font-bold text-xl mb-2">The Bottom Line</h3>
              <p className="text-surface-300 text-sm leading-relaxed max-w-lg mx-auto">
                <strong className="text-white">SSC CGL offers more</strong> — more salary, more authority, more growth. But it demands more too. <strong className="text-white">SSC CHSL is genuinely worth it</strong> for anyone who qualifies, especially as a launchpad or a backup. The question isn't which exam is better — it's which one is right for <em>where you are right now</em>. Start preparing today. Both exams reward consistency over intelligence.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-5">
                <Link href="/exams/ssc-cgl" className="btn-primary text-sm px-5 py-2">
                  SSC CGL Full Guide →
                </Link>
                <Link href="/exams" className="btn-outline text-sm px-5 py-2">
                  Browse All 100 Exams
                </Link>
              </div>
            </div>
          </Section>
        </article>

        {/* SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-5">
            {/* TOC */}
            <div className="card p-5 border-l-4 border-primary-500">
              <div className="font-heading font-bold text-sm text-surface-800 mb-3">📋 On This Page</div>
              <ol className="space-y-1.5">
                {toc.map((item, i) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-sm text-primary-600 hover:text-primary-800 hover:underline block py-0.5">
                      {i + 1}. {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
            {/* Quick Links */}
            <div className="card p-5">
              <div className="font-heading font-bold text-sm text-surface-800 mb-3">🔗 Related Pages</div>
              <div className="space-y-2">
                <Link href="/exams/ssc-cgl" className="flex items-center gap-2 text-sm text-primary-600 hover:underline"><span>→</span> SSC CGL Full Guide</Link>
                <Link href="/exams" className="flex items-center gap-2 text-sm text-primary-600 hover:underline"><span>→</span> All SSC Exams</Link>
                <Link href="/tools/eligibility-checker/" className="flex items-center gap-2 text-sm text-primary-600 hover:underline"><span>→</span> Check Eligibility</Link>
                <Link href="/blog" className="flex items-center gap-2 text-sm text-primary-600 hover:underline"><span>→</span> More Articles</Link>
              </div>
            </div>
            {/* Verdict Card */}
            <div className="bg-accent-500 text-white rounded-xl p-5 text-center">
              <div className="text-2xl mb-2">🎯</div>
              <div className="font-heading font-bold text-sm mb-1">Eligible for CGL?</div>
              <div className="text-xs text-white/80 mb-3">Check if you qualify and which posts are open for you</div>
              <Link href="/tools/eligibility-checker/" className="block bg-white text-accent-600 font-semibold text-sm py-2 rounded-lg hover:bg-white/90 transition-colors">
                Check Eligibility →
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

// ─── SHARED COMPONENTS ──────────────────────────────────────────────────────
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-12 scroll-mt-20">
      <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5 pb-3 border-b border-surface-200">{title}</h2>
      {children}
    </section>
  );
}

function Callout({ type, title, children }: { type: 'info' | 'tip' | 'warning'; title: string; children: React.ReactNode }) {
  const styles = {
    info: 'bg-blue-50 border-blue-500 text-blue-800',
    tip: 'bg-emerald-50 border-emerald-500 text-emerald-800',
    warning: 'bg-amber-50 border-amber-500 text-amber-800',
  };
  return (
    <div className={`p-4 rounded-r-xl border-l-4 my-5 text-sm leading-relaxed ${styles[type]}`}>
      <div className="font-semibold text-xs uppercase tracking-wide mb-1">{title}</div>
      <div>{children}</div>
    </div>
  );
}

function SubjectCard({ num, name, meta, badge, desc, hotTopics, normalTopics }: {
  num: string; name: string; meta: string; badge: string;
  desc: string; hotTopics: string[]; normalTopics: string[];
}) {
  return (
    <div className="card mb-5 overflow-hidden">
      <div className="flex items-center justify-between p-5 border-b border-surface-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-accent-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">{num}</div>
          <div>
            <div className="font-heading font-semibold text-surface-900">{name}</div>
            <div className="text-xs text-surface-400">{meta}</div>
          </div>
        </div>
        <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2.5 py-1 rounded-full">{badge}</span>
      </div>
      <div className="p-5">
        <p className="text-sm text-surface-500 mb-3">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {hotTopics.map(t => (
            <span key={t} className="text-xs bg-accent-50 border border-accent-200 text-accent-700 font-medium px-3 py-1 rounded-full">🔥 {t}</span>
          ))}
          {normalTopics.map(t => (
            <span key={t} className="text-xs bg-white border border-surface-200 text-surface-600 px-3 py-1 rounded-full">{t}</span>
          ))}
        </div>
        <p className="text-xs text-surface-400 mt-3">🔥 Hot topics appear most frequently in previous year papers</p>
      </div>
    </div>
  );
}

function TopicGrid({ hot, normal }: { hot: string[]; normal: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mb-2">
      {hot.map(t => (
        <span key={t} className="text-xs bg-accent-50 border border-accent-200 text-accent-700 font-medium px-3 py-1.5 rounded-full">🔥 {t}</span>
      ))}
      {normal.map(t => (
        <span key={t} className="text-xs bg-white border border-surface-200 text-surface-600 px-3 py-1.5 rounded-full">{t}</span>
      ))}
    </div>
  );
}

// ─── IBPS PO SALARY IN HAND 2026 ARTICLE ─────────────────────────────────────
function IbpsPOSalaryArticle({ post }: { post: any }) {
  const toc = [
    { id: 'why-ibps-po', label: 'Why IBPS PO Stands Out' },
    { id: 'salary-components', label: 'Salary Components Table' },
    { id: 'in-hand', label: 'In-Hand vs Gross Salary' },
    { id: 'hidden-perks', label: 'The Hidden Perks' },
    { id: 'city-wise', label: 'City-wise Salary Difference' },
    { id: 'career-growth', label: 'Salary After Promotion' },
    { id: 'faq', label: 'FAQs' },
  ];

  return (
    <div className="container-main py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/blog" className="hover:text-primary-500">Blog</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">IBPS PO Salary 2026</span>
      </nav>

      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.metaDescription,
            datePublished: '2026-04-30',
            dateModified: '2026-04-30',
            author: { '@type': 'Organization', name: 'TaiyarHo', url: 'https://www.taiyarho.in' },
            publisher: { '@type': 'Organization', name: 'TaiyarHo', url: 'https://www.taiyarho.in' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.taiyarho.in/blog/ibps-po-salary-in-hand-2026/' },
          }),
        }}
      />
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is the starting salary of IBPS PO in 2026?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The starting basic pay for IBPS PO in 2026 is ₹48,480 per month under the 12th Bipartite Settlement. With DA, HRA, and other allowances, the gross salary ranges from ₹68,000 to ₹82,000 per month depending on posting city.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the in-hand salary of IBPS PO?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'After deductions like NPS (10% of Basic+DA), Professional Tax (₹200/month), and Income Tax (varies), the net in-hand salary for an IBPS PO in a metro city is approximately ₹55,000–₹65,000 per month.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can an IBPS PO earn ₹1 lakh per month?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. When you factor in leased accommodation (worth ₹8,000–₹29,500/month), fuel allowance, newspaper reimbursement, LFC, and medical benefits, the total CTC equivalent can comfortably reach ₹90,000–₹1,10,000 per month in metro postings.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the bank PO salary after 5 years?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'After 5 years, an IBPS PO earns 5 annual increments (₹1,750 each), pushing basic pay to approximately ₹57,230. A promotion to Scale-II (Senior Manager) raises basic pay to ₹64,820 with higher allowances, taking gross salary well above ₹90,000.',
                },
              },
            ],
          }),
        }}
      />

      <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-10 max-w-6xl">
        {/* MAIN CONTENT */}
        <article>
          {/* Hero */}
          <div className="bg-gradient-to-br from-surface-900 via-primary-950 to-surface-900 rounded-2xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  Banking
                </span>
                <span className="text-surface-400 text-xs">{post.publishedDate} · {post.readTime}</span>
              </div>
              <h1 className="font-heading font-bold text-2xl sm:text-3xl text-white leading-tight mb-4">
                IBPS PO Salary In Hand 2026: <span className="text-accent-400">CTC, Allowances & Perks Explained</span>
              </h1>
              <p className="text-surface-300 text-base leading-relaxed max-w-2xl">
                The real number that lands in your account every month — plus the allowances and perks that most guides forget to mention.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {['IBPS PO Salary In Hand 2026', 'IBPS PO CTC', 'Bank PO Allowances', '12th Bipartite Settlement'].map(tag => (
                  <span key={tag} className="text-xs bg-white/10 text-surface-300 px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { label: 'Basic Pay', value: '₹48,480', sub: 'Starting (Scale I)' },
              { label: 'Gross Salary', value: '₹68K–82K', sub: 'Metro posting' },
              { label: 'In-Hand', value: '₹55K–65K', sub: 'After deductions' },
              { label: 'Total CTC', value: '~₹1 Lakh', sub: 'With perks & benefits' },
            ].map(stat => (
              <div key={stat.label} className="card p-4 text-center">
                <div className="text-xs text-surface-400 font-medium mb-1">{stat.label}</div>
                <div className="text-xl font-heading font-bold text-primary-600">{stat.value}</div>
                <div className="text-xs text-surface-400 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* WHY IBPS PO */}
          <section id="why-ibps-po" className="mb-12 scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5 pb-3 border-b border-surface-200">
              Why IBPS PO Is Still One of India's Most Sought-After Jobs
            </h2>
            <p className="text-surface-600 leading-relaxed mb-4">
              Every year, over 1 crore aspirants compete for roughly 4,000–6,000 IBPS PO seats. That level of competition does not happen by accident — it tells you something real about the job's value.
            </p>
            <p className="text-surface-600 leading-relaxed mb-4">
              Here's what drives it: a Probationary Officer in a public sector bank gets a salary that is competitive with many private sector IT roles, but also comes with job security, a pension scheme, subsidised housing, and perks that quietly add ₹15,000–₹30,000 worth of value every single month — value that never shows up on a pay slip.
            </p>
            <p className="text-surface-600 leading-relaxed mb-4">
              The 12th Bipartite Settlement (BPS), signed between IBA (Indian Banks' Association) and bank employee unions in 2025, brought significant pay revisions effective from November 2022. The result? An IBPS PO's starting basic pay jumped from ₹36,000 to <strong>₹48,480 per month</strong>.
            </p>
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl text-sm text-emerald-800 leading-relaxed">
              <div className="font-semibold text-xs uppercase tracking-wide mb-1">✅ Key Update for 2026</div>
              All figures in this article reflect the <strong>12th Bipartite Settlement</strong> pay scales, which are fully applicable for IBPS PO recruits joining in 2025–26. The settlement is effective from 1st November 2022.
            </div>
          </section>

          {/* SALARY COMPONENTS TABLE */}
          <section id="salary-components" className="mb-12 scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5 pb-3 border-b border-surface-200">
              IBPS PO Salary Components: The Complete Breakdown
            </h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              Let's break it down component by component. An IBPS PO's gross salary has several parts, each calculated differently.
            </p>

            <h3 className="text-lg font-heading font-bold text-surface-800 mb-3">Pay Scale & Basic Pay</h3>
            <p className="text-surface-600 leading-relaxed mb-4">
              IBPS PO is recruited at <strong>JMGS-I (Junior Management Grade Scale I)</strong>. The revised pay scale under the 12th BPS is:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-surface-200 rounded-xl overflow-hidden">
                <thead className="bg-surface-800 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold">Pay Scale Component</th>
                    <th className="text-left p-3 font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100">
                  <tr className="bg-white hover:bg-surface-50">
                    <td className="p-3 font-medium text-surface-800">Starting Basic Pay</td>
                    <td className="p-3 text-surface-600">₹48,480/month</td>
                  </tr>
                  <tr className="bg-surface-50 hover:bg-surface-100">
                    <td className="p-3 font-medium text-surface-800">Annual Increment</td>
                    <td className="p-3 text-surface-600">₹1,750/year (for first 7 years)</td>
                  </tr>
                  <tr className="bg-white hover:bg-surface-50">
                    <td className="p-3 font-medium text-surface-800">Pay Scale Range (JMGS-I)</td>
                    <td className="p-3 text-surface-600">₹48,480 – ₹85,920</td>
                  </tr>
                  <tr className="bg-surface-50 hover:bg-surface-100">
                    <td className="p-3 font-medium text-surface-800">Pay Scale Range (MMGS-II)</td>
                    <td className="p-3 text-surface-600">₹64,820 – ₹93,960 (after promotion)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-heading font-bold text-surface-800 mb-3">Full Salary Components Table</h3>
            <p className="text-surface-600 leading-relaxed mb-4">
              The table below shows a typical monthly gross salary for a newly joined IBPS PO in a <strong>metro city (X category)</strong> as of 2026:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-surface-200 rounded-xl overflow-hidden">
                <thead className="bg-primary-700 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold">Salary Component</th>
                    <th className="text-left p-3 font-semibold">Calculation Basis</th>
                    <th className="text-right p-3 font-semibold">Monthly Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100">
                  {[
                    ['Basic Pay', '12th BPS (JMGS-I starting)', '₹48,480', false],
                    ['Dearness Allowance (DA)', '~50–56% of Basic Pay (varies quarterly)', '₹26,664', false],
                    ['House Rent Allowance (HRA)', '9% of Basic Pay (Metro/X city)', '₹4,363', false],
                    ['City Compensatory Allowance (CCA)', 'Fixed for metro postings', '₹870', false],
                    ['Learning Allowance / Special Pay', 'Fixed component', '₹530', false],
                    ['Transport / Conveyance Allowance', 'Fixed component', '₹425', false],
                    ['Gross Salary (approx.)', '', '~₹81,332', true],
                  ].map(([comp, basis, amt, isTotal]) => (
                    <tr key={comp as string} className={isTotal ? 'bg-primary-50 font-bold' : 'bg-white hover:bg-surface-50 even:bg-surface-50'}>
                      <td className={`p-3 ${isTotal ? 'text-primary-800' : 'text-surface-800 font-medium'}`}>{comp}</td>
                      <td className={`p-3 ${isTotal ? 'text-primary-600' : 'text-surface-500 text-xs'}`}>{basis}</td>
                      <td className={`p-3 text-right font-semibold ${isTotal ? 'text-primary-700' : 'text-surface-700'}`}>{amt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-surface-400 mb-6">
              * DA rate changes quarterly based on the All India Consumer Price Index (AICPI). The figures above use an approximate DA rate of 55% as applicable in early 2026. Actual amounts may vary slightly.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl text-sm text-blue-800 leading-relaxed">
              <div className="font-semibold text-xs uppercase tracking-wide mb-1">📌 Quick Note on DA</div>
              DA is revised twice a year — in February and August. As of early 2026, DA for bank employees is approximately <strong>55–56% of basic pay</strong>. This means your gross salary will keep increasing every 6 months even without a promotion.
            </div>
          </section>

          {/* IN-HAND VS GROSS */}
          <section id="in-hand" className="mb-12 scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5 pb-3 border-b border-surface-200">
              In-Hand Salary: What Actually Lands in Your Account
            </h2>
            <p className="text-surface-600 leading-relaxed mb-4">
              Gross salary and in-hand salary are two very different numbers. Here's what gets deducted before the money hits your account:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-surface-200 rounded-xl overflow-hidden">
                <thead className="bg-surface-800 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold">Deduction</th>
                    <th className="text-left p-3 font-semibold">Rate / Rule</th>
                    <th className="text-right p-3 font-semibold">Approx. Monthly Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100">
                  {[
                    ['NPS (National Pension System)', '10% of Basic Pay + DA', '~₹7,514'],
                    ['Professional Tax', 'State-wise, typically ₹150–₹200', '~₹200'],
                    ['Income Tax (TDS)', 'As per IT slab (new vs old regime)', '~₹3,000–₹6,000'],
                    ['Total Deductions', '', '~₹10,714–₹13,714'],
                  ].map(([item, rule, amt]) => (
                    <tr key={item as string} className="bg-white hover:bg-surface-50 even:bg-surface-50 last:bg-red-50 last:font-bold">
                      <td className="p-3 text-surface-800 font-medium">{item}</td>
                      <td className="p-3 text-surface-500 text-xs">{rule}</td>
                      <td className="p-3 text-right font-semibold text-red-600">{amt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-heading font-bold text-surface-800 mb-4">Net In-Hand Salary by City Category</h3>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                { city: 'Metro / X City', eg: 'Mumbai, Delhi, Bengaluru', hra: '9% Basic', gross: '~₹81,000', inhand: '~₹67,000–₹70,000', color: 'border-primary-400 bg-primary-50' },
                { city: 'Y Category City', eg: 'Pune, Jaipur, Lucknow', hra: '8% Basic', gross: '~₹79,500', inhand: '~₹65,000–₹68,000', color: 'border-emerald-400 bg-emerald-50' },
                { city: 'Z Category City', eg: 'Smaller towns', hra: '7% Basic', gross: '~₹78,500', inhand: '~₹63,000–₹66,000', color: 'border-amber-400 bg-amber-50' },
              ].map(c => (
                <div key={c.city} className={`rounded-xl border-2 p-4 ${c.color}`}>
                  <div className="font-heading font-bold text-surface-800 mb-1">{c.city}</div>
                  <div className="text-xs text-surface-500 mb-3">{c.eg}</div>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between"><span className="text-surface-500">HRA</span><span className="font-medium text-surface-700">{c.hra}</span></div>
                    <div className="flex justify-between"><span className="text-surface-500">Gross</span><span className="font-medium text-surface-700">{c.gross}</span></div>
                    <div className="flex justify-between border-t border-surface-200 pt-1.5"><span className="text-surface-700 font-semibold">In-Hand</span><span className="font-bold text-primary-700">{c.inhand}</span></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-sm text-amber-800 leading-relaxed">
              <div className="font-semibold text-xs uppercase tracking-wide mb-1">⚠️ On Income Tax</div>
              Tax deductions depend on your regime choice (old vs new) and your investments. A fresh IBPS PO in the old regime who maximises NPS (Section 80CCD(2)) and standard deduction benefits could reduce monthly TDS to near zero. Consult a CA for your specific situation.
            </div>
          </section>

          {/* HIDDEN PERKS */}
          <section id="hidden-perks" className="mb-12 scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-2 pb-3 border-b border-surface-200">
              The Hidden Perks: Where the Real Value Is
            </h2>
            <p className="text-surface-500 text-sm mb-6">These are the allowances and benefits that most job sites don't tell you about — but they add serious money to your effective package.</p>

            {/* Leased Accommodation */}
            <div className="card p-5 mb-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center text-xl flex-shrink-0">🏠</div>
                <div>
                  <h3 className="font-heading font-bold text-surface-800 mb-1">1. Leased Accommodation</h3>
                  <p className="text-sm text-surface-500 leading-relaxed mb-3">
                    Instead of the standard HRA, most banks offer to lease a house for you directly and pay the rent to the landlord. This is a far better deal because the lease limit is <em>much</em> higher than the HRA you'd receive in cash. You can live in a decent apartment without paying rent from your pocket.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-surface-100 rounded-lg overflow-hidden">
                      <thead className="bg-surface-100">
                        <tr>
                          <th className="text-left p-2.5 font-semibold text-surface-700">City Category</th>
                          <th className="text-left p-2.5 font-semibold text-surface-700">Monthly Lease Limit</th>
                          <th className="text-left p-2.5 font-semibold text-surface-700">Your HRA if no lease</th>
                          <th className="text-right p-2.5 font-semibold text-surface-700">Extra Benefit</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-surface-100">
                        {[
                          ['Metro (X)', '₹29,500/month', '₹4,363/month', '~₹25,137/month'],
                          ['Y Category', '₹18,000/month', '₹3,878/month', '~₹14,122/month'],
                          ['Z Category', '₹8,000/month', '₹3,394/month', '~₹4,606/month'],
                        ].map(row => (
                          <tr key={row[0] as string} className="bg-white even:bg-surface-50">
                            <td className="p-2.5 text-surface-700 font-medium">{row[0]}</td>
                            <td className="p-2.5 text-emerald-700 font-semibold">{row[1]}</td>
                            <td className="p-2.5 text-surface-500">{row[2]}</td>
                            <td className="p-2.5 text-right font-bold text-primary-600">{row[3]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-surface-400 mt-2">A bank-leased flat in a metro is worth ₹25,000+ per month above your HRA — that's like a bonus salary you never see on paper.</p>
                </div>
              </div>
            </div>

            {/* Petrol Allowance */}
            <div className="card p-5 mb-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl flex-shrink-0">⛽</div>
                <div>
                  <h3 className="font-heading font-bold text-surface-800 mb-1">2. Petrol / Fuel Allowance</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">
                    IBPS PO officers are eligible for a monthly petrol allowance — typically <strong>₹1,200–₹2,000 per month</strong> (bank-specific, revised periodically). This is paid as reimbursement against fuel bills. It is tax-free up to a certain limit, making it a low-profile but consistent monthly benefit. Scale-II and above officers get higher limits.
                  </p>
                </div>
              </div>
            </div>

            {/* Newspaper Allowance */}
            <div className="card p-5 mb-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl flex-shrink-0">📰</div>
                <div>
                  <h3 className="font-heading font-bold text-surface-800 mb-1">3. Newspaper, Magazine & Cleaning Allowances</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">
                    Officers receive reimbursement for newspaper and magazine subscriptions (₹200–₹400/month). There's also a <strong>cleaning/washing allowance</strong> (around ₹500/month) to maintain uniform/dress standards. These are small amounts individually but they reflect a culture of perks that add up collectively.
                  </p>
                </div>
              </div>
            </div>

            {/* LFC */}
            <div className="card p-5 mb-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl flex-shrink-0">✈️</div>
                <div>
                  <h3 className="font-heading font-bold text-surface-800 mb-1">4. LFC (Leave Fare Concession)</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">
                    Every 2 years (or annually for some banks), an officer can claim <strong>LFC</strong> — reimbursement for travel expenses for themselves and their family. For a Scale-I officer, this means the bank covers AC 2-tier rail fare for the officer + spouse + 2 dependent children, for a round trip anywhere in India. Depending on where you travel, this can be worth ₹10,000–₹40,000 per claim.
                  </p>
                </div>
              </div>
            </div>

            {/* Medical Aid */}
            <div className="card p-5 mb-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center text-xl flex-shrink-0">🏥</div>
                <div>
                  <h3 className="font-heading font-bold text-surface-800 mb-1">5. Medical Aid & Hospitalisation</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">
                    Officers are entitled to <strong>medical aid of ₹2,355/year</strong> (revised under 12th BPS) for OPD expenses, with a higher ceiling for family members. For hospitalisation, the bank covers actual expenses up to prescribed limits — or provides cashless treatment at empanelled hospitals. This is effectively a ₹15,000–₹30,000/year health benefit for your entire family.
                  </p>
                </div>
              </div>
            </div>

            {/* NPS + Gratuity */}
            <div className="card p-5 mb-4 bg-surface-50">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-200 text-surface-600 flex items-center justify-center text-xl flex-shrink-0">🏦</div>
                <div>
                  <h3 className="font-heading font-bold text-surface-800 mb-1">6. NPS Employer Contribution + Gratuity</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">
                    The bank contributes <strong>14% of Basic + DA</strong> to your NPS corpus every month (you contribute 10% from your side). On a starting salary, that's roughly ₹10,524/month going into your retirement fund — money you don't see in hand, but it's building long-term wealth. You also earn gratuity after 5 years of service.
                  </p>
                </div>
              </div>
            </div>

            {/* Total CTC Calculation */}
            <h3 className="text-lg font-heading font-bold text-surface-800 mb-3 mt-6">Can an IBPS PO Really Earn ₹1 Lakh Per Month?</h3>
            <p className="text-surface-600 leading-relaxed mb-4">
              The bottom line is: yes — if you're posted in a metro and you factor in everything (not just what appears on the pay slip). Here's how the math works:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-surface-200 rounded-xl overflow-hidden">
                <thead className="bg-surface-800 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold">Component</th>
                    <th className="text-right p-3 font-semibold">Monthly Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100">
                  {[
                    ['Gross Salary (cash in-hand components)', '₹81,332'],
                    ['Leased Accommodation benefit (metro)', '₹29,500'],
                    ['Petrol Allowance', '₹1,500'],
                    ['Medical Aid (monthly equivalent)', '₹1,800'],
                    ['LFC (monthly equivalent, biennial)', '₹1,200'],
                    ['NPS Employer Contribution (14%)', '₹10,524'],
                  ].map(([comp, val]) => (
                    <tr key={comp as string} className="bg-white hover:bg-surface-50 even:bg-surface-50">
                      <td className="p-3 text-surface-700">{comp}</td>
                      <td className="p-3 text-right font-semibold text-surface-800">{val}</td>
                    </tr>
                  ))}
                  <tr className="bg-emerald-50 font-bold">
                    <td className="p-3 text-emerald-800">Total CTC (Effective Package)</td>
                    <td className="p-3 text-right text-emerald-700 text-base">~₹1,25,856</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-surface-400">* Leased accommodation is offered in lieu of HRA — not in addition to it. The benefit shown above is the difference vs receiving HRA in cash.</p>
          </section>

          {/* CITY-WISE */}
          <section id="city-wise" className="mb-12 scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5 pb-3 border-b border-surface-200">
              Does Your Posting City Change Your Salary?
            </h2>
            <p className="text-surface-600 leading-relaxed mb-4">
              Yes, and significantly. The three city categories — X (metro), Y (large cities), and Z (smaller towns) — affect your HRA, CCA, and lease limits. Here's the practical impact:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-surface-200 rounded-xl overflow-hidden">
                <thead className="bg-primary-700 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold">City Category</th>
                    <th className="text-left p-3 font-semibold">Examples</th>
                    <th className="text-right p-3 font-semibold">HRA Rate</th>
                    <th className="text-right p-3 font-semibold">Lease Limit</th>
                    <th className="text-right p-3 font-semibold">Net In-Hand</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100">
                  {[
                    ['X (Metro)', 'Mumbai, Delhi, Chennai, Kolkata, Bengaluru, Hyderabad', '9%', '₹29,500', '₹67,000–₹70,000'],
                    ['Y (Large)', 'Pune, Ahmedabad, Jaipur, Lucknow, Surat, Nagpur', '8%', '₹18,000', '₹65,000–₹68,000'],
                    ['Z (Others)', 'All other cities and towns', '7%', '₹8,000', '₹63,000–₹66,000'],
                  ].map(row => (
                    <tr key={row[0] as string} className="bg-white hover:bg-surface-50 even:bg-surface-50">
                      {row.map((cell, i) => (
                        <td key={i} className={`p-3 ${i === 0 ? 'font-bold text-surface-800' : i >= 3 ? 'text-right font-semibold text-primary-700' : 'text-surface-600'}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* CAREER GROWTH */}
          <section id="career-growth" className="mb-12 scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5 pb-3 border-b border-surface-200">
              How the Salary Grows: Year 1 to Year 10
            </h2>
            <p className="text-surface-600 leading-relaxed mb-5">
              One of the underrated features of the IBPS PO career is how quickly the salary grows — through annual increments, DA revisions, and promotions.
            </p>

            <h3 className="text-lg font-heading font-bold text-surface-800 mb-3">Annual Increments (No Exam Needed)</h3>
            <p className="text-surface-600 leading-relaxed mb-4">
              Every year, you receive an automatic increment of <strong>₹1,750</strong> added to your basic pay. This isn't a promotion — it's just your annual raise for staying in service. Over the first 7 years, your basic pay grows from ₹48,480 to ₹60,730. Since DA is calculated as a percentage of basic, your gross salary grows accordingly.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-surface-200 rounded-xl overflow-hidden">
                <thead className="bg-surface-800 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold">Year of Service</th>
                    <th className="text-right p-3 font-semibold">Basic Pay</th>
                    <th className="text-right p-3 font-semibold">Approx. Gross (Metro)</th>
                    <th className="text-right p-3 font-semibold">Approx. In-Hand</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100">
                  {[
                    ['Year 1 (Joining)', '₹48,480', '~₹81,000', '~₹67,000'],
                    ['Year 2', '₹50,230', '~₹84,000', '~₹70,000'],
                    ['Year 3', '₹51,980', '~₹87,000', '~₹72,500'],
                    ['Year 5', '₹55,480', '~₹92,000', '~₹76,000'],
                    ['Year 7', '₹59,730', '~₹99,000', '~₹82,000'],
                  ].map(row => (
                    <tr key={row[0] as string} className="bg-white even:bg-surface-50 hover:bg-surface-100">
                      <td className="p-3 font-medium text-surface-800">{row[0]}</td>
                      <td className="p-3 text-right text-surface-700">{row[1]}</td>
                      <td className="p-3 text-right text-surface-700">{row[2]}</td>
                      <td className="p-3 text-right font-semibold text-primary-700">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-heading font-bold text-surface-800 mb-3">Promotion Ladder & Salary Jumps</h3>
            <div className="space-y-3 mb-4">
              {[
                { grade: 'JMGS-I (PO)', years: 'Joining', basic: '₹48,480', note: 'This is where you start' },
                { grade: 'MMGS-II (Senior Manager)', years: '3–5 years (internal exam)', basic: '₹64,820', note: '+₹16,340 jump in basic pay' },
                { grade: 'MMGS-III (Chief Manager)', years: '7–9 years', basic: '₹76,010', note: 'Significant authority and perks' },
                { grade: 'SMGS-IV (AGM)', years: '12–15 years', basic: '₹1,02,300', note: 'Senior management, very high CTC' },
              ].map(item => (
                <div key={item.grade} className="flex items-start gap-4 p-4 rounded-xl border border-surface-200 bg-white hover:bg-surface-50">
                  <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <span className="font-heading font-bold text-surface-800">{item.grade}</span>
                      <span className="text-xs bg-surface-100 text-surface-500 px-2 py-0.5 rounded-full">{item.years}</span>
                    </div>
                    <div className="text-sm text-surface-500">{item.note}</div>
                  </div>
                  <div className="font-bold text-primary-600 text-sm">{item.basic}</div>
                </div>
              ))}
            </div>
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl text-sm text-emerald-800 leading-relaxed">
              <div className="font-semibold text-xs uppercase tracking-wide mb-1">💡 After 5 Years</div>
              An IBPS PO who clears the internal promotion exam to Scale-II at the earliest (around 3 years) would be drawing a basic pay of ₹64,820 — translating to a gross salary of ₹1,05,000+ in metro cities, with in-hand of ₹85,000–₹92,000.
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-12 scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5 pb-3 border-b border-surface-200">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'What is the starting salary of IBPS PO in 2026?',
                  a: 'The starting basic pay is ₹48,480/month under the 12th Bipartite Settlement. Total gross salary (basic + DA + HRA + allowances) is approximately ₹78,000–₹82,000 per month for a metro posting. This is a significant revision from the earlier ₹36,000 starting basic under the 11th BPS.',
                },
                {
                  q: 'What is the in-hand salary of IBPS PO?',
                  a: 'After deductions — NPS (10% of basic+DA), professional tax (~₹200), and income tax — the net in-hand salary in a metro city is approximately ₹67,000–₹70,000 per month. In Y and Z category cities, it is ₹63,000–₹68,000. These numbers assume the standard tax regime and no extraordinary deductions.',
                },
                {
                  q: 'Can an IBPS PO earn ₹1 lakh per month?',
                  a: 'Yes — when you count the complete CTC. The gross cash salary alone won\'t hit ₹1 lakh at joining, but when you add bank-leased accommodation (worth ₹29,500/month in metros), employer NPS contribution (₹10,500), LFC, medical benefits, and petrol allowance, the total effective package in a metro city is easily ₹1,10,000–₹1,25,000 per month. After your first promotion (Scale-II), even gross cash salary crosses ₹1 lakh.',
                },
                {
                  q: 'What is the bank PO salary after 5 years?',
                  a: 'After 5 years, your basic pay grows by 5 increments (₹1,750 each) to approximately ₹57,230, pushing gross salary to ₹92,000+ in metro cities. If promoted to Scale-II (which typically happens 3–5 years in after clearing an internal exam), basic pay jumps to ₹64,820 and gross salary crosses ₹1,00,000 per month.',
                },
              ].map((item, i) => (
                <div key={i} className="card p-5">
                  <div className="font-heading font-bold text-surface-800 mb-2">Q{i + 1}. {item.q}</div>
                  <p className="text-sm text-surface-500 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl p-8 text-white mb-10">
            <h2 className="font-heading font-bold text-2xl mb-3">The Bottom Line</h2>
            <p className="text-primary-100 leading-relaxed mb-4">
              IBPS PO is one of the best-paying government jobs available to any graduate in India — and most salary comparisons actually <em>understate</em> its value because they only look at in-hand cash, ignoring ₹40,000–₹50,000 worth of monthly benefits that don't appear on a pay slip.
            </p>
            <p className="text-primary-100 leading-relaxed mb-5">
              If you're serious about cracking IBPS PO, start your preparation now. The exam rewards consistency, and the payoff — both financial and in terms of career security — is real.
            </p>
            <Link href="/exams/ibps-po" className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-primary-50 transition-colors">
              View IBPS PO Complete Guide →
            </Link>
          </div>

          {/* Back to blog */}
          <div className="flex justify-start">
            <Link href="/blog" className="text-sm text-primary-500 hover:text-primary-600 flex items-center gap-1.5 font-medium">
              ← Back to all articles
            </Link>
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            {/* TOC */}
            <div className="card p-5">
              <div className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">In This Article</div>
              <nav className="space-y-1">
                {toc.map(item => (
                  <a key={item.id} href={`#${item.id}`} className="block text-sm text-surface-600 hover:text-primary-500 py-1 px-2 rounded hover:bg-primary-50 transition-colors leading-snug">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            {/* Related */}
            <div className="card p-5">
              <div className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">Related</div>
              <div className="space-y-2">
                <Link href="/exams/ibps-po" className="block text-sm text-primary-600 hover:text-primary-700 hover:underline leading-snug">
                  IBPS PO Complete Exam Guide →
                </Link>
                <Link href="/exams/sbi-po" className="block text-sm text-primary-600 hover:text-primary-700 hover:underline leading-snug">
                  SBI PO Salary Comparison →
                </Link>
                <Link href="/tools/eligibility-checker/" className="block text-sm text-primary-600 hover:text-primary-700 hover:underline leading-snug">
                  Check IBPS PO Eligibility →
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

// ─── AGE LIMIT 2026 ARTICLE ──────────────────────────────────────────────────
function AgeLimit2026Article({ post }: { post: any }) {
  const toc = [
    { id: 'overview', label: 'Overview & Key Numbers' },
    { id: 'logic', label: 'Age Relaxation Meaning' },
    { id: 'table', label: 'Exam-wise Age Limit Table' },
    { id: 'upsc', label: 'UPSC CSE Age Limit' },
    { id: 'ssc', label: 'SSC Age Limits' },
    { id: 'banking', label: 'Banking Age Limits' },
    { id: 'railway', label: 'Railway Age Limits' },
    { id: 'special', label: 'Ex-SM & Other Relaxations' },
    { id: 'faq', label: 'FAQs' },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does age relaxation mean in government exams?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Age relaxation means that reserved category candidates (OBC, SC/ST, PwBD, Ex-Servicemen) are allowed to apply for a government exam even if they exceed the maximum age limit set for General/EWS candidates. The government increases (relaxes) the upper age limit for these categories — for example, OBC gets +3 years, SC/ST gets +5 years, and PwBD gets +10 years added to the base upper age limit.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the meaning of age relaxation in sarkari exams?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Age relaxation in sarkari (government) exams means an increase in the maximum permissible age for specific categories of candidates. If the upper age limit for a General candidate is 30 years, an OBC candidate with age relaxation can apply up to 33 years, and an SC/ST candidate up to 35 years. It is a constitutional provision to ensure equal opportunity for backward and marginalized communities.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the age limit for SSC CGL 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The SSC CGL age limit is 18–32 years for General/EWS candidates. OBC candidates get +3 years (up to 35), SC/ST get +5 years (up to 37), and PwBD (General) get +10 years (up to 42).',
        },
      },
      {
        '@type': 'Question',
        name: 'Can an OBC candidate apply for UPSC after 32 years of age?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. While the General category upper age limit for UPSC CSE is 32 years, OBC candidates receive a 3-year relaxation, allowing them to apply up to 35 years of age.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the age limit for IBPS PO 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IBPS PO age limit is 20–30 years for General/EWS candidates. OBC candidates can apply up to 33 years, SC/ST up to 35 years, and PwBD (General) up to 40 years.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much age relaxation do PwBD candidates get in government exams?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PwBD (General) candidates receive a base relaxation of 10 years. This stacks with category relaxation: PwBD (OBC) gets +13 years, and PwBD (SC/ST) gets +15 years added to the standard upper age limit.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the age relaxation for Ex-Servicemen in government exams?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ex-Servicemen receive a relaxation of 3 years plus the actual period of service rendered, subject to a maximum age of 45–50 years depending on the post. For SSC and Group B/C posts, the limit is often extended to 45–50 years.',
        },
      },
    ],
  };

  return (
    <div className="container-main py-10">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/blog" className="hover:text-primary-500">Blog</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">Age Limit 2026</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-10 max-w-6xl">
        {/* MAIN ARTICLE */}
        <article>
          {/* Hero Banner */}
          <div className="bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900 rounded-2xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-accent-500/20 border border-accent-500/40 text-accent-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse" />
                  Updated {post.updatedDate}
                </span>
                <span className="bg-amber-400/20 text-amber-300 text-xs px-2.5 py-1 rounded font-semibold">Preparation</span>
                <span className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded">Age Relaxation Meaning</span>
                <span className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded">Age Limit 2026</span>
                <span className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded">OBC SC ST</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight mb-3">
                Government Exam Age Limit 2026:{' '}
                <span className="text-accent-300 italic">OBC, SC/ST & PwBD Relaxation</span> — Full List
              </h1>
              <p className="text-surface-300 text-base leading-relaxed mb-5">
                One complete table. Every major exam. Exact category-wise relaxations for UPSC, SSC, Banking, and Railway. Know your limit before the notification drops.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-surface-400">
                <span>📅 {post.publishedDate}</span>
                <span>⏱ {post.readTime}</span>
                <span>✍️ {post.author}</span>
              </div>
            </div>
          </div>

          {/* 4-grid highlight box */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { icon: '🎂', label: 'Min. Starting Age', value: '18–21 Years' },
              { icon: '📋', label: 'Max Age (General)', value: '27–33 Years' },
              { icon: '✅', label: 'Highest Relaxation', value: '+15 Yrs (PwBD SC/ST)' },
              { icon: '🏛️', label: 'Top Sectors', value: 'SSC, UPSC, Bank, RRB' },
            ].map(item => (
              <div key={item.label} className="card p-4 text-center">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-xs text-surface-500 font-semibold uppercase tracking-wide mb-1">{item.label}</div>
                <div className="text-sm font-heading font-bold text-surface-900">{item.value}</div>
              </div>
            ))}
          </div>

          {/* Key Update */}
          <div className="bg-primary-50 border-l-4 border-primary-500 rounded-r-xl p-4 mb-8">
            <p className="font-heading font-semibold text-primary-700 mb-1">✅ Key Update — 2026 Recruitment Cycle</p>
            <p className="text-sm text-surface-700 leading-relaxed">
              Major bodies like UPSC, SSC, IBPS, and RRB have maintained their standard age limits for 2026.
              However, the exact cut-off date for age calculation — usually <strong>August 1 for UPSC/SSC</strong> and{' '}
              <strong>January 1 for RRB</strong> — is the ultimate deciding factor. Always check the official notification.
            </p>
          </div>

          {/* SECTION: Overview */}
          <section id="overview" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mt-8 mb-4">
              📋 Overview: Age Limits at a Glance
            </h2>
            <p className="text-surface-700 leading-relaxed mb-4">
              Government exams have strict age cut-offs, but reserved category candidates get significant
              buffers that can extend eligibility by up to 15 years. Understanding these rules
              can be the difference between applying confidently and missing your window entirely.
            </p>
            <p className="text-surface-700 leading-relaxed mb-4">
              The minimum age for most central government exams is <strong>18 years</strong>, while a few
              like UPSC CSE require you to be at least <strong>21 years</strong> old. The maximum age
              for General/EWS candidates typically falls between <strong>27 and 33 years</strong>, depending
              on the exam and post.
            </p>
            <p className="text-surface-700 leading-relaxed mb-4">
              Use our{' '}
              <Link href="/tools/eligibility-checker/" className="text-primary-500 hover:text-primary-600 underline">
                free Eligibility Checker tool
              </Link>{' '}
              to instantly verify whether you qualify for any of our{' '}
              <Link href="/exams" className="text-primary-500 hover:text-primary-600 underline">
                100 listed government exams
              </Link>
              .
            </p>
          </section>

          {/* SECTION: Logic */}
          <section id="logic" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mt-8 mb-4">
              🧮 Age Relaxation Meaning — What Does It Mean?
            </h2>
            <div className="bg-primary-50 border border-primary-200 rounded-xl p-5 mb-6">
              <p className="font-heading font-bold text-primary-700 text-base mb-2">
                📖 Age Relaxation Meaning (Simple Definition)
              </p>
              <p className="text-surface-700 leading-relaxed">
                <strong>Age relaxation</strong> means that certain categories of candidates — such as OBC,
                SC/ST, PwBD (persons with disabilities), and Ex-Servicemen — are <strong>allowed to apply
                for a government exam even if they are older than the maximum age limit</strong> set for
                General/EWS candidates. In simple terms, the government "relaxes" (increases) the upper
                age limit specifically for these reserved categories to give them a fair opportunity.
              </p>
              <p className="text-surface-700 leading-relaxed mt-3">
                <strong>Example:</strong> If SSC CGL's maximum age is 32 years for General candidates, an
                OBC candidate can still apply up to 35 years (32 + 3 years relaxation). An SC/ST candidate
                can apply up to 37 years (32 + 5 years relaxation). This extra allowance in years is called
                "age relaxation."
              </p>
            </div>
            <p className="text-surface-700 leading-relaxed mb-4">
              Your maximum eligible age is simply the General (UR) upper age limit for that exam{' '}
              <strong>plus</strong> your specific category relaxation. This is consistent across virtually
              all central government recruitment bodies.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-900 text-white">
                    <th className="text-left p-3 font-heading font-semibold rounded-tl-lg">Category</th>
                    <th className="text-center p-3 font-heading font-semibold">Relaxation</th>
                    <th className="text-left p-3 font-heading font-semibold rounded-tr-lg">Example (IBPS PO, Base 30 yrs)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cat: 'General / EWS', rel: '0 years', eg: '30 years' },
                    { cat: 'OBC (Non-Creamy Layer)', rel: '+3 years', eg: '33 years' },
                    { cat: 'SC / ST', rel: '+5 years', eg: '35 years' },
                    { cat: 'PwBD — General', rel: '+10 years', eg: '40 years' },
                    { cat: 'PwBD — OBC', rel: '+13 years', eg: '43 years' },
                    { cat: 'PwBD — SC/ST', rel: '+15 years', eg: '45 years' },
                  ].map((row, i) => (
                    <tr key={row.cat} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="p-3 text-surface-800 font-medium">{row.cat}</td>
                      <td className="p-3 text-center font-heading font-bold text-emerald-600">{row.rel}</td>
                      <td className="p-3 text-surface-600">{row.eg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border-l-4 border-accent-500 rounded-r-xl p-4">
              <p className="font-heading font-semibold text-accent-600 mb-1">⚠️ Warning: Calculate to the Exact Day</p>
              <p className="text-sm text-surface-700 leading-relaxed">
                Never estimate your age eligibility. Calculate your exact age based on the specific cut-off
                date in the official notification. Even being one day over the limit will result in
                immediate application rejection at document verification.
              </p>
            </div>
          </section>

          {/* SECTION: Master Table */}
          <section id="table" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mt-8 mb-4">
              📊 Full List: Exam-wise Maximum Age Limits (2026)
            </h2>
            <p className="text-surface-700 leading-relaxed mb-4">
              The table below covers the maximum upper age limit for all major central government exams.
              Minimum age varies from 18 to 21 years depending on the exam.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-900 text-white">
                    <th className="text-left p-3 font-heading font-semibold">Exam</th>
                    <th className="text-center p-3 font-heading font-semibold">General / EWS</th>
                    <th className="text-center p-3 font-heading font-semibold">OBC (NCL)</th>
                    <th className="text-center p-3 font-heading font-semibold">SC / ST</th>
                    <th className="text-center p-3 font-heading font-semibold">PwBD (UR)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { exam: 'UPSC CSE (IAS/IPS)', gen: '32', obc: '35', scst: '37', pwd: '42' },
                    { exam: 'SSC CGL (Max Post Age)', gen: '32', obc: '35', scst: '37', pwd: '42' },
                    { exam: 'SSC CHSL', gen: '27', obc: '30', scst: '32', pwd: '37' },
                    { exam: 'SSC MTS', gen: '25', obc: '28', scst: '30', pwd: '35' },
                    { exam: 'IBPS PO', gen: '30', obc: '33', scst: '35', pwd: '40' },
                    { exam: 'SBI PO', gen: '30', obc: '33', scst: '35', pwd: '40' },
                    { exam: 'IBPS Clerk', gen: '28', obc: '31', scst: '33', pwd: '38' },
                    { exam: 'RBI Grade B', gen: '33', obc: '36', scst: '38', pwd: '43' },
                    { exam: 'RRB NTPC (UG Posts)', gen: '30', obc: '33', scst: '35', pwd: '40' },
                    { exam: 'RRB Group D (Level 1)', gen: '33', obc: '36', scst: '38', pwd: '43' },
                    { exam: 'RRB ALP', gen: '33', obc: '36', scst: '38', pwd: '43' },
                    { exam: 'UPSC NDA', gen: '19.5', obc: '—', scst: '—', pwd: '—' },
                    { exam: 'UPSC CDS', gen: '24–25', obc: '—', scst: '—', pwd: '—' },
                    { exam: 'CAPF AC', gen: '25', obc: '28', scst: '30', pwd: '35' },
                  ].map((row, i) => (
                    <tr key={row.exam} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="p-3 text-surface-800 font-medium">{row.exam}</td>
                      <td className="p-3 text-center text-surface-700">{row.gen} yrs</td>
                      <td className="p-3 text-center text-emerald-600 font-semibold">{row.obc !== '—' ? `${row.obc} yrs` : '—'}</td>
                      <td className="p-3 text-center text-primary-600 font-semibold">{row.scst !== '—' ? `${row.scst} yrs` : '—'}</td>
                      <td className="p-3 text-center text-accent-600 font-semibold">{row.pwd !== '—' ? `${row.pwd} yrs` : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-4">
              <p className="font-heading font-semibold text-emerald-700 mb-1">📌 Quick Note</p>
              <p className="text-sm text-surface-700 leading-relaxed">
                NDA and CDS do not offer category-based age relaxation (OBC/SC/ST) as they are defence entry
                exams with fixed age bands. Ex-Servicemen and central government employees have separate rules
                — see the section below.
              </p>
            </div>
          </section>

          {/* SECTION: UPSC */}
          <section id="upsc" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mt-8 mb-4">
              🏛️ UPSC CSE Age Limit in Detail
            </h2>
            <p className="text-surface-700 leading-relaxed mb-4">
              UPSC CSE (IAS/IPS/IFS) is the most attempt-sensitive exam in India. The General category
              upper age limit is <strong>32 years</strong> with a maximum of <strong>6 attempts</strong>.
              OBC candidates get 9 attempts up to age 35. SC/ST candidates have unlimited attempts up to age 37.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary-700 text-white">
                    <th className="text-left p-3 font-heading font-semibold">Category</th>
                    <th className="text-center p-3 font-heading font-semibold">Upper Age</th>
                    <th className="text-center p-3 font-heading font-semibold">Max Attempts</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cat: 'General / EWS', age: '32 years', att: '6' },
                    { cat: 'OBC (NCL)', age: '35 years', att: '9' },
                    { cat: 'SC / ST', age: '37 years', att: 'Unlimited' },
                    { cat: 'PwBD — General', age: '42 years', att: '9' },
                    { cat: 'PwBD — SC/ST', age: '47 years', att: 'Unlimited' },
                  ].map((row, i) => (
                    <tr key={row.cat} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="p-3 text-surface-800 font-medium">{row.cat}</td>
                      <td className="p-3 text-center font-heading font-bold text-primary-600">{row.age}</td>
                      <td className="p-3 text-center text-surface-700">{row.att}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-surface-700 leading-relaxed mb-4">
              The UPSC CSE cut-off date for age calculation is <strong>August 1 of the exam year</strong>.
              Visit the{' '}
              <Link href="/exams/upsc-ias" className="text-primary-500 hover:text-primary-600 underline">
                UPSC IAS exam page
              </Link>{' '}
              for complete eligibility criteria, syllabus, and preparation resources.
            </p>
          </section>

          {/* SECTION: SSC */}
          <section id="ssc" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mt-8 mb-4">
              📄 SSC Exam Age Limits
            </h2>
            <p className="text-surface-700 leading-relaxed mb-4">
              SSC (Staff Selection Commission) covers multiple exams with different age bands. SSC CGL has
              the highest upper age limit among SSC exams (up to 32 years for some posts), while SSC MTS
              has the lowest (25 years for General). The cut-off date is generally <strong>August 1</strong>.
            </p>
            <ul className="list-disc ml-6 space-y-2 text-surface-700 mb-4">
              <li>🎓 <strong>SSC CGL:</strong> 18–32 years (General). Varies by post — some posts like Tax Assistant go up to 27 years, while Inspector posts allow up to 30 years.</li>
              <li>📋 <strong>SSC CHSL:</strong> 18–27 years (General). Strictly for 12th-pass candidates.</li>
              <li>🔧 <strong>SSC MTS:</strong> 18–25 years (General). Entry-level central government roles.</li>
              <li>🚔 <strong>SSC GD Constable:</strong> 18–23 years (General). Cut-off date is January 1.</li>
              <li>👮 <strong>SSC CPO (SI):</strong> 20–25 years (General). For Delhi Police and CAPF posts.</li>
            </ul>
            <p className="text-surface-700 leading-relaxed mb-4">
              See the full{' '}
              <Link href="/exams/ssc-cgl" className="text-primary-500 hover:text-primary-600 underline">
                SSC CGL exam guide
              </Link>{' '}
              including eligibility, syllabus, and preparation strategy.
            </p>
          </section>

          {/* SECTION: Banking */}
          <section id="banking" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mt-8 mb-4">
              🏦 Banking Exam Age Limits
            </h2>
            <p className="text-surface-700 leading-relaxed mb-4">
              Banking exams (IBPS, SBI, RBI) generally have a narrower age window compared to UPSC/SSC.
              The standard upper age for PO-level exams is <strong>30 years</strong> for General candidates.
              Unlike UPSC, banking exams rarely have an attempt limit — you can keep applying until you cross
              your age limit.
            </p>
            <ul className="list-disc ml-6 space-y-2 text-surface-700 mb-4">
              <li>🏦 <strong>IBPS PO:</strong> 20–30 years (General). Cut-off: date of notification.</li>
              <li>💳 <strong>IBPS Clerk:</strong> 20–28 years (General). Cut-off: date of notification.</li>
              <li>🏛️ <strong>SBI PO:</strong> 21–30 years (General). Max 4 attempts for General category.</li>
              <li>💵 <strong>RBI Grade B:</strong> 21–33 years (General). Maximum age is higher than other banks.</li>
              <li>📊 <strong>NABARD Grade A:</strong> 21–30 years (General).</li>
            </ul>
            <p className="text-surface-700 leading-relaxed mb-4">
              Check the{' '}
              <Link href="/exams/ibps-po" className="text-primary-500 hover:text-primary-600 underline">
                IBPS PO complete guide
              </Link>{' '}
              and the{' '}
              <Link href="/exams/sbi-po" className="text-primary-500 hover:text-primary-600 underline">
                SBI PO complete guide
              </Link>{' '}
              for full eligibility breakdowns.
            </p>
          </section>

          {/* SECTION: Railway */}
          <section id="railway" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mt-8 mb-4">
              🚂 Railway (RRB) Age Limits
            </h2>
            <p className="text-surface-700 leading-relaxed mb-4">
              Railway Recruitment Board (RRB) exams are unique — they use <strong>January 1</strong> as the
              cut-off date for age calculation, unlike the August 1 used by SSC/UPSC. RRB also offers age
              relaxation for serving railway employees in addition to standard category relaxations.
            </p>
            <ul className="list-disc ml-6 space-y-2 text-surface-700 mb-4">
              <li>🚆 <strong>RRB NTPC (Graduate Posts):</strong> 18–36 years (General). Covers Station Master, Goods Guard, etc.</li>
              <li>🔩 <strong>RRB NTPC (Undergraduate):</strong> 18–30 years (General).</li>
              <li>⚙️ <strong>RRB Group D:</strong> 18–33 years (General). Largest railway recruitment.</li>
              <li>🔧 <strong>RRB ALP & Technician:</strong> 18–33 years (General).</li>
              <li>🚔 <strong>RPF Constable:</strong> 18–25 years (General).</li>
            </ul>
            <p className="text-surface-700 leading-relaxed mb-4">
              Visit the{' '}
              <Link href="/exams/rrb-ntpc" className="text-primary-500 hover:text-primary-600 underline">
                RRB NTPC complete guide
              </Link>{' '}
              for full preparation resources.
            </p>
          </section>

          {/* SECTION: Special Relaxations */}
          <section id="special" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mt-8 mb-4">
              🎖️ Special Age Relaxations (Ex-SM, Govt. Employees)
            </h2>
            <p className="text-surface-700 leading-relaxed mb-4">
              Beyond the standard OBC/SC/ST relaxations, certain other groups receive significant age
              allowances. These are post-specific and you must verify them in the official notification.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-800 text-white">
                    <th className="text-left p-3 font-heading font-semibold">Special Category</th>
                    <th className="text-center p-3 font-heading font-semibold">Typical Relaxation</th>
                    <th className="text-left p-3 font-heading font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cat: 'Ex-Servicemen (General)', rel: '3 yrs + service period', note: 'Subject to max 45–50 yrs depending on post' },
                    { cat: 'Ex-Servicemen (OBC)', rel: '6 yrs + service period', note: 'OBC relaxation stacks with Ex-SM' },
                    { cat: 'Ex-Servicemen (SC/ST)', rel: '8 yrs + service period', note: 'SC/ST relaxation stacks with Ex-SM' },
                    { cat: 'Central Govt. Employee (Gp. C)', rel: 'Up to 40 years', note: 'For Group C posts only' },
                    { cat: 'Widows / Divorced Women', rel: 'Up to 35 years (Gen)', note: 'Varies by exam; not universal' },
                    { cat: 'J&K Domicile (1980–89)', rel: '+5 years', note: 'For candidates who resided in J&K during that period' },
                  ].map((row, i) => (
                    <tr key={row.cat} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="p-3 text-surface-800 font-medium">{row.cat}</td>
                      <td className="p-3 text-center font-heading font-bold text-emerald-600">{row.rel}</td>
                      <td className="p-3 text-surface-600 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-primary-50 border-l-4 border-primary-500 rounded-r-xl p-4">
              <p className="font-heading font-semibold text-primary-700 mb-1">📌 Quick Note</p>
              <p className="text-sm text-surface-700 leading-relaxed">
                Ex-Servicemen relaxation is calculated differently: the actual period of service is deducted
                from your chronological age before comparing it to the standard upper limit. This can extend
                eligibility well beyond 40 or even 45 years in some posts.
              </p>
            </div>
          </section>

          {/* Why Govt Jobs */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mt-8 mb-4">
              💡 Why the Age Window Matters More Than You Think
            </h2>
            <p className="text-surface-700 leading-relaxed mb-4">
              Many candidates realize they are still eligible for top exams only after learning about
              category relaxations. If you are in the OBC/SC/ST category, your effective window can be
              3–5 years wider than a General candidate — often the difference between one more attempt
              and giving up entirely.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {[
                { icon: '🏠', title: 'Housing (HRA / Quarters)', desc: 'Government housing allowance or official quarters in major cities.' },
                { icon: '🏥', title: 'Healthcare (CGHS)', desc: 'Comprehensive medical coverage for you and your dependents.' },
                { icon: '🚌', title: 'Transport Allowances', desc: 'Travel, Transport, and Dearness Allowances linked to inflation.' },
                { icon: '🔒', title: 'Job Security & Pension', desc: 'Unmatched job security with NPS pension benefits post-retirement.' },
              ].map(item => (
                <div key={item.title} className="card p-4 flex gap-3 items-start">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-heading font-semibold text-surface-900 text-sm">{item.title}</div>
                    <div className="text-xs text-surface-600 leading-relaxed mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mt-8 mb-4">
              ❓ Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'What does age relaxation mean in government exams?',
                  a: 'Age relaxation means the government allows reserved category candidates (OBC, SC/ST, PwBD, Ex-Servicemen) to apply even if they are older than the standard maximum age. For example, if the upper age limit is 30 years for General candidates, an OBC candidate gets +3 years (can apply up to 33), and an SC/ST candidate gets +5 years (can apply up to 35). This extra allowance in years is called "age relaxation."',
                },
                {
                  q: 'What is the meaning of age relaxation in sarkari exams?',
                  a: 'Age relaxation in sarkari exams means an increase in the maximum permissible age for specific categories. It is a constitutional provision to ensure equal opportunity. The relaxation is added on top of the General/EWS upper age limit: OBC gets +3 years, SC/ST gets +5 years, PwBD gets +10 years, and Ex-Servicemen get 3 years + actual service period.',
                },
                {
                  q: 'What is the age limit for SSC CGL 2026?',
                  a: 'The SSC CGL age limit is 18–32 years for General/EWS candidates. OBC candidates get +3 years (up to 35), SC/ST get +5 years (up to 37), and PwBD (General) get +10 years (up to 42). The cut-off date is August 1 of the exam year.',
                },
                {
                  q: 'Can an OBC candidate apply for UPSC after 32 years of age?',
                  a: 'Yes. While the General category upper age limit for UPSC CSE is 32 years, OBC (NCL) candidates receive a 3-year relaxation and can apply up to 35 years of age with up to 9 attempts.',
                },
                {
                  q: 'What is the age limit for IBPS PO 2026?',
                  a: 'IBPS PO age limit is 20–30 years for General/EWS candidates. OBC can apply up to 33 years, SC/ST up to 35 years, and PwBD (General) up to 40 years. There is no attempt limit for IBPS PO.',
                },
                {
                  q: 'How much age relaxation do PwBD candidates get?',
                  a: 'PwBD (General) candidates receive a base relaxation of 10 years. PwBD (OBC) gets 13 years, and PwBD (SC/ST) gets 15 years of relaxation over the standard General category upper age limit.',
                },
                {
                  q: 'What is the age relaxation for Ex-Servicemen in central government exams?',
                  a: 'Ex-Servicemen (General) receive 3 years of relaxation plus the actual period of service rendered. For OBC Ex-SM it is 6 years plus service, and for SC/ST Ex-SM it is 8 years plus service. The relaxed age is subject to a maximum of 45–50 years depending on the post.',
                },
              ].map((item, i) => (
                <div key={i} className="card p-5">
                  <h3 className="text-base font-heading font-semibold text-surface-900 mb-2">Q: {item.q}</h3>
                  <p className="text-sm text-surface-700 leading-relaxed">A: {item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-6 mb-8 text-center">
            <h3 className="text-lg font-heading font-bold text-white mb-2">Check Your Eligibility Right Now</h3>
            <p className="text-primary-100 text-sm mb-4">
              Enter your date of birth and category — our free tool instantly tells you which of our 100 listed exams you are eligible for.
            </p>
            <Link
              href="/tools/eligibility-checker/"
              className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-primary-50 transition-colors"
            >
              Open Eligibility Checker →
            </Link>
          </div>

          {/* Back to blog */}
          <div className="flex justify-start">
            <Link href="/blog" className="text-sm text-primary-500 hover:text-primary-600 flex items-center gap-1.5 font-medium">
              ← Back to all articles
            </Link>
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <div className="card p-5">
              <div className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">In This Article</div>
              <nav className="space-y-1">
                {toc.map(item => (
                  <a key={item.id} href={`#${item.id}`} className="block text-sm text-surface-600 hover:text-primary-500 py-1 px-2 rounded hover:bg-primary-50 transition-colors leading-snug">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="card p-5">
              <div className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">Try Our Tools</div>
              <div className="space-y-2">
                <Link href="/tools/eligibility-checker/" className="block text-sm text-primary-600 hover:text-primary-700 hover:underline leading-snug">
                  Free Eligibility Checker →
                </Link>
                <Link href="/exams" className="block text-sm text-primary-600 hover:text-primary-700 hover:underline leading-snug">
                  Browse All 100 Exams →
                </Link>
                <Link href="/exams/upsc-ias" className="block text-sm text-primary-600 hover:text-primary-700 hover:underline leading-snug">
                  UPSC IAS Complete Guide →
                </Link>
                <Link href="/exams/ssc-cgl" className="block text-sm text-primary-600 hover:text-primary-700 hover:underline leading-snug">
                  SSC CGL Complete Guide →
                </Link>
                <Link href="/exams/ibps-po" className="block text-sm text-primary-600 hover:text-primary-700 hover:underline leading-snug">
                  IBPS PO Complete Guide →
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

// ─── RRB NTPC 2026 SYLLABUS ARTICLE ─────────────────────────────────────────
function RrbNtpcSyllabusArticle({ post }: { post: any }) {
  const toc = [
    { id: 'overview', label: 'Exam Overview' },
    { id: 'eligibility', label: 'Eligibility Criteria' },
    { id: 'pattern', label: 'Exam Pattern' },
    { id: 'cbt1', label: 'CBT-1 Syllabus (Tier 1)' },
    { id: 'cbt2', label: 'CBT-2 Syllabus (Tier 2)' },
    { id: 'weightage', label: 'Topic-wise Weightage' },
    { id: 'pdf', label: 'Official PDF & Links' },
    { id: 'books', label: 'Best Books' },
    { id: 'strategy', label: 'Preparation Strategy' },
    { id: 'faq', label: 'FAQs' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'RRB NTPC 2026 Syllabus: Tier 1 & Tier 2 with PDF Download',
        description: 'Complete RRB NTPC 2026 syllabus — CBT-1 and CBT-2 topic-wise breakdown, exam pattern, marking scheme, and official PDF download links.',
        author: { '@type': 'Organization', name: 'TaiyarHo Editorial' },
        publisher: { '@type': 'Organization', name: 'TaiyarHo', url: 'https://www.taiyarho.in' },
        datePublished: '2026-05-03',
        dateModified: '2026-05-03',
        url: 'https://www.taiyarho.in/blog/rrb-ntpc-2026-syllabus-tier-1-tier-2/',
        mainEntityOfPage: 'https://www.taiyarho.in/blog/rrb-ntpc-2026-syllabus-tier-1-tier-2/',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the syllabus for RRB NTPC CBT-1 2026?',
            acceptedAnswer: { '@type': 'Answer', text: 'RRB NTPC CBT-1 covers three subjects: Mathematics (30 questions), General Intelligence & Reasoning (30 questions), and General Awareness (40 questions) — total 100 questions in 90 minutes with 1/3 negative marking.' },
          },
          {
            '@type': 'Question',
            name: 'Is the RRB NTPC CBT-2 syllabus different for graduate and under-graduate posts?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. Under-Graduate level posts (Level 2–3) have a simpler CBT-2, while Graduate level posts (Level 4–6) have a more advanced CBT-2 with higher difficulty and additional topics like Data Interpretation and Economics.' },
          },
          {
            '@type': 'Question',
            name: 'Is there negative marking in RRB NTPC?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. There is 1/3 negative marking in both CBT-1 and CBT-2. Attempt only questions you are confident about.' },
          },
          {
            '@type': 'Question',
            name: 'Which subject carries the most weight in RRB NTPC?',
            acceptedAnswer: { '@type': 'Answer', text: 'General Awareness carries the highest weight in CBT-1 (40 out of 100 questions). It is also the fastest to attempt, making it the highest-scoring section for well-prepared candidates.' },
          },
          {
            '@type': 'Question',
            name: 'Where can I download the official RRB NTPC syllabus PDF?',
            acceptedAnswer: { '@type': 'Answer', text: 'The official RRB NTPC syllabus PDF is available on the Indian Railways official recruitment portals — rrbcdg.gov.in, indianrailways.gov.in, and the respective RRB zone websites. The syllabus is published along with the official CEN notification.' },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.taiyarho.in' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.taiyarho.in/blog' },
          { '@type': 'ListItem', position: 3, name: 'RRB NTPC 2026 Syllabus', item: 'https://www.taiyarho.in/blog/rrb-ntpc-2026-syllabus-tier-1-tier-2/' },
        ],
      },
    ],
  };

  return (
    <div className="container-main py-10">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-surface-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/blog" className="hover:text-primary-500">Blog</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">RRB NTPC 2026 Syllabus</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-10 max-w-6xl">
        {/* MAIN ARTICLE */}
        <article>
          {/* Hero Banner */}
          <div className="bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900 rounded-2xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-accent-500/20 border border-accent-500/40 text-accent-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse" />
                  Updated {post.publishedDate}
                </span>
                <span className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded">Railway</span>
                <span className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded">Syllabus 2026</span>
                <span className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded">Tier 1 &amp; Tier 2</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight mb-3">
                RRB NTPC 2026 Syllabus:{' '}
                <span className="text-accent-300 italic">Tier 1 &amp; Tier 2</span> with PDF Download
              </h1>
              <p className="text-surface-300 text-base leading-relaxed mb-5">
                One complete guide. Every topic, every subject, every section — for both CBT-1 and CBT-2. Covers Graduate and Under-Graduate level posts. 100% free, no signup.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-surface-400">
                <span>📅 {post.publishedDate}</span>
                <span>⏱ {post.readTime}</span>
                <span>✍️ {post.author}</span>
              </div>
            </div>
          </div>

          {/* 4-Grid Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {[
              { icon: '🏛️', label: 'MIN. QUALIFICATION', value: '12th / Graduate', sub: 'Depends on post level' },
              { icon: '📝', label: 'TOTAL QUESTIONS', value: 'CBT-1: 100', sub: 'CBT-2: 120 questions' },
              { icon: '⏱️', label: 'EXAM DURATION', value: '90 / 90 min', sub: 'CBT-1 / CBT-2' },
              { icon: '❌', label: 'NEGATIVE MARKING', value: '1/3rd', sub: 'Both CBT stages' },
            ].map(f => (
              <div key={f.label} className="card p-4 text-center">
                <div className="text-2xl mb-1">{f.icon}</div>
                <div className="text-xs text-surface-400 uppercase tracking-wide font-semibold mb-1">{f.label}</div>
                <div className="text-base font-heading font-bold text-accent-500">{f.value}</div>
                <div className="text-xs text-surface-400 mt-0.5">{f.sub}</div>
              </div>
            ))}
          </div>

          {/* Key Update callout */}
          <Callout type="tip" title="✅ Key Update — RRB NTPC 2025–26 Cycle">
            The Railway Recruitment Boards released the CEN notification for NTPC Graduate and Under-Graduate posts in 2024–25. CBT-1 exams are underway in 2025–26. The syllabus structure below is based on the{' '}
            <strong>official CEN notification</strong> and has remained consistent across cycles. Always verify the latest notification at{' '}
            <a href="https://indianrailways.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline">indianrailways.gov.in</a>.
          </Callout>

          {/* Mobile TOC */}
          <div className="card p-5 mb-10 border-l-4 border-primary-500 lg:hidden">
            <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">📖 Table of Contents</div>
            <ol className="grid grid-cols-2 gap-x-4 gap-y-1.5 list-decimal list-inside">
              {toc.map(item => (
                <li key={item.id}><a href={`#${item.id}`} className="text-sm text-primary-500 hover:underline">{item.label}</a></li>
              ))}
            </ol>
          </div>

          {/* SECTION: OVERVIEW */}
          <Section id="overview" title="📋 What is RRB NTPC? A Quick Overview">
            <p className="text-surface-700 leading-relaxed mb-4">
              <strong>RRB NTPC (Non-Technical Popular Categories)</strong> is one of the largest government recruitment drives in India, conducted by the Railway Recruitment Boards (RRBs) under the Ministry of Railways. It fills thousands of vacancies across the Indian Railways — the world's fourth-largest railway network and one of India's biggest employers.
            </p>
            <p className="text-surface-700 leading-relaxed mb-4">
              Posts under NTPC range from Level 2 (Under-Graduate) to Level 6 (Graduate) in the 7th Pay Commission pay matrix — covering roles like Junior Clerk cum Typist, Accounts Clerk cum Typist, Junior Time Keeper, Trains Clerk, Station Master, Goods Guard, Senior Commercial cum Ticket Clerk, and more.
            </p>
            <p className="text-surface-700 leading-relaxed mb-4">
              The selection process has two stages of Computer-Based Tests (CBT), followed by Typing Skill Test or Computer-Based Aptitude Test (for specific posts), and Document Verification + Medical Examination.
            </p>
            <Callout type="info" title="📌 Quick Note — Two Notification Types">
              RRBs release separate CEN notifications for <strong>Graduate Level Posts (Level 4, 5, 6)</strong> and <strong>Under-Graduate Level Posts (Level 2, 3)</strong>. The CBT-1 syllabus is <em>identical</em> for both, but CBT-2 difficulty and topics vary. Know your post level before you start preparing.
            </Callout>
          </Section>

          {/* SECTION: ELIGIBILITY */}
          <Section id="eligibility" title="🎓 Eligibility Criteria">
            <div className="overflow-x-auto rounded-xl border border-surface-200 mb-5">
              <table className="w-full text-sm">
                <thead className="bg-surface-900 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Criteria</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Under-Graduate Posts</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Graduate Posts</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['📚 Education', '12th Pass (any stream)', 'Bachelor\'s Degree (any stream)'],
                    ['📋 Age Limit', '18–33 years (general)', '18–33 years (general)'],
                    ['🏛️ Pay Level', 'Level 2 & 3 (₹19,900–₹35,400)', 'Level 4, 5, 6 (₹25,500–₹92,300)'],
                    ['🪪 Nationality', 'Indian Citizen', 'Indian Citizen'],
                    ['⚧ Gender', 'All genders', 'All genders'],
                  ].map(([criteria, ug, grad], i) => (
                    <tr key={criteria} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                      <td className="p-3 font-medium text-surface-800">{criteria}</td>
                      <td className="p-3 text-surface-600">{ug}</td>
                      <td className="p-3 text-surface-600">{grad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Callout type="info" title="📋 Age Relaxation">
              OBC (Non-Creamy Layer): <strong>+3 years</strong> | SC/ST: <strong>+5 years</strong> | PwBD: <strong>+10 years</strong> | Ex-Servicemen: as per GoI rules. Age is calculated as on the cut-off date specified in the official notification.
            </Callout>
          </Section>

          {/* SECTION: EXAM PATTERN */}
          <Section id="pattern" title="📝 RRB NTPC 2026 Exam Pattern">
            <p className="text-surface-700 leading-relaxed mb-6">
              RRB NTPC follows a <strong>multi-stage selection process</strong>. CBT-1 is a screening test — its marks are NOT added to the final merit. CBT-2 determines shortlisting for the final stages. The selection process is:
            </p>

            {/* Stage Flow */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {[
                { stage: '1', name: 'CBT-1', sub: 'Screening Test (100 Q / 90 min)', color: 'bg-blue-50 border-blue-200' },
                { stage: '2', name: 'CBT-2', sub: 'Merit Test (120 Q / 90 min)', color: 'bg-orange-50 border-orange-200' },
                { stage: '3', name: 'CBAT / TST', sub: 'Skill Test (post-specific)', color: 'bg-emerald-50 border-emerald-200' },
                { stage: '4', name: 'DV + Medical', sub: 'Document & Fitness Check', color: 'bg-purple-50 border-purple-200' },
              ].map(s => (
                <div key={s.stage} className={`card p-4 text-center border ${s.color}`}>
                  <div className="w-7 h-7 rounded-full bg-surface-900 text-white text-xs font-bold flex items-center justify-center mx-auto mb-2">{s.stage}</div>
                  <div className="font-heading font-bold text-surface-800 text-sm">{s.name}</div>
                  <div className="text-xs text-surface-500 mt-1">{s.sub}</div>
                </div>
              ))}
            </div>

            {/* CBT-1 Pattern Table */}
            <h3 className="text-lg font-heading font-semibold text-surface-800 mt-6 mb-3">CBT-1 (Tier 1) Exam Pattern</h3>
            <div className="overflow-x-auto rounded-xl border border-surface-200 mb-6">
              <table className="w-full text-sm">
                <thead className="bg-primary-700 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Subject</th>
                    <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide">Questions</th>
                    <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide">Marks</th>
                    <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Mathematics', '30', '30', ''],
                    ['General Intelligence & Reasoning', '30', '30', ''],
                    ['General Awareness', '40', '40', ''],
                  ].map(([sub, q, m, d], i) => (
                    <tr key={sub} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                      <td className="p-3 font-medium text-surface-800">{sub}</td>
                      <td className="p-3 text-center text-surface-600">{q}</td>
                      <td className="p-3 text-center text-surface-600">{m}</td>
                      <td className="p-3 text-center text-surface-500 text-xs">{d}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-surface-300 bg-surface-100 font-semibold">
                    <td className="p-3 text-surface-900">Total</td>
                    <td className="p-3 text-center text-surface-900">100</td>
                    <td className="p-3 text-center text-surface-900">100</td>
                    <td className="p-3 text-center text-surface-700 text-xs">90 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CBT-2 Pattern Table */}
            <h3 className="text-lg font-heading font-semibold text-surface-800 mt-6 mb-3">CBT-2 (Tier 2) Exam Pattern</h3>
            <div className="overflow-x-auto rounded-xl border border-surface-200 mb-4">
              <table className="w-full text-sm">
                <thead className="bg-accent-600 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Subject</th>
                    <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide">Questions</th>
                    <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide">Marks</th>
                    <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Mathematics', '35', '35', ''],
                    ['General Intelligence & Reasoning', '35', '35', ''],
                    ['General Awareness', '50', '50', ''],
                  ].map(([sub, q, m, d], i) => (
                    <tr key={sub} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                      <td className="p-3 font-medium text-surface-800">{sub}</td>
                      <td className="p-3 text-center text-surface-600">{q}</td>
                      <td className="p-3 text-center text-surface-600">{m}</td>
                      <td className="p-3 text-center text-surface-500 text-xs">{d}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-surface-300 bg-surface-100 font-semibold">
                    <td className="p-3 text-surface-900">Total</td>
                    <td className="p-3 text-center text-surface-900">120</td>
                    <td className="p-3 text-center text-surface-900">120</td>
                    <td className="p-3 text-center text-surface-700 text-xs">90 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Callout type="warning" title="⚠️ Important — CBT-1 Marks Don't Count">
              CBT-1 is a <strong>screening/qualifying test only</strong>. Its marks are never added to your final merit score. Only CBT-2 marks (and CBAT for Station Master) are used for the final selection. Focus on clearing CBT-1 first — then push hard for CBT-2.
            </Callout>
          </Section>

          {/* SECTION: CBT-1 SYLLABUS */}
          <Section id="cbt1" title="📚 CBT-1 Syllabus (Tier 1) — Subject-wise Topics">
            <p className="text-surface-700 leading-relaxed mb-6">
              CBT-1 tests you on three core subjects. The syllabus is the same for all posts — Graduate and Under-Graduate level alike. Here's every topic you need to cover:
            </p>

            {/* Mathematics */}
            <div className="card mb-5 overflow-hidden">
              <div className="flex items-center gap-3 p-5 border-b border-surface-100 bg-blue-50">
                <div className="w-9 h-9 bg-primary-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">M</div>
                <div>
                  <div className="font-heading font-bold text-surface-900">Mathematics</div>
                  <div className="text-xs text-surface-500">30 Questions · 30 Marks · Class 10 level</div>
                </div>
                <span className="ml-auto text-xs bg-primary-100 text-primary-700 font-semibold px-2.5 py-1 rounded-full">30%</span>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {[
                    '🔢 Number System & HCF/LCM',
                    '📊 Percentage & Ratio/Proportion',
                    '💰 Profit & Loss, Discount',
                    '📈 Simple & Compound Interest',
                    '⏱️ Time & Work / Pipes & Cisterns',
                    '🚂 Speed, Distance & Time',
                    '📐 Mensuration (2D & 3D)',
                    '📉 Algebra & Trigonometry (basics)',
                    '🔄 Averages & Mixtures',
                    '🔁 Sequence & Series',
                    '📦 Data Interpretation',
                    '📋 Elementary Statistics',
                  ].map(t => (
                    <div key={t} className="text-sm text-surface-700 flex items-start gap-2">{t}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reasoning */}
            <div className="card mb-5 overflow-hidden">
              <div className="flex items-center gap-3 p-5 border-b border-surface-100 bg-purple-50">
                <div className="w-9 h-9 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">R</div>
                <div>
                  <div className="font-heading font-bold text-surface-900">General Intelligence &amp; Reasoning</div>
                  <div className="text-xs text-surface-500">30 Questions · 30 Marks · Verbal + Non-Verbal</div>
                </div>
                <span className="ml-auto text-xs bg-purple-100 text-purple-700 font-semibold px-2.5 py-1 rounded-full">30%</span>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {[
                    '🔡 Analogies & Classification',
                    '🔢 Number & Alphabetical Series',
                    '🗂️ Coding-Decoding',
                    '🧩 Puzzles & Seating Arrangement',
                    '🩸 Blood Relations',
                    '🗺️ Direction & Distance',
                    '📐 Mathematical Operations',
                    '📊 Venn Diagrams',
                    '🔍 Syllogisms',
                    '🖼️ Non-Verbal Reasoning (figures)',
                    '📅 Calendar & Clock',
                    '🧠 Statement & Conclusions',
                  ].map(t => (
                    <div key={t} className="text-sm text-surface-700 flex items-start gap-2">{t}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* General Awareness */}
            <div className="card mb-5 overflow-hidden">
              <div className="flex items-center gap-3 p-5 border-b border-surface-100 bg-orange-50">
                <div className="w-9 h-9 bg-accent-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">G</div>
                <div>
                  <div className="font-heading font-bold text-surface-900">General Awareness</div>
                  <div className="text-xs text-surface-500">40 Questions · 40 Marks · Highest weight in CBT-1</div>
                </div>
                <span className="ml-auto text-xs bg-accent-100 text-accent-700 font-semibold px-2.5 py-1 rounded-full">40%</span>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {[
                    '🇮🇳 Indian History & Culture',
                    '🗺️ Indian & World Geography',
                    '📜 Indian Polity & Constitution',
                    '💹 Indian Economy & Budget',
                    '🔬 General Science (Physics, Chemistry, Biology)',
                    '🚂 Indian Railways — History & Zones',
                    '🏆 Sports & Awards',
                    '📰 Current Affairs (last 12 months)',
                    '💡 Science & Technology',
                    '🌍 Environment & Ecology',
                    '🎭 Art, Literature & Culture',
                    '👑 Important Dates & Events',
                  ].map(t => (
                    <div key={t} className="text-sm text-surface-700 flex items-start gap-2">{t}</div>
                  ))}
                </div>
                <Callout type="tip" title="✅ TaiyarHo Tip — General Awareness Strategy">
                  GA carries 40 marks (40% of CBT-1). Nail the <strong>Railways-specific GK</strong> — history of Indian Railways, zones and headquarters, major railway projects, and recent developments. These questions appear in almost every NTPC cycle and are unique to this exam.
                </Callout>
              </div>
            </div>
          </Section>

          {/* SECTION: CBT-2 SYLLABUS */}
          <Section id="cbt2" title="📚 CBT-2 Syllabus (Tier 2) — Graduate vs Under-Graduate">
            <p className="text-surface-700 leading-relaxed mb-4">
              CBT-2 determines your final merit rank and post allocation. While the three subjects remain the same, the <strong>difficulty level and depth of topics is higher in Graduate-level posts</strong>. Both versions are covered below.
            </p>

            {/* Math CBT-2 */}
            <div className="card mb-5 overflow-hidden">
              <div className="flex items-center gap-3 p-5 border-b border-surface-100 bg-blue-50">
                <div className="w-9 h-9 bg-primary-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">M</div>
                <div>
                  <div className="font-heading font-bold text-surface-900">Mathematics — CBT-2</div>
                  <div className="text-xs text-surface-500">35 Questions · 35 Marks · Higher difficulty than CBT-1</div>
                </div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {[
                    '🔢 Number System (advanced)',
                    '📊 Percentage, Ratio & Partnership',
                    '💰 Profit, Loss, Discount & CI/SI',
                    '⏱️ Time & Work / Time & Distance',
                    '📐 Mensuration (advanced 3D)',
                    '📉 Algebra & Quadratic Equations',
                    '📈 Data Interpretation (Tables, Bar, Pie)',
                    '📋 Statistics — Mean, Median, Mode',
                    '🔁 Permutation & Combination',
                    '🔬 Trigonometry (sin, cos, tan rules)',
                  ].map(t => (
                    <div key={t} className="text-sm text-surface-700">{t}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reasoning CBT-2 */}
            <div className="card mb-5 overflow-hidden">
              <div className="flex items-center gap-3 p-5 border-b border-surface-100 bg-purple-50">
                <div className="w-9 h-9 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">R</div>
                <div>
                  <div className="font-heading font-bold text-surface-900">General Intelligence &amp; Reasoning — CBT-2</div>
                  <div className="text-xs text-surface-500">35 Questions · 35 Marks · More complex puzzles</div>
                </div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {[
                    '🧩 Complex Seating Arrangements',
                    '🗂️ Advanced Coding-Decoding',
                    '🧠 Critical Reasoning',
                    '🩸 Complex Blood Relations',
                    '🔍 Statement-Assumption-Conclusion',
                    '🗺️ Advanced Direction & Distance',
                    '📐 Input-Output (advanced)',
                    '🔢 Series (mixed & complex)',
                    '🖼️ Non-Verbal & Spatial Reasoning',
                    '📊 Data Sufficiency',
                  ].map(t => (
                    <div key={t} className="text-sm text-surface-700">{t}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* GA CBT-2 */}
            <div className="card mb-5 overflow-hidden">
              <div className="flex items-center gap-3 p-5 border-b border-surface-100 bg-orange-50">
                <div className="w-9 h-9 bg-accent-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">G</div>
                <div>
                  <div className="font-heading font-bold text-surface-900">General Awareness — CBT-2</div>
                  <div className="text-xs text-surface-500">50 Questions · 50 Marks · Deepest section</div>
                </div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {[
                    '🚂 Railways — Budget, Zones, Projects (detailed)',
                    '📜 Polity — Bills, Acts, Constitutional Amendments',
                    '🇮🇳 Modern History & Freedom Struggle',
                    '💹 Economy — 5-Year Plans, Inflation, Fiscal Policy',
                    '🔬 Science & Technology — Space, Defence',
                    '🌍 Geography — Rivers, Mountains, Climate',
                    '🏆 Sports — Latest tournaments & records',
                    '📰 Current Affairs — Last 18 months',
                    '🎭 Awards, Books & Authors',
                    '🔭 Important Government Schemes',
                  ].map(t => (
                    <div key={t} className="text-sm text-surface-700">{t}</div>
                  ))}
                </div>
              </div>
            </div>

            <Callout type="info" title="📌 Quick Note — Skill Test after CBT-2">
              After CBT-2, selected candidates for specific posts appear for: <strong>Typing Skill Test (TST)</strong> for Clerk/Typist posts (35 WPM in English or 30 WPM in Hindi), or <strong>Computer-Based Aptitude Test (CBAT)</strong> for Station Master and Traffic Assistant posts. CBAT is NOT applicable for other posts.
            </Callout>
          </Section>

          {/* SECTION: WEIGHTAGE */}
          <Section id="weightage" title="📊 Topic-wise Weightage (Based on Past Papers)">
            <p className="text-surface-700 leading-relaxed mb-5">
              Based on analysis of RRB NTPC previous year papers across multiple cycles, here's how questions are typically distributed. Use this to prioritize your preparation.
            </p>
            <div className="overflow-x-auto rounded-xl border border-surface-200">
              <table className="w-full text-sm">
                <thead className="bg-surface-900 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Subject</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">High-Yield Topics</th>
                    <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide">Est. Questions</th>
                    <th className="text-center p-3 font-semibold text-xs uppercase tracking-wide">Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Mathematics', 'Number System, Percentage, Profit/Loss, Time & Work, DI', '10–12', '🔴 High'],
                    ['Mathematics', 'SI/CI, Mensuration, Average, Ratio', '8–10', '🟠 Medium'],
                    ['Reasoning', 'Series, Analogies, Coding-Decoding', '10–12', '🔴 High'],
                    ['Reasoning', 'Blood Relations, Direction, Puzzles', '8–10', '🟠 Medium'],
                    ['General Awareness', 'Indian Railways GK, Current Affairs', '15–18', '🔴 Very High'],
                    ['General Awareness', 'History, Polity, Geography, Science', '14–16', '🔴 High'],
                    ['General Awareness', 'Sports, Awards, Books & Authors', '6–8', '🟡 Moderate'],
                  ].map(([sub, topics, est, priority], i) => (
                    <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                      <td className="p-3 font-medium text-surface-800 text-xs">{sub}</td>
                      <td className="p-3 text-surface-600 text-xs">{topics}</td>
                      <td className="p-3 text-center text-surface-700 font-semibold">{est}</td>
                      <td className="p-3 text-center text-xs">{priority}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* SECTION: PDF */}
          <Section id="pdf" title="📥 Official Syllabus PDF & Important Links">
            <p className="text-surface-700 leading-relaxed mb-5">
              The official RRB NTPC syllabus is published inside the <strong>Centralized Employment Notification (CEN)</strong>. Download it directly from the official Railway Recruitment portals:
            </p>
            <div className="space-y-3">
              {[
                { label: '📄 CEN 05/2024 NTPC Graduate — Official PDF', desc: 'Detailed notification PDF for Graduate-level posts (Level 4–6) — direct from rrbcdg.gov.in', url: 'https://www.rrbcdg.gov.in/uploads/2024/05-NTPCG/CEN_05_2024_Graduate.pdf', badge: 'Graduate Posts' },
                { label: '📄 CEN 06/2024 NTPC Under-Graduate — Official PDF', desc: 'Detailed notification PDF for Under-Graduate posts (Level 2–3, 12th pass) — direct from rrbcdg.gov.in', url: 'https://www.rrbcdg.gov.in/uploads/2024/06-NTPCUG/Detailed%20CEN%2006-2024%20NTPC.pdf', badge: 'UG Posts' },
                { label: '🏛️ RRB CDG Official Website', desc: 'All notifications, results, call letters, and score cards for ongoing CENs', url: 'https://www.rrbcdg.gov.in', badge: null },
                { label: '🚂 Indian Railways — Ministry Portal', desc: 'Central government portal for Railway Recruitment Board listings', url: 'https://indianrailways.gov.in', badge: null },
                { label: '📋 RRB Apply Portal', desc: 'Online registration and application portal for all RRB exams', url: 'https://rrbapply.gov.in', badge: null },
              ].map(link => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-4 flex items-center justify-between gap-4 hover:border-primary-300 group"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <div className="font-semibold text-surface-800 text-sm group-hover:text-primary-600">{link.label}</div>
                      {link.badge && (
                        <span className="text-xs bg-orange-100 text-orange-700 font-semibold px-2 py-0.5 rounded-full">{link.badge}</span>
                      )}
                    </div>
                    <div className="text-xs text-surface-500 mt-0.5">{link.desc}</div>
                  </div>
                  <svg className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
            <Callout type="warning" title="⚠️ Always Verify at the Official Source">
              Syllabus details on third-party websites (including coaching sites) can be outdated or incorrect. <strong>Always download the PDF directly from the official RRB portal</strong> and cross-check with the CEN notification for your specific post level and cycle.
            </Callout>
          </Section>

          {/* SECTION: BOOKS */}
          <Section id="books" title="📖 Best Books for RRB NTPC 2026">
            <div className="overflow-x-auto rounded-xl border border-surface-200">
              <table className="w-full text-sm">
                <thead className="bg-surface-900 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold text-xs uppercase">Book</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase">Author / Publisher</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase">Subject</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Quantitative Aptitude for Competitive Exams', 'R.S. Aggarwal', 'Mathematics'],
                    ['A Modern Approach to Verbal & Non-Verbal Reasoning', 'R.S. Aggarwal', 'Reasoning'],
                    ['Lucent\'s General Knowledge', 'Lucent Publications', 'General Awareness (Static)'],
                    ['Lucent\'s General Science', 'Lucent Publications', 'Science GK'],
                    ['RRB NTPC Previous Year Papers', 'Arihant / Kiran', 'Practice & Mock Tests'],
                    ['Manorama Yearbook 2026', 'Malayala Manorama', 'Current Affairs'],
                  ].map(([book, author, sub], i) => (
                    <tr key={book} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                      <td className="p-3 font-medium text-surface-800">{book}</td>
                      <td className="p-3 text-surface-600">{author}</td>
                      <td className="p-3"><span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-0.5 rounded-full">{sub}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Callout type="tip" title="✅ Free Resources on TaiyarHo">
              You don't need to buy every book. Check our{' '}
              <Link href="/exams/rrb-ntpc" className="text-primary-600 underline">RRB NTPC complete guide</Link>{' '}
              for free YouTube channels, mock test links, and study material — all free, no registration.
            </Callout>
          </Section>

          {/* SECTION: STRATEGY */}
          <Section id="strategy" title="🎯 Preparation Strategy — Month-by-Month Plan">
            <div className="space-y-4">
              {[
                { month: 'Month 1', title: 'Build the Foundation', tasks: ['Maths: Number System, Percentage, Profit & Loss, Ratio', 'Reasoning: Series, Analogies, Coding-Decoding', 'GA: Lucent GK Chapters 1–8 (History, Geography)'] },
                { month: 'Month 2', title: 'Core Topics Deep Dive', tasks: ['Maths: Time & Work, Speed & Distance, CI/SI', 'Reasoning: Blood Relations, Direction, Puzzles', 'GA: Polity, Indian Railways GK, Science (Physics basics)'] },
                { month: 'Month 3', title: 'Advanced Topics + Current Affairs', tasks: ['Maths: Mensuration, Statistics, DI basics', 'Reasoning: Syllogisms, Non-Verbal, Input-Output', 'GA: Economy, Science (Chemistry & Biology), Current Affairs — start daily reading'] },
                { month: 'Month 4', title: 'Mock Tests Begin', tasks: ['Attempt 3 full CBT-1 mock tests per week', 'Analyze each test — find and fix weak areas', 'GA revision + daily current affairs (30 min)'] },
                { month: 'Month 5', title: 'Speed & Accuracy Sprint', tasks: ['CBT-2 preparation: same topics but at higher difficulty', 'Daily timed section practice (20 min per subject)', '2 full mocks per week + thorough analysis'] },
                { month: 'Month 6', title: 'Final Revision', tasks: ['Revise all formula sheets and short notes', 'Focus exclusively on Railways GK and current affairs', '3–4 mocks per week. Target 90%+ in GA'] },
              ].map((m, i) => (
                <div key={m.month} className="card p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-primary-600 text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</div>
                    <div>
                      <div className="font-heading font-bold text-surface-900">{m.month} — {m.title}</div>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {m.tasks.map(t => (
                      <li key={t} className="text-sm text-surface-700 flex items-start gap-2">
                        <span className="text-primary-500 mt-0.5">✓</span> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Callout type="tip" title="✅ TaiyarHo Preparation Tip">
              <strong>Railways GK is your secret weapon</strong> in NTPC. It's unique to this exam — most coaching material under-covers it. Study RRB zone headquarters, railway history, recent Railway Budget highlights, and major infrastructure projects. These 5–8 questions can separate you from the competition.
            </Callout>
          </Section>

          {/* SECTION: FAQ */}
          <Section id="faq" title="❓ Frequently Asked Questions">
            <div className="space-y-4">
              {[
                {
                  q: 'What is the syllabus for RRB NTPC CBT-1 2026?',
                  a: 'RRB NTPC CBT-1 covers three subjects: Mathematics (30 questions), General Intelligence & Reasoning (30 questions), and General Awareness (40 questions) — total 100 questions in 90 minutes with 1/3 negative marking.',
                },
                {
                  q: 'Is the CBT-2 syllabus different for Graduate and Under-Graduate posts?',
                  a: 'The three subjects remain the same, but the difficulty is higher for Graduate-level posts (Level 4–6). Graduate-level CBT-2 includes more advanced DI, Economics, and Polity questions compared to Under-Graduate posts (Level 2–3).',
                },
                {
                  q: 'Is there negative marking in RRB NTPC?',
                  a: 'Yes. There is 1/3 negative marking in both CBT-1 and CBT-2. For every wrong answer, 0.33 marks are deducted. Unattempted questions carry no penalty.',
                },
                {
                  q: 'Which subject carries the most weight in RRB NTPC?',
                  a: 'General Awareness carries the highest weight in CBT-1 (40 out of 100 questions) and in CBT-2 (50 out of 120 questions). It is also the fastest section to attempt, making it the highest-scoring opportunity for well-prepared candidates.',
                },
                {
                  q: 'Where can I download the official RRB NTPC syllabus PDF?',
                  a: 'The official syllabus PDF is part of the Centralized Employment Notification (CEN) published on rrbcdg.gov.in and indianrailways.gov.in. Always download from the official portal for the most accurate and updated information.',
                },
              ].map((item, i) => (
                <div key={i} className="card p-5">
                  <div className="font-heading font-semibold text-surface-900 mb-2">Q{i + 1}. {item.q}</div>
                  <p className="text-sm text-surface-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Final CTA */}
          <div className="card p-6 bg-primary-50 border-primary-200 text-center mt-8">
            <div className="text-3xl mb-2">🚂</div>
            <h3 className="font-heading font-bold text-primary-900 text-lg mb-2">Ready to Start Your Railway Journey?</h3>
            <p className="text-sm text-primary-700 mb-4">Check out our complete RRB NTPC guide with books, YouTube channels, mock tests — all free.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/exams/rrb-ntpc" className="btn-primary text-sm">RRB NTPC Complete Guide →</Link>
              <Link href="/tools/eligibility-checker/" className="btn-outline text-sm">Check My Eligibility →</Link>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 p-5 bg-surface-50 rounded-xl">
            <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">📖 Read Next</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { href: '/blog/ssc-cgl-2026-syllabus-complete-guide', label: 'SSC CGL 2026 Syllabus Guide' },
                { href: '/blog/government-exam-age-limit-obc-sc-st-relaxation-2026', label: 'Govt Exam Age Limits & Relaxation' },
                { href: '/exams/rrb-ntpc', label: 'RRB NTPC Complete Preparation Guide' },
                { href: '/resources', label: 'Free Study Resources Hub' },
              ].map(link => (
                <Link key={link.href} href={link.href} className="text-sm text-primary-600 hover:text-primary-700 hover:underline flex items-center gap-1">
                  → {link.label}
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4">
            <div className="card p-5">
              <div className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">Table of Contents</div>
              <nav className="space-y-1">
                {toc.map(item => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block py-1.5 px-3 rounded-lg text-sm text-surface-500 hover:text-primary-500 hover:bg-primary-50 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="card p-5 bg-emerald-50 border-emerald-200">
              <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">Related Exam</div>
              <Link href="/exams/rrb-ntpc" className="block text-sm font-semibold text-emerald-700 hover:text-emerald-900 hover:underline">
                RRB NTPC Complete Guide →
              </Link>
              <p className="text-xs text-emerald-600 mt-1">Eligibility, salary, books, study plan</p>
            </div>

            <div className="card p-5 bg-primary-50 border-primary-200">
              <div className="text-xs font-semibold text-primary-800 uppercase tracking-wider mb-2">Official Links</div>
              <div className="space-y-2">
                <a href="https://www.rrbcdg.gov.in" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary-600 hover:underline break-all">
                  rrbcdg.gov.in →
                </a>
                <a href="https://indianrailways.gov.in" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary-600 hover:underline break-all">
                  indianrailways.gov.in →
                </a>
              </div>
            </div>

            <div className="card p-5">
              <div className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">Try Our Tools</div>
              <div className="space-y-2">
                <Link href="/tools/eligibility-checker/" className="block text-sm text-primary-600 hover:text-primary-700 hover:underline leading-snug">
                  Free Eligibility Checker →
                </Link>
                <Link href="/exams" className="block text-sm text-primary-600 hover:text-primary-700 hover:underline leading-snug">
                  Browse All 100 Exams →
                </Link>
                <Link href="/blog/ssc-cgl-2026-syllabus-complete-guide/" className="block text-sm text-primary-600 hover:text-primary-700 hover:underline leading-snug">
                  SSC CGL Syllabus Guide →
                </Link>
                <Link href="/resources" className="block text-sm text-primary-600 hover:text-primary-700 hover:underline leading-snug">
                  Free Study Resources →
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

// ─── HIGHEST SALARY GOVT EXAM AFTER 12TH 2026 ────────────────────────────────
function HighestSalary12thArticle({ post }: { post: any }) {
  const toc = [
    { id: 'why-12th', label: 'Why 12th-Pass Jobs Matter' },
    { id: 'ranked-list', label: 'Top Exams Ranked by Salary' },
    { id: 'salary-table', label: '8th CPC Salary Comparison' },
    { id: 'nda-deep', label: 'NDA – The Gold Standard' },
    { id: 'ssc-chsl-deep', label: 'SSC CHSL (DEO Grade A)' },
    { id: 'rbi-attendant', label: 'RBI Office Attendant' },
    { id: 'other-options', label: 'Other Strong Options' },
    { id: 'myth', label: 'RBI vs SEBI: The Myth' },
    { id: 'how-to-choose', label: 'Which Exam Is Right for You?' },
    { id: 'faq', label: 'FAQs' },
  ];

  return (
    <div className="container-main py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/blog" className="hover:text-primary-500">Blog</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">Highest Salary Govt Exam After 12th 2026</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-10 max-w-6xl">
        {/* MAIN CONTENT */}
        <article>
          {/* Hero */}
          <div className="bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900 rounded-2xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-green-500/20 border border-green-500/40 text-green-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Career
                </span>
                <span className="text-white/50 text-xs">{post.publishedDate} · {post.readTime}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight mb-3">
                Highest Salary Government Exam After 12th Pass in{' '}
                <span className="text-orange-400">2026: Ranked List</span>
              </h1>
              <p className="text-surface-300 text-base leading-relaxed mb-5">
                Start your career with a six-figure salary — before you even graduate. Here is every high-paying government exam open to 12th-pass students, ranked by in-hand salary with 8th Pay Commission projections.
              </p>
              <div className="flex flex-wrap gap-2">
                {['NDA Salary 2026', 'SSC CHSL DEO', '8th CPC Update', 'Govt Job 12th Pass'].map(tag => (
                  <span key={tag} className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Max In-Hand Pay', value: '₹1 Lakh+', sub: 'NDA Post-Commission' },
              { label: '8th CPC', value: 'Active 2026', sub: 'Salary revision' },
              { label: 'SSC CHSL Launch', value: '30 April', sub: '2026 notification' },
              { label: 'TaiyarHo Guides', value: '100% Free', sub: 'No paywall, no spam' },
            ].map(m => (
              <div key={m.label} className="card p-4 text-center">
                <p className="text-xs text-surface-500 font-medium mb-1">{m.label}</p>
                <p className="text-xl font-heading font-bold text-primary-600">{m.value}</p>
                <p className="text-xs text-surface-400">{m.sub}</p>
              </div>
            ))}
          </div>

          {/* ✅ 2026 Key Update */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8 flex gap-3">
            <span className="text-xl mt-0.5">✅</span>
            <div>
              <p className="font-semibold text-green-800 mb-1">2026 Key Update</p>
              <p className="text-green-700 text-sm leading-relaxed">
                The 8th Pay Commission is in effect from January 2026. Expected fitment factor of 2.86× means salaries across all central government posts — including NDA, SSC CHSL, and RBI — are projected significantly higher than 7th CPC figures. All salary figures on this page reflect the <strong>expected 8th CPC numbers</strong>.
              </p>
            </div>
          </div>

          {/* Section 1: Why 12th-Pass */}
          <section id="why-12th" className="mb-10">
            <h2 className="text-2xl font-heading font-bold text-surface-900 mb-4">Why 12th-Pass Government Jobs Are Underrated</h2>
            <p className="text-surface-700 mb-3 leading-relaxed">
              Most students assume the best government salaries are locked behind a graduation degree. That is simply not true. The NDA entry — open to 12th-pass students — places you directly at <strong>Level 10 of the Pay Matrix</strong>, the same level as IAS and IPS entry-level officers.
            </p>
            <p className="text-surface-700 mb-3 leading-relaxed">
              Even desk-based options like SSC CHSL (DEO Grade A) and RBI Office Attendant offer better starting salaries than most private sector jobs at the same qualification level. The secret is knowing <em>which post</em> within each exam pays the most.
            </p>
            <div className="bg-blue-50 border-l-4 border-primary-500 rounded-r-xl p-4 mb-4">
              <p className="text-sm font-semibold text-primary-700 mb-1">📌 Quick Note</p>
              <p className="text-sm text-primary-700">
                Within SSC CHSL, the <strong>DEO (Data Entry Operator) Grade A</strong> post pays significantly more than the popular LDC (Lower Division Clerk) post. Always aim for the highest post within each exam, not just the exam name.
              </p>
            </div>
          </section>

          {/* Section 2: Ranked List */}
          <section id="ranked-list" className="mb-10">
            <h2 className="text-2xl font-heading font-bold text-surface-900 mb-6">Top Government Exams After 12th — Ranked by Salary (2026)</h2>

            {/* NDA Card */}
            <div className="border-2 border-orange-300 bg-orange-50 rounded-2xl p-6 mb-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🏅</span>
                <div>
                  <h3 className="text-xl font-heading font-bold text-surface-900">1. NDA Officer (Army / Navy / Air Force)</h3>
                  <div className="flex gap-2 mt-1">
                    <span className="bg-orange-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded">HIGHEST PAY</span>
                    <span className="bg-green-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded">GAZETTED OFFICER</span>
                  </div>
                </div>
              </div>
              <p className="text-surface-700 text-sm leading-relaxed mb-4">
                NDA is the only 12th-pass exam that bypasses clerical levels entirely. It places you directly into a <strong>Level 10 Pay Matrix</strong> — equivalent to IAS/IPS entry level. Navy and Air Force wings require PCM in 12th.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <div className="bg-white rounded-lg p-3 border border-orange-200">
                  <p className="text-xs text-surface-500 mb-1">💰 In-Hand (2026)</p>
                  <p className="font-bold text-orange-600 text-base">₹95,000 – ₹1,10,000</p>
                  <p className="text-xs text-surface-400">Expected 8th CPC</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-orange-200">
                  <p className="text-xs text-surface-500 mb-1">📅 NDA 2 Exam Date</p>
                  <p className="font-bold text-surface-800 text-base">13 Sept 2026</p>
                  <p className="text-xs text-surface-400">UPSC NDA & NA (II)</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-orange-200">
                  <p className="text-xs text-surface-500 mb-1">🎓 Eligibility</p>
                  <p className="font-bold text-surface-800 text-base">12th Pass</p>
                  <p className="text-xs text-surface-400">PCM for Navy/Air Force</p>
                </div>
              </div>
            </div>

            {/* SSC CHSL Card */}
            <div className="border border-primary-200 bg-primary-50 rounded-2xl p-6 mb-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📝</span>
                <div>
                  <h3 className="text-xl font-heading font-bold text-surface-900">2. SSC CHSL – DEO Grade A</h3>
                  <div className="flex gap-2 mt-1">
                    <span className="bg-primary-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded">BEST DESK JOB</span>
                    <span className="bg-blue-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded">CITY POSTING</span>
                  </div>
                </div>
              </div>
              <p className="text-surface-700 text-sm leading-relaxed mb-4">
                While LDC is the popular CHSL post, the <strong>DEO Grade A</strong> sits on a significantly higher pay scale. With the 2026 notification releasing on 30 April, this is the best desk-based government job for 12th-pass aspirants who want to be city-posted.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <div className="bg-white rounded-lg p-3 border border-primary-200">
                  <p className="text-xs text-surface-500 mb-1">💰 In-Hand (2026)</p>
                  <p className="font-bold text-primary-600 text-base">₹48,000 – ₹52,000</p>
                  <p className="text-xs text-surface-400">DEO Grade A post</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-primary-200">
                  <p className="text-xs text-surface-500 mb-1">📅 Notification</p>
                  <p className="font-bold text-surface-800 text-base">30 April 2026</p>
                  <p className="text-xs text-surface-400">Applications open</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-primary-200">
                  <p className="text-xs text-surface-500 mb-1">🎓 Eligibility</p>
                  <p className="font-bold text-surface-800 text-base">12th Pass</p>
                  <p className="text-xs text-surface-400">Science stream for DEO</p>
                </div>
              </div>
            </div>

            {/* RBI Card */}
            <div className="border border-green-200 bg-green-50 rounded-2xl p-6 mb-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🏦</span>
                <div>
                  <h3 className="text-xl font-heading font-bold text-surface-900">3. RBI Office Attendant</h3>
                  <div className="flex gap-2 mt-1">
                    <span className="bg-green-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded">BANKING PERKS</span>
                    <span className="bg-teal-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded">CAREER LADDER</span>
                  </div>
                </div>
              </div>
              <p className="text-surface-700 text-sm leading-relaxed mb-4">
                The RBI Office Attendant exam is one of the most underrated options for 12th-pass students. It comes with full RBI benefits — housing, medical, canteen — and a clear promotion path to RBI Assistant via internal exams within 3 years.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <div className="bg-white rounded-lg p-3 border border-green-200">
                  <p className="text-xs text-surface-500 mb-1">💰 In-Hand (2026)</p>
                  <p className="font-bold text-green-600 text-base">₹44,000 – ₹48,000</p>
                  <p className="text-xs text-surface-400">With RBI allowances</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-200">
                  <p className="text-xs text-surface-500 mb-1">📅 Notification 2026</p>
                  <p className="font-bold text-surface-800 text-base">TBN</p>
                  <p className="text-xs text-surface-400">To be notified</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-200">
                  <p className="text-xs text-surface-500 mb-1">🎓 Eligibility</p>
                  <p className="font-bold text-surface-800 text-base">10th / 12th Pass</p>
                  <p className="text-xs text-surface-400">Varies by state</p>
                </div>
              </div>
            </div>

            {/* Army Agniveer */}
            <div className="border border-surface-200 bg-surface-50 rounded-2xl p-6 mb-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🪖</span>
                <h3 className="text-xl font-heading font-bold text-surface-900">4. Army Agniveer (Technical / Clerk)</h3>
              </div>
              <p className="text-surface-700 text-sm leading-relaxed mb-4">
                The Agniveer scheme is a 4-year short-service military engagement. The Technical and Clerk trades (open to 12th-pass) offer solid pay plus a ₹11.71 lakh Seva Nidhi package at exit. 25% of Agniveers are retained permanently.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <div className="bg-white rounded-lg p-3 border border-surface-200">
                  <p className="text-xs text-surface-500 mb-1">💰 Monthly Pay</p>
                  <p className="font-bold text-surface-800 text-base">₹30,000 – ₹40,000</p>
                  <p className="text-xs text-surface-400">Year 1 to Year 4</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-surface-200">
                  <p className="text-xs text-surface-500 mb-1">📅 Notification</p>
                  <p className="font-bold text-surface-800 text-base">TBN 2026</p>
                  <p className="text-xs text-surface-400">Indian Army website</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-surface-200">
                  <p className="text-xs text-surface-500 mb-1">🎓 Eligibility</p>
                  <p className="font-bold text-surface-800 text-base">12th Pass</p>
                  <p className="text-xs text-surface-400">Technical: PCM</p>
                </div>
              </div>
            </div>

            {/* CISF / CRPF */}
            <div className="border border-surface-200 bg-surface-50 rounded-2xl p-6 mb-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🛡️</span>
                <h3 className="text-xl font-heading font-bold text-surface-900">5. SSC GD Constable (CISF / CRPF / BSF)</h3>
              </div>
              <p className="text-surface-700 text-sm leading-relaxed mb-4">
                SSC GD Constable is the highest-vacancy 12th-pass central government exam. The in-hand salary is lower than NDA or CHSL DEO, but the job security, risk allowance, and promotion prospects are excellent. CISF posting to industrial units often includes free accommodation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <div className="bg-white rounded-lg p-3 border border-surface-200">
                  <p className="text-xs text-surface-500 mb-1">💰 In-Hand (2026)</p>
                  <p className="font-bold text-surface-800 text-base">₹32,000 – ₹38,000</p>
                  <p className="text-xs text-surface-400">With risk allowance</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-surface-200">
                  <p className="text-xs text-surface-500 mb-1">📅 Result</p>
                  <p className="font-bold text-surface-800 text-base">2026 Result Pending</p>
                  <p className="text-xs text-surface-400">Written exam done</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-surface-200">
                  <p className="text-xs text-surface-500 mb-1">🎓 Eligibility</p>
                  <p className="font-bold text-surface-800 text-base">10th / 12th Pass</p>
                  <p className="text-xs text-surface-400">Age: 18–23</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Salary Table */}
          <section id="salary-table" className="mb-10">
            <h2 className="text-2xl font-heading font-bold text-surface-900 mb-4">2026 Salary Comparison: 8th Pay Commission Projections</h2>
            <p className="text-surface-700 mb-5 leading-relaxed">
              The table below shows expected in-hand salaries after the 8th CPC implementation (fitment factor ~2.86×). These are projections based on official Pay Level data — not confirmed numbers where marked TBN.
            </p>
            <div className="overflow-x-auto rounded-xl border border-surface-200 mb-5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">Exam / Post</th>
                    <th className="text-left px-4 py-3 font-semibold">Pay Level</th>
                    <th className="text-left px-4 py-3 font-semibold">Basic Pay (8th CPC)</th>
                    <th className="text-left px-4 py-3 font-semibold rounded-tr-xl">In-Hand (2026)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100">
                  {[
                    { exam: 'NDA (Lieutenant)', level: 'Level 10', basic: '₹72,000+', inhand: '₹1,00,000+', highlight: true },
                    { exam: 'SSC CHSL (DEO Grade A)', level: 'Level 8', basic: '₹32,000+', inhand: '₹50,000', highlight: false },
                    { exam: 'RBI Office Attendant', level: 'Level 3', basic: '₹30,000+', inhand: '₹46,000', highlight: false },
                    { exam: 'Army Agniveer (Technical)', level: 'Short Service', basic: 'Package', inhand: '₹30,000–40,000', highlight: false },
                    { exam: 'SSC GD Constable', level: 'Level 3', basic: '₹21,700+', inhand: '₹32,000–38,000', highlight: false },
                    { exam: 'SSC CHSL (LDC/JSA)', level: 'Level 2', basic: '₹19,900+', inhand: '₹28,000–33,000', highlight: false },
                    { exam: 'RRB Group D', level: 'Level 1', basic: '₹18,000+', inhand: '₹26,000–30,000', highlight: false },
                    { exam: 'India Post GDS', level: 'TRCA Scale', basic: '₹12,000+', inhand: '₹18,000–22,000', highlight: false },
                  ].map((row, i) => (
                    <tr key={i} className={row.highlight ? 'bg-orange-50' : i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className={`px-4 py-3 font-medium ${row.highlight ? 'text-orange-700' : 'text-surface-800'}`}>{row.exam}</td>
                      <td className="px-4 py-3 text-surface-600">{row.level}</td>
                      <td className="px-4 py-3 text-surface-700">{row.basic}</td>
                      <td className={`px-4 py-3 font-bold ${row.highlight ? 'text-orange-600' : 'text-green-600'}`}>{row.inhand}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-surface-400">* 8th CPC projections based on fitment factor 2.86×. Actual figures may vary. RBI Attendant figures include allowances specific to RBI. NDA salary includes military service pay and X/Y/Z city allowances.</p>
          </section>

          {/* Section 4: NDA Deep Dive */}
          <section id="nda-deep" className="mb-10">
            <h2 className="text-2xl font-heading font-bold text-surface-900 mb-4">NDA — The Gold Standard for 12th-Pass Students</h2>
            <p className="text-surface-700 mb-3 leading-relaxed">
              No other 12th-pass exam in India comes close to NDA in terms of career trajectory and starting salary. You commission as a Lieutenant and receive Level 10 pay — the same entry level as IAS and IPS officers coming through UPSC CSE.
            </p>
            <div className="bg-surface-900 text-white rounded-xl p-6 mb-5">
              <p className="text-sm font-semibold text-orange-400 mb-3">NDA 2026 Salary Breakdown (Expected 8th CPC)</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                {[
                  { label: 'Basic Pay', val: '₹72,500' },
                  { label: 'Mil. Service Pay', val: '₹15,500' },
                  { label: 'DA (50%)', val: '₹44,000' },
                  { label: 'HRA / Kit Allowance', val: '~₹15,000' },
                ].map(s => (
                  <div key={s.label} className="bg-white/10 rounded-lg p-3">
                    <p className="text-white/60 text-xs mb-1">{s.label}</p>
                    <p className="font-bold text-white">{s.val}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/50 text-xs mt-3">Total gross: ~₹1,47,000 → In-hand after deductions: ₹95,000–₹1,10,000. Figures are projections.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-yellow-800 mb-1">⚠️ Important Note</p>
              <p className="text-sm text-yellow-700">
                NDA requires a rigorous 3-year training at the National Defence Academy in Pune, followed by pre-commission training at the respective service academy (IMA / INA / AFA). The physical and psychological demands are significantly higher than civilian exams. Apply only if you genuinely want a military career.
              </p>
            </div>
          </section>

          {/* Section 5: SSC CHSL */}
          <section id="ssc-chsl-deep" className="mb-10">
            <h2 className="text-2xl font-heading font-bold text-surface-900 mb-4">SSC CHSL 2026 — DEO Grade A Is the Post to Target</h2>
            <p className="text-surface-700 mb-3 leading-relaxed">
              Most aspirants apply for SSC CHSL targeting the LDC (Lower Division Clerk) post — but the <strong>DEO (Data Entry Operator) Grade A</strong> post in the Comptroller and Auditor General office sits two pay levels higher. If you are from the Science stream in 12th, always select DEO Grade A as your first preference.
            </p>
            <div className="overflow-x-auto rounded-xl border border-surface-200 mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700">Post</th>
                    <th className="text-left px-4 py-3 font-semibold text-surface-700">Pay Level</th>
                    <th className="text-left px-4 py-3 font-semibold text-surface-700">In-Hand (2026)</th>
                    <th className="text-left px-4 py-3 font-semibold text-surface-700">Stream Req.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100">
                  {[
                    { post: 'DEO Grade A (C&AG)', level: 'Level 8', salary: '₹48,000–52,000', stream: 'Science' },
                    { post: 'DEO (Other Ministries)', level: 'Level 4', salary: '₹35,000–40,000', stream: 'Any' },
                    { post: 'LDC / JSA', level: 'Level 2', salary: '₹28,000–33,000', stream: 'Any' },
                    { post: 'PA / SA (Postal)', level: 'Level 4', salary: '₹35,000–40,000', stream: 'Any' },
                  ].map((r, i) => (
                    <tr key={i} className={i === 0 ? 'bg-orange-50' : i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className={`px-4 py-3 font-medium ${i === 0 ? 'text-orange-700' : 'text-surface-800'}`}>{r.post}</td>
                      <td className="px-4 py-3 text-surface-600">{r.level}</td>
                      <td className={`px-4 py-3 font-semibold ${i === 0 ? 'text-orange-600' : 'text-green-600'}`}>{r.salary}</td>
                      <td className="px-4 py-3 text-surface-600">{r.stream}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-50 border-l-4 border-primary-500 rounded-r-xl p-4">
              <p className="text-sm font-semibold text-primary-700 mb-1">📌 Quick Note — SSC CHSL 2026 Notification</p>
              <p className="text-sm text-primary-700">
                The SSC CHSL 2026 official notification was released on <strong>30 April 2026</strong>. Applications are expected to close on <strong>31 May 2026</strong>. This is a time-critical window — do not miss it.
              </p>
            </div>
          </section>

          {/* Section 6: RBI Attendant */}
          <section id="rbi-attendant" className="mb-10">
            <h2 className="text-2xl font-heading font-bold text-surface-900 mb-4">RBI Office Attendant — Banking Perks on a 12th-Pass Salary</h2>
            <p className="text-surface-700 mb-3 leading-relaxed">
              The Reserve Bank of India hires Office Attendants (formerly called Class IV / Support Staff) through a state-wise recruitment process. This is one of the most sought-after 10th/12th-pass banking sector jobs because of the unmatched perks that come with any RBI employment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-semibold text-green-800 mb-2 text-sm">✅ What You Get</p>
                <ul className="space-y-1 text-sm text-green-700">
                  <li>• Free / subsidised RBI housing colony accommodation</li>
                  <li>• Medical treatment for self and dependents</li>
                  <li>• LFC (Leave Fare Concession) — 2 trips/year</li>
                  <li>• Pension under New Pension Scheme (NPS)</li>
                  <li>• Promotion to RBI Assistant via internal exam (3 yrs)</li>
                </ul>
              </div>
              <div className="bg-surface-50 border border-surface-200 rounded-xl p-4">
                <p className="font-semibold text-surface-800 mb-2 text-sm">📋 Key Facts</p>
                <ul className="space-y-1 text-sm text-surface-600">
                  <li>• Eligibility: 10th pass (some states 12th pass)</li>
                  <li>• Age: 18–25 years (relaxation for reserved categories)</li>
                  <li>• Selection: Written test + Language proficiency</li>
                  <li>• State-wise vacancies — regional language mandatory</li>
                  <li>• 2026 Notification: TBN (check rbi.org.in)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7: Other Options */}
          <section id="other-options" className="mb-10">
            <h2 className="text-2xl font-heading font-bold text-surface-900 mb-4">Other Strong 12th-Pass Government Job Options</h2>
            <div className="space-y-3">
              {[
                { name: 'Indian Coast Guard Navik (GD/DB)', pay: '₹29,000–36,000', note: 'Only for male candidates; PCM required for DB', icon: '⚓' },
                { name: 'Navy AA / MR (Artificer Apprentice)', pay: '₹28,000–35,000', note: 'PCM required for AA; excellent growth to officer via UES', icon: '🛳️' },
                { name: 'Air Force Group Y (Non-Tech)', pay: '₹28,000–34,000', note: 'Open to any stream; best path to Airman to officer via AFCAT', icon: '✈️' },
                { name: 'India Post Postman / Mail Guard', pay: '₹22,000–28,000', note: 'Level 3; low competition, departmental promotion possible', icon: '📮' },
                { name: 'FCI (Junior Engineer / Assistant)', pay: '₹35,000–45,000', note: 'Diploma/12th for some posts; check FCI recruitment 2026', icon: '🌾' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-surface-50 border border-surface-200 rounded-xl p-4">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <p className="font-semibold text-surface-800 text-sm">{item.name}</p>
                      <span className="text-xs font-bold text-green-600 bg-green-50 border border-green-200 px-2 py-0.5 rounded">{item.pay}</span>
                    </div>
                    <p className="text-xs text-surface-500">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: RBI vs SEBI Myth */}
          <section id="myth" className="mb-10">
            <h2 className="text-2xl font-heading font-bold text-surface-900 mb-4">The ₹1.8 Lakh SEBI Myth — Cleared Once and For All</h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-5">
              <p className="text-sm font-semibold text-red-800 mb-2">⚠️ Common Aspirant Mistake</p>
              <p className="text-sm text-red-700 italic mb-3">"I want a SEBI job after 12th pass because of the ₹1.8 Lakh salary."</p>
              <p className="text-sm text-red-700">
                <strong>SEBI Grade A (Assistant Manager)</strong> — the entry-level SEBI officer post — requires a <strong>Graduation degree</strong>. There are no direct entry-level officer posts in SEBI for 12th-pass students. The ₹1.8 Lakh figure applies only to experienced Grade A officers with allowances, not entry-level salaries.
              </p>
            </div>
            <div className="bg-primary-50 border-l-4 border-primary-500 rounded-r-xl p-4">
              <p className="text-sm text-primary-700">
                If you want to enter the <strong>finance/banking sector immediately after 12th</strong>, focus on the <strong>RBI Office Attendant</strong> exam. It offers RBI-grade benefits and a clear promotion path to RBI Assistant via internal exams within 3 years — which then makes you eligible for RBI Grade B eventually.
              </p>
            </div>
          </section>

          {/* Section 9: How to Choose */}
          <section id="how-to-choose" className="mb-10">
            <h2 className="text-2xl font-heading font-bold text-surface-900 mb-4">Which Exam Is Right for You?</h2>
            <div className="overflow-x-auto rounded-xl border border-surface-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-100">
                    <th className="text-left px-4 py-3 font-semibold text-surface-700">Your Profile</th>
                    <th className="text-left px-4 py-3 font-semibold text-surface-700">Best Exam</th>
                    <th className="text-left px-4 py-3 font-semibold text-surface-700">Why</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100">
                  {[
                    { profile: 'PCM student, physically fit, want highest pay', exam: 'NDA', why: 'Direct Level 10 salary; ₹1 Lakh+ in hand' },
                    { profile: 'Science stream, want city desk job', exam: 'SSC CHSL (DEO A)', why: 'Highest paying desk job for 12th; city posting' },
                    { profile: 'Any stream, want banking sector', exam: 'RBI Office Attendant', why: 'Best perks + promotion to RBI Assistant in 3 yrs' },
                    { profile: 'Want maximum job security', exam: 'SSC GD Constable', why: 'Central govt; huge vacancies; pension' },
                    { profile: '12th pass, want short-term income + resume', exam: 'Army Agniveer', why: '₹11.71L exit package + priority in other govt jobs' },
                    { profile: 'Any stream, wants state govt options', exam: 'State Police Constable', why: 'High vacancies, local language advantage' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 text-surface-700">{r.profile}</td>
                      <td className="px-4 py-3 font-semibold text-primary-600">{r.exam}</td>
                      <td className="px-4 py-3 text-surface-500 text-xs">{r.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 bg-surface-900 text-white rounded-xl p-5">
              <p className="text-sm font-semibold text-orange-400 mb-2">💡 TaiyarHo Recommendation</p>
              <p className="text-sm text-surface-300 leading-relaxed">
                If you are physically fit and under 19.5 years old, prepare for <strong>NDA first</strong>. The salary ceiling and career growth are unmatched. If you are older or want a civilian job, target <strong>SSC CHSL (DEO A)</strong> and <strong>RBI Attendant</strong> simultaneously — the syllabi overlap significantly and both have 2026 notifications open or upcoming.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-10">
            <h2 className="text-2xl font-heading font-bold text-surface-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Which government exam has the highest salary after 12th pass in 2026?',
                  a: 'NDA (National Defence Academy) offers the highest salary for 12th-pass students. After commissioning as a Lieutenant (typically 3.5–4 years after joining NDA), the expected in-hand salary is ₹95,000–₹1,10,000/month under 8th CPC projections — equivalent to an IAS/IPS entry-level officer.'
                },
                {
                  q: 'Which government job has the highest salary for girls after 12th pass?',
                  a: 'NDA is now open to all genders. For girls preferring an office/civilian posting, SSC CHSL DEO Grade A (₹48,000–52,000 in-hand) and RBI Office Attendant (₹44,000–48,000) are the best high-paying options after 12th.'
                },
                {
                  q: 'When is the SSC CHSL 2026 notification date?',
                  a: 'The SSC CHSL 2026 notification was officially released on 30 April 2026. Applications are expected to remain open until 31 May 2026. Always check ssc.gov.in for the latest official dates.'
                },
                {
                  q: 'Is SEBI recruitment open for 12th-pass students?',
                  a: 'No. SEBI Grade A (Assistant Manager) — the entry-level SEBI post — requires a graduation degree. There are no direct officer-level posts in SEBI for 12th-pass students. The RBI Office Attendant exam is the best banking option for 12th-pass aspirants.'
                },
                {
                  q: 'What is the impact of the 8th Pay Commission on 12th-pass government job salaries?',
                  a: 'The 8th Pay Commission (effective January 2026) is expected to use a fitment factor of approximately 2.86×. This would push NDA entry-level pay from ~₹56,000 to ~₹1,00,000+ in-hand, SSC CHSL DEO from ~₹38,000 to ~₹50,000, and RBI Attendant from ~₹32,000 to ~₹46,000. These are projections — confirm from official notifications.'
                },
              ].map((item, i) => (
                <div key={i} className="border border-surface-200 rounded-xl overflow-hidden">
                  <div className="bg-surface-50 px-5 py-4">
                    <p className="font-semibold text-surface-800 text-sm">{item.q}</p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-surface-700 text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* JSON-LD FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Which government exam has the highest salary after 12th pass in 2026?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "NDA (National Defence Academy) offers the highest salary for 12th-pass students. After commissioning as a Lieutenant, the expected in-hand salary is ₹95,000–₹1,10,000/month under 8th CPC projections."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Which government job has the highest salary for girls after 12th pass?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "NDA is now open to all genders. For civilian postings, SSC CHSL DEO Grade A (₹48,000–52,000) and RBI Office Attendant (₹44,000–48,000) are the best high-paying options after 12th."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "When is the SSC CHSL 2026 notification date?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The SSC CHSL 2026 notification was officially released on 30 April 2026. Applications are expected to close on 31 May 2026."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is SEBI recruitment open for 12th-pass students?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. SEBI Grade A requires a graduation degree. There are no direct officer-level posts in SEBI for 12th-pass students."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the impact of the 8th Pay Commission on 12th-pass government job salaries?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The 8th Pay Commission (effective January 2026) with a fitment factor of ~2.86× is projected to push NDA entry-level pay to ₹1,00,000+, SSC CHSL DEO to ~₹50,000, and RBI Attendant to ~₹46,000 in-hand."
                    }
                  }
                ]
              })
            }}
          />
        </article>

        {/* SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-5">
            {/* TOC */}
            <div className="card p-5">
              <div className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">In This Article</div>
              <nav className="space-y-1.5">
                {toc.map(item => (
                  <a key={item.id} href={`#${item.id}`} className="block text-sm text-surface-600 hover:text-primary-600 hover:translate-x-1 transition-all duration-150 leading-snug">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Salary Box */}
            <div className="card p-5">
              <div className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">Quick Salary Summary</div>
              <div className="space-y-2 text-sm">
                {[
                  { label: 'NDA', val: '₹1 Lakh+', color: 'text-orange-600' },
                  { label: 'SSC CHSL DEO A', val: '₹50,000', color: 'text-primary-600' },
                  { label: 'RBI Attendant', val: '₹46,000', color: 'text-green-600' },
                  { label: 'Agniveer Tech', val: '₹40,000', color: 'text-surface-700' },
                  { label: 'SSC GD Constable', val: '₹38,000', color: 'text-surface-700' },
                ].map(s => (
                  <div key={s.label} className="flex justify-between items-center">
                    <span className="text-surface-600">{s.label}</span>
                    <span className={`font-bold ${s.color}`}>{s.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Links */}
            <div className="card p-5">
              <div className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">Related</div>
              <div className="space-y-2">
                <Link href="/exams/ssc-cgl" className="block text-sm text-primary-600 hover:underline leading-snug">SSC CGL Complete Guide →</Link>
                <Link href="/blog/ssc-cgl-vs-chsl-which-is-easier-2026/" className="block text-sm text-primary-600 hover:underline leading-snug">SSC CGL vs CHSL 2026 →</Link>
                <Link href="/blog/ibps-po-salary-in-hand-2026/" className="block text-sm text-primary-600 hover:underline leading-snug">IBPS PO Salary 2026 →</Link>
                <Link href="/tools/eligibility-checker/" className="block text-sm text-primary-600 hover:underline leading-snug">Check Your Eligibility →</Link>
                <Link href="/exams" className="block text-sm text-primary-600 hover:underline leading-snug">Browse All 100 Exams →</Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

// ─── TELEGRAM CHANNELS 2026 ARTICLE ─────────────────────────────────────────
function TelegramChannelsArticle({ post }: { post: any }) {
  const toc = [
    { id: 'why-telegram', label: 'Why Telegram in 2026?' },
    { id: 'upsc-channels', label: 'UPSC Civil Services' },
    { id: 'ssc-channels', label: 'SSC Exams (CGL, CHSL, GD)' },
    { id: 'banking-channels', label: 'Banking & Insurance' },
    { id: 'railway-channels', label: 'Railway (RRB NTPC, Group D)' },
    { id: 'defence-channels', label: 'Defence (NDA, CDS, Agniveer)' },
    { id: 'state-psc-channels', label: 'State PSC & Police' },
    { id: 'current-affairs', label: 'Current Affairs Channels' },
    { id: 'how-to-spot-fakes', label: 'How to Spot Fake Channels' },
    { id: 'faq', label: 'FAQs' },
  ];

  const upscChannels = [
    { name: 'Insights IAS Official', focus: 'Daily quizzes, Insta-Static series, GS notes', subscribers: '5 lakh+', rating: '⭐⭐⭐⭐⭐', type: 'Free PDFs' },
    { name: 'Drishti IAS Official', focus: 'Mains topic deep-dives in Hindi & English', subscribers: '8 lakh+', rating: '⭐⭐⭐⭐⭐', type: 'Free PDFs' },
    { name: 'OnlyIAS Official', focus: 'Hindu Editorial PDF summaries, Answer Writing', subscribers: '4 lakh+', rating: '⭐⭐⭐⭐', type: 'Free PDFs' },
    { name: 'ForumIAS Official', focus: 'Prelims-focused daily MCQs, UPSC news', subscribers: '3 lakh+', rating: '⭐⭐⭐⭐', type: 'Daily MCQ' },
    { name: 'StudyIQ IAS Official', focus: 'Video summaries, current affairs shortcuts', subscribers: '10 lakh+', rating: '⭐⭐⭐⭐', type: 'Video Links' },
  ];

  const sscChannels = [
    { name: 'RBE – Shubham Jain', focus: 'Data-driven shift analysis, difficulty ratings', subscribers: '6 lakh+', rating: '⭐⭐⭐⭐⭐', type: 'Analysis' },
    { name: 'Parmar SSC Official', focus: 'Static GK, Science PDFs, SSC tricks', subscribers: '5 lakh+', rating: '⭐⭐⭐⭐⭐', type: 'Free PDFs' },
    { name: 'Aditya Ranjan Maths', focus: 'Chapter-wise PDF sheets, calculation tricks', subscribers: '4 lakh+', rating: '⭐⭐⭐⭐', type: 'Free PDFs' },
    { name: 'SSC Adda247 Official', focus: 'Mock tests, quizzes, CGL/CHSL notifications', subscribers: '9 lakh+', rating: '⭐⭐⭐⭐', type: 'Mocks + Alerts' },
    { name: 'Pinnacle SSC CGL', focus: 'Tier 2 Maths & English practice sets', subscribers: '2 lakh+', rating: '⭐⭐⭐⭐', type: 'Practice Sets' },
  ];

  const bankingChannels = [
    { name: 'AffairsCloud Official', focus: 'GA capsule PDFs, Banking Awareness, Current Affairs', subscribers: '7 lakh+', rating: '⭐⭐⭐⭐⭐', type: 'Free PDFs' },
    { name: 'PracticeMock Official', focus: 'Weekly All-India free live mock tests', subscribers: '4 lakh+', rating: '⭐⭐⭐⭐⭐', type: 'Free Mocks' },
    { name: 'Oliveboard Official', focus: 'Daily GK updates, IBPS/SBI alerts', subscribers: '5 lakh+', rating: '⭐⭐⭐⭐', type: 'Alerts + GK' },
    { name: 'RBI Grade B Special', focus: 'ESI, FM, Phase 2 preparation guidance', subscribers: '1.5 lakh+', rating: '⭐⭐⭐⭐', type: 'Niche Prep' },
    { name: 'IBPS Guide Official', focus: 'Reasoning, Quant shortcuts, English tricks', subscribers: '3 lakh+', rating: '⭐⭐⭐⭐', type: 'Tricks + PDF' },
  ];

  const railwayChannels = [
    { name: 'Railway Adda247', focus: 'RRB NTPC 2026 & Group D focused notes', subscribers: '8 lakh+', rating: '⭐⭐⭐⭐⭐', type: 'Free PDFs' },
    { name: 'RRB NTPC Official Prep', focus: 'CBT-1 & CBT-2 syllabus coverage, PYQs', subscribers: '3 lakh+', rating: '⭐⭐⭐⭐', type: 'PYQ PDFs' },
    { name: 'Winners Institute PDF', focus: 'Best for MP-region railway and Vyapam exams', subscribers: '2 lakh+', rating: '⭐⭐⭐⭐', type: 'Free PDFs' },
    { name: 'Sarkari Exam Alert', focus: 'Railway, SSC, and state exam notification alerts', subscribers: '4 lakh+', rating: '⭐⭐⭐', type: 'Alerts' },
  ];

  const defenceChannels = [
    { name: 'Adda247 Defence', focus: 'NDA, CDS, AFCAT preparation material', subscribers: '6 lakh+', rating: '⭐⭐⭐⭐⭐', type: 'Free PDFs' },
    { name: 'SSBCrack Official', focus: 'SSB interview tips, psychology tests, GTO tasks', subscribers: '5 lakh+', rating: '⭐⭐⭐⭐⭐', type: 'Interview Prep' },
    { name: 'NDA/NA Guide', focus: 'Maths and GAT (paper 1 & 2) previous year sets', subscribers: '2 lakh+', rating: '⭐⭐⭐⭐', type: 'PYQ PDFs' },
    { name: 'Agniveer Prep Official', focus: '2026 Agniveer exam dates, syllabus PDFs', subscribers: '3 lakh+', rating: '⭐⭐⭐⭐', type: 'Alerts + PDF' },
  ];

  const statePscChannels = [
    { name: 'Study for Civil Services (SCS)', focus: 'UPPSC, BPSC, state PSC material', subscribers: '4 lakh+', rating: '⭐⭐⭐⭐⭐', type: 'Free PDFs' },
    { name: 'BPSC Official Prep', focus: 'Bihar PSC PT + Mains capsules in Hindi', subscribers: '3 lakh+', rating: '⭐⭐⭐⭐', type: 'Hindi PDFs' },
    { name: 'MPPSC & Vyapam', focus: 'Madhya Pradesh specific GK, MP Police', subscribers: '2 lakh+', rating: '⭐⭐⭐⭐', type: 'State GK' },
    { name: 'Rajasthan Police Prep', focus: 'Rajasthan GK, constable and SI exam material', subscribers: '2.5 lakh+', rating: '⭐⭐⭐', type: 'State GK' },
  ];

  const currentAffairsChannels = [
    { name: 'The Hindu Analysis', focus: 'Daily editorial summaries, important PIB news', subscribers: '6 lakh+', rating: '⭐⭐⭐⭐⭐', type: 'Editorial PDF' },
    { name: 'Vajiram & Ravi', focus: 'Monthly current affairs compilations', subscribers: '4 lakh+', rating: '⭐⭐⭐⭐⭐', type: 'Monthly PDF' },
    { name: 'GK Today Official', focus: 'Daily GK, banking awareness, govt schemes', subscribers: '5 lakh+', rating: '⭐⭐⭐⭐', type: 'Daily GK' },
    { name: 'PIB in Hindi', focus: 'Official Press Information Bureau in Hindi', subscribers: '3 lakh+', rating: '⭐⭐⭐⭐', type: 'Official News' },
  ];

  const ChannelTable = ({ channels, id }: { channels: typeof upscChannels; id: string }) => (
    <div id={id} className="overflow-x-auto mb-8">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-surface-800 text-white">
            <th className="text-left px-4 py-3 font-heading font-semibold rounded-tl-xl">Channel Name</th>
            <th className="text-left px-4 py-3 font-heading font-semibold hidden sm:table-cell">What You Get</th>
            <th className="text-left px-4 py-3 font-heading font-semibold hidden md:table-cell">Subscribers</th>
            <th className="text-left px-4 py-3 font-heading font-semibold">Type</th>
            <th className="text-left px-4 py-3 font-heading font-semibold rounded-tr-xl">Rating</th>
          </tr>
        </thead>
        <tbody>
          {channels.map((ch, i) => (
            <tr key={ch.name} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
              <td className="px-4 py-3 font-semibold text-surface-800 border-b border-surface-100">{ch.name}</td>
              <td className="px-4 py-3 text-surface-600 border-b border-surface-100 hidden sm:table-cell">{ch.focus}</td>
              <td className="px-4 py-3 text-surface-600 border-b border-surface-100 hidden md:table-cell">{ch.subscribers}</td>
              <td className="px-4 py-3 border-b border-surface-100">
                <span className="badge-primary text-xs">{ch.type}</span>
              </td>
              <td className="px-4 py-3 text-surface-600 border-b border-surface-100 text-xs">{ch.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const SectionH2 = ({ num, icon, title }: { num: string; icon: string; title: string }) => (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-9 h-9 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 font-heading font-bold text-sm flex-shrink-0">
        {num}
      </div>
      <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">
        <span className="mr-2">{icon}</span>{title}
      </h2>
    </div>
  );

  const faqs = [
    {
      q: 'Are these Telegram channels free in 2026?',
      a: 'Yes. All channels listed by TaiyarHo.in provide free daily content — PDFs, news digests, quizzes. Some promote paid courses in the side, but their core study material is 100% free.',
    },
    {
      q: 'How many Telegram channels should I join for SSC CGL?',
      a: 'Stick to 2–3 maximum. Joining 10+ channels creates information overload — you spend more time managing notifications than actually studying. Pick one for daily GK, one for Maths shortcuts, and one for notifications.',
    },
    {
      q: 'How do I identify a fake Telegram channel?',
      a: 'Check three things: (1) Is the channel verified by the official teacher\'s YouTube or website? (2) Does the subscriber count match the official platform? (3) Are they asking money to "share leaked papers"? If yes to the last one, it\'s a scam — block and report.',
    },
    {
      q: 'Which is the best Telegram channel for UPSC current affairs 2026?',
      a: 'Drishti IAS Official and Insights IAS Official are the gold standard for UPSC current affairs. Both provide high-quality daily PDFs covering The Hindu, PIB, and monthly compilation magazines.',
    },
    {
      q: 'Can I use Telegram channels as my only study source?',
      a: 'No. Telegram channels are excellent supplements for current affairs, alerts, and quick revision PDFs — but they cannot replace standard textbooks (NCERT, Laxmikant, etc.) or structured mock test platforms. Use them as a daily habit, not as your primary prep tool.',
    },
  ];

  return (
    <div className="container-main py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/blog" className="hover:text-primary-500">Blog</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">Best Telegram Channels for Govt Exams 2026</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-10 max-w-6xl">
        {/* MAIN CONTENT */}
        <article>
          {/* Dark Gradient Hero */}
          <div className="bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900 rounded-2xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                  Preparation
                </span>
                <span className="inline-flex items-center gap-1.5 bg-green-500/20 border border-green-500/40 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                  ✅ 2026 Verified
                </span>
                <span className="text-white/50 text-xs">{post.publishedDate} · {post.readTime}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight mb-3">
                Best Telegram Channels for Govt Exams{' '}
                <span className="text-blue-400">2026 – Verified Master Directory</span>
              </h1>
              <p className="text-surface-300 text-base leading-relaxed mb-5">
                No paywalls, no spam. Only the highest-quality free Telegram channels for UPSC, SSC, Banking, Railway, Defence, and State PSC exams — each personally vetted by TaiyarHo&apos;s editorial team for 2026.
              </p>
              <div className="flex flex-wrap gap-2">
                {['UPSC Telegram', 'SSC CGL 2026', 'Banking Prep', 'Free PDFs', 'Zero Spam'].map(tag => (
                  <span key={tag} className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Categories Covered', value: '7', sub: 'UPSC to State PSC' },
              { label: 'Channels Listed', value: '27+', sub: 'All verified 2026' },
              { label: 'Min. Subscribers', value: '1 Lakh+', sub: 'Quality threshold' },
              { label: 'Cost to Access', value: '₹0', sub: 'Free forever' },
            ].map(m => (
              <div key={m.label} className="card p-4 text-center">
                <p className="text-xs text-surface-500 font-medium mb-1">{m.label}</p>
                <p className="text-xl font-heading font-bold text-primary-600">{m.value}</p>
                <p className="text-xs text-surface-400">{m.sub}</p>
              </div>
            ))}
          </div>

          {/* Why Telegram Section */}
          <section id="why-telegram" className="mb-12">
            <SectionH2 num="1" icon="📱" title="Why Telegram Still Rules in 2026" />
            <p className="text-surface-700 leading-relaxed mb-4">
              In 2026, Telegram remains the single fastest distribution channel for exam-critical content. When RRB releases a new NTPC notification at 11 PM, your Telegram channel notifies you within minutes — long before any website updates. That&apos;s a real edge in a competitive environment.
            </p>
            <p className="text-surface-700 leading-relaxed mb-4">
              Unlike YouTube or Instagram, Telegram allows educators to share PDFs, Excel sheets, and audio files instantly without algorithmic interference. A channel with 5 lakh subscribers delivers your PDF directly to all 5 lakh devices. No &quot;reach&quot; issues, no paywalls.
            </p>
            <div className="bg-primary-50 border-l-4 border-primary-500 rounded-r-xl p-4 mb-4">
              <p className="text-primary-800 font-medium leading-relaxed">
                <span className="font-bold">📌 TaiyarHo Rule:</span> Join a maximum of 2–3 channels per exam category. Joining 15 channels creates notification overload — you end up reading updates instead of studying. Quality over quantity.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              {[
                { icon: '⚡', title: 'Instant Notifications', desc: 'Exam dates, admit cards, results — you know before anyone else' },
                { icon: '📂', title: 'Free PDF Library', desc: 'Access years of notes, PYQs, and summary sheets without spending ₹1' },
                { icon: '🗂️', title: 'Pinned Resources', desc: 'Channel admins pin the most important files so nothing gets lost in the feed' },
              ].map(f => (
                <div key={f.title} className="card p-4">
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <h3 className="font-heading font-semibold text-surface-800 text-sm mb-1">{f.title}</h3>
                  <p className="text-xs text-surface-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* UPSC Section */}
          <section className="mb-12">
            <SectionH2 num="2" icon="🏛️" title="UPSC Civil Services Telegram Channels 2026" />
            <p className="text-surface-700 leading-relaxed mb-4">
              UPSC preparation is a long-term journey of 12–18 months. The channels below consistently deliver high-quality, examination-relevant material — from daily editorials to Mains answer writing frameworks.
            </p>
            <ChannelTable channels={upscChannels} id="upsc-channels" />
            <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-4">
              <p className="text-emerald-800 font-medium text-sm leading-relaxed">
                <span className="font-bold">✅ 2026 UPSC Note:</span> With UPSC Prelims 2026 scheduled for May 25, these channels are now in peak-frequency mode — expect daily quizzes, revision PDFs, and post-paper shift analyses.
              </p>
            </div>
          </section>

          {/* SSC Section */}
          <section className="mb-12">
            <SectionH2 num="3" icon="📝" title="SSC Exams Telegram Channels 2026 (CGL, CHSL, GD)" />
            <p className="text-surface-700 leading-relaxed mb-4">
              SSC exams are highly competitive with 30–50 lakh applicants per year. The channels below are known for data-driven shift analysis, which helps you track the exact difficulty trend across CGL Tier 1 and CHSL shifts.
            </p>
            <ChannelTable channels={sscChannels} id="ssc-channels" />
            <div className="bg-primary-50 border-l-4 border-primary-500 rounded-r-xl p-4">
              <p className="text-primary-800 font-medium text-sm leading-relaxed">
                <span className="font-bold">📌 Quick Note:</span> SSC CGL 2026 Tier 1 notification dropped on April 30, 2026. Subscribe to <strong>SSC Adda247</strong> and <strong>RBE – Shubham Jain</strong> immediately to track date changes, exam centre lists, and cut-off predictions.
              </p>
            </div>
          </section>

          {/* Banking Section */}
          <section className="mb-12">
            <SectionH2 num="4" icon="🏦" title="Banking & Insurance Telegram Channels 2026" />
            <p className="text-surface-700 leading-relaxed mb-4">
              Banking exams like IBPS PO, SBI PO, and RBI Grade B require consistent current affairs preparation. The channels below are your go-to for daily GA capsules, Banking Awareness PDFs, and free mock test links.
            </p>
            <ChannelTable channels={bankingChannels} id="banking-channels" />
            <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-4">
              <p className="text-emerald-800 font-medium text-sm leading-relaxed">
                <span className="font-bold">✅ 2026 Update:</span> IBPS PO 2026 notification is expected in July 2026. <strong>AffairsCloud</strong> and <strong>Oliveboard</strong> will release dedicated GA capsules aligned with the new exam pattern as soon as the official notification drops.
              </p>
            </div>
          </section>

          {/* Railway Section */}
          <section className="mb-12">
            <SectionH2 num="5" icon="🚂" title="Railway Exam Telegram Channels 2026 (RRB NTPC, Group D)" />
            <p className="text-surface-700 leading-relaxed mb-4">
              Railway exams attract the largest candidate base in India. RRB NTPC 2026 is expected to announce vacancy for over 11,000 posts. These channels will be your fastest source for official notifications, admit cards, and city-wise exam schedules.
            </p>
            <ChannelTable channels={railwayChannels} id="railway-channels" />
          </section>

          {/* Defence Section */}
          <section className="mb-12">
            <SectionH2 num="6" icon="🎖️" title="Defence Exam Telegram Channels 2026 (NDA, CDS, Agniveer)" />
            <p className="text-surface-700 leading-relaxed mb-4">
              Defence exams have a unique two-stage structure — written test followed by SSB interview. The channels below cover both: written exam PDFs and SSB preparation material, which is rarely available for free anywhere else.
            </p>
            <ChannelTable channels={defenceChannels} id="defence-channels" />
            <div className="bg-primary-50 border-l-4 border-primary-500 rounded-r-xl p-4">
              <p className="text-primary-800 font-medium text-sm leading-relaxed">
                <span className="font-bold">📌 SSBCrack Tip:</span> SSBCrack Official is the only channel with consistent, free Psychological Aptitude Test (PAT) and Officer Intelligence Rating (OIR) practice content. If you are preparing for NDA or CDS, this channel is non-negotiable.
              </p>
            </div>
          </section>

          {/* State PSC Section */}
          <section className="mb-12">
            <SectionH2 num="7" icon="🗺️" title="State PSC & Police Telegram Channels 2026" />
            <p className="text-surface-700 leading-relaxed mb-4">
              State PSC exams are often overlooked in national prep communities. These channels fill that gap — providing state-specific GK, Hindi-medium study material, and region-specific exam pattern analysis that national channels miss.
            </p>
            <ChannelTable channels={statePscChannels} id="state-psc-channels" />
          </section>

          {/* Current Affairs Section */}
          <section className="mb-12">
            <SectionH2 num="8" icon="📰" title="Current Affairs Channels for All Exams 2026" />
            <p className="text-surface-700 leading-relaxed mb-4">
              No matter which exam you are targeting, current affairs is a common section. These channels cut through the noise and deliver only exam-relevant news — so you spend 20 minutes daily instead of 2 hours.
            </p>
            <ChannelTable channels={currentAffairsChannels} id="current-affairs" />
            <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-4">
              <p className="text-emerald-800 font-medium text-sm leading-relaxed">
                <span className="font-bold">✅ TaiyarHo Recommendation:</span> For 2026, subscribe to <strong>Vajiram &amp; Ravi</strong> for monthly PDF compilation (covers UPSC + Banking GA), and <strong>GK Today Official</strong> for daily 5-minute current affairs digests. Together, these two channels cover 80% of what any exam will test.
              </p>
            </div>
          </section>

          {/* How to Spot Fakes */}
          <section id="how-to-spot-fakes" className="mb-12">
            <SectionH2 num="9" icon="⚠️" title="How to Identify Fake Telegram Channels in 2026" />
            <p className="text-surface-700 leading-relaxed mb-4">
              Fake channels are a serious problem. Impersonators clone verified channels like &quot;RBE – Shubham Jain&quot; or &quot;Drishti IAS&quot; to sell pirated courses or harvest phone numbers. Here&apos;s your 5-step verification checklist before joining any channel.
            </p>
            <div className="space-y-3 mb-6">
              {[
                { num: '01', flag: 'Check the Official Link', desc: 'Never search a channel name in Telegram. Always click the link directly from the teacher\'s verified YouTube channel description or their official website.' },
                { num: '02', flag: 'Subscriber Count vs. Post Views', desc: 'A genuine channel with 5 lakh subscribers should have 20,000–50,000 post views. If a "5 lakh subscriber" channel gets only 500 views, it\'s a fake inflated with bots.' },
                { num: '03', flag: 'Avoid "Leaked Paper" Promises', desc: 'Any channel promising "100% confirmed leaked paper," "sure shot cut-off," or "paid material for free" is a scam. Real educators never promise or share leaked content.' },
                { num: '04', flag: 'Check the Telegram Username', desc: 'Fake channels often have tiny typos in usernames — e.g., @drshtiiias instead of @drishtiias. Compare character by character with the official link.' },
                { num: '05', flag: 'No Payment Requests for Basics', desc: 'Legitimate free channels NEVER ask you to pay to access their channel itself. Paid course promotions are okay, but if they want money to "unlock" the channel, exit immediately.' },
              ].map(step => (
                <div key={step.num} className="card p-4 flex gap-4 items-start">
                  <div className="w-9 h-9 bg-accent-100 text-accent-600 rounded-xl flex items-center justify-center font-heading font-bold text-sm flex-shrink-0">{step.num}</div>
                  <div>
                    <p className="font-heading font-semibold text-surface-800 mb-1">{step.flag}</p>
                    <p className="text-sm text-surface-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-accent-50 border-l-4 border-accent-500 rounded-r-xl p-4">
              <p className="text-accent-800 font-medium text-sm leading-relaxed">
                <span className="font-bold">⚠️ Warning:</span> After joining a channel from this list, use our <Link href="/tools/eligibility-checker/" className="text-primary-600 underline font-semibold">Eligibility Checker Tool</Link> to instantly verify if you qualify for any exam you see announced. Don&apos;t waste time preparing for an exam you&apos;re not eligible for.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-12">
            <SectionH2 num="10" icon="❓" title="Frequently Asked Questions" />
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details key={faq.q} className="card overflow-hidden group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-heading font-semibold text-surface-800 list-none">
                    <span>{faq.q}</span>
                    <svg className="w-5 h-5 text-surface-400 flex-shrink-0 ml-4 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-surface-600 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-6 text-white mb-8">
            <h3 className="font-heading font-bold text-lg mb-2">Found your Telegram channels? Now check your eligibility.</h3>
            <p className="text-primary-100 text-sm mb-4">Before you start preparing, confirm you actually meet the age and qualification requirements for your target exam.</p>
            <Link href="/tools/eligibility-checker/" className="inline-flex items-center gap-2 bg-white text-primary-700 font-heading font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-primary-50 transition">
              Use Free Eligibility Checker →
            </Link>
          </div>

          {/* JSON-LD FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map(f => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              }),
            }}
          />
        </article>

        {/* SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-5">
            {/* TOC */}
            <div className="card p-5">
              <div className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">In This Article</div>
              <nav className="space-y-1.5">
                {toc.map(item => (
                  <a key={item.id} href={`#${item.id}`} className="block text-sm text-surface-600 hover:text-primary-600 hover:translate-x-1 transition-all duration-150 leading-snug">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

          {/* Quick Category Box */}
          <div className="card p-5">
            <div className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">Channels by Category</div>
            <div className="space-y-2 text-sm">
              {[
                { label: '🏛️ UPSC', val: '5 channels' },
                { label: '📝 SSC', val: '5 channels' },
                { label: '🏦 Banking', val: '5 channels' },
                { label: '🚂 Railway', val: '4 channels' },
                { label: '🎖️ Defence', val: '4 channels' },
                { label: '🗺️ State PSC', val: '4 channels' },
                { label: '📰 Current Affairs', val: '4 channels' },
              ].map(s => (
                <div key={s.label} className="flex justify-between items-center">
                  <span className="text-surface-600">{s.label}</span>
                  <span className="font-semibold text-primary-600">{s.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools CTA */}
          <div className="card p-5 bg-primary-50 border-primary-200">
            <div className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-2">Free Tool</div>
            <p className="text-sm font-semibold text-surface-800 mb-2">Check Your Exam Eligibility</p>
            <p className="text-xs text-surface-500 mb-3">Enter age + qualification → get a list of all govt exams you qualify for in 2026.</p>
            <Link href="/tools/eligibility-checker/" className="btn-primary text-xs py-2 px-4 block text-center">
              Open Eligibility Checker →
            </Link>
          </div>

          {/* Related Links */}
          <div className="card p-5">
            <div className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">Related Guides</div>
            <div className="space-y-2">
              <Link href="/blog/government-exam-preparation-beginners-2026/" className="block text-sm text-primary-600 hover:underline leading-snug">Govt Exam Prep for Beginners →</Link>
              <Link href="/blog/government-exam-age-limit-obc-sc-st-relaxation-2026/" className="block text-sm text-primary-600 hover:underline leading-snug">Age Limit & Relaxation Guide →</Link>
              <Link href="/blog/highest-salary-government-exam-after-12th-2026/" className="block text-sm text-primary-600 hover:underline leading-snug">Highest Salary Exams After 12th →</Link>
              <Link href="/exams/" className="block text-sm text-primary-600 hover:underline leading-snug">Browse All 100 Exams →</Link>
              <Link href="/resources/" className="block text-sm text-primary-600 hover:underline leading-snug">Free Resources Hub →</Link>
            </div>
          </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

// ─── 8TH PAY COMMISSION SALARY CALCULATOR ARTICLE ────────────────────────────
function PayCommissionArticle({ post }: { post: any }) {
  const toc = [
    { id: 'status-2026', label: 'May 2026 Status: What is Confirmed?' },
    { id: 'fitment-factor', label: 'The Fitment Factor Debate' },
    { id: 'da-reset', label: 'How DA Will Reset' },
    { id: 'calculator', label: 'Interactive Salary Calculator' },
    { id: 'pay-matrix', label: 'Pay Level-wise Salary Table' },
    { id: 'which-exams', label: 'Which Exams Are Covered?' },
    { id: 'timeline', label: 'Implementation Timeline' },
    { id: 'faq', label: 'FAQs' },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When will the 8th Pay Commission salary be implemented?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The target effective date is January 1, 2026, with arrears paid retrospectively. As of May 2026, the commission is still in the consultation/field-visit phase. The final report is expected by late 2026.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the expected Fitment Factor for the 8th Pay Commission?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The final Fitment Factor is To Be Notified (TBN). Expert estimates range from 1.92× (conservative) to 2.86× (most likely). Employee unions have demanded 3.83×. The 7th CPC used a fitment factor of 2.57×.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does the 8th Pay Commission apply to bank employees like IBPS PO or SBI PO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Bank employees follow the Bipartite Settlement (BPS) system, not the Central Pay Commission. The 8th CPC applies only to Central Government employees — SSC, Railway, UPSC IAS/IPS/IFS, and Defence services.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens to the current 60% Dearness Allowance (DA) when the 8th CPC is implemented?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The existing 60% DA is fully absorbed into the new, higher Basic Pay. After implementation, the DA counter resets to 0%. Your HRA is also recalculated based on the new higher basic. You do not "lose" the DA — it gets merged into your basic pay.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will employees receive arrears from January 1, 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Since the target implementation date is January 1, 2026, all arrears from that date will be paid in a lump sum once the final report is accepted by the government — similar to how the 7th CPC arrears were paid.',
        },
      },
    ],
  };

  // Pay matrix table data
  const payMatrix = [
    { level: 'Level 1', post: 'MTS, Peon', basic: 18000 },
    { level: 'Level 2', post: 'MTS Higher Grade', basic: 19900 },
    { level: 'Level 3', post: 'LDC, Postal Asst', basic: 21700 },
    { level: 'Level 4', post: 'DEO, Typist', basic: 25500 },
    { level: 'Level 5', post: 'UDC, Clerk Grade', basic: 29200 },
    { level: 'Level 6', post: 'Inspector (SSC CGL Gr B)', basic: 35400 },
    { level: 'Level 7', post: 'Assistant, Sub-Inspector', basic: 44900 },
    { level: 'Level 8', post: 'ASO, Senior Assistant', basic: 47600 },
    { level: 'Level 9', post: 'Section Officer (SO)', basic: 53100 },
    { level: 'Level 10', post: 'IAS/IPS Entry (Group A)', basic: 56100 },
    { level: 'Level 11', post: 'Senior Grade / Dy. SP', basic: 67700 },
    { level: 'Level 12', post: 'Deputy Director', basic: 78800 },
    { level: 'Level 13', post: 'Director / Sr. PPS', basic: 123100 },
    { level: 'Level 14', post: 'Joint Secretary / IG', basic: 144200 },
  ];

  const formatInr = (n: number) => '₹' + Math.round(n).toLocaleString('en-IN');

  return (
    <div className="container-main py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/blog" className="hover:text-primary-500">Blog</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">8th Pay Commission Calculator 2026</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-10">
        {/* ── MAIN CONTENT ── */}
        <article>
          {/* Dark Gradient Hero */}
          <div className="bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900 rounded-2xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary-500 rounded-full opacity-10 -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500 rounded-full opacity-5 translate-y-1/2 -translate-x-1/4" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-accent-500/20 border border-accent-500/40 text-accent-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse" />
                  Updated May 2026
                </span>
                <span className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded-full">8th Pay Commission</span>
                <span className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded-full">Interactive Calculator</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight mb-3">
                8th Pay Commission Salary Calculator 2026 —{' '}
                <span className="text-accent-300 italic">The Real Numbers</span>
              </h1>
              <p className="text-surface-300 text-base leading-relaxed mb-5">
                Stop falling for YouTube clickbait. Here are the 100% officially verified facts about the 8th CPC rollout, the Fitment Factor debate, and an interactive tool to estimate your actual expected salary — updated for May 2026.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-surface-400">
                <span>📅 {post.publishedDate}</span>
                <span>⏱ {post.readTime}</span>
                <span>✅ Based on official notifications only</span>
              </div>
            </div>
          </div>

          {/* 4-Grid Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { icon: '📅', label: 'Effective Date', value: 'Jan 1, 2026', sub: 'Target (Arrears if delayed)' },
              { icon: '📈', label: 'Current DA', value: '60%', sub: 'As of Jan 2026' },
              { icon: '⚖️', label: 'Fitment Factor', value: '⚠️ TBN', sub: 'Expected: 1.92×–2.86×', warn: true },
              { icon: '📋', label: 'Commission Status', value: 'Consultation', sub: 'Field visits May–Jun 2026' },
            ].map((m, i) => (
              <div key={i} className="bg-surface-50 rounded-xl p-4 border border-surface-200 text-center">
                <span className="text-2xl block mb-1">{m.icon}</span>
                <span className="block text-xs text-surface-400 uppercase tracking-wide font-semibold mb-1">{m.label}</span>
                <span className={`block font-heading font-bold text-sm ${m.warn ? 'text-amber-600' : 'text-surface-900'}`}>{m.value}</span>
                <span className="block text-xs text-surface-400 mt-0.5">{m.sub}</span>
              </div>
            ))}
          </div>

          {/* Section 1 — May 2026 Status */}
          <section id="status-2026" className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-heading font-bold flex-shrink-0">1</div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">May 2026 Status: What is Officially Confirmed?</h2>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-500 rounded-r-xl p-4 mb-5">
              <p className="text-sm font-semibold text-primary-700">✅ 2026 Key Update</p>
              <p className="text-sm text-primary-700 mt-1">The 8th Pay Commission was officially constituted on <strong>November 3, 2025</strong>, under chairperson Justice Ranjana Prakash Desai. The commission is currently conducting field visits (Telangana and J&K scheduled for May–June 2026) and the deadline for employee unions to submit memorandums to NC-JCM was officially extended to <strong>May 31, 2026</strong>.</p>
            </div>

            <p className="text-surface-700 leading-relaxed mb-4">
              If you are preparing for SSC CGL, RRB NTPC, or UPSC in 2026, understanding your future salary is powerful motivation — and a valid interview topic. However, the internet is flooded with fake "finalized" salary slabs. At TaiyarHo, we only publish facts.
            </p>
            <p className="text-surface-700 leading-relaxed mb-4">
              The government has approved a 2% DA hike bringing the current DA to <strong>60% effective January 1, 2026</strong>. The 8th CPC is still gathering feedback from stakeholders. No final salary figures, pay matrices, or fitment factors have been approved by the government as of this update.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: '✅', color: 'emerald', title: 'Officially Confirmed', items: ['Commission constituted (Nov 3, 2025)', 'Justice Ranjana Prakash Desai as Chair', 'Effective date target: Jan 1, 2026', 'Current DA: 60% (Jan 2026)', 'Field consultations ongoing'] },
                { icon: '⚠️', color: 'amber', title: 'NOT Yet Confirmed', items: ['Final Fitment Factor', 'New Pay Matrix / Salary Slabs', 'Revised HRA & TA rates', 'CGHS contribution rates', 'NPS employer contribution changes'] },
              ].map((col, i) => (
                <div key={i} className={`card p-5 ${i === 0 ? 'border-emerald-200 bg-emerald-50' : 'border-amber-200 bg-amber-50'}`}>
                  <p className={`text-sm font-heading font-semibold mb-3 ${i === 0 ? 'text-emerald-700' : 'text-amber-700'}`}>{col.icon} {col.title}</p>
                  <ul className="space-y-1.5">
                    {col.items.map(item => (
                      <li key={item} className={`text-sm ${i === 0 ? 'text-emerald-700' : 'text-amber-700'} flex items-start gap-2`}>
                        <span className="mt-0.5">•</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2 — Fitment Factor */}
          <section id="fitment-factor" className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-heading font-bold flex-shrink-0">2</div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">The Fitment Factor Debate — 3 Scenarios</h2>
            </div>

            <p className="text-surface-700 leading-relaxed mb-4">
              The Fitment Factor is the exact multiplier that converts your current 7th CPC Basic Pay into the new 8th CPC Basic Pay. Since it is officially <strong>TBN (To Be Notified)</strong>, you must understand all three scenarios sitting on the Commission&apos;s desk right now.
            </p>

            <div className="overflow-x-auto mb-5">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-surface-800 text-white">
                    <th className="px-4 py-3 text-left font-heading text-sm">Pay Commission</th>
                    <th className="px-4 py-3 text-center font-heading text-sm">Fitment Factor</th>
                    <th className="px-4 py-3 text-center font-heading text-sm">% Increase</th>
                    <th className="px-4 py-3 text-center font-heading text-sm">Min. Basic Pay</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['5th CPC (1997)', '—', '~20.6%', '₹2,550'],
                    ['6th CPC (2006)', '1.86×', '54%', '₹7,000'],
                    ['7th CPC (2016)', '2.57×', '+14.29%', '₹18,000'],
                    ['8th CPC — Conservative', '1.92×', '~14%', '₹34,560', true],
                    ['8th CPC — Most Likely', '2.86×', '~11.4% real', '₹51,480', true],
                    ['8th CPC — Union Demand', '3.83×', '~49%', '₹68,940', true],
                  ].map((row, i) => (
                    <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-surface-50'} ${row[4] ? 'border-l-2 border-primary-300' : ''}`}>
                      <td className="px-4 py-2.5 font-body text-surface-800">{row[0]}</td>
                      <td className="px-4 py-2.5 text-center font-body text-surface-700">{row[1]}</td>
                      <td className="px-4 py-2.5 text-center font-body text-surface-700">{row[2]}</td>
                      <td className={`px-4 py-2.5 text-center font-semibold ${row[4] ? 'text-primary-700' : 'text-surface-700'}`}>{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { ff: '1.92×', label: 'Conservative Estimate', color: 'amber', detail: 'Assumes government maintains fiscal restraint. Similar real-value increase to 7th CPC after accounting for current inflation. Minimum basic: ₹34,560.', tag: 'Low Scenario' },
                { ff: '2.86×', label: 'Most Likely Range', color: 'primary', detail: 'Factoring in 60% DA absorption and CPI trends, most analysts project 2.57×–2.86×. Under 2.86×, SSC CGL Level 6 Inspector\'s basic jumps from ₹35,400 to ₹1,01,244.', tag: '★ Analysts Estimate' },
                { ff: '3.83×', label: 'Union Demand', color: 'emerald', detail: 'NC-JCM and major federations formally demanded 3.83× in their May 2026 memorandums. Approved minimum salary would jump to ₹69,000. Government approval is unlikely at this scale.', tag: 'High Scenario' },
              ].map((s, i) => (
                <div key={i} className={`card p-5 ${i === 1 ? 'border-primary-300 bg-primary-50' : ''}`}>
                  <div className={`text-2xl font-heading font-bold mb-1 ${i === 0 ? 'text-amber-600' : i === 1 ? 'text-primary-700' : 'text-emerald-600'}`}>{s.ff}</div>
                  <div className="font-heading font-semibold text-surface-900 text-sm mb-1">{s.label}</div>
                  <span className={`text-xs badge-primary mb-3 inline-block ${i === 1 ? 'bg-primary-200 text-primary-700' : ''}`}>{s.tag}</span>
                  <p className="text-xs text-surface-600 leading-relaxed">{s.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — DA Reset */}
          <section id="da-reset" className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-heading font-bold flex-shrink-0">3</div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">How Dearness Allowance (DA) Will Reset</h2>
            </div>

            <p className="text-surface-700 leading-relaxed mb-4">
              Many aspirants are confused about what happens to the 60% DA they see in salary slips today. Here is exactly what will happen when 8th CPC is implemented.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-4 mb-5">
              <p className="text-sm font-semibold text-emerald-700">📌 Key Fact: You Don&apos;t Lose the DA</p>
              <p className="text-sm text-emerald-700 mt-1">The current 60% DA is <strong>absorbed into the new Basic Pay</strong>. When the government announces the new pay matrix, it already factors in the prevailing DA. Your Basic Pay goes up massively; the DA counter simply restarts at 0%.</p>
            </div>

            <div className="overflow-x-auto mb-5">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-surface-800 text-white">
                    <th className="px-4 py-3 text-left font-heading text-sm">Component</th>
                    <th className="px-4 py-3 text-center font-heading text-sm">7th CPC (Today)</th>
                    <th className="px-4 py-3 text-center font-heading text-sm">8th CPC Day 1</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Basic Pay (Level 6)', '₹35,400', '₹1,01,244 (2.86×)'],
                    ['Dearness Allowance', '60% = ₹21,240', '0% = ₹0 (Resets)'],
                    ['HRA — X Class City', '₹10,620 (30%)', '₹24,299 (24%)'],
                    ['HRA — Y Class City', '₹7,080 (20%)', '₹16,199 (16%)'],
                    ['HRA — Z Class City', '₹3,540 (10%)', '₹8,099 (8%)'],
                    ['TA (Level 6, TPTA city)', '~₹5,760', '~₹9,000+ (TBN)'],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-2.5 font-body text-surface-800">{row[0]}</td>
                      <td className="px-4 py-2.5 text-center text-surface-600">{row[1]}</td>
                      <td className="px-4 py-2.5 text-center font-semibold text-primary-700">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-accent-50 border-l-4 border-accent-500 rounded-r-xl p-4">
              <p className="text-sm font-semibold text-accent-700">⚠️ Important Note on HRA</p>
              <p className="text-sm text-accent-700 mt-1">Under the 7th CPC, HRA rates step up when DA crosses 25% and 50%. Currently at 60% DA, you receive the highest HRA tier (X=30%). After 8th CPC implementation, DA resets to 0%, so HRA drops back to the base rate (X=24%) — but your new Basic Pay is so much higher that the absolute HRA amount still increases significantly.</p>
            </div>
          </section>

          {/* Section 4 — Calculator */}
          <section id="calculator" className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-heading font-bold flex-shrink-0">4</div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">Interactive 8th CPC Salary Calculator</h2>
            </div>
            <p className="text-surface-700 leading-relaxed mb-5">
              Select your Pay Level, choose a Fitment Factor scenario, and see your estimated 8th CPC salary breakdown instantly. All figures are estimates — final numbers are TBN.
            </p>
            <PayCommissionCalculator />
          </section>

          {/* Section 5 — Pay Level Table */}
          <section id="pay-matrix" className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-heading font-bold flex-shrink-0">5</div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">Pay Level-wise Expected Basic Pay Comparison</h2>
            </div>
            <p className="text-surface-700 leading-relaxed mb-4">
              The table below shows the expected minimum Basic Pay across all common pay levels under three fitment factor scenarios. Gross salary will be significantly higher after adding HRA, TA, and DA.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-surface-800 text-white">
                    <th className="px-3 py-3 text-left font-heading text-xs">Level</th>
                    <th className="px-3 py-3 text-left font-heading text-xs hidden sm:table-cell">Common Posts</th>
                    <th className="px-3 py-3 text-right font-heading text-xs">7th CPC Basic</th>
                    <th className="px-3 py-3 text-right font-heading text-xs">1.92×</th>
                    <th className="px-3 py-3 text-right font-heading text-xs">2.57×</th>
                    <th className="px-3 py-3 text-right font-heading text-xs text-accent-300">2.86×</th>
                    <th className="px-3 py-3 text-right font-heading text-xs">3.83×</th>
                  </tr>
                </thead>
                <tbody>
                  {payMatrix.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-3 py-2.5 font-heading font-semibold text-surface-800 text-xs">{row.level}</td>
                      <td className="px-3 py-2.5 text-surface-500 text-xs hidden sm:table-cell">{row.post}</td>
                      <td className="px-3 py-2.5 text-right text-surface-700">{formatInr(row.basic)}</td>
                      <td className="px-3 py-2.5 text-right text-amber-700">{formatInr(row.basic * 1.92)}</td>
                      <td className="px-3 py-2.5 text-right text-blue-700">{formatInr(row.basic * 2.57)}</td>
                      <td className="px-3 py-2.5 text-right font-semibold text-primary-700">{formatInr(row.basic * 2.86)}</td>
                      <td className="px-3 py-2.5 text-right text-emerald-700">{formatInr(row.basic * 3.83)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-surface-400 mt-2">* Table shows minimum Basic Pay at each level. Actual basic pay in higher increments will be proportionally higher.</p>
          </section>

          {/* Section 6 — Which Exams */}
          <section id="which-exams" className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-heading font-bold flex-shrink-0">6</div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">Which Government Exams Fall Under 8th Pay Commission?</h2>
            </div>
            <p className="text-surface-700 leading-relaxed mb-5">
              This is one of the most commonly misunderstood points. The 8th Pay Commission applies <strong>only to Central Government employees</strong>. It does NOT apply to bank employees, who follow a separate system.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <div className="card p-5 border-emerald-200 bg-emerald-50">
                <p className="font-heading font-semibold text-emerald-700 text-sm mb-3">✅ Covered by 8th CPC</p>
                <div className="space-y-2">
                  {[
                    { exam: 'SSC CGL', levels: 'Levels 4–8 (Inspector to ASO)', link: '/exams/ssc-cgl/' },
                    { exam: 'SSC CHSL', levels: 'Levels 2–4 (LDC, DEO)', link: '/exams/ssc-chsl/' },
                    { exam: 'RRB NTPC', levels: 'Levels 2–7 (Clerk to Station Master)', link: '/exams/rrb-ntpc/' },
                    { exam: 'UPSC IAS/IPS/IFS', levels: 'Level 10 (₹56,100 entry)', link: '/exams/upsc-ias/' },
                    { exam: 'SSC GD Constable', levels: 'Level 3 (₹21,700)', link: '/exams/ssc-gd-constable/' },
                    { exam: 'NDA / CDS / AFCAT', levels: 'Defence services pay scales', link: '/exams/nda/' },
                    { exam: 'DRDO / ISRO / BARC', levels: 'Scientific Grade B onwards', link: '/exams/drdo-scientist/' },
                  ].map(item => (
                    <div key={item.exam} className="flex items-start justify-between gap-2">
                      <div>
                        <Link href={item.link} className="text-sm font-semibold text-emerald-800 hover:underline">{item.exam}</Link>
                        <p className="text-xs text-emerald-600">{item.levels}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card p-5 border-red-200 bg-red-50">
                <p className="font-heading font-semibold text-red-700 text-sm mb-3">❌ NOT Covered (Separate Pay System)</p>
                <div className="space-y-2">
                  {[
                    { exam: 'IBPS PO / Clerk / RRB', system: 'Bipartite Settlement (BPS)', link: '/exams/ibps-po/' },
                    { exam: 'SBI PO / Clerk', system: 'SBI Board-approved pay scales', link: '/exams/sbi-po/' },
                    { exam: 'RBI Grade B / Officer', system: 'RBI internal pay structure', link: '/exams/' },
                    { exam: 'LIC AAO / ADO', system: 'Insurance industry settlement', link: '/exams/' },
                    { exam: 'NABARD Grade A', system: 'NABARD internal pay scales', link: '/exams/' },
                    { exam: 'State PSC Employees', system: 'State Pay Commissions (not 8th CPC)', link: '/exams/' },
                  ].map(item => (
                    <div key={item.exam} className="flex items-start gap-2">
                      <div>
                        <Link href={item.link} className="text-sm font-semibold text-red-700 hover:underline">{item.exam}</Link>
                        <p className="text-xs text-red-500">{item.system}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-primary-50 border-l-4 border-primary-500 rounded-r-xl p-4">
              <p className="text-sm font-semibold text-primary-700">📌 Quick Note for Banking Aspirants</p>
              <p className="text-sm text-primary-700 mt-1">IBPS PO and SBI PO salaries just got a massive hike via the 12th Bipartite Settlement — in-hand pay is now ₹52,000–₹55,000/month. This is a completely separate development from the 8th Pay Commission. See our detailed <Link href="/blog/ibps-po-salary-in-hand-2026/" className="underline font-semibold">IBPS PO Salary 2026 guide</Link>.</p>
            </div>
          </section>

          {/* Section 7 — Timeline */}
          <section id="timeline" className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-heading font-bold flex-shrink-0">7</div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">8th Pay Commission Implementation Timeline</h2>
            </div>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-primary-200 hidden sm:block" />
              {[
                { date: 'Sep–Oct 2025', event: 'Government announces formation of 8th Pay Commission', done: true },
                { date: 'Nov 3, 2025', event: 'Commission officially constituted — Justice Ranjana Prakash Desai appointed as Chair', done: true },
                { date: 'Jan 1, 2026', event: 'Target effective date for new pay scales. Current DA = 60%', done: true },
                { date: 'May–Jun 2026', event: 'Field consultations ongoing (Telangana, J&K). NC-JCM memorandum deadline: May 31, 2026', done: false, current: true },
                { date: 'Late 2026 (est.)', event: 'Commission submits final report to government', done: false },
                { date: '2026–27 (est.)', event: 'Government approves final pay matrix. Arrears from Jan 1, 2026 paid in lump sum', done: false },
              ].map((step, i) => (
                <div key={i} className="sm:pl-14 relative card p-5 mb-4">
                  <div className={`sm:absolute left-0 top-4 w-10 h-10 rounded-xl flex items-center justify-center text-white font-heading font-bold text-xs hidden sm:flex ${step.current ? 'bg-accent-500' : step.done ? 'bg-emerald-500' : 'bg-surface-300'}`}>
                    {step.done ? '✓' : step.current ? '→' : String(i + 1)}
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-heading font-semibold px-2 py-0.5 rounded-full ${step.current ? 'bg-accent-100 text-accent-700' : step.done ? 'bg-emerald-100 text-emerald-700' : 'bg-surface-100 text-surface-500'}`}>
                      {step.date}
                    </span>
                    {step.current && <span className="text-xs bg-accent-500 text-white px-2 py-0.5 rounded-full">You Are Here</span>}
                  </div>
                  <p className="text-sm text-surface-700">{step.event}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8 — FAQs */}
          <section id="faq" className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-heading font-bold flex-shrink-0">8</div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900">Frequently Asked Questions</h2>
            </div>
            {faqSchema.mainEntity.map((faq, i) => (
              <details key={i} className="card overflow-hidden mb-3">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-heading font-semibold text-surface-800 hover:text-primary-600 transition-colors list-none">
                  <span>{faq.name}</span>
                  <svg className="w-5 h-5 text-surface-400 flex-shrink-0 ml-3 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-surface-600 leading-relaxed">{faq.acceptedAnswer.text}</div>
              </details>
            ))}
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-6 text-white text-center">
            <p className="font-heading font-bold text-xl mb-2">Taiyar Ho? 🚀</p>
            <p className="text-primary-200 text-sm mb-4">While the Fitment Factor is still being decided, your preparation doesn&apos;t have to wait. Check which exams you qualify for right now — 100% free.</p>
            <Link href="/tools/eligibility-checker/" className="inline-block bg-white text-primary-700 font-heading font-semibold px-6 py-2.5 rounded-full hover:bg-primary-50 transition-colors text-sm">
              Check Your Eligibility →
            </Link>
          </div>
        </article>

        {/* ── SIDEBAR ── */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            {/* TOC */}
            <div className="card p-5">
              <p className="text-xs font-heading font-semibold text-surface-500 uppercase tracking-wider mb-3">In This Article</p>
              <nav className="space-y-1">
                {toc.map(item => (
                  <a key={item.id} href={`#${item.id}`} className="block text-sm text-surface-600 hover:text-primary-500 py-1 leading-snug transition-colors">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Key Status Card */}
            <div className="card p-5 bg-amber-50 border-amber-200">
              <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-3">⚠️ Current Status</p>
              <div className="space-y-2">
                {[
                  { label: 'Effective Date', value: 'Jan 1, 2026 (target)' },
                  { label: 'Fitment Factor', value: 'TBN (est. 1.92×–2.86×)' },
                  { label: 'DA Reset', value: '60% → 0% on Day 1' },
                  { label: 'Arrears', value: 'From Jan 1, 2026' },
                ].map(item => (
                  <div key={item.label} className="flex justify-between text-xs">
                    <span className="text-amber-600">{item.label}</span>
                    <span className="font-semibold text-amber-800">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility CTA */}
            <div className="card p-5 bg-primary-50 border-primary-200">
              <div className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-2">Free Tool</div>
              <p className="text-sm font-semibold text-surface-800 mb-2">Check Your Exam Eligibility</p>
              <p className="text-xs text-surface-500 mb-3">Find all central govt exams you qualify for based on age & qualification.</p>
              <Link href="/tools/eligibility-checker/" className="btn-primary text-xs py-2 px-4 block text-center">
                Open Eligibility Checker →
              </Link>
            </div>

            {/* Related */}
            <div className="card p-5">
              <div className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">Related Articles</div>
              <div className="space-y-2">
                <Link href="/blog/ibps-po-salary-in-hand-2026/" className="block text-sm text-primary-600 hover:underline leading-snug">IBPS PO Salary 2026 (In-Hand) →</Link>
                <Link href="/blog/highest-salary-government-exam-after-12th-2026/" className="block text-sm text-primary-600 hover:underline leading-snug">Highest Salary Exams After 12th →</Link>
                <Link href="/blog/ssc-cgl-vs-chsl-which-is-easier-2026/" className="block text-sm text-primary-600 hover:underline leading-snug">SSC CGL vs CHSL — Which is Better? →</Link>
                <Link href="/exams/ssc-cgl/" className="block text-sm text-primary-600 hover:underline leading-snug">SSC CGL 2026 Complete Guide →</Link>
                <Link href="/exams/rrb-ntpc/" className="block text-sm text-primary-600 hover:underline leading-snug">RRB NTPC 2026 Complete Guide →</Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

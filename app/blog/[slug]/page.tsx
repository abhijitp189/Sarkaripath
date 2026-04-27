import Link from 'next/link';
import { Metadata } from 'next';
import { blogPosts, getBlogPostBySlug } from '@/lib/blog-data';

export function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: 'Article Not Found' };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: { title: post.metaTitle, description: post.metaDescription },
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
  if (post.slug === 'ssc-cgl-2026-syllabus-complete-guide') {
    return <SscCgl2026Article post={post} />;
  }
  if (post.slug === 'government-exam-preparation-beginners-2026') {
    return <GovExamBeginnersArticle post={post} />;
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
                    ['YouTube (StudyIQ, Adda247, Wifistudy)', 'Video lectures for all exams', 'Free', '⭐⭐⭐⭐⭐'],
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
            author: { '@type': 'Organization', name: 'TaiyarHo', url: 'https://taiyarho.in' },
            publisher: { '@type': 'Organization', name: 'TaiyarHo', url: 'https://taiyarho.in' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taiyarho.in/blog/government-exam-preparation-beginners-2026' },
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

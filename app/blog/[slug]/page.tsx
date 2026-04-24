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
              { label: 'Vacancies', value: '15,000+', sub: 'Expected (based on trend)' },
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
            The SSC CGL 2026 notification was originally scheduled for March 31, 2026 but has been slightly delayed and is expected imminently on <strong>ssc.gov.in</strong>. The application deadline is tentatively expected in <strong>April–May 2026</strong> — exact date will be confirmed in the official notification. Complete your One-Time Registration (OTR) now so you're ready to apply the moment it opens.
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
              If you are a graduate dreaming of a government career with a stable salary, good perks, and job security — SSC CGL is one of the best paths available. In 2025, the commission filled over 15,000 vacancies. Similar or higher numbers are expected for 2026.
            </p>
            <Callout type="info" title="💡 Key Change to Know">
              SSC CGL is now a <strong>two-tier exam</strong> only. There is no Tier 3 descriptive paper and no interview. Both Tier 1 and Tier 2 are fully objective (MCQ) Computer-Based Tests. Your <strong>Tier 2 score alone</strong> determines your final rank.
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
              The SSC CGL 2026 exam is conducted in two stages. Here is a clear picture of how the selection works:
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
                    ['Section III — Module I: Computer Knowledge', '20', 'Qualifying only', 'No penalty'],
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
                    <td className="p-3 text-center font-bold text-surface-900">130</td>
                    <td className="p-3 text-center font-bold text-surface-900">390</td>
                    <td className="p-3 text-center text-surface-600 text-xs">–1 (Sections I & II)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Callout type="warning" title="⚠️ Critical Note">
              Negative marking in Tier 2 is <strong>–1 mark per wrong answer</strong> in Sections I and II. <strong>No negative marking</strong> for Computer Knowledge or DEST. Also: Computer Knowledge and DEST are <strong>qualifying only</strong> — they do not count toward your final merit score. Total scored marks in Tier 2 Paper I = <strong>390</strong>.
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
              Tier 2 is where the real game is played. Your Tier 2 score (out of 390) determines your final rank and post allocation. The negative marking is <strong>–1 per wrong answer</strong> — accuracy matters far more here than in Tier 1.
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

            <h3 className="font-heading font-semibold text-surface-800 text-lg mb-3 mt-6">Tier 2 — Section III: Computer Knowledge (20 questions, 60 marks — Qualifying)</h3>
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
                { q: 'Is there a negative marking in SSC CGL?', a: 'Yes, in both tiers. In Tier 1, it\'s –0.50 marks per wrong answer. In Tier 2, it\'s –1 mark per wrong answer in most sections (except the Computer Knowledge test and DEST, which carry no penalty).' },
                { q: 'Can I write SSC CGL in Hindi?', a: 'Most sections of Tier 1 and Tier 2 are bilingual (English and Hindi). The only exception is the English Language & Comprehension section, which must be answered in English only.' },
                { q: 'Is there an SSC CGL interview?', a: 'No. SSC CGL has no interview since 2016. Selection is entirely based on your written exam performance in Tier 2. Some posts require a skill test (DEST/typing) which is qualifying in nature.' },
                { q: 'What is the DEST test and who needs it?', a: 'DEST (Data Entry Speed Test) requires candidates to type approximately 2,000 key depressions in 15 minutes. It is compulsory for all SSC CGL candidates but only qualifying — it does not affect your merit rank.' },
                { q: 'What is a good score in SSC CGL Tier 2?', a: 'Total scored marks in Tier 2 Paper I are 390. Based on previous years\' cut-off trends, scoring above 300–320 out of 390 puts you in a strong position for most posts. The exact cut-off varies by category, post, and competition level each year.' },
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

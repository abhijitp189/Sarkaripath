import Link from 'next/link';
import { Metadata } from 'next';
import { guides } from '@/lib/exams-data';

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = guides.find((g) => g.slug === params.slug);
  if (!guide) return { title: 'Guide Not Found' };
  return {
    title: `${guide.title} | SarkariPath`,
    description: guide.description,
  };
}

// Guide content — in a real app this would come from MDX files or a CMS
const guideContent: Record<string, { sections: { heading: string; content: string }[] }> = {
  'how-to-start-government-exam-preparation': {
    sections: [
      {
        heading: 'Step 1: Understand the Landscape',
        content: 'India has hundreds of government exams conducted by various bodies like UPSC, SSC, IBPS, RRB, and State PSCs. Before jumping into preparation, spend a few days understanding which exams exist, what posts they offer, and which ones match your qualification and career goals. Visit our Exams page to browse all major exams with their details.',
      },
      {
        heading: 'Step 2: Choose Your Target Exam',
        content: 'Don\'t prepare for everything at once. Pick 2-3 exams that share a similar syllabus. For example, SSC CGL, SSC CHSL, and Railway NTPC have overlapping syllabi in Maths, Reasoning, and General Awareness. Similarly, all banking exams (IBPS PO, SBI PO, RBI Grade B) share common topics. Check our eligibility checker to find exams you qualify for.',
      },
      {
        heading: 'Step 3: Know the Syllabus Inside Out',
        content: 'Download the official syllabus from the conducting body\'s website. Print it out and pin it to your wall. Every single topic in the syllabus is a potential question. Don\'t add topics not in the syllabus — and don\'t skip topics that are. Our exam pages have the complete syllabus broken down subject-wise.',
      },
      {
        heading: 'Step 4: Gather Study Materials',
        content: 'You do NOT need expensive coaching or premium apps. The best preparation can be done with free resources: NCERT textbooks (free on ncert.nic.in), YouTube channels like Unacademy, StudyIQ, and Adda247, free mock tests on Testbook and Oliveboard, and one or two good reference books per subject. Check our Resources page for curated free materials.',
      },
      {
        heading: 'Step 5: Create a Realistic Study Plan',
        content: 'A study plan is non-negotiable. Break your preparation into phases: Foundation (cover basics), Building (reference books), Practice (mock tests), and Revision. Allocate specific hours to each subject daily. Be realistic — if you can study 4 hours daily, don\'t plan for 8. Consistency beats intensity. Each exam page on SarkariPath has a month-by-month study plan you can follow.',
      },
      {
        heading: 'Step 6: Practice with Mock Tests',
        content: 'Start taking mock tests from Month 2 or 3 of your preparation. Don\'t wait until you\'ve "completed the syllabus" — that day never comes. Mock tests help you identify weak areas, improve time management, and build exam temperament. Analyze every mock test thoroughly — spend as much time analyzing as you spent taking the test.',
      },
      {
        heading: 'Step 7: Stay Updated with Current Affairs',
        content: 'For almost every government exam, current affairs carry significant weight. Read one newspaper daily (The Hindu or Indian Express), follow monthly current affairs compilations (available free on many YouTube channels), and maintain a handwritten notebook of important events. Focus on last 6-12 months of current affairs.',
      },
    ],
  },
  'best-free-resources-government-exams': {
    sections: [
      {
        heading: 'Free YouTube Channels',
        content: 'YouTube is the single best free resource for government exam preparation. Top channels include: Unacademy (separate channels for UPSC, SSC, Banking), StudyIQ (all exams), Adda247 (Banking and SSC focus), Drishti IAS (Hindi medium UPSC), Wifistudy (Railway and SSC), and Mrunal Patel (Economy and current affairs). Subscribe to 3-4 channels relevant to your exam and follow their free playlists systematically.',
      },
      {
        heading: 'Free Websites for Study Material',
        content: 'NCERT official website (ncert.nic.in) has all textbooks for free — these are the foundation for every exam. Insights on India and Forum IAS are excellent for UPSC. GK Today provides daily current affairs. PRS Legislative Research is invaluable for Polity. For banking, the RBI website itself is the best resource for banking awareness. All official exam body websites have previous year papers available for free.',
      },
      {
        heading: 'Free Mock Test Platforms',
        content: 'Several platforms offer free mock tests: Testbook (limited free mocks for all exams), Oliveboard (free mocks for banking exams), Adda247 (free daily quizzes), IBPS official website (releases free mock tests before every exam), and SSC official website (practice sets). Take at least one free mock per week during your preparation.',
      },
      {
        heading: 'Telegram Groups and Apps',
        content: 'Telegram has become a hub for exam preparation. Join groups for your specific exam — they share daily current affairs PDFs, free study materials, and exam notifications. Be selective and join only 2-3 quality groups to avoid information overload. Popular apps include Pratiyogita Darpan (current affairs), GKToday, and exam-specific apps from Adda247 and Testbook.',
      },
      {
        heading: 'Previous Year Question Papers',
        content: 'Previous year papers are the most underrated free resource. Every official exam website publishes past papers. Solving 5-10 years of previous papers gives you more insight than any coaching class. You\'ll understand the exam pattern, difficulty level, frequently asked topics, and time management requirements. We link official PYQ sources on every exam page.',
      },
    ],
  },
  'age-limit-relaxation-government-jobs': {
    sections: [
      {
        heading: 'How Age Limits Work',
        content: 'Every government exam has a minimum and maximum age limit. The age is calculated as on a specific date mentioned in the notification (usually 1st January or 1st August of the exam year). The upper age limit varies by exam — UPSC CSE allows up to 32 years, SSC CGL up to 32 years, Banking exams up to 30 years, and Railway exams up to 33 years. Age limits can vary even between different posts within the same exam.',
      },
      {
        heading: 'OBC Age Relaxation',
        content: 'OBC (Non-Creamy Layer) candidates get 3 years of age relaxation in almost all central government exams. This means if the upper age limit is 30, OBC candidates can apply up to age 33. You need a valid OBC Non-Creamy Layer certificate issued within the relevant financial year. The creamy layer income limit is reviewed periodically by the government.',
      },
      {
        heading: 'SC/ST Age Relaxation',
        content: 'SC (Scheduled Caste) and ST (Scheduled Tribe) candidates get 5 years of age relaxation in central government exams. Additionally, for UPSC CSE, SC/ST candidates get unlimited attempts until the age limit. A valid caste certificate from the competent authority is required. The certificate should be in the prescribed format as mentioned in the exam notification.',
      },
      {
        heading: 'EWS Age Relaxation',
        content: 'EWS (Economically Weaker Section) candidates from the General category are eligible for 10% reservation in government jobs. However, EWS candidates typically do NOT get age relaxation — they follow the General category age limit. The EWS certificate must be obtained fresh every year as it is based on the previous year\'s family income.',
      },
      {
        heading: 'PwBD Age Relaxation',
        content: 'Persons with Benchmark Disability (PwBD) get significant age relaxation: +10 years for General, +13 years for OBC, and +15 years for SC/ST candidates. The disability should be 40% or more as certified by the competent authority. Different exams may have different definitions of eligible disabilities for specific posts.',
      },
      {
        heading: 'Ex-Servicemen Age Relaxation',
        content: 'Ex-Servicemen typically get 3-5 years of age relaxation after deduction of military service rendered. The exact relaxation varies by exam. Some exams like SSC have separate reservation quotas for Ex-Servicemen. Widows and divorced/judicially separated women from the defence forces also get age relaxation in certain exams.',
      },
    ],
  },
};

export default function GuideDetailPage({ params }: { params: { slug: string } }) {
  const guide = guides.find((g) => g.slug === params.slug);
  const content = guideContent[params.slug];

  if (!guide) {
    return (
      <div className="container-main py-20 text-center">
        <h1 className="text-2xl font-heading font-bold text-surface-800 mb-4">Guide Not Found</h1>
        <Link href="/guides" className="btn-primary">Browse All Guides</Link>
      </div>
    );
  }

  return (
    <div className="container-main py-10">
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/guides" className="hover:text-primary-500">Guides</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">{guide.category}</span>
      </nav>

      <article className="max-w-3xl">
        <span className="badge badge-accent mb-4">{guide.category}</span>
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-surface-900 mb-4">{guide.title}</h1>
        <p className="text-lg text-surface-500 leading-relaxed mb-8">{guide.description}</p>

        {content ? (
          <div className="space-y-8">
            {content.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-xl font-heading font-bold text-surface-800 mb-3">{section.heading}</h2>
                <p className="text-surface-600 leading-relaxed">{section.content}</p>
              </section>
            ))}
          </div>
        ) : (
          <div className="card p-8 text-center border-dashed border-2 border-surface-300">
            <div className="text-4xl mb-3">📝</div>
            <h3 className="font-heading font-bold text-lg text-surface-700 mb-2">Content Coming Soon</h3>
            <p className="text-sm text-surface-500">This guide is being prepared. Check back soon for the complete article.</p>
          </div>
        )}

        {/* Related */}
        <div className="mt-12 pt-8 border-t border-surface-200">
          <h3 className="font-heading font-bold text-lg text-surface-800 mb-4">Related Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {guides.filter((g) => g.slug !== params.slug).slice(0, 4).map((g) => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="card p-4 group">
                <span className="badge badge-accent mb-2 text-xs">{g.category}</span>
                <h4 className="font-semibold text-sm text-surface-800 group-hover:text-primary-500 transition-colors">{g.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

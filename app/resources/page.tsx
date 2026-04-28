import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Study Material & Resources for Government Exam Preparation 2025 | TaiyarHo',
  description:
    'Best free resources for UPSC, SSC CGL, IBPS PO, RRB NTPC, SBI PO and 100+ government exams — NCERT books, previous year papers, YouTube channels, mock tests, current affairs, official websites, and PDF study material. 100% free, no registration.',
  keywords: [
    'free study material government exams',
    'UPSC free resources 2025',
    'SSC CGL study material free PDF',
    'IBPS PO free mock test',
    'RRB NTPC previous year papers free download',
    'free NCERT books for competitive exams',
    'best YouTube channels for government exam preparation',
    'free current affairs for sarkari exam',
    'government exam preparation free website',
    'sarkari naukri study material free',
  ],
  alternates: { canonical: 'https://taiyarho.in/resources/' },
  openGraph: {
    title: 'Free Resources for Government Exam Preparation | TaiyarHo',
    description:
      'Curated free study material, YouTube channels, mock tests, PYQ papers, current affairs and more for UPSC, SSC, Banking, Railway & all government exams.',
    url: 'https://taiyarho.in/resources/',
    type: 'website',
  },
};

const examCategories = [
  { id: 'upsc',     label: 'UPSC / IAS',  color: 'bg-violet-100 text-violet-700 border-violet-200' },
  { id: 'ssc',      label: 'SSC',          color: 'bg-blue-100 text-blue-700 border-blue-200' },
  { id: 'banking',  label: 'Banking',      color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  { id: 'railway',  label: 'Railway',      color: 'bg-orange-100 text-orange-700 border-orange-200' },
  { id: 'defence',  label: 'Defence',      color: 'bg-red-100 text-red-700 border-red-200' },
  { id: 'state',    label: 'State PSC',    color: 'bg-teal-100 text-teal-700 border-teal-200' },
  { id: 'teaching', label: 'Teaching',     color: 'bg-pink-100 text-pink-700 border-pink-200' },
  { id: 'police',   label: 'Police',       color: 'bg-slate-100 text-slate-700 border-slate-200' },
];

interface Resource {
  name: string;
  url: string;
  desc: string;
  tags: string[];
  badge?: string;
  badgeColor?: string;
}

interface ResourceSection {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  items: Resource[];
}

const resourceSections: ResourceSection[] = [
  {
    id: 'foundation',
    icon: '📖',
    title: 'NCERT & Foundation Books',
    subtitle: 'The non-negotiable starting point for every competitive exam aspirant',
    items: [
      {
        name: 'NCERT Textbooks (Class 6–12)',
        url: 'https://ncert.nic.in/textbook.php',
        desc: 'Download free NCERT PDFs for all subjects — History, Geography, Polity, Economy, Science, Math. The single most important free resource for UPSC, SSC, Railway, Banking, Defence, and State PSC exams.',
        tags: ['All Exams'],
        badge: '⭐ Essential',
        badgeColor: 'bg-yellow-100 text-yellow-700',
      },
      {
        name: 'NIOS Study Material',
        url: 'https://www.nios.ac.in/online-course-material/secondary-course/courses-on-offer.aspx',
        desc: 'Free secondary and senior secondary study material from National Institute of Open Schooling. Useful for 10th/12th level foundation for SSC, Railway, and Defence exams.',
        tags: ['SSC', 'Railway', 'Defence'],
      },
      {
        name: 'IGNOU eGyanKosh',
        url: 'https://egyankosh.ac.in',
        desc: 'Free university-level study material across dozens of subjects in multiple Indian languages. Especially useful for UPSC optional subjects and State PSC preparation.',
        tags: ['UPSC', 'State PSC'],
      },
      {
        name: 'SWAYAM (Free Online Courses)',
        url: 'https://swayam.gov.in',
        desc: "India's national online education platform — free university-level courses on Economics, History, Political Science, and more from IIT and IGNOU professors.",
        tags: ['UPSC', 'State PSC', 'Banking'],
      },
      {
        name: 'Economic Survey of India (Latest)',
        url: 'https://www.indiabudget.gov.in/economicsurvey/',
        desc: 'Annual economic data, analysis, and government policy overview. Essential reading for UPSC Mains, RBI Grade B, IBPS SO, and SBI PO exams.',
        tags: ['UPSC', 'Banking'],
      },
      {
        name: 'India Year Book (Official)',
        url: 'https://www.publicationsdivision.nic.in/books/india-year-book',
        desc: 'Government of India reference annual — covers government schemes, policies, economy, defence, and static GK. Crucial for UPSC and SSC exams.',
        tags: ['UPSC', 'SSC'],
      },
    ],
  },
  {
    id: 'pyq',
    icon: '📄',
    title: 'Previous Year Question Papers (Free PYQ)',
    subtitle: 'The most effective way to understand exam patterns and frequently asked topics',
    items: [
      {
        name: 'UPSC Prelims & Mains PYQ (Official)',
        url: 'https://upsc.gov.in/examinations/previous-question-papers',
        desc: 'Official UPSC repository of past Civil Services, NDA, CDS, and CAPF question papers. Download directly from the source — no third-party links.',
        tags: ['UPSC'],
        badge: 'Official',
        badgeColor: 'bg-emerald-100 text-emerald-700',
      },
      {
        name: 'SSC Previous Year Papers (Official)',
        url: 'https://ssc.gov.in/candidate-corner/previous-question-papers',
        desc: 'Download official previous year question papers for SSC CGL, CHSL, MTS, CPO, and GD Constable — directly from the SSC website.',
        tags: ['SSC'],
        badge: 'Official',
        badgeColor: 'bg-emerald-100 text-emerald-700',
      },
      {
        name: 'RRB Previous Year Papers',
        url: 'https://www.rrbcdg.gov.in/previous-year-papers.html',
        desc: 'Official RRB question papers for NTPC, Group D, ALP, and JE exams. Best source for Railway PYQ preparation without any spam or redirect.',
        tags: ['Railway'],
        badge: 'Official',
        badgeColor: 'bg-emerald-100 text-emerald-700',
      },
      {
        name: 'Prepp — Free PYQ for All Exams',
        url: 'https://prepp.in/previous-year-papers',
        desc: 'Practice previous year papers online for UPSC, SSC CGL, IBPS PO, SBI PO, NDA, CDS, RRB NTPC with detailed solutions. No login required for basic access.',
        tags: ['All Exams'],
      },
      {
        name: 'IBPS Official Mock & Sample Papers',
        url: 'https://www.ibps.in',
        desc: 'IBPS releases free official mock tests and sample papers before every PO, Clerk, and RRB exam. Always check this before your exam date.',
        tags: ['Banking'],
        badge: 'Official',
        badgeColor: 'bg-emerald-100 text-emerald-700',
      },
      {
        name: 'NDA / CDS Previous Papers (UPSC)',
        url: 'https://upsc.gov.in/examinations/previous-question-papers',
        desc: 'Official NDA and CDS previous year question papers from UPSC. Essential for Defence exam aspirants. Download year-wise from the official page.',
        tags: ['Defence'],
      },
    ],
  },
  {
    id: 'mocktests',
    icon: '✍️',
    title: 'Free Mock Tests & Practice Platforms',
    subtitle: 'Regular mock testing is the #1 habit of successful government exam crackers',
    items: [
      {
        name: 'Testbook — Free Mock Tests',
        url: 'https://testbook.com/free-mock-tests',
        desc: 'Industry-leading mock tests for SSC CGL, IBPS PO, SBI PO, RRB NTPC, UPSC, and 100+ more exams. Free tier offers full-length mocks and daily practice quizzes.',
        tags: ['All Exams'],
        badge: 'Most Popular',
        badgeColor: 'bg-blue-100 text-blue-700',
      },
      {
        name: 'Oliveboard — Free Banking Mocks',
        url: 'https://www.oliveboard.in/free-mock-tests/',
        desc: 'Best-in-class free mock tests for Banking and Insurance exams — IBPS PO, Clerk, SBI PO, RBI Grade B, NABARD. Detailed section-wise analysis included.',
        tags: ['Banking'],
      },
      {
        name: 'Adda247 Free Quizzes & Mocks',
        url: 'https://www.adda247.com/free-mock-test',
        desc: 'Daily free quizzes for SSC, Banking, Railway, and Teaching exams. Weekly free full-length mock tests available in Hindi and English.',
        tags: ['SSC', 'Banking', 'Railway'],
      },
      {
        name: 'Prepp — Free Mock Test Series',
        url: 'https://prepp.in/mock-tests',
        desc: 'Free mock tests with detailed analytics for UPSC, SSC, Banking, and Railway. Performance comparison, time-per-question analysis, and weak-area identification.',
        tags: ['All Exams'],
      },
      {
        name: 'Byju Exam Prep (Free)',
        url: 'https://byjusexamprep.com',
        desc: 'Free daily quizzes and chapter-wise tests for SSC CGL, IBPS PO, CTET, RRB NTPC, and Defence exams. Strong community doubt resolution.',
        tags: ['SSC', 'Teaching', 'Railway'],
      },
      {
        name: 'Pinnacle SSC — Free Mock Tests',
        url: 'https://ssccglpinnacle.com',
        desc: 'Focused on SSC exams — CGL, CHSL, MTS. Highly detailed mocks with difficulty breakdown and topic-wise analysis. Popular among serious SSC aspirants.',
        tags: ['SSC'],
      },
    ],
  },
  {
    id: 'youtube',
    icon: '🎬',
    title: 'Top YouTube Channels for Exam Preparation',
    subtitle: 'Thousands of free high-quality lectures — no coaching fees needed',
    items: [
      {
        name: 'StudyIQ IAS — All Exams',
        url: 'https://www.youtube.com/@StudyIQIAS',
        desc: 'Daily current affairs, topic-wise subject lectures, exam analysis, and strategy sessions. Covers UPSC, SSC, Banking, Railway, and State PSC comprehensively.',
        tags: ['All Exams'],
        badge: '20M+ subscribers',
        badgeColor: 'bg-red-100 text-red-700',
      },
      {
        name: 'Unacademy IAS — UPSC',
        url: 'https://www.youtube.com/@UnacademyIAS',
        desc: 'Free UPSC lectures by Roman Saini and top educators. Covers GS 1-4, Essay, and Current Affairs. Daily live sessions available.',
        tags: ['UPSC'],
        badge: '15M+ subscribers',
        badgeColor: 'bg-red-100 text-red-700',
      },
      {
        name: 'Drishti IAS — Hindi Medium',
        url: 'https://www.youtube.com/@DrishtiIASvideos',
        desc: "Best Hindi medium UPSC preparation channel. Daily current affairs (Hindi), editorial analysis, and full GS subject lectures. Trusted by millions of aspirants.",
        tags: ['UPSC', 'State PSC'],
      },
      {
        name: 'Mrunal Patel — Economy & GS',
        url: 'https://www.youtube.com/@MrunalPatel',
        desc: "India's most popular economy lecturer for UPSC and Banking. Clear, structured explanations of Indian Economy, Budget, and Monetary Policy.",
        tags: ['UPSC', 'Banking'],
      },
      {
        name: 'Adda247 — SSC, Banking, Railway',
        url: 'https://www.youtube.com/@adabornindia',
        desc: 'Free daily classes for Banking (IBPS, SBI), SSC CGL/CHSL, and Railway (RRB NTPC). Live quizzes with experts in English and Hindi.',
        tags: ['SSC', 'Banking', 'Railway'],
      },
      {
        name: 'Wifistudy — Railway & SSC',
        url: 'https://www.youtube.com/@wabornindia',
        desc: 'Free classes for RRB NTPC, Group D, SSC MTS, GD Constable. Very popular for Maths shortcuts and GK for Railway exams.',
        tags: ['Railway', 'SSC'],
      },
      {
        name: 'Rakesh Yadav Maths',
        url: 'https://www.youtube.com/@RAKESHYADAVREADERSPUBLICATI',
        desc: 'Quantitative aptitude shortcuts and tricks for SSC CGL, CHSL, and Railway. Best for students who struggle with the Maths section.',
        tags: ['SSC', 'Railway'],
      },
      {
        name: 'Exampur — Teaching & State PSC',
        url: 'https://www.youtube.com/@exampur',
        desc: 'Excellent for CTET, TET, and State PSC preparation. Free live classes and comprehensive subject coverage for teaching recruitment exams.',
        tags: ['Teaching', 'State PSC'],
      },
      {
        name: 'SSBCrack — Defence Exams',
        url: 'https://www.youtube.com/@ssbcrackofficial',
        desc: 'NDA, CDS, AFCAT, and SSB interview preparation. Strategy videos, defence current affairs, and insider tips from ex-defence officers.',
        tags: ['Defence'],
      },
      {
        name: 'Luv Puri — SBI & RBI',
        url: 'https://www.youtube.com/@luvpuri',
        desc: 'Specialised free content for SBI PO, SBI Clerk, RBI Grade B, and NABARD. Banking awareness, financial markets, and economy lectures.',
        tags: ['Banking'],
      },
    ],
  },
  {
    id: 'currentaffairs',
    icon: '📰',
    title: 'Current Affairs & News Resources',
    subtitle: 'Stay updated daily — current affairs contribute 20–40% of marks in most exams',
    items: [
      {
        name: 'GK Today — Daily Current Affairs',
        url: 'https://www.gktoday.in',
        desc: 'Daily current affairs with MCQs, monthly compilations, and subject-wise quizzes. Excellent for SSC, Banking, Railway, and UPSC aspirants.',
        tags: ['All Exams'],
        badge: '⭐ Most Used',
        badgeColor: 'bg-yellow-100 text-yellow-700',
      },
      {
        name: 'Insights on India — UPSC Focus',
        url: 'https://www.insightsonindia.com',
        desc: 'Daily current affairs compilations, editorial analysis, and UPSC-focused summaries. Especially strong for UPSC Prelims and Mains current affairs.',
        tags: ['UPSC', 'State PSC'],
      },
      {
        name: 'PIB (Press Information Bureau)',
        url: 'https://pib.gov.in',
        desc: "Official Government of India press releases — authentic source for government schemes, policies, and initiatives. The gold standard for UPSC current affairs.",
        tags: ['UPSC'],
        badge: 'Official',
        badgeColor: 'bg-emerald-100 text-emerald-700',
      },
      {
        name: 'PRS Legislative Research',
        url: 'https://prsindia.org',
        desc: 'Analysis of Parliament Bills, laws, and government policies. Essential for UPSC Mains and any exam with a Polity/Governance section.',
        tags: ['UPSC', 'SSC'],
      },
      {
        name: 'The Hindu — Editorials',
        url: 'https://www.thehindu.com/opinion/',
        desc: "India's top newspaper editorial section — essential for UPSC essay and mains, banking mains descriptive, and English language improvement.",
        tags: ['UPSC', 'Banking'],
      },
      {
        name: 'Drishti IAS — Monthly CA PDF',
        url: 'https://www.drishtiias.com/currentaffairs-editorialpage/monthly-current-affairs',
        desc: 'Free monthly current affairs PDF compiled by Drishti IAS team. Available in Hindi and English. Popular for last-minute revision before exams.',
        tags: ['UPSC', 'State PSC'],
      },
    ],
  },
  {
    id: 'examspecific',
    icon: '🎯',
    title: 'Exam-Specific Study Resources',
    subtitle: 'Targeted resources organised by exam — go straight to what you need',
    items: [
      {
        name: 'UPSC IAS — Insights Study Plan',
        url: 'https://www.insightsonindia.com/integrated-revision-plan-for-upsc-civil-services-preliminary-examination/',
        desc: 'Free integrated study plan for UPSC Prelims — week-by-week schedule covering all GS subjects. Trusted by thousands of IAS aspirants every year.',
        tags: ['UPSC'],
      },
      {
        name: 'SSC CGL — Pinnacle Practice Sets',
        url: 'https://ssccglpinnacle.com/category/practice-set',
        desc: 'Free chapter-wise and full-length practice sets for SSC CGL Tier 1 and Tier 2. Strong Maths and English content. Best free SSC resource online.',
        tags: ['SSC'],
      },
      {
        name: 'Banking — Free Reasoning Practice',
        url: 'https://www.indiabix.com/logical-reasoning/questions-and-answers/',
        desc: 'Thousands of free reasoning questions with explanations — seating arrangement, blood relations, syllogisms. Essential for IBPS PO, SBI PO, and RRB PO.',
        tags: ['Banking'],
      },
      {
        name: 'RRB NTPC — CBT Practice Sets',
        url: 'https://prepp.in/rrb-ntpc-exam',
        desc: 'Dedicated free practice for RRB NTPC CBT 1 and CBT 2 — topic-wise tests, previous papers, and Railway GK resources.',
        tags: ['Railway'],
      },
      {
        name: 'NDA / CDS — Free Study Material',
        url: 'https://www.ssbcrack.com/category/study-material/',
        desc: 'Free NDA and CDS study material — Maths, English, and GK notes. Also covers SSB interview preparation tips from selected candidates.',
        tags: ['Defence'],
      },
      {
        name: 'CTET — Child Development Notes',
        url: 'https://www.exampur.com/ctet-study-material/',
        desc: 'Free CTET study material for Paper 1 and Paper 2 — Child Development & Pedagogy (CDP), EVS, Maths, Language. Available in Hindi.',
        tags: ['Teaching'],
      },
    ],
  },
  {
    id: 'official',
    icon: '🏛️',
    title: 'Official Exam Websites',
    subtitle: 'Bookmark these — all notifications, admit cards, and results are published here first',
    items: [
      {
        name: 'UPSC — Union Public Service Commission',
        url: 'https://upsc.gov.in',
        desc: 'IAS, IPS, IFS, NDA, CDS, CAPF notifications, exam calendar, admit cards, and results. The only authentic source for UPSC information.',
        tags: ['UPSC'],
        badge: 'Official',
        badgeColor: 'bg-emerald-100 text-emerald-700',
      },
      {
        name: 'SSC — Staff Selection Commission',
        url: 'https://ssc.gov.in',
        desc: 'CGL, CHSL, MTS, CPO, GD Constable, Stenographer — all SSC exam notifications, results, and admit cards.',
        tags: ['SSC'],
        badge: 'Official',
        badgeColor: 'bg-emerald-100 text-emerald-700',
      },
      {
        name: 'IBPS — Banking Personnel Selection',
        url: 'https://www.ibps.in',
        desc: 'PO, Clerk, SO, RRB Officer Scale 1/2/3 — all IBPS exam schedules, admit cards, score cards, and official mock tests.',
        tags: ['Banking'],
        badge: 'Official',
        badgeColor: 'bg-emerald-100 text-emerald-700',
      },
      {
        name: 'SBI Careers Portal',
        url: 'https://sbi.co.in/web/careers',
        desc: 'SBI PO, SBI Clerk, SBI SO recruitment. Apply directly and download official admit cards and results.',
        tags: ['Banking'],
        badge: 'Official',
        badgeColor: 'bg-emerald-100 text-emerald-700',
      },
      {
        name: 'RRB — Railway Recruitment Board',
        url: 'https://www.rrbcdg.gov.in',
        desc: 'NTPC, Group D, ALP, JE, RPF notifications. Check RRB zone-wise official websites for your region from here.',
        tags: ['Railway'],
        badge: 'Official',
        badgeColor: 'bg-emerald-100 text-emerald-700',
      },
      {
        name: 'Employment News — Govt Jobs Weekly',
        url: 'https://www.employmentnews.gov.in',
        desc: "Official Government of India employment newspaper — all central government job notifications, recruitment ads, and career guidance articles.",
        tags: ['All Exams'],
        badge: 'Official',
        badgeColor: 'bg-emerald-100 text-emerald-700',
      },
      {
        name: 'NCS Portal — National Career Service',
        url: 'https://www.ncs.gov.in',
        desc: 'Ministry of Labour portal to search all current government job openings by state, qualification, and category.',
        tags: ['All Exams'],
        badge: 'Official',
        badgeColor: 'bg-emerald-100 text-emerald-700',
      },
      {
        name: 'CTET — Teacher Eligibility Test',
        url: 'https://ctet.nic.in',
        desc: 'Official CTET notification, admit card, result, and previous year papers. Essential bookmark for all teaching job aspirants.',
        tags: ['Teaching'],
        badge: 'Official',
        badgeColor: 'bg-emerald-100 text-emerald-700',
      },
    ],
  },
  {
    id: 'pdfs',
    icon: '📥',
    title: 'Free PDF Notes & Study Material',
    subtitle: 'Download and keep offline — study without internet anytime, anywhere',
    items: [
      {
        name: 'Vision IAS — Free CA Magazine',
        url: 'https://visionias.in/current-affairs/monthly-magazine',
        desc: 'Monthly current affairs magazine — one of the most comprehensive UPSC-focused CA compilations. Free sample issues available for download.',
        tags: ['UPSC', 'State PSC'],
      },
      {
        name: 'GS Score — Free UPSC Notes',
        url: 'https://gsscore.com/free-resources',
        desc: 'Free GS study notes, value-added material, and previous year papers for UPSC Prelims and Mains. Topic-wise downloadable PDFs.',
        tags: ['UPSC'],
      },
      {
        name: 'Bankers Adda — Free Banking PDFs',
        url: 'https://www.bankersadda.com/free-pdf',
        desc: 'Free PDF study material for Banking and Insurance exams — Banking Awareness, Financial Markets, Maths, Reasoning, and English.',
        tags: ['Banking'],
      },
      {
        name: 'SSC Adda — Free SSC Notes',
        url: 'https://www.sscadda.com/free-pdf',
        desc: 'Free PDF notes, practice sets, and study material for SSC CGL, CHSL, MTS, and CPO exams. GK, GS, Maths, and English notes.',
        tags: ['SSC'],
      },
      {
        name: 'ForumIAS — Free UPSC Resources',
        url: 'https://forumias.com/blog/free-upsc-resources/',
        desc: "Community-verified free UPSC notes, toppers' strategies, and GS answer writing resources. One of the most trusted UPSC preparation communities.",
        tags: ['UPSC'],
      },
    ],
  },
];

const stats = [
  { value: '80+', label: 'Free Resources' },
  { value: '8', label: 'Exam Categories' },
  { value: '100%', label: 'Free Forever' },
  { value: '0', label: 'Paid Promotions' },
];

const tagColorMap: Record<string, string> = {
  'All Exams': 'bg-primary-100 text-primary-700',
  'UPSC':      'bg-violet-100 text-violet-700',
  'SSC':       'bg-blue-100 text-blue-700',
  'Banking':   'bg-emerald-100 text-emerald-700',
  'Railway':   'bg-orange-100 text-orange-700',
  'Defence':   'bg-red-100 text-red-700',
  'State PSC': 'bg-teal-100 text-teal-700',
  'Teaching':  'bg-pink-100 text-pink-700',
  'Police':    'bg-slate-100 text-slate-700',
  'Hindi':     'bg-amber-100 text-amber-700',
};

function ResourceCard({ item }: { item: Resource }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card p-5 group hover:border-primary-300 hover:shadow-lg transition-all duration-200 flex flex-col"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex flex-wrap gap-1.5">
          {item.badge && (
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${item.badgeColor}`}>
              {item.badge}
            </span>
          )}
        </div>
        <svg
          className="w-3.5 h-3.5 text-surface-300 group-hover:text-primary-400 shrink-0 mt-0.5 transition-colors"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
      <h3 className="font-heading font-semibold text-surface-800 group-hover:text-primary-600 transition-colors mb-2 text-[15px] leading-snug">
        {item.name}
      </h3>
      <p className="text-xs text-surface-500 leading-relaxed mb-3 flex-1">{item.desc}</p>
      <div className="flex flex-wrap gap-1 mt-auto">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${tagColorMap[tag] ?? 'bg-surface-100 text-surface-500'}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function ResourcesPage() {
  const totalResources = resourceSections.reduce((sum, s) => sum + s.items.length, 0);

  return (
    <div className="bg-surface-50 min-h-screen">

      {/* HERO */}
      <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-main py-12 sm:py-16">
          <nav className="text-sm text-primary-300 mb-6 flex items-center gap-1">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-1">›</span>
            <span className="text-white font-medium">Free Resources</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent-500/20 border border-accent-400/30 text-accent-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <span>✅</span> 100% Free · No Registration · No Paid Promotions
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-4">
              Free Study Resources for<br />
              <span className="text-accent-400">Government Exam Preparation</span>
            </h1>
            <p className="text-primary-200 text-lg leading-relaxed mb-8">
              {totalResources}+ carefully verified free resources for UPSC, SSC CGL, IBPS PO, RRB NTPC, SBI PO
              and all major government exams — books, YouTube channels, mock tests, previous year papers,
              current affairs, and official websites.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10">
                  <div className="text-2xl font-heading font-bold text-accent-400">{s.value}</div>
                  <div className="text-xs text-primary-300 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* STICKY NAV */}
      <div className="sticky top-0 z-20 bg-white border-b border-surface-200 shadow-sm">
        <div className="container-main py-3">
          <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
            <a href="#all" className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full bg-primary-500 text-white">
              All Resources
            </a>
            {resourceSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full border border-surface-200 text-surface-600 hover:border-primary-400 hover:text-primary-600 bg-white transition-all whitespace-nowrap"
              >
                {s.icon} {s.title.split(' ').slice(0, 3).join(' ')}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container-main py-8" id="all">

        {/* Category colour key */}
        <div className="bg-white rounded-2xl border border-surface-200 p-6 shadow-sm mb-8">
          <h2 className="font-heading font-bold text-surface-800 text-base mb-1">
            Resources for every exam category
          </h2>
          <p className="text-xs text-surface-500 mb-4">
            All resources are tagged by exam category — look for the coloured badges on each card
          </p>
          <div className="flex flex-wrap gap-2">
            {examCategories.map((cat) => (
              <span key={cat.id} className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${cat.color}`}>
                {cat.label}
              </span>
            ))}
          </div>
        </div>

        {/* Pro tip */}
        <div className="bg-accent-50 border border-accent-200 rounded-2xl p-5 mb-10 flex gap-4 items-start">
          <span className="text-2xl shrink-0">💡</span>
          <div>
            <h3 className="font-heading font-semibold text-accent-800 text-sm mb-1">
              How to use this page effectively
            </h3>
            <p className="text-xs text-accent-700 leading-relaxed">
              Start with <strong>NCERT Foundation Books</strong> (mandatory for all exams), then add
              <strong> 1–2 YouTube channels</strong> for your specific exam, practice with <strong>PYQ papers</strong>,
              and take <strong>weekly mock tests</strong>. Bookmark the official website for your exam
              for notifications. Use Current Affairs resources daily — even 20 minutes a day adds up significantly.
            </p>
          </div>
        </div>

        {/* Resource sections */}
        <div className="space-y-14">
          {resourceSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                  {section.icon}
                </div>
                <div>
                  <h2 className="font-heading font-bold text-surface-900 text-xl sm:text-2xl leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-surface-500 text-sm mt-1">{section.subtitle}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.items.map((item) => (
                  <ResourceCard key={item.name} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-br from-primary-900 to-primary-700 rounded-3xl p-8 sm:p-10 text-white text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-3">
            Taiyar Ho? Start Your Preparation Today.
          </h2>
          <p className="text-primary-200 mb-6 text-base max-w-xl mx-auto">
            Use our free tools to find exams you qualify for, read detailed preparation guides,
            and check your eligibility — all in one place, completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/exams" className="btn-primary bg-accent-500 hover:bg-accent-600">
              Browse 100+ Exams →
            </Link>
            <Link href="/tools/age-calculator" className="btn-outline border-white text-white hover:bg-white/10">
              Check My Eligibility
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-surface-400 mt-8 max-w-2xl mx-auto leading-relaxed">
          All resources listed are publicly available and free to access. TaiyarHo.in has no commercial
          relationship with any platform listed. We do not promote paid courses or coaching institutes.
          Links are verified but may change — always check the official source for the latest information.
        </p>
      </div>
    </div>
  );
}

import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Resources for Government Exam Preparation | TaiyarHo',
  description: 'Curated list of best free resources for Indian government exam preparation – YouTube channels, websites, apps, NCERT books, previous year papers, mock tests.',
  alternates: { canonical: 'https://taiyarho.in/resources/' },
};

const resourceSections = [
  {
    title: 'Free Textbooks & Study Material',
    icon: '📚',
    items: [
      { name: 'NCERT Textbooks (Class 6-12)', url: 'https://ncert.nic.in/textbook.php', desc: 'Foundation for UPSC, SSC, Railway, and all competitive exams. Absolutely essential.', tags: ['All Exams'] },
      { name: 'NIOS Study Material', url: 'https://www.nios.ac.in', desc: 'Free study material for secondary and senior secondary level subjects.', tags: ['All Exams'] },
      { name: 'IGNOU eGyanKosh', url: 'https://egyankosh.ac.in', desc: 'Free university-level study material in multiple subjects and languages.', tags: ['UPSC', 'State PSC'] },
      { name: 'Economic Survey of India', url: 'https://www.indiabudget.gov.in/economicsurvey/', desc: 'Annual economic data and analysis – essential for economy preparation.', tags: ['UPSC', 'Banking'] },
      { name: 'India Year Book (Summary)', url: 'https://www.publicationsdivision.nic.in', desc: 'Government of India\'s reference annual – useful for static GK and government schemes.', tags: ['UPSC', 'SSC'] },
    ],
  },
  {
    title: 'YouTube Channels',
    icon: '🎥',
    items: [
      { name: 'Unacademy IAS', url: 'https://www.youtube.com/@UnacademyIAS', desc: 'Free UPSC lectures by top educators including Roman Saini.', tags: ['UPSC'] },
      { name: 'StudyIQ IAS', url: 'https://www.youtube.com/@StudyIQIAS', desc: 'Daily current affairs, subject lectures, and exam updates for all exams.', tags: ['All Exams'] },
      { name: 'Drishti IAS', url: 'https://www.youtube.com/@DrishtiIASvideos', desc: 'Hindi medium UPSC preparation – current affairs, prelims, and mains.', tags: ['UPSC', 'Hindi'] },
      { name: 'Adda247', url: 'https://www.youtube.com/@adabornindia', desc: 'Banking, SSC, and Railway exam preparation with daily classes.', tags: ['Banking', 'SSC', 'Railway'] },
      { name: 'Rakesh Yadav Maths', url: 'https://www.youtube.com/@RAKESHYADAVREADERSPUBLICATI', desc: 'Mathematics shortcuts and tricks for SSC and Railway exams.', tags: ['SSC', 'Railway'] },
      { name: 'Mrunal Patel', url: 'https://www.youtube.com/@MrunalPatel', desc: 'Economy, Polity, and current affairs for UPSC and banking exams.', tags: ['UPSC', 'Banking'] },
      { name: 'Wifistudy', url: 'https://www.youtube.com/@wabornindia', desc: 'Free classes for Railway, SSC, and Defence exams.', tags: ['Railway', 'SSC'] },
    ],
  },
  {
    title: 'Mock Test Platforms',
    icon: '📝',
    items: [
      { name: 'Testbook (Free Mocks)', url: 'https://testbook.com', desc: 'Limited free mock tests for SSC, Banking, Railway, and other exams.', tags: ['All Exams'] },
      { name: 'Oliveboard', url: 'https://www.oliveboard.in', desc: 'Free mock tests especially strong for Banking and Insurance exams.', tags: ['Banking'] },
      { name: 'Adda247 Free Quizzes', url: 'https://www.adda247.com', desc: 'Daily free quizzes and weekly mock tests for SSC and Banking.', tags: ['SSC', 'Banking'] },
      { name: 'IBPS Official Mock Tests', url: 'https://www.ibps.in', desc: 'Free official mock tests released before every IBPS exam.', tags: ['Banking'] },
      { name: 'Pinnacle SSC', url: 'https://ssccglpinnacle.com', desc: 'Free mock tests and practice sets for SSC exams.', tags: ['SSC'] },
    ],
  },
  {
    title: 'Official Exam Websites',
    icon: '🏛️',
    items: [
      { name: 'UPSC', url: 'https://upsc.gov.in', desc: 'Civil Services, NDA, CDS, CAPF, and other UPSC exams.', tags: ['UPSC'] },
      { name: 'SSC', url: 'https://ssc.nic.in', desc: 'CGL, CHSL, MTS, GD Constable, and other SSC exams.', tags: ['SSC'] },
      { name: 'IBPS', url: 'https://www.ibps.in', desc: 'PO, Clerk, SO, and RRB exams for banking sector.', tags: ['Banking'] },
      { name: 'SBI Careers', url: 'https://sbi.co.in/web/careers', desc: 'SBI PO, Clerk, and SO recruitment.', tags: ['Banking'] },
      { name: 'RRB (Railway)', url: 'https://www.rrbcdg.gov.in', desc: 'NTPC, Group D, ALP, and other Railway exams.', tags: ['Railway'] },
      { name: 'NCS Portal', url: 'https://www.ncs.gov.in', desc: 'National Career Service – search all government job openings.', tags: ['All Exams'] },
      { name: 'Employment News', url: 'https://www.employmentnews.gov.in', desc: 'Official government employment newspaper – all job notifications.', tags: ['All Exams'] },
    ],
  },
  {
    title: 'Current Affairs Resources',
    icon: '📰',
    items: [
      { name: 'Insights on India', url: 'https://www.insightsonindia.com', desc: 'Daily current affairs compilation, editorial analysis, and UPSC material.', tags: ['UPSC'] },
      { name: 'GK Today', url: 'https://www.gktoday.in', desc: 'Daily current affairs, quizzes, and monthly compilations.', tags: ['All Exams'] },
      { name: 'PRS Legislative Research', url: 'https://prsindia.org', desc: 'Parliament bills, laws, and policy analysis for Polity preparation.', tags: ['UPSC', 'SSC'] },
      { name: 'PIB (Press Information Bureau)', url: 'https://pib.gov.in', desc: 'Official government press releases – authentic source for government initiatives.', tags: ['UPSC'] },
      { name: 'The Hindu (Editorial)', url: 'https://www.thehindu.com/opinion/', desc: 'Editorial section for UPSC essay and mains preparation + English improvement.', tags: ['UPSC', 'Banking'] },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="container-main py-10">
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">Free Resources</span>
      </nav>

      <h1 className="section-title mb-2">Free Resources Hub</h1>
      <p className="section-subtitle mb-4">Curated, verified, and 100% free resources for government exam preparation</p>
      <p className="text-sm text-accent-600 bg-accent-50 border border-accent-200 rounded-lg px-4 py-3 mb-10">
        Every resource listed here is completely free. We do not promote any paid courses or coaching institutes.
      </p>

      <div className="space-y-12">
        {resourceSections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-heading font-bold text-surface-900 mb-5 flex items-center gap-3">
              <span className="text-2xl">{section.icon}</span>
              {section.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.items.map((item) => (
                <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="card p-5 group hover:border-primary-300">
                  <h3 className="font-semibold text-surface-800 group-hover:text-primary-500 transition-colors mb-2">{item.name}</h3>
                  <p className="text-xs text-surface-500 leading-relaxed mb-3">{item.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-surface-100 text-surface-500 px-2 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

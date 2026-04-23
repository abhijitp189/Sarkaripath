// Category-specific preparation content for exams without full detailed pages
// This ensures every exam page has useful actionable information

export interface CategoryContent {
  commonBooks: { title: string; author: string; subject: string }[];
  youtubeChannels: { name: string; url: string; desc: string }[];
  websites: { name: string; url: string; desc: string }[];
  generalTips: string[];
  studyApproach: string[];
  commonSubjects: string[];
}

export const categoryContent: Record<string, CategoryContent> = {
  UPSC: {
    commonBooks: [
      { title: 'Indian Polity', author: 'M. Laxmikanth', subject: 'Polity' },
      { title: "India's Struggle for Independence", author: 'Bipan Chandra', subject: 'History' },
      { title: 'Indian Economy', author: 'Ramesh Singh', subject: 'Economy' },
      { title: 'Certificate Physical and Human Geography', author: 'G.C. Leong', subject: 'Geography' },
      { title: 'NCERT Books (Class 6-12)', author: 'NCERT', subject: 'Foundation' },
    ],
    youtubeChannels: [
      { name: 'Unacademy IAS', url: 'https://www.youtube.com/@UnacademyIAS', desc: 'Free UPSC lectures by top educators' },
      { name: 'StudyIQ IAS', url: 'https://www.youtube.com/@StudyIQIAS', desc: 'Current affairs and subject-wise lectures' },
      { name: 'Drishti IAS', url: 'https://www.youtube.com/@DrishtiIASvideos', desc: 'Hindi medium UPSC preparation' },
    ],
    websites: [
      { name: 'NCERT Textbooks', url: 'https://ncert.nic.in/textbook.php', desc: 'Free foundation-level textbooks' },
      { name: 'Insights on India', url: 'https://www.insightsonindia.com', desc: 'Daily current affairs and study materials' },
      { name: 'PRS Legislative Research', url: 'https://prsindia.org', desc: 'Bills, laws and policy analysis' },
    ],
    generalTips: [
      'Start with NCERT books (Class 6-12) for building a strong foundation in all subjects.',
      'Read one quality newspaper daily — The Hindu or Indian Express — from Day 1.',
      'Focus on answer writing practice. Knowledge alone is not enough; presenting it well is crucial.',
      'Revise regularly. Make short notes and revisit them every 2 weeks.',
      'Solve previous 10 years question papers to understand patterns and important topics.',
      'Join a test series for regular assessment and time management practice.',
    ],
    studyApproach: [
      'Phase 1 (Months 1-3): Complete NCERT foundation for all subjects',
      'Phase 2 (Months 4-6): Standard reference books + daily newspaper reading',
      'Phase 3 (Months 7-9): Answer writing practice + Optional subject preparation',
      'Phase 4 (Months 10-12): Mock tests + Revision + Current affairs consolidation',
    ],
    commonSubjects: ['General Studies', 'Current Affairs', 'Indian Polity', 'Indian History', 'Geography', 'Economy', 'Science & Technology', 'Ethics'],
  },
  SSC: {
    commonBooks: [
      { title: 'Quantitative Aptitude', author: 'R.S. Aggarwal', subject: 'Maths' },
      { title: 'SSC Mathematics (Chapterwise)', author: 'Rakesh Yadav', subject: 'Maths' },
      { title: 'Verbal & Non-Verbal Reasoning', author: 'R.S. Aggarwal', subject: 'Reasoning' },
      { title: 'Objective General English', author: 'S.P. Bakshi', subject: 'English' },
      { title: "Lucent's General Knowledge", author: 'Lucent Publications', subject: 'GK' },
      { title: 'Word Power Made Easy', author: 'Norman Lewis', subject: 'Vocabulary' },
    ],
    youtubeChannels: [
      { name: 'Rakesh Yadav Maths', url: 'https://www.youtube.com/@RAKESHYADAVREADERSPUBLICATI', desc: 'Mathematics shortcuts and tricks' },
      { name: 'Adda247', url: 'https://www.youtube.com/@adabornindia', desc: 'Free SSC preparation classes' },
      { name: 'Unacademy SSC', url: 'https://www.youtube.com/@UnacademySSCExams', desc: 'Subject-wise SSC lectures' },
    ],
    websites: [
      { name: 'SSC Official', url: 'https://ssc.gov.in', desc: 'Official notifications and previous papers' },
      { name: 'Testbook Free Mocks', url: 'https://testbook.com', desc: 'Free mock tests for all SSC exams' },
      { name: 'Pinnacle SSC', url: 'https://ssccglpinnacle.com', desc: 'Free study material and practice' },
    ],
    generalTips: [
      'Focus heavily on Maths — it is the biggest differentiator in SSC exams.',
      'Practice 50+ Maths questions daily. Speed matters as much as accuracy.',
      'Learn shortcuts and tricks for Maths and Reasoning. They save crucial time.',
      'For English, read editorial pages daily. Learn 20 new words every day.',
      'Current affairs of the last 6 months are sufficient for General Awareness.',
      'Take full-length mock tests in exam conditions — strict timing, no breaks.',
    ],
    studyApproach: [
      'Month 1-2: Maths basics (all chapters) + Reasoning fundamentals + Lucent GK',
      'Month 3-4: Advanced Maths + Complete Reasoning + English grammar and vocabulary',
      'Month 5-6: Mock tests daily + Previous year papers + Current affairs revision',
    ],
    commonSubjects: ['Quantitative Aptitude', 'General Intelligence & Reasoning', 'English Language', 'General Awareness'],
  },
  Banking: {
    commonBooks: [
      { title: 'Quantitative Aptitude for Banking', author: 'Arun Sharma', subject: 'Quant' },
      { title: 'A New Approach to Reasoning', author: 'B.S. Sijwali', subject: 'Reasoning' },
      { title: 'Objective English', author: 'Hari Mohan Prasad', subject: 'English' },
      { title: 'Banking Awareness', author: 'Arihant Publications', subject: 'Banking' },
      { title: 'Computer Knowledge for Bank Exams', author: 'Kiran Prakashan', subject: 'Computer' },
    ],
    youtubeChannels: [
      { name: 'Adda247 Banking', url: 'https://www.youtube.com/@adabornindia', desc: 'Free banking exam preparation' },
      { name: 'Unacademy Banking', url: 'https://www.youtube.com/@UnacademyBanking', desc: 'Free classes for banking exams' },
      { name: 'Mrunal Patel', url: 'https://www.youtube.com/@MrunalPatel', desc: 'Economy and banking awareness' },
    ],
    websites: [
      { name: 'Oliveboard', url: 'https://www.oliveboard.in', desc: 'Free mock tests for banking exams' },
      { name: 'RBI Official', url: 'https://www.rbi.org.in', desc: 'Banking policies and monetary updates' },
      { name: 'GK Today', url: 'https://www.gktoday.in', desc: 'Daily current affairs for banking' },
    ],
    generalTips: [
      'Sectional timing is critical in banking exams. Practice each section within strict time limits.',
      'Puzzles and Seating Arrangements make up 60-70% of Reasoning — master them first.',
      'Read The Hindu editorial daily for English comprehension and banking awareness together.',
      'For Data Interpretation, learn to approximate. Estimation saves 2-3 minutes per question.',
      'Keep a banking awareness notebook — note every RBI policy, rate change, and new scheme.',
      'Practice descriptive writing (letter + essay) daily if your exam includes it.',
    ],
    studyApproach: [
      'Month 1-2: Quant basics + Reasoning (Seating, Puzzles) + Daily newspaper',
      'Month 3-4: Advanced DI + Complete Reasoning + English (RC, Grammar) + Banking awareness',
      'Month 5-6: Daily mock tests + Analysis + Speed improvement + Current affairs revision',
    ],
    commonSubjects: ['Quantitative Aptitude', 'Reasoning Ability', 'English Language', 'General/Banking Awareness', 'Computer Knowledge'],
  },
  Railway: {
    commonBooks: [
      { title: 'Fast Track Objective Arithmetic', author: 'Rajesh Verma', subject: 'Maths' },
      { title: 'Quantitative Aptitude', author: 'R.S. Aggarwal', subject: 'Maths' },
      { title: 'Verbal & Non-Verbal Reasoning', author: 'R.S. Aggarwal', subject: 'Reasoning' },
      { title: "Lucent's General Knowledge", author: 'Lucent Publications', subject: 'GK' },
      { title: "Lucent's General Science", author: 'Lucent Publications', subject: 'Science' },
    ],
    youtubeChannels: [
      { name: 'Wifistudy (Unacademy)', url: 'https://www.youtube.com/@wabornindia', desc: 'Free daily classes for Railway exams' },
      { name: 'Adda247', url: 'https://www.youtube.com/@adabornindia', desc: 'Railway exam preparation videos' },
      { name: 'Study Smart', url: 'https://www.youtube.com/@testabornindia', desc: 'Free video classes' },
    ],
    websites: [
      { name: 'RRB Official', url: 'https://www.rrbcdg.gov.in', desc: 'Official notifications and previous papers' },
      { name: 'Testbook Railway', url: 'https://testbook.com', desc: 'Free mock tests for Railway exams' },
    ],
    generalTips: [
      'General Awareness carries maximum weight in Railway exams. Invest 40% study time here.',
      'Focus on static GK and General Science — they are predictable and score-boosting.',
      'Railway-specific questions appear every year — learn about Indian Railways history, zones, developments.',
      'Practice Maths with a timer. You get less than 2 minutes per question.',
      'Solve at least 5 years of previous papers. RRB repeats concepts frequently.',
    ],
    studyApproach: [
      'Month 1-2: Maths foundation + Lucent GK chapters + Reasoning basics',
      'Month 3-4: Complete Maths and Reasoning + General Science + Current affairs',
      'Month 5-6: Full mock tests daily + Previous year papers + Revision sprint',
    ],
    commonSubjects: ['Mathematics', 'General Intelligence & Reasoning', 'General Awareness', 'General Science'],
  },
  Defence: {
    commonBooks: [
      { title: 'Pathfinder NDA/NA Entrance Examination', author: 'Arihant Publications', subject: 'All subjects' },
      { title: 'Mathematics for NDA/CDS', author: 'R.S. Aggarwal', subject: 'Maths' },
      { title: "Lucent's General Knowledge", author: 'Lucent Publications', subject: 'GK' },
      { title: 'Word Power Made Easy', author: 'Norman Lewis', subject: 'English' },
      { title: 'NCERT Books (Class 11-12)', author: 'NCERT', subject: 'Science/Maths' },
    ],
    youtubeChannels: [
      { name: 'MKC (Major Kalshi Classes)', url: 'https://www.youtube.com/@MajorKalshiClasses', desc: 'Defence exam preparation' },
      { name: 'Unacademy Defence', url: 'https://www.youtube.com/@UnacademyDefence', desc: 'NDA, CDS, AFCAT preparation' },
    ],
    websites: [
      { name: 'Join Indian Army', url: 'https://joinindianarmy.nic.in', desc: 'Official Army recruitment' },
      { name: 'Join Indian Navy', url: 'https://joinindiannavy.gov.in', desc: 'Official Navy recruitment' },
      { name: 'UPSC Official', url: 'https://upsc.gov.in', desc: 'NDA, CDS official notifications' },
    ],
    generalTips: [
      'Physical fitness is equally important as academics in defence exams. Start running and exercise from Day 1.',
      'For SSB Interview, develop your personality — leadership, teamwork, communication skills matter.',
      'Stay updated with national and international current affairs, especially defence-related news.',
      'Practice Maths thoroughly — it carries heavy weight in NDA and CDS written exams.',
      'Read about Indian defence forces history, operations, and recent achievements.',
    ],
    studyApproach: [
      'Month 1-2: Maths + English + Physical training daily',
      'Month 3-4: GK + Science + Current affairs + Continue fitness',
      'Month 5-6: Mock tests + Previous papers + SSB preparation (if applicable)',
    ],
    commonSubjects: ['Mathematics', 'English', 'General Knowledge', 'Current Affairs', 'Physical Fitness'],
  },
  'State PSC': {
    commonBooks: [
      { title: 'Indian Polity', author: 'M. Laxmikanth', subject: 'Polity' },
      { title: 'Indian Economy', author: 'Ramesh Singh', subject: 'Economy' },
      { title: 'NCERT Books (Class 6-12)', author: 'NCERT', subject: 'Foundation' },
      { title: 'State-specific GK book', author: 'Lucent / Arihant (state edition)', subject: 'State GK' },
      { title: 'Certificate Physical and Human Geography', author: 'G.C. Leong', subject: 'Geography' },
    ],
    youtubeChannels: [
      { name: 'StudyIQ', url: 'https://www.youtube.com/@StudyIQIAS', desc: 'State PSC preparation' },
      { name: 'Drishti IAS', url: 'https://www.youtube.com/@DrishtiIASvideos', desc: 'Hindi medium preparation' },
      { name: 'Unacademy State PSC', url: 'https://www.youtube.com/@UnacademyIAS', desc: 'State-specific content' },
    ],
    websites: [
      { name: 'NCERT Textbooks', url: 'https://ncert.nic.in/textbook.php', desc: 'Free foundation textbooks' },
      { name: 'Insights on India', url: 'https://www.insightsonindia.com', desc: 'Current affairs' },
    ],
    generalTips: [
      'State PSC syllabus overlaps 60-70% with UPSC — NCERT foundation is essential.',
      'State-specific history, geography, and economy carry heavy weight. Study your state thoroughly.',
      'Answer writing practice is critical for Mains. Start from Month 3.',
      'Stay updated with state government schemes, policies, and budget.',
      'Prepare with both UPSC and State PSC previous year papers for comprehensive coverage.',
    ],
    studyApproach: [
      'Month 1-3: NCERT foundation + State-specific GK + Daily newspaper',
      'Month 4-6: Reference books + Answer writing + State current affairs',
      'Month 7-9: Mock tests + Previous papers + Intensive revision',
    ],
    commonSubjects: ['General Studies', 'State GK', 'Current Affairs', 'Indian Polity', 'Economy', 'History', 'Geography'],
  },
  Teaching: {
    commonBooks: [
      { title: 'Child Development and Pedagogy', author: 'Arihant / Disha', subject: 'Pedagogy' },
      { title: 'NCERT Books (Class 1-8)', author: 'NCERT', subject: 'Content subjects' },
      { title: 'Environmental Studies', author: 'NCERT', subject: 'EVS' },
      { title: 'Previous Year Papers', author: 'Various publishers', subject: 'Practice' },
    ],
    youtubeChannels: [
      { name: 'Exampur', url: 'https://www.youtube.com/@exampur', desc: 'CTET and teaching exam preparation' },
      { name: 'Adda247 Teaching', url: 'https://www.youtube.com/@adabornindia', desc: 'Free teaching exam classes' },
    ],
    websites: [
      { name: 'CTET Official', url: 'https://ctet.nic.in', desc: 'Official CTET website' },
      { name: 'NCERT Books', url: 'https://ncert.nic.in/textbook.php', desc: 'Content mastery' },
    ],
    generalTips: [
      'Child Development and Pedagogy (CDP) is the most important section — study it thoroughly.',
      'NCERT textbooks (Class 1-8) are the primary source for content-based questions.',
      'Practice previous year CTET/TET papers — questions are often repeated conceptually.',
      'Focus on understanding learning theories, child psychology, and inclusive education.',
      'For language papers, practice both comprehension and pedagogy of language teaching.',
    ],
    studyApproach: [
      'Month 1-2: CDP + NCERT content subjects (Maths, Science, Social Studies)',
      'Month 3: Language papers (Hindi/English) + Environmental Studies',
      'Month 4: Previous year papers + Mock tests + Revision',
    ],
    commonSubjects: ['Child Development & Pedagogy', 'Language I', 'Language II', 'Mathematics', 'Environmental Studies / Science / Social Studies'],
  },
  Police: {
    commonBooks: [
      { title: 'Quantitative Aptitude', author: 'R.S. Aggarwal', subject: 'Maths' },
      { title: 'Verbal & Non-Verbal Reasoning', author: 'R.S. Aggarwal', subject: 'Reasoning' },
      { title: "Lucent's General Knowledge", author: 'Lucent Publications', subject: 'GK' },
      { title: 'State-specific GK', author: 'Various', subject: 'State GK' },
    ],
    youtubeChannels: [
      { name: 'Adda247', url: 'https://www.youtube.com/@adabornindia', desc: 'Police exam preparation' },
      { name: 'Exampur', url: 'https://www.youtube.com/@exampur', desc: 'State police exam classes' },
    ],
    websites: [
      { name: 'SSC Official', url: 'https://ssc.gov.in', desc: 'For central police exams (CPO, GD)' },
      { name: 'Testbook', url: 'https://testbook.com', desc: 'Free mock tests for police exams' },
    ],
    generalTips: [
      'Physical fitness is non-negotiable — start running (5km daily) and exercise from Day 1.',
      'Know the physical standards (height, chest, running time) for your specific exam well in advance.',
      'General Awareness and current affairs carry significant weight in police exams.',
      'Practice basic Maths and Reasoning daily — aim for speed and accuracy.',
      'Stay updated with state-specific news, government schemes, and legal awareness.',
    ],
    studyApproach: [
      'Month 1-2: Physical training + Maths basics + Reasoning + Lucent GK',
      'Month 3-4: Advanced topics + Current affairs + State GK + Continue fitness',
      'Month 5-6: Mock tests + Previous papers + Physical standards practice',
    ],
    commonSubjects: ['General Knowledge / Awareness', 'Reasoning', 'Mathematics', 'Hindi/English', 'Physical Fitness Test'],
  },
};

export function getCategoryContent(category: string): CategoryContent | undefined {
  return categoryContent[category];
}

export interface ExamStage {
  name: string;
  subjects: string[];
  totalMarks: number;
  duration: string;
  type: string;
}

export interface Book {
  title: string;
  author: string;
  subject: string;
  freeLink?: string;
}

export interface Resource {
  name: string;
  type: 'youtube' | 'telegram' | 'website' | 'pdf' | 'app';
  url: string;
  description: string;
}

export interface SyllabusSection {
  subject: string;
  topics: string[];
}

export interface AgeRelaxation {
  category: string;
  relaxation: string;
}

export interface Exam {
  slug: string;
  title: string;
  shortName: string;
  conductingBody: string;
  category: 'UPSC' | 'SSC' | 'Banking' | 'Railway' | 'Defence' | 'State PSC' | 'Teaching' | 'Police';
  level: 'Central' | 'State';
  frequency: string;
  avgVacancies: string;
  salaryRange: string;
  description: string;
  officialWebsite: string;
  minAge: number;
  maxAge: number;
  ageRelaxations: AgeRelaxation[];
  qualification: string;
  examStages: ExamStage[];
  syllabus: SyllabusSection[];
  bestBooks: Book[];
  freeResources: Resource[];
  studyPlan: string[];
  faqs: { question: string; answer: string }[];
  tips: string[];
}

export const exams: Exam[] = [
  {
    slug: 'upsc-ias',
    title: 'UPSC Civil Services (IAS/IPS/IFS)',
    shortName: 'UPSC CSE',
    conductingBody: 'Union Public Service Commission',
    category: 'UPSC',
    level: 'Central',
    frequency: 'Once a year (Notification in February)',
    avgVacancies: '800–1000 posts annually',
    salaryRange: '₹56,100 – ₹2,50,000 per month',
    description: 'The Civil Services Examination (CSE) conducted by UPSC is India\'s most prestigious competitive exam. It recruits officers for the Indian Administrative Service (IAS), Indian Police Service (IPS), Indian Foreign Service (IFS), and 20+ other central services. The exam tests candidates on general studies, aptitude, and optional subjects across three stages.',
    officialWebsite: 'https://upsc.gov.in',
    minAge: 21,
    maxAge: 32,
    ageRelaxations: [
      { category: 'General', relaxation: 'No relaxation (6 attempts)' },
      { category: 'OBC', relaxation: '+3 years (9 attempts)' },
      { category: 'SC/ST', relaxation: '+5 years (unlimited attempts till age limit)' },
      { category: 'PwBD (General)', relaxation: '+10 years (9 attempts)' },
      { category: 'PwBD (OBC)', relaxation: '+13 years (9 attempts)' },
      { category: 'PwBD (SC/ST)', relaxation: '+15 years (unlimited attempts)' },
      { category: 'Ex-Servicemen', relaxation: '+5 years' },
    ],
    qualification: 'Graduation in any discipline from a recognized university. Final year students can also apply.',
    examStages: [
      {
        name: 'Preliminary (Objective)',
        subjects: ['General Studies Paper I (100 questions)', 'CSAT Paper II (80 questions – qualifying)'],
        totalMarks: 200,
        duration: '2 hours per paper',
        type: 'MCQ (Objective)',
      },
      {
        name: 'Mains (Descriptive)',
        subjects: [
          'Essay (250 marks)',
          'GS Paper I – Indian Heritage, History, Geography (250 marks)',
          'GS Paper II – Governance, Constitution, Polity (250 marks)',
          'GS Paper III – Technology, Economy, Environment (250 marks)',
          'GS Paper IV – Ethics, Integrity, Aptitude (250 marks)',
          'Optional Paper I (250 marks)',
          'Optional Paper II (250 marks)',
          'Compulsory Indian Language (qualifying)',
          'English Language (qualifying)',
        ],
        totalMarks: 1750,
        duration: '3 hours per paper',
        type: 'Descriptive (Written)',
      },
      {
        name: 'Interview / Personality Test',
        subjects: ['Personality, awareness, leadership, communication'],
        totalMarks: 275,
        duration: '30-45 minutes',
        type: 'Interview',
      },
    ],
    syllabus: [
      {
        subject: 'General Studies I (Prelims & Mains)',
        topics: [
          'Indian History – Ancient, Medieval, Modern',
          'Indian National Movement and Freedom Struggle',
          'Post-independence India – Consolidation & Reorganization',
          'World History – 18th century onwards',
          'Indian Society – Features, Diversity, Social Issues',
          'Geography – Physical, Indian, World',
          'Art & Culture – Indian Architecture, Dance, Music, Literature',
        ],
      },
      {
        subject: 'General Studies II',
        topics: [
          'Indian Constitution – Features, Amendments, Basic Structure',
          'Functions of Parliament and State Legislatures',
          'Governance – Transparency, Accountability, E-governance',
          'Statutory & Regulatory Bodies',
          'Government Policies & Schemes for various sections',
          'Social Justice – Welfare schemes, Institutions',
          'International Relations – India & Neighbors, Bilateral/Global groupings',
        ],
      },
      {
        subject: 'General Studies III',
        topics: [
          'Indian Economy – Planning, Mobilization of Resources',
          'Inclusive Growth & Budgeting',
          'Agriculture – Issues, Farm subsidies, MSP, PDS',
          'Food Processing & Related Industries',
          'Science & Technology – Developments, Space, Biotechnology',
          'Environment & Ecology – Biodiversity, Climate Change',
          'Disaster Management',
          'Internal Security – Linkages of organized crime with terrorism',
        ],
      },
      {
        subject: 'General Studies IV (Ethics)',
        topics: [
          'Ethics and Human Interface',
          'Attitude – Content, Structure, Function',
          'Aptitude and Foundational Values for Civil Service',
          'Emotional Intelligence and its Utility',
          'Contributions of Moral Thinkers from India and World',
          'Public/Civil Service Values – Integrity, Impartiality, Objectivity',
          'Case Studies on ethical dilemmas',
        ],
      },
      {
        subject: 'CSAT (Paper II – Qualifying)',
        topics: [
          'Comprehension & Interpersonal Skills',
          'Logical Reasoning & Analytical Ability',
          'Decision Making & Problem Solving',
          'General Mental Ability',
          'Basic Numeracy & Data Interpretation',
        ],
      },
    ],
    bestBooks: [
      { title: 'Indian Polity', author: 'M. Laxmikanth', subject: 'Polity' },
      { title: 'India\'s Struggle for Independence', author: 'Bipan Chandra', subject: 'Modern History' },
      { title: 'Indian Art and Culture', author: 'Nitin Singhania', subject: 'Art & Culture' },
      { title: 'Certificate Physical and Human Geography', author: 'G.C. Leong', subject: 'Geography' },
      { title: 'Indian Economy', author: 'Ramesh Singh', subject: 'Economy' },
      { title: 'NCERT Books (Class 6-12)', author: 'NCERT', subject: 'Foundation', freeLink: 'https://ncert.nic.in/textbook.php' },
      { title: 'Economic Survey (Latest)', author: 'Ministry of Finance', subject: 'Economy', freeLink: 'https://www.indiabudget.gov.in/economicsurvey/' },
      { title: 'Environment by Shankar IAS', author: 'Shankar IAS', subject: 'Environment' },
      { title: 'Ethics, Integrity and Aptitude', author: 'Lexicon Publications', subject: 'Ethics' },
    ],
    freeResources: [
      { name: 'NCERT Textbooks (Class 6-12)', type: 'website', url: 'https://ncert.nic.in/textbook.php', description: 'Foundation for all GS subjects – absolutely essential and free' },
      { name: 'Insights IAS', type: 'website', url: 'https://www.insightsonindia.com', description: 'Daily current affairs, editorial analysis, and free study materials' },
      { name: 'Forum IAS Blog', type: 'website', url: 'https://blog.forumias.com', description: 'Answer writing practice and mains-focused content' },
      { name: 'Unacademy UPSC (Free)', type: 'youtube', url: 'https://www.youtube.com/@UnacademyIAS', description: 'Free lectures by top educators on all GS subjects' },
      { name: 'StudyIQ IAS', type: 'youtube', url: 'https://www.youtube.com/@StudyIQIAS', description: 'Current affairs and subject-wise lectures' },
      { name: 'Drishti IAS', type: 'youtube', url: 'https://www.youtube.com/@DrishtiIASvideos', description: 'Hindi medium lectures and daily current affairs' },
      { name: 'PRS Legislative Research', type: 'website', url: 'https://prsindia.org', description: 'Bills, laws, and policy analysis – excellent for Polity and Governance' },
      { name: 'UPSC Previous Year Papers', type: 'website', url: 'https://upsc.gov.in/examinations/previous-question-papers', description: 'Official previous year question papers from UPSC website' },
    ],
    studyPlan: [
      'Month 1-2: Complete all NCERT books (Class 6-12) for History, Geography, Polity, Economy, Science. Make short notes.',
      'Month 3-4: Start standard reference books – Laxmikanth (Polity), Bipan Chandra (History), Ramesh Singh (Economy). Read one topic per day.',
      'Month 5-6: Cover Environment (Shankar IAS), Art & Culture (Nitin Singhania). Start your Optional subject simultaneously.',
      'Month 7-8: Begin daily newspaper reading (The Hindu / Indian Express). Make current affairs notes weekly. Start answer writing practice.',
      'Month 9-10: Revise all subjects. Solve previous 10 years question papers. Take weekly mock tests for Prelims.',
      'Month 11-12: Intensive revision. Daily 2 mock tests. Focus on weak areas. Practice essay writing for Mains.',
    ],
    faqs: [
      { question: 'How many attempts are allowed for UPSC CSE?', answer: 'General category candidates get 6 attempts, OBC get 9 attempts, and SC/ST candidates have unlimited attempts until the age limit. The attempt counts from the Preliminary exam stage.' },
      { question: 'Can I write UPSC Mains in Hindi?', answer: 'Yes, you can write the Mains examination in any of the languages listed in the 8th Schedule of the Constitution, including Hindi. The Prelims exam is available in both English and Hindi.' },
      { question: 'Is coaching necessary for UPSC preparation?', answer: 'No, coaching is not mandatory. Many toppers have cleared UPSC through self-study using NCERT books, standard reference books, and free online resources. Coaching can help with structure and guidance, but self-discipline and consistent study are more important.' },
      { question: 'What is the best optional subject for UPSC?', answer: 'There is no single best optional. Choose based on your graduation background, interest, availability of study material, and past success rates. Popular optionals include Sociology, Geography, Public Administration, Political Science, and History.' },
      { question: 'How long does it take to prepare for UPSC?', answer: 'Most successful candidates prepare for 12-18 months with dedicated study of 6-8 hours daily. Some clear it in their first attempt with 8-10 months of focused preparation, while others may take 2-3 attempts.' },
    ],
    tips: [
      'Start with NCERTs – they build a strong foundation that no reference book can replace.',
      'Read the newspaper daily from Day 1. Current affairs carry 30-40% weight in Prelims.',
      'Practice answer writing for Mains from Month 3 onwards. Writing skill matters as much as knowledge.',
      'Revise regularly – make a schedule to revise each subject at least once every 2 weeks.',
      'Solve previous year papers extensively. They reveal exam patterns and important topics.',
      'Join a test series for both Prelims and Mains. Regular mock tests improve time management.',
    ],
  },
  {
    slug: 'ssc-cgl',
    title: 'SSC CGL 2026 – Complete Preparation Guide',
    shortName: 'SSC CGL',
    conductingBody: 'Staff Selection Commission',
    category: 'SSC',
    level: 'Central',
    frequency: 'Once a year (Notification: April 2026 | Tier 1: May–June 2026)',
    avgVacancies: '14,000–15,000 posts (SSC CGL 2025 had 14,582 vacancies)',
    salaryRange: '₹25,500 – ₹1,51,100 per month (Pay Level 4 to 10)',
    description: 'SSC CGL (Staff Selection Commission Combined Graduate Level) is India\'s largest graduate-level government recruitment exam. With over 20 lakh aspirants annually competing for ~14,000 posts, it offers careers as Income Tax Inspector, CBI Sub Inspector, Customs Inspector, Auditor (CAG/CGDA), Assistant Section Officer (MEA/CSS/IB), Statistical Investigator, and many more Group B & C central government posts.',
    officialWebsite: 'https://ssc.gov.in',
    minAge: 18,
    maxAge: 32,
    ageRelaxations: [
      { category: 'General', relaxation: 'No relaxation' },
      { category: 'OBC', relaxation: '+3 years' },
      { category: 'SC/ST', relaxation: '+5 years' },
      { category: 'PwBD', relaxation: '+10 years (General), +13 (OBC), +15 (SC/ST)' },
      { category: 'Ex-Servicemen', relaxation: '+3 years after deduction of military service' },
    ],
    qualification: 'Bachelor\'s Degree in any discipline from a recognized university. Some posts require specific degrees (e.g., Statistics for Statistical Investigator).',
    examStages: [
      {
        name: 'Tier I – Computer Based Examination (Qualifying)',
        subjects: [
          'General Intelligence & Reasoning – 25 questions, 50 marks',
          'General Awareness – 25 questions, 50 marks',
          'Quantitative Aptitude – 25 questions, 50 marks',
          'English Language & Comprehension – 25 questions, 50 marks',
        ],
        totalMarks: 200,
        duration: '60 minutes (80 min for PwBD candidates)',
        type: 'MCQ – Objective | Negative marking: –0.50 per wrong answer | Bilingual (except English section)',
      },
      {
        name: 'Tier II – Computer Based Examination (Merit Deciding)',
        subjects: [
          'Paper I – Section I: Mathematical Abilities (Part A: 30 Qs, 90 marks) + Reasoning & General Intelligence (Part B: 30 Qs, 90 marks)',
          'Paper I – Section II: English Language & Comprehension (Part A: 45 Qs, 135 marks) + General Awareness (Part B: 25 Qs, 75 marks)',
          'Paper I – Section III: Computer Knowledge Module (Part A: 20 Qs, 60 marks) | Qualifying: DEST (Data Entry Speed Test)',
          'Paper II (JSO posts only): Statistics – 100 questions, 200 marks, 2 hours',
        ],
        totalMarks: 450,
        duration: 'Session I: 2 hrs 15 min | Session II: 2 hrs 15 min + 15 min DEST',
        type: 'MCQ – Objective | Negative: –1 mark (Section I & II) | –0.50 (Section III) | DEST is qualifying only',
      },
    ],
    syllabus: [
      {
        subject: 'Quantitative Aptitude',
        topics: [
          'Number Systems, HCF & LCM',
          'Percentage, Ratio & Proportion',
          'Profit & Loss, Discount, Simple & Compound Interest',
          'Average, Time & Work, Time Speed Distance',
          'Algebra – Basic Identities, Linear Equations',
          'Geometry – Triangles, Circles, Quadrilaterals',
          'Mensuration – Area, Volume, Surface Area',
          'Trigonometry – Heights & Distances, Identities',
          'Data Interpretation – Bar, Pie, Line, Table charts',
        ],
      },
      {
        subject: 'General Intelligence & Reasoning',
        topics: [
          'Analogies, Classification, Series',
          'Coding-Decoding, Direction Sense',
          'Blood Relations, Syllogisms',
          'Venn Diagrams, Seating Arrangement',
          'Matrix, Word Formation, Missing Numbers',
          'Statement & Conclusions, Non-Verbal Reasoning',
          'Paper Folding, Cube & Dice, Mirror/Water Image',
        ],
      },
      {
        subject: 'English Language',
        topics: [
          'Reading Comprehension, Cloze Test',
          'Vocabulary – Synonyms, Antonyms, One Word Substitution, Idioms & Phrases',
          'Grammar – Error Spotting, Sentence Improvement, Active/Passive Voice, Direct/Indirect Speech',
          'Fill in the Blanks, Spelling Correction',
          'Para Jumbles, Sentence Rearrangement',
        ],
      },
      {
        subject: 'General Awareness',
        topics: [
          'Current Affairs – India and World (last 6 months)',
          'Indian History – Ancient, Medieval, Modern, Freedom Struggle',
          'Geography – India & World, Physical, Environmental',
          'Indian Polity – Constitution, Government, Judiciary',
          'Economy – Budget, Banking, Finance, Five Year Plans',
          'General Science – Physics, Chemistry, Biology basics',
          'Static GK – Awards, Books, Sports, Important Days',
        ],
      },
    ],
    bestBooks: [
      { title: 'Quantitative Aptitude for Competitive Exams', author: 'R.S. Aggarwal', subject: 'Maths' },
      { title: 'SSC Mathematics (Chapterwise)', author: 'Rakesh Yadav', subject: 'Maths' },
      { title: 'A Modern Approach to Verbal & Non-Verbal Reasoning', author: 'R.S. Aggarwal', subject: 'Reasoning' },
      { title: 'Objective General English', author: 'S.P. Bakshi', subject: 'English' },
      { title: 'Word Power Made Easy', author: 'Norman Lewis', subject: 'English Vocabulary' },
      { title: 'Lucent\'s General Knowledge', author: 'Lucent Publications', subject: 'General Awareness' },
      { title: 'SSC CGL Previous Year Papers', author: 'Kiran Prakashan', subject: 'Practice', freeLink: 'https://ssc.nic.in' },
    ],
    freeResources: [
      { name: 'SSC Official Previous Papers', type: 'website', url: 'https://ssc.nic.in', description: 'Official question papers and answer keys from SSC website' },
      { name: 'Adda247 (SSC CGL Free)', type: 'youtube', url: 'https://www.youtube.com/@adabornindia', description: 'Free video lectures for all SSC CGL subjects' },
      { name: 'Unacademy SSC', type: 'youtube', url: 'https://www.youtube.com/@UnacademySSCExams', description: 'Free SSC preparation classes by top educators' },
      { name: 'Testbook Free Mocks', type: 'website', url: 'https://testbook.com/ssc-cgl', description: 'Free mock tests and practice questions' },
      { name: 'Rakesh Yadav Maths (YouTube)', type: 'youtube', url: 'https://www.youtube.com/@RAKESHYADAVREADERSPUBLICATI', description: 'Mathematics shortcuts and problem solving' },
      { name: 'Pinnacle SSC', type: 'website', url: 'https://ssccglpinnacle.com', description: 'Free study material and mock tests' },
    ],
    studyPlan: [
      'Month 1: Foundation – Start with Maths basics (Number System, Percentage, Ratio). Read Lucent GK 1 hour daily.',
      'Month 2: Build on Maths (Algebra, Geometry, Mensuration). Start Reasoning – Series, Analogies, Coding-Decoding.',
      'Month 3: English Grammar – Error spotting, sentence improvement. Continue Maths advanced topics (Trigonometry, DI).',
      'Month 4: Complete all Reasoning topics. Start English vocabulary building (learn 20 words daily from Norman Lewis).',
      'Month 5: Full-length mock tests – 1 per day. Analyze mistakes and revise weak areas. Current affairs revision.',
      'Month 6: Intensive revision of all subjects. Solve previous 5 years papers. 2 mock tests daily. Speed improvement.',
    ],
    faqs: [
      { question: 'What posts can I get through SSC CGL 2026?', answer: 'SSC CGL 2026 offers posts including: Income Tax Inspector (CBDT), Inspector of Central Excise & Customs (CBIC), Sub Inspector (CBI/NIA), Assistant Section Officer (MEA/CSS/IB/AFHQ), Assistant Audit Officer & Assistant Accounts Officer (CAG – Group B Gazetted), Auditor and Accountant (CAG/CGDA/CGA), Tax Assistant, Upper Division Clerk, Statistical Investigator Grade II, and Research Assistant (NIC). Post allocation is based on Tier 2 merit rank and your stated preferences.' },
      { question: 'Is there an interview in SSC CGL?', answer: 'No. The interview was removed from SSC CGL in 2016. Your final rank is determined entirely by Tier II marks (Paper I, Sections I–III). The DEST (typing test) is compulsory for all posts but is only qualifying — it does not add to your score.' },
      { question: 'How many times can I attempt SSC CGL?', answer: 'There is no limit on the number of attempts. You can appear every year as long as you meet the age criteria. The age is calculated as on August 1 of the exam year.' },
      { question: 'Is Tier 1 score counted in the final merit?', answer: 'No. Tier 1 is purely qualifying. Only 15–20 times the number of vacancies are shortlisted from Tier 1 to appear for Tier 2. Your final rank and post allocation are based only on Tier 2 Paper I marks.' },
      { question: 'What is the SSC CGL 2026 application fee?', answer: 'The application fee is ₹100 for General/OBC/EWS male candidates. Women candidates, SC, ST, PwBD, and Ex-Servicemen are exempted from the fee. Payment can be made via UPI, net banking, or debit/credit card through the SSC OTR portal.' },
      { question: 'What is the salary of an Income Tax Inspector (SSC CGL)?', answer: 'An Income Tax Inspector starts at Pay Level 7 (₹44,900 basic pay). With DA, HRA, TA, and other allowances, the gross in-hand salary is approximately ₹65,000–₹75,000 per month in major cities. Annual increment and promotion opportunities make it one of the most sought-after SSC CGL posts.' },
    ],
    tips: [
      'Tier 2 decides everything — invest 60% of your preparation time on Maths and English since they form Sections I and II (360 out of 450 marks).',
      'Practice 40–50 Maths questions daily with a timer. SSC Maths rewards speed and accuracy equally.',
      'Read newspaper editorials for 30 minutes every day — it sharpens comprehension and builds vocabulary passively.',
      'For General Awareness: revise Lucent GK once cover-to-cover, then shift to monthly current affairs capsules for the last 6 months.',
      'Take at least one full-length mock test per week from Month 3 onwards. Analyze every mistake before moving on.',
      'The Computer Knowledge section (Section III) is evaluated only if you clear the Section I + II cutoff — do not ignore it.',
      'DEST preparation: practice typing at 2,000 key depressions in 15 minutes using free online tools from Month 4.',
    ],
  },
  {
    slug: 'ibps-po',
    title: 'IBPS Probationary Officer (PO)',
    shortName: 'IBPS PO',
    conductingBody: 'Institute of Banking Personnel Selection',
    category: 'Banking',
    level: 'Central',
    frequency: 'Once a year (Notification in August)',
    avgVacancies: '3,000–6,000 posts annually',
    salaryRange: '₹48,480 – ₹85,920 per month (basic, revised under 12th Bipartite 2025)',
    description: 'IBPS PO exam recruits Probationary Officers for 11 public sector banks in India (excluding SBI). It is one of the most sought-after banking exams offering a stable career with good salary, perks, and growth opportunities. POs are the backbone of banking operations and can rise to the position of General Manager.',
    officialWebsite: 'https://www.ibps.in',
    minAge: 20,
    maxAge: 30,
    ageRelaxations: [
      { category: 'General', relaxation: 'No relaxation' },
      { category: 'OBC', relaxation: '+3 years' },
      { category: 'SC/ST', relaxation: '+5 years' },
      { category: 'PwBD', relaxation: '+10 years' },
      { category: 'Ex-Servicemen/Disabled Ex-SM', relaxation: '+5 years (Ex-SM), +10 years (Disabled Ex-SM)' },
    ],
    qualification: 'Graduation in any discipline from a recognized university. Computer literacy is desirable. Working knowledge of the Official Language of the State/UT is required.',
    examStages: [
      {
        name: 'Preliminary Exam',
        subjects: ['English Language (30 Qs)', 'Quantitative Aptitude (35 Qs)', 'Reasoning Ability (35 Qs)'],
        totalMarks: 100,
        duration: '1 hour (20 min per section)',
        type: 'MCQ (Objective) – Sectional Timing – Negative 0.25',
      },
      {
        name: 'Mains Exam',
        subjects: [
          'Reasoning & Computer Aptitude (45 Qs – 60 marks)',
          'English Language (35 Qs – 40 marks)',
          'Data Analysis & Interpretation (35 Qs – 60 marks)',
          'General/Economy/Banking Awareness (40 Qs – 40 marks)',
        ],
        totalMarks: 200,
        duration: '3 hours (sectional timing applies)',
        type: 'MCQ – Descriptive English (Letter + Essay – 25 marks) also included',
      },
      {
        name: 'Interview',
        subjects: ['Banking knowledge, Communication, Personality, General Awareness'],
        totalMarks: 100,
        duration: '15-20 minutes',
        type: 'Personal Interview',
      },
    ],
    syllabus: [
      {
        subject: 'Quantitative Aptitude / Data Interpretation',
        topics: [
          'Simplification, Approximation, Number Series',
          'Data Interpretation – Tables, Charts, Graphs, Caselets',
          'Percentage, Average, Ratio & Proportion',
          'Profit & Loss, Simple & Compound Interest',
          'Time & Work, Pipe & Cistern',
          'Speed, Distance & Time, Boats & Streams, Trains',
          'Permutation & Combination, Probability',
          'Mensuration, Data Sufficiency',
        ],
      },
      {
        subject: 'Reasoning & Computer Aptitude',
        topics: [
          'Seating Arrangement (Linear, Circular, Square)',
          'Puzzles (Floor, Box, Scheduling)',
          'Syllogisms, Coding-Decoding',
          'Blood Relations, Direction Sense, Order & Ranking',
          'Inequality (coded), Machine Input-Output',
          'Data Sufficiency, Logical Reasoning',
          'Computer – Hardware, Software, Networking basics, OS, MS Office, Internet',
        ],
      },
      {
        subject: 'English Language',
        topics: [
          'Reading Comprehension (2-3 passages)',
          'Cloze Test, Fill in the Blanks',
          'Para Jumbles, Sentence Rearrangement',
          'Error Detection, Sentence Improvement',
          'Word Usage, Vocabulary-based questions',
          'Descriptive Writing – Letter writing (formal) and Essay (250 words)',
        ],
      },
      {
        subject: 'General/Banking/Economy Awareness',
        topics: [
          'Banking – RBI policies, Banking terms, Types of accounts, NPA, Basel norms',
          'Financial Awareness – Budget, Financial institutions, Insurance, Stock Market',
          'Current Affairs – Last 6 months, National & International',
          'Static GK – Countries, Capitals, Currencies, Awards, Important Days',
          'Government Schemes – Flagship programs, Financial inclusion schemes',
        ],
      },
    ],
    bestBooks: [
      { title: 'Quantitative Aptitude for Banking', author: 'Arun Sharma', subject: 'Quant' },
      { title: 'A New Approach to Reasoning', author: 'B.S. Sijwali & Indu Sijwali', subject: 'Reasoning' },
      { title: 'Objective English for Competitive Exams', author: 'Hari Mohan Prasad', subject: 'English' },
      { title: 'Banking Awareness', author: 'Arihant Publications', subject: 'Banking' },
      { title: 'Computer Knowledge for Bank Exams', author: 'Kiran Prakashan', subject: 'Computer' },
    ],
    freeResources: [
      { name: 'IBPS Official Mock Tests', type: 'website', url: 'https://www.ibps.in', description: 'Free official mock tests released before every exam' },
      { name: 'Oliveboard Free Mocks', type: 'website', url: 'https://www.oliveboard.in/ibps-po/', description: 'Free mock tests and daily practice questions' },
      { name: 'Adda247 Banking', type: 'youtube', url: 'https://www.youtube.com/@adabornindia', description: 'Free banking exam preparation videos' },
      { name: 'Study Smart (Testbook)', type: 'youtube', url: 'https://www.youtube.com/@testabornindia', description: 'Free video classes for banking exams' },
      { name: 'RBI Official Website', type: 'website', url: 'https://www.rbi.org.in', description: 'For banking awareness – RBI policies, monetary policy, and reports' },
      { name: 'GK Today', type: 'website', url: 'https://www.gktoday.in', description: 'Daily current affairs and banking awareness articles' },
    ],
    studyPlan: [
      'Month 1: Start with Quant basics – Number series, Simplification, Percentage, Ratio. Begin daily current affairs reading.',
      'Month 2: Advanced Quant – DI (all types), Time & Work, CI/SI. Start Reasoning – Seating Arrangement, Puzzles.',
      'Month 3: Complete Reasoning – Syllogisms, Coding, Blood Relations. English – RC practice and Grammar.',
      'Month 4: Banking Awareness deep dive – RBI policies, banking terms, financial awareness. Computer basics.',
      'Month 5: Daily mock tests. Analyze every test thoroughly. Focus on improving speed and accuracy.',
      'Month 6: Revision + 2 mocks per day. Practice descriptive English (letter and essay writing daily).',
    ],
    faqs: [
      { question: 'Which banks recruit through IBPS PO?', answer: 'IBPS PO recruits for 11 public sector banks including Bank of Baroda, Punjab National Bank, Canara Bank, Union Bank of India, Indian Overseas Bank, Bank of India, Central Bank of India, UCO Bank, Bank of Maharashtra, Indian Bank, and Punjab & Sind Bank. SBI has its own separate exam.' },
      { question: 'Is there a descriptive paper in IBPS PO Mains?', answer: 'Yes, IBPS PO Mains includes a descriptive English paper of 25 marks where you need to write a letter (formal/informal) and an essay. This is conducted immediately after the objective test and lasts 30 minutes.' },
      { question: 'Can I apply if I have backlogs?', answer: 'You need a completed graduation degree at the time of applying. If you have cleared all backlogs and received your degree/provisional certificate, you are eligible.' },
    ],
    tips: [
      'Sectional timing is the key challenge – practice each section strictly within the time limit.',
      'For Reasoning, puzzles and seating arrangements carry 60-70% marks. Master them first.',
      'Read The Hindu editorial daily for English and banking awareness simultaneously.',
      'For DI, learn to approximate. Most banking DI questions can be solved faster with estimation.',
      'Practice descriptive writing daily – even 10 minutes of letter/essay practice helps.',
      'Keep a banking awareness notebook – note every RBI policy change, merger, and new scheme.',
    ],
  },
  {
    slug: 'rrb-ntpc',
    title: 'RRB NTPC (Non-Technical Popular Categories)',
    shortName: 'RRB NTPC',
    conductingBody: 'Railway Recruitment Boards',
    category: 'Railway',
    level: 'Central',
    frequency: 'Every 2-3 years (Irregular)',
    avgVacancies: '25,000–35,000 posts',
    salaryRange: '₹19,900 – ₹92,300 per month (Pay Level 2 to 6)',
    description: 'RRB NTPC recruits candidates for various non-technical posts in Indian Railways – the world\'s largest employer. Posts include Station Master, Goods Guard, Commercial Apprentice, Clerk, Junior Account Assistant, Typist, and Traffic Assistant among others. Railway jobs offer excellent perks including free rail travel, housing, medical benefits, and pension.',
    officialWebsite: 'https://www.rrbcdg.gov.in',
    minAge: 18,
    maxAge: 33,
    ageRelaxations: [
      { category: 'General', relaxation: 'No relaxation' },
      { category: 'OBC', relaxation: '+3 years' },
      { category: 'SC/ST', relaxation: '+5 years' },
      { category: 'PwBD', relaxation: '+10 years (General), +13 (OBC), +15 (SC/ST)' },
    ],
    qualification: '12th Pass (for some posts) to Graduation (for most posts). Varies by post – check notification for specific requirements.',
    examStages: [
      {
        name: 'CBT-1 (First Stage)',
        subjects: ['Mathematics (30 Qs)', 'General Intelligence & Reasoning (30 Qs)', 'General Awareness (40 Qs)'],
        totalMarks: 100,
        duration: '1 hour 30 minutes',
        type: 'MCQ – Negative marking 1/3rd',
      },
      {
        name: 'CBT-2 (Second Stage)',
        subjects: ['Mathematics (35 Qs)', 'General Intelligence & Reasoning (35 Qs)', 'General Awareness (30 Qs)'],
        totalMarks: 120,
        duration: '1 hour 30 minutes',
        type: 'MCQ – Negative marking 1/3rd',
      },
      {
        name: 'Typing Skill Test / CBAT',
        subjects: ['Computer Based Aptitude Test (for specific posts) OR Typing Test'],
        totalMarks: 0,
        duration: 'Varies',
        type: 'Qualifying',
      },
    ],
    syllabus: [
      {
        subject: 'Mathematics',
        topics: [
          'Number System, BODMAS, Fractions & Decimals',
          'LCM & HCF, Ratio & Proportion, Percentage',
          'Simple & Compound Interest, Profit & Loss',
          'Time & Work, Time & Distance, Trains, Boats',
          'Algebra, Geometry, Mensuration, Trigonometry',
          'Data Interpretation – Tables, Charts, Graphs',
        ],
      },
      {
        subject: 'General Intelligence & Reasoning',
        topics: [
          'Analogies, Number & Alphabetical Series',
          'Coding-Decoding, Mathematical Operations',
          'Venn Diagrams, Syllogisms',
          'Puzzles, Seating Arrangement',
          'Statement-Conclusion, Blood Relations',
          'Direction Test, Ranking, Calendar, Clock',
          'Non-verbal – Figure completion, Mirror image, Cube & Dice',
        ],
      },
      {
        subject: 'General Awareness',
        topics: [
          'Indian History – Ancient, Medieval, Modern (focus on Freedom Struggle)',
          'Indian Geography & World Geography',
          'Indian Polity – Constitution, Government Structure',
          'Indian Economy – Basic concepts, Budget, Banking',
          'General Science – Physics, Chemistry, Biology (up to Class 10)',
          'Current Affairs – Last 12 months',
          'Computer Basics, Railway-specific questions',
          'Awards, Sports, Books, Important Days, Space & Defense',
        ],
      },
    ],
    bestBooks: [
      { title: 'Fast Track Objective Arithmetic', author: 'Rajesh Verma', subject: 'Maths' },
      { title: 'Quantitative Aptitude', author: 'R.S. Aggarwal', subject: 'Maths' },
      { title: 'Verbal & Non-Verbal Reasoning', author: 'R.S. Aggarwal', subject: 'Reasoning' },
      { title: 'Lucent\'s General Knowledge', author: 'Lucent Publications', subject: 'GK' },
      { title: 'Lucent\'s General Science', author: 'Lucent Publications', subject: 'Science' },
      { title: 'RRB NTPC Previous Year Papers', author: 'Various', subject: 'Practice', freeLink: 'https://www.rrbcdg.gov.in' },
    ],
    freeResources: [
      { name: 'RRB Official Website', type: 'website', url: 'https://www.rrbcdg.gov.in', description: 'Official notifications, previous papers, and admit cards' },
      { name: 'Wifistudy (Unacademy)', type: 'youtube', url: 'https://www.youtube.com/@wabornindia', description: 'Free daily classes for Railway exams' },
      { name: 'RailwayExamGuru', type: 'youtube', url: 'https://www.youtube.com/@Raabornindia', description: 'Railway-specific preparation videos' },
      { name: 'Testbook RRB NTPC', type: 'website', url: 'https://testbook.com/rrb-ntpc', description: 'Free mock tests and quizzes' },
    ],
    studyPlan: [
      'Month 1: Maths foundation – Number system, Percentage, Ratio, Average. Read Lucent GK Chapter 1-5.',
      'Month 2: Maths – Profit/Loss, CI/SI, Time & Work/Distance. Reasoning – Series, Analogies, Coding.',
      'Month 3: Complete Maths advanced topics. Reasoning – Puzzles, Syllogisms, Blood Relations.',
      'Month 4: General Science complete revision. Current affairs daily reading. Static GK from Lucent.',
      'Month 5: Full mock tests daily. Previous year papers. Analyze and strengthen weak areas.',
      'Month 6: Revision sprint. 2-3 mock tests per day. Focus on General Awareness – it carries maximum weight.',
    ],
    faqs: [
      { question: 'Is RRB NTPC for graduate or 12th pass?', answer: 'RRB NTPC has posts for both 12th pass and graduates. Posts like Clerk, Typist, and Junior Time Keeper require 12th pass, while Station Master, Goods Guard, and Commercial Apprentice require graduation.' },
      { question: 'What are the perks of Railway jobs?', answer: 'Railway employees get free rail travel for self and family, subsidized housing or HRA, medical facilities, pension, LTC, children education allowance, and various other benefits. The perks often make the effective salary much higher than the stated salary.' },
      { question: 'Is there negative marking in RRB NTPC?', answer: 'Yes, there is negative marking of 1/3rd of the marks allotted to the question for each wrong answer in both CBT-1 and CBT-2.' },
    ],
    tips: [
      'General Awareness is the highest-scoring section and carries maximum weight. Invest 40% of your time here.',
      'Focus on static GK and General Science – they are predictable and score-boosting.',
      'Railway-specific questions appear every year – learn about Indian Railways history, zones, and recent developments.',
      'Practice Maths with a timer. In the exam, you get less than 2 minutes per question.',
      'Solve at least 5 years of previous papers. RRB repeats concepts and even similar questions.',
    ],
  },
  {
    slug: 'sbi-po',
    title: 'SBI Probationary Officer (PO)',
    shortName: 'SBI PO',
    conductingBody: 'State Bank of India',
    category: 'Banking',
    level: 'Central',
    frequency: 'Once a year (Notification usually in October/November)',
    avgVacancies: '1,500–2,500 posts annually',
    salaryRange: '₹41,960 – ₹85,920 per month (basic ₹41,960 with increments)',
    description: 'SBI PO is one of the most prestigious banking exams in India. As a Probationary Officer in the State Bank of India – the country\'s largest public sector bank – you get excellent salary, perks, and career growth. SBI PO is known for its moderately difficult exam pattern and is a gateway to a rewarding career in banking.',
    officialWebsite: 'https://sbi.co.in/web/careers',
    minAge: 21,
    maxAge: 30,
    ageRelaxations: [
      { category: 'General', relaxation: 'No relaxation' },
      { category: 'OBC', relaxation: '+3 years' },
      { category: 'SC/ST', relaxation: '+5 years' },
      { category: 'PwBD', relaxation: '+10 years' },
    ],
    qualification: 'Graduation in any discipline from a recognized university. Candidates with Integrated Dual Degree (IDD) are also eligible.',
    examStages: [
      {
        name: 'Preliminary Exam',
        subjects: ['English Language (30 Qs – 30 marks)', 'Quantitative Aptitude (35 Qs – 35 marks)', 'Reasoning Ability (35 Qs – 35 marks)'],
        totalMarks: 100,
        duration: '1 hour (20 min per section)',
        type: 'MCQ – Sectional Timing – Negative 0.25',
      },
      {
        name: 'Mains Exam',
        subjects: [
          'Reasoning & Computer Aptitude (45 Qs – 60 marks)',
          'Data Analysis & Interpretation (35 Qs – 60 marks)',
          'General/Economy/Banking Awareness (40 Qs – 40 marks)',
          'English Language (35 Qs – 40 marks)',
          'Descriptive Paper – English (Letter + Essay – 50 marks)',
        ],
        totalMarks: 250,
        duration: '3 hours (objective) + 30 min (descriptive)',
        type: 'MCQ + Descriptive – Negative 0.25',
      },
      {
        name: 'Group Exercise & Interview',
        subjects: ['Group Discussion, Case Study Discussion, Personal Interview'],
        totalMarks: 50,
        duration: '30-45 minutes total',
        type: 'GD + Interview',
      },
    ],
    syllabus: [
      {
        subject: 'Quantitative Aptitude / Data Analysis',
        topics: [
          'Number Series, Simplification, Approximation',
          'Data Interpretation – Bar, Pie, Line, Tabular, Caselet, Radar',
          'Percentage, Average, Ratio & Proportion',
          'Profit & Loss, SI & CI, Partnership',
          'Time & Work, Pipe & Cistern',
          'Speed, Distance & Time, Trains, Boats & Streams',
          'Permutation, Combination & Probability',
          'Mensuration, Quadratic Equations, Data Sufficiency',
        ],
      },
      {
        subject: 'Reasoning & Computer Aptitude',
        topics: [
          'Puzzles – Floor based, Box, Scheduling, Comparison',
          'Seating Arrangement – Linear, Circular, Square, Rectangular',
          'Syllogisms (Direct + Reverse), Coding-Decoding (new pattern)',
          'Blood Relations, Direction & Distance',
          'Inequality (Direct + Coded), Input-Output',
          'Order & Ranking, Data Sufficiency',
          'Computer – Basics, Hardware, Software, Networking, MS Office, Shortcuts',
        ],
      },
      {
        subject: 'English Language',
        topics: [
          'Reading Comprehension (long passages – 2 sets)',
          'Cloze Test, Error Spotting (new pattern)',
          'Sentence Rearrangement, Para Jumbles',
          'Phrase Replacement, Double Fillers',
          'Word Usage, Vocabulary',
          'Descriptive – Formal Letter + Essay (250-300 words each)',
        ],
      },
      {
        subject: 'General/Banking/Economy Awareness',
        topics: [
          'SBI History, Achievements, Products & Services',
          'Banking Terms, Types of Accounts, NPA, CRAR',
          'RBI – Monetary Policy, Repo Rate, NABARD, SEBI',
          'Government Schemes – PMJDY, MUDRA, Stand Up India etc.',
          'Economy – GDP, Inflation, Budget, Fiscal & Monetary Policy',
          'Current Affairs – Last 6 months (National + International)',
          'Awards, Appointments, Summits, Important Days',
        ],
      },
    ],
    bestBooks: [
      { title: 'Data Interpretation & Data Sufficiency', author: 'Arun Sharma', subject: 'Quant' },
      { title: 'A New Approach to Reasoning', author: 'B.S. Sijwali', subject: 'Reasoning' },
      { title: 'High Level DI & Reasoning for SBI', author: 'Mrunal (YouTube)', subject: 'Quant + Reasoning', freeLink: 'https://www.youtube.com/@MrunalPatel' },
      { title: 'English for Banking Exams', author: 'Adda247', subject: 'English' },
      { title: 'Banking Awareness', author: 'Arihant / Disha', subject: 'Banking' },
    ],
    freeResources: [
      { name: 'SBI Careers Page', type: 'website', url: 'https://sbi.co.in/web/careers', description: 'Official notifications, papers, and admit cards' },
      { name: 'Oliveboard SBI PO Free Mocks', type: 'website', url: 'https://www.oliveboard.in/sbi-po/', description: 'Free mock tests matching actual exam pattern' },
      { name: 'Unacademy Banking', type: 'youtube', url: 'https://www.youtube.com/@UnacademyBanking', description: 'Free classes for SBI PO by top educators' },
      { name: 'Mrunal Patel (Economy & DI)', type: 'youtube', url: 'https://www.youtube.com/@MrunalPatel', description: 'Excellent free lectures on Economy and Data Interpretation' },
      { name: 'GK Today Daily Updates', type: 'website', url: 'https://www.gktoday.in', description: 'Daily current affairs for banking awareness' },
    ],
    studyPlan: [
      'Month 1: Quant basics – Percentage, Ratio, SI/CI. Reasoning – Linear seating arrangement. Start reading economic news daily.',
      'Month 2: Quant – DI (all types, focus on caselets). Reasoning – Circular/Square seating, Floor puzzles.',
      'Month 3: Advanced Reasoning puzzles. English – RC practice daily. Start banking awareness notes.',
      'Month 4: SBI-specific banking knowledge. Computer basics. English – essay and letter writing practice.',
      'Month 5: Daily sectional tests. Focus on speed and accuracy. Deep-dive into current affairs.',
      'Month 6: Full mock tests daily. Previous year papers. GD preparation with peers or online groups.',
    ],
    faqs: [
      { question: 'How is SBI PO different from IBPS PO?', answer: 'SBI PO recruits exclusively for State Bank of India, while IBPS PO recruits for 11 other public sector banks. SBI PO has a separate exam pattern, slightly different syllabus (includes GD in addition to interview), and generally offers a higher starting salary. SBI PO exam is considered slightly harder than IBPS PO.' },
      { question: 'Is there a Group Discussion in SBI PO?', answer: 'Yes, unlike IBPS PO which only has an interview, SBI PO includes a Group Exercise (GE) along with the Personal Interview. The GE + Interview carries 50 marks. This tests teamwork, communication, and leadership skills.' },
      { question: 'What is the SBI PO probation period?', answer: 'The probation period for SBI PO is 2 years. During this period, you undergo training and are posted at various branches. After successful completion, you are confirmed as an Officer in Junior Management Grade Scale-I.' },
    ],
    tips: [
      'SBI PO DI is tougher than IBPS – focus heavily on caselet-based DI and practice calculation speed.',
      'Puzzles and seating arrangements together form 60-70% of the Reasoning section. Master all variations.',
      'For the descriptive paper, practice writing essays on banking and economic topics specifically.',
      'Know SBI inside out – its history, current MD & Chairman, recent initiatives, market position.',
      'The interview panel values banking knowledge and current affairs. Stay updated till your interview date.',
      'Join a study group for GD practice – group discussions require practice with actual people.',
    ],
  },

  {
    slug: 'rrb-group-d',
    title: 'RRB Group D (Level-1 Posts in Indian Railways)',
    shortName: 'RRB Group D',
    conductingBody: 'Railway Recruitment Boards (RRBs) / Railway Recruitment Cells (RRCs)',
    category: 'Railway',
    level: 'Central',
    frequency: 'Every 2-4 years (Irregular cycle based on Railway recruitment needs)',
    avgVacancies: '32,000+ posts (CEN-08/2024); 1,03,769 in CEN-RRC-01/2019 cycle',
    salaryRange: '\u20B918,000 – \u20B956,900 per month (Pay Level 1, 7th CPC Pay Matrix)',
    description: 'RRB Group D is the recruitment exam for Level-1 (Group D) posts in Indian Railways – primarily Track Maintainer Grade-IV (Trackman/P-Way) and various Helper/Assistant posts in technical departments such as S&T, Electrical, Mechanical, Bridge, Workshop, and TL & AC. With vacancies usually in the tens of thousands, RRB Group D is one of the largest entry-level government recruitment drives in India. It is ideal for 10th pass candidates and ITI holders looking for stable government jobs with attractive perks like free rail travel, medical facilities, and pension benefits.',
    officialWebsite: 'https://www.rrbcdg.gov.in',
    minAge: 18,
    maxAge: 33,
    ageRelaxations: [
      { category: 'General / EWS', relaxation: 'No relaxation' },
      { category: 'OBC (Non-Creamy Layer)', relaxation: '+3 years' },
      { category: 'SC / ST', relaxation: '+5 years' },
      { category: 'PwBD (General)', relaxation: '+10 years' },
      { category: 'PwBD (OBC)', relaxation: '+13 years' },
      { category: 'PwBD (SC/ST)', relaxation: '+15 years' },
      { category: 'Ex-Servicemen', relaxation: 'Service rendered + 3 years (post deduction)' },
      { category: 'Note', relaxation: 'For specific cycles (e.g. CEN-08/2024) Railways have given one-time upper-age relaxation. Always verify the current notification on rrbcdg.gov.in.' },
    ],
    qualification: '10th Pass (Matriculation) from a recognised board OR ITI from NCVT/SCVT recognised institutions OR National Apprenticeship Certificate (NAC) granted by NCVT. For some specific technical posts (e.g. Assistant TL & AC, Assistant S&T, Assistant Loco Shed, Assistant Operations-Electrical), an ITI in the relevant trade is mandatory as per the post-wise requirement listed in the notification.',
    examStages: [
      {
        name: 'Stage 1: Computer Based Test (CBT) – Single Stage',
        subjects: ['Mathematics (25 Qs)', 'General Intelligence & Reasoning (30 Qs)', 'General Science (25 Qs)', 'General Awareness & Current Affairs (20 Qs)'],
        totalMarks: 100,
        duration: '90 minutes (120 minutes for PwBD candidates eligible for scribe)',
        type: 'MCQ – Negative marking 1/3rd mark per wrong answer',
      },
      {
        name: 'Stage 2: Physical Efficiency Test (PET) – Qualifying',
        subjects: [
          'Male: Lift & carry 35 kg of weight for 100 m in 2 min (one chance, no putting down)',
          'Male: Run 1000 m in 4 min 15 sec (one chance)',
          'Female: Lift & carry 20 kg of weight for 100 m in 2 min (one chance)',
          'Female: Run 1000 m in 5 min 40 sec (one chance)',
        ],
        totalMarks: 0,
        duration: 'As per regional schedule',
        type: 'Pass/Fail (Qualifying only – does not contribute to merit)',
      },
      {
        name: 'Stage 3: Document Verification (DV)',
        subjects: ['Verification of original certificates – age, education, ITI/NAC, category, identity', 'Submission of attestation forms'],
        totalMarks: 0,
        duration: 'As scheduled at regional RRB',
        type: 'Verification stage',
      },
      {
        name: 'Stage 4: Medical Examination',
        subjects: ['Medical fitness as per post-specific medical standards (A-1, A-2, A-3, B-1, B-2, C-1, C-2)', 'Vision standards apply – distinct or combined depending on post'],
        totalMarks: 0,
        duration: 'As scheduled',
        type: 'Pass/Fail (Final stage before appointment)',
      },
    ],
    syllabus: [
      {
        subject: 'Mathematics (25 Questions)',
        topics: [
          'Number System, BODMAS, Decimals & Fractions',
          'LCM, HCF, Ratio & Proportion, Percentage',
          'Mensuration – Area, Volume, Surface area',
          'Time & Work, Time & Distance (Trains, Boats, Streams)',
          'Simple Interest, Compound Interest',
          'Profit & Loss, Discount, Average',
          'Algebra (basic), Geometry (basic), Trigonometry (basic)',
          'Elementary Statistics, Square root, Age Calculations',
          'Calendar & Clock, Pipes & Cisterns',
        ],
      },
      {
        subject: 'General Intelligence & Reasoning (30 Questions – Highest weightage)',
        topics: [
          'Analogies, Alphabetical & Number Series',
          'Coding-Decoding, Mathematical Operations',
          'Relationships (Blood Relations)',
          'Syllogism, Jumbling, Venn Diagrams',
          'Data Interpretation & Sufficiency',
          'Conclusions and Decision Making',
          'Similarities & Differences',
          'Analytical Reasoning, Classification',
          'Directions, Statement-Argument & Statement-Assumption',
        ],
      },
      {
        subject: 'General Science (25 Questions)',
        topics: [
          'Physics – Motion, Force, Work, Energy, Heat, Light, Sound, Electricity, Magnetism',
          'Chemistry – Atomic structure, Chemical reactions, Acids/Bases/Salts, Metals/Non-metals, Periodic Table basics',
          'Biology – Cell, Human body systems, Diseases, Nutrition, Plants & Animals',
          'Environmental Science – Pollution, Biodiversity, Climate basics',
          'Difficulty level: Class 10 NCERT (CBSE)',
        ],
      },
      {
        subject: 'General Awareness & Current Affairs (20 Questions)',
        topics: [
          'Current Affairs – Last 12-18 months (national & international)',
          'Indian History – Ancient, Medieval, Modern, Freedom Struggle',
          'Indian Geography – Physical, Economic, Political',
          'Indian Polity & Constitution – basic structure',
          'Indian Economy – Basic concepts, Schemes, Budget highlights',
          'Sports, Awards & Honours, Books & Authors',
          'Indian Railways – History, 18 Zones with HQs, important facts',
          'Science & Technology, Space, Defence',
          'Important Days, Capitals, Currencies',
        ],
      },
    ],
    bestBooks: [
      { title: "Lucent's General Knowledge", author: 'Lucent Publications', subject: 'General Awareness' },
      { title: "Lucent's General Science", author: 'Lucent Publications', subject: 'Science' },
      { title: 'Fast Track Objective Arithmetic', author: 'Rajesh Verma (Arihant)', subject: 'Maths' },
      { title: 'Quantitative Aptitude for Competitive Examinations', author: 'R.S. Aggarwal', subject: 'Maths' },
      { title: 'A Modern Approach to Verbal & Non-Verbal Reasoning', author: 'R.S. Aggarwal', subject: 'Reasoning' },
      { title: 'A New Approach to Reasoning Verbal & Non-Verbal', author: 'B.S. Sijwali, Indu Sijwali (Arihant)', subject: 'Reasoning' },
      { title: 'Manorama Yearbook (latest edition)', author: 'Malayala Manorama', subject: 'Current Affairs / GK' },
      { title: 'NCERT Science (Class 6-10)', author: 'NCERT', subject: 'Science', freeLink: 'https://ncert.nic.in/textbook.php' },
      { title: 'RRB Group D Previous Year Papers (Solved)', author: 'Kiran / Arihant Publications', subject: 'Practice', freeLink: 'https://www.rrbcdg.gov.in' },
    ],
    freeResources: [
      { name: 'RRB Chandigarh (Official)', type: 'website', url: 'https://www.rrbcdg.gov.in', description: 'Official notifications, application status, admit cards, and links to all 21 RRB regional sites' },
      { name: 'Indian Railways Official', type: 'website', url: 'https://indianrailways.gov.in', description: 'Background information about Indian Railways – zones, history, organisation – useful for the GK section' },
      { name: 'NCERT Textbooks (Free PDF)', type: 'website', url: 'https://ncert.nic.in/textbook.php', description: 'Free download of Class 6-10 Science and Social Science books – core for the General Science section' },
      { name: 'Adda247 / Wifistudy (YouTube)', type: 'youtube', url: 'https://www.youtube.com/@adda247', description: 'Free daily classes, mock tests, and live discussions for RRB Group D preparation' },
      { name: 'StudyIQ (YouTube)', type: 'youtube', url: 'https://www.youtube.com/@studyiqofficial', description: 'Detailed concept videos for Maths, Reasoning, and Science fundamentals' },
      { name: 'Testbook RRB Group D', type: 'website', url: 'https://testbook.com/rrb-group-d', description: 'Free mock tests, sectional quizzes, and previous year paper PDFs' },
      { name: 'Oliveboard RRB Group D', type: 'website', url: 'https://www.oliveboard.in/rrb-group-d/', description: 'Free practice tests and concept videos' },
      { name: 'PIB India', type: 'website', url: 'https://pib.gov.in', description: 'For current affairs, government schemes, and railway-specific announcements' },
    ],
    studyPlan: [
      'Month 1 — Foundations: Build a Maths base — Number system, percentage, ratio, average. Read Lucent GK chapters 1-5 (Indian History basics). Start daily current affairs reading from a single source (PIB or one news app). Daily target: 4-5 hours.',
      'Month 2 — Reasoning push: Reasoning has 30 questions (highest weight). Master series, analogies, coding-decoding, mathematical operations, blood relations, and direction tests. Continue Maths — Profit/Loss, Time & Work, Time & Distance.',
      'Month 3 — Science deep dive: General Science = NCERT Class 6-10. Focus heavily on Physics (motion, electricity, light, heat) and Biology (human body, diseases). Quick coverage of Chemistry. Solve sectional quizzes daily.',
      'Month 4 — GA & Railway-specific: Static GK from Lucent. Indian Railways special section — 18 zones, headquarters, Rail Bhawan, important first-firsts. Memorise awards, sports, books from the last 12 months. Daily current affairs revision.',
      'Month 5 — Mock test phase: Take 1 full mock test daily. Review every wrong answer. Maintain an "error notebook" for repeated mistakes. Focus revision on weak sections. Solve at least 5 years of previous year papers.',
      'Month 6 — Sprint to exam + PET prep: Take 2 mocks daily (morning & evening). Pure revision — no new topics. Start basic PET preparation: 1000 m running practice + weight-carry simulation. The PET is qualifying but you cannot ignore it.',
    ],
    faqs: [
      { question: 'What is the minimum educational qualification for RRB Group D?', answer: 'You need either a 10th pass certificate (Matriculation) from a recognised board, OR an ITI certificate from an NCVT/SCVT recognised institution, OR a National Apprenticeship Certificate (NAC) granted by NCVT. For some specific technical posts (Assistant TL & AC, Assistant S&T, Assistant Loco Shed, Assistant Operations-Electrical), an ITI in the relevant trade is required as specified in the post-wise eligibility table of the notification.' },
      { question: 'How many sections are in the RRB Group D CBT and what is the marking pattern?', answer: 'The CBT has 4 sections — Mathematics (25 questions), General Intelligence & Reasoning (30 questions), General Science (25 questions), and General Awareness & Current Affairs (20 questions). Total: 100 questions / 100 marks in 90 minutes. There is negative marking of 1/3rd mark for each wrong answer. Reasoning carries the highest weight at 30%.' },
      { question: 'What are the minimum qualifying marks in CBT?', answer: 'You need at least 40% for UR/EWS, and 30% for OBC (Non-Creamy Layer), SC, and ST candidates. PwBD candidates may be granted a 2% relaxation in qualifying marks where vacancies reserved for PwBD remain unfilled.' },
      { question: 'Is the Physical Efficiency Test (PET) tough?', answer: 'The PET is qualifying only and not very difficult if you train for 2-3 months. Male candidates must lift & carry 35 kg for 100 metres in 2 minutes (one chance, no putting down) AND run 1000 metres in 4 min 15 sec. Female candidates: 20 kg / 100 m / 2 min AND 1000 m in 5 min 40 sec. Start running practice early — the running test is the most commonly failed component.' },
      { question: 'What is the salary of an RRB Group D employee?', answer: 'RRB Group D posts are at Pay Level 1 of the 7th CPC Pay Matrix with a starting basic pay of \u20B918,000. Adding DA, HRA (depends on city), Travel Allowance, and other allowances, the in-hand initial salary ranges from approximately \u20B922,500 to \u20B926,000 per month. You also get free rail passes, medical facilities, pension under NPS, and other Indian Railways perks.' },
      { question: 'How often is RRB Group D notification released?', answer: 'It is released irregularly — usually every 2-4 years depending on Railway recruitment needs. Major past cycles include CEN-RRC-01/2019 (1,03,769 vacancies, exam held in 2022) and CEN-08/2024 (32,438 vacancies, notification released January 2025). Always check rrbcdg.gov.in for the current active notification.' },
      { question: 'What is the difference between RRB Group D and RRB NTPC?', answer: 'RRB Group D is for Level-1 posts (Track Maintainer, Helper, Assistant) requiring 10th pass / ITI — manual / semi-skilled work. RRB NTPC (Non-Technical Popular Categories) is for Level 2-6 posts (Clerk, Station Master, Goods Guard, Commercial Apprentice) requiring 12th pass or graduation — clerical / administrative roles. Group D has more vacancies; NTPC has higher entry-level pay and greater promotion potential.' },
      { question: 'Can I apply for RRB Group D from any region in India?', answer: 'Yes. RRB Group D is conducted simultaneously by all 21 Railway Recruitment Boards. You select the RRB region based on your zonal preference, but the notification, syllabus, and pattern are uniform nationally. You can apply for ONLY ONE RRB per cycle — submitting multiple applications across RRBs will lead to rejection.' },
    ],
    tips: [
      'Reasoning has 30 questions — the highest weight in CBT. If you master Reasoning thoroughly, you can secure 25+ marks here alone, which often is enough to clear cutoff comfortably.',
      'General Science is purely NCERT Class 6-10 based. Read the textbooks once and revise them 2-3 times. There is no need for advanced books at this stage.',
      'Indian Railways-specific questions appear in every cycle (zones, headquarters, history). Memorise the 18 zones with their HQs — easy 2-3 marks.',
      "Avoid guesswork. With 1/3rd negative marking, attempting only 70 confident questions out of 100 is better than attempting all 100 carelessly. Smart selection beats blind effort.",
      "PET is QUALIFYING but DON'T ignore it. Start running 1000 metres 3-4 days a week from the day you start preparation. Many candidates clear CBT but fail PET due to poor stamina.",
      'Solve previous year papers from CEN-RRC-01/2019 (Group D 2022 exam) — RRB repeats question patterns and even similar questions across cycles.',
      "Use a single source for current affairs. Don't scatter across 10 sources — pick one (PIB or Adda247 daily or Testbook daily) and stick to it for 6 months.",
      'Time management in CBT: 90 minutes / 100 questions = under 1 minute per question. Practice at this speed using online mock tests so the actual exam feels familiar.',
    ],
  },
];

export const examCategories = [
  { name: 'UPSC', icon: '🏛️', description: 'Union Public Service Commission', count: 5 },
  { name: 'SSC', icon: '📝', description: 'Staff Selection Commission', count: 8 },
  { name: 'Banking', icon: '🏦', description: 'IBPS, SBI & RBI Exams', count: 6 },
  { name: 'Railway', icon: '🚂', description: 'RRB & Railway Exams', count: 4 },
  { name: 'Defence', icon: '🎖️', description: 'NDA, CDS, AFCAT', count: 4 },
  { name: 'State PSC', icon: '🗺️', description: 'State Public Service Commissions', count: 28 },
  { name: 'Teaching', icon: '📚', description: 'CTET, TET, NET, KVS', count: 5 },
  { name: 'Police', icon: '🚔', description: 'State Police & CAPF', count: 6 },
];

export const guides = [
  {
    slug: 'how-to-start-government-exam-preparation',
    title: 'Government Exam Preparation for Beginners 2026 – Step-by-Step Roadmap',
    description: 'Complete beginner\'s roadmap to government exam preparation in 2026. Learn which exam to choose, follow a 12-month study plan, get free resources, daily timetables, and avoid the mistakes that fail 90% of aspirants.',
    category: 'Getting Started',
    readTime: '15 min read',
  },
  {
    slug: 'best-free-resources-government-exams',
    title: 'Best Free Resources for Government Exam Preparation (2026)',
    description: 'Curated list of 50+ best free YouTube channels, official government platforms, websites, apps, mock test sites, and Telegram groups for UPSC, SSC, Banking, Railway, and all major government exams — updated for 2026.',
    category: 'Resources',
    readTime: '18 min read',
  },
  {
    slug: 'age-limit-relaxation-government-jobs',
    title: 'Complete Guide to Age Limit & Relaxation for Government Jobs',
    description: 'Detailed explanation of age limits and relaxation rules for OBC, SC, ST, EWS, PwBD, and Ex-Servicemen categories across all major government exams.',
    category: 'Eligibility',
    readTime: '8 min read',
  },
  {
    slug: 'how-to-fill-government-job-application-form',
    title: 'How to Fill Government Job Application Forms (Step by Step)',
    description: 'Complete step-by-step guide for filling online application forms for SSC, UPSC, IBPS, SBI, and Railway exams. Covers OTR registration, photo and signature upload specifications, fee payment, common mistakes to avoid, and correction window details.',
    category: 'Application',
    readTime: '15 min read',
  },
  {
    slug: 'documents-needed-government-job',
    title: 'Documents Required for Government Job Application',
    description: 'Complete checklist of all documents you need for applying and joining a government job – certificates, ID proofs, photos, and more.',
    category: 'Documents',
    readTime: '5 min read',
  },
  {
    slug: 'study-plan-working-professionals',
    title: 'Government Exam Study Plan for Working Professionals',
    description: 'How to prepare for competitive exams while working full-time. Time management tips, weekend study plans, and strategies for working aspirants.',
    category: 'Strategy',
    readTime: '9 min read',
  },
];

export function getExamBySlug(slug: string): Exam | undefined {
  return exams.find((e) => e.slug === slug);
}

// ─── ALL EXAMS (for eligibility checker & full listings) ────────────────────

// ─── ALL 100 EXAMS DATABASE ────────────────────────────────────────────────
export interface ExamBrief {
  id: number;
  slug: string;
  name: string;
  conductingBody: string;
  category: 'UPSC' | 'SSC' | 'Banking' | 'Railway' | 'Defence' | 'State PSC' | 'Teaching' | 'Police';
  level: 'Central' | 'State';
  frequency: string;
  minAge: number;
  maxAge: number;
  qualification: string;
  selectionProcess: string;
  officialWebsite: string;
  salaryRange?: string;
  avgVacancies?: string;
  description?: string;
}

export const allExams: ExamBrief[] = [
  { id:1, slug:'upsc-ias', name:'UPSC Civil Services (IAS/IPS/IFS)', conductingBody:'Union Public Service Commission (UPSC)', category:'UPSC', level:'Central', frequency:'Annual', minAge:21, maxAge:32, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'upsc.gov.in', salaryRange:'₹56,100 – ₹2,50,000/month', avgVacancies:'800–1000 annually', description:'India\'s most prestigious exam recruiting IAS, IPS, IFS and 20+ All India Services officers.' },
  { id:2, slug:'ssc-cgl', name:'SSC Combined Graduate Level (CGL)', conductingBody:'Staff Selection Commission (SSC)', category:'SSC', level:'Central', frequency:'Annual', minAge:18, maxAge:32, qualification:'Graduation', selectionProcess:'Tier I, Tier II', officialWebsite:'ssc.gov.in', salaryRange:'₹25,500 – ₹1,51,100/month', avgVacancies:'7,000–10,000 annually', description:'Recruits for Group B & C posts across central government ministries — Income Tax Inspector, CBI, Customs, CAG Auditor and more.' },
  { id:3, slug:'sbi-po', name:'SBI Probationary Officer (PO)', conductingBody:'State Bank of India (SBI)', category:'Banking', level:'Central', frequency:'Annual', minAge:21, maxAge:30, qualification:'Graduation', selectionProcess:'Prelims, Mains, GE & Interview', officialWebsite:'sbi.co.in/careers', salaryRange:'₹41,960 – ₹85,920/month (basic)', avgVacancies:'1,500–2,500 annually', description:'PO recruitment for India\'s largest public sector bank with excellent salary, perks and career growth.' },
  { id:4, slug:'ibps-po', name:'IBPS Probationary Officer (PO)', conductingBody:'Institute of Banking Personnel Selection (IBPS)', category:'Banking', level:'Central', frequency:'Annual', minAge:20, maxAge:30, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'ibps.in', salaryRange:'₹48,480 – ₹85,920/month (basic)', avgVacancies:'3,000–6,000 annually', description:'Recruits POs for 11 public sector banks. Stable career with good perks and growth opportunities.' },
  { id:5, slug:'rrb-ntpc', name:'RRB NTPC', conductingBody:'Railway Recruitment Board (RRB)', category:'Railway', level:'Central', frequency:'Every 2–3 years', minAge:18, maxAge:33, qualification:'12th Pass / Graduation (varies by post)', selectionProcess:'CBT 1, CBT 2, Skill Test, DV', officialWebsite:'rrbcdg.gov.in', salaryRange:'₹19,900 – ₹92,300/month', avgVacancies:'25,000–35,000 posts', description:'Non-technical posts in Indian Railways — Station Master, Goods Guard, Commercial Apprentice, Clerk and more.' },
  { id:6, slug:'upsc-nda', name:'UPSC National Defence Academy (NDA)', conductingBody:'Union Public Service Commission (UPSC)', category:'Defence', level:'Central', frequency:'Biannual (twice a year)', minAge:16, maxAge:19, qualification:'12th Pass (Maths & Physics for Navy/Air Force)', selectionProcess:'Written Exam, SSB Interview', officialWebsite:'upsc.gov.in', salaryRange:'₹56,100/month (starting after training)', avgVacancies:'400–450 per cycle', description:'Entry point for Army, Navy and Air Force officer training at the prestigious NDA, Khadakwasla. Open to 12th pass candidates.' },
  { id:7, slug:'upsc-cds', name:'UPSC Combined Defence Services (CDS)', conductingBody:'Union Public Service Commission (UPSC)', category:'Defence', level:'Central', frequency:'Biannual (twice a year)', minAge:20, maxAge:24, qualification:'Graduation (specific degrees for Navy/Air Force)', selectionProcess:'Written Exam, SSB Interview', officialWebsite:'upsc.gov.in', salaryRange:'₹56,100/month (starting)', avgVacancies:'400–500 per cycle', description:'Recruits officers for Indian Military Academy (IMA), Officers Training Academy (OTA), Naval Academy and Air Force Academy.' },
  { id:8, slug:'ssc-chsl', name:'SSC CHSL (Combined Higher Secondary Level)', conductingBody:'Staff Selection Commission (SSC)', category:'SSC', level:'Central', frequency:'Annual', minAge:18, maxAge:27, qualification:'12th Pass', selectionProcess:'Tier I, Tier II, Skill Test/Typing', officialWebsite:'ssc.gov.in', salaryRange:'₹19,900 – ₹81,100/month', avgVacancies:'4,000–6,000 annually', description:'Recruits LDC, JSA, Postal Assistant, Sorting Assistant, and DEO for central government offices.' },
  { id:9, slug:'ssc-mts', name:'SSC Multi Tasking Staff (MTS)', conductingBody:'Staff Selection Commission (SSC)', category:'SSC', level:'Central', frequency:'Annual', minAge:18, maxAge:27, qualification:'10th Pass', selectionProcess:'CBT, Physical Test (for Havaldar)', officialWebsite:'ssc.gov.in', salaryRange:'₹18,000 – ₹56,900/month', avgVacancies:'5,000–10,000 annually', description:'Group C non-gazetted posts in central government. Includes MTS (General) and Havaldar in CBIC/CBN.' },
  { id:10, slug:'ssc-gd-constable', name:'SSC GD Constable', conductingBody:'Staff Selection Commission (SSC)', category:'Police', level:'Central', frequency:'Annual', minAge:18, maxAge:23, qualification:'10th Pass', selectionProcess:'CBT, PET, PST, Medical', officialWebsite:'ssc.gov.in', salaryRange:'₹21,700 – ₹69,100/month', avgVacancies:'25,000–80,000 posts', description:'Constable (GD) in BSF, CISF, CRPF, ITBP, SSB, NIA, SSF and Assam Rifles. One of the largest recruitments.' },
  { id:11, slug:'ibps-clerk', name:'IBPS Clerk', conductingBody:'Institute of Banking Personnel Selection (IBPS)', category:'Banking', level:'Central', frequency:'Annual', minAge:20, maxAge:28, qualification:'Graduation', selectionProcess:'Prelims, Mains', officialWebsite:'ibps.in', salaryRange:'₹29,900 – ₹45,950/month (gross)', avgVacancies:'4,000–8,000 annually', description:'Clerical cadre recruitment for 11 public sector banks. Good entry point into banking career.' },
  { id:12, slug:'sbi-clerk', name:'SBI Clerk (Junior Associates)', conductingBody:'State Bank of India (SBI)', category:'Banking', level:'Central', frequency:'Annual', minAge:20, maxAge:28, qualification:'Graduation', selectionProcess:'Prelims, Mains', officialWebsite:'sbi.co.in/careers', salaryRange:'₹32,000 – ₹48,000/month (gross)', avgVacancies:'5,000–10,000 annually', description:'Junior Associate recruitment for SBI branches across India. Largest bank clerical recruitment.' },
  { id:13, slug:'rbi-grade-b', name:'RBI Grade B Officer', conductingBody:'Reserve Bank of India (RBI)', category:'Banking', level:'Central', frequency:'Annual', minAge:21, maxAge:30, qualification:'Graduation (60%)', selectionProcess:'Phase I, Phase II, Interview', officialWebsite:'rbi.org.in', salaryRange:'₹78,450 – ₹1,41,600/month (basic, revised 2025)', avgVacancies:'200–400 annually', description:'One of the most prestigious banking exams. RBI Grade B officers work in regulation, monetary policy, and banking supervision.' },
  { id:14, slug:'rbi-assistant', name:'RBI Assistant', conductingBody:'Reserve Bank of India (RBI)', category:'Banking', level:'Central', frequency:'Annual', minAge:20, maxAge:28, qualification:'Graduation (50%)', selectionProcess:'Prelims, Mains, LPT', officialWebsite:'rbi.org.in', salaryRange:'₹44,050 – ₹63,840/month (basic)', avgVacancies:'400–950 annually', description:'Assistant level recruitment in RBI. Excellent salary and benefits compared to other clerical-level bank jobs.' },
  { id:15, slug:'ibps-rrb-po', name:'IBPS RRB Officer Scale I (PO)', conductingBody:'Institute of Banking Personnel Selection (IBPS)', category:'Banking', level:'Central', frequency:'Annual', minAge:18, maxAge:30, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'ibps.in', salaryRange:'₹48,480 – ₹85,920/month (basic)', avgVacancies:'3,000–5,000 annually', description:'Officer recruitment for Regional Rural Banks across India.' },
  { id:16, slug:'ibps-rrb-clerk', name:'IBPS RRB Office Assistant (Clerk)', conductingBody:'Institute of Banking Personnel Selection (IBPS)', category:'Banking', level:'Central', frequency:'Annual', minAge:18, maxAge:28, qualification:'Graduation', selectionProcess:'Prelims, Mains', officialWebsite:'ibps.in', salaryRange:'₹24,000 – ₹40,000/month (gross)', avgVacancies:'4,000–6,000 annually', description:'Clerical recruitment for Regional Rural Banks.' },
  { id:17, slug:'rrb-group-d', name:'RRB Group D', conductingBody:'Railway Recruitment Cell (RRC)', category:'Railway', level:'Central', frequency:'Every 2–3 years', minAge:18, maxAge:33, qualification:'10th Pass / ITI', selectionProcess:'CBT, PET, DV, Medical', officialWebsite:'rrbcdg.gov.in', salaryRange:'₹18,000 – ₹56,900/month', avgVacancies:'1,00,000+ posts', description:'Largest railway recruitment for Track Maintainer, Helper, Gateman and other Group D posts. Huge number of vacancies.' },
  { id:18, slug:'rrb-alp', name:'RRB Assistant Loco Pilot (ALP)', conductingBody:'Railway Recruitment Board (RRB)', category:'Railway', level:'Central', frequency:'Every 2–3 years', minAge:18, maxAge:30, qualification:'10th + ITI / Diploma / Degree', selectionProcess:'CBT 1, CBT 2, CBAT, DV', officialWebsite:'rrbcdg.gov.in', salaryRange:'₹19,900 – ₹63,200/month', avgVacancies:'5,000–25,000 posts', description:'Technical post in Indian Railways for operating locomotives. Requires ITI/technical qualification.' },
  { id:19, slug:'rrb-je', name:'RRB Junior Engineer (JE)', conductingBody:'Railway Recruitment Board (RRB)', category:'Railway', level:'Central', frequency:'Every 2–3 years', minAge:18, maxAge:33, qualification:'Diploma / Degree in Engineering', selectionProcess:'CBT 1, CBT 2, DV, Medical', officialWebsite:'rrbcdg.gov.in', salaryRange:'₹35,400 – ₹1,12,400/month', avgVacancies:'5,000–15,000 posts', description:'Junior Engineer posts in Civil, Mechanical, Electrical, Electronics, IT and other engineering branches in Railways.' },
  { id:20, slug:'upsc-ese', name:'UPSC Engineering Services (ESE/IES)', conductingBody:'Union Public Service Commission (UPSC)', category:'UPSC', level:'Central', frequency:'Annual', minAge:21, maxAge:30, qualification:'Engineering Degree (B.E/B.Tech)', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'upsc.gov.in', salaryRange:'₹56,100 – ₹2,09,200/month', avgVacancies:'300–600 annually', description:'Prestigious engineering services exam for Class-I posts in government engineering departments — Railways, CPWD, MES, CWC etc.' },
  { id:21, slug:'upsc-capf', name:'UPSC CAPF Assistant Commandant', conductingBody:'Union Public Service Commission (UPSC)', category:'Defence', level:'Central', frequency:'Annual', minAge:20, maxAge:25, qualification:'Graduation', selectionProcess:'Written, PET/Medical, Interview', officialWebsite:'upsc.gov.in', salaryRange:'₹56,100/month (starting)', avgVacancies:'200–400 annually', description:'Assistant Commandant in BSF, CRPF, CISF, ITBP, SSB. Prestigious paramilitary officer cadre.' },
  { id:22, slug:'afcat', name:'AFCAT (Air Force Common Admission Test)', conductingBody:'Indian Air Force (IAF)', category:'Defence', level:'Central', frequency:'Biannual', minAge:20, maxAge:26, qualification:'Graduation (Physics & Maths at 10+2 level)', selectionProcess:'Written Exam, AFSB Interview', officialWebsite:'afcat.cdac.in', salaryRange:'₹56,100/month (starting)', avgVacancies:'200–300 per cycle', description:'Entry into the Indian Air Force as a Commissioned Officer in Flying, Technical and Ground Duty branches.' },
  { id:23, slug:'ssc-cpo', name:'SSC CPO (Sub Inspector in Delhi Police/CAPF)', conductingBody:'Staff Selection Commission (SSC)', category:'Police', level:'Central', frequency:'Annual', minAge:20, maxAge:25, qualification:'Graduation', selectionProcess:'Paper I, PET/PST, Paper II, Medical', officialWebsite:'ssc.gov.in', salaryRange:'₹35,400 – ₹1,12,400/month', avgVacancies:'1,000–3,000 annually', description:'Sub-Inspector in Delhi Police and CAPF (BSF, CRPF, CISF, ITBP, SSB), and ASI in CISF.' },
  { id:24, slug:'ssc-je', name:'SSC Junior Engineer (JE)', conductingBody:'Staff Selection Commission (SSC)', category:'SSC', level:'Central', frequency:'Annual', minAge:18, maxAge:32, qualification:'Diploma / Degree in Engineering', selectionProcess:'Paper I, Paper II', officialWebsite:'ssc.gov.in', salaryRange:'₹35,400 – ₹1,12,400/month', avgVacancies:'500–1,500 annually', description:'Junior Engineer recruitment for CPWD, CWC, MES and other engineering departments of central government.' },
  { id:25, slug:'lic-aao', name:'LIC Assistant Administrative Officer (AAO)', conductingBody:'Life Insurance Corporation of India (LIC)', category:'Banking', level:'Central', frequency:'Irregular', minAge:21, maxAge:30, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'licindia.in', salaryRange:'₹50,000 – ₹65,000/month', avgVacancies:'500–1,000', description:'Administrative officer recruitment for LIC. Very good salary and perks in India\'s largest insurance company.' },
  { id:26, slug:'lic-ado', name:'LIC Apprentice Development Officer (ADO)', conductingBody:'Life Insurance Corporation of India (LIC)', category:'Banking', level:'Central', frequency:'Irregular', minAge:21, maxAge:30, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'licindia.in', salaryRange:'₹40,000 – ₹55,000/month', avgVacancies:'500–800', description:'Development Officer recruitment for LIC handling agency and business development.' },
  { id:27, slug:'nabard-grade-a', name:'NABARD Grade A Officer', conductingBody:'NABARD', category:'Banking', level:'Central', frequency:'Annual', minAge:21, maxAge:30, qualification:'Graduation', selectionProcess:'Phase I, Phase II, Interview', officialWebsite:'nabard.org', salaryRange:'₹44,500 – ₹89,150/month', avgVacancies:'100–200 annually', description:'Officer recruitment in NABARD — apex development bank for agriculture and rural development in India.' },
  { id:28, slug:'fci-manager', name:'FCI Manager (Category I & II)', conductingBody:'Food Corporation of India (FCI)', category:'Banking', level:'Central', frequency:'Irregular', minAge:18, maxAge:28, qualification:'Graduation / Post Graduation', selectionProcess:'Phase I, Phase II, Interview', officialWebsite:'fci.gov.in', salaryRange:'₹40,000 – ₹1,40,000/month', avgVacancies:'200–500', description:'Manager level recruitment in FCI for depot management, accounting, and technical operations.' },
  { id:29, slug:'fci-assistant', name:'FCI Assistant Grade III', conductingBody:'Food Corporation of India (FCI)', category:'Banking', level:'Central', frequency:'Irregular', minAge:18, maxAge:27, qualification:'Graduation', selectionProcess:'Phase I, Phase II', officialWebsite:'fci.gov.in', salaryRange:'₹25,000 – ₹45,000/month', avgVacancies:'2,000–5,000', description:'Assistant level recruitment in FCI for General, Technical, Depot and Accounts departments.' },
  { id:30, slug:'ib-acio', name:'IB ACIO (Intelligence Bureau)', conductingBody:'Ministry of Home Affairs (MHA)', category:'UPSC', level:'Central', frequency:'Irregular', minAge:18, maxAge:27, qualification:'Graduation', selectionProcess:'Tier I, Tier II, Interview', officialWebsite:'mha.gov.in', salaryRange:'₹44,900 – ₹1,42,400/month', avgVacancies:'500–2,000', description:'Assistant Central Intelligence Officer in IB — India\'s internal intelligence agency. Highly sought-after post.' },
  { id:31, slug:'ib-security-assistant', name:'IB Security Assistant / Executive', conductingBody:'Ministry of Home Affairs (MHA)', category:'Police', level:'Central', frequency:'Irregular', minAge:18, maxAge:25, qualification:'10th Pass', selectionProcess:'Tier I, Tier II, Interview', officialWebsite:'mha.gov.in', salaryRange:'₹21,700 – ₹69,100/month', avgVacancies:'1,000–2,000', description:'Security Assistant/Executive in Intelligence Bureau. One of the few intelligence jobs open to 10th pass candidates.' },
  { id:32, slug:'ctet', name:'CTET (Central Teacher Eligibility Test)', conductingBody:'Central Board of Secondary Education (CBSE)', category:'Teaching', level:'Central', frequency:'Biannual', minAge:18, maxAge:99, qualification:'B.Ed / D.El.Ed / Graduation', selectionProcess:'Paper 1 (Class 1-5), Paper 2 (Class 6-8)', officialWebsite:'ctet.nic.in', salaryRange:'Not applicable (eligibility test)', avgVacancies:'Not applicable', description:'Mandatory eligibility test for teaching positions in central government schools (KVS, NVS, etc.). No upper age limit.' },
  { id:33, slug:'ugc-net', name:'UGC NET', conductingBody:'National Testing Agency (NTA)', category:'Teaching', level:'Central', frequency:'Biannual', minAge:18, maxAge:35, qualification:'Post Graduation (55%/50% for reserved)', selectionProcess:'CBT (Paper I & II)', officialWebsite:'ugcnet.nta.nic.in', salaryRange:'JRF: ₹31,000/month; Asst Prof: ₹57,700/month', avgVacancies:'Not applicable (eligibility test)', description:'National Eligibility Test for Assistant Professorship and JRF in Indian universities and colleges. No age limit for Asst Prof.' },
  { id:34, slug:'kvs-prt-tgt-pgt', name:'KVS PRT/TGT/PGT', conductingBody:'Kendriya Vidyalaya Sangathan (KVS)', category:'Teaching', level:'Central', frequency:'Irregular', minAge:18, maxAge:40, qualification:'B.Ed + CTET / Graduation + B.Ed', selectionProcess:'Written Test, Interview/Demo', officialWebsite:'kvsangathan.nic.in', salaryRange:'₹35,400 – ₹1,51,100/month', avgVacancies:'5,000–15,000', description:'Teaching positions in Kendriya Vidyalayas across India — PRT, TGT, PGT for various subjects.' },
  { id:35, slug:'nvs-teaching', name:'NVS Teaching & Non-Teaching Staff', conductingBody:'Navodaya Vidyalaya Samiti (NVS)', category:'Teaching', level:'Central', frequency:'Irregular', minAge:18, maxAge:40, qualification:'B.Ed + CTET / Graduation + B.Ed', selectionProcess:'CBT, Interview', officialWebsite:'navodaya.gov.in', salaryRange:'₹35,400 – ₹1,51,100/month', avgVacancies:'2,000–5,000', description:'Teaching and non-teaching positions in Jawahar Navodaya Vidyalayas across rural India.' },
  { id:36, slug:'mpsc-rajyaseva', name:'MPSC State Services (Rajyaseva)', conductingBody:'Maharashtra PSC', category:'State PSC', level:'State', frequency:'Annual', minAge:19, maxAge:38, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'mpsc.gov.in', salaryRange:'₹38,600 – ₹2,09,200/month', avgVacancies:'200–500 annually', description:'Maharashtra state civil services exam for Deputy Collector, DSP, BDO and other Group A/B posts.' },
  { id:37, slug:'uppsc-pcs', name:'UPPSC PCS', conductingBody:'Uttar Pradesh PSC', category:'State PSC', level:'State', frequency:'Annual', minAge:21, maxAge:40, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'uppsc.up.nic.in', salaryRange:'₹56,100 – ₹2,09,200/month', avgVacancies:'300–600 annually', description:'UP state civil services for SDM, DSP, BDO and other administrative and police posts.' },
  { id:38, slug:'bpsc-cce', name:'BPSC Combined Competitive Exam (CCE)', conductingBody:'Bihar PSC', category:'State PSC', level:'State', frequency:'Annual', minAge:20, maxAge:37, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'bpsc.bih.nic.in', salaryRange:'₹44,900 – ₹2,09,200/month', avgVacancies:'500–1,500 annually', description:'Bihar state civil services for Deputy Collector, DSP, Block Development Officer and other Group A/B posts.' },
  { id:39, slug:'rpsc-ras', name:'RPSC RAS/RTS', conductingBody:'Rajasthan PSC', category:'State PSC', level:'State', frequency:'Annual', minAge:21, maxAge:40, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'rpsc.rajasthan.gov.in', salaryRange:'₹44,900 – ₹2,09,200/month', avgVacancies:'400–900 annually', description:'Rajasthan Administrative Service and Rajasthan Taxation Service exam for state-level officer posts.' },
  { id:40, slug:'mppsc-state-service', name:'MPPSC State Service Exam', conductingBody:'Madhya Pradesh PSC', category:'State PSC', level:'State', frequency:'Annual', minAge:21, maxAge:40, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'mppsc.mp.gov.in', salaryRange:'₹44,900 – ₹2,09,200/month', avgVacancies:'300–600 annually', description:'MP state civil services for Deputy Collector, DSP, Nayab Tehsildar and other Group A/B posts.' },
  { id:41, slug:'wbcs-executive', name:'WBCS Executive', conductingBody:'West Bengal PSC', category:'State PSC', level:'State', frequency:'Annual', minAge:21, maxAge:36, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'wbpsc.gov.in', salaryRange:'₹44,900 – ₹2,09,200/month', avgVacancies:'200–500 annually', description:'West Bengal Civil Service exam for state administrative, police and other service posts.' },
  { id:42, slug:'tnpsc-group-1', name:'TNPSC Group 1', conductingBody:'Tamil Nadu PSC', category:'State PSC', level:'State', frequency:'Annual', minAge:21, maxAge:32, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'tnpsc.gov.in', salaryRange:'₹56,100 – ₹2,09,200/month', avgVacancies:'50–200 annually', description:'Tamil Nadu\'s highest state services exam for Deputy Collector, DSP and other Group I officers.' },
  { id:43, slug:'tnpsc-group-2', name:'TNPSC Group 2', conductingBody:'Tamil Nadu PSC', category:'State PSC', level:'State', frequency:'Annual', minAge:18, maxAge:32, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'tnpsc.gov.in', salaryRange:'₹36,900 – ₹1,51,100/month', avgVacancies:'200–500 annually', description:'TN state services Group II exam for Sub Registrar, Municipal Commissioner, ASP and other posts.' },
  { id:44, slug:'tnpsc-group-4', name:'TNPSC Group 4', conductingBody:'Tamil Nadu PSC', category:'State PSC', level:'State', frequency:'Annual', minAge:18, maxAge:32, qualification:'10th Pass', selectionProcess:'Written Exam, DV', officialWebsite:'tnpsc.gov.in', salaryRange:'₹19,500 – ₹63,200/month', avgVacancies:'5,000–10,000 annually', description:'Group IV exam for clerical posts like Typist, Junior Assistant, Village Administrative Officer in TN government.' },
  { id:45, slug:'kpsc-kas', name:'KPSC KAS', conductingBody:'Karnataka PSC', category:'State PSC', level:'State', frequency:'Annual', minAge:21, maxAge:35, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'kpsc.kar.nic.in', salaryRange:'₹44,900 – ₹2,09,200/month', avgVacancies:'100–350 annually', description:'Karnataka Administrative Service exam for state civil and police service officer posts.' },
  { id:46, slug:'kerala-psc-kas', name:'Kerala PSC KAS', conductingBody:'Kerala PSC', category:'State PSC', level:'State', frequency:'Irregular', minAge:21, maxAge:32, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'keralapsc.gov.in', salaryRange:'₹44,900 – ₹2,09,200/month', avgVacancies:'50–150 annually', description:'Kerala Administrative Service exam for state-level officer posts in Kerala.' },
  { id:47, slug:'gpsc-class-1-2', name:'GPSC Class 1 & 2', conductingBody:'Gujarat PSC', category:'State PSC', level:'State', frequency:'Annual', minAge:20, maxAge:35, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'gpsc.gujarat.gov.in', salaryRange:'₹44,900 – ₹2,09,200/month', avgVacancies:'100–300 annually', description:'Gujarat state civil services exam for Deputy Collector, Mamlatdar, DSP and other officer posts.' },
  { id:48, slug:'hpsc-hcs', name:'HPSC HCS (Executive Branch)', conductingBody:'Haryana PSC', category:'State PSC', level:'State', frequency:'Annual', minAge:21, maxAge:42, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'hpsc.gov.in', salaryRange:'₹44,900 – ₹2,09,200/month', avgVacancies:'100–200 annually', description:'Haryana Civil Service exam for state administrative and police service posts.' },
  { id:49, slug:'ppsc-pcs', name:'PPSC Punjab Civil Services (PCS)', conductingBody:'Punjab PSC', category:'State PSC', level:'State', frequency:'Annual', minAge:21, maxAge:37, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'ppsc.gov.in', salaryRange:'₹44,900 – ₹2,09,200/month', avgVacancies:'100–200 annually', description:'Punjab state civil services exam for ETO, BDO, Tehsildar, DSP and allied posts.' },
  { id:50, slug:'aai-je-atc', name:'AAI Junior Executive (ATC)', conductingBody:'Airports Authority of India (AAI)', category:'Banking', level:'Central', frequency:'Irregular', minAge:18, maxAge:27, qualification:'B.Sc (Physics/Maths) / B.E / B.Tech', selectionProcess:'CBT, Voice Test, Psychoactive Test', officialWebsite:'aai.aero', salaryRange:'₹40,000 – ₹1,40,000/month', avgVacancies:'200–500', description:'Air Traffic Controller recruitment in AAI. High-responsibility role managing aircraft operations.' },
  { id:51, slug:'drdo-ceptam', name:'DRDO CEPTAM', conductingBody:'DRDO', category:'Defence', level:'Central', frequency:'Irregular', minAge:18, maxAge:28, qualification:'10th / ITI / Diploma / Degree', selectionProcess:'Tier I, Tier II/Skill Test', officialWebsite:'drdo.gov.in', salaryRange:'₹18,000 – ₹1,12,400/month', avgVacancies:'500–1,500', description:'DRDO Centre for Personnel Talent Management recruitment for Technician, Admin and other posts in DRDO labs.' },
  { id:52, slug:'isro-scientist', name:'ISRO Scientist/Engineer', conductingBody:'Indian Space Research Organisation (ISRO)', category:'Defence', level:'Central', frequency:'Irregular', minAge:18, maxAge:28, qualification:'B.E / B.Tech', selectionProcess:'Written Test, Interview', officialWebsite:'isro.gov.in', salaryRange:'₹56,100 – ₹2,09,200/month', avgVacancies:'100–300', description:'Scientist/Engineer SC recruitment for ISRO\'s space programmes. Highly prestigious engineering position.' },
  { id:53, slug:'barc-oces', name:'BARC Scientific Officer (OCES/DGFS)', conductingBody:'Bhabha Atomic Research Centre (BARC)', category:'Defence', level:'Central', frequency:'Annual', minAge:18, maxAge:26, qualification:'B.E / B.Tech / M.Sc', selectionProcess:'Online Exam / GATE Score, Interview', officialWebsite:'barcocesexam.in', salaryRange:'₹56,100 – ₹2,09,200/month', avgVacancies:'100–200', description:'Scientific Officer recruitment through OCES/DGFS programme at BARC for nuclear and related research.' },
  { id:54, slug:'upsc-epfo', name:'UPSC EPFO Enforcement Officer', conductingBody:'Union Public Service Commission (UPSC)', category:'UPSC', level:'Central', frequency:'Irregular', minAge:21, maxAge:30, qualification:'Graduation', selectionProcess:'Recruitment Test, Interview', officialWebsite:'upsc.gov.in', salaryRange:'₹44,900 – ₹1,42,400/month', avgVacancies:'200–500', description:'Enforcement Officer / Accounts Officer in Employees Provident Fund Organisation (EPFO).' },
  { id:55, slug:'esic-udc', name:'ESIC UDC (Upper Division Clerk)', conductingBody:'Employees State Insurance Corporation (ESIC)', category:'Banking', level:'Central', frequency:'Irregular', minAge:18, maxAge:27, qualification:'Graduation', selectionProcess:'Prelims, Mains, Skill Test', officialWebsite:'esic.gov.in', salaryRange:'₹25,500 – ₹81,100/month', avgVacancies:'500–2,000', description:'Upper Division Clerk posts in ESIC hospitals and offices across India.' },
  { id:56, slug:'esic-mts', name:'ESIC MTS', conductingBody:'Employees State Insurance Corporation (ESIC)', category:'Banking', level:'Central', frequency:'Irregular', minAge:18, maxAge:25, qualification:'10th Pass', selectionProcess:'Prelims, Mains', officialWebsite:'esic.gov.in', salaryRange:'₹18,000 – ₹56,900/month', avgVacancies:'500–2,000', description:'Multi Tasking Staff in ESIC hospitals and offices.' },
  { id:57, slug:'supreme-court-jca', name:'Supreme Court Junior Court Assistant', conductingBody:'Supreme Court of India', category:'UPSC', level:'Central', frequency:'Irregular', minAge:18, maxAge:30, qualification:'Graduation + Typing Speed', selectionProcess:'Written, Typing Test, Interview', officialWebsite:'main.sci.gov.in', salaryRange:'₹35,400 – ₹1,12,400/month', avgVacancies:'50–100', description:'Junior Court Assistant recruitment in the Supreme Court of India. Prestigious judicial support role.' },
  { id:58, slug:'nabard-dev-assistant', name:'NABARD Development Assistant', conductingBody:'NABARD', category:'Banking', level:'Central', frequency:'Irregular', minAge:21, maxAge:35, qualification:'Graduation', selectionProcess:'Prelims, Mains', officialWebsite:'nabard.org', salaryRange:'₹28,000 – ₹52,000/month', avgVacancies:'100–200', description:'Development Assistant (Group B) in NABARD for clerical and administrative work.' },
  { id:59, slug:'sebi-grade-a', name:'SEBI Grade A Officer', conductingBody:'Securities and Exchange Board of India (SEBI)', category:'Banking', level:'Central', frequency:'Annual', minAge:18, maxAge:30, qualification:'Post Graduate / Law / Engineering Degree', selectionProcess:'Phase I, Phase II, Interview', officialWebsite:'sebi.gov.in', salaryRange:'₹70,000 – ₹1,20,000/month', avgVacancies:'50–150', description:'One of the highest paying government jobs. SEBI regulates the securities market in India.' },
  { id:60, slug:'sidbi-grade-a', name:'SIDBI Grade A Officer', conductingBody:'Small Industries Development Bank of India', category:'Banking', level:'Central', frequency:'Annual', minAge:18, maxAge:30, qualification:'Post Graduate / Law / Engineering Degree', selectionProcess:'Online Test, Interview', officialWebsite:'sidbi.in', salaryRange:'₹44,500 – ₹89,150/month', avgVacancies:'30–80', description:'Officer recruitment in SIDBI — the principal financial institution for MSME development.' },
  { id:61, slug:'exim-bank-mt', name:'Exim Bank Management Trainee', conductingBody:'Export-Import Bank of India', category:'Banking', level:'Central', frequency:'Annual', minAge:18, maxAge:27, qualification:'Graduation / Post Graduation', selectionProcess:'Written Test, Interview', officialWebsite:'eximbankindia.in', salaryRange:'₹40,000 – ₹70,000/month', avgVacancies:'20–50', description:'Management Trainee in Exim Bank for international trade finance and export credit.' },
  { id:62, slug:'niacl-ao', name:'NIACL Administrative Officer (AO)', conductingBody:'New India Assurance Company', category:'Banking', level:'Central', frequency:'Irregular', minAge:21, maxAge:30, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'newindia.co.in', salaryRange:'₹40,000 – ₹65,000/month', avgVacancies:'200–500', description:'Administrative Officer in New India Assurance — India\'s largest general insurance company.' },
  { id:63, slug:'niacl-assistant', name:'NIACL Assistant', conductingBody:'New India Assurance Company', category:'Banking', level:'Central', frequency:'Irregular', minAge:21, maxAge:30, qualification:'Graduation', selectionProcess:'Prelims, Mains, LPT', officialWebsite:'newindia.co.in', salaryRange:'₹25,000 – ₹42,000/month', avgVacancies:'300–700', description:'Assistant level recruitment in New India Assurance Company.' },
  { id:64, slug:'uiic-ao', name:'UIIC Administrative Officer', conductingBody:'United India Insurance Company', category:'Banking', level:'Central', frequency:'Irregular', minAge:21, maxAge:30, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'uiic.co.in', salaryRange:'₹40,000 – ₹65,000/month', avgVacancies:'100–300', description:'AO recruitment in United India Insurance Company.' },
  { id:65, slug:'oicl-ao', name:'OICL Administrative Officer', conductingBody:'Oriental Insurance Company', category:'Banking', level:'Central', frequency:'Irregular', minAge:21, maxAge:30, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'orientalinsurance.org.in', salaryRange:'₹40,000 – ₹65,000/month', avgVacancies:'100–300', description:'AO recruitment in Oriental Insurance Company.' },
  { id:66, slug:'nicl-ao', name:'NICL Administrative Officer', conductingBody:'National Insurance Company', category:'Banking', level:'Central', frequency:'Irregular', minAge:21, maxAge:30, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'nationalinsurance.nic.co.in', salaryRange:'₹40,000 – ₹65,000/month', avgVacancies:'100–300', description:'AO recruitment in National Insurance Company.' },
  { id:67, slug:'coast-guard-navik-gd', name:'Indian Coast Guard Navik (GD)', conductingBody:'Indian Coast Guard', category:'Defence', level:'Central', frequency:'Biannual', minAge:18, maxAge:22, qualification:'12th Pass (Maths & Physics)', selectionProcess:'CBT, PFT, Medical', officialWebsite:'joinindiancoastguard.cdac.in', salaryRange:'₹21,700 – ₹69,100/month', avgVacancies:'200–400 per cycle', description:'General Duty Navik in Coast Guard for maritime operations and coastal security.' },
  { id:68, slug:'coast-guard-navik-db', name:'Indian Coast Guard Navik (DB)', conductingBody:'Indian Coast Guard', category:'Defence', level:'Central', frequency:'Biannual', minAge:18, maxAge:22, qualification:'10th Pass', selectionProcess:'CBT, PFT, Medical', officialWebsite:'joinindiancoastguard.cdac.in', salaryRange:'₹21,700 – ₹69,100/month', avgVacancies:'100–200 per cycle', description:'Domestic Branch Navik in Coast Guard for cooking, steward and housekeeping duties.' },
  { id:69, slug:'navy-agniveer', name:'Indian Navy Agniveer SSR/MR', conductingBody:'Indian Navy', category:'Defence', level:'Central', frequency:'Biannual', minAge:17, maxAge:21, qualification:'10th / 12th Pass', selectionProcess:'INET, PFT, Medical', officialWebsite:'joinindiannavy.gov.in', salaryRange:'₹30,000 – ₹40,000/month (Yr 1–4)', avgVacancies:'2,000–3,000 per cycle', description:'Agniveer recruitment for Indian Navy as Senior Secondary Recruit (SSR) and Matric Recruit (MR).' },
  { id:70, slug:'army-agniveer', name:'Indian Army Agniveer', conductingBody:'Indian Army', category:'Defence', level:'Central', frequency:'Biannual', minAge:17, maxAge:21, qualification:'8th / 10th / 12th Pass (varies by trade)', selectionProcess:'CEE, Physical Rally, Medical', officialWebsite:'joinindianarmy.nic.in', salaryRange:'₹30,000 – ₹40,000/month (Yr 1–4)', avgVacancies:'25,000–50,000 per cycle', description:'Agniveer entry into Indian Army for a 4-year engagement. Various trades for different qualifications.' },
  { id:71, slug:'iaf-agniveer', name:'IAF Agniveer Vayu', conductingBody:'Indian Air Force', category:'Defence', level:'Central', frequency:'Biannual', minAge:17, maxAge:21, qualification:'12th Pass / Diploma', selectionProcess:'Online Exam, PFT, Adaptability Test, Medical', officialWebsite:'agnipathvayu.cdac.in', salaryRange:'₹30,000 – ₹40,000/month (Yr 1–4)', avgVacancies:'3,000–5,000 per cycle', description:'Agniveer entry into Indian Air Force for technical and non-technical trades.' },
  { id:72, slug:'ssc-stenographer', name:'SSC Stenographer Grade C & D', conductingBody:'Staff Selection Commission (SSC)', category:'SSC', level:'Central', frequency:'Annual', minAge:18, maxAge:30, qualification:'12th Pass + Shorthand proficiency', selectionProcess:'CBT, Skill Test (Shorthand)', officialWebsite:'ssc.gov.in', salaryRange:'₹25,500 – ₹1,12,400/month (Pay Level 4–6)', avgVacancies:'1,000–3,000 annually', description:'Stenographer Grade C (Group B) and Grade D (Group C) in various central government ministries and departments.' },
  { id:73, slug:'ssc-selection-post', name:'SSC Selection Post', conductingBody:'Staff Selection Commission (SSC)', category:'SSC', level:'Central', frequency:'Annual (multiple phases)', minAge:18, maxAge:30, qualification:'10th / 12th / Graduation (varies)', selectionProcess:'CBT, Skill Test (if applicable)', officialWebsite:'ssc.gov.in', salaryRange:'₹18,000 – ₹81,100/month', avgVacancies:'2,000–5,000 per phase', description:'Various isolated posts across central government filled through phase-wise recruitment.' },
  { id:74, slug:'ssc-jht', name:'SSC Junior Hindi Translator (JHT)', conductingBody:'Staff Selection Commission (SSC)', category:'SSC', level:'Central', frequency:'Annual', minAge:18, maxAge:30, qualification:'Master\'s Degree in Hindi/English', selectionProcess:'Paper I (CBT), Paper II (Descriptive)', officialWebsite:'ssc.gov.in', salaryRange:'₹35,400 – ₹1,12,400/month', avgVacancies:'200–500 annually', description:'Hindi Translator, Hindi Pradhyapak and Senior Hindi Translator posts in central government.' },
  { id:75, slug:'upsc-cms', name:'UPSC Combined Medical Services (CMS)', conductingBody:'Union Public Service Commission (UPSC)', category:'UPSC', level:'Central', frequency:'Annual', minAge:18, maxAge:32, qualification:'MBBS', selectionProcess:'CBT, Interview/Personality Test', officialWebsite:'upsc.gov.in', salaryRange:'₹56,100 – ₹1,77,500/month', avgVacancies:'500–800 annually', description:'Medical officer recruitment for railways, ESIC, CGHS, MCD and other central health services.' },
  { id:76, slug:'upsc-ifs', name:'UPSC Indian Forest Service (IFS)', conductingBody:'Union Public Service Commission (UPSC)', category:'UPSC', level:'Central', frequency:'Annual', minAge:21, maxAge:32, qualification:'Graduation (Science/Engineering preferred)', selectionProcess:'Prelims (via CSE), Mains, Interview', officialWebsite:'upsc.gov.in', salaryRange:'₹56,100 – ₹2,50,000/month', avgVacancies:'80–150 annually', description:'Indian Forest Service — one of three All India Services. Manages forest resources and wildlife conservation.' },
  { id:77, slug:'upsc-ies-iss', name:'UPSC IES/ISS (Indian Economic/Statistical Service)', conductingBody:'Union Public Service Commission (UPSC)', category:'UPSC', level:'Central', frequency:'Annual', minAge:21, maxAge:30, qualification:'Post Graduation in Economics / Statistics', selectionProcess:'Written Exam, Interview', officialWebsite:'upsc.gov.in', salaryRange:'₹56,100 – ₹2,09,200/month', avgVacancies:'30–50 annually', description:'Indian Economic Service and Indian Statistical Service for policy research and statistical work.' },
  { id:78, slug:'upsc-geo-scientist', name:'UPSC Combined Geo-Scientist', conductingBody:'Union Public Service Commission (UPSC)', category:'UPSC', level:'Central', frequency:'Annual', minAge:21, maxAge:32, qualification:'Post Graduation in Geology / Geophysics / Chemistry', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'upsc.gov.in', salaryRange:'₹56,100 – ₹2,09,200/month', avgVacancies:'30–60 annually', description:'Geologist, Geophysicist and Chemist Group A recruitment for GSI, CGWB and other agencies.' },
  { id:79, slug:'rpf-si', name:'RPF Sub-Inspector (SI)', conductingBody:'Railway Protection Force (RPF)', category:'Railway', level:'Central', frequency:'Irregular', minAge:20, maxAge:25, qualification:'Graduation', selectionProcess:'CBT, PET/PMT, DV', officialWebsite:'rpf.indianrailways.gov.in', salaryRange:'₹35,400 – ₹1,12,400/month', avgVacancies:'500–2,000', description:'Sub-Inspector in RPF/RPSF for railway security and law enforcement.' },
  { id:80, slug:'rpf-constable', name:'RPF Constable', conductingBody:'Railway Protection Force (RPF)', category:'Railway', level:'Central', frequency:'Irregular', minAge:18, maxAge:25, qualification:'10th Pass', selectionProcess:'CBT, PET/PMT, DV', officialWebsite:'rpf.indianrailways.gov.in', salaryRange:'₹21,700 – ₹69,100/month', avgVacancies:'2,000–10,000', description:'Constable in RPF/RPSF for railway station and train security duties.' },
  { id:81, slug:'delhi-police-hc', name:'Delhi Police Head Constable', conductingBody:'SSC / Delhi Police', category:'Police', level:'State', frequency:'Irregular', minAge:18, maxAge:25, qualification:'12th Pass', selectionProcess:'CBT, PE&MT, Typing Test, Computer Test', officialWebsite:'delhipolice.gov.in', salaryRange:'₹25,500 – ₹81,100/month', avgVacancies:'500–1,500', description:'Head Constable (Ministerial) in Delhi Police for clerical and administrative work.' },
  { id:82, slug:'delhi-police-constable', name:'Delhi Police Constable', conductingBody:'SSC / Delhi Police', category:'Police', level:'State', frequency:'Irregular', minAge:18, maxAge:25, qualification:'12th Pass', selectionProcess:'CBT, PE&MT, Medical', officialWebsite:'delhipolice.gov.in', salaryRange:'₹21,700 – ₹69,100/month', avgVacancies:'5,000–15,000', description:'Constable (Executive) in Delhi Police for law and order duties.' },
  { id:83, slug:'up-police-constable', name:'UP Police Constable', conductingBody:'UPPRPB', category:'Police', level:'State', frequency:'Irregular', minAge:18, maxAge:25, qualification:'12th Pass', selectionProcess:'Written, PST, PET, Medical', officialWebsite:'uppbpb.gov.in', salaryRange:'₹21,700 – ₹69,100/month', avgVacancies:'25,000–50,000', description:'Largest state police constable recruitment in India. UP Police hires in massive numbers.' },
  { id:84, slug:'up-police-si', name:'UP Police Sub Inspector (SI)', conductingBody:'UPPRPB', category:'Police', level:'State', frequency:'Irregular', minAge:21, maxAge:28, qualification:'Graduation', selectionProcess:'Written, PST, PET, Medical', officialWebsite:'uppbpb.gov.in', salaryRange:'₹35,400 – ₹1,12,400/month', avgVacancies:'5,000–10,000', description:'Sub Inspector recruitment in Uttar Pradesh Police.' },
  { id:85, slug:'bihar-police-si', name:'Bihar Police Sub Inspector', conductingBody:'BPSSC', category:'Police', level:'State', frequency:'Irregular', minAge:20, maxAge:37, qualification:'Graduation', selectionProcess:'Prelims, Mains, PET, Medical', officialWebsite:'bpssc.bih.nic.in', salaryRange:'₹35,400 – ₹1,12,400/month', avgVacancies:'1,000–3,000', description:'Sub Inspector (Daroga) recruitment in Bihar Police through BPSSC.' },
  { id:86, slug:'bihar-police-constable', name:'Bihar Police Constable', conductingBody:'CSBC', category:'Police', level:'State', frequency:'Irregular', minAge:18, maxAge:25, qualification:'12th Pass', selectionProcess:'Written, PET/PST', officialWebsite:'csbc.bih.nic.in', salaryRange:'₹21,700 – ₹69,100/month', avgVacancies:'5,000–20,000', description:'Constable recruitment in Bihar Police through Central Selection Board of Constable (CSBC).' },
  { id:87, slug:'maharashtra-police-constable', name:'Maharashtra Police Constable', conductingBody:'Maharashtra State Police', category:'Police', level:'State', frequency:'Irregular', minAge:18, maxAge:28, qualification:'12th Pass', selectionProcess:'Physical Test, Written Exam', officialWebsite:'mahapolice.gov.in', salaryRange:'₹21,700 – ₹69,100/month', avgVacancies:'5,000–15,000', description:'Police Constable/Shipai recruitment in Maharashtra Police.' },
  { id:88, slug:'rajasthan-police-constable', name:'Rajasthan Police Constable', conductingBody:'Rajasthan Police HQ', category:'Police', level:'State', frequency:'Irregular', minAge:18, maxAge:24, qualification:'12th Pass', selectionProcess:'Written, PET/PST, Proficiency Test', officialWebsite:'police.rajasthan.gov.in', salaryRange:'₹21,700 – ₹69,100/month', avgVacancies:'5,000–15,000', description:'Constable recruitment in Rajasthan Police.' },
  { id:89, slug:'mp-police-constable', name:'MP Police Constable', conductingBody:'MP Employees Selection Board', category:'Police', level:'State', frequency:'Irregular', minAge:18, maxAge:36, qualification:'10th / 12th Pass', selectionProcess:'Written, PET/PST', officialWebsite:'esb.mp.gov.in', salaryRange:'₹19,500 – ₹62,000/month', avgVacancies:'3,000–10,000', description:'Constable recruitment in Madhya Pradesh Police.' },
  { id:90, slug:'dsssb-tgt-pgt-prt', name:'DSSSB TGT/PGT/PRT', conductingBody:'Delhi Subordinate Services Selection Board', category:'Teaching', level:'State', frequency:'Irregular', minAge:18, maxAge:36, qualification:'Degree + B.Ed + CTET', selectionProcess:'Tier I, Tier II (for some posts)', officialWebsite:'dsssb.delhi.gov.in', salaryRange:'₹35,400 – ₹1,51,100/month', avgVacancies:'2,000–10,000', description:'Teaching posts in Delhi government schools — PRT, TGT and PGT for various subjects.' },
  { id:91, slug:'dsssb-ldc', name:'DSSSB LDC / Junior Secretariat Assistant', conductingBody:'Delhi Subordinate Services Selection Board', category:'SSC', level:'State', frequency:'Irregular', minAge:18, maxAge:27, qualification:'12th Pass + Typing Speed', selectionProcess:'Written Exam, Skill Test', officialWebsite:'dsssb.delhi.gov.in', salaryRange:'₹19,900 – ₹63,200/month', avgVacancies:'500–2,000', description:'Clerical posts in Delhi government offices.' },
  { id:92, slug:'cgpsc-state-service', name:'CGPSC State Service Exam', conductingBody:'Chhattisgarh PSC', category:'State PSC', level:'State', frequency:'Annual', minAge:21, maxAge:30, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'psc.cg.gov.in', salaryRange:'₹44,900 – ₹2,09,200/month', avgVacancies:'100–300 annually', description:'Chhattisgarh state civil services for administrative and police service posts.' },
  { id:93, slug:'jpsc-civil-services', name:'JPSC Civil Services Exam', conductingBody:'Jharkhand PSC', category:'State PSC', level:'State', frequency:'Irregular', minAge:21, maxAge:35, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'jpsc.gov.in', salaryRange:'₹44,900 – ₹2,09,200/month', avgVacancies:'100–300', description:'Jharkhand state civil services for Deputy Collector, DSP and other administrative posts.' },
  { id:94, slug:'ukpsc-civil-services', name:'UKPSC Civil Services Exam', conductingBody:'Uttarakhand PSC', category:'State PSC', level:'State', frequency:'Irregular', minAge:21, maxAge:42, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'psc.uk.gov.in', salaryRange:'₹44,900 – ₹2,09,200/month', avgVacancies:'100–200', description:'Uttarakhand state civil services exam.' },
  { id:95, slug:'opsc-civil-services', name:'OPSC Odisha Civil Services', conductingBody:'Odisha PSC', category:'State PSC', level:'State', frequency:'Annual', minAge:21, maxAge:38, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'opsc.gov.in', salaryRange:'₹44,900 – ₹2,09,200/month', avgVacancies:'100–300 annually', description:'Odisha Administrative Service and other state service exam.' },
  { id:96, slug:'apsc-cce', name:'APSC Combined Competitive Exam', conductingBody:'Assam PSC', category:'State PSC', level:'State', frequency:'Annual', minAge:21, maxAge:38, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'apsc.nic.in', salaryRange:'₹44,900 – ₹2,09,200/month', avgVacancies:'100–200 annually', description:'Assam Civil Service and allied state services exam.' },
  { id:97, slug:'hpas', name:'HPAS (Himachal Pradesh Admin Service)', conductingBody:'Himachal Pradesh PSC', category:'State PSC', level:'State', frequency:'Annual', minAge:21, maxAge:35, qualification:'Graduation', selectionProcess:'Prelims, Mains, Interview', officialWebsite:'hppsc.hp.gov.in', salaryRange:'₹44,900 – ₹2,09,200/month', avgVacancies:'50–150 annually', description:'Himachal Pradesh Administrative Service exam.' },
  { id:98, slug:'upsssc-pet', name:'UPSSSC PET (Preliminary Eligibility Test)', conductingBody:'UP Subordinate Services Selection Commission', category:'State PSC', level:'State', frequency:'Annual', minAge:18, maxAge:40, qualification:'10th Pass minimum', selectionProcess:'Written Exam (gateway for further recruitment)', officialWebsite:'upsssc.gov.in', salaryRange:'Varies by subsequent recruitment', avgVacancies:'Not applicable (eligibility test)', description:'Mandatory preliminary exam for all UPSSSC recruitments in UP. Gateway test for Group C posts.' },
  { id:99, slug:'rsmssb-patwari', name:'RSMSSB Patwari', conductingBody:'Rajasthan Subordinate & Ministerial Services SB', category:'State PSC', level:'State', frequency:'Irregular', minAge:18, maxAge:40, qualification:'Graduation + Computer Knowledge', selectionProcess:'Written Exam, DV', officialWebsite:'rsmssb.rajasthan.gov.in', salaryRange:'₹20,800 – ₹66,000/month', avgVacancies:'2,000–5,000', description:'Patwari (revenue officer) recruitment in Rajasthan for land revenue and record management.' },
  { id:100, slug:'aai-je-common', name:'AAI Junior Executive (Common Cadre)', conductingBody:'Airports Authority of India (AAI)', category:'Banking', level:'Central', frequency:'Irregular', minAge:18, maxAge:27, qualification:'Graduation', selectionProcess:'CBT, Application Verification', officialWebsite:'aai.aero', salaryRange:'₹40,000 – ₹1,40,000/month', avgVacancies:'200–500', description:'Junior Executive in AAI for airport operations, finance, HR and other common cadre posts.' },
];

export function getAllExamSlugs(): string[] {
  return allExams.map(e => e.slug);
}

export function getExamBriefBySlug(slug: string): ExamBrief | undefined {
  return allExams.find(e => e.slug === slug);
}

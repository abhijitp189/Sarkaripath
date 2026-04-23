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
    title: 'SSC Combined Graduate Level (CGL)',
    shortName: 'SSC CGL',
    conductingBody: 'Staff Selection Commission',
    category: 'SSC',
    level: 'Central',
    frequency: 'Once a year (Notification usually in April)',
    avgVacancies: '7,000–10,000 posts annually',
    salaryRange: '₹25,500 – ₹1,51,100 per month (Pay Level 4 to 11)',
    description: 'SSC CGL is one of India\'s most popular graduate-level competitive exams. It recruits for various Group B and Group C posts across central government ministries, departments, and organizations. Posts include Inspector (Income Tax/CBI/Customs), Auditor (CAG/CGDA), Statistical Investigator, Sub Inspector (NIA/CBI), Assistant (MEA/IB/CSS), and many more.',
    officialWebsite: 'https://ssc.nic.in',
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
        name: 'Tier I (Computer Based)',
        subjects: ['General Intelligence & Reasoning (25 Qs)', 'General Awareness (25 Qs)', 'Quantitative Aptitude (25 Qs)', 'English Comprehension (25 Qs)'],
        totalMarks: 200,
        duration: '1 hour',
        type: 'MCQ (Objective) – Negative marking 0.50',
      },
      {
        name: 'Tier II (Computer Based)',
        subjects: [
          'Session I: Mathematical Abilities (30 Qs) + Reasoning & General Intelligence (30 Qs) – 390 marks',
          'Session II: English Language (45 Qs) + General Awareness (25 Qs) + Computer Knowledge (20 Qs) – 390 marks',
          'Session II also includes: Data Entry Speed Test (DEST) – qualifying',
        ],
        totalMarks: 780,
        duration: 'Session I: 2.5 hours, Session II: 2.25 hours',
        type: 'MCQ (Objective) – Negative marking 1.0 for 3-mark Qs, 0.50 for 2-mark Qs',
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
      { question: 'What posts can I get through SSC CGL?', answer: 'SSC CGL covers various posts including Income Tax Inspector, CBI Sub Inspector, Assistant Audit Officer, Customs Inspector, Preventive Officer, Assistant in MEA/CSS, and Statistical Investigator among others. Posts are allocated based on your rank and preference.' },
      { question: 'Is there an interview in SSC CGL?', answer: 'No, the interview has been removed from SSC CGL since 2016. Selection is based purely on Tier I and Tier II exam scores. This makes it a completely transparent and merit-based selection process.' },
      { question: 'How many times can I attempt SSC CGL?', answer: 'There is no limit on the number of attempts for SSC CGL as long as you meet the age criteria. You can keep appearing until you cross the upper age limit for your category.' },
      { question: 'What is the cut-off range for SSC CGL?', answer: 'Cut-offs vary by year and category. For General category, the Tier I cut-off usually ranges between 140-160 out of 200. The final cut-off for top posts like Income Tax Inspector typically ranges from 600-700 out of 980 combined.' },
    ],
    tips: [
      'Focus heavily on Maths – it carries the most weight and is the biggest differentiator.',
      'Practice 50 Maths questions daily. Speed matters more than just knowing the concept.',
      'For English, read editorial pages of The Hindu daily. It improves comprehension and vocabulary together.',
      'Attempt every mock test in exam conditions – strict timing, no breaks, no phone.',
      'Learn shortcuts and tricks for Maths and Reasoning. They save 2-3 minutes per question.',
      'Current affairs of last 6 months are enough for General Awareness. Don\'t go beyond that.',
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
    salaryRange: '₹36,000 – ₹63,840 per month (starting basic ₹36,000 + DA + HRA)',
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
    salaryRange: '₹41,960 – ₹67,564 per month (basic ₹41,960 + allowances)',
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
    title: 'How to Start Government Exam Preparation from Zero',
    description: 'A complete beginner\'s guide to starting your government exam preparation journey, including choosing the right exam, creating a study plan, and essential resources.',
    category: 'Getting Started',
    readTime: '12 min read',
  },
  {
    slug: 'best-free-resources-government-exams',
    title: 'Best Free Resources for Government Exam Preparation (2025)',
    description: 'Curated list of the best free YouTube channels, websites, apps, and Telegram groups for preparing for all major government exams without spending any money.',
    category: 'Resources',
    readTime: '10 min read',
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
    description: 'Common mistakes to avoid and step-by-step guide for filling online application forms for SSC, UPSC, Banking, Railway, and other government job exams.',
    category: 'Application',
    readTime: '6 min read',
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
export interface ExamBrief {
  id: number;
  name: string;
  conductingBody: string;
  category: 'UPSC' | 'SSC' | 'Banking' | 'Railway' | 'Defence' | 'State PSC' | 'Teaching' | 'Police';
  level: 'Central' | 'State';
  minAge: number;
  maxAge: number;
  qualification: '8th Pass' | '10th Pass' | '12th Pass' | 'Graduate' | 'Post Graduate';
  selectionProcess: string;
  officialWebsite: string;
  slug?: string; // links to detailed page if available
}

export const allExams: ExamBrief[] = [
  { id: 1, name: 'UPSC Civil Services (IAS/IPS/IFS)', conductingBody: 'UPSC', category: 'UPSC', level: 'Central', minAge: 21, maxAge: 32, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'upsc.gov.in', slug: 'upsc-ias' },
  { id: 2, name: 'SSC Combined Graduate Level (CGL)', conductingBody: 'SSC', category: 'SSC', level: 'Central', minAge: 18, maxAge: 32, qualification: 'Graduate', selectionProcess: 'Tier I, Tier II', officialWebsite: 'ssc.gov.in', slug: 'ssc-cgl' },
  { id: 3, name: 'SBI Probationary Officer (PO)', conductingBody: 'State Bank of India', category: 'Banking', level: 'Central', minAge: 21, maxAge: 30, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'sbi.co.in/careers', slug: 'sbi-po' },
  { id: 4, name: 'IBPS Probationary Officer (PO)', conductingBody: 'IBPS', category: 'Banking', level: 'Central', minAge: 20, maxAge: 30, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'ibps.in', slug: 'ibps-po' },
  { id: 5, name: 'RRB NTPC', conductingBody: 'Railway Recruitment Board', category: 'Railway', level: 'Central', minAge: 18, maxAge: 33, qualification: '12th Pass', selectionProcess: 'CBT 1, CBT 2, Skill Test', officialWebsite: 'indianrailways.gov.in', slug: 'rrb-ntpc' },
  { id: 6, name: 'UPSC NDA', conductingBody: 'UPSC', category: 'Defence', level: 'Central', minAge: 16, maxAge: 19, qualification: '12th Pass', selectionProcess: 'Written Exam, SSB Interview', officialWebsite: 'upsc.gov.in' },
  { id: 7, name: 'UPSC CDS', conductingBody: 'UPSC', category: 'Defence', level: 'Central', minAge: 20, maxAge: 24, qualification: 'Graduate', selectionProcess: 'Written Exam, SSB Interview', officialWebsite: 'upsc.gov.in' },
  { id: 8, name: 'SSC CHSL', conductingBody: 'SSC', category: 'SSC', level: 'Central', minAge: 18, maxAge: 27, qualification: '12th Pass', selectionProcess: 'Tier I, Tier II, Skill Test', officialWebsite: 'ssc.gov.in' },
  { id: 9, name: 'SSC MTS', conductingBody: 'SSC', category: 'SSC', level: 'Central', minAge: 18, maxAge: 27, qualification: '10th Pass', selectionProcess: 'CBT, Physical Test', officialWebsite: 'ssc.gov.in' },
  { id: 10, name: 'SSC GD Constable', conductingBody: 'SSC', category: 'Police', level: 'Central', minAge: 18, maxAge: 23, qualification: '10th Pass', selectionProcess: 'CBT, PET, PST, Medical', officialWebsite: 'ssc.gov.in' },
  { id: 11, name: 'IBPS Clerk', conductingBody: 'IBPS', category: 'Banking', level: 'Central', minAge: 20, maxAge: 28, qualification: 'Graduate', selectionProcess: 'Prelims, Mains', officialWebsite: 'ibps.in' },
  { id: 12, name: 'SBI Clerk (Junior Associates)', conductingBody: 'State Bank of India', category: 'Banking', level: 'Central', minAge: 20, maxAge: 28, qualification: 'Graduate', selectionProcess: 'Prelims, Mains', officialWebsite: 'sbi.co.in/careers' },
  { id: 13, name: 'RBI Grade B Officer', conductingBody: 'Reserve Bank of India', category: 'Banking', level: 'Central', minAge: 21, maxAge: 30, qualification: 'Graduate', selectionProcess: 'Phase I, Phase II, Interview', officialWebsite: 'rbi.org.in' },
  { id: 14, name: 'RBI Assistant', conductingBody: 'Reserve Bank of India', category: 'Banking', level: 'Central', minAge: 20, maxAge: 28, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, LPT', officialWebsite: 'rbi.org.in' },
  { id: 15, name: 'IBPS RRB Officer Scale I (PO)', conductingBody: 'IBPS', category: 'Banking', level: 'Central', minAge: 18, maxAge: 30, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'ibps.in' },
  { id: 16, name: 'IBPS RRB Office Assistant (Clerk)', conductingBody: 'IBPS', category: 'Banking', level: 'Central', minAge: 18, maxAge: 28, qualification: 'Graduate', selectionProcess: 'Prelims, Mains', officialWebsite: 'ibps.in' },
  { id: 17, name: 'RRB Group D', conductingBody: 'Railway Recruitment Cell', category: 'Railway', level: 'Central', minAge: 18, maxAge: 33, qualification: '10th Pass', selectionProcess: 'CBT, PET, DV, Medical', officialWebsite: 'indianrailways.gov.in' },
  { id: 18, name: 'RRB Assistant Loco Pilot (ALP)', conductingBody: 'Railway Recruitment Board', category: 'Railway', level: 'Central', minAge: 18, maxAge: 30, qualification: '12th Pass', selectionProcess: 'CBT 1, CBT 2, CBAT, DV', officialWebsite: 'indianrailways.gov.in' },
  { id: 19, name: 'RRB Junior Engineer (JE)', conductingBody: 'Railway Recruitment Board', category: 'Railway', level: 'Central', minAge: 18, maxAge: 33, qualification: 'Graduate', selectionProcess: 'CBT 1, CBT 2, DV, Medical', officialWebsite: 'indianrailways.gov.in' },
  { id: 20, name: 'UPSC Engineering Services (ESE)', conductingBody: 'UPSC', category: 'UPSC', level: 'Central', minAge: 21, maxAge: 30, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'upsc.gov.in' },
  { id: 21, name: 'UPSC CAPF Assistant Commandant', conductingBody: 'UPSC', category: 'Defence', level: 'Central', minAge: 20, maxAge: 25, qualification: 'Graduate', selectionProcess: 'Written, PET/Medical, Interview', officialWebsite: 'upsc.gov.in' },
  { id: 22, name: 'AFCAT (Air Force)', conductingBody: 'Indian Air Force', category: 'Defence', level: 'Central', minAge: 20, maxAge: 26, qualification: 'Graduate', selectionProcess: 'Written, AFSB Interview', officialWebsite: 'afcat.cdac.in' },
  { id: 23, name: 'SSC CPO (Sub Inspector)', conductingBody: 'SSC', category: 'Police', level: 'Central', minAge: 20, maxAge: 25, qualification: 'Graduate', selectionProcess: 'Paper I, PET/PST, Paper II, Medical', officialWebsite: 'ssc.gov.in' },
  { id: 24, name: 'SSC Junior Engineer (JE)', conductingBody: 'SSC', category: 'SSC', level: 'Central', minAge: 18, maxAge: 32, qualification: 'Graduate', selectionProcess: 'Paper I, Paper II', officialWebsite: 'ssc.gov.in' },
  { id: 25, name: 'LIC AAO', conductingBody: 'Life Insurance Corporation', category: 'Banking', level: 'Central', minAge: 21, maxAge: 30, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'licindia.in' },
  { id: 26, name: 'LIC ADO', conductingBody: 'Life Insurance Corporation', category: 'Banking', level: 'Central', minAge: 21, maxAge: 30, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'licindia.in' },
  { id: 27, name: 'NABARD Grade A Officer', conductingBody: 'NABARD', category: 'Banking', level: 'Central', minAge: 21, maxAge: 30, qualification: 'Graduate', selectionProcess: 'Phase I, Phase II, Interview', officialWebsite: 'nabard.org' },
  { id: 28, name: 'FCI Manager', conductingBody: 'Food Corporation of India', category: 'Banking', level: 'Central', minAge: 18, maxAge: 28, qualification: 'Graduate', selectionProcess: 'Phase I, Phase II, Interview', officialWebsite: 'fci.gov.in' },
  { id: 29, name: 'FCI Assistant Grade III', conductingBody: 'Food Corporation of India', category: 'Banking', level: 'Central', minAge: 18, maxAge: 27, qualification: 'Graduate', selectionProcess: 'Phase I, Phase II', officialWebsite: 'fci.gov.in' },
  { id: 30, name: 'IB ACIO (Intelligence Bureau)', conductingBody: 'Ministry of Home Affairs', category: 'UPSC', level: 'Central', minAge: 18, maxAge: 27, qualification: 'Graduate', selectionProcess: 'Tier I, Tier II, Interview', officialWebsite: 'mha.gov.in' },
  { id: 31, name: 'IB Security Assistant', conductingBody: 'Ministry of Home Affairs', category: 'Police', level: 'Central', minAge: 18, maxAge: 25, qualification: '10th Pass', selectionProcess: 'Tier I, Tier II, Interview', officialWebsite: 'mha.gov.in' },
  { id: 32, name: 'CTET (Central Teacher Eligibility Test)', conductingBody: 'CBSE', category: 'Teaching', level: 'Central', minAge: 18, maxAge: 99, qualification: 'Graduate', selectionProcess: 'Paper 1, Paper 2', officialWebsite: 'ctet.nic.in' },
  { id: 33, name: 'UGC NET', conductingBody: 'NTA', category: 'Teaching', level: 'Central', minAge: 18, maxAge: 35, qualification: 'Post Graduate', selectionProcess: 'CBT (Paper I & II)', officialWebsite: 'ugcnet.nta.nic.in' },
  { id: 34, name: 'KVS PRT/TGT/PGT', conductingBody: 'Kendriya Vidyalaya Sangathan', category: 'Teaching', level: 'Central', minAge: 18, maxAge: 40, qualification: 'Graduate', selectionProcess: 'Written Test, Interview/Demo', officialWebsite: 'kvsangathan.nic.in' },
  { id: 35, name: 'NVS Teaching Staff', conductingBody: 'Navodaya Vidyalaya Samiti', category: 'Teaching', level: 'Central', minAge: 18, maxAge: 40, qualification: 'Graduate', selectionProcess: 'CBT, Interview', officialWebsite: 'navodaya.gov.in' },
  { id: 36, name: 'MPSC State Services (Rajyaseva)', conductingBody: 'Maharashtra PSC', category: 'State PSC', level: 'State', minAge: 19, maxAge: 38, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'mpsc.gov.in' },
  { id: 37, name: 'UPPSC PCS', conductingBody: 'Uttar Pradesh PSC', category: 'State PSC', level: 'State', minAge: 21, maxAge: 40, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'uppsc.up.nic.in' },
  { id: 38, name: 'BPSC Combined Competitive Exam', conductingBody: 'Bihar PSC', category: 'State PSC', level: 'State', minAge: 20, maxAge: 37, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'bpsc.bih.nic.in' },
  { id: 39, name: 'RPSC RAS/RTS', conductingBody: 'Rajasthan PSC', category: 'State PSC', level: 'State', minAge: 21, maxAge: 40, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'rpsc.rajasthan.gov.in' },
  { id: 40, name: 'MPPSC State Service Exam', conductingBody: 'Madhya Pradesh PSC', category: 'State PSC', level: 'State', minAge: 21, maxAge: 40, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'mppsc.mp.gov.in' },
  { id: 41, name: 'WBCS Executive', conductingBody: 'West Bengal PSC', category: 'State PSC', level: 'State', minAge: 21, maxAge: 36, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'wbpsc.gov.in' },
  { id: 42, name: 'TNPSC Group 1', conductingBody: 'Tamil Nadu PSC', category: 'State PSC', level: 'State', minAge: 21, maxAge: 32, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'tnpsc.gov.in' },
  { id: 43, name: 'TNPSC Group 2', conductingBody: 'Tamil Nadu PSC', category: 'State PSC', level: 'State', minAge: 18, maxAge: 32, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'tnpsc.gov.in' },
  { id: 44, name: 'TNPSC Group 4', conductingBody: 'Tamil Nadu PSC', category: 'State PSC', level: 'State', minAge: 18, maxAge: 32, qualification: '10th Pass', selectionProcess: 'Written Exam, DV', officialWebsite: 'tnpsc.gov.in' },
  { id: 45, name: 'KPSC KAS', conductingBody: 'Karnataka PSC', category: 'State PSC', level: 'State', minAge: 21, maxAge: 35, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'kpsc.kar.nic.in' },
  { id: 46, name: 'Kerala PSC KAS', conductingBody: 'Kerala PSC', category: 'State PSC', level: 'State', minAge: 21, maxAge: 32, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'keralapsc.gov.in' },
  { id: 47, name: 'GPSC Class 1 & 2', conductingBody: 'Gujarat PSC', category: 'State PSC', level: 'State', minAge: 20, maxAge: 35, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'gpsc.gujarat.gov.in' },
  { id: 48, name: 'HPSC HCS', conductingBody: 'Haryana PSC', category: 'State PSC', level: 'State', minAge: 21, maxAge: 42, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'hpsc.gov.in' },
  { id: 49, name: 'PPSC Punjab Civil Services', conductingBody: 'Punjab PSC', category: 'State PSC', level: 'State', minAge: 21, maxAge: 37, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'ppsc.gov.in' },
  { id: 50, name: 'AAI Junior Executive (ATC)', conductingBody: 'Airports Authority of India', category: 'Banking', level: 'Central', minAge: 18, maxAge: 27, qualification: 'Graduate', selectionProcess: 'CBT, Voice Test', officialWebsite: 'aai.aero' },
  { id: 51, name: 'DRDO CEPTAM', conductingBody: 'DRDO', category: 'Defence', level: 'Central', minAge: 18, maxAge: 28, qualification: '10th Pass', selectionProcess: 'Tier I, Tier II/Skill Test', officialWebsite: 'drdo.gov.in' },
  { id: 52, name: 'ISRO Scientist/Engineer', conductingBody: 'ISRO', category: 'Defence', level: 'Central', minAge: 18, maxAge: 28, qualification: 'Graduate', selectionProcess: 'Written Test, Interview', officialWebsite: 'isro.gov.in' },
  { id: 53, name: 'BARC Scientific Officer (OCES/DGFS)', conductingBody: 'BARC', category: 'Defence', level: 'Central', minAge: 18, maxAge: 26, qualification: 'Graduate', selectionProcess: 'Online Exam, Interview', officialWebsite: 'barcocesexam.in' },
  { id: 54, name: 'UPSC EPFO Enforcement Officer', conductingBody: 'UPSC', category: 'UPSC', level: 'Central', minAge: 21, maxAge: 30, qualification: 'Graduate', selectionProcess: 'Recruitment Test, Interview', officialWebsite: 'upsc.gov.in' },
  { id: 55, name: 'ESIC UDC', conductingBody: 'ESIC', category: 'Banking', level: 'Central', minAge: 18, maxAge: 27, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Skill Test', officialWebsite: 'esic.gov.in' },
  { id: 56, name: 'ESIC MTS', conductingBody: 'ESIC', category: 'Banking', level: 'Central', minAge: 18, maxAge: 25, qualification: '10th Pass', selectionProcess: 'Prelims, Mains', officialWebsite: 'esic.gov.in' },
  { id: 57, name: 'Supreme Court Junior Court Assistant', conductingBody: 'Supreme Court of India', category: 'UPSC', level: 'Central', minAge: 18, maxAge: 30, qualification: 'Graduate', selectionProcess: 'Written, Typing Test, Interview', officialWebsite: 'main.sci.gov.in' },
  { id: 58, name: 'NABARD Development Assistant', conductingBody: 'NABARD', category: 'Banking', level: 'Central', minAge: 21, maxAge: 35, qualification: 'Graduate', selectionProcess: 'Prelims, Mains', officialWebsite: 'nabard.org' },
  { id: 59, name: 'SEBI Grade A Officer', conductingBody: 'SEBI', category: 'Banking', level: 'Central', minAge: 18, maxAge: 30, qualification: 'Post Graduate', selectionProcess: 'Phase I, Phase II, Interview', officialWebsite: 'sebi.gov.in' },
  { id: 60, name: 'SIDBI Grade A Officer', conductingBody: 'SIDBI', category: 'Banking', level: 'Central', minAge: 18, maxAge: 30, qualification: 'Post Graduate', selectionProcess: 'Online Test, Interview', officialWebsite: 'sidbi.in' },
  { id: 61, name: 'Exim Bank Management Trainee', conductingBody: 'Export-Import Bank of India', category: 'Banking', level: 'Central', minAge: 18, maxAge: 27, qualification: 'Graduate', selectionProcess: 'Written Test, Interview', officialWebsite: 'eximbankindia.in' },
  { id: 62, name: 'NIACL Administrative Officer (AO)', conductingBody: 'New India Assurance', category: 'Banking', level: 'Central', minAge: 21, maxAge: 30, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'newindia.co.in' },
  { id: 63, name: 'NIACL Assistant', conductingBody: 'New India Assurance', category: 'Banking', level: 'Central', minAge: 21, maxAge: 30, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, LPT', officialWebsite: 'newindia.co.in' },
  { id: 64, name: 'UIIC Administrative Officer', conductingBody: 'United India Insurance', category: 'Banking', level: 'Central', minAge: 21, maxAge: 30, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'uiic.co.in' },
  { id: 65, name: 'OICL Administrative Officer', conductingBody: 'Oriental Insurance', category: 'Banking', level: 'Central', minAge: 21, maxAge: 30, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'orientalinsurance.org.in' },
  { id: 66, name: 'NICL Administrative Officer', conductingBody: 'National Insurance Company', category: 'Banking', level: 'Central', minAge: 21, maxAge: 30, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'nationalinsurance.nic.co.in' },
  { id: 67, name: 'Indian Coast Guard Navik (GD)', conductingBody: 'Indian Coast Guard', category: 'Defence', level: 'Central', minAge: 18, maxAge: 22, qualification: '12th Pass', selectionProcess: 'CBT, PFT, Medical', officialWebsite: 'joinindiancoastguard.cdac.in' },
  { id: 68, name: 'Indian Coast Guard Navik (DB)', conductingBody: 'Indian Coast Guard', category: 'Defence', level: 'Central', minAge: 18, maxAge: 22, qualification: '10th Pass', selectionProcess: 'CBT, PFT, Medical', officialWebsite: 'joinindiancoastguard.cdac.in' },
  { id: 69, name: 'Indian Navy Agniveer SSR/MR', conductingBody: 'Indian Navy', category: 'Defence', level: 'Central', minAge: 17, maxAge: 21, qualification: '12th Pass', selectionProcess: 'INET, PFT, Medical', officialWebsite: 'joinindiannavy.gov.in' },
  { id: 70, name: 'Indian Army Agniveer', conductingBody: 'Indian Army', category: 'Defence', level: 'Central', minAge: 17, maxAge: 21, qualification: '10th Pass', selectionProcess: 'CEE, Physical Rally, Medical', officialWebsite: 'joinindianarmy.nic.in' },
  { id: 71, name: 'IAF Agniveer Vayu', conductingBody: 'Indian Air Force', category: 'Defence', level: 'Central', minAge: 17, maxAge: 21, qualification: '12th Pass', selectionProcess: 'Online Exam, PFT, Medical', officialWebsite: 'agnipathvayu.cdac.in' },
  { id: 72, name: 'SSC Stenographer Grade C & D', conductingBody: 'SSC', category: 'SSC', level: 'Central', minAge: 18, maxAge: 30, qualification: '12th Pass', selectionProcess: 'CBT, Skill Test (Shorthand)', officialWebsite: 'ssc.gov.in' },
  { id: 73, name: 'SSC Selection Post', conductingBody: 'SSC', category: 'SSC', level: 'Central', minAge: 18, maxAge: 30, qualification: '10th Pass', selectionProcess: 'CBT, Skill Test', officialWebsite: 'ssc.gov.in' },
  { id: 74, name: 'SSC Junior Hindi Translator (JHT)', conductingBody: 'SSC', category: 'SSC', level: 'Central', minAge: 18, maxAge: 30, qualification: 'Post Graduate', selectionProcess: 'Paper I, Paper II', officialWebsite: 'ssc.gov.in' },
  { id: 75, name: 'UPSC Combined Medical Services (CMS)', conductingBody: 'UPSC', category: 'UPSC', level: 'Central', minAge: 18, maxAge: 32, qualification: 'Graduate', selectionProcess: 'CBT, Interview', officialWebsite: 'upsc.gov.in' },
  { id: 76, name: 'UPSC Indian Forest Service (IFS)', conductingBody: 'UPSC', category: 'UPSC', level: 'Central', minAge: 21, maxAge: 32, qualification: 'Graduate', selectionProcess: 'Prelims (via CSE), Mains, Interview', officialWebsite: 'upsc.gov.in' },
  { id: 77, name: 'UPSC IES/ISS', conductingBody: 'UPSC', category: 'UPSC', level: 'Central', minAge: 21, maxAge: 30, qualification: 'Post Graduate', selectionProcess: 'Written Exam, Interview', officialWebsite: 'upsc.gov.in' },
  { id: 78, name: 'UPSC Combined Geo-Scientist', conductingBody: 'UPSC', category: 'UPSC', level: 'Central', minAge: 21, maxAge: 32, qualification: 'Post Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'upsc.gov.in' },
  { id: 79, name: 'RPF Sub-Inspector (SI)', conductingBody: 'Railway Protection Force', category: 'Railway', level: 'Central', minAge: 20, maxAge: 25, qualification: 'Graduate', selectionProcess: 'CBT, PET/PMT, DV', officialWebsite: 'rpf.indianrailways.gov.in' },
  { id: 80, name: 'RPF Constable', conductingBody: 'Railway Protection Force', category: 'Railway', level: 'Central', minAge: 18, maxAge: 25, qualification: '10th Pass', selectionProcess: 'CBT, PET/PMT, DV', officialWebsite: 'rpf.indianrailways.gov.in' },
  { id: 81, name: 'Delhi Police Head Constable', conductingBody: 'SSC / Delhi Police', category: 'Police', level: 'State', minAge: 18, maxAge: 25, qualification: '12th Pass', selectionProcess: 'CBT, PE&MT, Typing Test', officialWebsite: 'delhipolice.gov.in' },
  { id: 82, name: 'Delhi Police Constable', conductingBody: 'SSC / Delhi Police', category: 'Police', level: 'State', minAge: 18, maxAge: 25, qualification: '12th Pass', selectionProcess: 'CBT, PE&MT, Medical', officialWebsite: 'delhipolice.gov.in' },
  { id: 83, name: 'UP Police Constable', conductingBody: 'UPPRPB', category: 'Police', level: 'State', minAge: 18, maxAge: 25, qualification: '12th Pass', selectionProcess: 'Written, PST, PET, Medical', officialWebsite: 'uppbpb.gov.in' },
  { id: 84, name: 'UP Police Sub Inspector (SI)', conductingBody: 'UPPRPB', category: 'Police', level: 'State', minAge: 21, maxAge: 28, qualification: 'Graduate', selectionProcess: 'Written, PST, PET, Medical', officialWebsite: 'uppbpb.gov.in' },
  { id: 85, name: 'Bihar Police Sub Inspector', conductingBody: 'BPSSC', category: 'Police', level: 'State', minAge: 20, maxAge: 37, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, PET, Medical', officialWebsite: 'bpssc.bih.nic.in' },
  { id: 86, name: 'Bihar Police Constable', conductingBody: 'CSBC', category: 'Police', level: 'State', minAge: 18, maxAge: 25, qualification: '12th Pass', selectionProcess: 'Written, PET/PST', officialWebsite: 'csbc.bih.nic.in' },
  { id: 87, name: 'Maharashtra Police Constable', conductingBody: 'Maharashtra State Police', category: 'Police', level: 'State', minAge: 18, maxAge: 28, qualification: '12th Pass', selectionProcess: 'Physical Test, Written Exam', officialWebsite: 'mahapolice.gov.in' },
  { id: 88, name: 'Rajasthan Police Constable', conductingBody: 'Rajasthan Police HQ', category: 'Police', level: 'State', minAge: 18, maxAge: 24, qualification: '12th Pass', selectionProcess: 'Written, PET/PST, Proficiency Test', officialWebsite: 'police.rajasthan.gov.in' },
  { id: 89, name: 'MP Police Constable', conductingBody: 'MP ESB', category: 'Police', level: 'State', minAge: 18, maxAge: 36, qualification: '10th Pass', selectionProcess: 'Written, PET/PST', officialWebsite: 'esb.mp.gov.in' },
  { id: 90, name: 'DSSSB TGT/PGT/PRT', conductingBody: 'Delhi SSSB', category: 'Teaching', level: 'State', minAge: 18, maxAge: 36, qualification: 'Graduate', selectionProcess: 'Tier I, Tier II', officialWebsite: 'dsssb.delhi.gov.in' },
  { id: 91, name: 'DSSSB LDC / Junior Secretariat Assistant', conductingBody: 'Delhi SSSB', category: 'SSC', level: 'State', minAge: 18, maxAge: 27, qualification: '12th Pass', selectionProcess: 'Written Exam, Skill Test', officialWebsite: 'dsssb.delhi.gov.in' },
  { id: 92, name: 'CGPSC State Service Exam', conductingBody: 'Chhattisgarh PSC', category: 'State PSC', level: 'State', minAge: 21, maxAge: 30, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'psc.cg.gov.in' },
  { id: 93, name: 'JPSC Civil Services Exam', conductingBody: 'Jharkhand PSC', category: 'State PSC', level: 'State', minAge: 21, maxAge: 35, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'jpsc.gov.in' },
  { id: 94, name: 'UKPSC Civil Services Exam', conductingBody: 'Uttarakhand PSC', category: 'State PSC', level: 'State', minAge: 21, maxAge: 42, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'psc.uk.gov.in' },
  { id: 95, name: 'OPSC Odisha Civil Services', conductingBody: 'Odisha PSC', category: 'State PSC', level: 'State', minAge: 21, maxAge: 38, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'opsc.gov.in' },
  { id: 96, name: 'APSC Combined Competitive Exam', conductingBody: 'Assam PSC', category: 'State PSC', level: 'State', minAge: 21, maxAge: 38, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'apsc.nic.in' },
  { id: 97, name: 'HPAS (Himachal Pradesh Admin Service)', conductingBody: 'Himachal Pradesh PSC', category: 'State PSC', level: 'State', minAge: 21, maxAge: 35, qualification: 'Graduate', selectionProcess: 'Prelims, Mains, Interview', officialWebsite: 'hppsc.hp.gov.in' },
  { id: 98, name: 'UPSSSC PET (Eligibility Test)', conductingBody: 'UP SSSB', category: 'State PSC', level: 'State', minAge: 18, maxAge: 40, qualification: '10th Pass', selectionProcess: 'Written Exam', officialWebsite: 'upsssc.gov.in' },
  { id: 99, name: 'RSMSSB Patwari', conductingBody: 'Rajasthan SMSSB', category: 'State PSC', level: 'State', minAge: 18, maxAge: 40, qualification: 'Graduate', selectionProcess: 'Written Exam, DV', officialWebsite: 'rsmssb.rajasthan.gov.in' },
  { id: 100, name: 'AAI Junior Executive (Common Cadre)', conductingBody: 'Airports Authority of India', category: 'Banking', level: 'Central', minAge: 18, maxAge: 27, qualification: 'Graduate', selectionProcess: 'CBT, Application Verification', officialWebsite: 'aai.aero' },
];

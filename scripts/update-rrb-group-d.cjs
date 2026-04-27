/**
 * TaiyarHo Patch Script — Adds detailed RRB Group D exam page
 * --------------------------------------------------------------
 * This script safely modifies lib/exams-data.ts by adding a new
 * detailed RRB Group D entry to the `exams[]` array. It does NOT
 * touch the existing `allExams[]` array (so the listing page still
 * shows it). The script is IDEMPOTENT — running it twice is safe.
 *
 * USAGE:
 *   1. Open Command Prompt / PowerShell in your repo root
 *      (the folder that contains package.json)
 *   2. Run: node scripts/update-rrb-group-d.cjs
 *   3. You should see "✅ Successfully added RRB Group D detailed entry."
 */

const fs = require('fs');
const path = require('path');

const EXAMS_DATA_PATH = path.join(__dirname, '..', 'lib', 'exams-data.ts');

// ─── New RRB Group D detailed exam entry ───────────────────────────────────
const NEW_EXAM = `  {
    slug: 'rrb-group-d',
    title: 'RRB Group D (Level-1 Posts in Indian Railways)',
    shortName: 'RRB Group D',
    conductingBody: 'Railway Recruitment Boards (RRBs) / Railway Recruitment Cells (RRCs)',
    category: 'Railway',
    level: 'Central',
    frequency: 'Every 2-4 years (Irregular cycle based on Railway recruitment needs)',
    avgVacancies: '32,000+ posts (CEN-08/2024); 1,03,769 in CEN-RRC-01/2019 cycle',
    salaryRange: '\\u20B918,000 – \\u20B956,900 per month (Pay Level 1, 7th CPC Pay Matrix)',
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
      { question: 'What is the salary of an RRB Group D employee?', answer: 'RRB Group D posts are at Pay Level 1 of the 7th CPC Pay Matrix with a starting basic pay of \\u20B918,000. Adding DA, HRA (depends on city), Travel Allowance, and other allowances, the in-hand initial salary ranges from approximately \\u20B922,500 to \\u20B926,000 per month. You also get free rail passes, medical facilities, pension under NPS, and other Indian Railways perks.' },
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
`;

// ─── Main script ───────────────────────────────────────────────────────────
function main() {
  if (!fs.existsSync(EXAMS_DATA_PATH)) {
    console.error('\u274C Could not find lib/exams-data.ts at:', EXAMS_DATA_PATH);
    console.error('   Make sure you are running this from your repo root (the folder with package.json).');
    process.exit(1);
  }

  let content = fs.readFileSync(EXAMS_DATA_PATH, 'utf8');

  // Idempotency check: if a detailed RRB Group D entry already exists in
  // the exams[] section (before allExams[]), skip.
  const examsArrayStart = content.indexOf('export const exams: Exam[] = [');
  const allExamsArrayStart = content.indexOf('export const allExams');

  if (examsArrayStart === -1) {
    console.error('\u274C Could not find `export const exams: Exam[] = [` in lib/exams-data.ts');
    console.error('   The file structure may have changed. Aborting safely.');
    process.exit(1);
  }
  if (allExamsArrayStart === -1) {
    console.error('\u274C Could not find `export const allExams` in lib/exams-data.ts');
    console.error('   The file structure may have changed. Aborting safely.');
    process.exit(1);
  }
  if (allExamsArrayStart < examsArrayStart) {
    console.error('\u274C Unexpected file order: allExams declared before exams. Aborting safely.');
    process.exit(1);
  }

  // Section between `exams[]` declaration and `allExams[]` declaration.
  const examsSection = content.substring(examsArrayStart, allExamsArrayStart);

  if (examsSection.includes("slug: 'rrb-group-d'")) {
    console.log('\u2139\uFE0F  RRB Group D detailed entry already present in exams[]. Skipping insert.');
    console.log('   (Script is idempotent — this is safe.)');
    return;
  }

  // Find the closing `];` of the exams[] array. It is the LAST `];`
  // that appears before the `export const allExams` declaration.
  let closingIndex = -1;
  let cursor = examsArrayStart;
  while (true) {
    const nextClose = content.indexOf('];', cursor);
    if (nextClose === -1 || nextClose >= allExamsArrayStart) break;
    closingIndex = nextClose;
    cursor = nextClose + 2;
  }

  if (closingIndex === -1) {
    console.error('\u274C Could not locate the closing `];` of the exams[] array. Aborting safely.');
    process.exit(1);
  }

  // Insert NEW_EXAM right before `];`
  const before = content.slice(0, closingIndex);
  const after = content.slice(closingIndex);
  const updated = before + NEW_EXAM + after;

  // Write back
  fs.writeFileSync(EXAMS_DATA_PATH, updated, 'utf8');

  console.log('\u2705 Successfully added RRB Group D detailed entry.');
  console.log('   File modified: lib/exams-data.ts');
  console.log('');
  console.log('Next steps:');
  console.log('   1. (Optional) Run `npx tsc --noEmit` to verify zero TypeScript errors');
  console.log('   2. The updated public/sitemap.xml is already in place');
  console.log('   3. Commit & push via GitHub Desktop as usual');
  console.log('   4. After Vercel deploys, click "Validate Fix" in Google Search Console for any pending issues');
}

main();

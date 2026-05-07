export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  tags: string[];
  publishedDate: string;
  updatedDate: string;
  readTime: string;
  author: string;
  excerpt: string;
  examSlug?: string; // links to related exam page
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'ibps-po-salary-in-hand-2026',
    title: 'IBPS PO Salary In Hand 2026: CTC, Allowances & Perks Explained',
    metaTitle: 'IBPS PO Salary In Hand 2026: ₹52,000–₹55,000/month After All Deductions | TaiyarHo',
    metaDescription: 'IBPS PO actual in-hand salary 2026: ₹52,000–₹55,000/month. Basic ₹36,000 + DA + HRA + allowances − deductions. City-wise breakup, CTC vs in-hand, and hidden perks explained.',
    category: 'Banking',
    tags: ['IBPS PO', 'Bank PO Salary 2026', 'IBPS PO In-Hand Salary', '12th Bipartite Settlement', 'Bank PO Allowances'],
    publishedDate: 'April 30, 2026',
    updatedDate: 'April 30, 2026',
    readTime: '13 min read',
    author: 'TaiyarHo Editorial',
    excerpt: 'What does an IBPS PO actually earn in 2026? Break down the complete salary structure — basic pay, DA, HRA, city allowances, and the hidden perks that can push your total package to ₹1 lakh/month.',
    examSlug: 'ibps-po',
  },
  {
    slug: 'ssc-cgl-vs-chsl-which-is-easier-2026',
    title: 'SSC CGL vs CHSL: Which is Easier and More Worth It in 2026?',
    metaTitle: 'SSC CGL vs SSC CHSL 2026: Which is Easier, Better Salary & More Worth It? | TaiyarHo',
    metaDescription: 'Complete SSC CGL vs CHSL 2026 comparison — eligibility, salary, difficulty, vacancies, posts, and a clear recommendation. Find out which SSC exam is right for you.',
    category: 'SSC',
    tags: ['SSC CGL', 'SSC CHSL', 'SSC Comparison 2026', 'Government Job', 'Salary', 'Eligibility'],
    publishedDate: 'April 28, 2026',
    updatedDate: 'April 28, 2026',
    readTime: '14 min read',
    author: 'TaiyarHo Editorial',
    excerpt: 'SSC CGL vs CHSL — which exam should you choose in 2026? Complete head-to-head comparison of eligibility, salary (up to ₹75,000/month), difficulty level, vacancies, posts, and a clear verdict based on your profile.',
    examSlug: 'ssc-cgl',
  },
  {
    slug: 'government-exam-age-limit-obc-sc-st-relaxation-2026',
    title: 'Government Exam Age Limit with OBC, SC, ST Relaxation 2026 – Full List',
    metaTitle: 'Govt Exam Age Limit 2026: OBC +3, SC/ST +5, PwBD +10 – Category-wise Table | TaiyarHo',
    metaDescription: 'What does "age relaxation" mean? OBC gets +3 years, SC/ST gets +5, PwBD gets +10. Full category-wise age limit table for UPSC, SSC, Banking & Railway 2026. Check your exact age cutoff.',
    category: 'Preparation',
    tags: ['Age Relaxation Meaning', 'Age Relaxation Means', 'Age Limit 2026', 'OBC Age Relaxation', 'SC ST Age Relaxation', 'What is Age Relaxation', 'UPSC Age Limit', 'SSC CGL Age Limit', 'Government Exam Age Limit'],
    publishedDate: 'May 1, 2026',
    updatedDate: 'May 6, 2026',
    readTime: '10 min read',
    author: 'TaiyarHo Editorial',
    excerpt: 'Never miss an application deadline due to age confusion. This complete 2026 guide maps out exact age limits and category-wise relaxations (OBC, SC/ST, PwBD, Ex-SM) for UPSC, SSC, Banking, and Railway exams in one table.',
  },
  {
    slug: 'rrb-ntpc-2026-syllabus-tier-1-tier-2',
    title: 'RRB NTPC 2026 Syllabus: Tier 1 & Tier 2 with PDF Download',
    metaTitle: 'RRB NTPC 2026 Syllabus: Tier 1 & Tier 2 PDF | TaiyarHo',
    metaDescription: 'Complete RRB NTPC 2026 syllabus — Tier 1 & Tier 2 topic-wise breakdown, exam pattern, marking scheme, and free PDF download links. Updated May 2026.',
    category: 'Railway',
    tags: ['RRB NTPC', 'Syllabus 2026', 'Tier 1', 'Tier 2', 'Railway Exam', 'Free PDF'],
    publishedDate: 'May 3, 2026',
    updatedDate: 'May 3, 2026',
    readTime: '12 min read',
    author: 'TaiyarHo Editorial',
    excerpt: 'Complete RRB NTPC 2026 syllabus with topic-wise breakdown for CBT-1 and CBT-2, subject-wise weightage, exam pattern, and direct links to the official PDF. Covers both Graduate and Under-Graduate level posts.',
    examSlug: 'rrb-ntpc',
  },
  {
    slug: 'highest-salary-government-exam-after-12th-2026',
    title: 'Highest Salary Govt Exam After 12th Pass in 2026 – Ranked List',
    metaTitle: 'Highest Salary Govt Exam After 12th Pass 2026 – Ranked List | TaiyarHo',
    metaDescription: 'Which government exam has the highest salary after 12th pass in 2026? NDA, SSC CHSL, RBI Office Attendant — ranked by in-hand salary with 8th CPC projections.',
    category: 'Career',
    tags: ['Highest Salary After 12th', 'NDA Salary 2026', 'SSC CHSL Salary', 'Government Job 12th Pass', '8th Pay Commission'],
    publishedDate: 'May 5, 2026',
    updatedDate: 'May 5, 2026',
    readTime: '11 min read',
    author: 'TaiyarHo Editorial',
    excerpt: 'Which government exam gives the highest salary if you have only passed 12th? NDA leads at ₹1 lakh+/month (8th CPC). SSC CHSL DEO hits ₹50,000. Full ranked list with eligibility, exam dates & salary comparison.',
  },
  {
    slug: 'best-telegram-channels-govt-exams-2026',
    title: 'Best Telegram Channels for Govt Exams 2026 – Verified Master List',
    metaTitle: 'Best Telegram Channels for Govt Exams 2026 – Verified Master List | TaiyarHo',
    metaDescription: 'Verified list of the best Telegram channels for UPSC, SSC, Banking & Railway exams 2026. Free PDFs, daily current affairs, no spam — curated by TaiyarHo.',
    category: 'Preparation',
    tags: ['Telegram Channels 2026', 'UPSC Telegram', 'SSC Telegram', 'Banking Telegram', 'Railway Telegram', 'Free Study Material', 'Govt Exam Preparation'],
    publishedDate: 'May 7, 2026',
    updatedDate: 'May 7, 2026',
    readTime: '10 min read',
    author: 'TaiyarHo Editorial',
    excerpt: 'No paywalls, no spam. The only verified Telegram channel directory you need for UPSC, SSC CGL, IBPS PO, and RRB NTPC 2026 — with quality ratings, subscriber counts, and red-flag warnings.',
  },
  {
    slug: 'ssc-cgl-2026-syllabus-complete-guide',
    title: 'SSC CGL 2026 Syllabus: Complete Guide (Tier 1 & Tier 2)',
    metaTitle: 'SSC CGL 2026 Syllabus: Complete Guide (Tier 1 & Tier 2) | TaiyarHo',
    metaDescription: 'Complete SSC CGL 2026 syllabus with topic-wise breakdown for Tier 1 and Tier 2, exam pattern, marking scheme, and free preparation tips. Updated April 2026.',
    category: 'SSC',
    tags: ['SSC CGL', 'Syllabus 2026', 'Tier 1', 'Tier 2', 'Exam Pattern', 'Free Guide'],
    publishedDate: 'April 24, 2026',
    updatedDate: 'April 26, 2026',
    readTime: '12 min read',
    author: 'TaiyarHo Editorial',
    excerpt: 'Everything you need — full topic lists, exam pattern, marking scheme, and topic-wise weightage for SSC CGL 2026. Based on the official SSC notification. 100% free.',
    examSlug: 'ssc-cgl',
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(p => p.category === category);
}

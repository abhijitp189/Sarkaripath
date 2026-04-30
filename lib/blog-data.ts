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
    metaTitle: 'IBPS PO Salary In Hand 2026: CTC, Allowances & Perks Explained | TaiyarHo',
    metaDescription: 'IBPS PO salary in hand 2026 — exact figures for basic pay, DA, HRA, allowances, deductions & hidden perks. Based on 12th Bipartite Settlement.',
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

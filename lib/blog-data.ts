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

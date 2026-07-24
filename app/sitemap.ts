import { MetadataRoute } from 'next';
import { allExams, guides } from '@/lib/exams-data';
import { blogPosts } from '@/lib/blog-data';
import { currentAffairsPosts } from '@/lib/current-affairs-data';

const BASE_URL = 'https://www.taiyarho.in';

// ── Stable fallback date ─────────────────────────────────────────────────────
// Used for exam pages / guides that don't carry their own `updatedDate`, and as
// a floor for listing pages. Bump this ONLY when you do a broad content refresh
// across the whole site. Individual pages should carry their own `updatedDate`
// instead (see below) so a single edit doesn't reset every page's date.
const SITE_CONTENT_DATE = new Date('2026-06-25');

// Safely turn a date-ish value into a Date, falling back when missing/invalid.
function toDate(value?: string, fallback: Date = SITE_CONTENT_DATE): Date {
  if (!value) return fallback;
  const d = new Date(value);
  return isNaN(d.getTime()) ? fallback : d;
}

// Newest date within a list of dates (used to date listing/index pages).
function newestOf(dates: Date[], fallback: Date = SITE_CONTENT_DATE): Date {
  const times = dates.map((d) => d.getTime()).filter((t) => !isNaN(t));
  return times.length ? new Date(Math.max(...times)) : fallback;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Real content dates for the dynamic collections ─────────────────────────
  const blogDates = blogPosts.map((p) => toDate(p.updatedDate));
  const caDates = currentAffairsPosts.map((p) => toDate(p.updatedDate ?? p.publishedDate));
  const examDates = allExams.map((e) => toDate(e.updatedDate));
  const guideDates = guides.map((g) => toDate((g as { updatedDate?: string }).updatedDate));

  // Listing pages are dated by the newest item they display, so they refresh
  // when you add content but stay stable when nothing changed.
  const newestBlog = newestOf(blogDates);
  const newestCA = newestOf(caDates);
  const newestExam = newestOf(examDates);
  const newestGuide = newestOf(guideDates);
  const newestOverall = newestOf([newestBlog, newestCA, newestExam, newestGuide]);

  // ── Static routes ──────────────────────────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: newestOverall,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/exams/`,
      lastModified: newestExam,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/`,
      lastModified: newestBlog,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/`,
      lastModified: newestGuide,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/resources/`,
      lastModified: SITE_CONTENT_DATE,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/tools/eligibility-checker/`,
      lastModified: SITE_CONTENT_DATE,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/exam-calendar/`,
      lastModified: SITE_CONTENT_DATE,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/current-affairs/`,
      lastModified: newestCA,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // ── Policy / info pages ────────────────────────────────────────────────
    {
      url: `${BASE_URL}/about/`,
      lastModified: new Date('2026-05-12'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contact/`,
      lastModified: new Date('2026-05-12'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy-policy/`,
      lastModified: new Date('2026-05-12'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/disclaimer/`,
      lastModified: new Date('2026-05-12'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // ── Dynamic exam pages ─────────────────────────────────────────────────────
  // Uses each exam's own `updatedDate` when set, otherwise the stable fallback.
  const examRoutes: MetadataRoute.Sitemap = allExams.map((exam) => ({
    url: `${BASE_URL}/exams/${exam.slug}/`,
    lastModified: toDate(exam.updatedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // ── Dynamic blog posts ─────────────────────────────────────────────────────
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified: toDate(post.updatedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // ── Dynamic guide pages ────────────────────────────────────────────────────
  // Uses each guide's own `updatedDate` when set, otherwise the stable fallback.
  const guideRoutes: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${BASE_URL}/guides/${guide.slug}/`,
    lastModified: toDate((guide as { updatedDate?: string }).updatedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // ── Current Affairs pages ──────────────────────────────────────────────────
  const currentAffairsRoutes: MetadataRoute.Sitemap = currentAffairsPosts.map((post) => ({
    url: `${BASE_URL}/current-affairs/${post.slug}/`,
    lastModified: toDate(post.updatedDate ?? post.publishedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...examRoutes, ...blogRoutes, ...guideRoutes, ...currentAffairsRoutes];
}

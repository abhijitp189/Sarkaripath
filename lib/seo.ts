import { Metadata } from 'next';

const SITE_NAME = 'TaiyarHo';
const SITE_URL = 'https://taiyarho.in';
const SITE_DESCRIPTION = 'Free comprehensive guide for Indian government exam preparation. Syllabus, study plans, best books, free resources, and preparation strategies for UPSC, SSC, Banking, Railway, and all government exams.';

export function generatePageMeta({
  title,
  description,
  path = '',
  type = 'website',
}: {
  title: string;
  description: string;
  path?: string;
  type?: string;
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: type as 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateExamJsonLd(exam: {
  title: string;
  description: string;
  slug: string;
  conductingBody: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: exam.title,
    description: exam.description,
    provider: {
      '@type': 'Organization',
      name: exam.conductingBody,
    },
    url: `${SITE_URL}/exams/${exam.slug}`,
  };
}

export function generateFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

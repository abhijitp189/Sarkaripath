import type { Metadata } from 'next';
import { currentAffairsPosts } from '@/lib/current-affairs-data';

interface Props {
  children: React.ReactNode;
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = currentAffairsPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    alternates: {
      canonical: `https://taiyarho.in/current-affairs/${post.slug}/`,
    },
  };
}

export default function CurrentAffairsSlugLayout({ children }: Props) {
  return <>{children}</>;
}

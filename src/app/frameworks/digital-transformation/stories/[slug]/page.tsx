import { notFound } from 'next/navigation';
import DigitalSuccessStoryDetailClient from './DigitalSuccessStoryDetailClient';
import { getDigitalSuccessStoryBySlug, getAllDigitalSuccessStorySlugs } from '@/lib/digital-data';

export async function generateStaticParams() {
  const slugs = getAllDigitalSuccessStorySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getDigitalSuccessStoryBySlug(slug);
  if (!story) return { title: 'Story Not Found' };
  return { title: `${story.title} - PRIME SDN Success Stories`, description: story.story };
}

export default async function DigitalSuccessStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getDigitalSuccessStoryBySlug(slug);
  if (!story) notFound();
  return <DigitalSuccessStoryDetailClient story={story} />;
}

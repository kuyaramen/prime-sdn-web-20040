import { notFound } from 'next/navigation';
import StoryClient from './StoryClient';
import { getSuccessStoryBySlug, getAllSuccessStorySlugs } from '@/lib/education-data';

export async function generateStaticParams() {
  const slugs = getAllSuccessStorySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getSuccessStoryBySlug(slug);
  if (!story) return { title: 'Story Not Found' };
  return { title: `${story.name} - PRIME SDN Success Stories`, description: story.achievement };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getSuccessStoryBySlug(slug);
  if (!story) notFound();
  return <StoryClient story={story} />;
}

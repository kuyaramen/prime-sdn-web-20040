import { notFound } from 'next/navigation';
import SuccessStoriesClient from './SuccessStoriesClient';
import { successStories } from '@/lib/education-data';

export async function generateStaticParams() {
  return successStories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata() {
  return { title: 'Success Stories - PRIME SDN Education & Talent', description: 'Read inspiring stories of students and professionals who have achieved their goals.' };
}

export default function SuccessStoriesPage() {
  return <SuccessStoriesClient stories={successStories} />;
}

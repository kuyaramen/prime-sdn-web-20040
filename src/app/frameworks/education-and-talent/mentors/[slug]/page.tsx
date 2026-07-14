import { notFound } from 'next/navigation';
import MentorProfileClient from './MentorProfileClient';
import { getMentorBySlug, getAllMentorSlugs } from '@/lib/education-data';

export async function generateStaticParams() {
  const slugs = getAllMentorSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mentor = getMentorBySlug(slug);
  if (!mentor) return { title: 'Mentor Not Found' };
  return { title: `${mentor.name} - PRIME SDN Mentors`, description: mentor.bio };
}

export default async function MentorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mentor = getMentorBySlug(slug);
  if (!mentor) notFound();
  return <MentorProfileClient mentor={mentor} />;
}

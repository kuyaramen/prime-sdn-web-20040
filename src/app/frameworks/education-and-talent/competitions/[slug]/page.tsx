import { notFound } from 'next/navigation';
import CompetitionClient from './CompetitionClient';
import { getCompetitionBySlug, getAllCompetitionSlugs } from '@/lib/education-data';

export async function generateStaticParams() {
  const slugs = getAllCompetitionSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comp = getCompetitionBySlug(slug);
  if (!comp) return { title: 'Competition Not Found' };
  return { title: `${comp.title} - PRIME SDN Competitions`, description: comp.description };
}

export default async function CompetitionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comp = getCompetitionBySlug(slug);
  if (!comp) notFound();
  return <CompetitionClient competition={comp} />;
}

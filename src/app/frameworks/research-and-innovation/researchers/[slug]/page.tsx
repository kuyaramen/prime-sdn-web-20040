import { notFound } from 'next/navigation';
import ResearcherProfileClient from './ResearcherProfileClient';
import { getResearcherBySlug, getAllResearcherSlugs } from '@/lib/research-data';

export async function generateStaticParams() {
  const slugs = getAllResearcherSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const researcher = getResearcherBySlug(slug);
  if (!researcher) return { title: 'Researcher Not Found' };
  return { title: `${researcher.name} - PRIME SDN Research`, description: researcher.biography };
}

export default async function ResearcherPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const researcher = getResearcherBySlug(slug);
  if (!researcher) notFound();
  return <ResearcherProfileClient researcher={researcher} />;
}

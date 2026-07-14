import { notFound } from 'next/navigation';
import ResearchProjectClient from './ResearchProjectClient';
import { getResearchProjectBySlug, getAllResearchProjectSlugs } from '@/lib/research-data';

export async function generateStaticParams() {
  const slugs = getAllResearchProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getResearchProjectBySlug(slug);
  if (!project) return { title: 'Research Project Not Found' };
  return { title: `${project.title} - PRIME SDN Research`, description: project.summary };
}

export default async function ResearchProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getResearchProjectBySlug(slug);
  if (!project) notFound();
  return <ResearchProjectClient project={project} />;
}

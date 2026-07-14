import { notFound } from 'next/navigation';
import SmartProjectDetailClient from './SmartProjectDetailClient';
import { getSmartProjectBySlug, getAllSmartProjectSlugs } from '@/lib/digital-data';

export async function generateStaticParams() {
  const slugs = getAllSmartProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getSmartProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };
  return { title: `${project.name} - PRIME SDN Smart Projects`, description: project.description };
}

export default async function SmartProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getSmartProjectBySlug(slug);
  if (!project) notFound();
  return <SmartProjectDetailClient project={project} />;
}

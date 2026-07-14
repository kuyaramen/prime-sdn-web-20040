import { notFound } from 'next/navigation';
import TechnologyProfileClient from './TechnologyProfileClient';
import { getTechnologyBySlug, getAllTechnologySlugs } from '@/lib/research-data';

export async function generateStaticParams() {
  const slugs = getAllTechnologySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tech = getTechnologyBySlug(slug);
  if (!tech) return { title: 'Technology Not Found' };
  return { title: `${tech.name} - PRIME SDN Research`, description: tech.overview };
}

export default async function TechnologyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tech = getTechnologyBySlug(slug);
  if (!tech) notFound();
  return <TechnologyProfileClient technology={tech} />;
}

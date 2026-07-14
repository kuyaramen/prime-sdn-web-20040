import { notFound } from 'next/navigation';
import EmergingTechnologyDetailClient from './EmergingTechnologyDetailClient';
import { getEmergingTechnologyBySlug, getAllEmergingTechnologySlugs } from '@/lib/digital-data';

export async function generateStaticParams() {
  const slugs = getAllEmergingTechnologySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tech = getEmergingTechnologyBySlug(slug);
  if (!tech) return { title: 'Technology Not Found' };
  return { title: `${tech.name} - PRIME SDN Emerging Technologies`, description: tech.overview };
}

export default async function EmergingTechnologyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tech = getEmergingTechnologyBySlug(slug);
  if (!tech) notFound();
  return <EmergingTechnologyDetailClient technology={tech} />;
}

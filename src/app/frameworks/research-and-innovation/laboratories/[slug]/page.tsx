import { notFound } from 'next/navigation';
import LaboratoryClient from './LaboratoryClient';
import { getLaboratoryBySlug, getAllLaboratorySlugs } from '@/lib/research-data';

export async function generateStaticParams() {
  const slugs = getAllLaboratorySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lab = getLaboratoryBySlug(slug);
  if (!lab) return { title: 'Laboratory Not Found' };
  return { title: `${lab.name} - PRIME SDN Research`, description: lab.description };
}

export default async function LaboratoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lab = getLaboratoryBySlug(slug);
  if (!lab) notFound();
  return <LaboratoryClient laboratory={lab} />;
}

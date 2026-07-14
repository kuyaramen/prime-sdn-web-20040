import { notFound } from 'next/navigation';
import DigitalInfrastructureDetailClient from './DigitalInfrastructureDetailClient';
import { getDigitalInfrastructureBySlug, getAllDigitalInfrastructureSlugs } from '@/lib/digital-data';

export async function generateStaticParams() {
  const slugs = getAllDigitalInfrastructureSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const infra = getDigitalInfrastructureBySlug(slug);
  if (!infra) return { title: 'Infrastructure Not Found' };
  return { title: `${infra.name} - PRIME SDN Digital Infrastructure`, description: infra.description };
}

export default async function DigitalInfrastructurePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const infra = getDigitalInfrastructureBySlug(slug);
  if (!infra) notFound();
  return <DigitalInfrastructureDetailClient infrastructure={infra} />;
}

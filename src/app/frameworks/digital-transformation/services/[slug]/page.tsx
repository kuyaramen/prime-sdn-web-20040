import { notFound } from 'next/navigation';
import DigitalServiceDetailClient from './DigitalServiceDetailClient';
import { getDigitalServiceBySlug, getAllDigitalServiceSlugs } from '@/lib/digital-data';

export async function generateStaticParams() {
  const slugs = getAllDigitalServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getDigitalServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found' };
  return { title: `${service.name} - PRIME SDN Digital Services`, description: service.description };
}

export default async function DigitalServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getDigitalServiceBySlug(slug);
  if (!service) notFound();
  return <DigitalServiceDetailClient service={service} />;
}

import { notFound } from 'next/navigation';
import CareerClient from './CareerClient';
import { getCareerBySlug, getAllCareerSlugs } from '@/lib/education-data';

export async function generateStaticParams() {
  const slugs = getAllCareerSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const career = getCareerBySlug(slug);
  if (!career) return { title: 'Career Not Found' };
  return { title: `${career.title} - PRIME SDN Careers`, description: career.description };
}

export default async function CareerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const career = getCareerBySlug(slug);
  if (!career) notFound();
  return <CareerClient career={career} />;
}

import { notFound } from 'next/navigation';
import DigitalTrainingDetailClient from './DigitalTrainingDetailClient';
import { getDigitalTrainingBySlug, getAllDigitalTrainingSlugs } from '@/lib/digital-data';

export async function generateStaticParams() {
  const slugs = getAllDigitalTrainingSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const training = getDigitalTrainingBySlug(slug);
  if (!training) return { title: 'Training Not Found' };
  return { title: `${training.title} - PRIME SDN Digital Training`, description: training.description };
}

export default async function DigitalTrainingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const training = getDigitalTrainingBySlug(slug);
  if (!training) notFound();
  return <DigitalTrainingDetailClient training={training} />;
}

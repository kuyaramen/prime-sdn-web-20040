import { notFound } from 'next/navigation';
import UniversityProfileClient from './UniversityProfileClient';
import { getUniversityBySlug, getAllUniversitySlugs } from '@/lib/education-data';

export async function generateStaticParams() {
  const slugs = getAllUniversitySlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const university = getUniversityBySlug(slug);
  
  if (!university) {
    return {
      title: 'University Not Found',
    };
  }

  return {
    title: `${university.name} - PRIME SDN Universities`,
    description: university.overview,
  };
}

export default async function UniversityProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const university = getUniversityBySlug(slug);

  if (!university) {
    notFound();
  }

  return <UniversityProfileClient university={university} />;
}

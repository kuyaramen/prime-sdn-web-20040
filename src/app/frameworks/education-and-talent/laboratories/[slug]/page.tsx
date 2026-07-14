import { notFound } from 'next/navigation';
import LabClient from './LabClient';
import { getLaboratoryBySlug, getAllLaboratorySlugs } from '@/lib/education-data';

export async function generateStaticParams() {
  const slugs = getAllLaboratorySlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lab = getLaboratoryBySlug(slug);
  
  if (!lab) {
    return {
      title: 'Laboratory Not Found',
    };
  }

  return {
    title: `${lab.name} - PRIME SDN Laboratories`,
    description: lab.description,
  };
}

export default async function LabPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lab = getLaboratoryBySlug(slug);

  if (!lab) {
    notFound();
  }

  return <LabClient lab={lab} />;
}

import { notFound } from 'next/navigation';
import ScholarshipClient from './ScholarshipClient';
import { getScholarshipBySlug, getAllScholarshipSlugs } from '@/lib/education-data';

export async function generateStaticParams() {
  const slugs = getAllScholarshipSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const scholarship = getScholarshipBySlug(slug);
  
  if (!scholarship) {
    return {
      title: 'Scholarship Not Found',
    };
  }

  return {
    title: `${scholarship.title} - PRIME SDN Scholarships`,
    description: scholarship.title,
  };
}

export default async function ScholarshipProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const scholarship = getScholarshipBySlug(slug);

  if (!scholarship) {
    notFound();
  }

  return <ScholarshipClient scholarship={scholarship} />;
}

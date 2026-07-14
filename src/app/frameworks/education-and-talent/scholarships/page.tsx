import { notFound } from 'next/navigation';
import ScholarshipsClient from './ScholarshipsClient';
import { scholarships } from '@/lib/education-data';

export async function generateStaticParams() {
  return scholarships.map((scholarship) => ({
    slug: scholarship.slug,
  }));
}

export async function generateMetadata() {
  return {
    title: 'Scholarships - PRIME SDN Education & Talent',
    description: 'Find scholarship opportunities from government agencies, private institutions, and international organizations.',
  };
}

export default function ScholarshipsPage() {
  return <ScholarshipsClient scholarships={scholarships} />;
}

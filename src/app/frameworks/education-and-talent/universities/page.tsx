import { notFound } from 'next/navigation';
import UniversitiesClient from './UniversitiesClient';
import { universities } from '@/lib/education-data';

export async function generateStaticParams() {
  return universities.map((university) => ({
    slug: university.slug,
  }));
}

export async function generateMetadata() {
  return {
    title: 'Universities & Institutions - PRIME SDN Education & Talent',
    description: 'Partner with leading educational institutions offering world-class programs and research opportunities.',
  };
}

export default function UniversitiesPage() {
  return <UniversitiesClient universities={universities} />;
}

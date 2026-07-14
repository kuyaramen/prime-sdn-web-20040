import { notFound } from 'next/navigation';
import CareersClient from './CareersClient';
import { careers } from '@/lib/education-data';

export async function generateStaticParams() {
  return careers.map((career) => ({ slug: career.slug }));
}

export async function generateMetadata() {
  return { title: 'Career Opportunities - PRIME SDN Education & Talent', description: 'Find internships, apprenticeships, and job opportunities.' };
}

export default function CareersPage() {
  return <CareersClient careers={careers} />;
}

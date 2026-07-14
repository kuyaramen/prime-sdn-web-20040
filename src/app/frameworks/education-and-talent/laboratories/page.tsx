import { notFound } from 'next/navigation';
import LaboratoriesClient from './LaboratoriesClient';
import { laboratories } from '@/lib/education-data';

export async function generateStaticParams() {
  return laboratories.map((lab) => ({
    slug: lab.slug,
  }));
}

export async function generateMetadata() {
  return {
    title: 'Innovation Laboratories - PRIME SDN Education & Talent',
    description: 'Access cutting-edge laboratories and equipment for research, prototyping, and innovation.',
  };
}

export default function LaboratoriesPage() {
  return <LaboratoriesClient laboratories={laboratories} />;
}

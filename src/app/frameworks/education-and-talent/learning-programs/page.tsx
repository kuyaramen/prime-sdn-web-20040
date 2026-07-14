import { notFound } from 'next/navigation';
import LearningProgramsClient from './LearningProgramsClient';
import { learningPrograms } from '@/lib/education-data';

export async function generateStaticParams() {
  return learningPrograms.map((program) => ({
    slug: program.slug,
  }));
}

export async function generateMetadata() {
  return {
    title: 'Learning Programs - PRIME SDN Education & Talent',
    description: 'Discover comprehensive learning programs in AI, entrepreneurship, marine science, and more.',
  };
}

export default function LearningProgramsPage() {
  return <LearningProgramsClient programs={learningPrograms} />;
}

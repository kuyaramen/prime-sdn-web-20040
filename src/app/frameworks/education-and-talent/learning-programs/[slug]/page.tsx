import { notFound } from 'next/navigation';
import ProgramProfileClient from './ProgramProfileClient';
import { getLearningProgramBySlug, getAllLearningProgramSlugs } from '@/lib/education-data';

export async function generateStaticParams() {
  const slugs = getAllLearningProgramSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getLearningProgramBySlug(slug);
  
  if (!program) {
    return {
      title: 'Program Not Found',
    };
  }

  return {
    title: `${program.title} - PRIME SDN Learning Programs`,
    description: program.description,
  };
}

export default async function ProgramProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getLearningProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  return <ProgramProfileClient program={program} />;
}

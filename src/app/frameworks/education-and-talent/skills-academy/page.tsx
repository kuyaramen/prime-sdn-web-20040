import { notFound } from 'next/navigation';
import SkillsAcademyClient from './SkillsAcademyClient';
import { courses } from '@/lib/education-data';

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata() {
  return {
    title: 'Skills Academy - PRIME SDN Education & Talent',
    description: 'Access free online courses taught by industry experts and academic professionals.',
  };
}

export default function SkillsAcademyPage() {
  return <SkillsAcademyClient courses={courses} />;
}

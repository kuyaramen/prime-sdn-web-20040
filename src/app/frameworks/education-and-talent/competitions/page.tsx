import { notFound } from 'next/navigation';
import CompetitionsClient from './CompetitionsClient';
import { competitions } from '@/lib/education-data';

export async function generateStaticParams() {
  return competitions.map((comp) => ({ slug: comp.slug }));
}

export async function generateMetadata() {
  return {
    title: 'Competitions - PRIME SDN Education & Talent',
    description: 'Participate in hackathons, robotics competitions, and innovation challenges.',
  };
}

export default function CompetitionsPage() {
  return <CompetitionsClient competitions={competitions} />;
}

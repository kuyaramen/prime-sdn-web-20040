import { notFound } from 'next/navigation';
import MentorsClient from './MentorsClient';
import { mentors } from '@/lib/education-data';

export async function generateStaticParams() {
  return mentors.map((mentor) => ({ slug: mentor.slug }));
}

export async function generateMetadata() {
  return { title: 'Mentors - PRIME SDN Education & Talent', description: 'Connect with industry professionals for guidance and mentorship.' };
}

export default function MentorsPage() {
  return <MentorsClient mentors={mentors} />;
}

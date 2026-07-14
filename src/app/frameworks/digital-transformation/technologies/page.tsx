import EmergingTechnologiesClient from './EmergingTechnologiesClient';
import { emergingTechnologies } from '@/lib/digital-data';

export async function generateMetadata() {
  return { title: 'AI & Emerging Technologies - PRIME SDN Digital Transformation', description: 'Technologies driving the digital transformation.' };
}

export default function EmergingTechnologiesPage() {
  return <EmergingTechnologiesClient technologies={emergingTechnologies} />;
}

import TechnologiesClient from './TechnologiesClient';
import { technologies } from '@/lib/research-data';

export async function generateMetadata() {
  return { title: 'Technology Showcase - PRIME SDN Research & Innovation', description: 'Emerging technologies driving innovation in Surigao del Norte.' };
}

export default function TechnologiesPage() {
  return <TechnologiesClient technologies={technologies} />;
}

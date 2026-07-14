import LaboratoriesClient from './LaboratoriesClient';
import { laboratories } from '@/lib/research-data';

export async function generateMetadata() {
  return { title: 'Research Laboratories - PRIME SDN Research & Innovation', description: 'State-of-the-art research facilities driving scientific discovery.' };
}

export default function LaboratoriesPage() {
  return <LaboratoriesClient laboratories={laboratories} />;
}

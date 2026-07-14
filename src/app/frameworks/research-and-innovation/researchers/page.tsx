import ResearchersClient from './ResearchersClient';
import { researchers } from '@/lib/research-data';

export async function generateMetadata() {
  return { title: 'Researchers Directory - PRIME SDN Research & Innovation', description: 'Connect with leading researchers and innovators in Surigao del Norte.' };
}

export default function ResearchersPage() {
  return <ResearchersClient researchers={researchers} />;
}

import InnovationProjectsClient from './InnovationProjectsClient';
import { innovationProjects } from '@/lib/research-data';

export async function generateMetadata() {
  return { title: 'Innovation Projects - PRIME SDN Research & Innovation', description: 'Active innovation initiatives transforming research into real-world solutions.' };
}

export default function InnovationProjectsPage() {
  return <InnovationProjectsClient projects={innovationProjects} />;
}

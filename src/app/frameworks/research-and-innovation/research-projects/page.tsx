import ResearchProjectsClient from './ResearchProjectsClient';
import { researchProjects } from '@/lib/research-data';

export async function generateMetadata() {
  return { title: 'Research Projects - PRIME SDN Research & Innovation', description: 'Featured research projects driving innovation in Surigao del Norte.' };
}

export default function ResearchProjectsPage() {
  return <ResearchProjectsClient projects={researchProjects} />;
}

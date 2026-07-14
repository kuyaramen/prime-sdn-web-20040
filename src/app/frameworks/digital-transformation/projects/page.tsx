import SmartProjectsClient from './SmartProjectsClient';
import { smartProjects } from '@/lib/digital-data';

export async function generateMetadata() {
  return { title: 'Smart Province Projects - PRIME SDN Digital Transformation', description: 'Flagship digital transformation initiatives across the province.' };
}

export default function SmartProjectsPage() {
  return <SmartProjectsClient projects={smartProjects} />;
}

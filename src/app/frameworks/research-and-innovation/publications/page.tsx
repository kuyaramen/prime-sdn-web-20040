import PublicationsClient from './PublicationsClient';
import { publications } from '@/lib/research-data';

export async function generateMetadata() {
  return { title: 'Publications Repository - PRIME SDN Research & Innovation', description: 'Access research papers, journals, and technical reports.' };
}

export default function PublicationsPage() {
  return <PublicationsClient publications={publications} />;
}

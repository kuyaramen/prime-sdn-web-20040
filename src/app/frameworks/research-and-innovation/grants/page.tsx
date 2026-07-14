import GrantsClient from './GrantsClient';
import { researchGrants } from '@/lib/research-data';

export async function generateMetadata() {
  return { title: 'Research Grants & Funding - PRIME SDN Research & Innovation', description: 'Funding opportunities to support your research journey.' };
}

export default function GrantsPage() {
  return <GrantsClient grants={researchGrants} />;
}

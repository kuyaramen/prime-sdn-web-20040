import CybersecurityClient from './CybersecurityClient';
import { cybersecurityInitiatives } from '@/lib/digital-data';

export async function generateMetadata() {
  return { title: 'Cybersecurity & Data Privacy - PRIME SDN Digital Transformation', description: 'Protecting our digital infrastructure and citizen data.' };
}

export default function CybersecurityPage() {
  return <CybersecurityClient initiatives={cybersecurityInitiatives} />;
}

import DigitalServicesClient from './DigitalServicesClient';
import { digitalServices } from '@/lib/digital-data';

export async function generateMetadata() {
  return { title: 'Digital Government Services - PRIME SDN Digital Transformation', description: 'Access government services online, anytime, anywhere.' };
}

export default function DigitalServicesPage() {
  return <DigitalServicesClient services={digitalServices} />;
}

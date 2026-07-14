import DigitalPartnersClient from './DigitalPartnersClient';
import { digitalPartners } from '@/lib/digital-data';

export async function generateMetadata() {
  return { title: 'Partners & Technology Providers - PRIME SDN Digital Transformation', description: 'Organizations driving digital transformation together.' };
}

export default function DigitalPartnersPage() {
  return <DigitalPartnersClient partners={digitalPartners} />;
}

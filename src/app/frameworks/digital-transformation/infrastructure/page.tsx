import DigitalInfrastructureClient from './DigitalInfrastructureClient';
import { digitalInfrastructure } from '@/lib/digital-data';

export async function generateMetadata() {
  return { title: 'Digital Infrastructure - PRIME SDN Digital Transformation', description: 'Building the foundation for a connected province.' };
}

export default function DigitalInfrastructurePage() {
  return <DigitalInfrastructureClient infrastructure={digitalInfrastructure} />;
}

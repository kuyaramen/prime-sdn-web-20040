import DigitalTrainingClient from './DigitalTrainingClient';
import { digitalTraining } from '@/lib/digital-data';

export async function generateMetadata() {
  return { title: 'Digital Skills & Adoption - PRIME SDN Digital Transformation', description: 'Programs to help citizens and businesses adopt technology.' };
}

export default function DigitalTrainingPage() {
  return <DigitalTrainingClient training={digitalTraining} />;
}

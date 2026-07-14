import DigitalEventsClient from './DigitalEventsClient';
import { digitalEvents } from '@/lib/digital-data';

export async function generateMetadata() {
  return { title: 'Digital Events - PRIME SDN Digital Transformation', description: 'Upcoming activities and opportunities.' };
}

export default function DigitalEventsPage() {
  return <DigitalEventsClient events={digitalEvents} />;
}

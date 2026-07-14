import EventsClient from './EventsClient';
import { innovationEvents } from '@/lib/research-data';

export async function generateMetadata() {
  return { title: 'Innovation Events - PRIME SDN Research & Innovation', description: 'Conferences, symposiums, and technology expos.' };
}

export default function EventsPage() {
  return <EventsClient events={innovationEvents} />;
}

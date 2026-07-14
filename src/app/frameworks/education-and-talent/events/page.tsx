import { notFound } from 'next/navigation';
import EventsClient from './EventsClient';
import { events } from '@/lib/education-data';

export async function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata() {
  return { title: 'Events - PRIME SDN Education & Talent', description: 'Discover workshops, seminars, conferences, and training programs.' };
}

export default function EventsPage() {
  return <EventsClient events={events} />;
}

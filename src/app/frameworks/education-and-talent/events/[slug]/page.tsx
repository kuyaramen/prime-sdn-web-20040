import { notFound } from 'next/navigation';
import EventClient from './EventClient';
import { getEventBySlug, getAllEventSlugs } from '@/lib/education-data';

export async function generateStaticParams() {
  const slugs = getAllEventSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: 'Event Not Found' };
  return { title: `${event.title} - PRIME SDN Events`, description: event.description };
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();
  return <EventClient event={event} />;
}

import { notFound } from 'next/navigation';
import StartupProfileClient from './StartupProfileClient';
import { getStartupBySlug, getAllSlugs } from '@/lib/startup-data';

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const startup = getStartupBySlug(slug);
  
  if (!startup) {
    return {
      title: 'Startup Not Found',
    };
  }

  return {
    title: `${startup.name} - PRIME SDN Startup Directory`,
    description: startup.tagline,
  };
}

export default async function StartupProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const startup = getStartupBySlug(slug);

  if (!startup) {
    notFound();
  }

  return <StartupProfileClient startup={startup} />;
}

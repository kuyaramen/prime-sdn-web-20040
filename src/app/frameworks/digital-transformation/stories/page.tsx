import DigitalSuccessStoriesClient from './DigitalSuccessStoriesClient';
import { digitalSuccessStories } from '@/lib/digital-data';

export async function generateMetadata() {
  return { title: 'Success Stories - PRIME SDN Digital Transformation', description: 'Real impact from digital transformation initiatives.' };
}

export default function DigitalSuccessStoriesPage() {
  return <DigitalSuccessStoriesClient stories={digitalSuccessStories} />;
}

import PatentsClient from './PatentsClient';
import { patents } from '@/lib/research-data';

export async function generateMetadata() {
  return { title: 'Patents & Intellectual Property - PRIME SDN Research & Innovation', description: 'Innovation outputs protecting local intellectual property.' };
}

export default function PatentsPage() {
  return <PatentsClient patents={patents} />;
}

import DigitalTransformationClient from './DigitalTransformationClient';

export async function generateMetadata() {
  return { title: 'Digital Transformation - PRIME SDN', description: 'Building a smarter, more connected Surigao del Norte through digital innovation.' };
}

export default function DigitalTransformationPage() {
  return <DigitalTransformationClient />;
}

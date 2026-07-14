import { notFound } from 'next/navigation';
import CourseClient from './CourseClient';
import { getCourseBySlug, getAllCourseSlugs } from '@/lib/education-data';

export async function generateStaticParams() {
  const slugs = getAllCourseSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  
  if (!course) {
    return {
      title: 'Course Not Found',
    };
  }

  return {
    title: `${course.title} - PRIME SDN Skills Academy`,
    description: course.title,
  };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return <CourseClient course={course} />;
}

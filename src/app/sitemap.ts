import { MetadataRoute } from "next";
import { db } from "@/lib/db";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://primesdn.com";

  // Fetch dynamic slugs
  const [activities, news] = await Promise.all([
    db.activity.findMany({ where: { published: true }, select: { slug: true, publishedAt: true } }),
    db.newsPost.findMany({ where: { published: true }, select: { slug: true, publishedAt: true } }),
  ]);

  const staticRoutes = [
    "",
    "/about/vision",
    "/about/framework",
    "/about/policies",
    "/about/team",
    "/activities",
    "/news",
    "/startups",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const activityRoutes = activities.map((act) => ({
    url: `${baseUrl}/activities/${act.slug}`,
    lastModified: new Date(act.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const newsRoutes = news.map((post) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...activityRoutes, ...newsRoutes];
}

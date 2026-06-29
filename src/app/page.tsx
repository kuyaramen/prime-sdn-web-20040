import { db } from "@/lib/db";
import { HomeClient } from "./HomeClient";

export default async function HomePage() {
  const pillars = await db.pillar.findMany({ orderBy: { order: "asc" } });
  const activities = await db.activity.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
    take: 3,
  });
  const news = await db.newsPost.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
    take: 2,
  });

  return (
    <HomeClient
      pillars={pillars}
      activities={JSON.parse(JSON.stringify(activities))}
      news={JSON.parse(JSON.stringify(news))}
    />
  );
}

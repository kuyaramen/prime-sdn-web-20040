import { db } from "@/lib/db";
import { ActivitiesClient } from "./ActivitiesClient";

export const revalidate = 0; // Dynamic server page

export default async function AdminActivitiesPage() {
  const [activities, pillars] = await Promise.all([
    db.activity.findMany({
      orderBy: { publishedAt: "desc" },
      include: {
        pillar: {
          select: {
            title: true,
          },
        },
      },
    }),
    db.pillar.findMany({
      orderBy: { order: "asc" },
      select: {
        slug: true,
        title: true,
      },
    }),
  ]);

  return (
    <ActivitiesClient
      initialActivities={activities as any}
      pillars={pillars}
    />
  );
}

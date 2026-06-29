import { db } from "@/lib/db";
import { StartupsClient } from "./StartupsClient";

export const revalidate = 0; // Dynamic server page

export default async function AdminStartupsPage() {
  const startups = await db.startup.findMany({
    orderBy: { name: "asc" },
  });

  return <StartupsClient initialStartups={startups as any} />;
}

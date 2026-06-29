import { db } from "@/lib/db";
import { PillarsClient } from "./PillarsClient";

export const revalidate = 0; // Dynamic server page

export default async function AdminPillarsPage() {
  const pillars = await db.pillar.findMany({
    orderBy: { order: "asc" },
  });

  return <PillarsClient pillars={pillars as any} />;
}

import { db } from "@/lib/db";
import { HomeClient } from "./HomeClient";

export default async function HomePage() {
  const pillars = await db.pillar.findMany({ orderBy: { order: "asc" } });

  return (
    <HomeClient
      pillars={pillars}
    />
  );
}

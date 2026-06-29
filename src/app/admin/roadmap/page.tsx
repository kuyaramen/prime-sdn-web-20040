import { db } from "@/lib/db";
import { RoadmapClient } from "./RoadmapClient";

export const dynamic = "force-dynamic";

export default async function RoadmapPage() {
  const milestones = await db.roadmapMilestone.findMany({
    orderBy: { order: "asc" },
  });

  const themes = await db.roadmapTheme.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">SSC2040 Roadmap</h1>
        <p className="text-gray-600 mt-2">
          Manage milestones, themes, and timeline for the Surigao 2040 vision
        </p>
      </div>
      <RoadmapClient milestones={milestones} themes={themes} />
    </div>
  );
}

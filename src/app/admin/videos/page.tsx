import { db } from "@/lib/db";
import { VideosClient } from "./VideosClient";

export const dynamic = "force-dynamic";

export default async function VideosPage() {
  const videos = await db.video.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Promotional Videos</h1>
        <p className="text-gray-600 mt-2">
          Manage YouTube videos and promotional content
        </p>
      </div>
      <VideosClient videos={videos} />
    </div>
  );
}

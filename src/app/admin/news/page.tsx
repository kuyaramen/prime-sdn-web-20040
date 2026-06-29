import { db } from "@/lib/db";
import { NewsClient } from "./NewsClient";

export const revalidate = 0; // Dynamic server page

export default async function AdminNewsPage() {
  const news = await db.newsPost.findMany({
    orderBy: { publishedAt: "desc" },
  });

  return <NewsClient initialNews={news as any} />;
}

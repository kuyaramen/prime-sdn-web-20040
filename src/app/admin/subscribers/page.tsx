import { db } from "@/lib/db";
import { SubscribersClient } from "./SubscribersClient";

export const revalidate = 0; // Dynamic server page

export default async function AdminSubscribersPage() {
  const subscribers = await db.newsletterSubscriber.findMany({
    orderBy: { subscribedAt: "desc" },
  });

  return <SubscribersClient subscribers={subscribers} />;
}

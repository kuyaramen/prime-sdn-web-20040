import { db } from "@/lib/db";
import { ContactClient } from "./ContactClient";

export const revalidate = 0; // Dynamic server page

export default async function AdminContactPage() {
  const submissions = await db.contactSubmission.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <ContactClient submissions={submissions} />;
}

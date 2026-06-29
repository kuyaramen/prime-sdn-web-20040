import { db } from "@/lib/db";
import { PoliciesClient } from "./PoliciesClient";

export const revalidate = 0; // Dynamic server page

export default async function AdminPoliciesPage() {
  const policies = await db.policy.findMany({
    orderBy: { dateIssued: "desc" },
  });

  return <PoliciesClient initialPolicies={policies as any} />;
}

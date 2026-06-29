import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { UsersClient } from "./UsersClient";

export const revalidate = 0; // Dynamic server page

export default async function AdminUsersPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/admin/login");
  }

  const role = (session.user as any).role;
  if (role !== "admin") {
    redirect("/admin/dashboard");
  }

  const users = await db.adminUser.findMany({
    orderBy: { email: "asc" },
    select: {
      id: true,
      email: true,
      role: true,
      name: true,
    },
  });

  return (
    <UsersClient
      initialUsers={users}
      currentUserId={(session.user as any).id}
    />
  );
}

"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";
import {
  activitySchema,
  newsSchema,
  startupSchema,
  policySchema,
  pillarSchema,
} from "@/lib/validations";

// Helper to check authentication
async function requireAuth() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    throw new Error("Unauthorized");
  }
  return session;
}

// Helper to check admin role
async function requireAdmin() {
  const session = await requireAuth();
  if ((session.user as any).role !== "admin") {
    throw new Error("Forbidden: Admin access required");
  }
  return session;
}

/* ==========================================================================
   PILLARS ACTIONS
   ========================================================================== */

export async function updatePillar(id: string, formData: any) {
  await requireAuth();
  const data = pillarSchema.parse(formData);

  const pillar = await db.pillar.update({
    where: { id },
    data,
  });

  revalidatePath("/");
  revalidatePath("/about/framework");
  return pillar;
}

/* ==========================================================================
   ACTIVITIES ACTIONS
   ========================================================================== */

export async function createActivity(formData: any) {
  await requireAuth();
  const data = activitySchema.parse(formData);

  const activity = await db.activity.create({
    data: {
      ...data,
      publishedAt: new Date(data.publishedAt),
    },
  });

  revalidatePath("/");
  revalidatePath("/activities");
  return activity;
}

export async function updateActivity(id: string, formData: any) {
  await requireAuth();
  const data = activitySchema.parse(formData);

  const activity = await db.activity.update({
    where: { id },
    data: {
      ...data,
      publishedAt: new Date(data.publishedAt),
    },
  });

  revalidatePath("/");
  revalidatePath("/activities");
  revalidatePath(`/activities/${data.slug}`);
  return activity;
}

export async function deleteActivity(id: string) {
  await requireAuth();
  const activity = await db.activity.delete({
    where: { id },
  });

  revalidatePath("/");
  revalidatePath("/activities");
  return activity;
}

/* ==========================================================================
   NEWS ACTIONS
   ========================================================================== */

export async function createNewsPost(formData: any) {
  await requireAuth();
  const data = newsSchema.parse(formData);

  const newsPost = await db.newsPost.create({
    data: {
      ...data,
      publishedAt: new Date(data.publishedAt),
    },
  });

  revalidatePath("/");
  revalidatePath("/news");
  return newsPost;
}

export async function updateNewsPost(id: string, formData: any) {
  await requireAuth();
  const data = newsSchema.parse(formData);

  const newsPost = await db.newsPost.update({
    where: { id },
    data: {
      ...data,
      publishedAt: new Date(data.publishedAt),
    },
  });

  revalidatePath("/");
  revalidatePath("/news");
  revalidatePath(`/news/${data.slug}`);
  return newsPost;
}

export async function deleteNewsPost(id: string) {
  await requireAuth();
  const newsPost = await db.newsPost.delete({
    where: { id },
  });

  revalidatePath("/");
  revalidatePath("/news");
  return newsPost;
}

/* ==========================================================================
   STARTUPS ACTIONS
   ========================================================================== */

export async function createStartup(formData: any) {
  await requireAuth();
  const data = startupSchema.parse(formData);

  const startup = await db.startup.create({
    data,
  });

  revalidatePath("/startups");
  return startup;
}

export async function updateStartup(id: string, formData: any) {
  await requireAuth();
  const data = startupSchema.parse(formData);

  const startup = await db.startup.update({
    where: { id },
    data,
  });

  revalidatePath("/startups");
  return startup;
}

export async function deleteStartup(id: string) {
  await requireAuth();
  const startup = await db.startup.delete({
    where: { id },
  });

  revalidatePath("/startups");
  return startup;
}

/* ==========================================================================
   POLICIES ACTIONS
   ========================================================================== */

export async function createPolicy(formData: any) {
  await requireAuth();
  const data = policySchema.parse(formData);

  const policy = await db.policy.create({
    data: {
      ...data,
      dateIssued: new Date(data.dateIssued),
    },
  });

  revalidatePath("/");
  revalidatePath("/about/policies");
  return policy;
}

export async function updatePolicy(id: string, formData: any) {
  await requireAuth();
  const data = policySchema.parse(formData);

  const policy = await db.policy.update({
    where: { id },
    data: {
      ...data,
      dateIssued: new Date(data.dateIssued),
    },
  });

  revalidatePath("/");
  revalidatePath("/about/policies");
  return policy;
}

export async function deletePolicy(id: string) {
  await requireAuth();
  const policy = await db.policy.delete({
    where: { id },
  });

  revalidatePath("/");
  revalidatePath("/about/policies");
  return policy;
}

/* ==========================================================================
   CONTACT SUBMISSIONS ACTIONS
   ========================================================================== */

export async function updateSubmissionStatus(id: string, status: string) {
  await requireAuth();
  const submission = await db.contactSubmission.update({
    where: { id },
    data: { status },
  });

  revalidatePath("/admin/contact");
  return submission;
}

export async function deleteSubmission(id: string) {
  await requireAuth();
  const submission = await db.contactSubmission.delete({
    where: { id },
  });

  revalidatePath("/admin/contact");
  return submission;
}

/* ==========================================================================
   SUBSCRIBERS ACTIONS
   ========================================================================== */

export async function deleteSubscriber(id: string) {
  await requireAuth();
  const subscriber = await db.newsletterSubscriber.delete({
    where: { id },
  });

  revalidatePath("/admin/subscribers");
  return subscriber;
}

/* ==========================================================================
   ADMIN USERS ACTIONS
   ========================================================================== */

export async function createAdminUser(email: string, password: string, role: string, name: string | null) {
  await requireAdmin();

  if (!email || !password || !role) {
    throw new Error("All fields are required");
  }

  const existingUser = await db.adminUser.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await db.adminUser.create({
    data: {
      email,
      passwordHash,
      role,
      name,
    },
  });

  revalidatePath("/admin/users");
  return { id: user.id, email: user.email, role: user.role, name: user.name };
}

export async function deleteAdminUser(id: string) {
  const session = await requireAdmin();

  if (session.user && (session.user as any).id === id) {
    throw new Error("Cannot delete your own admin account");
  }

  const user = await db.adminUser.delete({
    where: { id },
  });

  revalidatePath("/admin/users");
  return { id: user.id, email: user.email, role: user.role };
}

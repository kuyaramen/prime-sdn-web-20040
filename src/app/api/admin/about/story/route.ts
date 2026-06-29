import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const milestones = await db.aboutStory.findMany({
      orderBy: { order: "asc" },
    });

    const parsed = milestones.map((m) => ({
      ...m,
      achievements: JSON.parse(m.achievements || "[]"),
      statistics: JSON.parse(m.statistics || "{}"),
    }));

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Failed to fetch milestones:", error);
    return NextResponse.json({ error: "Failed to fetch milestones" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { year, title, description, achievements, statistics } = body;

    const maxOrder = await db.aboutStory.findFirst({
      orderBy: { order: "desc" },
      select: { order: true },
    });

    const milestone = await db.aboutStory.create({
      data: {
        year,
        title,
        description,
        achievements,
        statistics,
        order: (maxOrder?.order || 0) + 1,
      },
    });

    return NextResponse.json(milestone);
  } catch (error) {
    console.error("Failed to create milestone:", error);
    return NextResponse.json({ error: "Failed to create milestone" }, { status: 500 });
  }
}

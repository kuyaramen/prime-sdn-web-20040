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

    const milestones = await db.roadmapMilestone.findMany({
      orderBy: { year: "asc" },
    });

    const parsed = milestones.map((m) => ({
      ...m,
      initiatives: JSON.parse(m.initiatives || "[]"),
      stats: JSON.parse(m.stats || "[]"),
    }));

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Failed to fetch roadmap milestones:", error);
    return NextResponse.json({ error: "Failed to fetch roadmap milestones" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { year, title, description, desktopPos, coords, image, initiatives, stats, impact } = body;

    const maxOrder = await db.roadmapMilestone.findFirst({
      orderBy: { order: "desc" },
      select: { order: true },
    });

    const milestone = await db.roadmapMilestone.create({
      data: {
        year,
        title,
        description,
        desktopPos,
        coords,
        image,
        initiatives,
        stats,
        impact,
        order: (maxOrder?.order || 0) + 1,
      },
    });

    return NextResponse.json(milestone);
  } catch (error) {
    console.error("Failed to create roadmap milestone:", error);
    return NextResponse.json({ error: "Failed to create roadmap milestone" }, { status: 500 });
  }
}

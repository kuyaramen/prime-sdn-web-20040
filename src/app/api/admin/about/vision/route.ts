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

    const letters = await db.visionLetter.findMany({
      orderBy: { order: "asc" },
    });

    const parsed = letters.map((l) => ({
      ...l,
      objectives: JSON.parse(l.objectives || "[]"),
      timeline: JSON.parse(l.timeline || "[]"),
      statistics: JSON.parse(l.statistics || "{}"),
    }));

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Failed to fetch vision letters:", error);
    return NextResponse.json({ error: "Failed to fetch vision letters" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { letter, title, description, objectives, timeline, statistics, icon } = body;

    const maxOrder = await db.visionLetter.findFirst({
      orderBy: { order: "desc" },
      select: { order: true },
    });

    const visionLetter = await db.visionLetter.create({
      data: {
        letter,
        title,
        description,
        objectives,
        timeline,
        statistics,
        icon,
        order: (maxOrder?.order || 0) + 1,
      },
    });

    return NextResponse.json(visionLetter);
  } catch (error) {
    console.error("Failed to create vision letter:", error);
    return NextResponse.json({ error: "Failed to create vision letter" }, { status: 500 });
  }
}

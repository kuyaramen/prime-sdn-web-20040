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

    const cards = await db.missionCard.findMany({
      orderBy: { order: "asc" },
    });

    const parsed = cards.map((c) => ({
      ...c,
      objectives: JSON.parse(c.objectives || "[]"),
      programs: JSON.parse(c.programs || "[]"),
      relatedActivities: JSON.parse(c.relatedActivities || "[]"),
      relatedNews: JSON.parse(c.relatedNews || "[]"),
    }));

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Failed to fetch mission cards:", error);
    return NextResponse.json({ error: "Failed to fetch mission cards" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { letter, title, description, objectives, programs, relatedActivities, relatedNews, icon } = body;

    const maxOrder = await db.missionCard.findFirst({
      orderBy: { order: "desc" },
      select: { order: true },
    });

    const card = await db.missionCard.create({
      data: {
        letter,
        title,
        description,
        objectives,
        programs,
        relatedActivities,
        relatedNews,
        icon,
        order: (maxOrder?.order || 0) + 1,
      },
    });

    return NextResponse.json(card);
  } catch (error) {
    console.error("Failed to create mission card:", error);
    return NextResponse.json({ error: "Failed to create mission card" }, { status: 500 });
  }
}

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

    const pillars = await db.frameworkPillar.findMany({
      orderBy: { order: "asc" },
    });

    return NextResponse.json(pillars);
  } catch (error) {
    console.error("Failed to fetch framework pillars:", error);
    return NextResponse.json({ error: "Failed to fetch framework pillars" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, slug, description, icon, illustration } = body;

    const maxOrder = await db.frameworkPillar.findFirst({
      orderBy: { order: "desc" },
      select: { order: true },
    });

    const pillar = await db.frameworkPillar.create({
      data: {
        title,
        slug,
        description,
        icon,
        illustration,
        order: (maxOrder?.order || 0) + 1,
      },
    });

    return NextResponse.json(pillar);
  } catch (error) {
    console.error("Failed to create framework pillar:", error);
    return NextResponse.json({ error: "Failed to create framework pillar" }, { status: 500 });
  }
}

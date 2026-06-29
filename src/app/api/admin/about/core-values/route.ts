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

    const values = await db.coreValue.findMany({
      orderBy: { order: "asc" },
    });

    const parsed = values.map((v) => ({
      ...v,
      practicalExamples: JSON.parse(v.practicalExamples || "[]"),
    }));

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Failed to fetch core values:", error);
    return NextResponse.json({ error: "Failed to fetch core values" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { name, description, icon, illustration, practicalExamples } = body;

    const maxOrder = await db.coreValue.findFirst({
      orderBy: { order: "desc" },
      select: { order: true },
    });

    const value = await db.coreValue.create({
      data: {
        name,
        description,
        icon,
        illustration,
        practicalExamples,
        order: (maxOrder?.order || 0) + 1,
      },
    });

    return NextResponse.json(value);
  } catch (error) {
    console.error("Failed to create core value:", error);
    return NextResponse.json({ error: "Failed to create core value" }, { status: 500 });
  }
}

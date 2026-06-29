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

    const partners = await db.strategicPartner.findMany({
      orderBy: { order: "asc" },
    });

    const parsed = partners.map((p) => ({
      ...p,
      relatedProjects: JSON.parse(p.relatedProjects || "[]"),
    }));

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Failed to fetch strategic partners:", error);
    return NextResponse.json({ error: "Failed to fetch strategic partners" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { name, slug, category, description, logo, website, relatedProjects } = body;

    const maxOrder = await db.strategicPartner.findFirst({
      orderBy: { order: "desc" },
      select: { order: true },
    });

    const partner = await db.strategicPartner.create({
      data: {
        name,
        slug,
        category,
        description,
        logo,
        website,
        relatedProjects,
        order: (maxOrder?.order || 0) + 1,
      },
    });

    return NextResponse.json(partner);
  } catch (error) {
    console.error("Failed to create strategic partner:", error);
    return NextResponse.json({ error: "Failed to create strategic partner" }, { status: 500 });
  }
}

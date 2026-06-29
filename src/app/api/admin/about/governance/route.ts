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

    const principles = await db.governancePrinciple.findMany({
      orderBy: { order: "asc" },
    });

    const parsed = principles.map((p) => ({
      ...p,
      relatedPolicies: JSON.parse(p.relatedPolicies || "[]"),
      downloads: JSON.parse(p.downloads || "[]"),
    }));

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Failed to fetch governance principles:", error);
    return NextResponse.json({ error: "Failed to fetch governance principles" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { principle, description, purpose, implementation, relatedPolicies, downloads } = body;

    const maxOrder = await db.governancePrinciple.findFirst({
      orderBy: { order: "desc" },
      select: { order: true },
    });

    const governancePrinciple = await db.governancePrinciple.create({
      data: {
        principle,
        description,
        purpose,
        implementation,
        relatedPolicies,
        downloads,
        order: (maxOrder?.order || 0) + 1,
      },
    });

    return NextResponse.json(governancePrinciple);
  } catch (error) {
    console.error("Failed to create governance principle:", error);
    return NextResponse.json({ error: "Failed to create governance principle" }, { status: 500 });
  }
}

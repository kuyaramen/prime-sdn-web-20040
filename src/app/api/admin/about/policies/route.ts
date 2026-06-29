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

    const policies = await db.policy.findMany({
      orderBy: { dateIssued: "desc" },
    });

    return NextResponse.json(policies);
  } catch (error) {
    console.error("Failed to fetch policies:", error);
    return NextResponse.json({ error: "Failed to fetch policies" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, type, refNumber, dateIssued, description, fileUrl } = body;

    const policy = await db.policy.create({
      data: {
        title,
        type,
        refNumber,
        dateIssued: new Date(dateIssued),
        description,
        fileUrl,
      },
    });

    return NextResponse.json(policy);
  } catch (error) {
    console.error("Failed to create policy:", error);
    return NextResponse.json({ error: "Failed to create policy" }, { status: 500 });
  }
}

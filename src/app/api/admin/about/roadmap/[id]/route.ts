import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { id } = params;

    const milestone = await db.roadmapMilestone.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(milestone);
  } catch (error) {
    console.error("Failed to update roadmap milestone:", error);
    return NextResponse.json({ error: "Failed to update roadmap milestone" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = params;

    await db.roadmapMilestone.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete roadmap milestone:", error);
    return NextResponse.json({ error: "Failed to delete roadmap milestone" }, { status: 500 });
  }
}

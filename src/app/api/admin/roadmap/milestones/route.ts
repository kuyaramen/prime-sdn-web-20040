import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const milestones = await db.roadmapMilestone.findMany({
      orderBy: { order: "asc" },
    });

    return NextResponse.json(milestones);
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
    const milestone = await db.roadmapMilestone.create({
      data: {
        year: body.year,
        title: body.title,
        description: body.description,
        desktopPos: body.desktopPos,
        coords: body.coords,
        image: body.image || null,
        initiatives: body.initiatives,
        stats: body.stats,
        impact: body.impact || null,
        order: body.order,
        published: body.published,
      },
    });

    return NextResponse.json(milestone);
  } catch (error) {
    console.error("Failed to create milestone:", error);
    return NextResponse.json({ error: "Failed to create milestone" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const milestone = await db.roadmapMilestone.update({
      where: { id: body.id },
      data: {
        year: body.year,
        title: body.title,
        description: body.description,
        desktopPos: body.desktopPos,
        coords: body.coords,
        image: body.image,
        initiatives: body.initiatives,
        stats: body.stats,
        impact: body.impact,
        order: body.order,
        published: body.published,
      },
    });

    return NextResponse.json(milestone);
  } catch (error) {
    console.error("Failed to update milestone:", error);
    return NextResponse.json({ error: "Failed to update milestone" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await db.roadmapMilestone.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete milestone:", error);
    return NextResponse.json({ error: "Failed to delete milestone" }, { status: 500 });
  }
}

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

    const themes = await db.roadmapTheme.findMany({
      orderBy: { order: "asc" },
    });

    return NextResponse.json(themes);
  } catch (error) {
    console.error("Failed to fetch themes:", error);
    return NextResponse.json({ error: "Failed to fetch themes" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const theme = await db.roadmapTheme.create({
      data: {
        label: body.label,
        icon: body.icon,
        order: body.order,
      },
    });

    return NextResponse.json(theme);
  } catch (error) {
    console.error("Failed to create theme:", error);
    return NextResponse.json({ error: "Failed to create theme" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const theme = await db.roadmapTheme.update({
      where: { id: body.id },
      data: {
        label: body.label,
        icon: body.icon,
        order: body.order,
      },
    });

    return NextResponse.json(theme);
  } catch (error) {
    console.error("Failed to update theme:", error);
    return NextResponse.json({ error: "Failed to update theme" }, { status: 500 });
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

    await db.roadmapTheme.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete theme:", error);
    return NextResponse.json({ error: "Failed to delete theme" }, { status: 500 });
  }
}

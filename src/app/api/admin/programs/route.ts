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

    const programs = await db.program.findMany({
      orderBy: { startDate: "desc" },
    });

    return NextResponse.json(programs);
  } catch (error) {
    console.error("Failed to fetch programs:", error);
    return NextResponse.json({ error: "Failed to fetch programs" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const program = await db.program.create({
      data: {
        title: body.title,
        slug: body.slug || body.title.toLowerCase().replace(/\s+/g, "-"),
        type: body.type,
        description: body.description,
        startDate: new Date(body.startDate),
        endDate: body.endDate ? new Date(body.endDate) : null,
        location: body.location,
        coverImage: body.coverImage,
        content: body.content,
        status: body.status,
      },
    });

    return NextResponse.json(program);
  } catch (error) {
    console.error("Failed to create program:", error);
    return NextResponse.json({ error: "Failed to create program" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const program = await db.program.update({
      where: { id: body.id },
      data: {
        title: body.title,
        slug: body.slug,
        type: body.type,
        description: body.description,
        startDate: new Date(body.startDate),
        endDate: body.endDate ? new Date(body.endDate) : null,
        location: body.location,
        coverImage: body.coverImage,
        content: body.content,
        status: body.status,
      },
    });

    return NextResponse.json(program);
  } catch (error) {
    console.error("Failed to update program:", error);
    return NextResponse.json({ error: "Failed to update program" }, { status: 500 });
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

    await db.program.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete program:", error);
    return NextResponse.json({ error: "Failed to delete program" }, { status: 500 });
  }
}

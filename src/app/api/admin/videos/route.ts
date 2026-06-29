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

    const videos = await db.video.findMany({
      orderBy: { order: "asc" },
    });

    return NextResponse.json(videos);
  } catch (error) {
    console.error("Failed to fetch videos:", error);
    return NextResponse.json({ error: "Failed to fetch videos" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const video = await db.video.create({
      data: {
        title: body.title,
        youtubeId: body.youtubeId,
        thumbnail: body.thumbnail,
        description: body.description,
        order: body.order,
        featured: body.featured,
        published: body.published,
      },
    });

    return NextResponse.json(video);
  } catch (error) {
    console.error("Failed to create video:", error);
    return NextResponse.json({ error: "Failed to create video" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const video = await db.video.update({
      where: { id: body.id },
      data: {
        title: body.title,
        youtubeId: body.youtubeId,
        thumbnail: body.thumbnail,
        description: body.description,
        order: body.order,
        featured: body.featured,
        published: body.published,
      },
    });

    return NextResponse.json(video);
  } catch (error) {
    console.error("Failed to update video:", error);
    return NextResponse.json({ error: "Failed to update video" }, { status: 500 });
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

    await db.video.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete video:", error);
    return NextResponse.json({ error: "Failed to delete video" }, { status: 500 });
  }
}

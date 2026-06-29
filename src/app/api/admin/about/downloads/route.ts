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

    const resources = await db.downloadResource.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(resources);
  } catch (error) {
    console.error("Failed to fetch download resources:", error);
    return NextResponse.json({ error: "Failed to fetch download resources" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, slug, category, description, fileUrl, fileSize, fileType, version } = body;

    const resource = await db.downloadResource.create({
      data: {
        title,
        slug,
        category,
        description,
        fileUrl,
        fileSize,
        fileType,
        version,
        downloadCount: 0,
        featured: false,
        published: false,
      },
    });

    return NextResponse.json(resource);
  } catch (error) {
    console.error("Failed to create download resource:", error);
    return NextResponse.json({ error: "Failed to create download resource" }, { status: 500 });
  }
}

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

    const roles = await db.organizationalRole.findMany({
      orderBy: { order: "asc" },
    });

    const parsed = roles.map((r) => ({
      ...r,
      responsibilities: JSON.parse(r.responsibilities || "[]"),
    }));

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Failed to fetch organizational roles:", error);
    return NextResponse.json({ error: "Failed to fetch organizational roles" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { position, office, name, biography, photo, responsibilities, email, phone, parentId } = body;

    const maxOrder = await db.organizationalRole.findFirst({
      orderBy: { order: "desc" },
      select: { order: true },
    });

    const role = await db.organizationalRole.create({
      data: {
        position,
        office,
        name,
        biography,
        photo,
        responsibilities,
        email,
        phone,
        parentId,
        order: (maxOrder?.order || 0) + 1,
      },
    });

    return NextResponse.json(role);
  } catch (error) {
    console.error("Failed to create organizational role:", error);
    return NextResponse.json({ error: "Failed to create organizational role" }, { status: 500 });
  }
}

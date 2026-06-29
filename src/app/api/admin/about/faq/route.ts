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

    const faqs = await db.fAQ.findMany({
      orderBy: { order: "asc" },
    });

    return NextResponse.json(faqs);
  } catch (error) {
    console.error("Failed to fetch FAQs:", error);
    return NextResponse.json({ error: "Failed to fetch FAQs" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { question, answer, category } = body;

    const maxOrder = await db.fAQ.findFirst({
      orderBy: { order: "desc" },
      select: { order: true },
    });

    const faq = await db.fAQ.create({
      data: {
        question,
        answer,
        category,
        order: (maxOrder?.order || 0) + 1,
        published: false,
      },
    });

    return NextResponse.json(faq);
  } catch (error) {
    console.error("Failed to create FAQ:", error);
    return NextResponse.json({ error: "Failed to create FAQ" }, { status: 500 });
  }
}

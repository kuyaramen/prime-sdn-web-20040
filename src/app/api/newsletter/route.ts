import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { newsletterSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = newsletterSchema.parse(body);

    await db.newsletterSubscriber.upsert({
      where: { email },
      update: {},
      create: { email },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Newsletter API]", error);
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
}

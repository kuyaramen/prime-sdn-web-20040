import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contactSchema } from "@/lib/validations";
import { sendEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    const submission = await db.contactSubmission.create({ data });

    sendEmail({
      to: "hello@primesdn.com",
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true, id: submission.id });
  } catch (error) {
    console.error("[Contact API]", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

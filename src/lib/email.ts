export function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  // Stub: log to console in dev, use Resend in production
  if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "your-resend-api-key") {
    // TODO: integrate Resend SDK
    console.log(`[Email] Would send to ${to}: ${subject}`);
  } else {
    console.log(`[Email Stub] To: ${to}`);
    console.log(`[Email Stub] Subject: ${subject}`);
    console.log(`[Email Stub] Body: ${html}`);
  }
}

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Allow all requests to pass through
  // NextAuth API routes need to be accessible
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip NextAuth API routes
    "/((?!api/auth|_next/static|_next/image|favicon.ico).*)",
  ],
};

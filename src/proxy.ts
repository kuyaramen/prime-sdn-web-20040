import { NextRequest, NextResponse } from "next/server";

// Temporarily disable auth middleware to fix loading issue
export function proxy(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

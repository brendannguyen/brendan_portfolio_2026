import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const ua = req.headers.get("user-agent") || "";
  const isMobile = /iPhone|iPad|iPod|Android/i.test(ua);

  if (isMobile) {
    return NextResponse.redirect("https://old-brendannguyen.vercel.app");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/(.*)"], // or ["/(.*)"] if you want all routes
};

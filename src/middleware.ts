import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // console.log(request.url)
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login";
  const token = request.cookies.get("accessToken")?.value || request.cookies.get("_vercel_jwt")?.value ;

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/patients", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/login", "/patients/:path*", "/patients"],
};

import { NextResponse, type NextRequest } from "next/server";

const ROLE_COOKIE = "healthai_role";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const role = request.cookies.get(ROLE_COOKIE)?.value;

  if (pathname === "/login") {
    if (role === "patient" || role === "doctor") {
      const home = role === "doctor" ? "/doctor/dashboard" : "/patient";
      return NextResponse.redirect(new URL(home, request.url));
    }
    return NextResponse.next();
  }

  const requiredRole = pathname.startsWith("/doctor") ? "doctor" : "patient";
  if (role !== requiredRole) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/patient/:path*", "/doctor/:path*", "/login"],
};

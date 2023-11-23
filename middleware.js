import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    const user = request.cookies.get("user");
    if (!user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  
  if (request.nextUrl.pathname === "/login") {
    const user = request.cookies.get("user");
    if (user) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  if (request.nextUrl.pathname === "/signout") {
    response.cookies.delete('user');
    return response
  }

  return response;
}

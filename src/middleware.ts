import { NextRequest, NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
// all routes except /api, /_next/static, /_next/image, /favicon.ico, /_next/data, /_next/server-side-rendering, /_next/webpack-hmr, /img

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|_next/data|_next/server-side-rendering|_next/webpack-hmr|img).*)"],
};

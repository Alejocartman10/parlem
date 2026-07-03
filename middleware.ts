import { NextResponse, type NextRequest } from "next/server";
import { createMiddlewareSupabaseClient } from "@/lib/supabase/server";

const PROTECTED_PATHS = ["/home", "/learn", "/laia", "/profile"];

function isProtectedPath(pathname: string): boolean {
  return PROTECTED_PATHS.some((path) => pathname === path || pathname.startsWith(`${path}/`));
}

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({
    request: { headers: request.headers },
  });

  if (!isProtectedPath(request.nextUrl.pathname)) {
    return response;
  }

  const supabase = createMiddlewareSupabaseClient(request, response);

  // Si Supabase encara no està configurat (falten variables d'entorn),
  // no bloquegem l'accés: la protecció s'activa automàticament en
  // afegir NEXT_PUBLIC_SUPABASE_URL i NEXT_PUBLIC_SUPABASE_ANON_KEY.
  if (!supabase) {
    return response;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirectTo", request.nextUrl.pathname);
    console.log("[middleware] sin sesión → redirigiendo a login", {
      pathname: request.nextUrl.pathname,
      redirectTo: request.nextUrl.pathname,
      loginUrl: loginUrl.toString(),
    });
    return NextResponse.redirect(loginUrl);
  }

  return response;
}

export const config = {
  matcher: ["/home/:path*", "/learn/:path*", "/laia/:path*", "/profile/:path*"],
};

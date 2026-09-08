import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split('/')[1] || '';

  // If the URL already starts with a valid locale, handle it normally
  if (routing.locales.includes(firstSegment as any)) {
    return intlMiddleware(request);
  }

  // Otherwise, always send first-time visitors to Hebrew
  const url = request.nextUrl.clone();
  url.pathname = `/he${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};

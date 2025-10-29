import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Play Store URL for QuoteMate with tracking parameters
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.quotemate.app&referrer=utm_source%3Dwebsite%26utm_campaign%3Dcta';

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Only handle /quote-tool route
  if (pathname === '/quote-tool') {
    // Allow bypass with ?web=true parameter (for testing or user preference)
    if (searchParams.get('web') === 'true') {
      return NextResponse.next();
    }

    const userAgent = request.headers.get('user-agent') || '';

    // Detect Android devices
    // Check for Android but exclude Windows to avoid false positives
    const isAndroid = /android/i.test(userAgent) && !/windows/i.test(userAgent);

    // Redirect Android users to Play Store
    if (isAndroid) {
      console.log('🤖 Android device detected, redirecting to Play Store');
      return NextResponse.redirect(PLAY_STORE_URL);
    }
  }

  // Let all other requests through (iOS, desktop, etc.)
  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: '/quote-tool',
};

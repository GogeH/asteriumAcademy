import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const locales = ['ru', 'en', 'uz'];
const defaultLocale = 'ru';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Проверяем есть ли локаль в пути
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Редирект на язык по умолчанию
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Пропускаем ВСЕ статические файлы включая картинки
    '/((?!_next|api|favicon.ico|sitemap.xml|robots.txt|.*\\.(svg|webp|png|jpg|jpeg|gif|ico|css|js|woff|woff2|ttf)).*)',
  ],
};

import type { Metadata } from 'next';
import { Inter, Manrope, Roboto } from 'next/font/google';
import './globals.css';
import { ReactNode, Suspense } from 'react';
import StructuredData from '@/components/seo/StructuredData';
import AnchorHandlerWrapper from '@/components/common/Anchor/AnchorHandlerWrapper';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://asterium.uz'),
  title: {
    default: 'Asterium - the leading cryptocurrency exchange in Uzbekistan',
    template: '%s | Asterium.uz',
  },
  description: 'The largest cryptocurrency exchange in Uzbekistan',
  keywords: [
    'Asterium',
    'crypto exchange',
    'cryptocurrency',
    'Bitcoin',
    'USDT',
    'Uzbekistan',
    'blockchain',
    'crypto trading',
    'Tashkent',
  ],
  authors: [{ name: 'Asterium Team', url: 'https://asterium.uz' }],
  creator: 'Asterium Team',
  publisher: 'Asterium',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://asterium.uz',
    siteName: 'Asterium.uz',
    title: 'Asterium - the leading cryptocurrency exchange in Uzbekistan',
    description:
      'Trade, buy, and store cryptocurrencies securely with Asterium — the most trusted crypto platform in Uzbekistan.',
    images: [
      {
        url: 'https://asterium.uz/og/asterium-cover.png',
        width: 1200,
        height: 630,
        alt: 'Asterium — Cryptocurrency Exchange',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asterium the Leading Cryptocurrency Exchange in Uzbekistan',
    description:
      'Trade and store your crypto safely on Asterium — the largest exchange in Uzbekistan.',
    images: ['https://asterium.uz/og/asterium-cover.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://asterium.uz',
    languages: {
      'en-US': 'https://asterium.uz/en',
      'ru-RU': 'https://asterium.uz/ru',
      'uz-UZ': 'https://asterium.uz/uz',
    },
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png' }],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/favicon/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/favicon/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${manrope.variable} ${roboto.variable} ${inter.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <AnchorHandlerWrapper />
        </Suspense>
        {children}
      </body>
    </html>
  );
}

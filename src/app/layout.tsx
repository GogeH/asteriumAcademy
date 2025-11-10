import { Inter, Manrope, Roboto } from 'next/font/google';
import './globals.css';
import { ReactNode, Suspense } from 'react';
import AnchorHandlerWrapper from '@/components/common/Anchor/AnchorHandlerWrapper';
import { Metadata } from 'next';

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

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
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

export const metadata: Metadata = {
  title: 'Asterium',
  description: 'Asterium Wallet',
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
};

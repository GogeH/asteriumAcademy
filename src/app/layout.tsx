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

export async function generateStaticParams() {
  return [{ lng: 'ru' }, { lng: 'en' }, { lng: 'uz' }];
}

type MetadataProps = {
  params: Promise<{ lng: string }>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { lng } = await params;

  const { useTranslation } = await import('@/app/i18n');
  const { t } = await useTranslation(lng);

  const siteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Asterium',
    description: t('metadata.description'),
    url: 'https://asterium.uz',
    logo: 'https://asterium.uz/images/png/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+998 78 777-55-58',
      email: 'support@asterium.uz',
      contactType: 'customer service',
    },
    sameAs: [
      'https://facebook.com/p/Asterium-Wallet-61574643916530',
      'https://instagram.com/asteriumwallet',
      'https://www.youtube.com/@AsteriumWallet',
      'https://t.me/asteriumwallet',
      'https://www.linkedin.com/company/asteriumuz',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: t('footer.address-info'),
      addressLocality: t('metadata.keywords.tashkent'),
      addressCountry: 'UZ',
      postalCode: '100105',
    },
  };

  return {
    metadataBase: new URL(`https://asterium.uz/${t('metadata.url')}`),
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

    other: {
      'script:ld+json': JSON.stringify(siteJsonLd),
    },
  };
}

type RootLayoutProps = {
  children: ReactNode;
  params?: Promise<{ lng: string }>;
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const lng = params ? (await params).lng : 'ru';

  return (
    <html lang={lng}>
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

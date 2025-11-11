import { Inter, Manrope, Roboto } from 'next/font/google';
import { ReactNode, Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import AnchorHandlerWrapper from '@/components/common/Anchor/AnchorHandlerWrapper';
import '../globals.css';
import GoogleAnalytics from '@/components/common/GoogleAnalytics';

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

type Props = {
  children: ReactNode;
  params: Promise<{ lng: string }>;
};

const SUPPORTED_LANGUAGES = ['ru', 'en', 'uz'];

export async function generateStaticParams() {
  return [{ lng: 'ru' }, { lng: 'en' }, { lng: 'uz' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lng } = await params;

  const { useTranslation } = await import('@/app/i18n');
  const { t } = await useTranslation(lng);

  const siteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Asterium',
    description: t('metadata.description'),
    url: 'asterium-academy.uz',
    logo: 'https://asterium-academy.uz/images/png/logo.png',
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

  const localeMap = {
    ru: 'ru_RU',
    en: 'en_US',
    uz: 'uz_UZ',
  };

  return {
    metadataBase: new URL(`https://asterium-academy.uz/${t('metadata.url')}`),
    title: {
      default: t('metadata.title'),
      template: `%s | Asterium-academy.uz.uz/${t('metadata.url')}`,
    },
    description: t('metadata.description'),
    keywords: [
      t('metadata.keywords.asterium'),
      t('metadata.keywords.crypto-exchange'),
      t('metadata.keywords.cryptocurrency'),
      t('metadata.keywords.bitcoin'),
      'USDT',
      t('metadata.keywords.uzbekistan'),
      t('metadata.keywords.blockchain'),
      t('metadata.keywords.crypto-trading'),
      t('metadata.keywords.tashkent'),
    ],
    authors: [
      {
        name: t('metadata.creator'),
        url: `https://asterium-academy.uz/${t('metadata.url')}`,
      },
    ],
    creator: t('metadata.creator'),
    publisher: t('metadata.publisher'),
    openGraph: {
      type: 'website',
      locale: localeMap[lng as keyof typeof localeMap] || 'en_US',
      url: `https://asterium-academy.uz/${t('metadata.url')}`,
      siteName: `asterium-academy.uz/${t('metadata.url')}`,
      title: t('metadata.title'),
      description: t('metadata.open-graph.description'),
      images: [
        {
          url: 'https://asterium-academy/og/asterium-cover.png', // ждем
          width: 1200,
          height: 630,
          alt: t('metadata.open-graph.images.alt'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('metadata.title'),
      description: t('metadata.description'),
      images: ['https://asterium-academy/og/asterium-cover.png'], // ждем
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
      canonical: `https://asterium-academy.uz/${t('metadata.url')}`,
      languages: {
        'en-US': 'asterium-academy/en',
        'ru-RU': 'asterium-academy/ru',
        'uz-UZ': 'asterium-academy/uz',
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
    other: {
      'script:ld+json': JSON.stringify(siteJsonLd),
    },
  };
}

export default async function LanguageLayout({ children, params }: Props) {
  const { lng } = await params;

  if (!SUPPORTED_LANGUAGES.includes(lng)) {
    notFound();
  }

  return (
    <html lang={lng}>
      <head>
        <GoogleAnalytics />
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

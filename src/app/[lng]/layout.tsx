import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  children: ReactNode;
  params: Promise<{ lng: string }>;
};

const SUPPORTED_LANGUAGES = ['ru', 'en', 'uz'];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lng } = await params;

  const { useTranslation } = await import('@/app/i18n');
  const { t } = await useTranslation(lng);

  const localeMap = {
    ru: 'ru_RU',
    en: 'en_US',
    uz: 'uz_UZ',
  };

  return {
    metadataBase: new URL(`https://asterium.uz/${t('metadata.url')}`),
    title: {
      default: t('metadata.title'),
      template: `%s | Asterium.uz/${t('metadata.url')}`,
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
        url: `https://asterium.uz/${t('metadata.url')}`,
      },
    ],
    creator: t('metadata.creator'),
    publisher: t('metadata.publisher'),
    openGraph: {
      type: 'website',
      locale: localeMap[lng as keyof typeof localeMap] || 'en_US',
      url: `https://asterium.uz/${t('metadata.url')}`,
      siteName: `Asterium.uz/${t('metadata.url')}`,
      title: t('metadata.title'),
      description: t('metadata.open-graph.description'),
      images: [
        {
          url: 'https://asterium.uz/og/asterium-cover.png',
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
      canonical: `https://asterium.uz/${t('metadata.url')}`,
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
}

export default async function LanguageLayout({ children, params }: Props) {
  const { lng } = await params;

  if (!SUPPORTED_LANGUAGES.includes(lng)) {
    notFound();
  }

  return children;
}

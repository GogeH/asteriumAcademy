import { TPost } from '@/types/posts';
import React from 'react';

type JsonLD = {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
};

type StructuredDataProps = {
  post?: TPost;
  lang?: 'ru' | 'en' | 'uz';
};

export default function StructuredData({
  post,
  lang = 'ru',
}: StructuredDataProps) {
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : '';
  const segments = pathname.split('/').filter(Boolean);

  const siteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Asterium Academy',
    description: 'Криптообразование в Узбекистане',
    url: 'https://asterium-academy.uz',
    logo: 'https://asterium-academy.uz/images/png/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+998 78 777-55-58',
      email: 'support@asterium-academy.uz',
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
      streetAddress: `Said Baraka ko'chasi 12А`,
      addressLocality: 'Tashkent',
      addressCountry: 'UZ',
      postalCode: '100105',
    },
  };

  const structuredDataArray: JsonLD[] = [siteJsonLd];

  if (segments.length > 0) {
    const items = segments.map((segment, index) => {
      const urlSegments = segments.slice(0, index + 1);
      const url = `/${lang}/${urlSegments.join('/')}`;
      const name = decodeURIComponent(segment).replace(/-/g, ' ');
      return {
        '@type': 'ListItem',
        position: index + 1,
        name,
        item: `https://asterium-academy.uz${url}`,
      };
    });

    structuredDataArray.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items,
    });
  }

  if (post) {
    const previewImageUrl = post.Preview_Image
      ? `https://cms.asterium.uz/assets/${post.Preview_Image}`
      : 'https://asterium-academy.uz/images/png/logo.png';

    const postJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      datePublished: post.date_created,
      dateModified: post.date_updated,
      description: post.excerpt || post.content.slice(0, 160),
      url: `https://asterium-academy.uz/${lang}/post/${post.slug}`,
      BlogType: post.Blog_type,
      status: post.status,
      readingTime: post.Reading_time,
      image: previewImageUrl,
    };
    structuredDataArray.push(postJsonLd);
  }

  return (
    <>
      {structuredDataArray.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}

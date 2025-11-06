import { Metadata } from 'next';
import { postsService } from '@/services/postsService';

type TPostPageProps = { params: { id: string } };

export async function generateMetadata({
  params,
}: TPostPageProps): Promise<Metadata> {
  const post = await postsService.getBySlug(params.id);
  if (!post) return {};

  const previewImageUrl = post.Preview_Image
    ? `https://cms.asterium.uz/assets/${post.Preview_Image}`
    : '/favicon/android-chrome-512x512.png';

  return {
    title: post.title,
    description: post.excerpt || post.content.slice(0, 160),
    alternates: {
      canonical: `https://asterium.uz/post/${params.id}`,
      languages: {
        'en-US': `https://asterium.uz/en/post/${params.id}`,
        'ru-RU': `https://asterium.uz/ru/post/${params.id}`,
        'uz-UZ': `https://asterium.uz/uz/post/${params.id}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt || post.content.slice(0, 160),
      url: `https://asterium.uz/post/${params.id}`,
      images: [
        {
          url: previewImageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      title: post.title,
      description: post.excerpt || post.content.slice(0, 160),
      images: [
        {
          url: previewImageUrl,
          width: 1200,
          height: 630,
        },
      ],
      card: 'summary',
    },
  };
}

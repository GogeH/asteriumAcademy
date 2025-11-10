import { postsService } from '@/services/postsService';
import Footer from '@/components/common/Footer/Footer';
import { PAGINATION_CONFIG } from '@/constants/posts';
import PostList from '@/components/common/Posts/PostList';
import BackgroundWrapper from '@/components/common/BackgroundWrapper';
import { Loading } from '@/components/shared/Loading';
import Header from '@/components/common/Header/Header';
import FAQWrapper from '@/components/common/FAQ/FAQWrapper';
import { useTranslation } from '@/app/i18n';
import PostContent from '@/components/common/Posts/PostContent';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type TGenerateMetadataProps = { params: { id: string } };

export async function generateMetadata({
  params,
}: TGenerateMetadataProps): Promise<Metadata> {
  const post = await postsService.getBySlug(params.id);
  if (!post) return {};

  const previewImageUrl = post.Preview_Image
    ? `https://cms.asterium.uz/assets/${post.Preview_Image}`
    : 'https://asterium.uz/favicon/android-chrome-512x512.png';

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

type TPostPageProps = {
  params: Promise<{ lng: string; id: string }>;
};

export const revalidate = 300;

export default async function PostPage({ params }: TPostPageProps) {
  const resolvedParams = await params;
  const { lng, id } = resolvedParams;

  const { t } = await useTranslation(lng);

  const decodedId = decodeURIComponent(id);

  const post = await postsService.getBySlug(decodedId);

  const shortPostList = await postsService
    .getAll(
      PAGINATION_CONFIG.INITIAL_PAGE_NUMBER,
      PAGINATION_CONFIG.PAGE_SHORT_SIZE,
    )
    .catch(() => null);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BackgroundWrapper className="max-sm:bg-none">
        <Header isPostPage lng={lng} />
        <main className="mx-auto px-28 max-lg:px-16 max-sm:px-4">
          <PostContent
            lng={lng}
            title={post.title}
            experience={post.experience}
            timeRead={post.Reading_time}
            dateCreated={post.date_created}
            dateUpdated={post.date_updated}
            content={post.content}
          />
          {shortPostList ? (
            <PostList
              initialPosts={shortPostList}
              lng={lng}
              readMore={t('post.read-more')}
              loadMore={t('post.load-more')}
              loadMoreStatus={t('post.loading')}
              notPosts={t('post.message-not-posts')}
              errorLoadingPosts={t('post.message-error-posts')}
              minRead={t('post.min-read')}
              title={t('post.title')}
              isPostPage
            />
          ) : (
            <Loading text={`${t('post.loading')}...`} className="mb-25" />
          )}

          <FAQWrapper isPostPage lng={lng} />
        </main>
        <Footer isPostPage lng={lng} />
      </BackgroundWrapper>
    </>
  );
}

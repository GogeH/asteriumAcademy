import { postsService } from '@/services/postsService';
import NotFound from '@/app/not-found';
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';
import PostTitle from '@/components/common/Posts/PostTitle';
import FAQ from '@/components/common/FAQ';
import { PAGINATION_CONFIG } from '@/constants/posts';
import PostList from '@/components/common/Posts/PostList';
import ContentPost from '@/components/common/Posts/ContentPost';
import BackgroundWrapper from '@/components/common/BackgroundWrapper';
import Head from 'next/head';
import StructuredData from '@/components/seo/StructuredData';
import { Loading } from '@/components/shared/Loading';

type TPostPageProps = {
  params: { id: string };
};

export const revalidate = 300;

export default async function PostPage({ params }: TPostPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.id;

  const post = await postsService.getBySlug(slug);

  const shortPostList = await postsService
    .getAll(
      PAGINATION_CONFIG.INITIAL_PAGE_NUMBER,
      PAGINATION_CONFIG.PAGE_SHORT_SIZE,
    )
    .catch(() => null);

  if (!post) {
    return <NotFound />;
  }

  return (
    <>
      <Head>
        <StructuredData post={post} />
      </Head>
      <BackgroundWrapper>
        <Header />
        <main className="mx-auto px-28 max-lg:px-16 max-sm:px-4">
          <PostTitle
            title={post.title}
            experience={post.experience}
            timeRead={post.Reading_time}
            dateCreated={post.date_created}
            dateUpdated={post.date_updated}
            content={post.content}
          />
          <ContentPost />
          {shortPostList ? (
            <PostList initialPosts={shortPostList} isPostPage />
          ) : (
            <Loading text="Загрузка постов..." className="mb-25" />
          )}

          <FAQ isPostPage />
        </main>
        <Footer isPostPage />
      </BackgroundWrapper>
    </>
  );
}

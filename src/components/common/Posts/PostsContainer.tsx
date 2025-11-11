'use client';

import { useEffect, useState } from 'react';
import PostList from '@/components/common/Posts/PostList';
import { postsService } from '@/services/postsService';
import { PAGINATION_CONFIG } from '@/constants/posts';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { TPost } from '@/types/posts';
import { Loading } from '@/components/shared/Loading';

type TPostsContainerProps = {
  categories: Array<{ id: string; name: string }>;
  title: string;
  text: string;
  loadMore: string;
  loading: string;
  loadMoreStatus: string;
  notPosts: string;
  errorLoadingPosts: string;
  minRead: string;
  readMore: string;
  lng: string;
};

export default function PostsContainer({
  categories,
  title,
  text,
  loading,
  loadMoreStatus,
  loadMore,
  notPosts,
  errorLoadingPosts,
  minRead,
  readMore,
  lng,
}: TPostsContainerProps) {
  const breakpoint = useBreakpoint();
  const [initialPosts, setInitialPosts] = useState<TPost[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPosts, setTotalPosts] = useState<number | null>(null);

  useEffect(() => {
    if (!breakpoint) return;

    const fetchPosts = async () => {
      try {
        const posts = await postsService.getAll(
          PAGINATION_CONFIG.INITIAL_PAGE_NUMBER,
          PAGINATION_CONFIG.PAGE_SIZE[breakpoint],
          lng,
        );

        const totalCount = await postsService.getTotalCount(lng);

        setInitialPosts(posts);
        setTotalPosts(totalCount);
      } catch {
        setInitialPosts(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [breakpoint]);

  return (
    <div className="mb-26 max-lg:mb-1 max-w-[1200px] mx-auto" id="blog">
      <h2 className="text-[80px] leading-[100%] tracking-[-0.04em] uppercase mb-4 max-lg:text-[64px] max-sm:text-[48px] max-sm:mb-3">
        {title}
      </h2>
      <p className="max-w-[368px] text-base leading-[131.25%] text-silver mb-15 max-lg:mb-21 max-sm:mb-10">
        {text}
      </p>

      {isLoading ? (
        <Loading text={`${loading}...`} />
      ) : (
        <PostList
          initialPosts={initialPosts}
          breakpoint={breakpoint}
          categories={categories}
          loadMore={loadMore}
          loadMoreStatus={loadMoreStatus}
          notPosts={notPosts}
          errorLoadingPosts={errorLoadingPosts}
          minRead={minRead}
          readMore={readMore}
          lng={lng}
          totalPosts={totalPosts}
        />
      )}
    </div>
  );
}

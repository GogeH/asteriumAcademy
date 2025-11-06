'use client';

import { useState } from 'react';
import PostItem from '@/components/common/Posts/PostItem';
import { TPost } from '@/types/posts';
import { postsService } from '@/services/postsService';
import { PAGINATION_CONFIG } from '@/constants/posts';
import CategorySelect from '@/components/common/CategorySelect';
import { TSize } from '@/types/size';

type TSimplePostsListProps = {
  initialPosts: TPost[] | null;
  isPostPage?: boolean;
  breakpoint?: TSize | null;
};

export default function PostList({
  initialPosts,
  isPostPage = false,
  breakpoint = 'MOBILE',
}: TSimplePostsListProps) {
  const [posts, setPosts] = useState<TPost[] | null>(initialPosts);
  const [page, setPage] = useState(PAGINATION_CONFIG.INITIAL_PAGE_NUMBER + 1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hasMore, setHasMore] = useState(
    initialPosts?.length ===
      PAGINATION_CONFIG.PAGE_SIZE[breakpoint || 'MOBILE'],
  );

  const loadMore = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const newPosts = await postsService.getAll(
        page,
        PAGINATION_CONFIG.PAGE_SIZE[breakpoint || 'MOBILE'],
      );

      setPosts((prev) => prev && [...prev, ...newPosts]);
      setPage((prev) => prev + 1);

      if (
        newPosts.length < PAGINATION_CONFIG.PAGE_SIZE[breakpoint || 'MOBILE']
      ) {
        setHasMore(false);
      }
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (posts === null || isError)
    return (
      <div className="font-medium text-[24px] leading-[139%] mb-2">
        Не получилось загрузить посты!
      </div>
    );

  if (!posts.length)
    return (
      <div className="font-medium text-[24px] leading-[139%] mb-2">
        Пока нет постов
      </div>
    );
  console.log(posts, 'posts');
  return (
    <div className={`${isPostPage && 'px-3 max-lg:mb-16'} max-lg:px-0`}>
      {!isPostPage && <CategorySelect />}
      {isPostPage && (
        <h2 className="font-bold text-[32px] leading-[139%] mb-8 ml-6 max-lg:uppercase max-lg:font-medium max-lg:leading-[100%] max-lg:tracking-[-0.04em] max-lg:ml-0 max-lg:mb-10">
          Another lessons
        </h2>
      )}
      <ul
        className={`flex flex-wrap gap-13 justify-center ${isPostPage ? 'mb-13' : '-mb-2'} max-lg:gap-0`}
        role="list"
      >
        {posts?.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
      {hasMore && !isPostPage && (
        <div className="flex justify-center">
          <button
            onClick={loadMore}
            disabled={isLoading}
            className="font-manrope font-medium text-sm underline underline-offset-[25%] decoration-1 leading-[110%]
            tracking-tight text-silver hover:text-gray-300 transition-colors disabled:opacity-50
            disabled:cursor-not-allowed cursor-pointer"
          >
            {isLoading ? 'Loading' : 'Load more'}
          </button>
        </div>
      )}
    </div>
  );
}

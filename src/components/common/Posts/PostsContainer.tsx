// 'use client';
//
// import { useEffect, useState } from 'react';
// import PostList from '@/components/common/Posts/PostList';
// import { postsService } from '@/services/postsService';
// import { PAGINATION_CONFIG } from '@/constants/posts';
// import { useBreakpoint } from '@/hooks/useBreakpoint';
// import { TPost } from '@/types/posts';
// import { Loading } from '@/components/shared/Loading';
//
// export default function PostsContainer() {
//   const breakpoint = useBreakpoint();
//   const [initialPosts, setInitialPosts] = useState<TPost[] | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//
//   useEffect(() => {
//     if (!breakpoint) return;
//
//     const fetchPosts = async () => {
//       try {
//         const posts = await postsService.getAll(
//           PAGINATION_CONFIG.INITIAL_PAGE_NUMBER,
//           PAGINATION_CONFIG.PAGE_SIZE[breakpoint],
//         );
//         setInitialPosts(posts);
//       } catch {
//         setInitialPosts(null);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//
//     fetchPosts();
//   }, [breakpoint]);
//
//   return (
//     <section className="mb-26 max-lg:mb-1" id="blog">
//       <h2 className="text-[80px] leading-[100%] tracking-[-0.04em] uppercase mb-4 max-lg:text-[64px] max-sm:text-[48px] max-sm:mb-3">
//         Lessons tracker
//       </h2>
//       <p className="max-w-[368px] text-base leading-[131.25%] text-silver mb-15 max-lg:mb-21 max-sm:mb-10">
//         Empowering the next generation of Web3 builders, thinkers, and creators.
//       </p>
//
//       {isLoading ? (
//         <Loading text="Загрузка постов..." />
//       ) : (
//         <PostList initialPosts={initialPosts} breakpoint={breakpoint} />
//       )}
//     </section>
//   );
// }

import { postsService } from '@/services/postsService';
import { PAGINATION_CONFIG } from '@/constants/posts';
import PostList from '@/components/common/Posts/PostList';
import { Loading } from '@/components/shared/Loading';

export default async function PostsContainer() {
  const initialPosts = await postsService
    .getAll(
      PAGINATION_CONFIG.INITIAL_PAGE_NUMBER,
      PAGINATION_CONFIG.PAGE_SIZE.DESKTOP,
    )
    .catch(() => null);

  return (
    <section className="mb-26 max-lg:mb-1">
      <h2 className="text-[80px] leading-[100%] tracking-[-0.04em] uppercase mb-4 max-lg:text-[64px] max-sm:text-[48px] max-sm:mb-3">
        Lessons tracker
      </h2>
      <p className="max-w-[368px] text-base  leading-[131.25%] text-silver mb-15 max-lg:mb-21 max-sm:mb-10">
        Empowering the next generation of Web3 builders, thinkers, and creators.
      </p>
      {!initialPosts ? (
        <Loading text="Загрузка постов..." />
      ) : (
        <PostList initialPosts={initialPosts} breakpoint="DESKTOP" />
      )}
    </section>
  );
}

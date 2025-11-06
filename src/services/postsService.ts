import client from '@/lib/directus';
import { readItems } from '@directus/sdk';
import type { TPost } from '@/types/posts';
import { PAGINATION_CONFIG } from '@/constants/posts';

export const postsService = {
  getAll: async (
    page: number = PAGINATION_CONFIG.INITIAL_PAGE_NUMBER,
    limit: number,
  ): Promise<TPost[]> => {
    const offset = (page - 1) * limit;

    return (await client.request(
      readItems('posts', {
        fields: [
          'categories',
          'content',
          'date_created',
          'date_updated',
          'excerpt',
          'id',
          'slug',
          'status',
          'tags',
          'title',
        ],
        filter: { status: { _eq: 'published' } },
        sort: ['-date_created'],
        limit: limit,
        offset: offset,
      }),
    )) as TPost[];
  },

  getBySlug: async (slug: string): Promise<TPost | null> => {
    const posts = (await client.request(
      readItems('posts', {
        filter: {
          slug: { _eq: slug },
          status: { _eq: 'published' },
        },
        fields: ['*'],
        limit: 1,
      }),
    )) as TPost[];

    return posts[0] || null;
  },
};

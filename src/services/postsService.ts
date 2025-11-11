import { formatLangForCMS } from '@/utils/formatLang';
import { PAGINATION_CONFIG } from '@/constants/posts';
import { TPost } from '@/types/posts';
import client from '@/lib/directus';
import { readItems } from '@directus/sdk';

export const postsService = {
  getAll: async (
    page: number = PAGINATION_CONFIG.INITIAL_PAGE_NUMBER,
    limit: number,
    lang: string = 'ru',
  ): Promise<TPost[]> => {
    try {
      const params = new URLSearchParams({
        fields:
          'categories,content,date_created,date_updated,excerpt,id,slug,status,tags,title,Locale,Reading_time',
        filter: JSON.stringify({
          status: { _eq: 'published' },
          Locale: { _eq: formatLangForCMS(lang) },
        }),
        sort: '-date_created',
        limit: limit.toString(),
        offset: ((page - 1) * limit).toString(),
      });

      const response = await fetch(`/api/cms/items/posts?${params}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  },

  getAllServerComponent: async (
    page: number = PAGINATION_CONFIG.INITIAL_PAGE_NUMBER,
    limit: number,
    lang: string = 'ru',
  ): Promise<TPost[]> => {
    const offset = (page - 1) * limit;
    const formattedLang = formatLangForCMS(lang);

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
          'Locale',
        ],
        filter: {
          status: { _eq: 'published' },
          Locale: { _eq: formattedLang },
        },
        sort: ['-date_created'],
        limit: limit,
        offset: offset,
      }),
    )) as TPost[];
  },

  getTotalCount: async (lang: string): Promise<number> => {
    try {
      const params = new URLSearchParams({
        fields: 'id',
        filter: JSON.stringify({
          status: { _eq: 'published' },
          Locale: { _eq: formatLangForCMS(lang) },
        }),
        limit: '-1',
      });

      const response = await fetch(`/api/cms/items/posts?${params}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.data.length;
    } catch (error) {
      console.error('Error fetching total count:', error);
      throw error;
    }
  },

  getBySlug: async (
    slug: string,
    lang: string = 'Ru',
  ): Promise<TPost | null> => {
    const formattedLang = formatLangForCMS(lang);

    const posts = (await client.request(
      readItems('posts', {
        filter: {
          slug: { _eq: slug },
          status: { _eq: 'published' },
          Locale: { _eq: formattedLang },
        },
        fields: ['*'],
        limit: 1,
      }),
    )) as TPost[];

    return posts[0] || null;
  },
};

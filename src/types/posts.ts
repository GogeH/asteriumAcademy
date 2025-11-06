export const PostCategories = {
  NEWS: 'news',
  CRYPTO_PRODUCT: 'cryptoproduct',
  CRYPTO: 'crypto',
  CRYPTO_DIGEST: 'crypto-digest',
} as const;

export type TPostCategory =
  | (typeof PostCategories)[keyof typeof PostCategories]
  | null;

export const PostsExperience = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
} as const;

export type TPostExperience =
  | (typeof PostsExperience)[keyof typeof PostsExperience]
  | null;

export type TPost = {
  Blog_type: string;
  categories: TPostCategory;
  content: string;
  date_created: string;
  date_updated: string;
  excerpt: string;
  id: number;
  slug: string;
  status: string;
  tags: string[] | null;
  title: string;
  Reading_time: number;
  Preview_Image: string;
  // исправить на нужный ключь и  потом сделать experience: TPostExperience
  experience: string;
};

export type TPostsResponse = {
  posts: TPost[];
  total: number;
  offset: number;
  limit: number;
  hasMore: boolean;
};

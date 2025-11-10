import PostsContainer from '@/components/common/Posts/PostsContainer';
import { useTranslation } from '@/app/i18n';

const CATEGORY_KEYS = [
  { id: 'Select a category', translationKey: 'select1' },
  { id: 'not category', translationKey: 'select2' },
  { id: 'beginner', translationKey: 'select3' },
  { id: 'advanced', translationKey: 'select4' },
  { id: 'intermediate', translationKey: 'select5' },
] as const;

type TPostsWrapperProps = {
  lng: string;
};

export default async function PostsWrapper({ lng }: TPostsWrapperProps) {
  const { t } = await useTranslation(lng);

  const categories = CATEGORY_KEYS.map((category) => ({
    id: category.id,
    name: t(`post.${category.translationKey}`),
  }));

  return (
    <section>
      <PostsContainer
        categories={categories}
        title={t('post.title')}
        text={t('post.text')}
        loadMore={t('post.load-more')}
        loading={t('post.loading')}
        loadMoreStatus={t('post.loading')}
        notPosts={t('post.message-not-posts')}
        errorLoadingPosts={t('post.message-error-posts')}
        minRead={t('post.min-read')}
        readMore={t('post.read-more')}
        lng={lng}
      />
    </section>
  );
}

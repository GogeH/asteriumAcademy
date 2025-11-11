import Link from 'next/link';
import { useTranslation } from '@/app/i18n';

type TNotFoundContentProps = {
  lng: string;
  isPostPage?: boolean;
};

export default async function NotFoundContent({
  lng,
  isPostPage,
}: TNotFoundContentProps) {
  const { t } = await useTranslation(lng);

  return (
    <main className="w-full h-screen grid place-items-center bg-background text-white overflow-hidden p-0 m-0">
      <div className="text-center max-w-md w-full">
        <h1 className="text-[48px] font-bold">404</h1>
        <h2 className="text-[36px] mb-2">{t('not-found.title')}</h2>
        <p className="mb-4 text-silver opacity-80">
          {isPostPage
            ? `${t('not-found.post-text')}`
            : `${t('not-found.text')}`}
        </p>
        <Link
          href={`/${lng}`}
          className="inline-block bg-[rgba(86,86,86,0.3)] backdrop-blur-sm text-white px-6 py-3 rounded-[24px] hover:bg-[rgba(86,86,86,0.5)] transition-colors font-inter font-semibold"
        >
          {t('not-found.button-text')}
        </Link>
      </div>
    </main>
  );
}

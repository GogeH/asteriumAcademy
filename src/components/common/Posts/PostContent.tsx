import ExperienceBadge from '@/components/shared/ExperienceBadge';
import { formatDateCustom, Language } from '@/utils/formatDate';
import { useTranslation } from '@/app/i18n';
import Link from 'next/link';

type TPostTitleProps = {
  title: string;
  experience: string;
  timeRead: number;
  dateCreated: string;
  dateUpdated: string;
  content: string;
  lng: string;
};

export default async function PostContent({
  title,
  experience,
  timeRead,
  dateCreated,
  dateUpdated,
  content,
  lng,
}: TPostTitleProps) {
  const { t } = await useTranslation(lng);

  return (
    <section className="max-w-[1200px] mx-auto break-words px-3 max-lg:px-0">
      <h1 className="font-medium text-[80px] leading-[100%] tracking-[-0.04em] uppercase mb-6 max-lg:text-[64px] max-sm:text-[48px]">
        {title}
      </h1>
      <div className="flex items-center mb-10.5 max-sm:mb-9">
        <ExperienceBadge experience={experience || 'Intermediate'} />
        <p className="leading-[131.25%] text-silver ml-6">
          {timeRead} {t('post.min-read')} ·{' '}
          {dateUpdated
            ? `${t('post.updated')} ${formatDateCustom(dateUpdated, lng as Language)}`
            : `${t('post.created')} ${formatDateCustom(dateCreated, lng as Language)}`}
        </p>
      </div>
      <div
        className="mb-13
        [&_h2]:font-bold [&_h2]:text-[24px] [&_h2]:leading-[139%] [&_h2]:mb-4 [&_h2:last-child]:mb-0
        [&_h3]:font-bold [&_h3]:text-[24px] [&_h3]:leading-[139%] [&_h3]:mb-4 [&_h3:last-child]:mb-0
        [&_p]:text-[18px] [&_p]:leading-[135%] [&_p]:tracking-[-0.01em] [&_p]:mb-4 [&_p:last-child]:mb-0
        [&_ul]:list-disc [&_ul]:text-[18px] [&_ul]:leading-[135%] [&_ul]:tracking-[-0.01em] [&_ul]:mb-4 [&_ul:last-child]:mb-0 [&_ul]:pl-6
        [&_ol]:list-decimal [&_ol]:text-[18px] [&_ol]:leading-[135%] [&_ol]:tracking-[-0.01em] [&_ol]:mb-4 [&_ol:last-child]:mb-0 [&_ol]:pl-6
        [&_li]:mb-2 [&_li:last-child]:mb-0
      "
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className="mb-23 px-3 max-lg:px-0 max-lg:mb-24">
        <Link
          href="https://app.asterium.uz/sign-up"
          target="_blank"
          className="rounded-[200px] py-4 px-6 bg-[rgba(217,254,67,1)]
        font-inter font-semibold text-base leading-[115%] tracking-[-0.02em] text-center text-text-black-light"
        >
          {t('post.button-text')}
        </Link>
      </div>
    </section>
  );
}

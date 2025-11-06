import ExperienceBadge from '@/components/shared/ExperienceBadge';
import { formatDateCustom } from '@/utils/formatDate';

type TPostTitleProps = {
  title: string;
  experience: string;
  timeRead: number;
  dateCreated: string;
  dateUpdated: string;
  content: string;
};

export default function TPostTitle({
  title,
  experience,
  timeRead,
  dateCreated,
  dateUpdated,
  content,
}: TPostTitleProps) {
  return (
    <section className="break-words mt-35 px-3 max-lg:mt-20 max-lg:px-0">
      <h1 className="font-medium text-[80px] leading-[100%] tracking-[-0.04em] uppercase mb-6 max-lg:text-[64px] max-sm:text-[48px]">
        {title}
      </h1>
      <div className="flex items-center mb-10.5 max-sm:mb-9">
        <ExperienceBadge experience={experience || 'Intermediate'} />
        <p className="leading-[131.25%] text-silver ml-6">
          {timeRead} min read ·{' '}
          {!dateCreated
            ? `Created ${formatDateCustom(dateCreated)}`
            : `Updated ${formatDateCustom(dateUpdated)}`}
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
    </section>
  );
}

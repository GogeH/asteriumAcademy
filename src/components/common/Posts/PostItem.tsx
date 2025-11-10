import { TPost } from '@/types/posts';
import Link from 'next/link';
import ExperienceBadge from '@/components/shared/ExperienceBadge';

type TPostCardProps = {
  post: TPost;
  minRead: string;
  readMore: string;
  lng: string;
  isPostPage?: boolean;
};

export default function PostItem({
  post,
  minRead,
  readMore,
  lng,
  isPostPage,
}: TPostCardProps) {
  return (
    <li
      key={post.id}
      className="flex flex-col w-[361px] rounded-lg border border-[rgba(17,17,17,0.1)] bg-[rgba(255,255,255,0.02)] p-6 mb-8 max-lg:w-[100%] max-lg:mb-5"
    >
      <div className="flex justife-start items-center mb-4">
        <ExperienceBadge experience="Beginner" />
        <p className="font-apercu text-sm leading-[150%]">
          {'5'} {minRead}
        </p>
      </div>

      <h4 className="font-medium text-[24px] leading-[139%] mb-2">
        {post.title}
      </h4>
      <p className="opacity-60 mb-6">{post.excerpt}</p>
      <Link
        href={`/${lng}/post/${post.slug}`}
        className={`mt-auto ${lng === 'en' ? 'max-w-[105px]' : 'max-w-[135px]'} h-[37px] rounded-[24px] py-2 px-4 backdrop-blur-sm bg-[rgba(86,86,86,0.3)] 
        font-inter font-semibold text-[14px] cursor-pointer flex items-center justify-center`}
      >
        {readMore}
      </Link>
    </li>
  );
}

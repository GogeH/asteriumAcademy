import Link from 'next/link';
import { HEADING_BASE, SUB_HEADING } from '@/components/common/Footer/Footer';

type TListItem = {
  readonly name: string;
  readonly href: string;
};

type TInfoProps = {
  info: {
    readonly title: string;
    readonly list: readonly TListItem[];
    readonly isLastTitle?: boolean;
  };
};

export default function Info({ info }: TInfoProps) {
  return (
    <div
      className={`${info.isLastTitle && '-ml-3'} max-lg:min-w-[105px] max-lg:ml-0`}
    >
      <h3 className={`${HEADING_BASE} mb-4`}>{info.title}</h3>
      <ul role="list">
        {info.list.map((item) => (
          <li
            key={item.name}
            className={`${SUB_HEADING} mb-2 transition-colors duration-300 hover:opacity-100 hover:text-white`}
          >
            <Link href={item.href} target="_blank">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

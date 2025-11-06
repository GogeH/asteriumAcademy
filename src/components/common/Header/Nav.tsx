import { BUTTON_LIST } from '@/constants/nav';
import NavItem from '@/components/common/Header/NavItem';

type TNavProps = {
  isNotFoundHeader?: boolean;
};

export default function Nav({ isNotFoundHeader }: TNavProps) {
  return (
    <nav className="max-[750px]:hidden">
      <ul
        className="flex justify-between gap-6 w-full rounded-[48px] border-3 py-4 px-10 font-medium text-[14px] align-middle leading-8 backdrop-blur-[51.97px] bg-transparent
        max-lg:px-8"
        role="list"
        style={{
          borderColor: 'rgba(255, 255, 255, 0.5)',
          boxShadow: `
      -8.66px -8.66px 4.33px -8.66px rgba(179, 179, 179, 1) inset,
      8.66px 8.66px 4.33px -8.66px rgba(179, 179, 179, 1) inset
    `,
        }}
      >
        {BUTTON_LIST.slice(isNotFoundHeader ? 2 : 0, 3).map((item) => (
          <NavItem key={item.anchor} navItem={item} />
        ))}
      </ul>
    </nav>
  );
}

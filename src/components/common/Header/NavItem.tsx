'use client';

import { MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { TNavItem } from '@/types/nav';

type TNavListProps = {
  navItem: TNavItem;
  isBurgerMenu?: boolean;
  setIsOpenAction?: (isOpen: boolean) => void;
};

export default function NavItem({
  navItem,
  isBurgerMenu,
  setIsOpenAction,
}: TNavListProps) {
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleLinkClick = (e: MouseEvent) => {
    if (pathname === '/' && document.getElementById(navItem.anchor)) {
      e.preventDefault();

      setTimeout(() => {
        setIsOpenAction?.(false);
      }, 300);

      setTimeout(() => {
        scrollToSection(navItem.anchor);
        window.history.pushState(null, '', `/#${navItem.anchor}`);
      }, 400);
    } else {
      setIsOpenAction?.(false);
    }
  };

  return (
    <li
      key={navItem.anchor}
      className={`${isBurgerMenu && 'mb-5'} flex justify-between`}
    >
      {navItem.isLink ? (
        <Link
          href="https://t.me/asteriumwallet"
          target="_blank"
          className={
            isBurgerMenu
              ? 'text-text-white-light font-inter font-medium text-[14px] leading-[100%] tracking-[-0.02em]'
              : 'hover:text-gray-300 transition-colors border-1 rounded-[48px] px-3 cursor-pointer flex justify-between'
          }
        >
          {!isBurgerMenu && (
            <Image
              src="/svg/asterium.svg"
              className="mr-2"
              alt="Иконка Астериум"
              width={24}
              height={24}
            />
          )}
          {navItem.text}
        </Link>
      ) : (
        <Link
          href={`/#${navItem.anchor}`}
          onClick={handleLinkClick}
          className={
            isBurgerMenu
              ? 'text-text-white-light font-inter font-medium text-[14px] leading-[100%] tracking-[-0.02em]'
              : 'hover:text-gray-300 transition-colors border-1 rounded-[48px] px-3 cursor-pointer'
          }
        >
          {navItem.text}
        </Link>
      )}
    </li>
  );
}

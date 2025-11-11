'use client';

import { MouseEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { TNavItem } from '@/types/nav';

type TNavListProps = {
  navItem: TNavItem;
  isBurgerMenu?: boolean;
  setIsOpenAction?: (isOpen: boolean) => void;
  lng?: string;
  iconALt: string;
};

export default function NavItem({
  navItem,
  isBurgerMenu,
  setIsOpenAction,
  lng,
  iconALt,
}: TNavListProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shouldShowIcon = !isBurgerMenu && !(lng === 'ru' && windowWidth < 780);

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
    if (pathname === `/${lng}` && document.getElementById(navItem.anchor)) {
      e.preventDefault();

      setIsOpenAction?.(false);

      setTimeout(() => {
        scrollToSection(navItem.anchor);
        window.history.pushState(null, '', `/${lng}#${navItem.anchor}`);
      }, 100);
    } else if (!navItem.isLink) {
      e.preventDefault();
      setIsOpenAction?.(false);

      router.push(`/${lng}#${navItem.anchor}`);

      setTimeout(() => {
        const element = document.getElementById(navItem.anchor);
        if (element) {
          setTimeout(() => scrollToSection(navItem.anchor), 100);
        }
      }, 300);
    } else {
      setIsOpenAction?.(false);
    }
  };

  const getHref = () => {
    if (navItem.isLink) {
      return 'https://t.me/asteriumwallet';
    }

    return pathname === `/${lng}`
      ? `#${navItem.anchor}`
      : `/${lng}#${navItem.anchor}`;
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
              : 'hover:text-gray-400 transition-colors border-1 rounded-[48px] px-3 cursor-pointer flex justify-between ' +
                'transition-all duration-300 ease-out transform hover:-translate-y-0.5 hover:animate-pulse py-1'
          }
        >
          {shouldShowIcon && (
            <Image
              src="/svg/asterium.svg"
              className="mr-2"
              alt={iconALt}
              width={24}
              height={24}
            />
          )}
          {navItem.text}
        </Link>
      ) : (
        <Link
          href={getHref()}
          onClick={handleLinkClick}
          className={
            isBurgerMenu
              ? 'text-text-white-light font-inter font-medium text-[14px] leading-[100%] tracking-[-0.02em]'
              : 'hover:text-gray-300 transition-colors border-1 rounded-[48px] px-3 cursor-pointer flex justify-between ' +
                'transition-all duration-300 ease-out transform hover:-translate-y-0.5 hover:animate-pulse py-1'
          }
        >
          {navItem.text}
        </Link>
      )}
    </li>
  );
}

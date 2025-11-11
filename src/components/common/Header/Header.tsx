'use client';

import { useEffect, useRef, useState } from 'react';
import Nav from '@/components/common/Header/Nav';
import Link from 'next/link';
import Image from 'next/image';
import BurgerMenu from '@/components/common/Header/BurgerMenu';
import LanguageSwitcher from '@/components/common/Header/LanguageSwitcher';
import { TNavItem } from '@/types/nav';

type THeaderProps = {
  isNotFoundHeader?: boolean;
  isPostPage?: boolean;
  isErrorPage?: boolean;
  lng: string;
  alt: string;
  translatedNavItems: TNavItem[];
  iconALt: string;
  iconLanguageAlt: string;
};

export default function Header({
  isNotFoundHeader,
  isPostPage,
  isErrorPage = false,
  lng,
  alt,
  translatedNavItems,
  iconALt,
  iconLanguageAlt,
}: THeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (isBurgerOpen) return;

      const currentScrollY = window.scrollY;

      setIsAtTop(currentScrollY < 10);
      setIsScrolled(currentScrollY > 50);

      const scrollThreshold = window.innerWidth < 768 ? 50 : 100;

      if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else if (
        currentScrollY > lastScrollY.current &&
        currentScrollY > scrollThreshold
      ) {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    const throttledScroll = () => {
      let ticking = false;
      return () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };
    };

    window.addEventListener('scroll', throttledScroll(), { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll());
    };
  }, [isBurgerOpen]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 py-8 max-lg:py-11 max-sm:py-4 w-full flex justify-between items-center 
        z-50 transition-all duration-500 ease-out
        ${isPostPage ? 'px-28' : 'px-30'} 
        max-lg:px-15 max-sm:px-4
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        ${
          isScrolled
            ? 'bg-black/20 backdrop-blur-md py-3 shadow-lg'
            : 'bg-transparent py-4'
        }
        ${isAtTop ? 'border-b border-transparent' : 'border-b border-gray-800/20'}
      `}
    >
      <Link
        href="/"
        className={`flex-shrink-0 transition-all duration-500 ease-out hover:scale-105 active:scale-95 ${
          isBurgerOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
        }`}
      >
        <Image
          src="/svg/logo.svg"
          alt={alt}
          width={104}
          height={26}
          className="transition-opacity hover:opacity-80"
        />
      </Link>

      <Nav
        isNotFoundHeader={isNotFoundHeader}
        translatedNavItems={translatedNavItems}
        lng={lng}
        iconALt={iconALt}
      />

      <div className="flex items-center gap-4">
        <LanguageSwitcher
          iconLanguageAlt={iconLanguageAlt}
          isErrorPage={isErrorPage}
        />

        <BurgerMenu
          isNotFoundHeader={isNotFoundHeader}
          translatedNavItems={translatedNavItems}
          iconALt={iconALt}
          iconLanguageAlt={iconLanguageAlt}
          isErrorPage={isErrorPage}
          lng={lng}
          isOpen={isBurgerOpen}
          setIsOpenAction={setIsBurgerOpen}
        />
      </div>
    </header>
  );
}

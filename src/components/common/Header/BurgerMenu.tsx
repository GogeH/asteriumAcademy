'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavItem from '@/components/common/Header/NavItem';
import LanguageSwitcher from '@/components/common/Header/LanguageSwitcher';
import { TNavItem } from '@/types/nav';

type TBurgerMenuProps = {
  isNotFoundHeader?: boolean;
  isErrorPage?: boolean;
  translatedNavItems: TNavItem[];
  iconALt: string;
  iconLanguageALt: string;
};

export default function BurgerMenu({
  isNotFoundHeader,
  isErrorPage,
  translatedNavItems,
  iconALt,
  iconLanguageALt,
}: TBurgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;

      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="max-[750px]:block hidden">
      <button
        className="relative z-50 flex items-center justify-center cursor-pointer rounded-full"
        style={{
          width: '48px',
          height: '48px',
          background:
            'radial-gradient(107.5% 107.5% at 50% 215%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
        }}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'conic-gradient(from 180deg at 50% 50%, rgba(255, 255, 255, 0.1) -72deg, rgba(255, 255, 255, 0.1) 180deg, #FFFFFF 234deg, rgba(255, 255, 255, 0.1) 288deg, rgba(255, 255, 255, 0.1) 540deg)',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMask:
              'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            padding: '0.7px',
          }}
        />

        <div
          className={`${isOpen ? 'w-4.5' : 'w-5'} h-3 flex flex-col justify-between items-center relative z-10`}
        >
          <span
            className={`block h-[2px] w-full bg-white transition-all duration-300 origin-center ${
              isOpen ? 'rotate-45 translate-y-[5px] w-6' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-white transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-white transition-all duration-300 origin-center ${
              isOpen ? '-rotate-45 -translate-y-[5px] w-6' : ''
            }`}
          />
        </div>
      </button>

      <div
        className={`fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 p-4 z-40 transition-all duration-700 ease-in-out ${
          isOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-full'
        }`}
        style={{
          background: 'rgba(19, 19, 22, 1)',
        }}
      >
        <Link href="/">
          <Image
            src="/svg/asteriumBig.svg"
            alt={iconALt}
            className="mb-13"
            width={48}
            height={48}
          />
        </Link>
        {translatedNavItems.slice(isNotFoundHeader ? 2 : 0, 3).map((item) => (
          <NavItem
            key={item.anchor}
            navItem={item}
            isBurgerMenu
            setIsOpenAction={setIsOpen}
            iconALt={iconALt}
          />
        ))}
        <div className="border-1 border-white/40" />
        <LanguageSwitcher
          isBurgerMenu
          iconLanguageALt={iconLanguageALt}
          isErrorPage={isErrorPage}
        />
      </div>
    </div>
  );
}

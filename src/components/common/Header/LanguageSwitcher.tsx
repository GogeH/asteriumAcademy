'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const LANGUAGES = [
  { code: 'RUS', name: 'RUS' },
  { code: 'UZB', name: 'UZB' },
  { code: 'ENG', name: 'ENG' },
] as const;

type TLanguageSwitcherProps = {
  isBurgerMenu?: boolean;
};

export default function LanguageSwitcher({
  isBurgerMenu,
}: TLanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<string>(LANGUAGES[0].code);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div
      className={`${!isBurgerMenu ? 'relative flex items-center justify-center min-w-[100px] max-[750px]:hidden' : 'justify-start fixed bottom-16 left-16 transform -translate-x-1/2'}`}
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-4 flex items-center justify-center font-inter font-semibold text-sm leading-[115%] tracking-[-0.02em] text-center cursor-pointer"
      >
        <span className="mr-2">{currentLang}</span>
        <Image
          src="/svg/global.svg"
          alt="Иконка планеты для выбора языка"
          width={24}
          height={24}
        />
      </button>

      {isOpen && (
        <div
          className={`w-[100px] rounded-[24px] border border-gray-400 py-2 bg-[rgba(7,7,8,1)] backdrop-blur-md absolute 
          left-0 right-0 mt-1 z-10 overflow-hidden opacity-100 ${isBurgerMenu ? 'bottom-full transform -translate-x-1 -translate-y-2' : 'top-full transform -translate-x-4 translate-y-2'}`}
          role="listbox"
          aria-labelledby="language-select"
        >
          {LANGUAGES.map((lang) => (
            <div
              key={lang.code}
              className="relative w-[92px] h-[38px] mx-auto mb-1"
            >
              {currentLang === lang.code && (
                <div
                  className="absolute inset-0 rounded-[20px]"
                  style={{
                    background:
                      'linear-gradient(92.35deg, #53FE43 -31.8%, #D9FE43 91.84%)',
                    WebkitMask:
                      'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '1px',
                  }}
                />
              )}

              <button
                onClick={() => {
                  setCurrentLang(lang.code);
                  setIsOpen(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setCurrentLang(lang.code);
                    setIsOpen(false);
                  }
                  if (e.key === 'Escape') {
                    setIsOpen(false);
                  }
                }}
                role="option"
                aria-selected={currentLang === lang.code}
                className={`hover:bg-gray-800/50 cursor-pointer transition-colors w-full h-full rounded-[20px] py-2 px-4 flex items-center justify-between relative z-10 focus:outline-none focus:ring-2 ${
                  currentLang === lang.code
                    ? 'bg-[rgba(187,254,68,0.1)]'
                    : 'opacity-70 bg-transparent'
                }`}
              >
                <span className="text-white">{lang.name}</span>
                {currentLang === lang.code && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M13.3334 4L6.00008 11.3333L2.66675 8"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

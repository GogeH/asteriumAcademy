import Link from 'next/link';
import Image from 'next/image';
import Info from '@/components/common/Footer/Info';

export const TEXT_BASE =
  'font-inter font-normal text-sm leading-[140%] tracking-[-0.01em]';
export const HEADING_BASE =
  'font-inter font-normal text-base leading-[140%] tracking-[-0.01em]';
export const SUB_HEADING = `${TEXT_BASE} opacity-60`;

export const INFO = [
  {
    title: 'О платформе',
    list: [
      {
        name: 'Продукты',
        href: '#',
      },
      {
        name: 'Экосистема',
        href: '#',
      },
      {
        name: 'Команда',
        href: '#',
      },
    ],
  },
  {
    title: 'Пользователю',
    list: [
      {
        name: 'Поддержка',
        href: '#',
      },
      {
        name: 'База знаний',
        href: '#',
      },
      {
        name: 'Блог',
        href: '#',
      },
      {
        name: 'FAQ',
        href: '#',
      },
    ],
  },
  {
    title: 'Документы',
    list: [
      {
        name: 'Пользовательское соглашение',
        href: '#',
      },
      {
        name: 'Политика конфиденциальности',
        href: '#',
      },
      {
        name: 'Лецензия',
        href: '#',
      },
    ],
  },
] as const;

const ICON_LIST = [
  {
    iconPath: '/svg/instagram.svg',
    description: 'Иконка инстагама',
    link: 'https://www.instagram.com/asteriumwallet',
  },
  {
    iconPath: '/svg/telegram.svg',
    description: 'Иконка телеграма',
    link: 'https://t.me/asteriumwallet',
  },
  {
    iconPath: '/svg/youtube.svg',
    description: 'Иконка ютуба',
    link: 'https://www.youtube.com/@AsteriumWallet',
  },
] as const;

type TFooterProps = {
  isPostPage?: boolean;
};

export default function Footer({ isPostPage = false }: TFooterProps) {
  return (
    <footer
      className={`w-full ${isPostPage ? 'pl-31 pr-37' : 'px-34'}  max-lg:px-16 max-sm:px-4 pb-13 max-lg:pb-8 max-sm:pb-30`}
    >
      <Link href="/public">
        <Image
          src="/svg/logo.svg"
          alt="Логотип"
          width={104}
          height={26}
          className="mb-8 max-sm:mb-4"
        />
      </Link>
      <div className="mb-8 w-full h-0.25 opacity-20 bg-[var(--text-white)] max-lg:mb-3 max-sm:mb-6" />
      <div className="flex items-start">
        <div className="mr-15 mb-25 max-lg:mr-2 max-lg:mb-9 max-sm:mb-16">
          <h3 className={`${HEADING_BASE} mb-4 max-sm:text-sm`}>Контакты</h3>
          <div className="space-y-3">
            <div className="mb-4">
              <h4 className={`${SUB_HEADING} mb-1 max-sm:text-xs`}>
                Адрес головного офиса
              </h4>
              <p className={`${TEXT_BASE} max-sm:text-xs`}>
                Республика Узбекистан,
                <br />
                г.Ташкент, улица Саид Барака 12А
              </p>
            </div>
            <div className="mb-4">
              <h4 className={`${SUB_HEADING} max-sm:text-xs`}>
                Электронная почта
              </h4>
              <p className={`${TEXT_BASE} max-sm:text-xs`}>
                support@asterium.uz
              </p>
            </div>
            <div>
              <h4 className={`${SUB_HEADING} max-sm:text-xs`}>
                Телефон доверия
              </h4>
              <p className={`${TEXT_BASE} max-sm:text-xs`}>
                +998(84) 777-55-58
              </p>
            </div>
          </div>
        </div>
        <div className="flex mr-5 gap-15 px-0 max-lg:gap-8 max-lg:mt-5 ml-auto max-lg:mr-0 max-sm:hidden">
          {INFO.map((item) => (
            <Info key={item.title} info={item} />
          ))}
        </div>
      </div>
      <div className="flex items-start justify-between">
        <div>
          <ul
            className="flex items-start space-x-4 mb-4 max-lg:mb-9 max-sm:mb-6"
            role="list"
          >
            {ICON_LIST.map((item) => (
              <li key={item.description}>
                <Link href={item.link} target="_blank">
                  <Image
                    src={item.iconPath}
                    alt={item.description}
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <p className={`${SUB_HEADING} max-sm:text-xs max-sm:max-w-[170px]`}>
            © 2025. Asterium. Uzbekistan All rights reserved.
          </p>
        </div>
        <Image
          src="/svg/asteriumBig.svg"
          className="mt-1 max-lg:mt-6"
          width={56}
          height={56}
          alt="Иконка астериум"
        />
      </div>
    </footer>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import Info from '@/components/common/Footer/Info';
import { useTranslation } from '@/app/i18n';

export const TEXT_BASE =
  'font-inter font-normal text-sm leading-[140%] tracking-[-0.01em]';
export const HEADING_BASE =
  'font-inter font-normal text-base leading-[140%] tracking-[-0.01em]';
export const SUB_HEADING = `${TEXT_BASE} opacity-60`;

export const getTranslatedInfo = (t: (key: string) => string) => [
  {
    title: t('footer.about-platform'),
    list: [
      {
        name: t('footer.list-about-platform.products'),
        href: 'https://asterium.uz/#products',
      },
      {
        name: t('footer.list-about-platform.ecosystem'),
        href: 'https://asterium.uz/',
      },
    ],
  },
  {
    title: t('footer.to-user'),
    list: [
      {
        name: t('footer.list-to-user.support'),
        href: 'https://asterium.uz/#faq',
      },
      {
        name: t('footer.list-to-user.knowledge-base'),
        href: 'https://asterium.uz/#knowledge-base',
      },
      {
        name: t('footer.list-to-user.blog'),
        href: 'https://asterium.uz/blog',
      },
      {
        name: t('footer.list-to-user.faq'),
        href: 'https://asterium.uz/#faq',
      },
    ],
  },
  {
    title: t('footer.documents'),
    isLastTitle: true,
    list: [
      {
        name: t('footer.list-documents.user-agreement'),
        href: t('documents.user-agreement'),
      },
      {
        name: t('footer.list-documents.policy-confidentiality'),
        href: t('documents.privacy-policy'),
      },
      {
        name: t('footer.list-documents.license'),
        href: t('documents.license'),
      },
    ],
  },
];

const ICON_LIST = [
  {
    iconPath: '/svg/instagram.svg',
    descriptionKey: 'instagram-icon',
    link: 'https://www.instagram.com/asteriumwallet',
  },
  {
    iconPath: '/svg/telegram.svg',
    descriptionKey: 'telegram-icon',
    link: 'https://t.me/asteriumwallet',
  },
  {
    iconPath: '/svg/youtube.svg',
    descriptionKey: 'youtube-icon',
    link: 'https://www.youtube.com/@AsteriumWallet',
  },
] as const;

type TFooterProps = {
  isPostPage?: boolean;
  lng: string;
};

export default async function Footer({
  isPostPage = false,
  lng,
}: TFooterProps) {
  const { t } = await useTranslation(lng);
  const translatedInfo = getTranslatedInfo(t);

  return (
    <footer
      className={`w-full ${isPostPage ? 'pl-31 pr-37' : 'px-34'} max-w-[1472px] mx-auto max-lg:px-16 max-sm:px-4 pb-13 max-lg:pb-8 max-sm:pb-30`}
    >
      <Link href="/">
        <Image
          src="/svg/logo.svg"
          alt={t('icon.logo-icon')}
          width={104}
          height={26}
          className="mb-8 max-sm:mb-4"
        />
      </Link>
      <div className="mb-8 w-full h-0.25 opacity-20 bg-[var(--text-white)] max-lg:mb-3 max-sm:mb-6" />
      <div className="flex items-start">
        <div className="mr-15 mb-25 max-lg:mr-2 max-lg:mb-9 max-sm:mb-16">
          <h3 className={`${HEADING_BASE} mb-4 max-sm:text-sm`}>
            {t('footer.contact')}
          </h3>
          <div className="space-y-3">
            <div className="mb-4 group">
              <h4
                className={`${SUB_HEADING} mb-1 max-sm:text-xs group-hover:opacity-100 cursor-pointer`}
              >
                {t('footer.address')}
              </h4>
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Asterium, ${t('footer.address-country')}, ${t('footer.address-info')}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${TEXT_BASE} max-sm:text-xs hover:no-underline block`}
              >
                {t('footer.address-country')},
                <br />
                {t('footer.address-info')}
              </Link>
            </div>
            <div className="mb-4 group">
              <h4
                className={`${SUB_HEADING} max-sm:text-xs group-hover:opacity-100 cursor-pointer`}
              >
                {t('footer.mail')}
              </h4>
              <Link
                href="mailto:support@asterium.uz"
                rel="nofollow"
                className={`${TEXT_BASE} max-sm:text-xs hover:no-underline`}
              >
                support@asterium.uz
              </Link>
            </div>
            <div className="group">
              <h4
                className={`${SUB_HEADING} max-sm:text-xs group-hover:opacity-100 cursor-pointer`}
              >
                {t('footer.helpline')}
              </h4>
              <Link
                href="tel:+998787775558"
                rel="nofollow"
                className={`${TEXT_BASE} max-sm:text-xs hover:no-underline`}
              >
                +998(84) 777-55-58
              </Link>
            </div>
          </div>
        </div>
        <div className="flex mr-5 gap-15 px-0 max-lg:gap-8 max-lg:mt-5 ml-auto max-lg:mr-0 max-sm:hidden">
          {translatedInfo.map((item) => (
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
              <li key={item.descriptionKey}>
                <Link href={item.link} target="_blank">
                  <Image
                    src={item.iconPath}
                    alt={t(`icon.${item.descriptionKey}`)}
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
          alt={t('asterium-icon')}
        />
      </div>
    </footer>
  );
}

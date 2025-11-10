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
        href: '#',
      },
      {
        name: t('footer.list-about-platform.ecosystem'),
        href: '#',
      },
      {
        name: t('footer.list-about-platform.team'),
        href: '#',
      },
    ],
  },
  {
    title: t('footer.to-user'),
    list: [
      {
        name: t('footer.list-to-user.support'),
        href: '#',
      },
      {
        name: t('footer.list-to-user.knowledge-base'),
        href: '#',
      },
      {
        name: t('footer.list-to-user.blog'),
        href: '#',
      },
      {
        name: t('footer.list-to-user.faq'),
        href: '#',
      },
    ],
  },
  {
    title: t('footer.documents'),
    isLastTitle: true,
    list: [
      {
        name: t('footer.list-documents.user-agreement'),
        href: '#',
      },
      {
        name: t('footer.list-documents.policy-confidentiality'),
        href: '#',
      },
      {
        name: t('footer.list-documents.license'),
        href: '#',
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
      className={`w-full ${isPostPage ? 'pl-31 pr-37' : 'px-34'}  max-lg:px-16 max-sm:px-4 pb-13 max-lg:pb-8 max-sm:pb-30`}
    >
      <Link href="/public">
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
            <div className="mb-4">
              <h4 className={`${SUB_HEADING} mb-1 max-sm:text-xs`}>
                {t('footer.address')}
              </h4>
              <p className={`${TEXT_BASE} max-sm:text-xs`}>
                {t('footer.address-country')},
                <br />
                {t('footer.address-info')},
              </p>
            </div>
            <div className="mb-4">
              <h4 className={`${SUB_HEADING} max-sm:text-xs`}>
                {t('footer.mail')}
              </h4>
              <p className={`${TEXT_BASE} max-sm:text-xs`}>
                support@asterium.uz
              </p>
            </div>
            <div>
              <h4 className={`${SUB_HEADING} max-sm:text-xs`}>
                {t('footer.helpline')}
              </h4>
              <p className={`${TEXT_BASE} max-sm:text-xs`}>
                +998(84) 777-55-58
              </p>
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

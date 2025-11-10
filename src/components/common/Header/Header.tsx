import Nav from '@/components/common/Header/Nav';
import Link from 'next/link';
import Image from 'next/image';
import BurgerMenu from '@/components/common/Header/BurgerMenu';
import LanguageSwitcher from '@/components/common/Header/LanguageSwitcher';
import { useTranslation } from '@/app/i18n';
import { BUTTON_LIST } from '@/constants/nav';

type THeaderProps = {
  isNotFoundHeader?: boolean;
  isPostPage?: boolean;
  isErrorPage?: boolean;
  lng: string;
};

export default async function Header({
  isNotFoundHeader,
  isPostPage,
  isErrorPage,
  lng,
}: THeaderProps) {
  const { t } = await useTranslation(lng);

  const translatedNavItems = BUTTON_LIST.map((item) => ({
    ...item,
    text: t(item.translationKey),
  }));

  return (
    <header
      className={`w-full flex justify-between items-center mb-13 pt-0 ${isPostPage ? 'px-28' : 'px-30'} max-lg:px-15 max-lg:mb-18 max-sm:px-4 max-sm:mb-8
     `}
    >
      <Link href="/">
        <Image
          src="/svg/logo.svg"
          alt={t('icon.logo-icon')}
          width={104}
          height={26}
        />
      </Link>
      <Nav
        isNotFoundHeader={isNotFoundHeader}
        translatedNavItems={translatedNavItems}
        lng={lng}
        iconALt={t('icon.asterium-icon')}
      />

      <LanguageSwitcher iconLanguageALt={t('icon.planet-icon')} isErrorPage />
      <BurgerMenu
        isNotFoundHeader={isNotFoundHeader}
        translatedNavItems={translatedNavItems}
        iconALt={t('icon.asterium-icon')}
        iconLanguageALt={t('icon.planet-icon')}
        isErrorPage={isErrorPage}
      />
    </header>
  );
}

import { useTranslation } from '@/app/i18n';
import { BUTTON_LIST } from '@/constants/nav';
import Header from '@/components/common/Header/Header';

type THeaderProps = {
  isNotFoundHeader?: boolean;
  isPostPage?: boolean;
  isErrorPage?: boolean;
  lng: string;
};

export default async function HeaderWrapper({
  isNotFoundHeader,
  isPostPage,
  isErrorPage = false,
  lng,
}: THeaderProps) {
  const { t } = await useTranslation(lng);

  const translatedNavItems = BUTTON_LIST.map((item) => ({
    ...item,
    text: t(item.translationKey),
  }));

  return (
    <Header
      lng={lng}
      isNotFoundHeader={isNotFoundHeader}
      isPostPage={isPostPage}
      isErrorPage={isErrorPage}
      alt={t('icon.logo-icon')}
      translatedNavItems={translatedNavItems}
      iconALt={t('icon.asterium-icon')}
      iconLanguageAlt={t('icon.planet-icon')}
    />
  );
}

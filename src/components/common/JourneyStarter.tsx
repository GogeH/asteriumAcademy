import Image from 'next/image';
import { useTranslation } from '@/app/i18n';

type TJourneyStarterProps = {
  lng: string;
};

export default async function JourneyStarter({ lng }: TJourneyStarterProps) {
  const { t } = await useTranslation(lng);

  return (
    <section
      className="max-lg:bg-none rounded-[40px] bg-dark-gray/20 backdrop-blur mb-15 pt-9 pb-12 max-lg:pt-3 max-lg:bg-transparent
    max-lg:mb-0 max-sm:bg-dark-gray/20 max-sm:pt-22 max-sm:pb-10 max-sm:mb-22"
    >
      <h1 className="mx-auto text-[130px] leading-none text-center uppercase mb-5 pr-20 max-lg:text-[100px] max-xl:pr-2 max-sm:text-[54px] max-sm:pr-0 max-sm:mb-4">
        <div className="mb-17 max-lg:mb-21 max-sm:mb-19">
          {t('title-page.item1')}
        </div>
        <div
          className="font-medium text-right bg-gradient-to-r from-accent-green to-accent-yellow bg-clip-text text-transparent break-words
          transform translate-x-[-70px] -rotate-[10deg] max-lg:translate-x-[8px] max-lg:translate-y-[-40px] max-sm:translate-x-[4px] max-sm:translate-y-[-43px]"
        >
          web3
        </div>
        <div className="-mt-10 break-words">{t('title-page.item2')}</div>
      </h1>
      <p className="w-full font-normal text-base tracking-normal text-center align-middle text-silver max-w-[368px] mx-auto mb-10  max-lg:mb-9">
        {t('slogan')}.
      </p>
      <Image
        className="mx-auto block max-lg:hidden"
        src="/svg/mouse.svg"
        alt={t('icon.icon-pointing')}
        width={64}
        height={64}
      />
    </section>
  );
}

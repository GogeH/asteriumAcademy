import Image from 'next/image';
import { useTranslation } from '@/app/i18n';

const ADVANTAGE_LIST = [
  {
    id: 0,
    titleKey: 'title-item1',
    textKey: 'text-item1',
    iconPath: '/images/volume-big.webp',
    iconBigPath: '/images/volume.webp',
    iconAltKey: 'experts-icon',
    width: {
      bigSize: 84,
      smallSize: 138,
    },
    height: {
      bigSize: 84,
      smallSize: 101,
    },
  },
  {
    id: 1,
    titleKey: 'title-item2',
    textKey: 'text-item2',
    iconPath: '/images/chat-big.webp',
    iconBigPath: '/images/chat.webp',
    iconAltKey: 'chat-icon',
    width: {
      bigSize: 89,
      smallSize: 106,
    },
    height: {
      bigSize: 83,
      smallSize: 109,
    },
  },
  {
    id: 2,
    titleKey: 'title-item3',
    textKey: 'text-item3',
    iconPath: '/images/document-big.webp',
    iconBigPath: '/images/document.webp',
    iconAltKey: 'document-icon',
    width: {
      bigSize: 82,
      smallSize: 103,
    },
    height: {
      bigSize: 85,
      smallSize: 95,
    },
  },
  {
    id: 3,
    titleKey: 'title-item4',
    textKey: 'text-item4',
    iconPath: '/images/tick-big.webp',
    iconBigPath: '/images/tick.webp',
    iconAltKey: 'achievement-icon',
    width: {
      bigSize: 84,
      smallSize: 110,
    },
    height: {
      bigSize: 79,
      smallSize: 105,
    },
  },
] as const;

type TAdvantagesProps = {
  lng: string;
};

export default async function Advantages({ lng }: TAdvantagesProps) {
  const { t } = await useTranslation(lng);

  return (
    <section
      aria-labelledby="advantages-title"
      className="mb-23 max-lg:mb-20 max-w-[1200px] mx-auto"
    >
      <div
        className="bg-dark-gray rounded-[20px] border border-white/50 py-6 max-w-[96%] transform rotate-[-6deg] translate-y-13 -translate-x-3 ml-auto
        max-lg:max-w-[78%] max-lg:-translate-x-28 max-lg:translate-y-24 max-lg:py-7.5 max-lg:px-3 max-sm:max-w-[95%] max-sm:-translate-x-4
        max-sm:translate-y-7 max-sm:px-4 max-sm:py-6"
      >
        <h2
          className="font-medium text-[80px] leading-[100%] tracking-[-0.04em] ml-6 text-center uppercase bg-gradient-to-r from-accent-green to-accent-yellow
        bg-clip-text text-transparent max-lg:text-[64px] max-lg:text-left max-lg:ml-0 max-sm:text-[40px]"
        >
          {t('advantage.title')}
        </h2>
      </div>
      <ul
        className="grid grid-cols-2 gap-16 w-full rounded-[20px] px-20 pt-39 pb-9 border bg-dark-gray border-white/40 items-center pb-15 max-xl:gap-5
          max-lg:grid-cols-1 max-lg:px-10 max-lg:pt-36 max-lg:gap-24 max-sm:pt-20 max-sm:gap-9 max-sm:pb-19"
        role="list"
      >
        {ADVANTAGE_LIST.map((advantage) => (
          <li
            key={advantage.titleKey}
            className={`
              flex max-lg:flex-row-reverse max-lg:justify-between max-sm:flex-col items-center
              transform transition-transform duration-500 ease-in-out
              hover:-translate-y-2
              ${advantage.id === 1 ? 'max-lg:row-start-3 max-sm:row-start-2' : ''}
              ${advantage.id === 2 ? 'max-lg:row-start-2 max-sm:row-start-3' : ''}
       `}
          >
            <article
              className={`mr-9 ${advantage.id === 0 ? 'max-lg:mr-0' : 'max-lg:mr-8  max-sm:mr-0'} max-sm:mb-9`}
            >
              <div
                className="flex-shrink-0 max-lg:hidden"
                style={{
                  minWidth: `${advantage.width.bigSize}px`,
                  minHeight: `${advantage.height.bigSize}px`,
                }}
              >
                <Image
                  src={advantage.iconPath}
                  alt={t(`icon.${advantage.iconAltKey}`)}
                  width={advantage.width.bigSize}
                  height={advantage.height.bigSize}
                />
              </div>

              <div
                className="flex-shrink-0 hidden max-lg:block"
                style={{
                  minWidth: `${advantage.width.smallSize}px`,
                  minHeight: `${advantage.height.smallSize}px`,
                }}
              >
                <Image
                  src={advantage.iconBigPath}
                  alt={t(`icon.${advantage.iconAltKey}`)}
                  width={advantage.width.smallSize}
                  height={advantage.height.smallSize}
                />
              </div>
            </article>
            <div className="max-sm:text-center">
              <h4 className="break-all font-bold text-[32px] leading-[100%] tracking-[-0.04em] uppercase text-white mb-5 max-sm:text-[24px]">
                {t(`advantage.advantage-list.${advantage.titleKey}`)}
              </h4>
              <p className="font-normal text-base leading-[131.25%] tracking-normal align-middle text-silver max-lg:max-w-[368px] max-sm:text-[16px]">
                {t(`advantage.advantage-list.${advantage.textKey}`)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

import Image from 'next/image';
import { useTranslation } from '@/app/i18n';

const partnerlist = [
  {
    name: 'Armenian code academy',
    iconPath: '/svg/armenianCodeAcademy.svg',
    iconAltKey: 'armenian-code-icon',
    width: 200,
  },
  {
    name: 'MDIS Tashkent',
    iconPath: '/svg/mdis.svg',
    iconAltKey: 'mdis-icon',
    width: 174,
  },
] as const;

type TPartnersProps = {
  lng: string;
};

export default async function Partners({ lng }: TPartnersProps) {
  const { t } = await useTranslation(lng);

  return (
    <section
      className="flex justify-between items-center flex-wrap bg-dark-gray mb-25 mr-12 rounded-[40px]
    border border-white/40 py-10.5 px-8 pb-7 max-lg:px-5 max-lg:mr-0 max-lg:pb-10 max-lg:mb-21 max-sm:px-6 max-sm:px-6 max-sm:py-11"
    >
      <div className="max-w-[368px] max-xl:mb-10">
        <h4 className="font-bold text-[32px] leading-none tracking-[-0.04em] uppercase mb-3">
          {t('partners.title')}
        </h4>
        <p className=" leading-[131.25%] text-silver">{t('partners.text')}</p>
      </div>
      <ul className="flex flex-wrap gap-[104px] max-lg:gap-[80px]" role="list">
        {partnerlist.map((partner) => (
          <li
            key={partner.name}
            className="flex rounded-[40px] py-8.5 pl-10 pr-4 bg-card-bg min-w-[258]"
          >
            <Image
              src={partner.iconPath}
              alt={t(`icon.${partner.iconAltKey}`)}
              width={partner.width}
              height={74}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

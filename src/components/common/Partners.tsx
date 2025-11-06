import Image from 'next/image';

const partnerlist = [
  {
    name: 'Armenian code academy',
    iconPath: '/svg/armenianCodeAcademy.svg',
    iconAlt: 'иконка партнёра Armenian code academy',
    width: 200,
  },
  {
    name: 'MDIS Tashkent',
    iconPath: '/svg/mdis.svg',
    iconAlt: 'иконка партнёра MDIS Tashkent',
    width: 174,
  },
] as const;

export default function Partners() {
  return (
    <section
      className="flex justify-between items-center flex-wrap bg-dark-gray mb-25 mr-12 rounded-[40px]
    border border-white/40 py-10.5 px-8 pb-7 max-lg:px-5 max-lg:mr-0 max-lg:pb-10 max-lg:mb-21 max-sm:px-6 max-sm:px-6 max-sm:py-11"
    >
      <div className="max-w-[368px] max-xl:mb-10">
        <h4 className="font-bold text-[32px] leading-none tracking-[-0.04em] uppercase mb-3">
          Our partners
        </h4>
        <p className=" leading-[131.25%] text-silver">
          Add value and credibility to your learning journey with our
          Certificates
        </p>
      </div>
      <ul className="flex flex-wrap gap-[104px] max-lg:gap-[80px]" role="list">
        {partnerlist.map((partner) => (
          <li
            key={partner.name}
            className="flex rounded-[40px] py-8.5 pl-10 pr-4 bg-card-bg min-w-[258]"
          >
            <Image
              src={partner.iconPath}
              alt={partner.iconAlt}
              width={partner.width}
              height={74}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

import Image from 'next/image';

const ADVANTAGE_LIST = [
  {
    TITLE: 'Expert-Led Content',
    TEXT: 'Learn from industry experts with years of experience.',
    ICON_PATH: '/images/volume-big.webp',
    ICON_BIG_PATH: '/images/volume.webp',
    ICON_ALT: 'Иконка экспертов',
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
    TITLE: 'Community access',
    TEXT: 'Learn from industry experts with years of experience.',
    ICON_PATH: '/images/chat-big.webp',
    ICON_BIG_PATH: '/images/chat.webp',
    ICON_ALT: 'Иконка чата',
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
    TITLE: 'Interactive Learning',
    TEXT: 'Learn from industry experts with years of experience.',
    ICON_PATH: '/images/document-big.webp',
    ICON_BIG_PATH: '/images/document.webp',
    ICON_ALT: 'Иконка документа',
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
    TITLE: 'Certificates of Achievement',
    TEXT: 'Add value and credibility to your learning journey with our Certificates',
    ICON_PATH: '/images/tick-big.webp',
    ICON_BIG_PATH: '/images/tick.webp',
    ICON_ALT: 'Иконка достижений',
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

export default function Advantages() {
  return (
    <section
      aria-labelledby="advantages-title"
      className="mb-23 mr-3 max-lg:mr-0 max-lg:mb-20"
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
          why asterium academy?
        </h2>
      </div>
      <ul
        className="grid grid-cols-2 gap-16 w-full rounded-[20px] px-20 pt-39 pb-9 border bg-dark-gray border-white/40 items-center pb-15 max-xl:gap-5
       max-lg:grid-cols-1 max-lg:px-10 max-lg:pt-36 max-lg:gap-24 max-sm:pt-20 max-sm:gap-9 max-sm:pb-19"
        role="list"
      >
        {ADVANTAGE_LIST.map((advantage, index) => (
          <li
            key={advantage.TITLE}
            className={`
              flex max-lg:flex-row-reverse max-lg:justify-between max-sm:flex-col items-center
              ${index === 1 ? 'max-lg:row-start-3 max-sm:row-start-2' : ''}
              ${index === 2 ? 'max-lg:row-start-2 max-sm:row-start-3' : ''}
              
      `}
          >
            <article
              className={`mr-9 ${index === 0 ? 'max-lg:mr-0' : 'max-lg:mr-8  max-sm:mr-0'} max-sm:mb-9`}
            >
              <div
                className="flex-shrink-0 max-lg:hidden"
                style={{
                  minWidth: `${advantage.width.bigSize}px`,
                  minHeight: `${advantage.height.bigSize}px`,
                }}
              >
                <Image
                  src={advantage.ICON_PATH}
                  alt={advantage.ICON_ALT}
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
                  src={advantage.ICON_BIG_PATH}
                  alt={advantage.ICON_ALT}
                  width={advantage.width.smallSize}
                  height={advantage.height.smallSize}
                />
              </div>
            </article>
            <div className="max-sm:text-center">
              <h4 className="font-bold text-[32px] leading-[100%] tracking-[-0.04em] uppercase text-white mb-5 max-sm:text-[24px]">
                {advantage.TITLE}
              </h4>
              <p className="font-normal text-base leading-[131.25%] tracking-normal align-middle text-silver max-lg:max-w-[368px] max-sm:text-[16px]">
                {advantage.TEXT}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

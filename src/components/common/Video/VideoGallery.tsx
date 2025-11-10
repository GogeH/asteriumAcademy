import Link from 'next/link';
import VideoPlayer from '@/components/common/Video/VideoPlayer';
import { useTranslation } from '@/app/i18n';

// Убираем статические заголовки из VIDEO_INFO
const VIDEO_INFO = [
  {
    id: 1,
    width: 442,
    height: { desktop: 285, tablet: 378, mobile: 190 },
    videoId: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    translationKey: 'video-title1',
  },
  {
    id: 2,
    width: 442,
    height: { desktop: 285, tablet: 378, mobile: 190 },
    videoId: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    translationKey: 'video-title2',
  },
  {
    id: 3,
    width: 658,
    height: { desktop: 557, tablet: 378, mobile: 190 },
    videoId: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    translationKey: 'video-title3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
] as const;

type TVideoGalleryProps = {
  lng: string;
};

export default async function VideoGallery({ lng }: TVideoGalleryProps) {
  const { t } = await useTranslation(lng);

  return (
    <section
      className="max-w-[1216px] mx-auto mb-27 max-lg:mb-30 max-sm:mb-21"
      id="web3"
    >
      <div className="mb-23">
        <h2 className="font-bold text-[32px] leading-[100%] tracking-tighter uppercase mb-3">
          {t('video.title')}
        </h2>
        <Link
          href="https://www.youtube.com/@AsteriumWallet"
          target="_blank"
          rel="noopener noreferrer"
          className="font-manrope font-medium text-sm leading-[110%] tracking-tight underline underline-offset-[25%] decoration-1 text-silver"
        >
          {t('video.link-text')}
        </Link>
      </div>

      <div
        className="flex justify-between max-lg:block"
        role="list"
        aria-label="Video gallery"
      >
        <div className="flex flex-col mr-4 max-lg:mr-0" role="listitem">
          {VIDEO_INFO.slice(0, 2).map((video) => (
            <VideoPlayer
              key={video.id}
              width={video.width}
              height={video.height}
              videoId={video.videoId}
              title={t(`video.${video.translationKey}`)} // динамический перевод
              text={'text' in video ? video.text : undefined}
            />
          ))}
        </div>
        <VideoPlayer
          width={VIDEO_INFO[2].width}
          height={VIDEO_INFO[2].height}
          videoId={VIDEO_INFO[2].videoId}
          title={t(`video.${VIDEO_INFO[2].translationKey}`)} // динамический перевод
          text={VIDEO_INFO[2]?.text}
          isLarge
        />
      </div>
    </section>
  );
}

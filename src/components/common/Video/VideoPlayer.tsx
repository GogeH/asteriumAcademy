'use client';

import { useEffect, useRef, useState } from 'react';
import { BREAKPOINTS } from '@/constants/breakpoints';

type ScreenSize = 'desktop' | 'tablet' | 'mobile';
type Dimensions = {
  desktop: number;
  tablet: number;
  mobile: number;
};

type TYouTubePlayerProps = {
  width: number;
  height: Dimensions;
  videoId: string;
  title: string;
  text?: string;
  isLarge?: boolean;
};

export default function VideoPlayer({
  videoId,
  title,
  width,
  height,
  text,
  isLarge,
}: TYouTubePlayerProps) {
  const [screenSize, setScreenSize] = useState<ScreenSize>('desktop');
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Определяем текущий размер экрана
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < BREAKPOINTS.tablet) setScreenSize('mobile');
      else if (width < BREAKPOINTS.desktop) setScreenSize('tablet');
      else setScreenSize('desktop');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  const actualWidth = screenSize === 'desktop' ? width : '100%';
  const actualHeight = height[screenSize];

  return (
    <article
      ref={ref}
      className="rounded-[40px] bg-[rgba(19,19,22,1)] pb-4 mb-6"
      style={{ maxWidth: actualWidth }}
      itemScope
      itemType="https://schema.org/VideoObject"
    >
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={text || title} />
      <meta
        itemProp="thumbnailUrl"
        content={`https://img.youtube.com/vi/${videoId.replace(
          /.*\/embed\//,
          '',
        )}/maxresdefault.jpg`}
      />
      {isVisible && (
        <iframe
          width="100%"
          height={actualHeight}
          src={videoId}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={`rounded-t-[40px] ${isLarge ? 'mb-9' : 'mb-2'} max-lg:mb-4`}
          loading="lazy"
          itemProp="embedUrl"
        />
      )}
      <h3
        itemProp="name"
        className="font-medium text-[24px] leading-[139%] mx-6 max-lg:mx-4 max-sm:text-[16px] max-sm:mx-5"
      >
        {title}
      </h3>
      {text && (
        <p
          itemProp="description"
          className="mx-6 mt-5 opacity-60 max-lg:mx-4 max-lg:mt-1 max-sm:text-[14px] max-sm:mx-5"
        >
          {text}
        </p>
      )}
    </article>
  );
}

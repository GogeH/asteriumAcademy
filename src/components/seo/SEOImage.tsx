import Image from 'next/image';

type TSEOImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
};

export default function SEOImage({
  src,
  alt,
  width,
  height,
  priority = true,
  className,
}: TSEOImageProps) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

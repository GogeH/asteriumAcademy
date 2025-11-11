import { HTMLAttributes, ReactNode } from 'react';

type TBackgroundWrapperProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function BackgroundWrapper({
  children,
  className,
  ...props
}: TBackgroundWrapperProps) {
  return (
    <div
      className="bg-center bg-no-repeat h-[385px] bg-[url('/bg/bg-desktop-1.webp')] max-lg:h-[452px] max-lg:bg-[url('/bg/bg-tablet-1.webp')]
          max-lg:bg-cover max-lg:bg-[position:left] max-sm:bg-auto transition-[max-width] ease-in-out"
      {...props}
    >
      <div
        className="bg-[position:right] bg-no-repeat h-[239px] bg-[url('/bg/bg-desktop-3.webp')] max-lg:h-[299px] max-lg:bg-[url('/bg/bg-tablet-2.webp')]
          max-lg:bg-center max-sm:bg-none"
      >
        <div
          className="bg-center bg-cover bg-no-repeat h-[222px] bg-[url('/bg/bg-desktop-4.webp')] bg-[position:right] max-lg:h-[310px]
              max-lg:bg-[url('/bg/bg-tablet-3.webp')] max-lg:bg-[position:right] max-lg:bg-auto max-sm:bg-none"
        >
          <div
            className="bg-center bg-cover bg-no-repeat h-[66px] bg-[url('/bg/bg-desktop-5.webp')] max-lg:h-[145px] max-lg:bg-[url('/bg/bg-tablet-4.webp')]
                max-lg:bg-[position:left] max-lg:bg-auto max-sm:bg-none"
          >
            <div
              className="bg-[position:left] bg-cover bg-no-repeat h-[477px] bg-[url('/bg/bg-desktop-6.webp')] max-lg:h-[452px] max-lg:bg-[url('/bg/bg-tablet-5.webp')]
                  max-lg:bg-center max-sm:bg-none"
            >
              <div
                className={`mx-auto pt-8 max-lg:pt-11 max-sm:pt-4 bg-center bg-cover bg-no-repeat h-[1626px]
                bg-[url('/bg/bg-desktop-2.webp')] max-lg:h-[140px] max-lg:bg-[url('/bg/bg-tablet-6.webp')] max-sm:bg-[url('/bg/bg-desktop-2.webp')] max-sm:h-[1504px] ${className || ''}`}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

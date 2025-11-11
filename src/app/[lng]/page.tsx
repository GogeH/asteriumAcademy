import Footer from '@/components/common/Footer/Footer';
import VideoGallery from '@/components/common/Video/VideoGallery';
import Partners from '@/components/common/Partners';
import Advantages from '@/components/common/Advantages';
import JourneyStarter from '@/components/common/JourneyStarter';
import BackgroundWrapper from '@/components/common/BackgroundWrapper';
import FAQWrapper from '@/components/common/FAQ/FAQWrapper';
import PostsWrapper from '@/components/common/Posts/PostsWrapper';
import ScrollToTop from '@/components/shared/ScrollToTop';
import HeaderWrapper from '@/components/common/Header/HeaderWrapper';

type THomeProps = {
  params: Promise<{ lng: string }>;
};

export default async function Home({ params }: THomeProps) {
  const { lng } = await params;

  return (
    <BackgroundWrapper>
      <HeaderWrapper lng={lng} />
      <main className="mx-auto px-30 mt-31 max-lg:px-16 max-lg:mt-36 max-sm:px-4 max-sm:mt-20">
        <JourneyStarter lng={lng} />
        <PostsWrapper lng={lng} />
        <Advantages lng={lng} />
        <Partners lng={lng} />
        <VideoGallery lng={lng} />
        <FAQWrapper lng={lng} />
      </main>
      <Footer lng={lng} />
      <ScrollToTop />
    </BackgroundWrapper>
  );
}

export async function generateStaticParams() {
  return [{ lng: 'ru' }, { lng: 'en' }, { lng: 'uz' }];
}

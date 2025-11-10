import Footer from '@/components/common/Footer/Footer';
import VideoGallery from '@/components/common/Video/VideoGallery';
import Partners from '@/components/common/Partners';
import Advantages from '@/components/common/Advantages';
import JourneyStarter from '@/components/common/JourneyStarter';
import BackgroundWrapper from '@/components/common/BackgroundWrapper';
import Header from '@/components/common/Header/Header';
import FAQWrapper from '@/components/common/FAQ/FAQWrapper';
import PostsWrapper from '@/components/common/Posts/PostsWrapper';

type THomeProps = {
  params: Promise<{ lng: string }>;
};

export default async function Home({ params }: THomeProps) {
  const { lng } = await params;

  return (
    <BackgroundWrapper>
      <Header lng={lng} />
      <main className="mx-auto px-30 max-lg:px-16 max-sm:px-4">
        <JourneyStarter lng={lng} />
        <PostsWrapper lng={lng} />
        <Advantages lng={lng} />
        <Partners lng={lng} />
        <VideoGallery lng={lng} />
        <FAQWrapper lng={lng} />
      </main>
      <Footer lng={lng} />
    </BackgroundWrapper>
  );
}

export async function generateStaticParams() {
  return [{ lng: 'ru' }, { lng: 'en' }, { lng: 'uz' }];
}

import Footer from '@/components/common/Footer/Footer';
import FAQ from '@/components/common/FAQ';
import VideoGallery from '@/components/common/Video/VideoGallery';
import Partners from '@/components/common/Partners';
import Advantages from '@/components/common/Advantages';
import PostsContainer from '@/components/common/Posts/PostsContainer';
import JourneyStarter from '@/components/common/JourneyStarter';
import Header from '@/components/common/Header/Header';
import BackgroundWrapper from '@/components/common/BackgroundWrapper';

export default function Home() {
  return (
    <BackgroundWrapper>
      <Header />
      <main className="mx-auto px-28 max-lg:px-16 max-sm:px-4">
        <JourneyStarter />
        <PostsContainer />
        <Advantages />
        <Partners />
        <VideoGallery />
        <FAQ />
      </main>
      <Footer />
    </BackgroundWrapper>
  );
}

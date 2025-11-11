import Footer from '@/components/common/Footer/Footer';
import NotFoundContent from '@/components/common/NotFoundContent';
import HeaderWrapper from '@/components/common/Header/HeaderWrapper';

type TPartnersProps = {
  lng: string;
};

export default async function NotFoundCustom({ lng }: TPartnersProps) {
  return (
    <div className="pt-8 max-lg:pt-11 max-sm:pt-4">
      <HeaderWrapper lng={lng} />
      <NotFoundContent lng={lng} isPostPage />
      <Footer lng={lng} />
    </div>
  );
}

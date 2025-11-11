import { headers } from 'next/headers';
import Footer from '@/components/common/Footer/Footer';
import NotFoundContent from '@/components/common/NotFoundContent';
import HeaderWrapper from '@/components/common/Header/HeaderWrapper';

export const dynamic = 'force-dynamic';

export default async function NotFound() {
  const headersList = await headers();
  const referer = headersList.get('referer') || '';

  let lng = 'ru';
  if (referer.includes('/uz/') || referer.includes('/uz?')) lng = 'uz';
  else if (referer.includes('/en/') || referer.includes('/en?')) lng = 'en';

  return (
    <div className="pt-8 max-lg:pt-11 max-sm:pt-4">
      <HeaderWrapper lng={lng} isErrorPage />
      <NotFoundContent lng={lng} isPostPage />
      <Footer lng={lng} />
    </div>
  );
}

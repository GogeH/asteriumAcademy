import { headers } from 'next/headers';
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';
import NotFoundContent from '@/components/common/NotFoundContent';

export const dynamic = 'force-dynamic';

export default async function NotFound() {
  const headersList = await headers();
  const referer = headersList.get('referer') || '';

  let lng = 'ru';
  if (referer.includes('/uz/') || referer.includes('/uz?')) lng = 'uz';
  else if (referer.includes('/en/') || referer.includes('/en?')) lng = 'en';

  return (
    <div className="pt-8 max-lg:pt-11 max-sm:pt-4">
      <Header lng={lng} isErrorPage />
      <NotFoundContent lng={lng} isPostPage />
      <Footer lng={lng} />
    </div>
  );
}

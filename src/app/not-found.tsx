import Link from 'next/link';
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';

export default function NotFound() {
  return (
    <div className="pt-8 max-lg:pt-11 max-sm:pt-4">
      <Header />
      <main className="w-full h-screen grid place-items-center bg-background text-white overflow-hidden p-0 m-0">
        <div className="text-center max-w-md w-full">
          <h1 className="text-[48px] font-bold">404</h1>
          <h2 className="text-[36px] mb-2">Страница не найдена</h2>
          <p className="mb-4 text-silver opacity-80">
            Но мы поможем вернуться к нужной точке маршрута.
          </p>
          <Link
            href="/"
            className="inline-block bg-[rgba(86,86,86,0.3)] backdrop-blur-sm text-white px-6 py-3 rounded-[24px] hover:bg-[rgba(86,86,86,0.5)] transition-colors font-inter font-semibold"
          >
            Вернуться на главную
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

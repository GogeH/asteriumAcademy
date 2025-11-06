import Nav from '@/components/common/Header/Nav';
import Link from 'next/link';
import Image from 'next/image';
import BurgerMenu from '@/components/common/Header/BurgerMenu';
import LanguageSwitcher from '@/components/common/Header/LanguageSwitcher';

type THeaderProps = {
  isNotFoundHeader?: boolean;
};

export default function Header({ isNotFoundHeader }: THeaderProps) {
  return (
    <header className="w-full flex justify-between items-center mb-13 pt-0 px-28 max-lg:px-15 max-lg:mb-18 max-sm:px-4 max-sm:mb-8">
      <Link href="/">
        <Image src="/svg/logo.svg" alt="Логотип" width={104} height={26} />
      </Link>
      <Nav isNotFoundHeader={isNotFoundHeader} />
      <LanguageSwitcher />
      <BurgerMenu isNotFoundHeader={isNotFoundHeader} />
    </header>
  );
}

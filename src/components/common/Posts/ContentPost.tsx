import Link from 'next/link';

export default function ContentPost() {
  return (
    <section className="mb-23 px-3 max-lg:px-0 max-lg:mb-24">
      <Link
        href="https://app.asterium.uz/sign-up"
        target="_blank"
        className="rounded-[200px] py-4 px-6 bg-[rgba(217,254,67,1)]
        font-inter font-semibold text-base leading-[115%] tracking-[-0.02em] text-center text-text-black-light"
      >
        Start to use Asterium
      </Link>
    </section>
  );
}

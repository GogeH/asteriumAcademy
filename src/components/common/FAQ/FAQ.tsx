'use client';

import { JSX, useState } from 'react';
import FAQSchema from '@/components/seo/FAQSchema';

type TFAQProps = {
  isPostPage?: boolean;
  faqItems: TFAQItem[];
  title: string;
};

export default function FAQ({
  isPostPage = false,
  faqItems,
  title,
}: TFAQProps): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div
        className={`max-w-[1200px] mx-auto flex justify-between mb-24 ${isPostPage && 'px-3'} max-lg:px-0 max-xl:block max-lg:mb-8 max-sm:mb-29`}
      >
        <h2 className="font-inter font-bold uppercase text-[24px] leading-[100%] tracking-[-0.04em] mb-8 max-lg:mb-16.5 max-sm:text-[20px] max-sm:mb-14">
          <span className="lg:hidden">{title}</span>
          <span className="hidden lg:inline">faq</span>
        </h2>

        <div
          className={`space-y-0 w-full max-w-[776px] ${isPostPage ? 'mr-6' : 'mr-12'} max-lg:mr-12  -mt-1" role="list`}
        >
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border-b border-white/12 bg-transparent overflow-hidden pb-3 mb-8 max-lg:mb-6.5 max-sm:mb-2.5"
              role="listitem"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left flex flex-col cursor-pointer font-inter font-normal text-lg tracking-[-0.01em] text-white max-lg:text-[16px] max-sm:text-[14px]"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex justify-between items-center pb-4">
                  <span className="text-lg font-medium text-white max-lg:text-[16px] max-sm:text-[14px]">
                    {item.question}
                  </span>
                  <div className="relative w-6 h-6">
                    <div
                      className={`absolute top-1/2 left-1/2 w-0.5 h-4 bg-white transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                        openIndex === index ? 'rotate-90' : ''
                      }`}
                    />
                    <div
                      className={`absolute top-1/2 left-1/2 w-4 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                        openIndex === index ? 'scale-0' : ''
                      }`}
                    />
                  </div>
                </div>

                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pr-6 pb-4 opacity-60">
                    <p className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                    {item.answerSecond && (
                      <p className="text-gray-300 leading-relaxed">
                        {item.answerSecond}
                      </p>
                    )}
                    {item.answerThird && (
                      <p className="text-gray-300 leading-relaxed mt-5">
                        {item.answerThird}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
      <FAQSchema faqs={faqItems} />
    </>
  );
}

'use client';

import { JSX, useState } from 'react';
import FAQSchema from '@/components/seo/FAQSchema';

type TFAQItem = {
  question: string;
  answer: string;
  answerSecond?: string;
  answerThird?: string;
};

const FAQ_ITEMS: TFAQItem[] = [
  {
    question: 'Безопасно ли хранить средства на Asterium?',
    answer:
      'Безопасность — наш главный приоритет. Мы используем передовые технологии защиты данных и средств пользователей, а также строго соблюдаем законодательство Узбекистана в сфере оборота крипто-активов.',
  },
  {
    question: 'Как быстро проходит обмен?',
    answer:
      'Пополнение и вывод возможны с использованием банковских карт HUMO/VISA/Mastercard в фиатной валюте UZS и USD. Также можете пополнять с касс нашего партнера Garant bank или с использованием SWIFT с любой точки мира.',
    answerSecond:
      'Доступны ещё получение и отправка(on/off chain) крипто-активов на общее известные биржи и некастодиальные кошельки.',
    answerThird:
      'Вывод средств в фиатной валюте доступен на карты HUMO, а крипто-активы вы можете выводить на общее известные биржи и некастодиальные кошельки.',
  },
  {
    question: 'Нужна ли верификация личности?',
    answer:
      'Процедура KYC (проверка личности) зависит от гражданства пользователя. Регистрация доступна только пользователям старше 18 лет, а подробные инструкции будут предоставлены в процессе регистрации.',
  },
  {
    question: 'Есть ли комиссии при выводе?',
    answer:
      'Комиссии зависят от типа транзакции и крипто-актива. Подробная информация о тарифах будет доступна после регистрации на платформе.',
  },
] as const;

type TFAQProps = {
  isPostPage?: boolean;
};

export default function FAQ({ isPostPage = false }: TFAQProps): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section
        className={`max-w-[1216px] mx-auto flex justify-between mb-24 ${isPostPage && 'px-3'} max-lg:px-0 max-xl:block max-lg:mb-8 max-sm:mb-29`}
      >
        <h2 className="font-inter font-bold uppercase text-[24px] leading-[100%] tracking-[-0.04em] mb-8 max-lg:mb-16.5 max-sm:text-[20px] max-sm:mb-14">
          <span className="lg:hidden">Часто задаваемые вопросы</span>
          <span className="hidden lg:inline">faq</span>
        </h2>

        <div
          className={`space-y-0 w-full max-w-[776px] ${isPostPage ? 'mr-6' : 'mr-12'} max-lg:mr-12  -mt-1" role="list`}
        >
          {FAQ_ITEMS.map((item, index) => (
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
      </section>
      <FAQSchema faqs={FAQ_ITEMS} />
    </>
  );
}

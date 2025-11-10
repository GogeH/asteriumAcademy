import FAQ from '@/components/common/FAQ/FAQ';
import { useTranslation } from '@/app/i18n';

type TFAQWrapperProps = {
  isPostPage?: boolean;
  lng: string;
};

export default async function FAQWrapper({
  lng,
  isPostPage,
}: TFAQWrapperProps) {
  const { t } = await useTranslation(lng);

  const title = `${t('faq.title')}`;

  const faqItems = [
    {
      question: t('faq.list-question.question1'),
      answer: t('faq.list-answer.answer1'),
    },
    {
      question: t('faq.list-question.question2'),
      answer: t('faq.list-answer.answer2-1'),
      answerSecond: t('faq.list-answer.answer2-2'),
      answerThird: t('faq.list-answer.answer2-3'),
    },
    {
      question: t('faq.list-question.question3'),
      answer: t('faq.list-answer.answer3'),
    },
    {
      question: t('faq.list-question.question4'),
      answer: t('faq.list-answer.answer4'),
    },
  ];

  return (
    <section>
      <FAQ faqItems={faqItems} title={title} isPostPage={isPostPage} />
    </section>
  );
}

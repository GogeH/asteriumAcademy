const MONTHS = {
  ru: [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
  ],
  en: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  uz: [
    'Yan',
    'Fev',
    'Mar',
    'Apr',
    'May',
    'Iyun',
    'Iyul',
    'Avg',
    'Sen',
    'Okt',
    'Noy',
    'Dek',
  ],
} as const;

export type Language = 'ru' | 'en' | 'uz';

export const formatDateCustom = (dateString: string, lng: Language): string => {
  const date = new Date(dateString);
  const month = MONTHS[lng][date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${year}`;
};

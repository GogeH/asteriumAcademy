const MONTHS = [
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
] as const;

export const formatDateCustom = (dateString: string): string => {
  const date = new Date(dateString);

  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${year}`;
};

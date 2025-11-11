export const formatLangForCMS = (
  lang: string | undefined,
): string | undefined => {
  if (typeof lang !== 'string' || !lang) {
    console.warn('Invalid lang provided:', lang);
    return;
  }

  return lang.charAt(0).toUpperCase() + lang.slice(1).toLowerCase();
};

import fs from 'fs';
import path from 'path';

export async function useTranslation(lng: string) {
  // Если язык не указан, используем русский по умолчанию
  const language = lng || 'ru';

  const filePath = path.join(
    process.cwd(),
    'src',
    'i18n',
    'locales',
    `${language}.json`,
  );

  // Проверяем существует ли файл
  if (!fs.existsSync(filePath)) {
    console.warn(`Translation file not found: ${filePath}`);
    // Возвращаем заглушку
    return {
      t: (key: string) => key,
    };
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const translations = JSON.parse(fileContents);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }

    return value || key;
  };

  return { t };
}

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Получение __dirname в ES-модуле
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'index.json');

try {
  // Чтение файла index.json
  const data = fs.readFileSync(filePath, 'utf8');
  // Преобразование содержимого в объект
  const translations = JSON.parse(data);

  // Для каждого ключа (языка) создаем отдельный файл
  Object.keys(translations).forEach((lang) => {
    // Форматирование JSON с отступами для удобства чтения
    const outputData = JSON.stringify(translations[lang], null, 2);
    // Формирование имени выходного файла, например ru.json
    const outputFilePath = path.join(__dirname, `${lang}.json`);
    fs.writeFileSync(outputFilePath, outputData, 'utf8');
  });
} catch (error) {
  console.error('Ошибка при чтении или обработке файла:', error);
}

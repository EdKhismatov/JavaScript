import chalk from 'chalk';

// Напишите функцию, которая получает на вход строку и возвращает её длину (количество символов в ней)
export const lengthWord = (word) => {
  return word.length;
};

// Напишите функцию, которая принимает на вход строку и возвращает такую же строку,
//     но в которой первый и последний символ строки записан в верхнем регистре,
//     а остальная часть слова в нижнем. В решении Вам поможет функция
//     .slice, которая есть у строк, она позволяет брать конкретную часть строки.
//     Первый и последний символ раскрасьте одним цветом, а серединную часть другим.

export const letter = (word) => {
  const newWord = word.toLocaleLowerCase();
  return (
    chalk.blue(newWord[0].toUpperCase()) +
    newWord.slice(1, newWord.length - 1) +
    chalk.yellow(newWord[newWord.length - 1].toUpperCase())
  );
};

// Напишите функцию, которая принимает на вход 2 строковых аргумента - text и part,
//     и возвращает начинается ли строка text с фрагмента part. Сделай проверка нерегистрозависимой,
//     чтобы она могла работать и с заглавными, и с прописными строками.

export const isStringStartsWith = (text, part) => {
  return text.toLowerCase().startsWith(part.toLowerCase());
};

// Напишите функцию, которая принимает на вход 2 аргумента - имя и возраст,
// и с помощью шаблонной строки выводит в консоль сообщение в следующем формате:

export const people = (name, age) => {
  console.log(
    `Добро пожаловать!\nИмя: ${name}\nВозраст: ${age}\nНадеемся, Вам понравится пользоваться нашим сервисом!`,
  );
  return '';
};

export const logStringInfo = (word) => {
  console.log(
    `Символов: ${word.length}\nПервый: ${chalk.yellow(word[0])}\nПоследний: ${chalk.green(word[word.length - 1])}`,
  );
};

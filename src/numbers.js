import chalk from 'chalk';

export const generateInteger = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

// Напишите функцию, которая получат на вход сторону квадрата, а возвращает площадь квадрата.
export const square = (x, y) => {
  const random = generateInteger(x, y);
  return `Площадь квадрата со стороной a=${random} равна ${random ** 2}`;
};

//Напишите функцию, которая получает на вход радиус круга, а возвращает его площадь, округлённую до 2х цифр после запятой.
export const radius = (x, y) => {
  const random = generateInteger(x, y);
  return `Радиус: ${random}\nПлощадь: ${(3.14 * random ** 2).toFixed(2)}`;
};

//Напишите функцию isEven, которая получает на вход число, и возвращает true/false является ли оно чётным или нет.

export const isEven = (num) => {
  return num % 2 === 0;
};

// Кассовый аппарат
export const cashRegister = (summa) => {
  const denominations = [5000, 2000, 1000, 500, 100, 50, 10, 1];
  const money = {};
  for (const key in denominations) {
    if (summa > 0) {
      const sum = Math.floor(summa / denominations[key]);
      money[denominations[key]] = sum;
      summa = summa - sum * denominations[key];
    }
  }
  const itog = `${chalk.green('Купюр 5000 необходимо')} ${chalk.blue(money[5000])}
${chalk.green('Купюр 2000 необходимо')} ${chalk.blue(money[2000])}
${chalk.green('Купюр 1000 необходимо')} ${chalk.blue(money[1000])}
${chalk.green('Купюр 500 необходимо')} ${chalk.blue(money[500])}
${chalk.green('Купюр 100 необходимо')} ${chalk.blue(money[100])}
${chalk.green('Купюр 50 необходимо')} ${chalk.blue(money[50])}
${chalk.green('Купюр 10 необходимо')} ${chalk.blue(money[100])}
${chalk.green('Рублей необходимо')} ${chalk.blue(money[1])}
`;
  return itog;
};

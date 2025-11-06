import chalk from 'chalk';

export const sayHi = (name = 'Аноним') => {
  console.log(chalk.green('Привет,'), name);
  // не возвращает
};

export const sayText = (text) => {
  console.log(chalk.bgBlack.white(text));
  // не возвращает
};

export const sum = (a, b, c, d, e) => {
  return a + b + c + d + e;
};

export const power = (a, b) => {
  return a ** b;
};

// Напишите функцию tomatoPrice, которая умеет считать цену томатов - она принимает два аргумента
export const tomatoPrice = (kg, price = 450) => {
  return kg * price;
};

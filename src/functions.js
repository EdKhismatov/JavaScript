import chalk from 'chalk';

export const sayHi = (name = 'Аноним') => {
  console.log(chalk.green('Привет,'), name);
};

export const sayText = (text) => {
  console.log(chalk.bgBlack.white(text));
};

export const sum = (a, b, c, d, e) => {
  console.log(a + b + c + d + e);
};

export const power = (a, b) => {
  console.log(a ** b);
};

// Напишите функцию tomatoPrice, которая умеет считать цену томатов - она принимает два аргумента
export const tomatoPrice = (kg, price = 450) => {
  console.log(kg * price);
};

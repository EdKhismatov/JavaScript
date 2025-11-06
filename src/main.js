import chalk from 'chalk';
import { sayHi, sayText, sum, power } from './functions.js';

const color = new Date().toISOString();

console.log(chalk.blue(color));
console.log(chalk.black(color));
console.log(chalk.grey(color));
console.log(chalk.green(color));

console.log(sayHi(chalk.blue('Анатолий')));
console.log(sayText('Мы выводим текст'));
console.log(sum(1, 2, 3, 4, 5));
console.log(power(2, 10));

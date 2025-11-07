import chalk from 'chalk';
import { generateInteger } from './numbers.js';

export const age = () => {
  const itog = generateInteger(15, 22) >= 18 ? chalk.green(true) : chalk.red(false);
  return itog;
};

export const FizzBuzz = () => {
  const num = generateInteger(9, 20);
  console.log(num);
  if (num % 3 === 0 && num % 5 !== 0) {
    return 'Fizz';
  } else if (num % 3 !== 0 && num % 5 === 0) {
    return 'Buzz';
  } else if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  } else {
    return `не делится на 3 и на 5 число ${num}`;
  }
};

export const randomYear = () => {
  const year = generateInteger(1980, 2120);
  const yearItog = year - (year % 10);
  if (yearItog % 4 === 0 && yearItog % 100 !== 0) {
    return true;
  } else if (yearItog % 100 === 0 && yearItog % 400 !== 0) {
    return false;
  } else if (yearItog % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

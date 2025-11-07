import { generateInteger } from './numbers.js';

//Подсчет
export const numbers = (arr = []) => {
  for (let i = 0; i < 5; i++) {
    const num = generateInteger(-3, 3);
    arr.push(num);
  }
  const obj = { Положительных: 0, Отрицательных: 0 };
  for (const arrElement of arr) {
    if (arrElement < 0) {
      obj['Отрицательных'] += 1;
    } else {
      obj['Положительных'] += 1;
    }
  }
  return obj;
};

//Мин, макс, среднее
export const averages = (arr = []) => {
  for (let i = 0; i < 8; i++) {
    const num = generateInteger(2, 15);
    arr.push(num);
  }
  let max = 0;
  let min = arr[0];
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      min = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    average += arr[i];
  }
  return { min, max, avg: average / arr.length };
};

//Бросок кубиков
export const double = () => {
  let counter = 0;
  let number1 = generateInteger(1, 6);
  let number2 = generateInteger(1, 6);
  while (number1 !== number2) {
    number1 = generateInteger(1, 6);
    number2 = generateInteger(1, 6);
    console.log(number1, number2);
    counter += 1;
  }
  return `Дубль ${number1}, Попыток: ${counter}`;
};

//Задом наперёд
export const revert = (arr) => {
  const reverseArr = [];
  for (let i = arr.length; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }
  return reverseArr.join('');
};

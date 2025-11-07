import { generateInteger } from './numbers.js';
import chalk from 'chalk';

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

//Подходящие люди
export const filter = (people) => {
  const peopleFilter = {
    mans: [],
    women: [],
  };
  for (const peopleElement of people) {
    if (peopleElement.gender === 'f' && peopleElement.age > 20) {
      peopleFilter.women.push(peopleElement.name);
    }
    if (peopleElement.gender === 'm' && peopleElement.age > 18) {
      peopleFilter.mans.push(peopleElement.name);
    }
  }
  return peopleFilter;
};

//Округлить значения
export const rounding = (arr) => {
  let sumPositive = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      sumPositive += 1;
    }
  }
  sumPositive -= 3;
  let count = 0;
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && count < sumPositive) {
      newArr.push(Math.round(arr[i]));
      count += 1;
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

//Ёлочка
export const christmas = (num) => {
  let itog = '';
  for (let i = 1; i <= num; i++) {
    itog += `${' '.repeat(num - i)} ${'*'.repeat(i)}${'*'.repeat(i - 1)}\n`;
  }
  return itog;
};

//Цветной вывод чисел
export const colorNumber = (num) => {
  for (let i = 0; i < num; i++) {
    const numberItog = i % 3;
    if (numberItog === 2) {
      console.log(chalk.green(i));
    } else if (numberItog === 1) {
      console.log(chalk.red(i));
    } else {
      console.log(chalk.red(i));
    }
  }
};

//Цветной вывод ключей - значений
export const printColorObject = (num) => {
  for (const numElement in num) {
    console.log(`${chalk.red(numElement)}: ${chalk.yellow(num[numElement])} `);
  }
};

//Произведение
export const findMultiply = (num1, num2) => {
  let numberFinal = '';
  for (let i = 0; i < String(num1).length; i++) {
    for (let j = 1; j < String(num1).length; j++) {
      if (Number(String(num1)[i]) * Number(String(num1)[j]) === num2 && i !== j) {
        numberFinal += String(i) + String(j);
        return numberFinal;
      }
    }
  }
  if (numberFinal.length === 0) {
    return '-1-1';
  }
};

//Вывод матрицы. ВЛОЖЕННЫМ ЦИКЛОМ НЕПОЛУЧИЛОСЬ, ПОЛУЧИЛОСЬ ТОЛЬО ТАК
export const matrix = (mat) => {
  for (let i = 0; i < mat.length; i++) {
    console.log(`${mat[i].join('\t')}\n`);
  }
};

//Возраст
export const func = (userAge) => {
  const objAge = [
    { 'Возраст=': 25, 'Количество людей=': 0 },
    { 'Возраст=': 28, 'Количество людей=': 0 },
    { 'Возраст=': 30, 'Количество людей=': 0 },
    { 'Возраст=': 35, 'Количество людей=': 0 },
    { 'Возраст=': 41, 'Количество людей=': 0 },
  ];
  for (let i = 0; i < userAge.length; i++) {
    for (let j = 0; j < objAge.length; j++) {
      if (userAge[i].age === objAge[j]['Возраст=']) {
        objAge[j]['Количество людей='] += 1;
      }
    }
    // console.log(userAge[i].name);
  }
  return objAge;
};

//Самый длинный массив
export const lengthArray = (arr) => {
  let array = [];
  for (const key in arr) {
    if (Array.isArray(arr[key]) && arr[key].length > array.length) {
      array = arr[key];
    }
  }
  return { malen: array.length, lastValue: array[array.length - 1] };
};

//Сравнение массивов
export const compareArrays = (a, b) => {
  if (a.length !== b.length) return false;
  else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
};

//Сравнение объектов
export const compareObjects = (object1, object2) => {
  const objKey1 = Object.keys(object1);
  const objKey2 = Object.keys(object2);
  let counter = 0;
  let counter2 = 0;
  if (objKey1.length !== objKey1.length) return false;
  else {
    for (let i = 0; i < objKey1.length; i++) {
      if (objKey1.includes(objKey2[i])) {
        counter += 1;
      }
    }
  }
  const objValue1 = Object.values(object1);
  const objValue2 = Object.values(object2);
  if (objValue1.length !== objValue2.length) return false;
  else {
    for (let i = 0; i < objValue1.length; i++) {
      if (objValue1.includes(objValue2[i])) {
        counter2 += 1;
      }
    }
  }
  return counter2 === counter;
};

//Сравнение массивов объектов
export const compareObjectArrays = (a, b) => {
  let flag = 0;
  if (a.length !== b.length) return false;
  else {
    for (let i = 0; i < a.length; i++) {
      if (compareObjects(a[i], b[i])) {
        flag += 1;
      }
    }
  }
  return flag === a.length;
};

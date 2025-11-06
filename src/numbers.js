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

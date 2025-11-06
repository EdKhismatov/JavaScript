import chalk from 'chalk';
import { sayHi, sayText, sum, power, tomatoPrice } from './functions.js';
import { lengthWord, letter, isStringStartsWith, people, logStringInfo } from './strings.js';
import { square, radius, isEven, cashRegister, dimensions, schoolDesks } from './numbers.js';

const color = new Date().toISOString();

console.log(chalk.blue(color));
console.log(chalk.black(color));
console.log(chalk.grey(color));
console.log(chalk.green(color));

console.log(sayHi(chalk.blue('Анатолий')));
console.log(sayText('Мы выводим текст'));
console.log(sum(1, 2, 3, 4, 5));
console.log(power(2, 10));

console.log(tomatoPrice(1, 22.5));

//строки
console.log(lengthWord('Приветики пистолетики'));

console.log(letter('МОЛОКО')); // МолокО
console.log(letter('картошка')); // КартошкА
console.log(letter('СтРаНнОе СлОвО')); // Странное словО

console.log(isStringStartsWith('Ветеринар', 'вет')); // true
console.log(isStringStartsWith('Молоко', 'мол')); // true
console.log(isStringStartsWith('Карго Корги', 'КАРГО ')); // true
console.log(isStringStartsWith('Карго Корги', 'кор ')); // false
console.log(isStringStartsWith('Ковёр', 'кова ')); // false

console.log(people('Fedor', 18));

console.log(logStringInfo('Приветик'));
console.log(square(1, 10));
console.log(radius(3, 12));

console.log(isEven(3));
console.log(isEven(2));

console.log(cashRegister(128999));
console.log(dimensions(4.5, 6.67));
console.log(schoolDesks());

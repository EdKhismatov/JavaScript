import chalk from 'chalk';
import { sayHi, sayText, sum, power, tomatoPrice } from './functions.js';
import { lengthWord, letter, isStringStartsWith, people, logStringInfo } from './strings.js';
import { square, radius, isEven, cashRegister, dimensions, schoolDesks, temperature } from './numbers.js';
import { compare, compareStrings } from './compares.js';
import { age, FizzBuzz, randomYear } from './if.js';
import { character, processing } from './switches.js';
import { addProperty, removeProperty, compares, relocation, agePerson } from './objects.js';

const color = new Date().toISOString();

// console.log(chalk.blue(color));
// console.log(chalk.black(color));
// console.log(chalk.grey(color));
// console.log(chalk.green(color));
//
// console.log(sayHi(chalk.blue('Анатолий')));
// console.log(sayText('Мы выводим текст'));
// console.log(sum(1, 2, 3, 4, 5));
// console.log(power(2, 10));
//
// console.log(tomatoPrice(1, 22.5));
//
// //строки
// console.log(lengthWord('Приветики пистолетики'));
//
// console.log(letter('МОЛОКО')); // МолокО
// console.log(letter('картошка')); // КартошкА
// console.log(letter('СтРаНнОе СлОвО')); // Странное словО
//
// console.log(isStringStartsWith('Ветеринар', 'вет')); // true
// console.log(isStringStartsWith('Молоко', 'мол')); // true
// console.log(isStringStartsWith('Карго Корги', 'КАРГО ')); // true
// console.log(isStringStartsWith('Карго Корги', 'кор ')); // false
// console.log(isStringStartsWith('Ковёр', 'кова ')); // false
//
// console.log(people('Fedor', 18));
//
// console.log(logStringInfo('Приветик'));
// console.log(square(1, 10));
// console.log(radius(3, 12));
//
// console.log(isEven(3));
// console.log(isEven(2));
//
// console.log(cashRegister(128999));
// console.log(dimensions(4.5, 6.67));
// console.log(schoolDesks());
// console.log(temperature());
//
// console.log(compare(1, 1)); // true
// console.log(compare(1, '1')); // false
// console.log(compare(true, true)); // true
// console.log(compare(false, false)); // true
// console.log(compare(23, 23)); // true
// console.log(compare('abc', 'abc')); // true
// console.log(compare('ABC', 'abc')); // false
//
// let text = 'Начало';
// const sub = ` всех ${text.slice(0, text.length - 1)}`;
// console.log(compareStrings(text, 'начало')); //true
// text += sub;
// console.log(compareStrings(text, 'начало всех')); // false
// console.log(compareStrings(text, 'начало всех начал')); // true
// console.log(compareStrings('РжоМба', 'РЖОМБА')); // true
//
// console.log(age());
// console.log(FizzBuzz());
// console.log(randomYear());
//
// console.log(character('spongebob'));
// console.log(character('patrick'));
// console.log(character('squidward'));
// console.log(character('plankton'));
// console.log(character('mr. Crabs'));
// console.log(processing('Формируются чеки'));
// console.log(processing('Назначаются повара'));
// console.log(processing('Запекается'));
// console.log(processing('Нарезается'));
// console.log(processing('Варится'));
// console.log(processing('Жарится'));
// console.log(processing('Поиск курьера'));
// console.log(processing('Курьер берёт заказ'));
// console.log(processing('Курьер в пути'));
// console.log(processing('Курьер подъезжает'));
// console.log(processing('Клиент отказался от заказа'));
// console.log(processing('Заказ доставлен'));
// console.log(processing('Что то еще'));

console.log(removeProperty({ id: 1, age: 20, name: 'alex' }, 'id'));
console.log(addProperty({ id: 5, name: 'max' }, 'address', 'ул. Углеродная 5'));

console.log(compares({ id: 90, name: 'stas', address: 0 }, { id: 90 }, 'id'));
console.log(
  relocation({
    id: 40,
    age: 25,
    name: 'Валентин Петрович',
    city: 'Москва',
    address: 'ул. Ленина 105 Б',
  }),
);

const alex = {
  name: 'Alex',
  dateOfBirth: new Date('2024-05-15'),
};

const jake = {
  name: 'Jake',
  dateOfBirth: new Date('1970-01-01T00:00:00.000Z'),
};

const john = {
  name: 'John',
  dateOfBirth: new Date('2007-12-30T11:32:59.953+03:00'),
};

const bob = {
  name: 'Bob',
  dateOfBirth: new Date(),
};

console.log(chalk.blue(agePerson(alex)));
console.log(chalk.green(agePerson(jake)));
console.log(chalk.grey(agePerson(john)));
console.log(chalk.red(agePerson(bob)));

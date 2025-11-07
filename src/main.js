import chalk from 'chalk';
import { sayHi, sayText, sum, power, tomatoPrice } from './functions.js';
import { lengthWord, letter, isStringStartsWith, people, logStringInfo } from './strings.js';
import {
  square,
  radius,
  isEven,
  cashRegister,
  dimensions,
  schoolDesks,
  temperature,
  generateInteger,
} from './numbers.js';
import { compare, compareStrings } from './compares.js';
import { age, FizzBuzz, randomYear } from './if.js';
import { character, processing } from './switches.js';
import { addProperty, removeProperty, compares, relocation, agePerson } from './objects.js';
import { getRandomItem, logJoin, setNickname, add, orderFood } from './arrays.js';
import { mergeToNewObject, merge, report, showInfo } from './spread.js';
import { comparison } from './type.js';
import {
  averages,
  christmas,
  colorNumber,
  double,
  filter,
  numbers,
  revert,
  rounding,
  printColorObject,
  findMultiply,
  matrix,
  func,
  lengthArray,
  compareArrays,
  compareObjects,
  compareObjectArrays,
} from './loops.js';

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
console.log(temperature());

console.log(compare(1, 1)); // true
console.log(compare(1, '1')); // false
console.log(compare(true, true)); // true
console.log(compare(false, false)); // true
console.log(compare(23, 23)); // true
console.log(compare('abc', 'abc')); // true
console.log(compare('ABC', 'abc')); // false

let text = 'Начало';
const sub = ` всех ${text.slice(0, text.length - 1)}`;
console.log(compareStrings(text, 'начало')); //true
text += sub;
console.log(compareStrings(text, 'начало всех')); // false
console.log(compareStrings(text, 'начало всех начал')); // true
console.log(compareStrings('РжоМба', 'РЖОМБА')); // true

console.log(age());
console.log(FizzBuzz());
console.log(randomYear());

console.log(character('spongebob'));
console.log(character('patrick'));
console.log(character('squidward'));
console.log(character('plankton'));
console.log(character('mr. Crabs'));
console.log(processing('Формируются чеки'));
console.log(processing('Назначаются повара'));
console.log(processing('Запекается'));
console.log(processing('Нарезается'));
console.log(processing('Варится'));
console.log(processing('Жарится'));
console.log(processing('Поиск курьера'));
console.log(processing('Курьер берёт заказ'));
console.log(processing('Курьер в пути'));
console.log(processing('Курьер подъезжает'));
console.log(processing('Клиент отказался от заказа'));
console.log(processing('Заказ доставлен'));
console.log(processing('Что то еще'));

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

console.log(logJoin(['max', 'john', 123, null], '_')); // max_john_123_
console.log(logJoin([1, 2, 3], '-')); // 1-2-3

const user = { id: 8, nickname: 'Саня Санёчек', nicknameHistory: [] };
console.log(setNickname(user, 'Александр Сильвестрович'));
console.log(setNickname(user, 'Саша'));

console.log(getRandomItem([1, 2, 3, 4, 5, 6, 7, 8]));

const list = [];

add(list, 'Картошка');
add(list, 'Капуста');
add(list, 'Морковь');
add(list, 'Картошка');
add(list, 'Лук');
add(list, 'Морковь');
console.log(list);

const list2 = [];
add(list2, 3);
add(list2, 4);
add(list2, 4);
add(list2, 4);
add(list2, 3);
add(list2, 2);
console.log(list2);

const cheque = {
  food: ['Сырный суп', 'Бургер', 'Лазанья'],
  drinks: ['Пиво', 'Молочный коктейль'],
};
console.log(orderFood(cheque));

const userss = { name: 'Коля', age: 9 };
const diplom = { degree: 'Магистр', university: 'МГУ', department: 'Кафедра информационных технологий' };
console.log(mergeToNewObject(userss, diplom));

const users = { name: 'Коля', age: 9, notes: 'Заметка от Коли!' };
const work = { address: 'Строительная 4', department: 'Шпаклёвщик', notes: 'Рабочая заметка' };
console.log(merge(users, work));

console.log(report(['Александр', 'Михаил', 'Валентин', 'Сергей', 'Артур']));

const ryan = {
  name: 'Райан',
  age: 28,
  surname: 'Гослинг',
  gender: 'Мужчина',
  photo: 'https://photos.com/photo.jpg',
};
console.log(showInfo(ryan));

const object1 = { checked: 1 };
const object2 = { checked: true };

console.log(comparison(object1, object2));

console.log(numbers());
console.log(averages());
console.log(double());
const texts = 'Это просто пример🙉, вы можете вписать абсолютно любую свою строку 😎 :)';
console.log(revert(texts));

const peoples = [
  { id: 8, name: 'Александр', gender: 'm', age: 25 },
  { id: 12, name: 'Мария', gender: 'f', age: 22 },
  { id: 31, name: 'Иван', gender: 'm', age: 17 },
  { id: 34, name: 'Ольга', gender: 'f', age: 19 },
  { id: 53, name: 'Дмитрий', gender: 'm', age: 30 },
  { id: 95, name: 'Екатерина', gender: 'f', age: 21 },
  { id: 3, name: 'Сергей', gender: 'm', age: 18 },
  { id: 20, name: 'Анна', gender: 'f', age: 20 },
  { id: 19, name: 'Андрей', gender: 'm', age: 15 },
  { id: 30, name: 'Наталья', gender: 'f', age: 25 },
];
console.log(filter(peoples));

console.log(rounding([1.1, 2.2, -2, 3.3, -1, 5.5, 5.99, 7.49, 7.9999, -2.2, -3]));
console.log(christmas(5));
console.log(colorNumber(generateInteger(5, 25)));

const object111 = { isAdult: true, email: 'example@mail.com', page: 100 };
console.log(printColorObject(object111));

console.log(findMultiply(1234567890, 18)); //18
console.log(findMultiply(1234567890, 12)); //23
console.log(findMultiply(592729, 81)); //15
console.log(findMultiply(123, 5)); //-1-1
console.log(findMultiply(55, 25)); //01

const matr = [
  ['#', 'Имя', 'Возраст', 'Особые приметы'],
  [90, 'Паша', 23],
  [12, 'Артём', 29],
  [33, 'Стас', 13, 'Сидит на хлебной диете'],
  [54, 'Хабиб', 7],
  [35, 'Алеша', 15, 'Любит ночевать на лавочке'],
  [50, 'Лена', 19, 'Громко чихает'],
  [83, 'Катя', 43],
  [56, 'Алексей', 27, 'Мяукает во сне'],
];

console.log(matrix(matr));

const usersAge = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'Diana', age: 35 },
  { name: 'Eve', age: 30 },
  { name: 'Frank', age: 28 },
  { name: 'Grace', age: 25 },
  { name: 'Hannah', age: 41 },
  { name: 'Ivy', age: 30 },
  { name: 'Jack', age: 28 },
];

console.log(func(usersAge));

const userLength = {
  example: [1, 2, 3],
  'X-Address': {
    street: 'Ленина',
    house: '10-Б',
  },
  data: { length: 50 },
  nickname: null,
  permissions: [true, false],
  age: 101,
  emails: ['alice@example.com', 'bob@example.com', 'charlie@example.com', 'peter@example.com'],
  name: 'Peter Charles',
  isAdult: true,
  now: new Date().toISOString(),
};

console.log(lengthArray(userLength));

console.log(compareArrays([], [])); // true
console.log(compareArrays([true, null, 1, 'stop'], [true, null, 1, 'stop'])); // true
console.log(compareArrays([1, 2, 3], [2, 1, 3])); // false
console.log(compareArrays([null], [])); // false

console.log(compareObjects({}, {})); // true
console.log(compareObjects({ age: 45 }, { age: 45 })); // true
console.log(compareObjects({ ready: true, photo: null }, { ready: true, photo: null })); // true
console.log(compareObjects({ a: 10, b: 20, c: 30 }, { c: 30, a: 10, b: 20 })); // true
console.log(compareObjects({ name: 'max' }, { name: 'john' })); // false
console.log(compareObjects({ nick: 'maxon' }, {})); // false
console.log(compareObjects({ age: 45, name: 'a' }, { age: 45, name: 'b' })); // false

console.log(
  compareObjectArrays([{ age: 45, name: 'b' }, { name: 'john' }], [{ age: 45, name: 'b' }, { name: 'john' }]),
);
console.log(compareObjectArrays([{}], [{}, {}]));
console.log(
  compareObjectArrays([{ age: 45, name: 'b' }, { name: 'john' }], [{ age: 45, name: 'a' }, { name: 'john' }]),
);

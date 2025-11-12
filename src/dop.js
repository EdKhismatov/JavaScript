// Напишите функцию, которая получает на вход отсортированный массив чисел от 1 до N и возвращает пропущенные числа.
//     Если массив, полученный на вход, не отсортирован, необходимо вернуть null.

const getMissingDigits = (arr) => {
  const newArr = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return null;
    }
    if (arr[i] - arr[i - 1] > 1) {
      for (let j = arr[i - 1]; j < arr[i]; j++) {
        if (j !== arr[i - 1] && j !== arr[i]) {
          newArr.push(j);
        }
      }
    }
  }
  return newArr;
};

// console.log(getMissingDigits([1, 2, 3, 5, 8, 10, 11, 13])); // [4, 6, 7, 9, 12];
// console.log(getMissingDigits([1, 2, 5, 3])); // null
// console.log(getMissingDigits([1, 5])); // [2, 3, 4]
// console.log(getMissingDigits([0, 2, 3])); // [2, 3, 4]

// Merge Sorting (ну почти)
// У вас есть два отсортированных массива. Объедините их в один отсортированный массив за один проход.
//     То есть не в две операции "объединить" а потом отдельно "отсортировать".

function fun(a1, a2) {
  const newArray = [...a1, ...a2].sort((a, b) => a - b);
  return newArray;
}
const arr1 = [1, 2, 3, 5, 9, 11, 12, 13];
const arr2 = [1, 5, 10, 1];
// console.log(fun(arr1, arr2));

// Дедубликация
// Напишите функцию, которая удаляет повторения символов из строки, сохраняя порядок.
// Для решения используйте reduce.

const deduplicate = (ded) => {
  const itog = ded.split('').reduce((acc, curret) => {
    if (acc[acc.length - 1] !== curret) {
      return acc + curret;
    }
    return acc;
  }, '');
  return itog;
};
const result = deduplicate('uuunbbeliaaaaveeabbbblllllee');
console.log(result); // unbeliaveable

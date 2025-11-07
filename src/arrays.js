import chalk from 'chalk';

export const logJoin = (arr, symbol) => {
  return arr.join(symbol);
};

export const setNickname = (odj, nikeName) => {
  odj['nicknameHistory'].push(odj['nickname']);
  odj['nickname'] = nikeName;
  return odj;
};

export const getRandomItem = (arr) => {
  return arr[Math.round(Math.random() * (arr.length - 1 - 0) + 0)];
};

export const add = (arr, purchase) => {
  const newArr = arr.includes(purchase) ? arr : arr.push(purchase);
  return newArr;
};

export const orderFood = (food) {

}
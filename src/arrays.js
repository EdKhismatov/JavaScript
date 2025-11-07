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

// Ужасно получилось :(
export const orderFood = (foods) => {
  const line = '----------';
  const ordering = { 'Основные блюда': [], Закуски: [], Напитки: [] };
  if (foods.food?.includes('Бургер')) {
    ordering['Основные блюда'].push('Бургер');
    if (foods.snacks?.includes('Картошка фри')) {
      ordering['Закуски'].push('Картошка фри');
    }
    ordering['Закуски'].push('Картошка фри');
  }
  if (foods.food?.includes('Сырный суп')) {
    ordering['Основные блюда'].push('Сырный суп');
    if (foods.snacks?.includes('Хлеб')) {
      ordering['Закуски'].push('Хлеб');
    }
    ordering['Закуски'].push('Хлеб');
  }
  if (foods.food?.includes('Лазанья')) {
    ordering['Основные блюда'].push('Лазанья');
  }
  if (foods.snacks?.includes('Наггетсы')) {
    ordering['Закуски'].push('Наггетсы');
  }
  if (foods.drinks?.includes('Молочный коктейль')) {
    ordering['Напитки'].push('Молочный коктейль');
  }
  if (foods.drinks?.includes('Пиво')) {
    ordering['Напитки'].push('Пиво');
  }
  if (foods.snacks?.includes('Чипсы')) {
    ordering['Закуски'].push('Чипсы');
  }
  // выводим
  console.log(line);
  if (ordering['Основные блюда'].length > 0) {
    console.log(`Основные блюда: (${ordering['Основные блюда'].length})`);
  }
  if (ordering['Основные блюда'].length > 0) {
    console.log(`${ordering['Основные блюда'].join(',')}\n${line}`);
  }
  if (ordering['Закуски'].length > 0) {
    console.log(`Закуски: (${ordering['Закуски'].length})`);
  }
  if (ordering['Закуски'].length > 0) {
    console.log(`${ordering['Закуски'].join(',')}\n${line}`);
  }
  if (ordering['Напитки'].length > 0) {
    console.log(`Напитки: (${ordering['Напитки'].length})`);
  }
  if (ordering['Напитки'].length > 0) {
    console.log(`${ordering['Напитки'].join(',')}`);
  }
  if (ordering['Напитки'].includes('Пиво')) {
    console.log(`‼️ Внимание: Есть алкоголь!\n${line}`);
  } else {
    console.log(line);
  }
  return '';
};

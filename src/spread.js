export const mergeToNewObject = (user, diplom) => {
  return { ...user, ...diplom };
};

export const merge = (user, work) => {
  const { notes } = user;
  const merge = { ...work, ...user, notes };
  return merge;
};

export const report = (arr) => {
  const [one, two, three, ...backward] = arr;
  return `Первое место: ${one}\nВторое место: ${two}\nТретье место: ${three}\nОстальные спортсмены: ${backward}`;
};

export const showInfo = (jason) => {
  const {
    name,
    patronymic: patronymicUser = 'Не указано',
    surname,
    gender: genderUser = 'Не указано',
    photo: photoUser = 'https://photos.com/default.jpg',
    age,
  } = jason;

  console.log('Карточка пользователя');
  console.log(`Имя: ${name}`);
  console.log(`Фамилия: ${surname}`);
  console.log(`Отчество: ${patronymicUser}`);
  console.log(`Возраст: ${age}`);
  console.log(`Совершеннолетний: ${age >= 18 ? 'Да' : 'Нет'}`);
  console.log(`Пол: ${genderUser}`);
  console.log(`Фото: ${photoUser}`);
  return '';
};

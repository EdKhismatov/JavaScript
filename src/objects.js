import chalk from 'chalk';

export const removeProperty = (obj, name) => {
  delete obj[name];
  return obj;
};

export const addProperty = (user, key, value) => {
  user[key] = value;
  return user;
};

export const compares = (obj1, obj2, key) => {
  return obj1[key] === obj2[key] ? chalk.green(true) : chalk.red(false);
};

export const relocation = (user) => {
  if (16 <= user.age && user.age <= 17 && user.city === 'Москва') {
    user.city = 'Кострома';
  } else if (user.age >= 18) {
    if (user.city === 'Москва') {
      if (user.address.includes('Ленина')) {
        user.address = 'Кривая д. 109';
      } else {
        user.city = 'Иваново';
        user.address = 'Важная д. 5';
      }
    } else {
      if (user.address.includes('Капиталистов')) {
        user.city = 'Москва';
        user.address = 'Материалистов д. 3';
      } else {
        user.address = 'Центральная д. 2';
      }
    }
  }
  return user;
};

export const agePerson = (user) => {
  const age = new Date().getFullYear() - user.dateOfBirth.getFullYear();
  return age;
};

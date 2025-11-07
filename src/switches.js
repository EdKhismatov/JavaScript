import chalk from 'chalk';

export const character = (characters) => {
  let characterFinal;
  switch (characters) {
    case 'spongebob':
      characterFinal = chalk.yellow('| ( · )( · ) |');
      break;
    case 'patrick':
      characterFinal = chalk.cyan('/ ( · )( · ) \\');
      break;
    case 'squidward':
      characterFinal = chalk.blue('( ( · )( · ) )');
      break;
    case 'plankton':
      characterFinal = chalk.green('| ( · ) |');
      break;
    case 'mr. Crabs':
      characterFinal = chalk.red('|·||·|');
      break;
  }
  return characterFinal;
};

export const processing = (status) => {
  let orderStatus;
  switch (status) {
    case 'Формируются чеки':
    case 'Назначаются повара':
      orderStatus = chalk.blue('Обрабатывается');
      break;
    case 'Запекается':
    case 'Нарезается':
    case 'Варится':
    case 'Жарится':
    case 'Поиск курьера':
      orderStatus = chalk.yellow('Готовится');
      break;
    case 'Курьер берёт заказ':
    case 'Курьер в пути':
    case 'Курьер подъезжает':
      orderStatus = chalk.blue('У курьера');
      break;
    case 'Клиент отказался от заказа':
    case 'Заказ доставлен':
      orderStatus = chalk.green('Готов');
      break;
    default:
      orderStatus = chalk.blue('Обрабатывается');
      break;
  }
  return orderStatus;
};

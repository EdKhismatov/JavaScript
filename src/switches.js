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

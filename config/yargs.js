const { argv } = require('yargs/yargs')(process.argv.slice(2))
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar',
  })
  .check(({ base }, options) => {
    if (Number.isNaN(base)) {
      throw new Error('La base tiene que ser un número');
    }
    return true;
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOptions: true,
    default: false,
    describe: 'Muestra la tabla por consola',
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    demandOptions: true,
    default: 10,
    describe: 'Número hasta donde desea multiplicar',
  });

module.exports = argv;

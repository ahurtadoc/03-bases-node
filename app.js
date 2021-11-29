/* eslint-disable no-console */
const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');

/* setTimeout(() => {
  console.log(argv);
}, 200); */

crearArchivo(argv.base, argv.listar, argv.hasta)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, 'creado'))
  .catch((error) => console.log(error));
console.clear();

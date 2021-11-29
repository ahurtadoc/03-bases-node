/* eslint-disable no-console */
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = '';
    let consola = '';
    for (let i = 1; i < hasta + 1; i++) {
      consola += `${base} ${'x'.yellow} ${i} ${'='.cyan} ${base * i}\n`;
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    if (listar) {
      console.log('======================='.green);
      console.log('Tabla del '.green, colors.blue(base));
      console.log('======================='.green);
      console.log(consola);
    }

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};

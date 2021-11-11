// Array.prototype.reduce()

// El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

const dineros = [10, 8, 2];

// const reducer = (previousValues, currentValue) => previousValues + currentValue;
// const totalDinero = dinero.reduce(reducer);

const totalDinero = dineros.reduce((acumulador, total) => acumulador + total);

console.log(totalDinero);

// ---------------------------------
//  APLANAR MATRICES ANIDADAS #01:
// ---------------------------------

const arrayNumeros = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const solorNumeros = arrayNumeros.reduce((acumulador, currentValue) => acumulador.concat(currentValue));

console.log(solorNumeros);

// APLANAR MATRICES ANIDADAS #02:
const otraForma = [].concat(...arrayNumeros);
console.log(otraForma);

const conFlat = arrayNumeros.flat();
console.log(conFlat);











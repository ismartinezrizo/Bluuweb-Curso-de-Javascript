const arrayNumeros = [
  [0, 1],
  [2, 3],
  [4, 5],
];

// APANAR ARRAY.
const soloNumeros = arrayNumeros.flat();
console.log(soloNumeros);

const miArray = [1, 2, [3, 4, [5, 6]]];
const numeros = miArray.flat(2);
console.log(numeros);


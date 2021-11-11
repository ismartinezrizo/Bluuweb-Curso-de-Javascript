// El método concat() se usa para unir dos o más arrays.Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

const arrayNumeros = [1, 2, 3, 4, 5];
const arrayOtros = [6, 7, 8, 9, 10];

const arrayCompleto = arrayNumeros.concat(arrayOtros);
console.log(arrayCompleto);

// o puedo hacerlo de esta otra manera.
const arrayCompleto2 = arrayNumeros.concat([6, 7, 8, 9, 10]);
console.log(arrayCompleto2);



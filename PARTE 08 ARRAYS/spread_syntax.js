
// Sintáxis Spread

// La sintaxis extendida o spread syntax permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde cero o más argumentos(para llamadas de  función) o elementos(para Array literales) son esperados, o a un objeto ser expandido en lugares donde cero o más pares de valores clave(para literales Tipo Objeto) son esperados.

function suma(n1, n2, n3) {
  return n1 + n2 + n3;
}

const numeros = [1, 2, 3];

// ... los saca del array
console.log(...numeros);

const resultado = suma(...numeros);

console.log(resultado);

// otro ejemplo.
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

//^ USANDO CONCANT
const array3 = array1.concat(array2);
console.log(array3);

//^ USANDO ... SPREAD SYNTAX
const resultadoArray = [...array1, ...array2];
console.log(resultadoArray)











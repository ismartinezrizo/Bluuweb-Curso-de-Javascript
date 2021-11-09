const frutas = ["🍌", "🍏", "🍓"];

const nuevoArray = frutas.map(fruta => fruta);

nuevoArray.push("🍍");

console.log(nuevoArray);

// no se modifica el original
console.log(frutas);

// copia la referencia
// const copiaFruta = frutas;
// copiaFruta.push("🥑");

// console.log(frutas);

// console.log(copiaFruta);

const user = [
  { name: "Isaac", age: 31 },
  { name: "Amy", age: 20 },
  { name: "Ana", age: 18 }
];

// OBTENER TODOS LOS NOMBRES
const nombres = user.map(item => item.name);
console.log(nombres);

// OBTENER EDADES
const edades = user.map(item => item.age);
console.log(edades);


const numeros = [2, 4, 6, 8];
// OBTENER TODOS LOS DOBLES
const dobles = numeros.map(numero => numero * 2);
console.log(dobles);





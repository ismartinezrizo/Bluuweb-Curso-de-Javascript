
// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

const users = [
  { uid: 1, name: "Isaac", age: 31 },
  { uid: 2, name: "Amy", age: 40 },
  { uid: 3, name: "Ana", age: 18 }
];

const mayores = users.filter(item => item.age > 30);
console.log(mayores);


// MOSTRAR TODOS MENOS EL NUMERO ESPECIFICO (SIRVE PARA ELIMINAR)
const valores = users.filter(item => item.uid !== 3);
console.log(valores)
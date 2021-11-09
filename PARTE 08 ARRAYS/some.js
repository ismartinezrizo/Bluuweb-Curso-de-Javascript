
// El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.


const users = [
  { uid: 1, name: "Isaac", age: 31 },
  { uid: 2, name: "Amy", age: 40 },
  { uid: 3, name: "Ana", age: 18 }
];


// existe el nombre Isaac?
const existe = users.some(user => user.name === 'Isaac');
console.log(existe);

// existe el uid2?
const existeId = users.some(user => user.uid === 2);
console.log(existeId);
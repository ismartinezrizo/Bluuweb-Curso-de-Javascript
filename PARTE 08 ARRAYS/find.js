// find: El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
// Buscar usuario por uid:

const users = [
  { uid: 1, name: "Isaac", age: 31 },
  { uid: 2, name: "Amy", age: 40 },
  { uid: 3, name: "Ana", age: 18 }
];

// buscame a isaac
const isaac = users.find(user => user.name === 'Isaac');
console.log(isaac);

// buscame por id
const uid3 = users.find(user => user.uid === 3);
console.log(uid3);


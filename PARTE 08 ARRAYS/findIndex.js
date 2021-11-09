// El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada.En caso contrario devuelve - 1.

const users = [
  { uid: 1, name: "Isaac", age: 31 },
  { uid: 2, name: "Amy", age: 40 },
  { uid: 3, name: "Ana", age: 18 }
];

// Isaac existe en la posicion ?
// const existePosicion = users.findIndex(user => user.name === 'Isaac');
// console.log(existePosicion);

// Amy existe en la posicion ?
const existePosicion = users.findIndex(user => user.name === 'Amy');
console.log(existePosicion);

// sino existe da -1
const noExiste = users.findIndex(user => user.name === 'nombre');
console.log(noExiste);

// Slice: El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.

const array = ["Cat", "Dog", "Tiger", "Leon"];

// no incluye el 3, solo mostrara hasta el 2
console.log(array.slice(1, 3));

console.log(array.slice(0, 4))
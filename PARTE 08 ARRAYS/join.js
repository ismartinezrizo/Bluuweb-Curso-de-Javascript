// Array.prototype.join()

// El método join() une todos los elementos de una matriz(o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

const personas = ['Maria', 'Isaac', 'Juan', 'Pedro'];

// PASARLO A STRING
const personasString = personas.join(',');
console.log(personasString);

const personasString2 = personas.join(', ');
console.log(personasString2);

const personasString3 = personas.join('-');
console.log(personasString3);

const personasString4 = personas.join(' - ');
console.log(personasString4);
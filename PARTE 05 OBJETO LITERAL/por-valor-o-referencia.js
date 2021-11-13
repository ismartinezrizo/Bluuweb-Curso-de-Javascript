// por valor vs por referencia

//^ por valor: Cuando asignamos valores primitivos(Boolean, Null, Undefined, Number, String y Symbol), el valor asignado es una copia del valor que estamos asignando.

//^ por referencia: Pero cuando asignamos valores NO primitivos o complejos(Object, Array y Function), JavaScript copia “la referencia”, lo que implica que no se copia el valor en sí, si no una referencia a través de la cual accedemos al valor original.

//& Primitivos: (por valor)

let a = "hola";
let b = a;
console.log(b);  //hola

//& Si cambiamos el valor de a, b sigue siendo "hola"

a = "chao";
console.log(b);

//& No primitivos por Referencias
let c = ["hola"];
let d = c;
console.log(d);

// agregamos un valor en c
c.push("chao");

// mostramos los valores de d
console.log(d);

//& Lo mismo pasa con los objetos:
const objeto = {
  nombre: "hola",
};

const otroObjeto = objeto;
objeto.nombre = "chao";
console.log(otroObjeto);










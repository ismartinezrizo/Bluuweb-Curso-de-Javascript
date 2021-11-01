// JavaScript está diseñado en un paradigma simple basado en objetos.
// Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor.
// El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método.
// Además de los objetos que están predefinidos en el navegador, puedes definir tus propios objetos.
// Los objetos son similares a los arreglos (arrays), excepto que en lugar de usar índices para acceder y modificar sus datos, accedes a los datos en objetos a través de propiedades (properties).
// objetos

// Objeto literal
// Se denomina objeto literal al objeto cuyas propiedades están declaradas textualmente en el código.
// mas info

// Los objetos son una estructura de datos bastante usada en el lenguaje, de hecho, considero que es la más importante y que muchas veces no llegamos a comprender del todo.
// Sintácticamente un objeto en JavaScript es un conjunto agrupado entre llaves de claves y valores:

// creamos un objeto literal
const gato = {
  nombre: "Valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
  otros: {
    amigos: ["cobarde", "timido"],
    favoritos: {
      comida: {
        frio: "salmon",
        caliente: "pollo"
      }
    }
  },
  comer(alimento) {
    console.log(this);
    console.log(`${this.nombre} esta comiendo ${alimento}`);
  },
  listarEnemigos() {
    this.enemigos.forEach((item) => console.log(item));
  }
};

// THIS
// Veamos una introducción a this
// this: Hace referencia al objeto contexto de JavaScript en el cual se está ejecutando el código actual
// Arrow Functions
// No tiene this o super y no se debe usarla como métodos.
// Funciones Flecha
// No tiene this o super y no se debe usarla como métodos.


console.log(gato.nombre);
console.log(gato["nombre"]);

console.log(gato.duerme);
console.log(gato["duerme"]);

console.log(gato.enemigos);
console.log(gato["enemigos"]);

console.log(gato.enemigos[0]);
console.log(gato["enemigos"][0]);

// ACCEDER AL SALMON
console.log(gato.otros.favoritos.comida.frio);

// ACCEDER A COBARDE
console.log(gato.otros.amigos[0]);

//^ mostrar el metodo comer
gato.comer('Pez');

gato.listarEnemigos();






















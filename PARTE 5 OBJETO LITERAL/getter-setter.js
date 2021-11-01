
// Getters y Setters
// GET - Enlaza la propiedad de un objeto con una función que será llamada cuando la propiedad es buscada.
// SET - La sintaxis set asocia la propiedad de un objeto a una función que será llamada cuando haya un intento de asignar valor a esa propiedad.
//     GET: Tenga en cuenta lo siguiente al trabajar con la sintaxis get:

// Debe tener exactamente cero parametros.
// No debe haber múltiples getters para una misma propiedad.
//   SET: Tenga en cuenta lo siguiente al trabajar con setters:

// DEBE TENER EXACTAMENTE UN PARÁMENTRO

//^ CREAMOS UN OBJETO LITERAL
const gato = {
  nombre: "Valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
  get nombreMayuscula() {
    return this.nombre.toUpperCase();
  },
  set agregarEnemigos(nombre) {
    this.enemigos.push(nombre);
  }
};

//^ EN GET Y EN SET NO SE USA () PARA LLAMAR
console.log(gato.nombreMayuscula);

//^ PORQUE ES UN SET NO NECESITA PARENTESIS
gato.agregarEnemigos = 'los carros';
console.log(gato.enemigos)

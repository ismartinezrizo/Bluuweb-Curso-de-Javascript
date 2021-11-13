
const gato = {
  nombre: "Valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"]
};


// hasOwnProperty
// A veces es útil comprobar si existe o no la propiedad de un objeto dado. Podemos utilizar el método .hasOwnProperty(propname) para determinar si un objeto tiene una propiedad con ese nombre. .hasOwnProperty() devuelve true o false si se encuentra la propiedad o no.

console.log(gato.hasOwnProperty('edad'));
console.log(gato.hasOwnProperty('edad2'));

if (gato.hasOwnProperty("nombre")) {
  gato.nombre = "Nino";
}

console.log(gato);
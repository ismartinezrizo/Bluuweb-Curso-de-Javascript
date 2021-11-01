
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
  }
};


//? ENCADENAMIENTO OPCIONAL

// Optional chaining (opens new window): El operador de encadenamiento opcional ?. permite leer el valor de una propiedad ubicada dentro de una cadena de objetos conectados sin tener que validar expresamente que cada referencia en la cadena sea válida.

// SI NO EXISTE FAVORITO USAMOS EL ? PARA QUE NO MUESTRE UN ERROR
console.log(gato.otros.favorito?.comida.frio);


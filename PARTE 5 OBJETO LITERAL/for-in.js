

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
}


//^ FOR IN
for (let propiedad in gato) {
  // retorna las propiedades sin valor
  console.log(propiedad);
  // retornar los valores
  console.log(gato[propiedad])
}

// La instrucción for-in itera sobre todas las propiedades enumerables de un objeto que está codificado por cadenas

//^ ¿Por qué usar for...in?
//  Dado que for...in está construido para iterar propiedades de objeto, no se recomienda su uso con arreglos y opciones como Array.prototype.forEach() y existe for...of, ¿cuál podría ser el uso de for...in?
//   Es posible que se utilice de forma más práctica con fines de depuración, ya que es una forma fácil de comprobar las propiedades de un objeto(mediante la salida a la consola o de otro modo)
// Aunque los arreglos suelen ser más prácticos para almacenar datos, en situaciones en las que se prefiere un par clave - valor para trabajar con datos(con propiedades que actúan como la "clave"), puede haber casos en los que desees comprobar si alguna de esas claves cumple un valor particular.




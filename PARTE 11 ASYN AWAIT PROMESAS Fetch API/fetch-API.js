// fetch API

// fetch: La API Fetch proporciona una interfaz para recuperar recursos(incluso a través de la red).Resultará familiar a cualquiera que haya usado XMLHttpRequest, pero la nueva API ofrece un conjunto de características más potente y flexible.
// El método fetch() toma un argumento obligatorio, la ruta de acceso al recurso que desea recuperar.
// Devuelve una Promise que resuelve en Response a esa petición, sea o no correcta.
// Una vez que Response es recuperada, hay varios métodos disponibles para definir cuál es el contenido del cuerpo y como se debe manejar.

const url = "https://jsonplaceholder.typicode.com/posts/";

// fetch(url)
//   .then(respuesta => respuesta.json())
//   .then(datos => console.log(datos.title))
//   .catch(error => console.log(error));

// con async
const findPostById = async (id) => {
  try {
    // LE PASO LA URL Y ESPERO
    const respuesta = await fetch(url + id);
    // LOS DATOS VIENE EN JSON POR ESO SE DEBE CONVERTIR
    const datos = await respuesta.json();
    // MANDO LA RESPUESTA
    console.log(datos);

  } catch (error) {
    console.log(error);
  }
}

findPostById(20);
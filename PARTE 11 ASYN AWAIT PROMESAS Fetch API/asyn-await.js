
const posts = [
  {
    "userId": 1,
    "id": 1,
    "title": "Titulo 1",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "Titulo 2",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "Titulo 3",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
];


const findPostById = (id) => new Promise((resolve, reject) => {

  // DEMORA DOS SEGUNDO PARA SER EJECUTADO, IMITA EL COMPORTAMIENTO DE UN BASE DE DATOS
  setTimeout(() => {
    const post = posts.find(item => item.id === id);
    if (post) {
      resolve(post);
    } else {
      reject(`ID ${id} no encontrado`);
    }
  }, 2000);

});

// findPostById(1)
//   .then(post => console.log(post))
//   .catch(error => console.log(error));


//? ...................................
//^         CON ASYNC Y AWAIT
//? ...................................
/*
 ? ASYNC AWAIT
 ? ASYNC LA DECLARACIÓN DE FUNCIÓN ASYNC DEFINE UNA FUNCIÓN ASÍNCRONA, LA CUAL DEVUELVE UNA ASYNCFUNCTION.
 ? EL OPERADOR AWAIT ES USADO PARA ESPERAR A UNA PROMISE.SÓLO PUEDE SER USADO DENTRO DE UNA FUNCIÓN ASYNC FUNCTION.
*/


const buscar = async (id) => {
  try {
    // EL AWAIT ESPERA LA PROMESA
    const post = await findPostById(id);
    console.log(post);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Fin DE LA PROMESA');
  }
}

buscar(1);
buscar(4);

// SE MUESTRA PRIMERO PORQUE EL CODIGO ANTERIOR ESPERA DOS SEGUNDOS
// console.log('FIN DEL CODIGO');



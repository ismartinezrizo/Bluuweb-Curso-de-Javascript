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


// const findPostById = (id, callback) => {
//   const post = posts.find(item => item.id === id);
//   if (post) {
//     callback(null, post);
//   } else {
//     callback('El id no existe');
//   }
// }

// // mandamos a llamar a la funcion
// findPostById(1, (error, post) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(post.title);

//   // buscar el otro valor
//   findPostById(2, (error, post) => {
//     if (error) {
//       console.log(error);
//       return;
//     }
//     console.log(post.title);

//     // buscar otro valor
//     findPostById(3, (error, post) => {
//       if (error) {
//         console.log(error);
//         return;
//       }
//       console.log(post.title);
//     });
//   });

// });


//& ----------------------------------------
//^ SE HARIA CON PROMISE ES LA MEJOR OPCION
//& ----------------------------------------

// promise: Una Promise(promesa en castellano) es un objeto que representa la terminación o el fracaso de una operación asíncrona.

// const findPostById = (id) => {
// BUSCAMOS EL POST
//   const post = posts.find(item => item.id === id);

// RETORNAMOS UNA NUEVA PROMESA
//   return new Promise((resolve, reject) => {
// resolve - respuesta satisfactoria - reject - cuando ocurre un error
// SI TODO ESTA BIEN EN POST MOSTRAMOS EL RESOLVE
//     if (post) {
//       resolve(post);
//     } else {
//       reject('No se encontro el id ' + id);
//     }
//   });
// };

// findPostById(1)
//   .then(post => console.log(post.title))
//   .catch(error => console.log(error));


//& -------------------------------
//^ UNA MANERA DE HACER LO MISMO
//& ------------------------------

const findPostById = id => new Promise((resolve, reject) => {
  const post = posts.find(item => item.id === id);
  if (post) {
    resolve(post);
  } else {
    reject(`Id ${id} no encontrado`);
  }
});

findPostById(4)
  .then(post => console.log(post.title))
  .catch(error => console.log(error));
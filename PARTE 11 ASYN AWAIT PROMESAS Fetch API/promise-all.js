const posts = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
];

// El método Promise.all(iterable) devuelve una promesa que termina correctamente cuando todas las promesas en el argumento iterable han sido concluídas con éxito, o bien rechaza la petición con el motivo pasado por la primera promesa que es rechazada.

const findPostById = id => new Promise((resolve, reject) => {
  setTimeout(() => {
    const post = posts.find(item => item.id === id);
    if (post) {
      resolve(post);
    } else {
      reject(`El ID ${id} no existe`);
    }
  }, 2000);
});

// EJECUTAR VARIAS PROMESAS CON PROMISE.ALL
const buscar = async () => {
  try {
    // SI UNO FALLA SALTA AL CATCH
    const arrayPost = await Promise.all([findPostById(1), findPostById(2)]);
    console.log(arrayPost[0], arrayPost[1]);
  } catch (error) {
    console.log(error);
  }
};

buscar();


//! SI UNO FALLA SALTA AL CATCH
// const buscar = async () => {
//   try {
//     const arrayPost = await Promise.all([findPostById(1), findPostById(2), findPostById(4)]);
//     console.log(arrayPost[0], arrayPost[1], arrayPost[4]);
//   } catch (error) {
//     console.log(error);
//   }
// };

// buscar();
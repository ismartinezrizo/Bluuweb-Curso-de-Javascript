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

// -----------------------------------------------
// LO MISMO DE ABAJO PERO SIN UNA FUNCION CALLBACK
// -----------------------------------------------

const findPostById = (id,) => {
  const post = posts.find(item => item.id === id);
  if (post) {
    return post;
  } else {
    return "Id no definido";
  }
}

console.log(findPostById(3));


// ------------------------
// CON UNA FUNCION CALLBACK
// ------------------------

const buscarPorId = (id, callback) => {
  const post = posts.find(item => item.id === id);
  // COMO PUEDE HABER UN ERROR LE PASAMOS EL ERROR Y EL VALOR DE POST
  if (post) {
    // COMO NO HAY ERROR LE PASAMOS NULL
    callback(null, post);
  } else {
    // PORQUE HAY UN ERROR LE PASAMOS UN MENSAJE DE ERROR
    callback('El ID no existe en post');
  }
}

// MANDAMOS A LLAMAR A LA FUNCION
buscarPorId(1, (error, post) => {
  // PREGUNTAMOS SI HAY ERRORE
  if (error) {
    console.log(error);
  } else {
    console.log(post);
  }
});


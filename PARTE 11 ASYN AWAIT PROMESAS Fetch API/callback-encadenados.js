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


const findPostById = (id, callback) => {
  const post = posts.find(item => item.id === id);
  if (post) {
    callback(null, post);
  } else {
    callback('El id no existe');
  }
}

// mandamos a llamar a la funcion
findPostById(1, (error, post) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(post.title);

  // buscar el otro valor
  findPostById(2, (error, post) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(post.title);

    // buscar otro valor
    findPostById(3, (error, post) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(post.title);
    });
  });

});
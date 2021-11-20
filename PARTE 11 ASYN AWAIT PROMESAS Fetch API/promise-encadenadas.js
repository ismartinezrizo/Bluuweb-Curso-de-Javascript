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

//& -------------------
//^ PROMISE ENCADENADAS
//& -------------------

const findPostById = id => new Promise((resolve, reject) => {
  const post = posts.find(item => item.id === id);
  if (post) {
    resolve(post);
  } else {
    reject(`Id ${id} no encontrado`);
  }
});

findPostById(1)
  .then(post => {
    console.log(post.title);
    return findPostById(2);
  })
  .then(post => {
    console.log(post.title);
    return findPostById(3);
  })
  .then(post => {
    console.log(post.title);
    return findPostById(4);
  })
  .catch(error => console.log(error));
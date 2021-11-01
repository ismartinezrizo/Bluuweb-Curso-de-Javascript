const gato = {
  nombre: "Valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"]
};


// CRUD (PROPIEDADES)
// CREAR (CREATE)
gato.color = "amarillo";

// READ (LEER)
console.log(gato);

// ACTUALIZAR (UPDATE)
// es lo mismo que agregarle un valor solo que si existe se actualiza
gato.edad = 5;
console.log(gato);

// DELETE
delete gato.duerme;
console.log(gato);

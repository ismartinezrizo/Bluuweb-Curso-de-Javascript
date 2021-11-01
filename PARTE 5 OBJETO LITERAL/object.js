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
  },
  comer(alimento) {
    console.log(this);
    console.log(`${this.nombre} esta comiendo ${alimento}`);
  },
  listarEnemigos() {
    this.enemigos.forEach((item) => console.log(item));
  }
};


//^ PARA OBTENER SOLO LOS VALORES

console.log('Mostrando los valores de gato');
const valoresGato = Object.values(gato);
console.log(valoresGato);


//^ PARA OBTENER SOLO LAS PROPIEDADES
console.log(Object.keys(gato));


//^ DESTRUCTURING OBJECTS - ¿Qué es destructuración?
// La desestructuración es una característica bastante poderosa que nos permite separar keys o llaves de un objeto en variables independientes, ello para mejorar la legibilidad y escribir un código más compacto y simplificado.Dicha característica está presente desde la especificación ES6 del lenguaje.
// ----------------------

//^ CREAMOS UN OBJETO LITERAL
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
    // console.log(this);
    // para poder usar la propiedad this, ya que se pierde a esta dentro de otra funcion
    const self = this;
    function pintarComida() {
      console.log(`${self.nombre} esta comiendo ${alimento}`);
    }

    pintarComida();

  }
};

//^ SIN DESTRUCTURING
// const nombre = gato.nombre;
// console.log(nombre);

//^ CON DESTRUCTURING ES DE LA SIGUIENTE MANERA.
const { nombre, duerme, edad, enemigos } = gato;
console.log(nombre);
console.log(duerme);
console.log(edad);
console.log(enemigos);

//^ DESTRUCTURING CON ALIAS
const { nombre: nombreGato, duerme: duermeGato, edad: edadGato, enemigos: enemigosGato } = gato;
console.log(nombreGato);
console.log(duermeGato);
console.log(edadGato);
console.log(enemigosGato);

//^ DESTRUCTURING POR DEFECTOS
const { nombre: nombreGatito = 'Nino2' } = gato;
console.log(nombreGatito);

//^ DESTRUCTING ANIDADO

const { amigos } = gato.otros; //mejor opcion
console.log(amigos);

//^ OTRA FORMA DE HACER LO MISMO
const { otros: { amigos: amigosGatos } } = gato;
console.log(amigosGatos);

//^ RECORRER UN ARRAY CON DESTRUCTURING
const [amigoUno, amigoDos, amigoTres] = amigosGatos;
console.log(amigoUno);
console.log(amigoDos);
// cuando no existe se coloca un valor por defecto
//console.log(amigoTres = 'No existe');

//^ COMO ES UNA FUNCION NO NECESITA DE {}
// const comer = gato.comer('carne');
// console.log(comer);

gato.comer('carne');

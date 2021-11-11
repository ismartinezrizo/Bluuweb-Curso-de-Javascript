
// caja donde se guardaran los datos
const listaCarrito = document.getElementById('listaCarrito');

// seleccionamos el template
const template = document.getElementById('template');

// creamos un fragment
const fragment = document.createDocumentFragment();

// seleccionar los botones
const botones = document.querySelectorAll('.card button');

const arrayFrutas = [];

const agregarCarrito = (e) => {

  // obtenemos el nombre de la fruta.
  const fruta = e.target.dataset.fruta;

  // creamos el objeto producto
  const producto = {
    id: fruta, //porque la fruta no se repite
    nombreFruta: fruta,
    cantidad: 1
  }

  // El método findIndex() devuelve el índice del primer elemento de un array. En caso contrario devuelve - 1.

  const indice = arrayFrutas.findIndex(item => item.id === producto.id);

  // -1 SIGNIFICA QUE NO EXISTE, SE AGREGA EL ARRAY
  if (indice === -1) {
    arrayFrutas.push(producto);
  } else {
    // ACTUALIZAR LA CANTIDAD
    arrayFrutas[indice].cantidad += 1;
  }

  pintarCarrito();

};


const pintarCarrito = () => {

  // LIMPIAMOS TODO AL INICIO
  listaCarrito.textContent = "";

  // RECORREMOS EL OBJETO arrayFrutas
  arrayFrutas.forEach((item) => {
    // CLONAMOS EL TEMPLATE PORQUE ES SOLO DE LECTURA.
    const cloneTemplate = template.content.firstElementChild.cloneNode(true);
    // AGREGAMOS EL NOMBRE 
    cloneTemplate.querySelector('.nombreFruta').textContent = item.nombreFruta;
    // AGREGAMOS LA CANTIDAD
    cloneTemplate.querySelector('.cantidad').textContent = item.cantidad;

    // AL FRAGMENT LE AGREAMOS EL cloneTemplate
    fragment.appendChild(cloneTemplate);
  });

  // AGREGAMOS A LA LISTA CARRITO.
  listaCarrito.appendChild(fragment);
};


// los botones se comportan como un array por eso debemos recorrelos
botones.forEach(boton => boton.addEventListener('click', agregarCarrito));

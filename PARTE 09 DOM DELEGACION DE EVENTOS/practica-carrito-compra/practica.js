
// DONDE SE MOSTRARAN LOS DATOS
const carrito = document.getElementById('carrito');
// DONDE SE MOSTRARA EL TOTAL
const carritoTotal = document.getElementById('carritoTotal');
// TEMPLATE CON LOS DATOS QUE SERAN INSERTADOS
const template = document.getElementById('template');
// TEMPLATE EL TOTAL QUE SERA INSERADO
const templateTotal = document.getElementById('templateTotal');

// CREAMOS UN SOLO FRAGMENT YA QUE EL OTRO NO USAMOS FOREACH
const fragment = document.createDocumentFragment();

// ENCABEZADO DE LA TABLA
const encabezadoTabla = document.querySelector('.encabezado-tabla');

// PARA OCULTAR EL ENCABEZADO DE LA TABLA.
document.addEventListener('DOMContentLoaded', () => {
  encabezadoTabla.style.display = 'none';
});

// ARRAY DONDE SE ALMACENARAN LOS DATOS
let arrayFrutas = [];

// PARA CUANDO DEMOS CLICK
document.addEventListener('click', (e) => {

  e.preventDefault();

  // El método matches() comprueba si el Element sería seleccionable por el selector CSS;
  // en caso contrario, retorna false.

  // LOS BOTONES AGREGAR - SI EL EVENTO TIENE UNA CLASE btn-agregar,
  if (e.target.matches('.btn-agregar')) {
    // AGREGAME LOS PRODUCTOS AL CARRITO
    if (confirm('Desea Agregar una fruta mas?')) {
      encabezadoTabla.style.display = 'block';
      agregarCarrito(e);
    }
  }

  // PARA LOS BOTONES DE ELIMINAR Y AGREGAR

  // SI EL EVENTO TIENE UNA CLASE btnEliminar
  if (e.target.matches('#btnDisminuir')) {
    // MANDAMOS A LLAMAR AL BOTON DISMINUIR
    disminuirCantidad(e);
  }

  if (e.target.matches('#btnAunmentar')) {
    // MANDAMOS A LLAMAR AL BOTON AGREGAR
    AumentarCantidad(e);
  }
});


function agregarCarrito(e) {

  const producto = {
    id: e.target.dataset.fruta,
    nombre: e.target.dataset.fruta,
    cantidad: 1,
    precio: parseInt(e.target.dataset.precio)
  };

  // VERIFICAMOS SI EXISTE EL PRODUCTO EN EL CARRITO CON findIndex
  const indice = arrayFrutas.findIndex(item => item.id === producto.id);
  // SI ME RETONA -1 ES PORQUE NO EXISTE, SE DEBE DE AGREGAR.
  if (indice === -1) {
    // AGREGAMOS EL PRODUCTO
    arrayFrutas.push(producto);
  } else {
    // SE DEBE ACTUALIZAR LA CANTIDAD.
    arrayFrutas[indice].cantidad += 1;
  }

  // PINTAMOS EL CARRITO
  pintarCarrito();
}


const pintarCarrito = () => {

  carrito.textContent = "";

  // RECORREMOS EL ARRAYFRUTAS
  arrayFrutas.forEach(item => {
    // hacemos un clone del template para poder modificarlo.
    const clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector('#nombreFruta').textContent = item.nombre;
    clone.querySelector('#cantidadFruta').textContent = item.cantidad;
    clone.querySelector('#precioFruta').textContent = item.precio;
    clone.querySelector('#subtotal').textContent = item.cantidad * item.precio;
    // agregar los botones
    clone.querySelector('#btnDisminuir').dataset.id = item.id;
    clone.querySelector('#btnAunmentar').dataset.id = item.id;
    fragment.appendChild(clone);
  });

  carrito.appendChild(fragment);

  pintarTotal();
}

const pintarTotal = () => {

  carritoTotal.textContent = "";

  const total = arrayFrutas.reduce((contador, item) => contador + item.precio * item.cantidad, 0);
  const clone = templateTotal.content.firstElementChild.cloneNode(true);
  clone.querySelector('#total').textContent = total;
  // como no recorrimos nada le pasa directamente el valor al carritoTotal
  carritoTotal.appendChild(clone);
}


const disminuirCantidad = (e) => {

  arrayFrutas = arrayFrutas.filter(item => {
    if (item.id === e.target.dataset.id) {
      if (item.cantidad > 0) {
        item.cantidad--;
        if (item.cantidad === 0) {
          return;
        }
        return item;
      }
    } else {
      return item;
    }

  });

  pintarCarrito();

};

const AumentarCantidad = (e) => {

  arrayFrutas = arrayFrutas.map(item => {
    if (item.id === e.target.dataset.id) {
      item.cantidad += 1;
    }
    return item;
  });

  pintarCarrito();

};
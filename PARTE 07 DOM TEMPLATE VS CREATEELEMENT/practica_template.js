// caja donde se almacenaran los productos
const carrito = document.getElementById('carrito');

// estructura que va a tener los productos
const template = document.getElementById('template');

// fragment para evitar el reflow
const fragment = document.createDocumentFragment();

// botones
const botones = document.querySelectorAll('.card .btn');

// arrayProductos
const carritoCompra = {};

const agregarCarrito = (e) => {
  // e.target - muestra donde dimos click
  // e.target.dataset - muestra el valor del data-nombre
  const fruta = e.target.dataset.fruta;

  // creamos un objecto donde productos.
  const producto = {
    titulo: fruta,
    id: fruta,//no se repite
    cantidad: 1
  }

  // para actualizar la cantidad
  // si el carrito de compra tiene una propiedad (hasOwnProperty) con el titulo tal
  if (carritoCompra.hasOwnProperty(producto.titulo)) {
    producto.cantidad = carritoCompra[producto.titulo].cantidad + 1;
  }

  // carritoCompra[del producto mostrame el titulo, puede ser manzana, cereza o banana] = producto
  // agregamos el producto al carritoCompra
  carritoCompra[producto.titulo] = producto;

  // mandamos a llamar pintarCarrito
  pintarCarrito();
}

const pintarCarrito = () => {
  // para que el carrito siempre comienze vacio
  carrito.textContent = "";
  //  recorremos el carritoCompra. Object.values(carritoCompra) convertido para poder ser recorrido
  Object.values(carritoCompra).forEach(item => {
    // clonamos el template, porque el template es de solo lectura
    const cloneTemplate = template.content.firstElementChild.cloneNode(true);
    // nos ubicamos en la clase donde queremos guardar el producto
    cloneTemplate.querySelector('.nombre-producto').textContent = item.titulo;
    // nos ubicamos en la clase donde queremos guardar la cantidad
    cloneTemplate.querySelector('.cantidad-producto').textContent = item.cantidad;
    // agregamos al fragment  
    fragment.appendChild(cloneTemplate);
  });
  // agregamos el fragmento al carrito
  carrito.appendChild(fragment);
};

// Botones de agregar
botones.forEach(boton => {
  boton.addEventListener('click', agregarCarrito);
});

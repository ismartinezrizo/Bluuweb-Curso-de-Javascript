
const nombreFruta = document.getElementById('nombreFruta');
const cantidadFruta = document.getElementById('cantidadFruta');
const btnAgregar = document.getElementById('btnAgregar');
const btnEliminar = document.getElementById('btnEliminar');
const cajadatos = document.getElementById('cajadatos');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();

const arrayFrutas = {};

btnAgregar.addEventListener('click', () => {

  if (nombreFruta.value !== "" && cantidadFruta.value !== "") {
    const producto = {
      nombre: nombreFruta.value,
      cantidad: cantidadFruta.value
    };

    // arrayFrutas[producto.nombre] - la llave y el producto el valor
    arrayFrutas[producto.nombre] = producto;

    pintarCarrito();

    nombreFruta.value = "";
    cantidadFruta.value = "";
    nombreFruta.focus();
  } else {
    alert("Los dos campos son obligatorios🎅");
    nombreFruta.focus();
  }

});

const pintarCarrito = () => {
  // limpiamos la caja antes de agregar una fruta
  cajadatos.textContent = "";

  Object.values(arrayFrutas).forEach(item => {
    // clonamos el template
    const cloneTemplate = template.content.firstElementChild.cloneNode(true);
    // nos ubicamos donde queremos guardar el nombre
    cloneTemplate.querySelector('.nombre-producto').textContent = item.nombre;
    // nos ubicamos donde queremos guardar la cantidad
    cloneTemplate.querySelector('.cantidad').textContent = item.cantidad;
    // nos ubicamos en el boton eliminar
    cloneTemplate.querySelector('#btnEliminar').addEventListener('click', borrarFruta);
    // agregamos el clone al fragment
    fragment.appendChild(cloneTemplate);
  });

  cajadatos.appendChild(fragment);
}

const borrarFruta = (e) => {
  // elimino el tr de la tabla
  e.target.parentNode.parentNode.remove();
  //! ayuda para que se elimine los valores del objeto


};

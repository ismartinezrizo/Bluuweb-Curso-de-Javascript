

const paises = ["Nicaragua", "Brasil", "Mexico"];

// NO RECOMENDADO: Reflow

// Aquí se genera Reflow: (opens new window)Ocurre cuando un navegador debe procesar y dibujar parte o la totalidad de una página web nuevamente, como después de una actualización en un sitio interactivo.

// caja donde se guardaran los paises
const listaPaises = document.getElementById('listaPaises');
// recorremos el array paises
paises.forEach(pais => {
  // creamos un item (li)
  const li = document.createElement('li');
  // agregamos los paises al li con textContent
  li.textContent = pais;
  // agregamos el li a la caja listaPaises
  listaPaises.appendChild(li);
});



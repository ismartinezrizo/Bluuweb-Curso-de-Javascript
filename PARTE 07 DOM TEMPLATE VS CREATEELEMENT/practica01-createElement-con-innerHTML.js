// caja donde se almacenaran los paises en su li
const listaPaises = document.getElementById('listaPaises');

const arrayPaises = ["Nicaragua", "Brasil", "Mexico"];

arrayPaises.forEach(pais => {
  listaPaises.innerHTML += `<li>${pais}</li>`;
});

// Reflow

// Aquí se genera Reflow: (opens new window)Ocurre cuando un navegador debe procesar y dibujar parte o la totalidad de una página web nuevamente, como después de una actualización en un sitio interactivo.
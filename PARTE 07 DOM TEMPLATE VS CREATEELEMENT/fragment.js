// Fragment
// ----------------------------------------------
// new DocumentFragment()(opens new window)
// createDocumentFragment()(opens new window)
// La interfaz DocumentFragment representa un objeto de documento mínimo que no tiene padre.

// Se utiliza como una versión ligera de Document que almacena un segmento de una estructura de documento compuesta de nodos como un documento estándar.

// La gran diferencia se debe al hecho de que el fragmento de documento no forma parte de la estructura de árbol del documento activo.

// Los cambios realizados en el fragmento no afectan el documento(incluso en reflow) ni inciden en el rendimiento cuando se realizan cambios.

// div caja donde se almacenaran los paises en su li
const listaPaises = document.getElementById('listaPaises');

const arrayPaises = ["Nicaragua", "Brasil", "Mexico"];

// CREAMOS UN FRAGMENTO
const fragment = document.createDocumentFragment();
// const fragment = new DocumentFragment();

arrayPaises.forEach(pais => {
  // creamos el li
  const li = document.createElement('li');
  // agregamos el pais al li
  li.textContent = pais;
  // agregamos el li al fragment
  fragment.appendChild(li);
});

// agregamos el fragment a la lista de paises.
listaPaises.appendChild(fragment);

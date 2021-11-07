// div caja donde se almacenaran los paises en su li
const listaPaises = document.getElementById('listaPaises');

const arrayPaises = ["Nicaragua", "Brasil", "Mexico"];

// CREAMOS UN FRAGMENTO
const fragment = document.createDocumentFragment();
// const fragment = new DocumentFragment();

arrayPaises.forEach(pais => {
  // CREAMOS EL newNode
  const newNode = document.createElement('li');
  // agregamos el pais al newNode
  newNode.textContent = pais;
  // sacamos el primer node y lo guardamos en referenciaNode
  const referenciaNode = fragment.firstChild;
  // insertamos antes del newNode
  fragment.insertBefore(newNode, referenciaNode);
});

// agregamos el fragment a la lista de paises.
listaPaises.appendChild(fragment);

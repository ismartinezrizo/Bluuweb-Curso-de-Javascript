const lista = document.getElementById('lista');

const arrayPaises = ["Nicaragua", "Brasil", "Mexico"];

const fragment = document.createDocumentFragment();

// recorremos el arrayPaises
arrayPaises.forEach(pais => {
  const li = document.createElement('li');
  li.className = "list";

  const strong = document.createElement('strong');
  strong.textContent = "Pais: ";

  // creamos un span
  const span = document.createElement('span');
  span.className = "text-primary";
  span.textContent = pais;

  // agregamos el strong al li
  li.appendChild(strong);

  // agregamos el span al li
  li.appendChild(span);

  // agregamos el li al fragment
  fragment.appendChild(li);
});

lista.appendChild(fragment);


// div lista
// const lista = document.getElementById('lista');

// capturamos el template, el template genera un propiedad content por eso se debe de clonar.
// const liTemplate = document.getElementById('liTemplate');

// clonamos el liTemplate
// const clone = liTemplate.content.cloneNode(true);

// obtenemos la clase text-primary
// clone.querySelector('.text-primary').textContent = "Nicaragua";

// agregamos el clone a la lista
// lista.appendChild(clone);


// EJEMPLO CON ARRAY
// div lista
const lista = document.getElementById('lista');
// capturamos el template
const liTemplate = document.getElementById('liTemplate');
// creamos un fragmento
const fragment = document.createDocumentFragment();

const arrayPaises = ["Nicaragua", "Brasil", "Mexico"];

const clickPaises = (e) => console.log("Me diste click", e.target);

arrayPaises.forEach(pais => {
  // clonamos el template
  const cloneTemplate = liTemplate.content.firstElementChild.cloneNode(true);
  cloneTemplate.querySelector('.text-primary').textContent = pais;
  cloneTemplate.addEventListener('click', clickPaises);

  fragment.appendChild(cloneTemplate);
});

lista.appendChild(fragment);

// TIP

// HTMLTemplateElement tiene una propiedad content, que es de solo lectura y DocumentFragment contiene el subárbol DOM que representa la plantilla.Tenga en cuenta que el uso directo del valor de content podría provocar un comportamiento inesperado; consulte la sección Evitar el error de DocumentFragment : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#avoiding_documentfragment_pitfall

// -----------------------------------------------------
// firstElementChild - para permitir el addEventListener

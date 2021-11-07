// ALTERNATIVA SI QUEREMOS TENER EL JS EN EL HEAD
// addEventListener('DOMContentLoaded', () => {

//   console.log(document);

//   console.log(document.head);
//   console.log(document.title);

//   console.log(document.body);
//   console.log(document.body);

//   console.log(document.URL);
//   console.log(document.domain);

// ACCEDER AL TITULO
//   const tituloWeb = document.getElementById('tituloWeb');
//   console.log(tituloWeb.textContent);//innerHtml no es recomendable

// });

console.log(document);

console.log(document.head);
console.log(document.title);

console.log(document.body);
console.log(document.body);

console.log(document.URL);
console.log(document.domain);

// acceder al titulo

// document.getElementById
// const tituloWeb = document.getElementById('tituloWeb');

// document.querySelector
// ----------------------------------------------------------------
const tituloWeb = document.querySelector('#tituloWeb');
console.log(tituloWeb.textContent);//innerHtml no es recomendable

const textPrimary = document.querySelector('.text-primary');
console.log(textPrimary.textContent);

const h1 = document.querySelector('h1');
console.log(h1.textContent);
// ----------------------------------------------------------------

// QUERY_SELECTOR - SELECCIONA EL PRIMER ELEMENTO
console.log(document.querySelector('.text-danger'));

// QUERY_SELECTOR_ALL - SELECCIONA TODOS LOS ELEMENTO
console.log(document.querySelectorAll('.text-danger'));

// SELECCIONAR TODOS LOS QUE ESTAN EN EL CONTAINER
console.log(document.querySelectorAll('.container .text-danger'));


// QUERYSELECTOR VS GETELEMENTBYID

// El método querySelector le permite recuperar un elemento mediante una consulta de selector de CSS
// El método getElementById recupera un elemento por su ID DOM.
// Ambos métodos tienen una amplia compatibilidad con los navegadores.Debe optar por usar el método querySelector si necesita seleccionar elementos usando reglas más complejas que se representan fácilmente usando un selector CSS.Si desea seleccionar un elemento por su ID, usar getElementById es una buena opción.
//   fuente(opens new window)
// A menudo necesitará realizar selecciones más complejas en su HTML, y ahí es donde querySelector puede ser más útil; usarlo de manera constante también puede hacer que su código sea más fácil de leer para otros codificadores.
// En otras palabras, el principal beneficio de usar querySelector o querySelectorAll es que podemos seleccionar elementos usando selectores CSS, lo que nos da una forma uniforme de manejar la selección de elementos, y eso lo convierte en una forma preferida de seleccionar elementos para muchos desarrolladores.
// Si usa una herramienta como Babel para admitir navegadores más antiguos, entonces puede ser irrelevante, ya que las funciones más nuevas se pueden convertir a código compatible con versiones anteriores cuando compila su script.
// 800.000 selecciones por segundo, querySelector es aprox. 6 % más lento.
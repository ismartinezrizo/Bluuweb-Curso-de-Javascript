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

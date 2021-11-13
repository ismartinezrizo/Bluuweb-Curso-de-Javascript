const padre = document.getElementById('padre');
const hijo = document.getElementById('hijo');
const nieto = document.getElementById('nieto');

// El burbujeo y la captura de eventos son dos mecanismos que describen lo que sucede cuando dos controladores del mismo tipo de evento se activan en un elemento.

// Fase de burbuja(bubbling): Se propaga desde el elemento hijo hasta el padre. (comportamiento por defecto)

// -------------------------------------
//        CON STOP PROPAGATION
// -------------------------------------
padre.addEventListener('click', (e) => {
  // o con stopPropagation()
  e.stopPropagation();
  console.log('Has dado click en padre');
});

hijo.addEventListener('click', (e) => {
  // o con stopPropagation()
  e.stopPropagation();
  console.log('Has dado click en Hijo');
});

nieto.addEventListener('click', (e) => {
  // o con stopPropagation()
  e.stopPropagation();
  console.log('Has dado click en Nieto');
});
// --------------------------------------





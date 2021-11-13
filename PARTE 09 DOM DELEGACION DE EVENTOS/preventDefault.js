
//^ preventDefault(opens new window): Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('has dado click');
});


const ancla = document.querySelector('a');

// Sirve para cualquier comportamiento por defecto del navegador:
ancla.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Me diste click');
});


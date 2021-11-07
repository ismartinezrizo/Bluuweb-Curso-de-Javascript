// Eventos

// En JavaScript, la interacción con el usuario se consigue mediante la captura de los eventos que éste produce.Un evento es una acción del usuario ante la cual puede realizarse algún proceso(por ejemplo, el cambio del valor de un formulario, o la pulsación de un enlace).

const boton = document.querySelector('.btn-primary');
boton.addEventListener('click', () => {

  alert('has dado click');

  const opcion = confirm('Desea cambiar el titulo');
  if (opcion) {
    document.getElementById('tituloWeb').textContent = prompt("Ingrese el titulo: ");
  }
});


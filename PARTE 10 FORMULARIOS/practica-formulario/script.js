const formulario = document.getElementById('formulario');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');

const alertName = document.getElementById('alertName');
const alertEmail = document.getElementById('alertEmail');

const alertSuccess = document.getElementById('alertSuccess');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const patternName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const patternEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

  const errores = [];

  // VALIDAR NOMBRE
  // !PATTERNNAME.VALUE.TRIM() SI VIENE EN BLANCO
  if (!patternName.test(userName.value) || !userName.value.trim()) {

    // PARA MOSTRAR EL ICONO DE ERROR
    userName.classList.add('is-invalid');

    // MANDAMOS LOS ERRORES AL ARRAYERRORES
    errores.push(
      {
        tipo: alertName,
        msg: "Formato no válido, en el campo nombre, solo letras"
      }
    );

  } else {
    // quitamos el icono de error
    userName.classList.remove('is-invalid');
    // AGREGAMOS LA CLASE DE EXITO
    userName.classList.add('is-valid');
    // OCULTAMOS EL MENSAJE DE ERROR
    alertName.classList.add('d-none');
  }

  // VALIDAR EMAIL
  if (!patternEmail.test(userEmail.value)) {

    // PARA MOSTRAR EL ICONO DE ERROR
    userEmail.classList.add('is-invalid');

    // MANDAMOS LOS ERRORES AL ARRAYERRORES
    errores.push(
      {
        tipo: alertEmail,
        msg: "Escriba un correo válido"
      }
    );

  } else {
    // quitamos el icono de error
    userEmail.classList.remove('is-invalid');
    // AGREGAMOS LA CLASE DE EXITO
    userEmail.classList.add('is-valid');
    // OCULTAMOS EL MENSAJE DE ERROR
    alertEmail.classList.add('d-none');
  }

  if (errores.length !== 0) {
    // SI HAY ERRORES NO SE EJECUTA LO DE ABAJO
    pintarMensajeErrores(errores);
    return;
  }

  // PASO
  pintarMensajeExito();

});

const pintarMensajeExito = () => {

  alertSuccess.classList.remove('d-none');

  // se oculte despus de dos segundos
  setTimeout(() => {
    alertSuccess.classList.add('d-none');
  }, 2000);

};

const pintarMensajeErrores = (errores) => {
  // RECORREMOS EL ARRAY ERRORES
  errores.forEach(error => {
    // LE QUITAMOS LA CLASE
    error.tipo.classList.remove('d-none');
    // AGREGAMOS EL MENSAJE
    error.tipo.textContent = error.msg;
    error.tipo.classList.add('isinvalid');
  });
}
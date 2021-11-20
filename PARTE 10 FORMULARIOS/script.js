const formulario = document.getElementById('formulario');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');


formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const patternName = /^[a-zA-Z\s]+[\S]$/;
  const patterEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

  // SI EL USUARIO NO CONTIENE DATOS
  if (!patternName.test(userName.value)) {
    console.log('formato no valido');
    return;
  }

  // SI EL EMAIL NO CONTIENE
  if (!patterEmail.test(userEmail.value)) {
    console.log('formato no valido');
    return;
  }

  console.log('paso');

});
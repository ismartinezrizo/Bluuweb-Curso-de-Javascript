
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
 
  const inputs = new FormData(formulario);

  // OBTENER EL VALOR ATRAVEZ DE LOS KEYS
  console.log(inputs.get('userName'));
  console.log(inputs.get('userEmail'));

  // RECORRER LOS VALORES
  for(item of inputs.values()){
    console.log(item)
  }

  // KEYS AND VALUES
  console.log('entries');
  for(let item of inputs.entries()){
    console.log('valores, ', item[1]);
  }
  

})
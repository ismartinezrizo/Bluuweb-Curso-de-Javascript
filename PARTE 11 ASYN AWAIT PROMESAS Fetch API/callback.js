
// -----------------
// Función Callback
// -----------------

// Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

// UNA FUNCION NORMAL
function saludar() {
  alert(`Hola ${nombre}`);
}

// UNA FUNCION NORMAL QUE QUE RECIBE COMO PARAMETRO OTRA FUNCION
function pedirNombre(callback) {
  let nombrePrompt = prompt('Ingrese su nombre por favor: ');
  // MANDAMOS A LLAMAR A LA FUNCION QUE LE PASAMOS Y LE PASAMOS EL VALOR
  callback(nombrePrompt);
}

// MANDAMOS A LLAMAR A LA FUNCION Y LE PASAMOS UNA FUNCION
pedirNombre(saludar);













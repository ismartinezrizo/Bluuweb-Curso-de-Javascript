
// --------------------------------------------
//Expresion regular
// --------------------------------------------

// Primera forma (Recomendada)
const regExpr = /bluuweb/i;

// Segunda forma
const regExpObjecto = new RegExp("bluuweb", "i");
console.log(regExpObjecto.test('Bluuweb'));

// con test probamos si existe el texto en la expresion
console.log(regExpr.test('Bluuweb'));

// busca cualquier valor que tenga i ya sea al comienzo en medio o al final de una frase
const expresionRegular = /[i]/i;
console.log(expresionRegular.test('isds'))

// BUSCA UN VALOR O OTRO VALOR
const frase = "Hola hola";
const expresion = /Hola|hola/;
console.log(expresion.test(frase));

// SOLO NUMEROS
const soloNumeros = /[0-9]/;
console.log(soloNumeros.test('10'));
console.log(soloNumeros.test('100'));
console.log(soloNumeros.test('1000'));
console.log(soloNumeros.test('un string'));
console.log(soloNumeros.test('otro string'));

// SOLO STRING
const regExprString = /[A-Za-z]/;
console.log(regExprString.test('Este es un string'));
console.log(regExprString.test('ESTE ES UN STRING'));
console.log(regExprString.test('10'));
console.log(regExprString.test('3'));


// validar un email
const validarCorreo = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
console.log(validarCorreo.test('martinezrizo.isaac@gmail.com'));




// D - DOCUMENT
const dId = (id) => document.getElementById(id);
const dQuery = (string) => document.querySelector(string);
const dQueryAll = (string) => document.querySelectorAll(string);


//C - CREATE 
const dcel = (string) => document.createElement(string);


const caja = dId('caja');
const p = dcel('p');
p.textContent = "Este es un parrafo";
caja.appendChild(p);



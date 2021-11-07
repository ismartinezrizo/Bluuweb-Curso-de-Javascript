
// createElement
// const li = document.createElement('li');
// li.textContent = "Texto desde JS";
// console.log(li);


// elemento donde vamos a incorporar los <li>
const listaDinamica = document.getElementById('listaDinamica');

// creamos un li
const li = document.createElement('li');

// Agregamos texto al <li>
li.textContent = 'items desde Javascript';

// Finalmente incorporamos al <ul>
listaDinamica.appendChild(li);

//! WARNING

//! Si el child hace una referencia a un nodo existente en el documento, el método appendChild se mueve de su posición actual a su nueva posición.
//! Ésto significa que el nodo no puede estar en dos puntos del documento de manera simultánea.
//! Así que si el nodo ya contiene un padre, primero es eliminado, y después se añade a la nueva posición.
//! Se puede usar Node.cloneNode(opens new window)para hacer una copia del nodo antes de añadirlo debajo de su nuevo elemento padre.


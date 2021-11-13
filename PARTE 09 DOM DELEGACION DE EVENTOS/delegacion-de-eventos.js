// Delegación de Eventos
// La delegación de eventos es básicamente un patrón para manejar eventos de manera eficiente.

// En lugar de agregar un detector de eventos a todos y cada uno de los elementos similares, podemos agregar un detector de eventos a un elemento principal y llamar a un evento en un objetivo en particular utilizando la propiedad.target del objeto de evento.

// Así evitamos la propagación 👌

// TIP
// Puedes seleccionar todo el document, así no tienes que estar detectando el componente principal 🤙

document.addEventListener('click', (e) => {

  if (e.target.id === 'padre') {
    console.log('Diste click en PADRE usando id');
  }

  // El método matches() comprueba si el Element sería seleccionable por el selector CSS especificado en la cadena; en caso contrario, retorna false.

  if (e.target.matches('#hijo')) {
    console.log('Diste click en HIJO usando matches');
  }

  // The dataset read - only property of the HTMLElement interface provides read / write access to custom data attributes(data -*) on elements.It exposes a map of strings(DOMStringMap) with an entry for each data -* attribute.

  if (e.target.dataset.div === 'nieto') {
    console.log('Diste click en NIETO usando dataset');
  }

});
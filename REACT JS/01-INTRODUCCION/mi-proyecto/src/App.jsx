
export const App = () => {

  const parrafo = "Este es mi primer componente en React JS";
  const estiloParrafo = "container mt-5 bg-info";

  return (    
    <div className={estiloParrafo}>{parrafo}</div>  
  );
}

export default App;

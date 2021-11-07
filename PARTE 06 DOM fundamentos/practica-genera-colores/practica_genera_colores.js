

const codigo_paleta_color = document.getElementById('paleta_color');
const btn_visualizar = document.getElementById('btn_visualizar');
const resultado_hex = document.getElementById('resultado_hex');
let cajaColor = document.getElementById('cajaColor');
const btnCopiar = document.getElementById('copiar');
const textoCopiado = document.getElementById('textoCopiado');

btn_visualizar.addEventListener('click', () => {
  resultado_hex.textContent = codigo_paleta_color.value;
  cajaColor.style.backgroundColor = resultado_hex.textContent;
  cajaColor.style.border = "1px dashed #000";
  // mostramos el boton copiar
  btnCopiar.style.display = "block";
  // ocultar el texto que dice codigo copiado
  textoCopiado.style.display = "none";
});


btnCopiar.addEventListener('click', () => {
  // PARA COPIAR EL TEXTO
  navigator.clipboard
    .writeText(resultado_hex.textContent)
    .then(() => textoCopiado.style.display = "block")
    .catch(e => alert(e));
});



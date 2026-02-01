// Crea un módulo que implemente una función incrementar() que devuelva un número
// empezando por 1 y que se vaya incrementando en cada llamada, y otra función reset() para
// reinicializarlo.
// Crea una página web que tenga un único <p> con el contenido inicial 0, un botón “Incrementar” y
// otro botón “Reset”.
// Crea otro módulo que implemente la funcionalidad necesaria para hacer que, al pulsar el botón, el
// párrafo se incremente o se resetee a cero.
import { incrementar, reset } from "./01-modulo.js";

const botonIncrementar = document.querySelector("#btn-increment");
const botonReset = document.querySelector("#btn-reset");
const display = document.querySelector("#resultado");

botonIncrementar.addEventListener("click", () => {
  const textoDisplay = incrementar();
  display.textContent = textoDisplay;
});
botonReset.addEventListener("click", () => {
  reset();
  display.textContent = 0;
});

// Realiza un programa que mediante eventos y el uso del objeto event te muestre en todo momento la posición actual del ratón en pantalla. Para mostrarlo modificaremos de forma dinámica un elemento HTML (Ejemplo un <p>) que nos muestre la posición actual del ratón.

const indicadorPosicion = document.querySelector("#indicador-posicion");

function mostrarPosicionRaton() {
  document.addEventListener("mousemove", (event) => {
    indicadorPosicion.textContent = `Posición del ratón: ${event.screenX} / ${event.screenY}`;
  });
}

document.addEventListener("DOMContentLoaded", mostrarPosicionRaton);

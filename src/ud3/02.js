import { iniciarJuego, puntoJugador, resultado } from "./02-modulo.js";
// import { ErrorPersonalizado } from "./error-personalizado.js";
import { ErrorPersonalizado } from "joshersil-custom-errors";

const puntoJugador1 = document.querySelector("#punto-jugador1");
const puntoJugador2 = document.querySelector("#punto-jugador2");
const display = document.querySelector("#resultado");

const botonIniciar = document.createElement("button");
botonIniciar.textContent = "INICIAR JUEGO";
botonIniciar.addEventListener("click", () => {
  iniciarJuego();
  puntoJugador1.disabled = false;
  puntoJugador2.disabled = false;
  botonIniciar.remove();
  display.textContent = resultado();
});
display.appendChild(botonIniciar);

function mostrarResultado(jugador) {
  try {
    const feedback = puntoJugador(jugador);
    console.log(feedback);
    display.textContent = resultado();
  } catch (error) {
    // console.log(error.name, error.message);
    if (error instanceof ErrorPersonalizado) {
      display.textContent = error.datosExtra + " " + error.message;
      return;
    }
    display.textContent = error.message;
  }
}

puntoJugador1.addEventListener("click", () => {
  mostrarResultado(1);
});
puntoJugador2.addEventListener("click", () => {
  mostrarResultado(2);
});

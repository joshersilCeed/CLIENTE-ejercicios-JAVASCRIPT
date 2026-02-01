// Construye un módulo para mantener la puntuación de un juego en un partido de tenis.
// El módulo exportará tres funciones:
// • iniciarJuego(): Inicializa la puntuación del juego.
// • puntoJugador(jugador): Indica que uno de los jugadores ha ganado el punto. Si el juego
// había finalizado, lanzará una excepción. El parámetro jugador será 1 para el primer jugador y
// 2 para el segundo. Si se pasa un número de jugador diferente lanzará una excepción con el
// mensaje ‘Jugador inválido’. Si el juego había finalizado se lanzará la excepción ‘El
// juego ya ha finalizado’.
// • resultado(): Devuelve una cadena indicando el resultado actual del juego. Según el caso
// debe devolver (atención a las mayúsculas y espacios):
// ◦ Deuce: Deuce
// ◦ Ventaja de un jugador: Ventaja jugador 1
// ◦ En otro caso: Jugador 1: 15 Jugador 2: 40
// La puntuación de un jugador se incrementa cada vez que gana un punto siguiendo la siguiente
// secuencia: 0, 15, 30, 40. Si el jugador tiene una puntuación de 40 y gana el punto, gana el juego.
// Si los dos jugadores tienen 40 puntos se pasa a “deuce”. Quien gane el punto tiene “ventaja”. Si el
// jugador que no tiene ventaja gana el punto, se pasa de nuevo a “deuce”. Si el jugador que tiene
// ventaja gana el punto, ganará el juego.
// Crea dos versiones: una versión que utilize CommonJS y otra versión que utilice módulos ES6 (las
// dos versiones deben estar en el mismo proyecto)

// import { ErrorPersonalizado } from "./error-personalizado";
import { ErrorPersonalizado } from "joshersil-custom-errors";

const puntosJugadores = [0, 0];
const secuenciaPuntos = [0, 15, 30, 40];
const puntosMaximos = secuenciaPuntos[secuenciaPuntos.length - 1];
let ganador = -1;
let ventajaDeuce = -1;

export function iniciarJuego() {
  puntosJugadores.fill(0);
}

function declararGanador(indiceJugador) {
  ganador = indiceJugador;
  ventajaDeuce = -1;
  puntosJugadores[indiceJugador] = "Ganador Set";
  return `El jugador ${indiceJugador + 1} ha ganado el punto`;
}

function checkDeuce(indiceJugador, indiceAdversario) {
  if (ventajaDeuce === indiceAdversario) {
    ventajaDeuce = -1;
  } else if (ventajaDeuce === indiceJugador) {
    declararGanador(indiceJugador);
  } else {
    ventajaDeuce = indiceJugador;
  }
  return `El jugador ${indiceJugador + 1} ha ganado el punto`;
}

function sumarPunto(indiceJugador, puntosAnteriores) {
  const indicePuntosAnteriores = secuenciaPuntos.indexOf(puntosAnteriores);
  puntosJugadores[indiceJugador] = secuenciaPuntos[indicePuntosAnteriores + 1];
  return `El jugador ${indiceJugador + 1} ha ganado el punto`;
}

function checkExcepciones(jugador) {
  if (ganador !== -1) {
    // throw new Error("El juego ya ha finalizado");
    throw new ErrorPersonalizado(
      "El juego ya ha finalizado",
      "ErrorJuegoFinalizado",
      "🎉"
    );
  }
  if (![1, 2].includes(jugador)) {
    // throw new Error("Jugador inválido");
    throw new ErrorPersonalizado(
      "Jugador inválido",
      "ErrorJugadorInvalido",
      "❌"
    );
  }
}

export function puntoJugador(jugador) {
  checkExcepciones(jugador);
  const indiceJugador = jugador - 1;
  const indiceAdversario = indiceJugador === 0 ? 1 : 0;

  const puntosAnteriores = puntosJugadores[indiceJugador];
  const puntosAdversario = puntosJugadores[indiceAdversario];

  if (
    puntosAnteriores === puntosMaximos &&
    puntosAdversario === puntosMaximos
  ) {
    return checkDeuce(indiceJugador, indiceAdversario);
  }
  if (puntosAnteriores === puntosMaximos) {
    return declararGanador(indiceJugador);
  }
  return sumarPunto(indiceJugador, puntosAnteriores);
}

export function resultado() {
  if (
    puntosJugadores[0] === puntosMaximos &&
    puntosJugadores[1] === puntosMaximos &&
    ventajaDeuce === -1
  ) {
    return "Deuce: deuce";
  }
  if (ventajaDeuce !== -1) {
    return `Ventaja de un jugador: Ventaja jugador ${ventajaDeuce + 1}`;
  }
  return `Jugador 1: ${puntosJugadores[0]} / Jugador 2: ${puntosJugadores[1]}`;
}

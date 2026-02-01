// Implementa un módulo para jugar al tres en ralla mediante clases y/u objetos. Debe tener una
// función para jugar donde se le indique la posición a jugar. El juego debe recordar el turno, de modo
// que a la hora de jugar sólo se indicará dónde, no quién juega.
// Cuando se introduzca una jugada inválida, el juego lanzará una excepción.
// Debe haber algún método para comprobar si el juego ha finalizado y quién es el ganador, así como
// para imprimir el estado del juego.
// El módulo del tres en ralla no puede imprimir nada por consola.

// var readlineSync = require('readline-sync');
import prompts from "prompts";

const tablero = [];
let turno = "Jugador 1";
let contadorJugadas = 9;
let ganador;

function dibujarTablero() {
  for (const fila of tablero) {
    console.log(fila.join("-"));
  }
}

function comprobarPosicion(posicion) {
  for (let i = 0; i < 3; i++) {
    const posicionEnFila = tablero[i].indexOf(posicion);
    if (posicionEnFila !== -1) {
      return [i, posicionEnFila];
    }
  }
  throw new Error("Posición inválida. Casilla ya ocupada");
}

function cambiarTurno() {
  turno = turno === "Jugador 1" ? "Jugador 2" : "Jugador 1";
}

function esEntero(posicion) {
  const posicionInt = Number.parseInt(posicion);
  if (isNaN(posicionInt)) {
    throw new Error("Posición inválida. Debe introducir un número entero");
  }
}

function esCasillaValida(posicion) {
  if (posicion < 1 || posicion > 9) {
    throw new Error("Posición inválida. Debe estar entre 1 y 9");
  }
}

function comprobarGanador() {
  const marcaJugador = turno === "Jugador 1" ? "X" : "O";
  let aciertosFila;
  for (let i = 0; i < 3; i++) {
    aciertosFila = 0;
    for (let j = 0; j < 3; j++) {
      if (tablero[i][j] === marcaJugador) aciertosFila++;
      if (aciertosFila === 3) {
        ganador = turno;
        return;
      }
    }
  }
}

function jugar(posicion) {
  let posicionEnTablero;
  try {
    esEntero(posicion);
    esCasillaValida(posicion);
    posicionEnTablero = comprobarPosicion(posicion);
  } catch (error) {
    throw new Error(error.message);
  }
  posicion = Number.parseInt(posicion);
  const marcaJugador = turno === "Jugador 1" ? "X" : "O";
  tablero[posicionEnTablero[0]][posicionEnTablero[1]] = marcaJugador;
  contadorJugadas--;
  comprobarGanador();
  cambiarTurno();
}

let contador = 1;
for (let i = 0; i < 3; i++) {
  tablero[i] = [];
  for (let j = 0; j < 3; j++) {
    tablero[i][j] = contador;
    contador++;
  }
}

while (contadorJugadas > 0 && !ganador) {
  dibujarTablero();
  console.log("Turno: " + turno.toUpperCase() + " *********");
  //   const posicion = readlineSync.question("Elige posición: ");
  const { posicion } = await prompts({
    type: "number",
    name: "posicion",
    message: "Elige posición:",
  });
  try {
    jugar(posicion);
  } catch (error) {
    console.log(error.message);
  }
}
if (ganador) {
  console.log("Ha ganado: " + ganador);
}
console.log("Juego finalizado:");
dibujarTablero();

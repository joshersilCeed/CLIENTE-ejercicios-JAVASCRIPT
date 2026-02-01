// Implementa un módulo para jugar al tres en ralla mediante clases y/u objetos. Debe tener una
// función para jugar donde se le indique la posición a jugar. El juego debe recordar el turno, de modo
// que a la hora de jugar sólo se indicará dónde, no quién juega.
// Cuando se introduzca una jugada inválida, el juego lanzará una excepción.
// Debe haber algún método para comprobar si el juego ha finalizado y quién es el ganador, así como
// para imprimir el estado del juego.
// El módulo del tres en ralla no puede imprimir nada por consola.

// var readlineSync = require('readline-sync');
import prompts from "prompts";
import { TresEnRaya } from "./03-modulo.js";

const tresEnRaya = new TresEnRaya([], "Jugador 1", 9, undefined);

while (!tresEnRaya.haFinalizado()) {
  console.log(tresEnRaya.dibujarTablero());
  console.log("Turno: " + tresEnRaya.turno.toUpperCase() + " *********");
  // eslint-disable-next-line no-await-in-loop
  const { posicion } = await prompts({
    type: "number",
    name: "posicion",
    message: "Elige posición:",
  });
  try {
    tresEnRaya.jugar(posicion);
  } catch (error) {
    console.log(error.message);
  }
}
if (tresEnRaya.ganador) {
  console.log("Ha ganado: " + tresEnRaya.ganador);
}
console.log("Juego finalizado:");
console.log(tresEnRaya.dibujarTablero());

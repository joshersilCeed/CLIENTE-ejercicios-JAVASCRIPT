const puntosJugadores = [0, 0];
const secuenciaPuntos = [0, 15, 30, 40];
const puntosMaximos = secuenciaPuntos[secuenciaPuntos.length - 1];
let ganador = -1;
let ventajaDeuce = -1;

function iniciarJuego() {
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
    throw new Error("El juego ya ha finalizado");
  }
  if (![1, 2].includes(jugador)) {
    throw new Error("Jugador inválido");
  }
}

function puntoJugador(jugador) {
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

function resultado() {
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

module.exports = {
  iniciarJuego,
  puntoJugador,
  resultado,
};

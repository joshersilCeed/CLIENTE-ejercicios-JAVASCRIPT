export class TresEnRaya {
  //   const tablero = [];
  // let turno = "Jugador 1";
  // let contadorJugadas = 9;
  // let ganador;
  constructor(tablero, turno, contadorJugadas, ganador) {
    this.tablero = tablero;
    this.turno = turno;
    this.contadorJugadas = contadorJugadas;
    this.ganador = ganador;
    this.iniciarTablero();
  }

  iniciarTablero() {
    let contador = 1;
    for (let i = 0; i < 3; i++) {
      this.tablero[i] = [];
      for (let j = 0; j < 3; j++) {
        this.tablero[i][j] = contador;
        contador++;
      }
    }
  }

  dibujarTablero() {
    let respuesta = "";
    for (const fila of this.tablero) {
      // console.log(fila.join("-"));
      respuesta += fila.join("-") + "\n";
    }
    return respuesta;
  }

  comprobarPosicion(posicion) {
    for (let i = 0; i < 3; i++) {
      const posicionEnFila = this.tablero[i].indexOf(posicion);
      if (posicionEnFila !== -1) {
        return [i, posicionEnFila];
      }
    }
    throw new Error("Posición inválida. Casilla ya ocupada");
  }

  cambiarTurno() {
    this.turno = this.turno === "Jugador 1" ? "Jugador 2" : "Jugador 1";
  }

  esEntero(posicion) {
    const posicionInt = Number.parseInt(posicion);
    if (isNaN(posicionInt)) {
      throw new Error("Posición inválida. Debe introducir un número entero");
    }
  }

  esCasillaValida(posicion) {
    if (posicion < 1 || posicion > 9) {
      throw new Error("Posición inválida. Debe estar entre 1 y 9");
    }
  }

  // eslint-disable-next-line complexity
  comprobarGanador() {
    const marcaJugador = this.turno === "Jugador 1" ? "X" : "O";
    let aciertosFila;
    for (let i = 0; i < 3; i++) {
      aciertosFila = 0;
      for (let j = 0; j < 3; j++) {
        if (this.tablero[i][j] === marcaJugador) aciertosFila++;
        if (aciertosFila === 3) {
          this.ganador = this.turno;
          return;
        }
      }
    }
  }

  haFinalizado() {
    if (this.contadorJugadas === 0 || this.ganador) return true;
    return false;
  }

  jugar(posicion) {
    let posicionEnTablero;
    try {
      this.esEntero(posicion);
      this.esCasillaValida(posicion);
      posicionEnTablero = this.comprobarPosicion(posicion);
    } catch (error) {
      throw new Error(error.message);
    }
    posicion = Number.parseInt(posicion);
    const marcaJugador = this.turno === "Jugador 1" ? "X" : "O";
    this.tablero[posicionEnTablero[0]][posicionEnTablero[1]] = marcaJugador;
    this.contadorJugadas--;
    this.comprobarGanador();
    this.cambiarTurno();
  }
}

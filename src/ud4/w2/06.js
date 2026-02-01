// En una estación espacial en forma de anillo han comprado unos cuantos aspiradores automáticos
// para ayudarles mantener la limpieza.
// La estación está dividida en N x M casillas. Los aspiradores se mueven en línea recta por turnos,
// avanzando una casilla cada turno. Ten en cuenta que la estación es cilíndrica, así que cuando los
// aspiradores se “salen” por la derecha vuelven a “entrar” por la izquierda y viceversa; lo mismo
// sucede arriba y abajo.
// En un momento dado puede coincidir más de un aspirador en una casilla. Se considera entonces
// que han chocado. Cuando sucede esto, los aspiradores reaccionarán de diferentes maneras:
// • Si el aspirador es ruso, al chocar con un obstáculo girará a la izquierda
// • Si el aspirador es estadounidense, girará a la derecha
// • Si el aspirador es europeo esperará dos turnos a recibir instrucciones de la central y luego
// cambiará de dirección aleatoriamente
// • China no ha participado —tiene su propia estación espacial— pero ha hecho todos los
// aspiradores.
// Implementa un simulador de limpieza de la estación que indice en cada momento dónde están los
// robots.
// Bonus: registra qué partes de la estación se han limpiado ya y detén los robots cuando toda la
// estación esté limpia.

class AspirarEstacion {
  constructor(aspiradores = [], anchoTablero = 0, altoTablero = 0) {
    this.aspiradores = aspiradores;
    this.anchoTablero = anchoTablero;
    this.altoTablero = altoTablero;
    this.tableroLimpieza = this.iniciarTablero();
    this.tableroAspiradores = [];
    this.turno = this.iniciarTurno();
    this.iniciarAspiradores();
    this.finalizado = false;
  }
  iniciarTablero() {
    const tablero = [];
    for (let i = 0; i < this.altoTablero; i++) {
      tablero[i] = [];
      for (let j = 0; j < this.anchoTablero; j++) {
        tablero[i][j] = "_";
      }
    }
    return tablero;
  }
  colocarAspirador(aspirador) {
    let letra = aspirador.tipo.charAt(0).toUpperCase();
    const x = aspirador.posicion[0];
    const y = aspirador.posicion[1];

    this.tableroLimpieza[y][x] = "X";
    this.tableroAspiradores[y][x] = letra;
  }
  iniciarTurno() {
    if (!this.aspiradores.length) {
      throw new Error("ERROR: no hay aspiradores para limpiar");
    }
    const ultimaPosicion = this.aspiradores.length - 1;
    return this.aspiradores[ultimaPosicion];
  }
  iniciarAspiradores() {
    if (!this.aspiradores.length) {
      throw new Error("ERROR: no hay aspiradores para limpiar");
    }
    // this.tableroAspiradores = structuredClone(this.tableroLimpieza);
    this.tableroAspiradores = JSON.parse(JSON.stringify(this.tableroLimpieza));
    for (const aspirador of this.aspiradores) {
      this.colocarAspirador(aspirador);
    }
  }
  cambiarTurno() {
    const ultimaPosicion = this.aspiradores.length - 1;
    const posicionAspirador = this.aspiradores.indexOf(this.turno);
    if (posicionAspirador === ultimaPosicion) {
      this.turno = this.aspiradores[0];
    } else {
      this.turno = this.aspiradores[posicionAspirador + 1];
    }
  }
  moverArriba(y) {
    if (y === 0) {
      y = this.altoTablero - 1;
    } else {
      y--;
    }
    return y;
  }
  moverDerecha(x) {
    if (x === this.anchoTablero - 1) {
      x = 0;
    } else {
      x++;
    }
    return x;
  }
  moverAbajo(y) {
    if (y === this.altoTablero - 1) {
      y = 0;
    } else {
      y++;
    }
    return y;
  }
  moverIzquierda(x) {
    if (x === 0) {
      x = this.anchoTablero - 1;
    } else {
      x--;
    }
    return x;
  }
  moverAspirador(direccion, x, y) {
    this.tableroAspiradores[y][x] = "X";
    switch (direccion) {
      case "arriba":
        y = this.moverArriba(y);
        break;
      case "derecha":
        x = this.moverDerecha(x);
        break;
      case "abajo":
        y = this.moverAbajo(y);
        break;
      case "izquierda":
        x = this.moverIzquierda(x);
        break;
      default:
        break;
    }
    return [x, y];
  }
  haChocado([x, y]) {
    if (
      this.tableroAspiradores[y][x] !== "_" &&
      this.tableroAspiradores[y][x] !== "X"
    ) {
      return true;
    }
    return false;
  }
  movimientoAspirador() {
    this.cambiarTurno();
    const aspirador = this.turno;
    if (aspirador.espera) {
      aspirador.espera--;
      return this.dibujarTablero();
    }
    const nuevaPosicion = this.moverAspirador(
      aspirador.direccion,
      aspirador.posicion[0],
      aspirador.posicion[1]
    );
    if (this.haChocado(nuevaPosicion)) {
      console.log("ha chocado");
      aspirador.choque();
    } else {
      aspirador.posicion[0] = nuevaPosicion[0];
      aspirador.posicion[1] = nuevaPosicion[1];
    }
    this.colocarAspirador(aspirador);

    return this.dibujarTablero();
  }
  comprobarFinalizado() {
    for (let i = 0; i < this.altoTablero; i++) {
      for (let j = 0; j < this.anchoTablero; j++) {
        if (this.tableroLimpieza[i][j] !== "X") {
          return;
        }
      }
    }
    this.finalizado = true;
  }
  dibujarTablero() {
    let salida = "";
    for (let i = 0; i < this.altoTablero; i++) {
      for (let j = 0; j < this.anchoTablero; j++) {
        salida += this.tableroAspiradores[i][j] + " ";
      }
      salida += "\n";
    }
    return salida;
  }
}

class Aspirador {
  constructor(posicion, direccion, tipo) {
    this.posicion = posicion;
    this.direccion = direccion;
    this.tipo = tipo;
    this.espera = 0;
  }
}
class AspiradorRuso extends Aspirador {
  constructor(posicion, direccion) {
    super(posicion, direccion, "ruso");
  }
  choque() {
    const direccionesPosibles = ["arriba", "derecha", "abajo", "izquierda"];
    const indiceDireccion = direccionesPosibles.indexOf(this.direccion);
    if (indiceDireccion === 0) {
      this.direccion = direccionesPosibles[direccionesPosibles.length - 1];
    } else {
      this.direccion = direccionesPosibles[indiceDireccion - 1];
    }
  }
}
class AspiradorUSA extends Aspirador {
  constructor(posicion, direccion) {
    super(posicion, direccion, "usa");
  }
  choque() {
    const direccionesPosibles = ["arriba", "derecha", "abajo", "izquierda"];
    const indiceDireccion = direccionesPosibles.indexOf(this.direccion);
    if (indiceDireccion === direccionesPosibles.length - 1) {
      this.direccion = direccionesPosibles[0];
    } else {
      this.direccion = direccionesPosibles[indiceDireccion + 1];
    }
  }
}
class AspiradorEU extends Aspirador {
  constructor(posicion, direccion) {
    super(posicion, direccion, "eu");
  }
  choque() {
    this.espera = 2;
    const aleatorio = Math.floor(Math.random() * 4);
    switch (aleatorio) {
      case 0:
        this.direccion = "arriba";
        break;
      case 1:
        this.direccion = "derecha";
        break;
      case 2:
        this.direccion = "abajo";
        break;
      case 3:
        this.direccion = "izquierda";
        break;
      default:
        break;
    }
  }
}

const aspiradorRuso1 = new AspiradorRuso([0, 0], "derecha");
const aspiradorUSA1 = new AspiradorUSA([2, 0], "izquierda");
const aspiradorEU1 = new AspiradorEU([0, 2], "arriba");

const aspirar1 = new AspirarEstacion(
  [aspiradorRuso1, aspiradorUSA1, aspiradorEU1],
  3,
  3
);
console.log(aspirar1.dibujarTablero());
// console.log(aspirar1.movimientoAspirador());
// console.log(aspirar1.movimientoAspirador());
// console.log(aspirar1.movimientoAspirador());
// console.log(aspirar1.movimientoAspirador());
// console.log(aspirar1.movimientoAspirador()); //choque
// eslint-disable-next-line no-undef
const intervalo = setInterval(() => {
  console.log(aspirar1.movimientoAspirador());
  aspirar1.comprobarFinalizado();
  if (aspirar1.finalizado) {
    console.log("Limpieza finalizada");
    // eslint-disable-next-line no-undef
    clearInterval(intervalo);
  }
}, 100);

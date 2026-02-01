// Crea un mini-procesador de textos. El procesador de textos debe admitir párrafos que pueden
// estar justificados al centro, a la izquierda o a la derecha.
// Dado un ancho en caracteres debe generar un array de cadenas donde cada elemento será una
// cadena que tendrá como longitud el ancho en caracteres dado, completando con espacios para
// justificar.
// Por ejemplo, dados estos párrafos:
// • Párrafo 1: “Tres tigres blancos”, justificado izquierda
// • Párrafo 2: “Comían”, justificado centro
// • Párrafo 2: “El trigal”, justificado derecha
// La salida con ancho 15 sería (la primera línea es para contar los caracteres):
// 123456789012345
// Tres·tigres····
// blancos········
// ·····Comían ···
// ······El trigal
// Si hay una palabra más larga que el ancho dado puedes partirla por donde quieras. En la tercera
// línea el espacio de más tiene que estar al principio.

class Texto {
  constructor(numeroEspacios, parrafos) {
    this.numeroEspacios = numeroEspacios;
    this.parrafos = parrafos;
    this.separarParrafosLargos();
  }
  getCabecera() {
    let contador = 0;
    const cabecera = [];
    for (let i = 0; i < this.numeroEspacios; i++) {
      if (contador === 9) contador = 0;
      cabecera.push(contador);
      contador++;
    }
    return cabecera.join("");
  }
  aplicarJustificado(texto, justificado) {
    let salida;
    let espaciosVacios = this.numeroEspacios - texto.length;
    if (espaciosVacios < 0) espaciosVacios = 0;
    const puntos = ".".repeat(espaciosVacios);
    switch (justificado) {
      case "izquierda":
        salida = texto + puntos;
        break;
      case "centro":
        let mitadEspacios = espaciosVacios / 2;
        mitadEspacios = Number.parseInt(mitadEspacios);
        const sobrante = espaciosVacios % 2;
        const puntosIzqda = ".".repeat(mitadEspacios) + ".".repeat(sobrante);
        const puntosDcha = ".".repeat(mitadEspacios);
        salida = puntosIzqda + texto + puntosDcha;
        break;
      case "derecha":
        salida = puntos + texto;
        break;
      default:
        break;
    }
    return salida;
  }
  separarParrafosLargos() {
    const parrafosNuevos = [];
    for (const indice in this.parrafos) {
      const parrafo = this.parrafos[indice];
      let texto = parrafo.texto;
      const longitudTexto = texto.length;
      const justificado = parrafo.justificado;
      if (longitudTexto > this.numeroEspacios) {
        let contador = 0;
        while (contador < longitudTexto) {
          parrafosNuevos.push({
            texto: texto.slice(0, this.numeroEspacios),
            justificado,
          });
          contador += this.numeroEspacios;
          texto = texto.slice(this.numeroEspacios);
        }
      } else {
        parrafosNuevos.push(parrafo);
      }
    }
    this.parrafos = parrafosNuevos;
  }
  generarTexto() {
    let salida = "";
    for (const parrafo of this.parrafos) {
      // let salida = "";
      const texto = parrafo.texto;
      const justificado = parrafo.justificado;
      salida += this.aplicarJustificado(texto, justificado) + "\n";
    }
    return salida;
  }
}

const parrafo1 = {
  texto: "Tres tigres blancos",
  justificado: "izquierda",
};
const parrafo2 = {
  texto: "Comían",
  justificado: "centro",
};
const parrafo3 = {
  texto: "El trigal",
  justificado: "derecha",
};
const parrafo4 = {
  texto: "Y después",
  justificado: "izquierda",
};
const parrafo5 = {
  texto: "Y uno se fue a dormir y se levantó, y dijo: voy a dormir otra vez",
  justificado: "derecha",
};

const texto1 = new Texto(15, [
  parrafo1,
  parrafo2,
  parrafo3,
  parrafo4,
  parrafo5,
]);
console.log(texto1.getCabecera());
console.log(texto1.generarTexto());

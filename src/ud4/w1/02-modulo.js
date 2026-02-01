export class Gato {
  constructor(hambre, cansancio, felicidad) {
    this.hambre = hambre;
    this.cansancio = cansancio;
    this.felicidad = felicidad;
  }

  #obtenerAleatorio(max = 5) {
    return Math.ceil(Math.random() * max);
  }
  alimentar() {
    this.hambre = Math.max(0, this.hambre - this.#obtenerAleatorio());
  }
  dormir() {
    this.cansancio = Math.max(0, this.cansancio - this.#obtenerAleatorio());
  }
  jugar() {
    this.felicidad += this.#obtenerAleatorio();
  }
  estado() {
    return `Hambre: ${this.hambre} / Cansancio: ${this.cansancio} / Felicidad: ${this.felicidad}`;
  }
  tiempoPasado(milisegundos) {
    const contador = Math.floor(milisegundos / 1000);
    this.hambre += contador;
    this.cansancio += contador;
    this.felicidad -= contador;
  }
}

// Construye un programa que te permita crear gatos virtuales.
// Los gatos virtuales deben tener tres propiedades: hambre, cansancio y felicidad. Crea métodos
// para alimentar al gato, ponerlo a dormir y jugar con él. Debe haber un método que imprima el
// estado del gato. Crea también otro método para indicarle el paso del tiempo (debe admitir un
// parámetro que serán los milisegundos de tiempo que han pasado)
// El hambre y el cansancio se incrementan con el tiempo y se incrementan al comer y dormir. La
// felicidad se decrementa con el tiempo y aumenta al jugar. En las funciones debe haber cierta
// aleatoriedad, la puedes generar con Math.random()
// Ten en cuenta que el gato no debe imprimir nada por consola: puedes preparar código que “use”
// el gato y muestre sus propiedades, pero eso no formará parte del gato.
// Recuerda utilizar módulos.

import { Gato } from "./02-modulo.js";

let inicio = Date.now();
const gato1 = new Gato(7, 5, 5);
gato1.alimentar();
gato1.dormir();
gato1.jugar();
console.log(gato1.estado());
// eslint-disable-next-line no-undef
setTimeout(() => {
  const fin = Date.now();
  const tiempoPasado = fin - inicio;
  gato1.tiempoPasado(tiempoPasado);
  inicio = fin;
  console.log(gato1.estado());
}, 3000);

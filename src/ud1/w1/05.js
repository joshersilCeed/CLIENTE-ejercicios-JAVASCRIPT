// Prepara un programa que construya una matriz de veinte números aleatorios entre 0 y 10. Una vez
// construida dicha matriz, el programa debe calcular cual es la moda.
// Para obtener un número aleatorio entre 0 y 10 puedes utilizar el siguiente código:
// Math.floor(Math.random() * 10);
// Puedes consultar cómo se calcula la moda en este
// enlace:https://www.disfrutalasmatematicas.com/datos/moda.html
// Un ejemplo de ejecución del programa sería:
// [ 1, 2, 4, 5, 4 ,4 ,4 ,4 ,4 ,4 ,0 ,7, 8, 4 ,9, 7, 3, 3, 1, 0]
// Moda: 4

function getArrayAleatorio() {
  let arrayAleatorio = [];
  for (let i = 0; i < 20; i++) {
    arrayAleatorio.push(Math.floor(Math.random() * 11));
  }
  return arrayAleatorio;
}

function calcularModa(arrayAleatorio) {
  let arrayRepeticiones = new Array(11).fill(0);
  for (const numero of arrayAleatorio) {
    arrayRepeticiones[numero]++;
  }
  // console.log("\n" + arrayRepeticiones.join(", "));
  // let numeroMayor = 0;
  // for (const numeroRepeticiones of arrayRepeticiones) {
  //   if (numeroRepeticiones > numeroMayor) {
  //     numeroMayor = numeroRepeticiones;
  //   }
  // }
  const numeroMayor = Math.max(...arrayRepeticiones);

  let moda = [];
  for (let i = 0; i < arrayRepeticiones.length; i++) {
    const numeroRepeticiones = arrayRepeticiones[i];
    if (numeroRepeticiones === numeroMayor) {
      moda.push(i);
    }
  }
  return moda;
}

const arrayAleatorio = getArrayAleatorio();
console.log("Moda del array: " + arrayAleatorio.join(", "));
const moda = calcularModa(arrayAleatorio);
console.log("\nEs: " + moda.join(", "));

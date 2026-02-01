// En un almacén, tenemos estanterías con una capacidad máxima de peso. Llega un camión con N paquetes, cada uno con un peso. ¿Qué algoritmo usarías para decidir cómo colocar los paquetes en las estanterías sin superar la capacidad de cada una?

/**
 * Genera un array de pesos aleatorios para los paquetes.
 * @param {number} numPaquetes - Número de paquetes a generar.
 * @param {number} pesoMaximo - Peso máximo posible para cada paquete.
 * @returns {number[]} Array con los pesos de los paquetes generados.
 */
function generarPaquetesAleatorios(numPaquetes, pesoMaximo) {
  let paquetesAleatorios = [];
  for (let i = 0; i < numPaquetes; i++) {
    paquetesAleatorios.push(Math.floor(Math.random() * pesoMaximo + 1));
  }
  return paquetesAleatorios;
}

/**
 * Reparte los paquetes en las estanterías
 * @param {number[]} estanterias - Array con la capacidad máxima de cada estanteria
 * @param {number[]} paquetes - Array con los pesos de los paquetes a repartir.
 * @returns {number[][]} Array de arrays, donde cada subarray contiene los paquetes asignados a cada estantería.
 */
function repartirEnEstanterias(estanterias, paquetes) {
  const pesoMaximoEstanterias = [...estanterias];
  paquetes.sort((a, b) => a - b);
  console.log("\n" + "Paquetes ordenados (peso en kg): " + paquetes.join(", "));
  let repartoPorEstanterias = new Array(estanterias.length);
  for (let i = 0; i < repartoPorEstanterias.length; i++) {
    repartoPorEstanterias[i] = [];
  }

  while (true) {
    const estanteriaConMenosPeso = Math.max(...estanterias);
    const indiceMenosPeso = estanterias.indexOf(estanteriaConMenosPeso);
    if (estanterias[indiceMenosPeso] - paquetes[0] <= 0) {
      /*console.log("\n" + "La estantería ya no puede albergar más carga");*/
      break;
    } else {
      repartoPorEstanterias[indiceMenosPeso].push(paquetes[0]);
      estanterias[indiceMenosPeso] -= paquetes[0];
      paquetes.shift();
    }
  }
  console.log(
    "\n" +
      "Peso de los paquetes que no se han podido guardar: " +
      paquetes.join(", ")
  );
  let pesoDeCadaEstanteria = new Array(estanterias.length);
  for (let i = 0; i < estanterias.length; i++) {
    pesoDeCadaEstanteria[i] = pesoMaximoEstanterias[i] - estanterias[i];
  }
  console.log(
    "\n" + "Peso de cada estanteria: " + pesoDeCadaEstanteria.join(", ")
  );
  return repartoPorEstanterias;
}

/* Por ej. disponemos de 10 estanterias, con un peso máximo de carga de 100kg cada una */
const estanterias = new Array(10).fill(100);

/* Generamos 40 paquetes de un peso máximo de 50kg cada uno */
let paquetes = generarPaquetesAleatorios(40, 50);

/* Repartimos los paquetes en las diferentes estanterías, sin superar la capacidad máxima de cada una. Los paquetes se asignan intentando aprovechar al máximo el espacio disponible. */
const repartoPorEstanterias = repartirEnEstanterias(estanterias, paquetes);
console.log(
  "\n" +
    "******* RESULTADO: EL REPARTO POR ESTANTERÍAS ES EL SIGUIENTE: *********"
);
console.log(repartoPorEstanterias);

// Crea una función llamada fizz() que devuelva si un número es divisible por 3 o contiene un 3.
// Sin embargo, debe devolver ese resultado al cabo de un tiempo aleatorio entre 100 y 10.000 ms
// (puedes reducir este número mientras estás probando el ejercicio)
// Imprime los números del 1 al 300. Si fizz() devuelve false debes imprimir el número. Si
// fizz() devuelve true, debes imprimir “fizz” en lugar del número.
// Debes imprimir los números en orden pero tan rápido como puedas.

const numeroInicial = 1;
const numeroFinal = 300;
const longitud = numeroFinal + 1 - numeroInicial;
const resultados = [];
let indiceExaminado = 0;

function fizz(numero) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(numero % 3 === 0 || numero.toString().includes("3"));
    }, Math.random() * (10000 - 100) + 100);
  });
}

function imprimirResultados() {
  while (resultados[indiceExaminado]) {
    console.log(resultados[indiceExaminado]);
    if (indiceExaminado === longitud - 1) {
      console.log("Terminado");
    }
    indiceExaminado++;
  }
}

for (let i = 0; i < longitud; i++) {
  const numeroExaminado = i + numeroInicial;
  fizz(numeroExaminado).then((esFizz) => {
    const resultado = esFizz ? "fizz" : numeroExaminado;
    resultados[i] = resultado;
    imprimirResultados();
  });
}

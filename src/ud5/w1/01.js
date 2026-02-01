// Modifica la función mergeValues para que sea una función pura.

// function mergeValues(arrayOfIntegers) {
//   let resultado = [...arrayOfIntegers];
//   let element;
//   let sum = 0;
//   while ((element = resultado.pop())) {
//     sum += element;
//   }
//   sum = Math.max(sum, MINIMUM);
//   resultado.push(sum);
//   return resultado;
// }

function mergeValues2(arrayOfIntegers) {
  const MINIMUM = 15;
  const suma = arrayOfIntegers.reduce(
    (acumulador, numero) => acumulador + numero,
    0
  );

  const resultado = Math.max(suma, MINIMUM);
  return [resultado];
}
const miArray = [10, 20, 30, 40];
console.log("Antes:", miArray);
console.log("Resultado:", mergeValues2(miArray)); // [100]
console.log("Después:", miArray);
console.log("\n");

const miArray2 = [1, 2, 3, 4];
console.log("Antes:", miArray2);
console.log("Resultado:", mergeValues2(miArray2)); // [15] (MINIMUM)
console.log("Antes:", miArray2);

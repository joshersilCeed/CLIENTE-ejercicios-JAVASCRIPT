// Escribe una función combineArrays que, usando el operador spread, reciba dos arrays como
// parámetros y devuelva un array con el contenido de ambos arrays: primero el segundo y después el
// primero.
// Por ejemplo:
// combineArrays([1,2], [3,4]) => [3,4,1,2]

function combineArrays(...arrays) {
  // console.log(arrays.reverse().flat());
  let combinacion = [];
  for (let i = arrays.length - 1; i >= 0; i--) {
    const array = arrays[i];
    // for (const element of array) {
    //   combinacion.push(element);
    // }
    combinacion.push(...array);
  }
  return combinacion;
}

const combinacion = combineArrays([1, 2], [3, 4]);
console.log("Array combinado:");
console.log(combinacion);

// Implementa una función map(array, funcion) que reciba un array y aplique la función a
// cada elemento, devolviendo un nuevo array.
// No puedes usar bucles de ningún tipo ni las funciones forEach o map de los arrays
// Por ejemplo:
// map([1,2,3], x => x * 2) // [2,4,6]

function map(array, fn) {
  if (!array.length) return [];
  let primerElem = array[0];
  primerElem = fn(primerElem);
  const restoElems = array.slice(1);
  const resultado = [primerElem, ...map(restoElems, fn)];
  return resultado;
}

const arrayConvertido = map([1, 2, 3], (x) => x * 2);
console.log(arrayConvertido);

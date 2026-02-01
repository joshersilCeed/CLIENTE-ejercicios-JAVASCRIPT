// Crea una función llamada doublePipe que admita un número variable de funciones y devuelva
// una función nueva que aplique esas funciones en el mismo orden en que se han pasado, pero
// aplicando dos veces cada una de las funciones.
// Por ejemplo:
// function double(x) { return x*2 }
// function add3(x) { return x+3 }
// let multiplyPerFourAndAddSix = doublePipe(double, add3)
// console.log(multiplyPerFourAndAddSix(10)) // 46 = (10*2*2+3+3)
// let addSixAndMultiplyPerFour = doublePipe(add3, double)
// console.log(addSixAndMultiplyPerFour(10)) // 64 = (10+3+3)*2*2
// Las funciones deben admitir un sólo parámetro.

function doublePipe(...funciones) {
  return function (numero) {
    let contador = numero;
    for (const fn of funciones) {
      contador = fn(contador);
      contador = fn(contador);
    }
    return contador;
  };
}

function double(x) {
  return x * 2;
}
function add3(x) {
  return x + 3;
}
let multiplyPerFourAndAddSix = doublePipe(double, add3);
console.log(multiplyPerFourAndAddSix(10)); //46 = (10*2*2+3+3)
let addSixAndMultiplyPerFour = doublePipe(add3, double);
console.log(addSixAndMultiplyPerFour(10)); // 64 = (10+3+3)*2*2

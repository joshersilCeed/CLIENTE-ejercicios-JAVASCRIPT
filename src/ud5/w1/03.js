// Crea una función llamada lazyMultiply para multiplicar dos números. Si a la función se le
// pasan dos parámetros devolverá inmediatamente la solución. Si a la función se le pasa un único
// parámetro devolverá una función que, al pasarle un segundo parámetro, devolverá el resultado de
// la multiplicación.
// Ejemplos:
// lazyMultiply(7,4) // 28
// const perTwo = lazyMultiply(2)
// perTwo(3) // 6
// lazyMultiply(5)(10) // 50

function lazyMultiply(...numeros) {
  switch (numeros.length) {
    case 2:
      return numeros[0] * numeros[1];
    case 1:
      return function (segundoNumero) {
        return numeros[0] * segundoNumero;
      };

    default:
      return "CASO NO CONTEMPLADO";
  }
}
console.log(lazyMultiply(7, 4)); //28
const perTwo = lazyMultiply(2);
console.log(perTwo(3)); // 6
console.log(lazyMultiply(5)(10)); //50
console.log(lazyMultiply());

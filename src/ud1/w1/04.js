// Escribir un programa que muestre en pantalla los números del 1 al 300 sustituyendo los números que terminen en 3 por la palabra “fizz”, los números que acaben en 5 por “buzz” y los números que acaben en 15 por la palabra “fizzbuzz”.
// Un ejemplo de salida sería:
// 1, 2, fizz, 4, buzz,... , 14, fizzbuzz, 16,...

function cambiarSalida(numero) {
  //   const ultimoDigito = numero.toString().slice(-1);
  if (numero % 100 === 15) return "fizzbuzz";
  if (numero % 10 === 3) return "fizz";
  if (numero % 10 === 5) return "buzz";
  return numero;
}

let salida = [];
for (let i = 1; i <= 300; i++) {
  salida.push(cambiarSalida(i));
}

console.log(salida.join("\n"));

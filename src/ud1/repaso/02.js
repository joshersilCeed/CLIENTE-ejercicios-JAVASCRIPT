// Entrada: 4
// Salida:
// 1 limón, y medio limón
// 2 limones, y medio limón
// 3 limones, y medio limón
// ¡¡¡Y 4 LIMONES Y MEDIO LIMÓN!!!
import prompts from "prompts";
// import readline from "readline";

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// (function introduceNumero() {
//   rl.question("Introduce un número: ", (numero) => {
//     const numeroParseado = parseFloat(numero);
//     if (!Number.isInteger(numeroParseado) || numeroParseado <= 0) {
//       console.log("Debes introducir un número ENTERO MAYOR QUE 0");
//       introduceNumero();
//     } else {
//       console.log("Número introducido: ", numeroParseado);
//       renderizarLimones(numeroParseado);
//       rl.close();
//     }
//   });
// })();

function renderizarLimones(numero) {
  let lineas = "";
  let textoLinea;
  for (let i = 1; i <= numero; i++) {
    if (i === 1) {
      textoLinea = `${i} limón, y medio limón`;
    } else {
      textoLinea = `${i} limones, y medio limón`;
    }
    if (i === numero) {
      textoLinea = "Y " + textoLinea.toUpperCase();
    }
    // console.log(textoLinea);
    lineas += textoLinea + "\n";
  }
  return lineas;
}

function esNumeroValido(input) {
  const numeroParseado = parseFloat(input);
  if (isNaN(numeroParseado)) {
    console.log("ERROR: debes introducir un NÚMERO");
    return false;
  }
  if (numeroParseado != input) {
    console.log("ERROR: debes introducir un número valido");
    return;
  }
  if (!Number.isInteger(numeroParseado) || numeroParseado <= 0) {
    console.log("ERROR: debes introducir un ENTERO mayor que 0");
    return false;
  }
  console.log("input", input);
  return true;
}

let input;
do {
  //eslint-disable-next-line no-await-in-loop
  const resp = await prompts({
    type: "text",
    name: "input",
    message: "Introduce un número:",
  });
  input = resp.input;
} while (!esNumeroValido(input));

const output = renderizarLimones(parseInt(input));
console.log(output);

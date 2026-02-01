// Construye un programa de Inteligencia Artificial que salude correctamente según la hora del día.
// De 7 a 12 dirá “Buenos días”, de 12 a 20 “Buenas tardes”, de 20 a 2 “Buenas noches” y de 2 a 7 de
// la mañana “¿Qué haces despierto a estas horas?”
// Por ejemplo, en el siguiente caso:
// const hora = 15
// El programa diría “Buenas tardes”

/*global prompt*/
/*global alert*/

// (function preguntarHora() {
//   hora = prompt("Indica la hora del día:");
//   hora = parseFloat(hora);
//   if (!Number.isInteger(hora) || hora < 0 || hora > 23) {
//     alert("ERROR: indica únicamente la hora como número entero, del 0 al 23");
//     preguntarHora();
//     return;
//   }
// })();
function esHoraValida(input) {
  let hora = parseInt(input);
  if (isNaN(hora)) {
    console.error("ERROR: debe introducir la hora como ENTERO");
    return false;
  }
  if (input != hora) {
    console.error("ERROR: debe introducir un nùmero entero");
    return false;
  }
  if (hora < 0 || hora > 23) {
    console.error("ERROR: debe introducir de 0-23 horas");
    return false;
  }
  return true;
}

import prompts from "prompts";

let input;
do {
  //eslint-disable-next-line no-await-in-loop
  const resp = await prompts({
    type: "text",
    name: "input",
    message: "Indica la hora del día:",
  });
  input = resp.input;
} while (!esHoraValida(input));

const hora = parseInt(input);
if (hora >= 7 && hora < 12) {
  console.log("Buenos días");
} else if (hora >= 12 && hora < 20) {
  console.log("Buenas tardes");
} else if (hora >= 20 || hora < 2) {
  console.log("Buenas noches");
} else {
  console.log("¿Qué haces despierto a estas horas?");
}

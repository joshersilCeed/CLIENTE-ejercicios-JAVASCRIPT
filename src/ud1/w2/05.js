// Crea un programa que, dado un número, imprima en pantalla una representación de ese número
// en un display LCD utilizando los caracteres — y |.
// Mapeo de cada dígito a su representación LCD (matriz de 5 filas)
const lcdDigits = {
  0: [" - ", "| |", "   ", "| |", " - "],
  1: ["   ", "  |", "   ", "  |", "   "],
  2: [" - ", "  |", " - ", "|  ", " - "],
  3: [" - ", "  |", " - ", "  |", " - "],
  4: ["   ", "| |", " - ", "  |", "   "],
  5: [" - ", "|  ", " - ", "  |", " - "],
  6: [" - ", "|  ", " - ", "| |", " - "],
  7: [" - ", "  |", "   ", "  |", "   "],
  8: [" - ", "| |", " - ", "| |", " - "],
  9: [" - ", "| |", " - ", "  |", " - "],
};

function output(numeroLcd) {
  let resultado = "";
  for (let i = 0; i < 5; i++) {
    let filaLcd = "";
    for (const cifraLcd of numeroLcd) {
      filaLcd += cifraLcd[i];
      filaLcd += "   ";
    }
    filaLcd += "\n";
    resultado += filaLcd;
  }
  return resultado;
}

function lcd(numero) {
  if (isNaN(numero) || !Number.isInteger(numero)) {
    console.log("ERROR: debe introducir un número ENTERO");
    return;
  }
  let numeroLcd = [];
  const numeroString = numero.toString();
  for (let i = 0; i < numeroString.length; i++) {
    const cifraString = numeroString[i];
    numeroLcd.push(lcdDigits[cifraString]);
  }
  return output(numeroLcd);
}

const resultado = lcd(47);
console.log(resultado);

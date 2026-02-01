// El 1 de enero de 2021 fue viernes.
// Prepara un programa que, dado un día y un mes (de 2021) calcule qué día de la semana es.
// Por ejemplo, si el programa tiene de entrada:
// const dia = 10
// const mes = 1
// debería imprimir “Domingo”.

/*global prompt*/
/*global alert*/

const numDiasMeses2021 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const diasSemana = [
  "viernes",
  "sábado",
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
];

function esNumeroValido(numero, maximo) {
  if (!Number.isInteger(numero) || numero < 1 || numero > maximo) {
    return false;
  }
  return true;
}

function preguntarNumeroEntero(enunciado, mes = -1) {
  let numeroMaximo = mes === -1 ? 12 : numDiasMeses2021[mes - 1];
  let numeroIntroducido;
  while (true) {
    numeroIntroducido = prompt(enunciado);
    numeroIntroducido = parseFloat(numeroIntroducido);
    if (!esNumeroValido(numeroIntroducido, numeroMaximo)) {
      alert(
        `ERROR: debe intrudir un número entero entre el 1 y el ${numeroMaximo}`
      );
      continue;
    }
    break;
  }
  return numeroIntroducido;
}

function calcularNumeroDias(mes, dia) {
  let calculoDias = 0;
  for (let i = 0; i < mes - 1; i++) {
    calculoDias += numDiasMeses2021[i];
  }
  calculoDias += dia;
  return calculoDias;
}
let mes = preguntarNumeroEntero("Introduce el mes de 2021", -1);
let dia = preguntarNumeroEntero("Introduce el dia de 2021", mes);

const numeroDias = calcularNumeroDias(mes, dia);
let diaSemana = numeroDias % 7;
diaSemana = diasSemana[diaSemana - 1];

alert(`El ${dia} del mes ${mes} de 2021 fue ${diaSemana}`);

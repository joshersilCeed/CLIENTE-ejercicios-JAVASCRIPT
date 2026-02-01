// Crea una función que permita crear funciones para generar IDs. Las funciones devueltas generarán
// una cadena de la longitud definida cuando se invoquen. La cadena se irá incrementando con cada
// invocación.
// Ejemplos:
// const len3Id = createIDGenerator(3);
// len3Id() // 001
// len3Id() // 002
// len3Id() // 003
// const len5Id = createIDGenerator(5);
// len5Id() // 00001

const registroIds = [];

function procesarIDGenerator(numeroCaracteres) {
  let coincidencia = false;
  let resultado;
  for (const registroId of registroIds) {
    if (registroId.numeroCaracteres === numeroCaracteres) {
      coincidencia = true;
      registroId.contador++;
      resultado = registroId.contador;
    }
  }
  if (!coincidencia) {
    registroIds.push({ numeroCaracteres, contador: 1 });
    resultado = 1;
  }
  resultado = String(resultado).padStart(numeroCaracteres, "0");
  return resultado;
}

function createIDGenerator(numeroCaracteres) {
  return () => procesarIDGenerator(numeroCaracteres);
}

const len3Id = createIDGenerator(3);
console.log(len3Id()); // 001
console.log(len3Id()); // 002
console.log(len3Id()); // 003
const len5Id = createIDGenerator(5);
console.log(len5Id()); // 00001
console.log(len3Id()); // 004

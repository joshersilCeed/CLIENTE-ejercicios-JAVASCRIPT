// Crea una función llamada sumNumbers que acepte un número arbitrario de argumentos (de
// cualquier tipo) y devuelva la suma de los argumentos numéricos.
// Por ejemplo:
// sumNumbers('hola', 2, 3, [10, 20, 30], { value: 300 }) => 5

function getSumaObjeto(objeto) {
  let suma = 0;
  let arrayValores = [];
  if (!Array.isArray(objeto)) {
    arrayValores = Object.values(objeto);
  } else {
    arrayValores = objeto;
  }
  // for (const key in arrayValores) {
  //   const element = arrayValores[key];
  for (const element of arrayValores) {
    if (typeof element === "object") {
      suma += getSumaObjeto(element);
    } else if (typeof element === "number") {
      suma++;
    }
  }
  return suma;
}

function sumNumbers(...args) {
  let suma = 0;
  for (const element of args) {
    if (typeof element === "object") {
      suma += getSumaObjeto(element);
    } else if (typeof element === "number") {
      suma++;
    }
  }
  return suma;
}
const numbers1 = [
  "hola",
  2,
  3,
  [
    10,
    20,
    30,
    { value: 2 },
    [1, { value: 3, valueArray: [2, 10, { value: 3 }] }],
  ],
  {
    value: 300,
  },
];
const suma = sumNumbers(...numbers1);
console.log("Total de argumentos numéricos: " + suma);

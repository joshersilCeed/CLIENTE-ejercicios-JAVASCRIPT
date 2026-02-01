// Crea un programa que calcule el cambio a devolver. El programa tendrá como entrada una lista de
// monedas/billetes disponibles y la cantidad a devolver. Como salida, devolverá el cambio a utilizar
// Entrada
// Monedas disponibles: [ 0.10, 0.50, 1, 2, 5]
// Cambio a devolver: 9.50
// Resultado: 0.50x1, 2x2, 1x5

// const monedasDisponibles = [0.1, 0.5, 1, 2, 5];
// const cantidadMonedasDevueltas = [0, 0, 0, 0, 0];

const monedasCambio = [
  {
    moneda: 0.1,
    cantidadDevuelta: 0,
  },
  {
    moneda: 0.5,
    cantidadDevuelta: 0,
  },
  {
    moneda: 1,
    cantidadDevuelta: 0,
  },
  {
    moneda: 2,
    cantidadDevuelta: 0,
  },
  {
    moneda: 5,
    cantidadDevuelta: 0,
  },
];

const cambioADevolver = 11.6;
console.log("CAMBIO A DEVOLVER: " + cambioADevolver);
let importeRestante = cambioADevolver;

for (let i = monedasCambio.length - 1; i >= 0; i--) {
  while (importeRestante >= monedasCambio[i].moneda) {
    importeRestante = (importeRestante - monedasCambio[i].moneda).toFixed(2);
    monedasCambio[i].cantidadDevuelta++;
    // console.log(importeRestante);
  }
}

let resultado = [];
for (let i = 0; i < monedasCambio.length; i++) {
  if (monedasCambio[i].cantidadDevuelta > 0) {
    resultado.push(
      `${monedasCambio[i].moneda}x${monedasCambio[i].cantidadDevuelta}`
    );
  }
}
console.log("Resultado: " + resultado.join(", "));

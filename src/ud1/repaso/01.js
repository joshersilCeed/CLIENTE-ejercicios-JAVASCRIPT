// Dada una serie de números, dividirla en dos series diferentes: una con los números más grandes y
// otra con los números más pequeños.
// Serie: 1, 5 ,8,40, 100, -3, 2.5, 3000
// Salida
// Pequeños: -3, 1, 2.5, 5
// Grandes: 8, 40, 100, 3000
const serie = [1, 5, 8, 40, 100, -3, 2.5, 3000];
console.log("Serie: " + serie.join(", "));
serie.sort((b, a) => {
  return b - a;
});
const posicionCentralArray = Math.ceil(serie.length / 2);
const serie1 = serie.slice(0, posicionCentralArray);
console.log("Pequeños: " + serie1.join(", "));
const serie2 = serie.slice(posicionCentralArray, serie.length);
console.log("Grandes: " + serie2.join(", "));

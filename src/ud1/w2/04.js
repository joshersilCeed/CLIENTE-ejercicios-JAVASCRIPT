// Crea una función diamante que cree un diamante con todas las letras hasta la letra pasada como
// parámetro. Es suficiente con que funcione con letras mayúsculas. No hace falta que hagas
// validaciones sobre parámetros.
// Por ejemplo:
// diamante('C')
// --A--
// -B-B-
// C---C
// -B-B-
// --A--

//prettier-ignore
const letrasAbecedario = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];

function diamante(letra) {
  const indiceLetraAbecedario = letrasAbecedario.indexOf(letra);
  const numeroEspacios = (indiceLetraAbecedario + 1) * 2 - 1;
  let diamante = [];
  let posIzdaLetra;
  let posDchaLetra;
  let posLetraPintada;
  for (let i = 0; i < numeroEspacios; i++) {
    diamante[i] = new Array(numeroEspacios).fill("-");
    if (i === 0) {
      posIzdaLetra = indiceLetraAbecedario;
      posDchaLetra = indiceLetraAbecedario;
      posLetraPintada = i;
    } else if (i <= indiceLetraAbecedario) {
      posIzdaLetra--;
      posDchaLetra++;
      posLetraPintada++;
    } else {
      posIzdaLetra++;
      posDchaLetra--;
      posLetraPintada--;
    }
    diamante[i][posIzdaLetra] = letrasAbecedario[posLetraPintada];
    diamante[i][posDchaLetra] = letrasAbecedario[posLetraPintada];
  }
  return diamante;
}
const arrayDiamante = diamante("Z");
for (const fila of arrayDiamante) {
  console.log(fila.join(""));
}

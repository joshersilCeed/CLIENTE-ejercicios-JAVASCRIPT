// Prepara un código JavaScript que, añadido a una página web, genere una tabla de contenido a  partir de las etiquetas <h1>, <h2>...<h6> El índice lo generará dentro de una etiqueta <pre>, añadiendo espacios para que quede identado.
// El resultado de este ejercicio debería ser una página html con el script, pero el script ha de ser genérico y debería poder funcionar en cualquier otra página.
// Por ejemplo, dada la siguiente página:
// <html>
// <body>
// <h1>Tema 1</h1>
// <div>
// <h2>Apartado 1</h2>
// </div>
// <h2>Apartado 2</h2>
// <h1>Tema 2</h1>
// <h2>Introducción</h2>
// </body>
// </html>
// Debería generar una etiqueta <pre> con el siguiente contenido:
// <pre>
// 1.- Tema 1
// 1.1.- Apartado 1
// 1.2.- Apartado 1
// 2.- Tema 2
// 2.1.- Introducción
// </pre>
// const h1s = document.querySelectorAll("h1");
// const arrayTitulos = [];
// const arrayTemporal = [];
// for (let i = 0; i < h1s.length; i++) {
//   const h1 = h1s[i];
//   arrayTitulos.push(`${i + 1}.- ${h1.textContent}`);
//   arrayTemporal.splice(0, arrayTemporal.length);

//   let siguienteElemento = h1.nextElementSibling;
//   console.log(siguienteElemento);
// let elementosHijos = h1.children;
// console.log(elementosHijos);
// for (const hijo of elementosHijos) {
//   console.log(hijo);
// }
// }

const titulosPosibles = ["H1", "H2", "H3", "H4", "H5", "H6"];
const contadorTitulos = new Array(6).fill(0);
const resultado = [];

function getKeyActual(profundidadTitulo) {
  let keyActual = "";
  for (let i = 0; i <= profundidadTitulo; i++) {
    const element = contadorTitulos[i];
    keyActual += `${element}.`;
  }
  return keyActual;
}

function checkTitulo(elementoExaminado) {
  let profundidadTitulo = -1;
  profundidadTitulo = titulosPosibles.indexOf(elementoExaminado?.tagName);

  if (profundidadTitulo !== -1) {
    contadorTitulos[profundidadTitulo]++;
    for (let i = profundidadTitulo + 1; i < contadorTitulos.length; i++) {
      contadorTitulos[i] = 0;
    }
    resultado.push(
      `${getKeyActual(profundidadTitulo)}- ${elementoExaminado.textContent}`
    );
    return null;
  }
}

function checkChildren(elementoExaminado) {
  let elementoHijo;
  if (elementoExaminado?.children.length > 0) {
    elementoHijo = elementoExaminado.children[0];
    return elementoHijo;
  }
  return null;
}

function buscarSiguiente(elementoExaminado) {
  if (elementoExaminado.nextElementSibling) {
    elementoExaminado = elementoExaminado.nextElementSibling;
    return elementoExaminado;
  }
  return null;
}

// CONTENIDO PRINCIPAL

function buclePrincipal(primerElementoExaminado) {
  let elementoExaminado = primerElementoExaminado;
  let elementoHijo;

  checkTitulo(elementoExaminado);

  while (elementoExaminado) {
    elementoExaminado = buscarSiguiente(elementoExaminado);
    if (!elementoExaminado) {
      elementoExaminado = elementoExaminado?.parentNode;
      continue;
    }
    if (!checkTitulo(elementoExaminado)) {
      elementoHijo = checkChildren(elementoExaminado);
      checkTitulo(elementoHijo);
    }
  }
}

const primerElementoExaminado = document.body.children[0];
buclePrincipal(primerElementoExaminado);

console.log(resultado.join("\n"));

// Crea un módulo con una función llamada cutriFetch() que reciba como parámetro un nombre
// de recurso, llame a asyncRequest() y devuelva una promesa que se resuelva cuando se han
// obtenido los datos del recurso.
// Realiza el ejercicio 1 utilizando esa nueva función.

import { cutryFetch } from "./cutry-fetch.js";

const resources = ["resource1", "resource2", "resource3"];

// ******* 1 - AWAIT IN LOOP *********
// for (const resource of resources) {
//   // eslint-disable-next-line no-await-in-loop
//   const respuesta = await cutryFetch(resource);
//   console.log(`${resource} ${respuesta}`);
// }
// console.log("¡Completado!");

// ******** 2 - THEN *********
// let index = 0;
// function execRequest() {
//   const nombreRecurso = resources[index];
//   cutryFetch(nombreRecurso).then((respuesta) => {
//     console.log(`${nombreRecurso} ${respuesta}`);
//     index++;
//     if (index < resources.length) {
//       execRequest();
//     } else {
//       console.log("¡Completado!");
//     }
//   });
// }
// execRequest();

// ********* 3 - AWAIT ***********
let index = 0;
async function execRequest() {
  const nombreRecurso = resources[index];
  const respuesta = await cutryFetch(nombreRecurso);
  console.log(`${nombreRecurso} ${respuesta}`);
  index++;
  if (index < resources.length) {
    execRequest();
  } else {
    console.log("¡Completado!");
  }
}

execRequest();

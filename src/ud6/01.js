// Utilizando la función asyncRequest() realiza de forma secuencial peticiones para obtener
// recurso1, recurso2 y recurso3, en ese orden. Cuando hayas obtenido los tres recursos debes
// imprimir “¡Completado!” en la consola.

// import "./styles/main.css";

import { asyncRequest } from "./async-request.js";

const resources = ["resource1", "resource2", "resource3"];

function execRequestSequentially(resources, index = 0) {
  asyncRequest(resources[index], (callback) => {
    console.log(`${resources[index]} ${callback}`);
    const nextIndex = index + 1;
    if (nextIndex < resources.length) {
      execRequestSequentially(resources, nextIndex);
    } else {
      console.log("¡Completado!");
    }
  });
}

execRequestSequentially(resources);

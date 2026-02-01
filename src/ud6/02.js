// Utilizando la función asyncRequest() realiza de forma simultánea peticiones para obtener
// recurso1, recurso2 y recurso3.
// Debes imprimir el contenido de cada recurso en orden y lo antes posible. Cuando se hayan
// obtenido los tres recursos debes imprimir “¡Completado!” en la consola.
// Esto es un ejemplo de cómo se podrían recibir los datos y qué tendría que imprimirse por pantalla:
// Datos recibidos Impreso en consola
// resource2 (No se imprime nada ya que aún no tenemos
// el resultado de resource1)
// resource1 The first resource
// The second resource
// resource3 The third resource
// ¡Completado!

import { asyncRequest } from "./async-request.js";

const resourcesStore = [
  {
    nombre: "resource1",
    respuesta: null,
  },
  {
    nombre: "resource2",
    respuesta: null,
  },
  {
    nombre: "resource3",
    respuesta: null,
  },
];

let contador = 0;

function imprimirRespuestasPendientes() {
  while (
    contador < resourcesStore.length &&
    resourcesStore[contador].respuesta
  ) {
    console.log(resourcesStore[contador].respuesta);
    contador++;
  }
  if (contador === resourcesStore.length) {
    console.log("¡Completado!");
  }
}

function execRequest(i) {
  const { nombre } = resourcesStore[i];
  asyncRequest(nombre, (respuesta) => {
    if (contador === i) {
      console.log(`${nombre} ${respuesta}`);
      contador++;
      imprimirRespuestasPendientes();
    } else {
      console.log(
        `${nombre} (No se imprime nada ya que aún no tenemos el resultado de ${resourcesStore[contador].nombre})`
      );
    }
    resourcesStore[i].respuesta = respuesta;
  });
}

for (let i = 0; i < resourcesStore.length; i++) {
  execRequest(i);
}

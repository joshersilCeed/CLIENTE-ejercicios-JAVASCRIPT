import { asyncRequest } from "./async-request.js";

export function cutryFetch(nombreRecurso) {
  return new Promise((resolve) => {
    asyncRequest(nombreRecurso, (respuesta) => {
      resolve(respuesta);
    });
  });
}

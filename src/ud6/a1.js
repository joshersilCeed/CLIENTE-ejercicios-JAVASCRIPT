// En este ejercicio, tu tarea es simular la obtención de información de un usuario mediante una
// función asíncrona que devuelve una promesa. No utilices fetch en este caso, simplemente crea
// una función obtenerInformacionUsuario que simula una solicitud asíncrona.
// • Crea una función llamada obtenerInformacionUsuario que toma un parámetro
// idUsuario (número entero) y devuelve una promesa.
// • Dentro de la función, simula una demora asíncrona aleatoria entre 0.5 y 3 segundos antes de
// resolver o rechazar la promesa. Puedes usar setTimeout para simular esta demora.
// • Si idUsuario es un número par, resuelve la promesa con un objeto que contenga la
// información del usuario, por ejemplo:
// { id: idUsuario, nombre: 'Usuario Par', tipo: 'Regular' }
// • Si idUsuario es un número impar, rechaza la promesa con un mensaje de error, por
// ejemplo:
// new Error('Error: Usuario Impar no permitido')
// Implementa un ejemplo de uso de esta función. Llama a obtenerInformacionUsuario
// con un número par e imprime la información del usuario si la promesa se resuelve correctamente.
// Luego, llama a la función con un número impar e imprime el mensaje de error si la promesa es
// rechazada.

// function obtenerInformacionUsuario(idUsuario) {
//   return new Promise((resolve, reject) => {
//     const demora = (Math.random() * 2.5 + 0.5) * 1000;
//     setTimeout(() => {
//       if (idUsuario % 2 === 0) {
//         resolve({ id: idUsuario, nombre: "Usuario Par", tipo: "Regular" });
//       } else {
//         reject(new Error("Error: Usuario Impar no permitido"));
//       }
//     }, demora);
//   });
// }

async function obtenerInformacionUsuario(idUsuario) {
  const demora = (Math.random() * 2.5 + 0.5) * 1000;
  await new Promise((resolve) => setTimeout(resolve, demora));
  if (idUsuario % 2 === 0) {
    return { id: idUsuario, nombre: "Usuario Par", tipo: "Regular" };
  } else {
    throw new Error("Error: Usuario Impar no permitido");
  }
}

const idsUsuarios = [2, 1];
for (const idUsuario of idsUsuarios) {
  obtenerInformacionUsuario(idUsuario)
    .then((usuario) => {
      console.log(usuario);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

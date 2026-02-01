// En este ejercicio, practicaremos el uso de promesas para realizar llamadas paralelas a múltiples
// endpoints de una API ficticia. Supongamos que tenemos tres endpoints que proporcionan
// información sobre usuarios, posts y comentarios respectivamente. Tu tarea es obtener datos de
// estos tres endpoints en paralelo.
// Crea dos funciones llamadas obtenerInfoUsuarios y obtenerInfoPosts. Cada una de
// ellas toma un parámetro id y devuelve una promesa.
// Cada función simulará una llamada asíncrona a un endpoint diferente de una API ficticia. Usa
// setTimeout para simular una demora en cada llamada.
// ◦ obtenerInfoUsuarios(id): Simula obtener información sobre un usuario con el
// id proporcionado. Los usuarios tendrán este esquema:
// {
// id: 1, nombre: 'Usuario 1'
// } ◦
// obtenerInfoPosts(id): Simula obtener información sobre los posts del usuario
// con el id proporcionado. Cada post tendrá los campos titulo y contenido:
// [
// {id: 1, titulo: 'Post 1', contenido: 'Lorem ipsum dolor sit amet' },
// {id: 2, titulo: 'Post 2', contenido: 'consectetur adipisicing elit.' },
// ...
// ]
// Cada una de estas funciones fallará aleatoriamente con una probabilidad del 5%.
// Una vez tengas esas funciones crea una función llamada obtenerInformacionCompleta
// que toma un idUsuario y utiliza las funciones anteriores para obtener información de usuario,
// posts y comentarios en paralelo. La función debe devolver una promesa que se resuelva con un
// objeto que contenga la información completa. Por ejemplo:
// {
// usuario: { id: idUsuario, nombre: 'Usuario Ejemplo' },
// posts: [...], // Array de posts
// }
// Implementa un ejemplo de uso de obtenerInformacionCompleta. Llama a esta función
// con un idUsuario y maneja la promesa resultante utilizando .then para imprimir la información
// completa si la promesa se resuelve correctamente, y utiliza .catch para manejar cualquier error

function demorar() {
  const demora = (Math.random() * 2.5 + 0.5) * 1000;
  return new Promise((resolve) => setTimeout(resolve, demora));
}

function isError() {
  const numAleatorio = Math.floor(Math.random() * 100 + 1);
  if (numAleatorio <= 5) return true;
  return false;
}

async function obtenerInfoUsuarios(id) {
  await demorar();
  if (isError()) throw new Error(`Error obteniendo usuario ${id}`);
  return { id, nombre: `Usuario ${id}` };
}
async function obtenerInfoPosts(id) {
  await demorar();
  if (isError()) throw new Error(`Error obteniendo posts de usuario ${id}`);
  return [
    {
      id: 1,
      userId: id,
      titulo: "Post 1",
      contenido: "Lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      userId: id,
      titulo: "Post 2",
      contenido: "consectetur adipisicing elit.",
    },
  ];
}

async function obtenerInformacionCompleta(idUsuario) {
  const [usuario, posts] = await Promise.all([
    obtenerInfoUsuarios(idUsuario),
    obtenerInfoPosts(idUsuario),
  ]);
  const respuestas = {
    usuario,
    posts,
  };
  return respuestas;
}

obtenerInformacionCompleta(1)
  .then(console.log)
  .catch((error) => console.error(error.message));

// CON AWAIT
// try {
//   const usuario = await obtenerInfoUsuarios(1);
//   console.log(usuario);
//   const posts = await obtenerInfoPosts(1);
//   console.log(posts);
// } catch (error) {
//   console.error(error.message);
// }
// THEN ENCADENADOS
// obtenerInfoUsuarios(1)
//   .then((usuario) => {
//     console.log(usuario);
//     return obtenerInfoPosts(1);
//   })
//   .then((posts) => console.log(posts))
//   .catch((error) => console.log(error.message));
// THEN PARALELOS
// obtenerInfoUsuarios(1)
//   .then((usuario) => console.log(usuario))
//   .catch((error) => console.log(error.message));
// obtenerInfoPosts(1)
//   .then((posts) => console.log(posts))
//   .catch((error) => console.log(error.message));
// PROMISE.ALLSETTLED
// async function obtenerInformacionCompleta(idUsuario) {
//   const [usuario, posts] = await Promise.allSettled([
//     obtenerInfoUsuarios(idUsuario),
//     obtenerInfoPosts(idUsuario),
//   ]);
//   const respuestas = {
//     usuario,
//     posts,
//   };
//   for (const key in respuestas) {
//     if (respuestas[key].status === "fulfilled") {
//       respuestas[key] = respuestas[key].value;
//     } else {
//       respuestas[key] = respuestas[key].reason.message;
//     }
//   }
//   return respuestas;
// }

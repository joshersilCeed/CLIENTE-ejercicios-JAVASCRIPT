// Utiliza la función obtenerInformacionCompleta del apartado anterior para obtener los
// datos de cinco usuarios al mismo tiempo. Cuando hayas obtenido la información de todos los
// usuarios muéstralos con sus datos completos por orden alfabético.

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

async function obtenerInformacionCompletaUsuario(idUsuario) {
  const [usuario, posts] = await Promise.all([
    obtenerInfoUsuarios(idUsuario),
    obtenerInfoPosts(idUsuario),
  ]);
  const respuestasUsuario = {
    usuario,
    posts,
  };
  return respuestasUsuario;
}

function ordenarRespuestas(respuestas) {
  const respuestasOrdenadas = [...respuestas].sort((a, b) =>
    a.usuario.nombre.localeCompare(b.usuario.nombre)
  );
  return respuestasOrdenadas;
}

async function obtenerInformacionCompleta(idUsuarios) {
  const promesas = [];
  for (const idUsuario of idUsuarios) {
    promesas.push(obtenerInformacionCompletaUsuario(idUsuario));
  }
  const respuestasUsuarios = await Promise.all(promesas);
  return ordenarRespuestas(respuestasUsuarios);
}

obtenerInformacionCompleta([5, 2, 4, 3, 1])
  .then((data) => {
    console.dir(data, { depth: null });
    // console.log(JSON.stringify(data, null, 2));
  })
  .catch((error) => console.error(error.message));

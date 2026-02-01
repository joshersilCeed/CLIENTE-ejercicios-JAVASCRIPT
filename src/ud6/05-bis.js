// Crea una función movimientos() que, dado un nombre de pokémon en inglés, devuelva de
// forma asíncrona el nombre en castellano de todos los movimientos de dicho pokémon en orden
// alfabético.
// Por ejemplo, movimientos(‘bulbasaur’) debería devolver:
// [‘Abatidoras’, ‘Bomba Germen’, ...]
// Los datos de un pokémon pueden obtenerse con una llamada al API:
// https://pokeapi.co/api/v2/pokemon/[NOMBRE DEL POKEMON EN INGLÉS]
// En los datos del pokémon hay enlaces para obtener datos de los diferentes apartados, entre ellos
// los movimientos. Debe obtener los datos de los movimientos lo más rápidamente posible. Recuerda
// gestionar los posibles errores.

function ordenarMovimientos(nombresMovimientos) {
  const movimientosOrdenados = [...nombresMovimientos].sort();
  return movimientosOrdenados;
}

async function obtenerMovimientoCastellano(movimiento) {
  let { name: nombreMovimiento, url: urlMovmiento } = movimiento;
  const numeroAleatorio = Math.floor(Math.random() * 10);
  if (numeroAleatorio === 3) {
    urlMovmiento += "d";
  }
  const resp = await fetch(urlMovmiento);
  if (!resp.ok) {
    throw new Error(
      `Error al obtener movimiento ${nombreMovimiento} del pokémon: ${resp.status} ${resp.statusText}`
    );
  }
  const data = await resp.json();
  const nombresMovimientosIdiomas = data.names;
  let nombreMovimientoEsp = nombresMovimientosIdiomas.find(
    (nombre) => nombre.language.name === "es"
  );
  nombreMovimientoEsp =
    nombreMovimientoEsp?.name || `${nombreMovimiento} (sin traducción)`;
  return nombreMovimientoEsp;
}

async function movimientos(nombrePokemon) {
  const resp = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`
  );
  if (!resp.ok) {
    throw new Error(
      `Error al obtener pokémon "${nombrePokemon}": ${resp.status} ${resp.statusText}`
    );
  }
  const data = await resp.json();
  const movimientos = data.moves;
  let promesas = [];
  for (const { move } of movimientos) {
    promesas.push(obtenerMovimientoCastellano(move));
  }
  // const nombresMovimientosEsp = await Promise.all(promesas);
  let nombresMovimientosEsp = await Promise.allSettled(promesas);
  nombresMovimientosEsp = nombresMovimientosEsp.map(
    (n) => n.value || "*** Fallo fetch movimiento"
  );
  return ordenarMovimientos(nombresMovimientosEsp);
}

try {
  const movimientosBulbasaur = await movimientos("bulbasaur");
  console.log(movimientosBulbasaur.join("\n"));
} catch (error) {
  console.log(error.message);
}

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
  nombresMovimientos.sort();
  console.log(nombresMovimientos.join("\n"));
}

async function obtenerMovimientoCastellano(movimiento) {
  const { name: nombreMovimiento, url: urlMovmiento } = movimiento;
  try {
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
  } catch (error) {
    console.log(error.message);
  }
}

async function movimientos(nombrePokemon) {
  try {
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
    const nombresMovimientosEsp = [];
    let contador = 0;
    for (let movimiento of movimientos) {
      movimiento = movimiento.move;
      obtenerMovimientoCastellano(movimiento).then((nombreMovimientoEsp) => {
        nombresMovimientosEsp.push(nombreMovimientoEsp);
        contador++;
        if (contador === movimientos.length) {
          ordenarMovimientos(nombresMovimientosEsp);
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
}
movimientos("bulbasaur");

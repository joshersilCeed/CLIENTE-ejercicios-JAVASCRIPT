// Dada la cadena de evolución de un pokémon en formato JSON obtenida del PokéAPI
// (https://pokeapi.co/) obtén una cadena con la lista de los diferentes pokémon en los que
// evoluciona. Si un pokémon puede tener varias cadenas de evolución (por ejemplo, Eevee) devuelve
// sólo el contenido de la primera.
// Por ejemplo, para Bulbasaur, se puede obtener la cadena de evolución de esta dirección:
// https://pokeapi.co/api/v2/evolution-chain/1. El programa debería devolver la cadena
// "Bulbasaur-Ivysaur-Venusaur" (ojo, que la primera letra está en mayúsculas)
// Si quieres ver otras cadenas de evolución puedes cambiar el número final en la URL. Aquí tienes la
// documentación sobre la información de devuelve el endpoint:
// https://pokeapi.co/docs/v2#evolution-section

// Función que capitaliza la primera letra de una cadena
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Función recursiva que recorre la cadena de evolución
function getEvolutionChain(chain) {
  const pokemonName = capitalize(chain.species.name);

  // Si no hay más evoluciones, devolver solo el nombre actual
  if (!chain.evolves_to || chain.evolves_to.length === 0) {
    return pokemonName;
  }

  // Recursivamente obtener la cadena de evolución (solo la primera rama)
  return pokemonName + "-" + getEvolutionChain(chain.evolves_to[0]);
}

// Función principal que procesa la respuesta de la API
function getEvolutionChainString(evolutionData) {
  return getEvolutionChain(evolutionData.chain);
}

// Ejemplo con Bulbasaur (chain 1)
fetch("https://pokeapi.co/api/v2/evolution-chain/1")
  .then((response) => response.json())
  .then((data) => {
    console.log("Bulbasaur:", getEvolutionChainString(data));
  });

// Ejemplo con Eevee (chain 67) - tiene múltiples evoluciones, toma solo la primera
fetch("https://pokeapi.co/api/v2/evolution-chain/67")
  .then((response) => response.json())
  .then((data) => {
    console.log("Eevee:", getEvolutionChainString(data));
  });

// Ejemplo con Pikachu (chain 10)
fetch("https://pokeapi.co/api/v2/evolution-chain/10")
  .then((response) => response.json())
  .then((data) => {
    console.log("Pikachu:", getEvolutionChainString(data));
  });

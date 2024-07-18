const fetchPokemon = async (pokemonName) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const data = await response.json();
  return {
    name: data["name"],
    id: data["id"],
    height: data["height"],
    weight: data["weight"],
    types: data["types"].map((element) => element["type"]["name"]),
  };
};

module.exports = fetchPokemon;

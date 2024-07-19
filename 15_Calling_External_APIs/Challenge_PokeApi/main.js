// const fetchPokemon = require("./api.js");

// fetchPokemon("pikachu").then((object) => console.log(object));

const PokedexClient = require("./pokedex_client.js");
const Pokedex = require("./pokedex.js");

// pokedex.catch("pikachu").then((object) => console.log(pokedex.all()));
// pokedex.catch("charizard").then((object) => console.log(pokedex.all()));

async function main() {
  const client = new PokedexClient();
  const pokedex = new Pokedex(client);

  await pokedex.catch("pikachu");
  await pokedex.catch("charizard");

  console.log(pokedex.all());
}

main();

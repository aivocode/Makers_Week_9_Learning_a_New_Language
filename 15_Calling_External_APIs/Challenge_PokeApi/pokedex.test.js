const PokedexClient = require("./pokedex_client.js");
const Pokedex = require("./pokedex.js");

describe("class Pokedex test", () => {
  it(".catch() | .all()", async () => {
    const client = new PokedexClient();
    const pokedex = new Pokedex(client);

    await pokedex.catch("pikachu");
    expect(pokedex.pokemonArray[0]["name"]).toEqual("pikachu");

    await pokedex.catch("jigglypuff");
    expect(pokedex.pokemonArray[1]["name"]).toEqual("jigglypuff");

    expect(pokedex.all()).toEqual([
      {
        name: "pikachu",
        id: 25,
        height: 4,
        weight: 60,
        types: ["electric"],
      },
      {
        name: "jigglypuff",
        id: 39,
        height: 5,
        weight: 55,
        types: ["normal", "fairy"],
      },
    ]);
  });
});

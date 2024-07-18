const Pokedex = require("./pokedex");

describe("class Pokedex test", () => {
  it(".catch() | .all()", () => {
    const pokedex = new Pokedex();
    expect(pokedex.pokemonArray).toEqual([]);

    pokedex.catch("pikachu");
    expect(pokedex.pokemonArray[0]).toEqual("pikachu");

    pokedex.catch("jigglypuff");
    expect(pokedex.pokemonArray[1]).toEqual("jigglypuff");

    expect(pokedex.all()).toEqual(["pikachu", "jigglypuff"]);
  });
});

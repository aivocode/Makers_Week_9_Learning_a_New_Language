class Pokedex {
  constructor(client) {
    this.client = client;
    this.pokemonArray = [];
  }

  catch = (name) => {
    return this.client
      .fetchPokemon(name)
      .then((object) => this.pokemonArray.push(object));
  };

  all = () => {
    return this.pokemonArray;
  };
}

module.exports = Pokedex;

class Pokedex {
  constructor() {
    this.pokemonArray = [];
  }

  catch(pokemon) {
    this.pokemonArray.push(pokemon);
  }

  all() {
    return this.pokemonArray;
  }
}

module.exports = Pokedex;

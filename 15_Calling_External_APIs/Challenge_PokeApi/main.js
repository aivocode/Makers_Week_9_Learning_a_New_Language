const fetchPokemon = require("./api.js");

fetchPokemon("charizard").then((object) => console.log(object));

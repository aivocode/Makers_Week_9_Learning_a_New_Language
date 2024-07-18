const fetchPokemon = require("./api.js");

fetchPokemon("pikachu").then((object) => console.log(object));

const fetchPokemon = require("./api");

describe("fetchPokemon", () => {
  it("object test", (done) => {
    fetchPokemon("charizard").then((object) => {
      expect(object.name).toEqual("charizard");
      expect(object.id).toEqual(6);
      expect(object.height).toEqual(17);
      expect(object.weight).toEqual(905);
      expect(object.types).toEqual(["fire", "flying"]);
      done();
    });
  });
});

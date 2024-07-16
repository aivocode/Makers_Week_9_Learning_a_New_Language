const searchCandies = require("./searchCandies.js");

describe("searchCandies test", () => {
  it("searchCandies('Ma', 10)", () => {
    expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
  });
  it("searchCandies('Ma', 2)", () => {
    expect(searchCandies("Ma", 2)).toEqual(["Mars"]);
  });
  it("searchCandies('ma', 10)", () => {
    expect(searchCandies("ma", 10)).toEqual(["Mars", "Maltesers"]);
  });
  it("searchCandies('S', 10)", () => {
    expect(searchCandies("S", 10)).toEqual(["Skitties", "Skittles", "Starburst"]);
  });
  it("searchCandies('S', 4)", () => {
    expect(searchCandies("S", 4)).toEqual(["Skitties", "Skittles"]);
  });
});

// > searchCandies('Ma', 10);
// [ 'Mars', 'Maltesers' ]

// > searchCandies('Ma', 2); // Maltesers excluded: it's more than 2
// [ 'Mars' ]

// > searchCandies('S', 10);
// [ 'Skitties', 'Skittles', 'Starburst' ]

// > searchCandies('S', 4);
// [ 'Skitties', 'Skittles' ] // Starbust excluded: it's more than 4

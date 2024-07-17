const { Candy } = require("./candy.js");

describe("class Candy test", () => {
  it("Candy(stringParam, numberParam)", () => {
    const candy = new Candy("Mars", 4.99);
    expect(candy.name).toBe("Mars");
    expect(candy.price).toBe(4.99);
  });
  it(".getName()", () => {
    const candy = new Candy("Mars", 4.99);
    expect(candy.getName()).toBe("Mars");
  });
  it(".getPrice()", () => {
    const candy = new Candy("Mars", 4.99);
    expect(candy.getName()).toBe("Mars");
  });
});

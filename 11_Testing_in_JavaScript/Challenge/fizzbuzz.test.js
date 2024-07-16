const { fizzBuzz } = require("../../3_JS_Conditionals/2_Challenge.js");

describe("fizzbuzz test", () => {
  it("fizzbuzz 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it("fizzbuzz(5)", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it("fizzbuzz(8)", () => {
    expect(fizzBuzz(8)).toBe(8);
  });
  it("fizzbuzz(15)", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("fizzbuzz(18)", () => {
    expect(fizzBuzz(18)).toBe("Fizz");
  });
  it("fizzbuzz(20)", () => {
    expect(fizzBuzz(20)).toBe("Buzz");
  });
});

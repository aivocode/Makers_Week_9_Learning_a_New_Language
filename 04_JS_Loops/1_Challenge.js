const {fizzBuzz} = require("../3_JS_Conditionals/2_Challenge.js");

const fizzbuzzUntil = (max) => {
  for (let i = 1; i <= max; i++) {
    console.log(fizzBuzz(i));
  }
};

fizzbuzzUntil(10);

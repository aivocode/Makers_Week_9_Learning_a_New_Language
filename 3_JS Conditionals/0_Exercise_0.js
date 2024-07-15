const getNumberSign = (num) => {
  if (num < 0) {
    return "negative";
  } else if (num > 0) {
    return "positive";
  } else {
    return "zero";
  }
};

console.log(getNumberSign(-1));
console.log(getNumberSign(1));
console.log(getNumberSign(0));

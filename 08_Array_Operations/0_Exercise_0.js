const checkLength = (number) => {
  if (number.length <= 10) {
    return true;
  } else {
    return false;
  }
};

const filterLongNumbers = (numberArray, checkLength) => {
  console.log(numberArray.filter(checkLength));
};

const numbers = [
  "1763687364",
  "4763687363",
  "7867867862",
  "aaaaaaaabbbbbbbcccccdddddddd", // this element should be filtered
];

filterLongNumbers(numbers, checkLength);
//   [ '1763687364', '4763687363', '7867867862' ]

filterLongNumbers(["4763687363", "7867867862"], checkLength); // no number to filter out
//   [ '4763687363', '7867867862' ]

filterLongNumbers([], checkLength);
//   [ ]

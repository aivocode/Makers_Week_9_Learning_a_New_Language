const names = ["Anna", "Laura", "Josh", "Min", "Karla"];

// const generateMessages = (namesArray) => {
//   const messagesArray = [];
//   for (let i = 0; i < namesArray.length; i++) {
//     messagesArray.push(
//       `Hi ${namesArray[i]}! 50% off our best candies for you today!`
//     );
//   }
//   return messagesArray;
// };

const generateMessages = (namesArray) => {
  return namesArray.map((element) => {
    return `Hi ${element}! 50% off our best candies for you today!`;
  });
};

console.log(generateMessages(names));

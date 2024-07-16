const { User } = require("./0_user.js");
const { UserBase } = require("./1_userBase.js");

const users = [new User("Uma"), new User("Josh"), new User("Ollie")];
const userBase = new UserBase(users);

console.log(userBase.count());
// 3

console.log(userBase.getNames());
// [ 'Uma', 'Josh', 'Ollie' ]

console.log(userBase.getIntroductions());
// [
//   'Hi, my name is Uma',
//   'Hi, my name is Josh',
//   'Hi, my name is Ollie'
// ]

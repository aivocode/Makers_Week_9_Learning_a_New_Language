const { User } = require("./0_user.js");

const user = new User("Uma");

console.log(user.getName());
// 'Uma'

console.log(user.getIntroduction());
// 'Hi, my name is Uma'

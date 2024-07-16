const lowercaseMessage = (message) => {
  return message.toLowerCase();
};

const transform = (message, transformFunction) => {
  console.log(transformFunction(message));
};

transform("WHY ARE YOU SHOUTING?", lowercaseMessage);

const promiseToGatherFruit = new Promise((resolve, reject) => {
  const fruit = "Pineapple";
  resolve(fruit);
})
  .then((fruit) => {
    return fruit.length;
  })
  .then((returnValue) => {
    console.log(returnValue);
  });

promiseToGatherFruit;

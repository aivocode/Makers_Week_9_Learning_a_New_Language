const fruitsArray = [];

const promiseToGatherFruit = new Promise((resolve, reject) => {
  const fruit = "Pineapple";

  resolve(fruit);
})
  .then((fruit) => {
    fruitsArray.push(fruit);
  })
  .then(() => {
    console.log(fruitsArray);
  });

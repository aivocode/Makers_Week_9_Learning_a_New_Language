const addToBatch = (batch, id) => {
  if (batch.length <= 5) {
    return batch.concat(id);
  } else {
    return batch;
  }
};

console.log(addToBatch([1], 3));
// [ 1, 3 ]

console.log(addToBatch([1, 2, 3], 4));
// [ 1, 2, 3, 4 ]

console.log(addToBatch([], 8));
// [ 8 ]

console.log(addToBatch([1, 2, 3, 4, 5, 6], 7));
// [ 1, 2, 3, 4, 5, 6 ]

console.log(addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

const orders = [];
for (let i = 1; i <= 43; i++) {
  orders.push("order" + i);
}
console.log(orders);

const generateBatches = (orders) => {
  const batches = [];
  let batch = [];
  for (let i = 0; i < orders.length; i++) {
    if (batch.length == 5) {
      batches.push(batch);
      batch = [];
    } else {
      batch.push(i);
    }
  }
  return batches;
};

console.log(generateBatches(orders));

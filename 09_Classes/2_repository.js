class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

class ShoppingBasket {
  constructor() {
    this.candyArray = [];
  }

  getTotalPrice() {
    if (this.candyArray == []) {
      return 0;
    }
    let sum = 0;
    this.candyArray.forEach((element) => {
      sum += element.price;
    });
    return sum;
  }

  addItem(candy) {
    this.candyArray.push(candy);
  }
}

module.exports = { Candy, ShoppingBasket };

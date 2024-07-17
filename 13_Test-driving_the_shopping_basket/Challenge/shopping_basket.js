class ShoppingBasket {
  constructor() {
    this.candyArray = [];
    this.discount = 0;
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    if (this.candyArray == []) {
      return 0;
    }
    let sum = 0;
    this.candyArray.forEach((element) => {
      sum += element.getPrice();
    });
    return sum - this.discount;
  }

  addItem(candy) {
    this.candyArray.push(candy);
  }
}

module.exports = { ShoppingBasket };

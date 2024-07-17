const { Candy } = require("./candy.js");
const { ShoppingBasket } = require("./shopping_basket.js");

jest.mock("./candy.js");

describe("class ShoppingBasket test", () => {
  beforeEach(() => {
    Candy.mockClear();
  });

  it("ShoppingBasket()", () => {
    const shopppingBasket = new ShoppingBasket();
    expect(shopppingBasket.candyArray).toEqual([]);
  });
  it(".getTotalPrice()", () => {
    const shopppingBasket = new ShoppingBasket();
    expect(shopppingBasket.getTotalPrice()).toBe(0);
  });

  it(".addItem() | .getTotalPrice()", () => {
    const mockCandy1 = new Candy();
    const mockCandy2 = new Candy();

    mockCandy1.getPrice.mockImplementation(() => 4.99);
    mockCandy2.getPrice.mockImplementation(() => 3.99);

    const shopppingBasket = new ShoppingBasket();

    shopppingBasket.addItem(mockCandy1);
    expect(shopppingBasket.getTotalPrice()).toBe(mockCandy1.getPrice());

    shopppingBasket.addItem(mockCandy2);
    shopppingBasket.addItem(mockCandy2);
    expect(shopppingBasket.getTotalPrice()).toBe(
      mockCandy1.getPrice() + mockCandy2.getPrice() + mockCandy2.getPrice()
    );
  });
  it(".addItem() | .applyDiscount() | .getTotalPrice()", () => {
    const mockCandy = new Candy();

    mockCandy.getPrice.mockImplementation(() => 4.99);

    const shopppingBasket = new ShoppingBasket();

    shopppingBasket.addItem(mockCandy);
    expect(shopppingBasket.getTotalPrice()).toBe(mockCandy.getPrice());

    shopppingBasket.applyDiscount(4);
    expect(shopppingBasket.getTotalPrice()).toBe(mockCandy.getPrice() - 4);
  });
});

// Import Classes Here
const Product = require("./classes/Product");
const Cart = require("./classes/Cart");

const carrots = new Product(
  "Carrots",
  4,
  "Bushel of carrots that have been freshly harvested for you"
);
const apples = new Product("Apples", 8, "Very tasty apples");

const testingCart = new Cart();

testingCart.addProduct(carrots);
testingCart.addProduct(apples);
console.log(testingCart.total);

// DO NOT EDIT BELOW THIS LINE
try {
  module.exports = {
    Product,
  };
} catch (e) {}

try {
  module.exports = {
    Product,
    Cart,
  };
} catch (e) {}

try {
  module.exports = {
    Product,
    Cart,
    Customer,
  };
} catch (e) {}

try {
  module.exports = {
    Product,
    Cart,
    Customer,
    Auth,
  };
} catch (e) {}

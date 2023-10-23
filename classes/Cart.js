class Cart {
  constructor() {
    this.products = [];
    this.total = 0;
  }

  addProduct(product) {
    this.products.push(product);
    this.total += product.price;
  }

  removeProduct(product) {
    // let index = this.products.indexOf(product);
    // if (index > -1) {
    //   array.splice(index, 1);
    //   this.total -= product.price;
    // }

    this.total -= this.products[product].price;
    this.products.splice(product, 1);
  }
}

module.exports = Cart;

// const myCart = new Cart();
// myCart.addProduct(Lemon);

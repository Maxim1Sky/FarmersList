const Customer = require("./Customer");

class Auth{
    constructor(){
        this.customers = [];
    }

    register(name, email, shippingAddress) {
        this.customers.push(new Customer(name, email, shippingAddress));

    }

    login(email) {
        let customer =  this.customers.find(x => x.email == email);
        if (customer == undefined) {
            return null
        } else {
            return customer
        }


    }
}

module.exports = Auth;
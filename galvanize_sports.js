var data = require("./objects");
var inventory = data.inventory;
var shoppingCart = data.shoppingCart;

function addItem(itemId, quantity){
    // Your code here!
}

function removeItem(itemId, quantity){
    // Your code here!
}

function getCheckoutSubtotal(){
    var checkoutSubtotal = 0.00;
    // Your code here!
    return checkoutSubtotal;
}

function getTax(subtotal, rate){
    var tax = 0.00;
    // Your code here!
    return tax;
}

function getCheckoutTotal(){
    var TAX_RATE = 0.078;
    var checkoutTotal = 0.00;
    // Your code here!
    return checkoutTotal;
}

module.exports = {
    inventory,
    shoppingCart,
    addItem,
    removeItem,
    getCheckoutTotal,
    getTax,
    getCheckoutTotal
}

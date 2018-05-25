var data = require("./objects");
var inventory = data.inventory;
var shoppingCart = data.shoppingCart;

function findItemInShoppingCartById(itemId) {
    for (var i = 0; i < data.shoppingCart.length; i++) {
        var itemID = data.shoppingCart[i].itemId
        if (itemID === itemId) {
            return data.shoppingCart[i]
        }
    }
}

function findItemInInventoryById(itemId) {
  for (var i = 0; i < data.inventory.length; i++) {
      var itemID = data.inventory[i].id;
      if (itemID === itemId) {
          return data.inventory[i];
      }
  }  
}

function addItem(itemId, quantity){
    // Your code here!
    // Hint: use findItemInShoppingCartById and findItemInInventoryById
    // to find the items before increasing/decreasing quantities
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
    getCheckoutSubtotal,
    getTax,
    getCheckoutTotal,
    findItemInShoppingCartById,
    findItemInInventoryById
}

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
<<<<<<< HEAD
        }
=======
        } 
>>>>>>> 207731a1740dcb7c0c3ec687365d3ce183dcaa40
    }  
}

function addItem(itemId, quantity){
    var foundItem = findItemInInventoryById(itemId);
        if (quantity > foundItem.quantityAvailable) {
            quantity = foundItem.quantityAvailable;
        }  
    foundItem.quantityAvailable = (foundItem.quantityAvailable - quantity);
    var foundInShoppingCart = findItemInShoppingCartById(itemId);
    foundInShoppingCart.quantity = (foundInShoppingCart.quantity + quantity); 
<<<<<<< HEAD
    }
=======
}
    //        if (findItemInShoppingCartById (itemId))
//    var foundInShoppingCart = findItemInShoppingCartById (itemId);

    // Your code here!
    // Hint: use findItemInShoppingCartById and findItemInInventoryById
    // to find the items before increasing/decreasing quantities

<<<<<<< HEAD
}
=======
>>>>>>> 207731a1740dcb7c0c3ec687365d3ce183dcaa40
>>>>>>> 452f39b499e7cad87e6cbc37d6384f7cf7b248d0

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

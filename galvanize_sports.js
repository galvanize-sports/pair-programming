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
    var foundItem = findItemInInventoryById(itemId);
        if (quantity > foundItem.quantityAvailable) {
            quantity = foundItem.quantityAvailable;
        }  
    foundItem.quantityAvailable = (foundItem.quantityAvailable - quantity);
    var foundInShoppingCart = findItemInShoppingCartById(itemId);
    foundInShoppingCart.quantity = (foundInShoppingCart.quantity + quantity); 

}

    //        if (findItemInShoppingCartById (itemId))
//    var foundInShoppingCart = findItemInShoppingCartById (itemId);

    // Your code here!
    // Hint: use findItemInShoppingCartById and findItemInInventoryById
    // to find the items before increasing/decreasing quantities

function removeItem(itemId, quantity){
    var foundInShoppingCart = findItemInShoppingCartById(itemId);
        if (quantity > foundInShoppingCart.quantity) {
            quantity = foundInShoppingCart.quantity;
    } 
    foundInShoppingCart.quantity = (foundInShoppingCart.quantity - quantity); 
    var foundItem = findItemInInventoryById(itemId);   
    foundItem.quantityAvailable = (foundItem.quantityAvailable + quantity);  
}

function getCheckoutSubtotal(){
    checkoutSubtotal = (shoppingCart[0].quantity * inventory[0].price) + (shoppingCart[1].quantity * inventory[1].price) + (shoppingCart[2].quantity * inventory[2].price);
    return checkoutSubtotal;
}   
    
    
    
    
/*
    var checkoutSubtotal = 0.00;
    for (var i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].quantity !== 0) {
            var quantityOfItem = shoppingCart[i].quantity;
            var idOfItem = shoppingCart[i].itemId;
            for (var j = 0; inventory.length; j++) {
                if (inventory[j].id === idOfItem) {
                    var priceOfItem = inventory[j].price;
                }
            }
        checkoutSubtotal = checkoutSubtotal + (quantityOfItem * priceOfItem);
    }
    return checkoutSubtotal;
*/


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

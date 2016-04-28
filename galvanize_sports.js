var data = require("./objects");
var inventory = data.inventory;
var shoppingCart = data.shoppingCart;

module.exports = {
    inventory: data.inventory,
    shoppingCart: data.shoppingCart,
    adjustCollection: function(itemId, quantity, collection){
        var quantityLabel = collection === "shoppingCart" ? "quantity" : "quantityAvailable";
        var item = this.findItem(itemId, collection);
        var amountAdjusted = 0;
        if ((item[quantityLabel] + quantity) < 0){
            amountAdjusted = item[quantityLabel] * -1;
            item[quantityLabel] = 0;
        } else {
            item[quantityLabel] += quantity;
            amountAdjusted = quantity;
        }
        return amountAdjusted;
    },
    findItem: function(itemId, collection){
        var idLabel = collection === "shoppingCart" ? "itemId" : "id";
        for (var i = 0; i < this[collection].length; i++){
            if (this[collection][i][idLabel] === itemId){
                return this[collection][i];
            }
        }
    },
    addItem: function(itemId, quantity){
        var amountAdjusted = this.adjustCollection(itemId, quantity * -1, "inventory");
        this.adjustCollection(itemId, amountAdjusted * -1, "shoppingCart");
    },
    removeItem: function(itemId, quantity){
        var amountAdjusted = this.adjustCollection(itemId, quantity * -1, "shoppingCart");
        this.adjustCollection(itemId, amountAdjusted * -1, "inventory");
    },
    getCheckoutSubtotal: function(){
        var checkoutSubtotal = 0.00;
        var item;
        var lineItem;

        for (var i = 0; i < this.shoppingCart.length; i++){
            item = this.findItem(this.shoppingCart[i].itemId, "inventory");
            lineItem = item.price * this.shoppingCart[i].quantity;
            checkoutSubtotal += lineItem;
        }

        return checkoutSubtotal;
    },
    getTax: function(subtotal, rate){
        return (Math.round(subtotal * 100 * rate)) / 100;
    },
    getCheckoutTotal: function(){
        var TAX_RATE = 0.078;

        var checkoutTotal = this.getCheckoutSubtotal();
        var tax = this.getTax(checkoutTotal, TAX_RATE);

        checkoutTotal += this.getTax(checkoutTotal, TAX_RATE);

        return (Math.round(checkoutTotal * 100)) / 100;
    }
}

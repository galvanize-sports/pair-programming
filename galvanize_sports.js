var inventory = require("./objects");
var shoppingCart = require("./objects");

module.exports = {
    addItem: function(itemId, quantity){
        /* Your code here- Look out for adding more items than are in inventory!

        */
        return true;
    },
    removeItem: function(itemId, quantity){
        /* Your code here- Look out for removing more items than are in the cart!

        */
        return true;
    },
    getCheckoutTotal: function(){
        var checkoutTotal = 0.00;
        /* Your code here

        */
        return checkOutTotal;
    },
    getCheckoutSubtotal: function(){
        var checkoutSubtotal = 0.00;
        /* Your code here

        */
        return checkOutSubtotal;
    },
    getTax: function(subtotal, rate){
        var taxAmount = 0.00;
        /* Your code here

        */
        return taxAmount;
    }
}

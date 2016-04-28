var inventory = require("../objects").inventory;
var shoppingCart = require("../objects").shoppingCart;
var galvanizeSports = require("../galvanize_sports");
var assert = require("chai").assert;

describe("Functions should work", function() {
    it("should have a working addItem function", function(){
        galvanizeSports.addItem(1, 1);
        assert.equal(shoppingCart.shoppingCart[0].quantity, 1, "Item 1 should be added to the shopping cart");
        assert.equal(inventory.inventory[0].quantityAvailable, 2, "Item 1 should be removed from the available inventory");

        galvanizeSports.addItem(2, 1);
        assert.equal(shoppingCart.shoppingCart[1].quantity, 1, "Items 2 should be added to the shopping cart");
        assert.equal(inventory.inventory[1].quantityAvailable, 4, "Item 2 should be removed from the available inventory");

        galvanizeSports.addItem(3, 1);
        assert.equal(shoppingCart.shoppingCart[1].quantity, 1, "Items 3 should be added to the shopping cart");
        assert.equal(inventory.inventory[1].quantityAvailable, 6, "Item 3 should be removed from the available inventory");

        galvanizeSports.addItem(1, 50);
        assert.equal(shoppingCart.shoppingCart[0].quantity, 3, "All available item 1's should be added to the shopping cart");
        assert.equal(inventory.inventory[0].quantityAvailable, 0, "All available item 1's should be removed from the available inventory");
    });
    it("should have a working removeItem function", function(){
        shoppingCart.shoppingCart[0].quantity = 2;
        shoppingCart.shoppingCart[1].quantity = 2;
        shoppingCart.shoppingCart[2].quantity = 2;

        galvanizeSports.removeItem(1, 1);
        assert.equal(shoppingCart.shoppingCart[0].quantity, 1, "Item 1 should be added to the shopping cart");
        assert.equal(inventory.inventory[0].quantityAvailable, 2, "Item 1 should be removed from the available inventory");

        galvanizeSports.removeItem(2, 1);
        assert.equal(shoppingCart.shoppingCart[1].quantity, 1, "Items 2 should be added to the shopping cart");
        assert.equal(inventory.inventory[1].quantityAvailable, 4, "Item 2 should be removed from the available inventory");

        galvanizeSports.removeItem(3, 1);
        assert.equal(shoppingCart.shoppingCart[1].quantity, 1, "Items 3 should be added to the shopping cart");
        assert.equal(inventory.inventory[1].quantityAvailable, 6, "Item 3 should be removed from the available inventory");

        galvanizeSports.removeItem(1, 50);
        assert.equal(shoppingCart.shoppingCart[0].quantity, 0, "All available item 1's should be added to the shopping cart");
        assert.equal(inventory.inventory[0].quantityAvailable, 4, "All available item 1's should be removed from the available inventory");
    });
    it("should have a working getCheckoutSubtotal function", function(){
        shoppingCart.shoppingCart[0].quantity = 2;
        shoppingCart.shoppingCart[1].quantity = 2;
        shoppingCart.shoppingCart[2].quantity = 2;

        assert.equal(galvanizeSports.getCheckoutSubtotal(), 299.96, "Calculates correct subtotal");
    });
    it("should have a working getTax function", function(){
        shoppingCart.shoppingCart[0].quantity = 2;
        shoppingCart.shoppingCart[1].quantity = 2;
        shoppingCart.shoppingCart[2].quantity = 2;

        assert.equal(galvanizeSports.getTax(), 23.40, "Calculates correct tax");
    });
    it("should have a working getCheckoutTotal function", function(){
        shoppingCart.shoppingCart[0].quantity = 2;
        shoppingCart.shoppingCart[1].quantity = 2;
        shoppingCart.shoppingCart[2].quantity = 2;

        assert.equal(galvanizeSports.getCheckoutTotal(), 323.36, "Calculates correct total");
    });
});

describe("User workflow should work", function() {
    it("should allow the user to add and remove some items, then display the correct total", function(){
        galvanizeSports.addItem(1, 2);
        galvanizeSports.addItem(2, 2);
        galvanizeSports.addItem(3, 3);
        galvanizeSports.removeItem(2, 2);
        assert.equal(shoppingCart.shoppingCart[0].quantity, 2, "Correct number of item 1s in shopping cart");
        assert.equal(shoppingCart.shoppingCart[1].quantity, 0, "Correct number of item 2s in shopping cart");
        assert.equal(shoppingCart.shoppingCart[2].quantity, 3, "Correct number of item 3s in shopping cart");
        assert.equal(inventory.inventory[0].quantityAvailable, 1, "Correct number of item 1s in inventory");
        assert.equal(inventory.inventory[1].quantityAvailable, 5, "Correct number of item 2s in inventory");
        assert.equal(inventory.inventory[2].quantityAvailable, 4, "Correct number of item 3s in inventory");
        assert.equal(galvanizeSports.getCheckoutTotal(), 301.79, "Calculates correct total");
    });
});

var inventory = require("../objects").inventory;
var shoppingCart = require("../objects").shoppingCart;
var galvanizeSports = require("../galvanize_sports");
var assert = require("chai").assert;

describe("addItem should work", function() {
    it("should", function(){
        galvanizeSports.addItem(1, 1);
        assert.equal(shoppingCart.shoppingCart[0].quantity, 1, "Items should be added to the shopping cart");
        assert.equal(inventory.inventory[0].quantityAvailable, 2, "Items should be removed from the available inventory");
    });
});
describe("removeItem should work", function() {
    it("should", function(){
        assert.equal("", "");
    });
});
describe("getCheckoutTotal should work", function() {
    it("should", function(){
        assert.equal("", "");
    });
});
describe("getCheckoutSubtotal should work", function() {
    it("should", function(){
        assert.equal("", "");
    });
});
describe("getTax should work", function() {
    it("should", function(){
        assert.equal("", "");
    });
});

describe("User workflow should work", function() {
    it("should", function(){
        assert.equal("", "");
    });
});

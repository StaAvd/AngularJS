angular.module('app').controller("MainController", function () {
    this.num1 = 0;
    this.num2 = 0;
    
    this.sum = function() { return num1 + num2 };
    this.product = function() { return num1 * num2 };
});
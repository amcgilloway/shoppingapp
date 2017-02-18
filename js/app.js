'use strict';


var shopApp = angular.module('AngularShop', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/shop', {
        templateUrl: 'partials/shop.htm',
        controller: shopController
      }).
      
      when('/basket', {
        templateUrl: 'partials/shoppingbasket.htm',
        controller: shopController
      }).
      otherwise({
          redirectTo: '/shop'
      });
}]);

shopApp.factory("DataService", function () {

    // create shop
    var myShop = new shop();

    // create shopping basket
    var mybasket = new shoppingbasket("AngularShop");

    // return data object with shop and basket
    return {
        shop: myShop,
        basket: mybasket
    };
});
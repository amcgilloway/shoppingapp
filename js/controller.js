'use strict';


function shopController($scope, $routeParams, DataService) {

    // get shop and basket from service
    $scope.shop = DataService.shop;
    $scope.basket = DataService.basket;

    // use routing to pick the selected product
    if ($routeParams.productCode != null) {
        $scope.product = $scope.store.getProduct($routeParams.productCode);
    }
}

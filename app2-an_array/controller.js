angular.module('arrayApp').controller("arrayController", function($scope, arraySrvc) {
    $scope.data = arraySrvc.myData;
});
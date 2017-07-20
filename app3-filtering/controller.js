angular.module('filtering').controller('filterControl', function($scope, filterSrvc) {
    $scope.data = filterSrvc.myData;
});
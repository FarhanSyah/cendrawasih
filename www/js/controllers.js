angular.module('starter.controllers', ['ion-datetime-picker'])
.controller('DashCtrl', function($scope ) {

    $scope.venues = [{name: 'one', age: 30 },{ name: 'two', age: 27 },{ name: 'three', age: 50 }];
    $scope.selectedItem = $scope.venues[0];
})
.controller('AccountCtrl', function($scope ) {})
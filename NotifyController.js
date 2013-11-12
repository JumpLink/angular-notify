angular.module('jumplink.notify').controller('NotifyController', function($scope, NotifyService) {
  $scope.close = function() {
    console.log("close in controller");
    NotifyService.hide();
  }
  $scope.notify = {};

  $scope.$watch(NotifyService.getNotify, function(newValue) {
    $scope.notify = newValue;
  });

});
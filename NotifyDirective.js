angular.module('jumplink.notify').directive("notify", [function () {
  return {
    restrict: "E",
    templateUrl: 'partials/notify.jade',
    controller: 'NotifyController'
  }
}]);
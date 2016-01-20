'use strict';

angular.module("CiscoSpark")
  .controller('AddTokenCtrl', function($scope, $uibModalInstance) {
    $scope.addToken = function(token) {
      $uibModalInstance.close(token);
    };

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  })

.controller("MainController", function(newTokenModal, $scope, $cookies, $window) {
  $scope.open = function() {
    newTokenModal();
  };

  $scope.logout = function() {
    $cookies.remove("token");
    $window.location.reload();
  };

  $scope.isLoggedIn = false;
  if ($cookies.get("token")) {
    $scope.isLoggedIn = true;
  }
});

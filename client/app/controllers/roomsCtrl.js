'use strict';

var app = angular.module("CiscoSpark");

app.controller('RoomsCtrl', function($scope, $uibModal, $log, RoomsService, MembershipsService) {

    function getRooms() {
      RoomsService.list(function(r) {
        console.log(r);
        $scope.rooms = r.items;
      });
    }

    getRooms();

    $scope.open = function(size) {

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'app/partials/addModalTmpl.html',
        controller: 'ModalInstanceCtrl',
        size: size
      });

      modalInstance.result.then(function(o) {
        RoomsService.create({
          title: o.newRoomName
        }, function(r) {
          console.log(r);
          getRooms();

          if(o.emails){
            // add membership
            MembershipsService.create({
              roomId: r.id,
              personEmail: o.emails
            });

          }
        });
      }, function() {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  })
  .controller('ModalInstanceCtrl', function($scope, $uibModalInstance) {

    $scope.createRoom = function(newRoomName, emails) {
      console.log(arguments);
      var o = {
        newRoomName: newRoomName,
        emails : emails
      }
      $uibModalInstance.close(o);
    };

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  });

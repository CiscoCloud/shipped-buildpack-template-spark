'use strict';

var app = angular.module("CiscoSpark");

app.controller('MessagesCtrl', function($scope, $stateParams, MessagesService) {

  function getMessages() {

    MessagesService.list({
      roomId: $stateParams.roomId
    }, function(r) {
      console.log(r);
      $scope.messages = r.items;
      var room = r.rooms_get;
      $scope.roomTitle = room ? room.title : "Selected Room";
    });
  }

  $stateParams.roomId && getMessages();

  $scope.sortMessages = function(message){
    return new Date(message.created).getTime();
  };
  $scope.deleteMessage = function(id) {
    MessagesService.remove({
      id: id,
    }, function() {
      getMessages();
    });
  };

  $scope.addMessage = function(message) {
    $scope.newMessage = "";
    MessagesService.create({
      roomId: $stateParams.roomId,
      text: message
    }, function() {
      getMessages();
    });
  };

});

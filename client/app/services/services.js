'use strict';

var app = angular.module("CiscoSpark");

app.factory("RoomsService", function($resource) {

  var url = "/rooms";
  return $resource(url + "/:roomId", {}, {
    list: {
      method: "GET",
      url: url + "/list"
    },
    get: {
      method: "GET",
      url: url + "/get"
    },
    create: {
      method: "POST",
      url: url + "/create"
    }
  });
});

app.factory("MessagesService", function($resource) {

  var url = "/messages";
  return $resource(url + "/:messageId", {}, {
    list: {
      method: "GET",
      url: url + "/list"
    },
    get: {
      method: "GET",
      url: url + "/get"
    },
    create: {
      method: "POST",
      url: url + "/create"
    },
    remove: {
      method: "DELETE",
      url: url + "/remove"
    }
  });
});



app.factory("MembershipsService", function($resource) {

  var url = "/memberships";
  return $resource(url + "/:membershipId", {}, {
    list: {
      method: "GET",
      url: url + "/list"
    },
    get: {
      method: "GET",
      url: url + "/get"
    },
    create: {
      method: "POST",
      url: url + "/create"
    },
    remove: {
      method: "DELETE",
      url: url + "/remove"
    }
  });
});

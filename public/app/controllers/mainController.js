
angular.module("CiscoSparkControllers",[])
	.controller("MainController",["$scope","$rootScope","$http",function($scope,$rootScope,$http){
		
		
		$scope.rooms = [];
		$http.get('https://api.ciscospark.com/v1/rooms', {
			headers: {
				"Authorization": 'Bearer MjM1YjcwM2MtNDVlZC00YjNlLThkNmItZDkzNzlmZTVlNTZkYjZmNzkwNTItMWE0'
			}
		  }).success(function(response){
			console.log(response);
			$scope.rooms = response.items;
		  });
		
		
		$scope.roomSearch = "";
		
		$scope.newRoomName = "";
		
		$scope.createRoom = function(newRoom){
			$scope.rooms.push({"name":newRoom});
		};
	}]);
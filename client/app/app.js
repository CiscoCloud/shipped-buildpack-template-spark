'use strict';

angular.module("CiscoSpark", ['ui.bootstrap', 'ngResource', 'ui.router', 'ngMessages',
    'ngCookies'
  ])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'app/partials/homeTmpl.html'
      })
      .state('index.login', {
        url: 'login',
        template: 'Login'
      })
      .state('index.messages', {
        url: 'messages/:roomId',
        templateUrl: 'app/partials/messagesTmpl.html'
      });

    $httpProvider.interceptors.push('authInterceptor');
  })
  .factory('authInterceptor', function($rootScope, $q) {
    return {
      // Add authorization token to headers
      request: function(config) {
        // console.log($cookieStore.get('token'));
        //if ($cookieStore.get('token')) {
        //  config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        //}
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if (response.status === 401) {
          // $location.path('/login');
          // $state.go('/login');

          // remove any stale tokens
          // $cookieStore.remove('token');

          return $q.reject(response);
        } else {
          return $q.reject(response);
        }
      }
    };
  })

.run(function($rootScope, $state, $cookies, newTokenModal) {
    // console.log("r : " + $cookieStore.get("token"));
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      console.log(arguments);
      if (!$cookies.get("token")) {
        event.preventDefault();
        newTokenModal();
      }
    });
  })
  .service('newTokenModal', function($uibModal, $cookies, $log, $window) {
    return function() {
      var instance = $uibModal.open({
        templateUrl: 'app/partials/tokenTmpl.html',
        controller: 'AddTokenCtrl'
      });

      return instance.result.then(function(token) {
        $cookies.put("token", token);
        $window.location.reload();

      }, function() {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  });
